import {
  App,
  Component,
  ItemView,
  MarkdownRenderer,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  WorkspaceLeaf,
} from "obsidian";
import { CHEATSHEET } from "./cheatsheet-data";

const VIEW_TYPE = "md-syntax-cheatsheet-view";

type OpenLocation = "right" | "left" | "tab";

interface CheatSheetSettings {
  livePreview: boolean;
  openLocation: OpenLocation;
  clickToCopy: boolean;
  showSearch: boolean;
  previewFontSize: number;
  statusBarToggle: boolean;
}

const DEFAULT_SETTINGS: CheatSheetSettings = {
  livePreview: true,
  openLocation: "right",
  clickToCopy: true,
  showSearch: true,
  previewFontSize: 14,
  statusBarToggle: false,
};

export default class MarkdownCheatSheetPlugin extends Plugin {
  settings: CheatSheetSettings = DEFAULT_SETTINGS;
  private ribbonEl: HTMLElement | null = null;
  private statusBarEl: HTMLElement | null = null;

  async onload(): Promise<void> {
    await this.loadSettings();

    this.registerView(VIEW_TYPE, (leaf) => new CheatSheetView(leaf, this));

    this.ribbonEl = this.addRibbonIcon(
      "book-open",
      "Markdown 语法对照表（点击显示 / 隐藏）",
      () => {
        void this.toggleCheatSheet();
      }
    );
    this.ribbonEl.addClass("mds-ribbon");

    this.updateStatusBar();
    this.updateActiveState();

    this.addCommand({
      id: "toggle-markdown-cheatsheet",
      name: "切换 Markdown 语法对照表（侧边栏）",
      callback: () => {
        void this.toggleCheatSheet();
      },
    });

    this.addCommand({
      id: "open-markdown-cheatsheet-modal",
      name: "在弹窗中查看 Markdown 语法对照表",
      callback: () => {
        new CheatSheetModal(this.app, this).open();
      },
    });

    this.addSettingTab(new CheatSheetSettingTab(this.app, this));

    this.registerEvent(
      this.app.workspace.on("layout-change", () => this.updateActiveState())
    );
  }

  onunload(): void {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE);
    this.statusBarEl?.remove();
    this.statusBarEl = null;
  }

  /** 开关：已打开则关闭，否则在设置的区域里打开 */
  async toggleCheatSheet(): Promise<void> {
    const { workspace } = this.app;
    const existing = workspace.getLeavesOfType(VIEW_TYPE);

    if (existing.length > 0) {
      existing.forEach((leaf) => leaf.detach());
      return;
    }

    let leaf: WorkspaceLeaf | null = null;
    switch (this.settings.openLocation) {
      case "left":
        leaf = workspace.getLeftLeaf(false);
        break;
      case "tab":
        leaf = workspace.getLeaf("tab");
        break;
      default:
        leaf = workspace.getRightLeaf(false);
    }
    if (!leaf) {
      leaf = workspace.getLeaf("tab");
    }

    await leaf.setViewState({ type: VIEW_TYPE, active: true });
    void workspace.revealLeaf(leaf);
  }

  /** 让工具栏开关 / 状态栏显示当前是否处于开启状态 */
  updateActiveState(): void {
    const active = this.app.workspace.getLeavesOfType(VIEW_TYPE).length > 0;
    this.ribbonEl?.toggleClass("is-active", active);
    this.statusBarEl?.toggleClass("is-active", active);
  }

  updateStatusBar(): void {
    if (this.settings.statusBarToggle && !this.statusBarEl) {
      const el = this.addStatusBarItem();
      el.addClass("mds-statusbar");
      el.setText("MD 语法");
      this.registerDomEvent(el, "click", () => {
        void this.toggleCheatSheet();
      });
      this.statusBarEl = el;
    } else if (!this.settings.statusBarToggle && this.statusBarEl) {
      this.statusBarEl.remove();
      this.statusBarEl = null;
    }
    this.updateActiveState();
  }

  /** 设置变更后重绘所有已打开的对照表面板 */
  refreshViews(): void {
    this.app.workspace.getLeavesOfType(VIEW_TYPE).forEach((leaf) => {
      const view = leaf.view;
      if (view instanceof CheatSheetView) {
        void view.render();
      }
    });
  }

  async loadSettings(): Promise<void> {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }
}

