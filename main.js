/*
Markdown Syntax Cheatsheet — Obsidian plugin.
This file is generated from main.ts by esbuild. Do not edit it directly.
*/
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  CheatSheetView: () => CheatSheetView,
  default: () => MarkdownCheatSheetPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// cheatsheet-data.ts
var CHEATSHEET = [
  {
    name: "\u6807\u9898 Headings",
    items: [
      { syntax: "# \u4E00\u7EA7\u6807\u9898", desc: "\u4E00\u7EA7\u6807\u9898\uFF08H1\uFF09\uFF0C# \u4E0E\u6587\u5B57\u4E4B\u95F4\u8981\u6709\u7A7A\u683C" },
      { syntax: "## \u4E8C\u7EA7\u6807\u9898", desc: "\u4E8C\u7EA7\u6807\u9898\uFF08H2\uFF09" },
      { syntax: "### \u4E09\u7EA7\u6807\u9898", desc: "\u4E09\u7EA7\u6807\u9898\uFF08H3\uFF09\uFF0C\u6700\u591A\u652F\u6301\u516D\u7EA7" },
      { syntax: "###### \u516D\u7EA7\u6807\u9898", desc: "\u516D\u7EA7\u6807\u9898\uFF08H6\uFF09" },
      {
        syntax: "\u6807\u9898\u6587\u5B57\n========",
        desc: "Setext \u5199\u6CD5\uFF1A\u4E0B\u65B9 === \u8868\u793A\u4E00\u7EA7\u6807\u9898",
        preview: "\u6807\u9898\u6587\u5B57\n========\n"
      },
      {
        syntax: "\u6807\u9898\u6587\u5B57\n--------",
        desc: "Setext \u5199\u6CD5\uFF1A\u4E0B\u65B9 --- \u8868\u793A\u4E8C\u7EA7\u6807\u9898",
        preview: "\u6807\u9898\u6587\u5B57\n--------\n"
      }
    ]
  },
  {
    name: "\u6587\u672C\u6837\u5F0F Formatting",
    items: [
      { syntax: "**\u7C97\u4F53\u6587\u5B57**", desc: "\u52A0\u7C97\uFF1A\u5DE6\u53F3\u5404\u4E24\u4E2A\u661F\u53F7\uFF08\u4E5F\u53EF\u7528 __\u7C97\u4F53__\uFF09" },
      { syntax: "*\u659C\u4F53\u6587\u5B57*", desc: "\u659C\u4F53\uFF1A\u5DE6\u53F3\u5404\u4E00\u4E2A\u661F\u53F7\uFF08\u4E5F\u53EF\u7528 _\u659C\u4F53_\uFF09" },
      { syntax: "***\u7C97\u659C\u4F53***", desc: "\u540C\u65F6\u52A0\u7C97\u4E0E\u503E\u659C" },
      { syntax: "~~\u5220\u9664\u7EBF~~", desc: "\u5220\u9664\u7EBF\uFF08\u4E24\u4FA7\u5404\u4E24\u4E2A\u6CE2\u6D6A\u53F7\uFF09" },
      { syntax: "==\u9AD8\u4EAE\u6587\u5B57==", desc: "\u9AD8\u4EAE\u6807\u8BB0\uFF08Obsidian \u652F\u6301\uFF0C\u4E24\u4FA7\u5404\u4E24\u4E2A\u7B49\u53F7\uFF09" },
      { syntax: "`\u884C\u5185\u4EE3\u7801`", desc: "\u884C\u5185\u4EE3\u7801\uFF0C\u7528\u6210\u5BF9\u53CD\u5F15\u53F7\u5305\u88F9" },
      { syntax: "H~2~O", desc: "\u4E0B\u6807 ~x~\uFF08\u90E8\u5206\u4E3B\u9898/\u7248\u672C\u652F\u6301\uFF09" },
      { syntax: "X^2^", desc: "\u4E0A\u6807 ^x^\uFF08\u90E8\u5206\u4E3B\u9898/\u7248\u672C\u652F\u6301\uFF09" },
      { syntax: "<u>\u4E0B\u5212\u7EBF</u>", desc: "HTML \u6807\u7B7E\uFF1A\u9605\u8BFB\u89C6\u56FE\u751F\u6548" },
      { syntax: "<small>\u5C0F\u53F7\u6587\u5B57</small>", desc: "HTML \u6807\u7B7E\uFF1A\u7F29\u5C0F\u5B57\u53F7" },
      { syntax: "<br>", desc: "HTML \u6807\u7B7E\uFF1A\u5F3A\u5236\u6362\u884C" },
      { syntax: "\\*\u8FD9\u662F\u666E\u901A\u661F\u53F7\\*", desc: "\u53CD\u659C\u6760\u8F6C\u4E49\uFF0C\u6309\u539F\u6837\u663E\u793A\u7279\u6B8A\u5B57\u7B26" },
      { syntax: "**\u7C97\u4F53**\u4E0E*\u659C\u4F53*\u6DF7\u7528", desc: "\u884C\u5185\u6837\u5F0F\u53EF\u4EE5\u4EFB\u610F\u7EC4\u5408" }
    ]
  },
  {
    name: "\u5217\u8868 Lists",
    items: [
      { syntax: "- \u65E0\u5E8F\u5217\u8868\u9879", desc: "\u65E0\u5E8F\u5217\u8868\uFF1A-\u3001*\u3001+ \u4E09\u79CD\u7B26\u53F7\u90FD\u53EF\u4EE5" },
      { syntax: "1. \u6709\u5E8F\u5217\u8868\u9879", desc: "\u6709\u5E8F\u5217\u8868\uFF1A\u6570\u5B57\u52A0\u70B9" },
      { syntax: "1) \u6709\u5E8F\u5217\u8868\u9879", desc: "\u6709\u5E8F\u5217\u8868\uFF1A\u6570\u5B57\u52A0\u53F3\u62EC\u53F7\u4E5F\u652F\u6301" },
      {
        syntax: "- \u7B2C\u4E00\u5C42\n	- \u7B2C\u4E8C\u5C42\n		- \u7B2C\u4E09\u5C42",
        desc: "\u5D4C\u5957\u5C42\u7EA7\uFF1A\u7528 Tab \u6216 4 \u4E2A\u7A7A\u683C\u7F29\u8FDB"
      },
      { syntax: "- [ ] \u5F85\u529E\u4E8B\u9879", desc: "\u672A\u5B8C\u6210\u7684\u4EFB\u52A1\u5217\u8868" },
      { syntax: "- [x] \u5DF2\u5B8C\u6210\u4E8B\u9879", desc: "\u5DF2\u52FE\u9009\u7684\u4EFB\u52A1\u5217\u8868\uFF08\u9605\u8BFB\u89C6\u56FE\u4E2D\u53EF\u70B9\u51FB\uFF09" },
      {
        syntax: "- \u5217\u8868\u9879\n  \n  \u7F29\u8FDB\u4E24\u4E2A\u7A7A\u683C\u53EF\u4EE5\u7EED\u5199\u7B2C\u4E8C\u6BB5",
        desc: "\u5217\u8868\u9879\u5185\u6362\u6BB5\uFF1A\u4E2D\u95F4\u7A7A\u4E00\u884C\u5E76\u4FDD\u6301\u7F29\u8FDB",
        preview: "- \u5217\u8868\u9879\n\n  \u7F29\u8FDB\u4E24\u4E2A\u7A7A\u683C\u53EF\u4EE5\u7EED\u5199\u7B2C\u4E8C\u6BB5\n"
      }
    ]
  },
  {
    name: "\u5F15\u7528\u4E0E\u6807\u6CE8 Quotes & Callouts",
    items: [
      { syntax: "> \u8FD9\u662F\u4E00\u6BB5\u5F15\u7528", desc: "\u5F15\u7528\u5757\uFF1A\u884C\u9996\u52A0 > \u548C\u7A7A\u683C" },
      { syntax: "> \u5916\u5C42\u5F15\u7528\n>> \u5D4C\u5957\u5F15\u7528", desc: "\u591A\u5C42\u5D4C\u5957\uFF1A\u53E0\u52A0 > \u7B26\u53F7" },
      {
        syntax: "> [!note] \u6807\u9898\n> \u8BF4\u660E\u6587\u5B57",
        desc: "Callout \u6807\u6CE8\u5757\uFF0C\u7C7B\u578B\u53EF\u6362\u6210 tip / info / success / question / warning / failure / danger / bug / example / quote"
      },
      {
        syntax: "> [!warning]- \u53EF\u6298\u53E0\uFF08\u9ED8\u8BA4\u6536\u8D77\uFF09\n> \u6807\u9898\u540E\u9762\u7684 - \u8868\u793A\u9ED8\u8BA4\u6298\u53E0",
        desc: "\u6807\u9898\u540E\u52A0 - \u9ED8\u8BA4\u6536\u8D77\uFF0C\u52A0 + \u9ED8\u8BA4\u5C55\u5F00"
      },
      {
        syntax: "> [!tip]+ \u53EF\u6298\u53E0\uFF08\u9ED8\u8BA4\u5C55\u5F00\uFF09\n> \u6807\u9898\u540E\u9762\u7684 + \u8868\u793A\u9ED8\u8BA4\u5C55\u5F00",
        desc: "\u53EF\u70B9\u51FB\u6807\u9898\u5C55\u5F00/\u6536\u8D77"
      },
      { syntax: "> \u5F15\u7528\u4E2D\u4E5F\u53EF\u4EE5 **\u52A0\u7C97**\u3001\u5199 `\u4EE3\u7801`", desc: "\u5F15\u7528\u5757\u5185\u53EF\u6B63\u5E38\u4F7F\u7528\u884C\u5185\u8BED\u6CD5" }
    ]
  },
  {
    name: "\u94FE\u63A5 Links",
    items: [
      { syntax: "[\u94FE\u63A5\u6587\u5B57](https://example.com)", desc: "\u5916\u90E8\u94FE\u63A5\uFF1A\u65B9\u62EC\u53F7\u5199\u6587\u5B57\uFF0C\u5706\u62EC\u53F7\u5199\u5730\u5740" },
      {
        syntax: '[\u94FE\u63A5\u6587\u5B57](https://example.com "\u60AC\u505C\u63D0\u793A")',
        desc: "\u5E26\u6807\u9898\u7684\u94FE\u63A5\uFF0C\u9F20\u6807\u60AC\u505C\u663E\u793A\u63D0\u793A"
      },
      { syntax: "<https://example.com>", desc: "\u5C16\u62EC\u53F7\u81EA\u52A8\u94FE\u63A5\uFF0C\u76F4\u63A5\u7C98\u8D34\u7F51\u5740\u4E5F\u53EF" },
      { syntax: "[[\u5185\u90E8\u94FE\u63A5]]", desc: "Obsidian \u53CC\u94FE\uFF1A\u94FE\u63A5\u5230\u5E93\u5185\u7B14\u8BB0" },
      { syntax: "[[\u7B14\u8BB0\u540D\u79F0|\u663E\u793A\u6587\u5B57]]", desc: "\u53CC\u94FE\u522B\u540D\uFF1A\u7AD6\u7EBF\u540E\u9762\u662F\u663E\u793A\u51FA\u6765\u7684\u6587\u5B57" },
      { syntax: "[[\u7B14\u8BB0\u540D\u79F0#\u67D0\u6807\u9898]]", desc: "\u94FE\u63A5\u5230\u76EE\u6807\u7B14\u8BB0\u4E2D\u7684\u67D0\u4E2A\u6807\u9898" },
      { syntax: "[[\u7B14\u8BB0\u540D\u79F0#^\u5757ID]]", desc: "\u94FE\u63A5\u5230\u76EE\u6807\u7B14\u8BB0\u4E2D\u7684\u67D0\u4E2A\u5757" },
      { syntax: "[^1]", desc: "\u811A\u6CE8\u5F15\u7528\u6807\u8BB0\uFF08\u653E\u5728\u6B63\u6587\u91CC\uFF09", preview: "\u6B63\u6587\u4E2D\u7684\u811A\u6CE8\u5F15\u7528[^1]\n\n[^1]: \u8FD9\u662F\u811A\u6CE8\u7684\u5B9A\u4E49\u5185\u5BB9\u3002\n" },
      { syntax: "^[\u884C\u5185\u811A\u6CE8]", desc: "\u884C\u5185\u811A\u6CE8\u5199\u6CD5", preview: "\u6B63\u6587\u4E2D\u7684\u884C\u5185\u811A\u6CE8^[\u76F4\u63A5\u5199\u5728\u65B9\u62EC\u53F7\u91CC\u7684\u6CE8\u91CA]" }
    ]
  },
  {
    name: "\u56FE\u7247\u4E0E\u5D4C\u5165 Images & Embeds",
    items: [
      { syntax: "![\u66FF\u4EE3\u6587\u5B57](\u56FE\u7247\u5730\u5740.png)", desc: "\u6807\u51C6 Markdown \u56FE\u7247\u8BED\u6CD5" },
      { syntax: "![[\u56FE\u7247.png]]", desc: "Obsidian \u56FE\u7247\u5D4C\u5165\uFF08\u63A8\u8350\uFF0C\u652F\u6301\u5E93\u5185\u76F8\u5BF9\u8DEF\u5F84\uFF09" },
      { syntax: "![[\u56FE\u7247.png|200]]", desc: "\u5728\u7AD6\u7EBF\u540E\u5199\u6570\u5B57\u8868\u793A\u5BBD\u5EA6\uFF08\u50CF\u7D20\uFF09" },
      { syntax: "![[\u56FE\u7247.png|200x150]]", desc: "\u540C\u65F6\u6307\u5B9A\u5BBD\u548C\u9AD8" },
      { syntax: "![[\u53E6\u4E00\u7BC7\u7B14\u8BB0]]", desc: "\u5D4C\u5165\u6574\u7BC7\u7B14\u8BB0\u7684\u5185\u5BB9" },
      { syntax: "![[\u53E6\u4E00\u7BC7\u7B14\u8BB0#\u67D0\u4E2A\u6807\u9898]]", desc: "\u53EA\u5D4C\u5165\u76EE\u6807\u7B14\u8BB0\u7684\u67D0\u4E2A\u6807\u9898\u6BB5\u843D" },
      { syntax: "![[\u6587\u6863.pdf#page=3]]", desc: "\u5D4C\u5165 PDF \u7684\u7B2C 3 \u9875" },
      { syntax: "![[\u97F3\u9891.mp3]]", desc: "\u5D4C\u5165\u97F3\u9891\u6587\u4EF6\uFF0C\u53EF\u70B9\u51FB\u64AD\u653E" }
    ]
  },
  {
    name: "\u4EE3\u7801 Code",
    items: [
      { syntax: "`\u884C\u5185\u4EE3\u7801`", desc: "\u884C\u5185\u4EE3\u7801\uFF1A\u5355\u4E2A\u53CD\u5F15\u53F7\u5305\u88F9" },
      { syntax: "``\u5305\u542B`\u53CD\u5F15\u53F7``", desc: "\u5185\u5BB9\u672C\u8EAB\u6709\u53CD\u5F15\u53F7\u65F6\uFF0C\u5916\u5C42\u7528\u4E24\u4E2A\u53CD\u5F15\u53F7" },
      { syntax: "```\n\u4EE3\u7801\u5757\n```", desc: "\u56F4\u680F\u4EE3\u7801\u5757\uFF1A\u4E09\u4E2A\u53CD\u5F15\u53F7\uFF0C\u53EF\u4EE5\u4E0D\u5199\u8BED\u8A00" },
      { syntax: '```js\nconsole.log("Hello")\n```', desc: "\u6807\u6CE8\u8BED\u8A00\u540E\u6709\u8BED\u6CD5\u9AD8\u4EAE" },
      { syntax: '```python\nprint("Hello")\n```', desc: "\u5E38\u7528\u7684 python / js / ts / bash / json / yaml / css \u7B49" },
      {
        syntax: "```mermaid\ngraph LR\n  A[\u5F00\u59CB] --> B[\u7ED3\u675F]\n```",
        desc: "Mermaid \u56FE\u8868\u4EE3\u7801\u5757\uFF0CObsidian \u5185\u7F6E\u6E32\u67D3"
      }
    ]
  },
  {
    name: "\u8868\u683C Tables",
    items: [
      {
        syntax: "| \u8868\u5934 1 | \u8868\u5934 2 |\n| --- | --- |\n| \u5185\u5BB9 1 | \u5185\u5BB9 2 |",
        desc: "\u57FA\u7840\u8868\u683C\uFF1A\u7B2C\u4E8C\u884C\u662F\u5206\u9694\u884C\uFF0C\u5FC5\u987B\u6709"
      },
      {
        syntax: "| \u5DE6\u5BF9\u9F50 | \u5C45\u4E2D | \u53F3\u5BF9\u9F50 |\n| :--- | :---: | ---: |\n| A | B | C |",
        desc: "\u5192\u53F7\u63A7\u5236\u5BF9\u9F50\uFF1A\u5DE6 :--- / \u4E2D :---: / \u53F3 ---:"
      },
      {
        syntax: "| \u5355\u5143\u683C\u91CC\u7684\u7AD6\u7EBF | A \\| B |\n| --- | --- |",
        desc: "\u5355\u5143\u683C\u4E2D\u8981\u5199\u7AD6\u7EBF\u65F6\u7528\u53CD\u659C\u6760\u8F6C\u4E49",
        preview: "| \u5355\u5143\u683C\u91CC\u7684\u7AD6\u7EBF | A \\| B |\n| --- | --- |\n| \u793A\u4F8B | \u7ED3\u679C |\n"
      }
    ]
  },
  {
    name: "\u5206\u9694\u7EBF\u4E0E\u6392\u7248 Layout",
    items: [
      { syntax: "---", desc: "\u5206\u9694\u7EBF\uFF1A\u5355\u72EC\u4E00\u884C\u5199\u4E09\u4E2A\u53CA\u4EE5\u4E0A\u7684\u51CF\u53F7", preview: "\u4E0A\u9762\u7684\u5185\u5BB9\n\n---\n\n\u4E0B\u9762\u7684\u5185\u5BB9\n" },
      { syntax: "***", desc: "\u5206\u9694\u7EBF\uFF1A\u661F\u53F7\u6216\u4E0B\u5212\u7EBF\u540C\u6837\u53EF\u4EE5", preview: "\u4E0A\u9762\u7684\u5185\u5BB9\n\n***\n\n\u4E0B\u9762\u7684\u5185\u5BB9\n" },
      { syntax: "\u7B2C\u4E00\u884C\uFF08\u884C\u5C3E\u4E24\u4E2A\u7A7A\u683C\uFF09  \n\u7B2C\u4E8C\u884C", desc: "\u884C\u5C3E\u6572\u4E24\u4E2A\u7A7A\u683C\u518D\u56DE\u8F66\uFF0C\u53EF\u5F3A\u5236\u6362\u884C", preview: "\u7B2C\u4E00\u884C\uFF08\u884C\u5C3E\u4E24\u4E2A\u7A7A\u683C\uFF09  \n\u7B2C\u4E8C\u884C\n" },
      { syntax: "(\u7A7A\u884C)", desc: "\u6BB5\u4E0E\u6BB5\u4E4B\u95F4\u7A7A\u4E00\u884C\uFF0C\u624D\u4F1A\u6210\u4E3A\u72EC\u7ACB\u6BB5\u843D", plain: "\u7A7A\u884C\u7528\u4E8E\u5206\u9694\u6BB5\u843D" },
      { syntax: "<!-- \u6CE8\u91CA -->", desc: "HTML \u6CE8\u91CA\uFF0C\u9605\u8BFB\u89C6\u56FE\u91CC\u770B\u4E0D\u5230", plain: "\uFF08\u9605\u8BFB\u89C6\u56FE\u4E2D\u4E0D\u663E\u793A\uFF09" }
    ]
  },
  {
    name: "\u6570\u5B66\u516C\u5F0F Math",
    items: [
      { syntax: "$E = mc^2$", desc: "\u884C\u5185\u516C\u5F0F\uFF1A\u5355\u4E2A\u7F8E\u5143\u7B26\u53F7\u5305\u88F9\uFF08LaTeX \u8BED\u6CD5\uFF09" },
      { syntax: "$$\n\\int_0^1 x^2 \\, dx\n$$", desc: "\u5757\u7EA7\u516C\u5F0F\uFF1A\u53CC\u7F8E\u5143\u7B26\u53F7\u5355\u72EC\u6210\u884C" },
      { syntax: "$\\frac{a}{b}$", desc: "\u5206\u6570\u3001\u4E0A\u4E0B\u6807\u3001\u77E9\u9635\u7B49\u6807\u51C6 LaTeX \u90FD\u652F\u6301" },
      { syntax: "$\\sum_{i=1}^{n} i$", desc: "\u6C42\u548C\u3001\u5E0C\u814A\u5B57\u6BCD\u3001\u6839\u53F7\u7B49" }
    ]
  },
  {
    name: "Obsidian \u7279\u6709\u8BED\u6CD5 Obsidian Only",
    items: [
      { syntax: "%%\u8FD9\u662F\u6CE8\u91CA%%", desc: "Obsidian \u6CE8\u91CA\uFF1A\u7F16\u8F91\u65F6\u53EF\u89C1\uFF0C\u9605\u8BFB\u89C6\u56FE\u4E0D\u663E\u793A", plain: "\uFF08\u9605\u8BFB\u89C6\u56FE\u4E2D\u4E0D\u663E\u793A\uFF09" },
      { syntax: "#\u6807\u7B7E  #\u7236\u6807\u7B7E/\u5B50\u6807\u7B7E", desc: "\u6807\u7B7E\uFF1A\u4E95\u53F7\u5F00\u5934\uFF0C\u4E0D\u80FD\u6709\u7A7A\u683C", preview: "#\u6807\u7B7E #\u7236\u6807\u7B7E/\u5B50\u6807\u7B7E" },
      {
        syntax: "---\ntitle: \u6587\u6863\u6807\u9898\ntags:\n  - demo\n---",
        desc: "\u5C5E\u6027\uFF08Frontmatter\uFF09\uFF1A\u5FC5\u987B\u653E\u5728\u6587\u4EF6\u6700\u5F00\u5934",
        plain: "\uFF08\u6587\u4EF6\u5C5E\u6027\u533A\uFF0C\u4E0D\u53C2\u4E0E\u6B63\u6587\u6E32\u67D3\uFF09"
      },
      { syntax: "^\u5757\u6807\u8BC6\u7B26", desc: "\u5199\u5728\u6BB5\u843D\u672B\u5C3E\uFF0C\u4E3A\u8FD9\u4E2A\u5757\u547D\u540D\uFF0C\u65B9\u4FBF\u88AB\u5F15\u7528" },
      { syntax: "==\u9AD8\u4EAE==", desc: "\u9AD8\u4EAE\u6807\u8BB0\uFF08Obsidian \u6269\u5C55\u8BED\u6CD5\uFF09" },
      { syntax: "- [ ] \u4EFB\u52A1", desc: "\u4EFB\u52A1\u6E05\u5355\uFF0C\u53EF\u5728\u9605\u8BFB\u89C6\u56FE\u76F4\u63A5\u52FE\u9009" },
      { syntax: "> [!quote] \u5F15\u7528\u578B\u6807\u6CE8", desc: "Callout \u7684 quote \u7C7B\u578B\uFF0C\u9002\u5408\u6458\u5F55\u539F\u6587" },
      { syntax: "![[\u7B14\u8BB0#^\u5757\u6807\u8BC6\u7B26]]", desc: "\u5D4C\u5165\u76EE\u6807\u7B14\u8BB0\u4E2D\u67D0\u4E2A\u5757\u7684\u5185\u5BB9", plain: "\uFF08\u5D4C\u5165\u5185\u5BB9\u4F1A\u76F4\u63A5\u663E\u793A\u5728\u6B63\u6587\u91CC\uFF09" },
      { syntax: "[[#\u5F53\u524D\u7B14\u8BB0\u7684\u67D0\u6807\u9898]]", desc: "\u53EA\u5199 # \u5F00\u5934\uFF0C\u8868\u793A\u94FE\u63A5\u5230\u672C\u7BC7\u7B14\u8BB0\u5185\u7684\u6807\u9898" },
      {
        syntax: '```query\npath:"\u6587\u4EF6\u5939" tag:#\u6807\u7B7E\n```',
        desc: "\u67E5\u8BE2\u4EE3\u7801\u5757\uFF1A\u628A\u641C\u7D22\u7ED3\u679C\u76F4\u63A5\u5D4C\u8FDB\u7B14\u8BB0\u91CC",
        plain: "\uFF08\u641C\u7D22\u7ED3\u679C\u5217\u8868\u4F1A\u76F4\u63A5\u6E32\u67D3\u5728\u7B14\u8BB0\u91CC\uFF09"
      }
    ]
  }
];

