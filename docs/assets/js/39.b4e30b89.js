(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{316:function(t,r,s){"use strict";s.r(r);var e=s(10),a=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[t._v("#")]),t._v(" Server")]),t._v(" "),r("h2",{attrs:{id:"server-port"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-port"}},[t._v("#")]),t._v(" server.port")]),t._v(" "),r("p",[r("code",[t._v("server.port: number = 3000")])]),t._v(" "),r("p",[t._v("Use a specific port.")]),t._v(" "),r("h2",{attrs:{id:"server-host"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-host"}},[t._v("#")]),t._v(" server.host")]),t._v(" "),r("p",[r("code",[t._v("server.host: string | null = null")])]),t._v(" "),r("p",[t._v("Override host detection if you know the correct IP to use.")]),t._v(" "),r("h2",{attrs:{id:"server-https"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-https"}},[t._v("#")]),t._v(" server.https")]),t._v(" "),r("p",[r("code",[t._v("server.https: boolean | undefined = undefined")])]),t._v(" "),r("p",[t._v("Enable https for localhost development. Note - this is not needed for proxy option as it will be inferred from your target url.")]),t._v(" "),r("h2",{attrs:{id:"server-open"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-open"}},[t._v("#")]),t._v(" server.open")]),t._v(" "),r("p",[r("code",[t._v("server.open: string | boolean = false")])]),t._v(" "),r("p",[t._v("Decide which URL to open automatically when server starts.")]),t._v(" "),r("p",[t._v("🌰 For example:")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("module"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("server")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("open")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other Options...")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("h2",{attrs:{id:"server-localonly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-localonly"}},[t._v("#")]),t._v(" server.localOnly")]),t._v(" "),r("p",[r("code",[t._v("server.localOnly: boolean = false")])]),t._v(" "),r("p",[t._v("Support environments where dynamic hostnames are not required (ie: electron).")]),t._v(" "),r("h2",{attrs:{id:"server-proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-proxy"}},[t._v("#")]),t._v(" server.proxy")]),t._v(" "),r("p",[r("code",[t._v("server.proxy: string | boolean | object = false")])]),t._v(" "),r("p",[t._v("Proxy an EXISTING vhost. Browsersync will wrap your vhost with a proxy URL to view your site.")]),t._v(" "),r("h2",{attrs:{id:"server-servestatic"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-servestatic"}},[t._v("#")]),t._v(" server.serveStatic")]),t._v(" "),r("p",[r("code",[t._v("server.serveStatic: string[] = []")])]),t._v(" "),r("p",[t._v("Add additional directories from which static files should be served. Should only be used in "),r("code",[t._v("proxy")]),t._v(" or "),r("code",[t._v("snippet")]),t._v(" mode.")]),t._v(" "),r("p",[t._v("🌰 For example:")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("module"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("server")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("proxy")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your.project.com'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("serveStatic")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("route")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/public'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dir")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path/to/your_local_public'")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other Options...")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("h2",{attrs:{id:"server-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-options"}},[t._v("#")]),t._v(" server.options")]),t._v(" "),r("p",[r("code",[t._v("server.options: object = {}")])]),t._v(" "),r("p",[t._v("Browsersync "),r("a",{attrs:{href:"https://browsersync.io/docs/options",target:"_blank",rel:"noopener noreferrer"}},[t._v("options"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"server-next"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-next"}},[t._v("#")]),t._v(" server.next")]),t._v(" "),r("p",[r("code",[t._v("server.next: Function = () => {}")])]),t._v(" "),r("blockquote",[r("p",[t._v("New in 3.10.0")])]),t._v(" "),r("p",[t._v("Custom event handler after the server starts.")]),t._v(" "),r("h2",{attrs:{id:"server-devoptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-devoptions"}},[t._v("#")]),t._v(" server.devOptions")]),t._v(" "),r("p",[r("code",[t._v("server.devOptions: object = {}")])]),t._v(" "),r("p",[t._v("A development middleware for webpack. Reference "),r("a",{attrs:{href:"https://github.com/webpack/webpack-dev-middleware#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("options"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"server-hotoptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-hotoptions"}},[t._v("#")]),t._v(" server.hotOptions")]),t._v(" "),r("p",[r("code",[t._v("server.hotOptions: object = {}")])]),t._v(" "),r("p",[t._v("Webpack hot reloading you can attach to your own server. Reference "),r("a",{attrs:{href:"https://github.com/webpack-contrib/webpack-hot-middleware#config",target:"_blank",rel:"noopener noreferrer"}},[t._v("options"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"server-proxyconfig"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-proxyconfig"}},[t._v("#")]),t._v(" server.proxyConfig")]),t._v(" "),r("div",{staticClass:"language-ts extra-class"},[r("pre",{pre:!0,attrs:{class:"language-ts"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProxyConfig")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  context"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  options"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" object"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[r("code",[t._v("server.proxyConfig: boolean | ProxyConfig | ProxyConfig[] = false")])]),t._v(" "),r("p",[t._v("Http-proxy middleware. Reference "),r("a",{attrs:{href:"https://github.com/chimurai/http-proxy-middleware#context-matching",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("context")]),r("OutboundLink")],1),t._v(" & "),r("a",{attrs:{href:"https://github.com/chimurai/http-proxy-middleware#options",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("options")]),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("🌰 For example:")]),t._v(" "),r("ul",[r("li",[t._v("Single proxy")])]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("module"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("server")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("proxyConfig")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("context")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// target host")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("changeOrigin")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// needed for virtual hosted sites")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other Options...")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("ul",[r("li",[t._v("Multiple proxies")])]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("module"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("server")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("proxyConfig")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("context")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("changeOrigin")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("context")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api2'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api3'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example2.com'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("changeOrigin")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other Options...")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("h2",{attrs:{id:"server-historyoptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-historyoptions"}},[t._v("#")]),t._v(" server.historyOptions")]),t._v(" "),r("p",[r("code",[t._v("server.historyOptions: boolean | object = false")])]),t._v(" "),r("p",[t._v("Using the HTML5 History API. Reference "),r("a",{attrs:{href:"https://github.com/bripkens/connect-history-api-fallback#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("options"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"server-middlewares"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-middlewares"}},[t._v("#")]),t._v(" server.middlewares")]),t._v(" "),r("p",[r("code",[t._v("server.middlewares: object[] = []")])]),t._v(" "),r("p",[t._v("Supply extra middlewares for Browsersync.")]),t._v(" "),r("h2",{attrs:{id:"server-extrawatchfiles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-extrawatchfiles"}},[t._v("#")]),t._v(" server.extraWatchFiles")]),t._v(" "),r("p",[r("code",[t._v("server.extraWatchFiles: string[] = []")])]),t._v(" "),r("p",[t._v("Extra watch files for development.")])])}),[],!1,null,null,null);r.default=a.exports}}]);