export class CheatSheetView extends ItemView {
  plugin: MarkdownCheatSheetPlugin;

  constructor(leaf: WorkspaceLeaf, plugin: MarkdownCheatSheetPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType(): string {
    return VIEW_TYPE;
  }

  getDisplayText(): string {
    return "Markdown 语法对照表";
  }

  getIcon(): string {
    return "book-open";
  }

  async onOpen(): Promise<void> {
    await this.render();
  }

  async render(): Promise<void> {
    await renderCheatSheet(this.plugin, this.contentEl, this);
  }
}

class CheatSheetModal extends Modal {
  plugin: MarkdownCheatSheetPlugin;
  private renderComponent = new Component();

  constructor(app: App, plugin: MarkdownCheatSheetPlugin) {
    super(app);
    this.plugin = plugin;
  }

  async onOpen(): Promise<void> {
    this.renderComponent.load();
    this.modalEl.addClass("mds-modal");
    this.titleEl.setText("Markdown 语法对照表");
    await renderCheatSheet(this.plugin, this.contentEl, this.renderComponent);
  }

  onClose(): void {
    this.contentEl.empty();
    this.renderComponent.unload();
  }
}

async function copySyntax(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    const firstLine = text.split("\n")[0];
    new Notice(`已复制：${firstLine}`);
  } catch (error) {
    new Notice("复制失败，请手动选中文本");
  }
}

/** 侧边栏面板与弹窗共用的渲染逻辑 */
async function renderCheatSheet(
  plugin: MarkdownCheatSheetPlugin,
  container: HTMLElement,
  component: Component
): Promise<void> {
  const settings = plugin.settings;

  container.empty();
  container.addClass("mds-root");
  container.style.setProperty("--mds-preview-size", `${settings.previewFontSize}px`);

  const header = container.createDiv({ cls: "mds-header" });
  const countEl = header.createDiv({ cls: "mds-count" });

  let applyFilter = (query: string) => {
    void query;
  };

  if (settings.showSearch) {
    const input = header.createEl("input", {
      cls: "mds-search",
      attr: { type: "text", placeholder: "搜索语法或说明，例如：表格 / callout / 脚注" },
    });
    component.registerDomEvent(input, "input", (evt) => {
      applyFilter((evt.target as HTMLInputElement).value);
    });
  }

  const list = container.createDiv({ cls: "mds-list" });

  // 滚动时给固定头部加一条分隔线 / 阴影
  component.registerDomEvent(list, "scroll", () => {
    header.toggleClass("is-scrolled", list.scrollTop > 4);
  });

  const rows: { el: HTMLElement; text: string }[] = [];
  const sections: HTMLElement[] = [];
  let total = 0;

  for (const category of CHEATSHEET) {
    const sectionEl = list.createDiv({ cls: "mds-section" });
    sections.push(sectionEl);
    sectionEl.createEl("h4", { cls: "mds-category", text: category.name });

    const table = sectionEl.createEl("table", { cls: "mds-table" });
    const headRow = table.createTHead().insertRow();
    headRow.createEl("th", { cls: "mds-th-syntax", text: "语法 Syntax" });
    headRow.createEl("th", { cls: "mds-th-preview", text: "渲染效果 Preview" });
    const tbody = table.createTBody();

    for (const item of category.items) {
      total++;
      const tr = tbody.insertRow();
      tr.addClass("mds-row");
      rows.push({
        el: tr,
        text: `${item.syntax} ${item.desc}`.toLowerCase(),
      });

      const syntaxCell = tr.insertCell();
      syntaxCell.addClass("mds-cell-syntax");
      syntaxCell.createEl("code", { text: item.syntax });
      syntaxCell.createDiv({ cls: "mds-desc", text: item.desc });
      if (settings.clickToCopy) {
        syntaxCell.addClass("is-copyable");
        syntaxCell.setAttribute("aria-label", "点击复制这段语法");
        component.registerDomEvent(syntaxCell, "click", () => {
          void copySyntax(item.syntax);
        });
      }

      const previewCell = tr.insertCell();
      previewCell.addClass("mds-cell-preview");

      if (item.plain !== undefined) {
        previewCell.createDiv({ cls: "mds-plain", text: item.plain });
      } else if (settings.livePreview) {
        const target = previewCell.createDiv({ cls: "markdown-rendered mds-preview-inner" });
        try {
          await MarkdownRenderer.render(
            plugin.app,
            item.preview ?? item.syntax,
            target,
            "",
            component
          );
        } catch (error) {
          target.empty();
          target.createEl("code", { cls: "mds-preview-disabled", text: item.preview ?? item.syntax });
        }
      } else {
        previewCell.createEl("code", {
          cls: "mds-preview-disabled",
          text: item.preview ?? item.syntax,
        });
      }
    }
  }

  applyFilter = (raw: string) => {
    const query = raw.trim().toLowerCase();
    let visible = 0;

    for (const row of rows) {
      const hit = query === "" || row.text.includes(query);
      row.el.toggleClass("mds-hidden", !hit);
      if (hit) visible++;
    }

    for (const sectionEl of sections) {
      const hasVisibleRow = sectionEl.querySelectorAll(".mds-row:not(.mds-hidden)").length > 0;
      sectionEl.toggleClass("mds-hidden", !hasVisibleRow);
    }

    countEl.setText(query ? `匹配 ${visible} / ${total} 条` : `共 ${total} 条语法`);
  };

  applyFilter("");
}