// main.ts
var VIEW_TYPE = "md-syntax-cheatsheet-view";
var DEFAULT_SETTINGS = {
  livePreview: true,
  openLocation: "right",
  clickToCopy: true,
  showSearch: true,
  previewFontSize: 14,
  statusBarToggle: false
};
var MarkdownCheatSheetPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
    this.ribbonEl = null;
    this.statusBarEl = null;
  }
  async onload() {
    await this.loadSettings();
    this.registerView(VIEW_TYPE, (leaf) => new CheatSheetView(leaf, this));
    this.ribbonEl = this.addRibbonIcon(
      "book-open",
      "Markdown \u8BED\u6CD5\u5BF9\u7167\u8868\uFF08\u70B9\u51FB\u663E\u793A / \u9690\u85CF\uFF09",
      () => {
        void this.toggleCheatSheet();
      }
    );
    this.ribbonEl.addClass("mds-ribbon");
    this.updateStatusBar();
    this.updateActiveState();
    this.addCommand({
      id: "toggle-markdown-cheatsheet",
      name: "\u5207\u6362 Markdown \u8BED\u6CD5\u5BF9\u7167\u8868\uFF08\u4FA7\u8FB9\u680F\uFF09",
      callback: () => {
        void this.toggleCheatSheet();
      }
    });
    this.addCommand({
      id: "open-markdown-cheatsheet-modal",
      name: "\u5728\u5F39\u7A97\u4E2D\u67E5\u770B Markdown \u8BED\u6CD5\u5BF9\u7167\u8868",
      callback: () => {
        new CheatSheetModal(this.app, this).open();
      }
    });
    this.addSettingTab(new CheatSheetSettingTab(this.app, this));
    this.registerEvent(
      this.app.workspace.on("layout-change", () => this.updateActiveState())
    );
  }
  onunload() {
    var _a;
    this.app.workspace.detachLeavesOfType(VIEW_TYPE);
    (_a = this.statusBarEl) == null ? void 0 : _a.remove();
    this.statusBarEl = null;
  }
  /** 开关：已打开则关闭，否则在设置的区域里打开 */
  async toggleCheatSheet() {
    const { workspace } = this.app;
    const existing = workspace.getLeavesOfType(VIEW_TYPE);
    if (existing.length > 0) {
      existing.forEach((leaf2) => leaf2.detach());
      return;
    }
    let leaf = null;
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
  updateActiveState() {
    var _a, _b;
    const active = this.app.workspace.getLeavesOfType(VIEW_TYPE).length > 0;
    (_a = this.ribbonEl) == null ? void 0 : _a.toggleClass("is-active", active);
    (_b = this.statusBarEl) == null ? void 0 : _b.toggleClass("is-active", active);
  }
  updateStatusBar() {
    if (this.settings.statusBarToggle && !this.statusBarEl) {
      const el = this.addStatusBarItem();
      el.addClass("mds-statusbar");
      el.setText("MD \u8BED\u6CD5");
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
  refreshViews() {
    this.app.workspace.getLeavesOfType(VIEW_TYPE).forEach((leaf) => {
      const view = leaf.view;
      if (view instanceof CheatSheetView) {
        void view.render();
      }
    });
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var CheatSheetView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "Markdown \u8BED\u6CD5\u5BF9\u7167\u8868";
  }
  getIcon() {
    return "book-open";
  }
  async onOpen() {
    await this.render();
  }
  async render() {
    await renderCheatSheet(this.plugin, this.contentEl, this);
  }
};
var CheatSheetModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.renderComponent = new import_obsidian.Component();
    this.plugin = plugin;
  }
  async onOpen() {
    this.renderComponent.load();
    this.modalEl.addClass("mds-modal");
    this.titleEl.setText("Markdown \u8BED\u6CD5\u5BF9\u7167\u8868");
    await renderCheatSheet(this.plugin, this.contentEl, this.renderComponent);
  }
  onClose() {
    this.contentEl.empty();
    this.renderComponent.unload();
  }
};
async function copySyntax(text) {
  try {
    await navigator.clipboard.writeText(text);
    const firstLine = text.split("\n")[0];
    new import_obsidian.Notice(`\u5DF2\u590D\u5236\uFF1A${firstLine}`);
  } catch (error) {
    new import_obsidian.Notice("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u4E2D\u6587\u672C");
  }
}
async function renderCheatSheet(plugin, container, component) {
  var _a, _b, _c;
  const settings = plugin.settings;
  container.empty();
  container.addClass("mds-root");
  container.style.setProperty("--mds-preview-size", `${settings.previewFontSize}px`);
  const header = container.createDiv({ cls: "mds-header" });
  const countEl = header.createDiv({ cls: "mds-count" });
  let applyFilter = (query) => {
  };
  if (settings.showSearch) {
    const input = header.createEl("input", {
      cls: "mds-search",
      attr: { type: "text", placeholder: "\u641C\u7D22\u8BED\u6CD5\u6216\u8BF4\u660E\uFF0C\u4F8B\u5982\uFF1A\u8868\u683C / callout / \u811A\u6CE8" }
    });
    component.registerDomEvent(input, "input", (evt) => {
      applyFilter(evt.target.value);
    });
  }
  const list = container.createDiv({ cls: "mds-list" });
  component.registerDomEvent(list, "scroll", () => {
    header.toggleClass("is-scrolled", list.scrollTop > 4);
  });
  const rows = [];
  const sections = [];
  let total = 0;
  for (const category of CHEATSHEET) {
    const sectionEl = list.createDiv({ cls: "mds-section" });
    sections.push(sectionEl);
    sectionEl.createEl("h4", { cls: "mds-category", text: category.name });
    const table = sectionEl.createEl("table", { cls: "mds-table" });
    const headRow = table.createTHead().insertRow();
    headRow.createEl("th", { cls: "mds-th-syntax", text: "\u8BED\u6CD5 Syntax" });
    headRow.createEl("th", { cls: "mds-th-preview", text: "\u6E32\u67D3\u6548\u679C Preview" });
    const tbody = table.createTBody();
    for (const item of category.items) {
      total++;
      const tr = tbody.insertRow();
      tr.addClass("mds-row");
      rows.push({
        el: tr,
        text: `${item.syntax} ${item.desc}`.toLowerCase()
      });
      const syntaxCell = tr.insertCell();
      syntaxCell.addClass("mds-cell-syntax");
      syntaxCell.createEl("code", { text: item.syntax });
      syntaxCell.createDiv({ cls: "mds-desc", text: item.desc });
      if (settings.clickToCopy) {
        syntaxCell.addClass("is-copyable");
        syntaxCell.setAttribute("aria-label", "\u70B9\u51FB\u590D\u5236\u8FD9\u6BB5\u8BED\u6CD5");
        component.registerDomEvent(syntaxCell, "click", () => {
          void copySyntax(item.syntax);
        });
      }
      const previewCell = tr.insertCell();
      previewCell.addClass("mds-cell-preview");
      if (item.plain !== void 0) {
        previewCell.createDiv({ cls: "mds-plain", text: item.plain });
      } else if (settings.livePreview) {
        const target = previewCell.createDiv({ cls: "markdown-rendered mds-preview-inner" });
        try {
          await import_obsidian.MarkdownRenderer.render(
            plugin.app,
            (_a = item.preview) != null ? _a : item.syntax,
            target,
            "",
            component
          );
        } catch (error) {
          target.empty();
          target.createEl("code", { cls: "mds-preview-disabled", text: (_b = item.preview) != null ? _b : item.syntax });
        }
      } else {
        previewCell.createEl("code", {
          cls: "mds-preview-disabled",
          text: (_c = item.preview) != null ? _c : item.syntax
        });
      }
    }
  }
  applyFilter = (raw) => {
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
    countEl.setText(query ? `\u5339\u914D ${visible} / ${total} \u6761` : `\u5171 ${total} \u6761\u8BED\u6CD5`);
  };
  applyFilter("");
}
var CheatSheetSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Markdown \u8BED\u6CD5\u5BF9\u7167\u8868" });
    new import_obsidian.Setting(containerEl).setName("\u663E\u793A\u5B9E\u65F6\u9884\u89C8").setDesc("\u6E32\u67D3\u6BCF\u6761\u8BED\u6CD5\u7684\u771F\u5B9E\u6548\u679C\uFF1B\u5173\u95ED\u540E\u53EA\u663E\u793A\u8BF4\u660E\u6587\u5B57\uFF0C\u52A0\u8F7D\u66F4\u5FEB\u3002").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.livePreview).onChange(async (value) => {
        this.plugin.settings.livePreview = value;
        await this.plugin.saveSettings();
        this.plugin.refreshViews();
      })
    );
    new import_obsidian.Setting(containerEl).setName("\u70B9\u51FB\u8BED\u6CD5\u5373\u53EF\u590D\u5236").setDesc("\u70B9\u51FB\u5DE6\u4FA7\u4EE3\u7801\u5757\uFF0C\u628A\u8BED\u6CD5\u590D\u5236\u5230\u526A\u8D34\u677F\u3002").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.clickToCopy).onChange(async (value) => {
        this.plugin.settings.clickToCopy = value;
        await this.plugin.saveSettings();
        this.plugin.refreshViews();
      })
    );
    new import_obsidian.Setting(containerEl).setName("\u663E\u793A\u641C\u7D22\u6846").setDesc("\u5728\u9762\u677F\u9876\u90E8\u63D0\u4F9B\u5173\u952E\u8BCD\u8FC7\u6EE4\u3002").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.showSearch).onChange(async (value) => {
        this.plugin.settings.showSearch = value;
        await this.plugin.saveSettings();
        this.plugin.refreshViews();
      })
    );
    new import_obsidian.Setting(containerEl).setName("\u6253\u5F00\u4F4D\u7F6E").setDesc("\u70B9\u51FB\u5DE5\u5177\u680F\u5F00\u5173\u65F6\uFF0C\u5BF9\u7167\u8868\u51FA\u73B0\u5728\u54EA\u91CC\u3002").addDropdown(
      (dropdown) => dropdown.addOption("right", "\u53F3\u4FA7\u8FB9\u680F").addOption("left", "\u5DE6\u4FA7\u8FB9\u680F").addOption("tab", "\u4E3B\u533A\u57DF\u65B0\u6807\u7B7E\u9875").setValue(this.plugin.settings.openLocation).onChange(async (value) => {
        this.plugin.settings.openLocation = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("\u9884\u89C8\u5B57\u53F7").setDesc("\u53F3\u4FA7\u6E32\u67D3\u533A\u57DF\u7684\u5B57\u4F53\u5927\u5C0F\uFF08\u50CF\u7D20\uFF09\u3002").addSlider(
      (slider) => slider.setLimits(11, 20, 1).setValue(this.plugin.settings.previewFontSize).setDynamicTooltip().onChange(async (value) => {
        this.plugin.settings.previewFontSize = value;
        await this.plugin.saveSettings();
        this.plugin.refreshViews();
      })
    );
    new import_obsidian.Setting(containerEl).setName("\u72B6\u6001\u680F\u5F00\u5173").setDesc("\u5728\u5E95\u90E8\u72B6\u6001\u680F\u4E5F\u653E\u4E00\u4E2A\u5F00\u5173\u6309\u94AE\u3002").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.statusBarToggle).onChange(async (value) => {
        this.plugin.settings.statusBarToggle = value;
        await this.plugin.saveSettings();
        this.plugin.updateStatusBar();
      })
    );
    containerEl.createEl("p", {
      cls: "setting-item-description",
      text: "\u63D0\u793A\uFF1A\u5DE5\u5177\u680F\u56FE\u6807\u5728\u5F00\u542F\u65F6\u4F1A\u9AD8\u4EAE\u663E\u793A\uFF0C\u518D\u6B21\u70B9\u51FB\u5373\u53EF\u5173\u95ED\u5BF9\u7167\u8868\u3002"
    });
  }
};
