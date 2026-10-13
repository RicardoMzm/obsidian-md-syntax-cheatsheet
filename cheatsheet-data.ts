export interface CheatItem {
  /** 代码列里显示的原始语法 */
  syntax: string;
  /** 中文说明 */
  desc: string;
  /** 预览列实际渲染的 Markdown；不写则直接渲染 syntax */
  preview?: string;
  /** 不在预览列渲染，直接显示这段纯文本 */
  plain?: string;
}

export interface CheatCategory {
  name: string;
  items: CheatItem[];
}

export const CHEATSHEET: CheatCategory[] = [
  {
    name: "标题 Headings",
    items: [
      { syntax: "# 一级标题", desc: "一级标题（H1），# 与文字之间要有空格" },
      { syntax: "## 二级标题", desc: "二级标题（H2）" },
      { syntax: "### 三级标题", desc: "三级标题（H3），最多支持六级" },
      { syntax: "###### 六级标题", desc: "六级标题（H6）" },
      {
        syntax: "标题文字\n========",
        desc: "Setext 写法：下方 === 表示一级标题",
        preview: "标题文字\n========\n",
      },
      {
        syntax: "标题文字\n--------",
        desc: "Setext 写法：下方 --- 表示二级标题",
        preview: "标题文字\n--------\n",
      },
    ],
  },
  {
    name: "文本样式 Formatting",
    items: [
      { syntax: "**粗体文字**", desc: "加粗：左右各两个星号（也可用 __粗体__）" },
      { syntax: "*斜体文字*", desc: "斜体：左右各一个星号（也可用 _斜体_）" },
      { syntax: "***粗斜体***", desc: "同时加粗与倾斜" },
      { syntax: "~~删除线~~", desc: "删除线（两侧各两个波浪号）" },
      { syntax: "==高亮文字==", desc: "高亮标记（Obsidian 支持，两侧各两个等号）" },
      { syntax: "`行内代码`", desc: "行内代码，用成对反引号包裹" },
      { syntax: "H~2~O", desc: "下标 ~x~（部分主题/版本支持）" },
      { syntax: "X^2^", desc: "上标 ^x^（部分主题/版本支持）" },
      { syntax: "<u>下划线</u>", desc: "HTML 标签：阅读视图生效" },
      { syntax: "<small>小号文字</small>", desc: "HTML 标签：缩小字号" },
      { syntax: "<br>", desc: "HTML 标签：强制换行" },
      { syntax: "\\*这是普通星号\\*", desc: "反斜杠转义，按原样显示特殊字符" },
      { syntax: "**粗体**与*斜体*混用", desc: "行内样式可以任意组合" },
    ],
  },
  {
    name: "列表 Lists",
    items: [
      { syntax: "- 无序列表项", desc: "无序列表：-、*、+ 三种符号都可以" },
      { syntax: "1. 有序列表项", desc: "有序列表：数字加点" },
      { syntax: "1) 有序列表项", desc: "有序列表：数字加右括号也支持" },
      {
        syntax: "- 第一层\n\t- 第二层\n\t\t- 第三层",
        desc: "嵌套层级：用 Tab 或 4 个空格缩进",
      },
      { syntax: "- [ ] 待办事项", desc: "未完成的任务列表" },
      { syntax: "- [x] 已完成事项", desc: "已勾选的任务列表（阅读视图中可点击）" },
      {
        syntax: "- 列表项\n  \n  缩进两个空格可以续写第二段",
        desc: "列表项内换段：中间空一行并保持缩进",
        preview: "- 列表项\n\n  缩进两个空格可以续写第二段\n",
      },
    ],
  },
  {
    name: "引用与标注 Quotes & Callouts",
    items: [
      { syntax: "> 这是一段引用", desc: "引用块：行首加 > 和空格" },
      { syntax: "> 外层引用\n>> 嵌套引用", desc: "多层嵌套：叠加 > 符号" },
      {
        syntax: "> [!note] 标题\n> 说明文字",
        desc: "Callout 标注块，类型可换成 tip / info / success / question / warning / failure / danger / bug / example / quote",
      },
      {
        syntax: "> [!warning]- 可折叠（默认收起）\n> 标题后面的 - 表示默认折叠",
        desc: "标题后加 - 默认收起，加 + 默认展开",
      },
      {
        syntax: "> [!tip]+ 可折叠（默认展开）\n> 标题后面的 + 表示默认展开",
        desc: "可点击标题展开/收起",
      },
      { syntax: "> 引用中也可以 **加粗**、写 `代码`", desc: "引用块内可正常使用行内语法" },
    ],
  },
  {
    name: "链接 Links",
    items: [
      { syntax: "[链接文字](https://example.com)", desc: "外部链接：方括号写文字，圆括号写地址" },
      {
        syntax: "[链接文字](https://example.com \"悬停提示\")",
        desc: "带标题的链接，鼠标悬停显示提示",
      },
      { syntax: "<https://example.com>", desc: "尖括号自动链接，直接粘贴网址也可" },
      { syntax: "[[内部链接]]", desc: "Obsidian 双链：链接到库内笔记" },
      { syntax: "[[笔记名称|显示文字]]", desc: "双链别名：竖线后面是显示出来的文字" },
      { syntax: "[[笔记名称#某标题]]", desc: "链接到目标笔记中的某个标题" },
      { syntax: "[[笔记名称#^块ID]]", desc: "链接到目标笔记中的某个块" },
      { syntax: "[^1]", desc: "脚注引用标记（放在正文里）", preview: "正文中的脚注引用[^1]\n\n[^1]: 这是脚注的定义内容。\n" },
      { syntax: "^[行内脚注]", desc: "行内脚注写法", preview: "正文中的行内脚注^[直接写在方括号里的注释]" },
    ],
  },
  {
    name: "图片与嵌入 Images & Embeds",
    items: [
      { syntax: "![替代文字](图片地址.png)", desc: "标准 Markdown 图片语法" },
      { syntax: "![[图片.png]]", desc: "Obsidian 图片嵌入（推荐，支持库内相对路径）" },
      { syntax: "![[图片.png|200]]", desc: "在竖线后写数字表示宽度（像素）" },
      { syntax: "![[图片.png|200x150]]", desc: "同时指定宽和高" },
      { syntax: "![[另一篇笔记]]", desc: "嵌入整篇笔记的内容" },
      { syntax: "![[另一篇笔记#某个标题]]", desc: "只嵌入目标笔记的某个标题段落" },
      { syntax: "![[文档.pdf#page=3]]", desc: "嵌入 PDF 的第 3 页" },
      { syntax: "![[音频.mp3]]", desc: "嵌入音频文件，可点击播放" },
    ],
  },
  {
    name: "代码 Code",
    items: [
      { syntax: "`行内代码`", desc: "行内代码：单个反引号包裹" },
      { syntax: "``包含`反引号``", desc: "内容本身有反引号时，外层用两个反引号" },
      { syntax: "```\n代码块\n```", desc: "围栏代码块：三个反引号，可以不写语言" },
      { syntax: "```js\nconsole.log(\"Hello\")\n```", desc: "标注语言后有语法高亮" },
      { syntax: "```python\nprint(\"Hello\")\n```", desc: "常用的 python / js / ts / bash / json / yaml / css 等" },
      {
        syntax: "```mermaid\ngraph LR\n  A[开始] --> B[结束]\n```",
        desc: "Mermaid 图表代码块，Obsidian 内置渲染",
      },
    ],
  },
  {
    name: "表格 Tables",
    items: [
      {
        syntax: "| 表头 1 | 表头 2 |\n| --- | --- |\n| 内容 1 | 内容 2 |",
        desc: "基础表格：第二行是分隔行，必须有",
      },
      {
        syntax: "| 左对齐 | 居中 | 右对齐 |\n| :--- | :---: | ---: |\n| A | B | C |",
        desc: "冒号控制对齐：左 :--- / 中 :---: / 右 ---:",
      },
      {
        syntax: "| 单元格里的竖线 | A \\| B |\n| --- | --- |",
        desc: "单元格中要写竖线时用反斜杠转义",
        preview: "| 单元格里的竖线 | A \\| B |\n| --- | --- |\n| 示例 | 结果 |\n",
      },
    ],
  },
  {
    name: "分隔线与排版 Layout",
    items: [
      { syntax: "---", desc: "分隔线：单独一行写三个及以上的减号", preview: "上面的内容\n\n---\n\n下面的内容\n" },
      { syntax: "***", desc: "分隔线：星号或下划线同样可以", preview: "上面的内容\n\n***\n\n下面的内容\n" },
      { syntax: "第一行（行尾两个空格）  \n第二行", desc: "行尾敲两个空格再回车，可强制换行", preview: "第一行（行尾两个空格）  \n第二行\n" },
      { syntax: "(空行)", desc: "段与段之间空一行，才会成为独立段落", plain: "空行用于分隔段落" },
      { syntax: "<!-- 注释 -->", desc: "HTML 注释，阅读视图里看不到", plain: "（阅读视图中不显示）" },
    ],
  },
  {
    name: "数学公式 Math",
    items: [
      { syntax: "$E = mc^2$", desc: "行内公式：单个美元符号包裹（LaTeX 语法）" },
      { syntax: "$$\n\\int_0^1 x^2 \\, dx\n$$", desc: "块级公式：双美元符号单独成行" },
      { syntax: "$\\frac{a}{b}$", desc: "分数、上下标、矩阵等标准 LaTeX 都支持" },
      { syntax: "$\\sum_{i=1}^{n} i$", desc: "求和、希腊字母、根号等" },
    ],
  },
  {
    name: "Obsidian 特有语法 Obsidian Only",
    items: [
      { syntax: "%%这是注释%%", desc: "Obsidian 注释：编辑时可见，阅读视图不显示", plain: "（阅读视图中不显示）" },
      { syntax: "#标签  #父标签/子标签", desc: "标签：井号开头，不能有空格", preview: "#标签 #父标签/子标签" },
      {
        syntax: "---\ntitle: 文档标题\ntags:\n  - demo\n---",
        desc: "属性（Frontmatter）：必须放在文件最开头",
        plain: "（文件属性区，不参与正文渲染）",
      },
      { syntax: "^块标识符", desc: "写在段落末尾，为这个块命名，方便被引用" },
      { syntax: "==高亮==", desc: "高亮标记（Obsidian 扩展语法）" },
      { syntax: "- [ ] 任务", desc: "任务清单，可在阅读视图直接勾选" },
      { syntax: "> [!quote] 引用型标注", desc: "Callout 的 quote 类型，适合摘录原文" },
      { syntax: "![[笔记#^块标识符]]", desc: "嵌入目标笔记中某个块的内容", plain: "（嵌入内容会直接显示在正文里）" },
      { syntax: "[[#当前笔记的某标题]]", desc: "只写 # 开头，表示链接到本篇笔记内的标题" },
      {
        syntax: "```query\npath:\"文件夹\" tag:#标签\n```",
        desc: "查询代码块：把搜索结果直接嵌进笔记里",
        plain: "（搜索结果列表会直接渲染在笔记里）",
      },
    ],
  },
];
