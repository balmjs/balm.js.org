(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{349:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"upgrading-to-3-0-from-2-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-3-0-from-2-x"}},[t._v("#")]),t._v(" Upgrading To 3.0 From 2.x")]),t._v(" "),s("p",[t._v("Hello "),s("strong",[s("code",[t._v("balm-core")])]),t._v(" 🎉")]),t._v(" "),s("blockquote",[s("p",[t._v("Born to build, better enterprise workflow with Node.js")])]),t._v(" "),s("h2",{attrs:{id:"_1-installing-balm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-installing-balm"}},[t._v("#")]),t._v(" 1. Installing "),s("strong",[s("code",[t._v("balm")])])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" balm-core\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" balm\n")])])]),s("p",[t._v("OR")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" balm-core\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" balm\n")])])]),s("h2",{attrs:{id:"_2-upgrade-entry-config-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-upgrade-entry-config-file"}},[t._v("#")]),t._v(" 2. Upgrade entry config file")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("/path/to/project")])])]),t._v(" "),s("ul",[s("li",[s("p",[s("del",[t._v("gulpfile.js")]),t._v(" => "),s("strong",[s("code",[t._v("balm.config.js")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your project config")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("OR")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./config/balmrc.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your project config")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("api")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Custom tasks by API")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("balm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("balm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    api\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("update "),s("code",[t._v("package.json")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balm"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prod"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balm -p"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_3-balm-config-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-balm-config-changes"}},[t._v("#")]),t._v(" 3. "),s("code",[t._v("balm.config")]),t._v(" Changes")]),t._v(" "),s("ul",[s("li",[t._v("config.paths.source."),s("strong",[s("code",[t._v("html")])])]),t._v(" "),s("li",[t._v("config.styles."),s("del",[t._v("minified")]),t._v(" => config.styles."),s("code",[t._v("minify")])]),t._v(" "),s("li",[t._v("config.scripts."),s("del",[t._v("hot")])]),t._v(" "),s("li",[t._v("config.scripts."),s("strong",[s("code",[t._v("esbuild")])])]),t._v(" "),s("li",[t._v("config.scripts."),s("strong",[s("code",[t._v("buildOptions")])])]),t._v(" "),s("li",[t._v("config.scripts."),s("strong",[s("code",[t._v("useTransform")])])]),t._v(" "),s("li",[t._v("config.scripts."),s("strong",[s("code",[t._v("transformOptions")])])]),t._v(" "),s("li",[t._v("config.assets."),s("del",[t._v("publicUrlPlaceholder")])]),t._v(" "),s("li",[t._v("config.assets."),s("del",[t._v("publicUrl")])])]),t._v(" "),s("blockquote",[s("p",[t._v("bundler:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("esbuild")]),t._v(" (new)")]),t._v(" "),s("li",[s("code",[t._v("webpack")]),t._v(" (old)")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);