class CheatSheetSettingTab extends PluginSettingTab {
  plugin: MarkdownCheatSheetPlugin;

  constructor(app: App, plugin: MarkdownCheatSheetPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Markdown 语法对照表" });

    new Setting(containerEl)
      .setName("显示实时预览")
      .setDesc("渲染每条语法的真实效果；关闭后只显示说明文字，加载更快。")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.livePreview).onChange(async (value) => {
          this.plugin.settings.livePreview = value;
          await this.plugin.saveSettings();
          this.plugin.refreshViews();
        })
      );

    new Setting(containerEl)
      .setName("点击语法即可复制")
      .setDesc("点击左侧代码块，把语法复制到剪贴板。")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.clickToCopy).onChange(async (value) => {
          this.plugin.settings.clickToCopy = value;
          await this.plugin.saveSettings();
          this.plugin.refreshViews();
        })
      );

    new Setting(containerEl)
      .setName("显示搜索框")
      .setDesc("在面板顶部提供关键词过滤。")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.showSearch).onChange(async (value) => {
          this.plugin.settings.showSearch = value;
          await this.plugin.saveSettings();
          this.plugin.refreshViews();
        })
      );

    new Setting(containerEl)
      .setName("打开位置")
      .setDesc("点击工具栏开关时，对照表出现在哪里。")
      .addDropdown((dropdown) =>
        dropdown
          .addOption("right", "右侧边栏")
          .addOption("left", "左侧边栏")
          .addOption("tab", "主区域新标签页")
          .setValue(this.plugin.settings.openLocation)
          .onChange(async (value) => {
            this.plugin.settings.openLocation = value as OpenLocation;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("预览字号")
      .setDesc("右侧渲染区域的字体大小（像素）。")
      .addSlider((slider) =>
        slider
          .setLimits(11, 20, 1)
          .setValue(this.plugin.settings.previewFontSize)
          .setDynamicTooltip()
          .onChange(async (value) => {
            this.plugin.settings.previewFontSize = value;
            await this.plugin.saveSettings();
            this.plugin.refreshViews();
          })
      );

    new Setting(containerEl)
      .setName("状态栏开关")
      .setDesc("在底部状态栏也放一个开关按钮。")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.statusBarToggle).onChange(async (value) => {
          this.plugin.settings.statusBarToggle = value;
          await this.plugin.saveSettings();
          this.plugin.updateStatusBar();
        })
      );

    containerEl.createEl("p", {
      cls: "setting-item-description",
      text: "提示：工具栏图标在开启时会高亮显示，再次点击即可关闭对照表。",
    });
  }
}
