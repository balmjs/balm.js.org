(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{349:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[t._v("#")]),t._v(" 环境")]),t._v(" "),s("h2",{attrs:{id:"env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[t._v("#")]),t._v(" env")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BalmEnvObject")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  isProd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  isTest"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  isDev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  inSSR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  isMP"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// New in 2.9.0")]),t._v("\n  inDesktopApp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// New in 3.1.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("env: BalmEnvObject")])]),t._v(" "),s("p",[t._v("Node.js 中 Balm 工作流的环境变量。")]),t._v(" "),s("ul",[s("li",[t._v("标准环境\n"),s("ul",[s("li",[t._v("运行 "),s("code",[t._v("balm")]),t._v(" 时 "),s("code",[t._v("env.isDev")]),t._v(" 为 "),s("code",[t._v("true")])]),t._v(" "),s("li",[t._v("运行 "),s("code",[t._v("balm -p")]),t._v(" 或 "),s("code",[t._v("balm --production")]),t._v(" 时 "),s("code",[t._v("env.isProd")]),t._v(" 为 "),s("code",[t._v("true")])]),t._v(" "),s("li",[t._v("运行 "),s("code",[t._v("balm -t")]),t._v(" 或 "),s("code",[t._v("balm --test")]),t._v("时 "),s("code",[t._v("env.isTest")]),t._v(" 为 "),s("code",[t._v("true")])])])]),t._v(" "),s("li",[t._v("扩展环境\n"),s("ul",[s("li",[t._v("运行 "),s("code",[t._v("balm -ssr")]),t._v(" 或 "),s("code",[t._v("balm --server")]),t._v("时 "),s("code",[t._v("env.inSSR")]),t._v(" 为 "),s("code",[t._v("true")])]),t._v(" "),s("li",[t._v("运行 "),s("code",[t._v("balm -mp")]),t._v(" 或 "),s("code",[t._v("balm --miniprogram")]),t._v(" 时 "),s("code",[t._v("env.isMP")]),t._v(" 为 "),s("code",[t._v("true")])]),t._v(" "),s("li",[t._v("运行 "),s("code",[t._v("balm -electron")]),t._v(" 或 "),s("code",[t._v("balm --desktop-app")]),t._v(" 时 "),s("code",[t._v("env.inDesktopApp")]),t._v(" 为 "),s("code",[t._v("true")])])])])]),t._v(" "),s("h2",{attrs:{id:"workspace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workspace"}},[t._v("#")]),t._v(" workspace")]),t._v(" "),s("p",[s("code",[t._v("workspace: string = process.cwd()")])]),t._v(" "),s("p",[t._v("（"),s("strong",[t._v("绝对路径")]),t._v("）项目根目录，确保解析项目文件夹中的所有符号链接。")]),t._v(" "),s("p",[t._v("🌰 举个栗子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件：/path/to/workspace/balm.config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" workspace "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  workspace\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他配置项...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("提示：")]),t._v(" 通常情况下无需设置。")])]),t._v(" "),s("h2",{attrs:{id:"infrontend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#infrontend"}},[t._v("#")]),t._v(" inFrontend")]),t._v(" "),s("p",[s("code",[t._v("inFrontend: boolean = true")])]),t._v(" "),s("p",[t._v("设置项目类型。")]),t._v(" "),s("ul",[s("li",[t._v("设置 "),s("code",[t._v("true")]),t._v(" 用于纯前端项目")]),t._v(" "),s("li",[t._v("设置 "),s("code",[t._v("false")]),t._v(" 用于后端项目（如 PHP 框架）")])]),t._v(" "),s("p",[t._v("🌰 举个栗子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("inFrontend")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他配置项...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"usedefaults"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usedefaults"}},[t._v("#")]),t._v(" useDefaults")]),t._v(" "),s("p",[s("code",[t._v("useDefaults: boolean = true")])]),t._v(" "),s("p",[t._v("开启 "),s("code",[t._v("balm")]),t._v(" 的默认任务。")]),t._v(" "),s("p",[t._v("🌰 举个栗子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useDefaults")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭 balm 的默认任务")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他配置项...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("api")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用API自定义任务")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("balm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    api\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("📃 请参考 "),s("RouterLink",{attrs:{to:"/zh/api/"}},[t._v("自定义任务 API 文档")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);