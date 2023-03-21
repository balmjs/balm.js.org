(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{317:function(s,t,e){"use strict";e.r(t);var a=e(10),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"stylesheets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stylesheets"}},[s._v("#")]),s._v(" Stylesheets")]),s._v(" "),t("blockquote",[t("p",[s._v("Parse CSS and add vendor prefixes to rules by "),t("a",{attrs:{href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Can I Use"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("Autoprefixer uses "),t("a",{attrs:{href:"https://github.com/browserslist/browserslist#queries",target:"_blank",rel:"noopener noreferrer"}},[s._v("Browserslist"),t("OutboundLink")],1),s._v(".")])]),s._v(" "),t("h2",{attrs:{id:"styles-extname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-extname"}},[s._v("#")]),s._v(" styles.extname")]),s._v(" "),t("p",[t("code",[s._v("styles.extname: string = 'css'")])]),s._v(" "),t("p",[s._v("Compiling "),t("a",{attrs:{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostCSS"),t("OutboundLink")],1),s._v("/"),t("a",{attrs:{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sass"),t("OutboundLink")],1),s._v("/"),t("a",{attrs:{href:"https://lesscss.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Less"),t("OutboundLink")],1),s._v(" into CSS.")]),s._v(" "),t("blockquote",[t("p",[s._v("Supported CSS extensions: "),t("code",[s._v("css")]),s._v(", "),t("code",[s._v("scss")]),s._v("/"),t("code",[s._v("sass")]),s._v(" and "),t("code",[s._v("less")]),s._v(".")])]),s._v(" "),t("p",[s._v("🌰 For example:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("styles")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("extname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scss'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Other Options...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("⚠️ "),t("code",[s._v("Cannot find module 'node-sass'")]),s._v(" "),t("RouterLink",{attrs:{to:"/advanced/troubleshooting.html"}},[s._v("Solution")]),s._v(" (Deprecated in 3.17.0)")],1)]),s._v(" "),t("h3",{attrs:{id:"styles-dartsass-deprecated-in-3-17-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-dartsass-deprecated-in-3-17-0"}},[s._v("#")]),s._v(" "),t("del",[s._v("styles.dartSass")]),s._v(" (Deprecated in 3.17.0)")]),s._v(" "),t("blockquote",[t("p",[s._v("⚠️ Now, just use "),t("a",{attrs:{href:"https://sass-lang.com/dart-sass",target:"_blank",rel:"noopener noreferrer"}},[s._v("Dart Sass"),t("OutboundLink")],1),s._v(" for sass preprocessing since 3.17.0+ (LibSass is deprecated)")])]),s._v(" "),t("p",[t("code",[s._v("styles.dartSass: boolean = false")])]),s._v(" "),t("blockquote",[t("p",[s._v("New in 2.6.0")])]),s._v(" "),t("h2",{attrs:{id:"styles-minify"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-minify"}},[s._v("#")]),s._v(" styles.minify")]),s._v(" "),t("p",[t("code",[s._v("styles.minify: boolean = false")])]),s._v(" "),t("blockquote",[t("p",[s._v("Rename "),t("del",[t("code",[s._v("minified")])]),s._v(" to "),t("code",[s._v("minify")]),s._v(" in 3.0.0")])]),s._v(" "),t("p",[s._v("Ignore the environment and force CSS compression.")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("Tips:")]),s._v(" Often used with "),t("a",{attrs:{href:"/api/serve"}},[t("code",[s._v("mix.serve")])]),s._v(" in development mode.")])]),s._v(" "),t("h2",{attrs:{id:"styles-atimportpaths"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-atimportpaths"}},[s._v("#")]),s._v(" styles.atImportPaths")]),s._v(" "),t("p",[t("code",[s._v("styles.atImportPaths: string[] = []")])]),s._v(" "),t("p",[s._v("("),t("strong",[s._v("Absolute path")]),s._v(") An array of paths that Balm can look in to attempt to resolve your "),t("code",[s._v("@import")]),s._v(" declarations.")]),s._v(" "),t("h2",{attrs:{id:"styles-entry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-entry"}},[s._v("#")]),s._v(" styles.entry")]),s._v(" "),t("p",[t("code",[s._v("styles.entry: string | string[] = ''")])]),s._v(" "),t("blockquote",[t("p",[s._v("New in 3.24.0 and 4.7.0")])]),s._v(" "),t("p",[s._v("The entry point (filename) for the styles.")]),s._v(" "),t("h2",{attrs:{id:"styles-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-options"}},[s._v("#")]),s._v(" styles.options")]),s._v(" "),t("p",[t("code",[s._v("styles.options: object")])]),s._v(" "),t("p",[s._v("Cssnano optimisations. Reference "),t("a",{attrs:{href:"https://cssnano.co/docs/what-are-optimisations/",target:"_blank",rel:"noopener noreferrer"}},[s._v("options"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("Defaults to:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("safe")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("autoprefixer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("discardComments")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("removeAll")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"styles-sassoptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-sassoptions"}},[s._v("#")]),s._v(" styles.sassOptions")]),s._v(" "),t("p",[t("code",[s._v("styles.sassOptions: object = {}")])]),s._v(" "),t("p",[s._v("LibSass "),t("a",{attrs:{href:"https://sass-lang.com/documentation/js-api/modules#LegacyOptions",target:"_blank",rel:"noopener noreferrer"}},[s._v("options"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"styles-lessoptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-lessoptions"}},[s._v("#")]),s._v(" styles.lessOptions")]),s._v(" "),t("p",[t("code",[s._v("styles.lessOptions: object = {}")])]),s._v(" "),t("p",[s._v("Less plugin for Gulp. Reference "),t("a",{attrs:{href:"https://github.com/gulp-community/gulp-less#options",target:"_blank",rel:"noopener noreferrer"}},[s._v("options"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"styles-postcssenvoptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-postcssenvoptions"}},[s._v("#")]),s._v(" styles.postcssEnvOptions")]),s._v(" "),t("p",[t("code",[s._v("styles.postcssEnvOptions: object")])]),s._v(" "),t("p",[s._v("PostCSS Preset Env "),t("a",{attrs:{href:"https://github.com/csstools/postcss-preset-env#options",target:"_blank",rel:"noopener noreferrer"}},[s._v("options"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("Defaults to:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("stage")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("autoprefixer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("flexbox")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'no-2009'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"styles-postcssplugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-postcssplugins"}},[s._v("#")]),s._v(" styles.postcssPlugins")]),s._v(" "),t("p",[t("code",[s._v("styles.postcssPlugins: object[] = []")])]),s._v(" "),t("p",[s._v("PostCSS "),t("a",{attrs:{href:"https://www.postcss.parts/",target:"_blank",rel:"noopener noreferrer"}},[s._v("plugins"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"styles-imagebasepath"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-imagebasepath"}},[s._v("#")]),s._v(" styles.imageBasePath")]),s._v(" "),t("p",[t("code",[s._v("styles.imageBasePath: string = '../'")])]),s._v(" "),t("p",[s._v("The path to use in CSS referring to sprite image location.")]),s._v(" "),t("h2",{attrs:{id:"styles-sprites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-sprites"}},[s._v("#")]),s._v(" styles.sprites")]),s._v(" "),t("p",[t("code",[s._v("styles.sprites: string[] = []")])]),s._v(" "),t("p",[s._v("Convert a set of images into a spritesheet and CSS variables.")]),s._v(" "),t("p",[s._v("🌰 For example:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Input:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// `/path/to/workspace/${roots.source}/${paths.source.img}/icons/*.png`")]),s._v("\n\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("styles")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sprites")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icons'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Other Options...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Output:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// image: `/path/to/workspace/${roots.target}/${paths.target.img}/icons-sprites.png`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// css: `/path/to/workspace/${roots.source}/${paths.source.css}/sprites/_icons.${styles.extname}`")]),s._v("\n")])])]),t("h2",{attrs:{id:"styles-spriteretina"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-spriteretina"}},[s._v("#")]),s._v(" styles.spriteRetina")]),s._v(" "),t("p",[t("code",[s._v("styles.spriteRetina: boolean = false")])]),s._v(" "),t("p",[s._v("Enable retina spritesheet generation.")]),s._v(" "),t("p",[s._v("🌰 For example:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Input:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// `/path/to/workspace/${roots.source}/${paths.source.img}/icons/*.png`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// `/path/to/workspace/${roots.source}/${paths.source.img}/icons/*@2x.png`")]),s._v("\n\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("styles")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sprites")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icons'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("spriteRetina")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Other Options...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Output:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// image: `/path/to/workspace/${roots.target}/${paths.target.img}/icons-sprites.png`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//        `/path/to/workspace/${roots.target}/${paths.target.img}/icons-sprites@2x.png`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// css: `/path/to/workspace/${roots.source}/${paths.source.css}/sprites/_icons.${styles.extname}`")]),s._v("\n")])])]),t("h2",{attrs:{id:"styles-spriteparams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#styles-spriteparams"}},[s._v("#")]),s._v(" styles.spriteParams")]),s._v(" "),t("p",[t("code",[s._v("styles.spriteParams: object = {}")])]),s._v(" "),t("p",[s._v("Spritesmith "),t("a",{attrs:{href:"https://github.com/twolfson/gulp.spritesmith#spritesmithparams",target:"_blank",rel:"noopener noreferrer"}},[s._v("parameters"),t("OutboundLink")],1),s._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);