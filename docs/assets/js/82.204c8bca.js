(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{357:function(t,s,r){"use strict";r.r(s);var e=r(10),a=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"开发服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发服务器"}},[t._v("#")]),t._v(" 开发服务器")]),t._v(" "),s("h2",{attrs:{id:"server-port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-port"}},[t._v("#")]),t._v(" server.port")]),t._v(" "),s("p",[s("code",[t._v("server.port: number = 3000")])]),t._v(" "),s("p",[t._v("使用指定的端口。")]),t._v(" "),s("h2",{attrs:{id:"server-host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-host"}},[t._v("#")]),t._v(" server.host")]),t._v(" "),s("p",[s("code",[t._v("server.host: string | null = null")])]),t._v(" "),s("p",[t._v("自定义域名 IP 地址。")]),t._v(" "),s("h2",{attrs:{id:"server-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-https"}},[t._v("#")]),t._v(" server.https")]),t._v(" "),s("p",[s("code",[t._v("server.https: boolean | undefined = undefined")])]),t._v(" "),s("p",[t._v("启用 https 进行本地开发。注意 - 这是不需要配置代理选项，因为它会从你的目标网址中推断出来。")]),t._v(" "),s("h2",{attrs:{id:"server-open"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-open"}},[t._v("#")]),t._v(" server.open")]),t._v(" "),s("p",[s("code",[t._v("server.open: string | boolean = false")])]),t._v(" "),s("p",[t._v("开发模式下启动 balm 时自动打开浏览器。")]),t._v(" "),s("p",[t._v("🌰 举个栗子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他配置项...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"server-localonly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-localonly"}},[t._v("#")]),t._v(" server.localOnly")]),t._v(" "),s("p",[s("code",[t._v("server.localOnly: boolean = false")])]),t._v(" "),s("p",[t._v("支持不需要动态主机名的环境（如：electron）。")]),t._v(" "),s("h2",{attrs:{id:"server-proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-proxy"}},[t._v("#")]),t._v(" server.proxy")]),t._v(" "),s("p",[s("code",[t._v("server.proxy: string | boolean | object = false")])]),t._v(" "),s("p",[t._v("代理一个现有的虚拟主机。Browsersync 将用代理 URL 封装您的虚拟主机来查看您的网站。")]),t._v(" "),s("h2",{attrs:{id:"server-servestatic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-servestatic"}},[t._v("#")]),t._v(" server.serveStatic")]),t._v(" "),s("p",[s("code",[t._v("server.serveStatic: string[] = []")])]),t._v(" "),s("p",[t._v("添加应从其提供静态文件的其他目录。只能在 "),s("code",[t._v("proxy")]),t._v(" 或 "),s("code",[t._v("snippet")]),t._v(" 模式下使用。")]),t._v(" "),s("p",[t._v("🌰 举个栗子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your.project.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("serveStatic")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("route")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/public'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path/to/your_local_public'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他配置项...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"server-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-options"}},[t._v("#")]),t._v(" server.options")]),t._v(" "),s("p",[s("code",[t._v("server.options: object = {}")])]),t._v(" "),s("p",[t._v("Browsersync "),s("a",{attrs:{href:"https://browsersync.io/docs/options",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细配置"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"server-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-next"}},[t._v("#")]),t._v(" server.next")]),t._v(" "),s("p",[s("code",[t._v("server.next: Function = () => {}")])]),t._v(" "),s("blockquote",[s("p",[t._v("New in 3.10.0")])]),t._v(" "),s("p",[t._v("服务启动后的自定义事件处理。")]),t._v(" "),s("h2",{attrs:{id:"server-devoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-devoptions"}},[t._v("#")]),t._v(" server.devOptions")]),t._v(" "),s("p",[s("code",[t._v("server.devOptions: object = {}")])]),t._v(" "),s("p",[t._v("用于 webpack 的开发中间件。"),s("a",{attrs:{href:"https://github.com/webpack/webpack-dev-middleware#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细配置"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"server-hotoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-hotoptions"}},[t._v("#")]),t._v(" server.hotOptions")]),t._v(" "),s("p",[s("code",[t._v("server.hotOptions: object = {}")])]),t._v(" "),s("p",[t._v("用于 webpack 的热加载中间件。"),s("a",{attrs:{href:"https://github.com/webpack-contrib/webpack-hot-middleware#config",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细配置"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"server-proxyconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-proxyconfig"}},[t._v("#")]),t._v(" server.proxyConfig")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProxyConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("server.proxyConfig: boolean | ProxyConfig | ProxyConfig[] = false")])]),t._v(" "),s("p",[t._v("Http 代理中间件。配置参数"),s("a",{attrs:{href:"https://github.com/chimurai/http-proxy-middleware#context-matching",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("context")]),s("OutboundLink")],1),t._v(" & "),s("a",{attrs:{href:"https://github.com/chimurai/http-proxy-middleware#options",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("options")]),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("🌰 举个栗子：")]),t._v(" "),s("ul",[s("li",[t._v("单个代理")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("proxyConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代理的目标域名")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("changeOrigin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 虚拟域名站点必备")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他配置项...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("多个代理")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("proxyConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("changeOrigin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example2.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("changeOrigin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他配置项...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"server-historyoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-historyoptions"}},[t._v("#")]),t._v(" server.historyOptions")]),t._v(" "),s("p",[s("code",[t._v("server.historyOptions: boolean | object = false")])]),t._v(" "),s("p",[t._v("使用 HTML5 History API。"),s("a",{attrs:{href:"https://github.com/bripkens/connect-history-api-fallback#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细配置"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"server-middlewares"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-middlewares"}},[t._v("#")]),t._v(" server.middlewares")]),t._v(" "),s("p",[s("code",[t._v("server.middlewares: object[] = []")])]),t._v(" "),s("p",[t._v("为 Browsersync 提供更多额外的中间件。")]),t._v(" "),s("h2",{attrs:{id:"server-extrawatchfiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-extrawatchfiles"}},[t._v("#")]),t._v(" server.extraWatchFiles")]),t._v(" "),s("p",[s("code",[t._v("server.extraWatchFiles: string[] = []")])]),t._v(" "),s("p",[t._v("开发模式下自定义额外的文件监听。")])])}),[],!1,null,null,null);s.default=a.exports}}]);