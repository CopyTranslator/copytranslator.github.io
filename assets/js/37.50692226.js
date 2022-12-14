(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{309:function(a,t,e){"use strict";e.r(t);var s=e(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"参与贡献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参与贡献"}},[a._v("#")]),a._v(" 参与贡献")]),a._v(" "),t("h2",{attrs:{id:"编译源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译源码"}},[a._v("#")]),a._v(" 编译源码")]),a._v(" "),t("h3",{attrs:{id:"项目结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[a._v("#")]),a._v(" 项目结构")]),a._v(" "),t("ul",[t("li",[a._v("dist_electron: 编译的输出")]),a._v(" "),t("li",[a._v("dist_locales: 翻译文件")]),a._v(" "),t("li",[a._v("docs: 本文档的源码")])]),a._v(" "),t("h3",{attrs:{id:"编译环境要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译环境要求"}},[a._v("#")]),a._v(" 编译环境要求")]),a._v(" "),t("ul",[t("li",[a._v("Nodejs v12")]),a._v(" "),t("li",[a._v("yarn v1 # 不要使用v2")])]),a._v(" "),t("p",[a._v("对于windows用户, 你需要先执行"),t("code",[a._v("yarn global add windows-build-tools")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/copytranslator/CopyTranslator.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" CopyTranslator\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" rebuild\n")])])]),t("p",[a._v("要调试和运行程序：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run electron:serve\n")])])]),t("p",[a._v("要编译为可分发的程序：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run electron:build\n")])])]),t("p",[a._v("按照上述说明操作时，程序能运行，但是翻译引擎不工作，这说明您的配置已经成功了，这是完全正常的，因为copytranslator依赖的opentranslate版本与开源版本opentranslate不完全一样。")]),a._v(" "),t("p",[a._v("如果您是想编译了自己使用，请直接在设置中填入各个翻译引擎的api key使用。")]),a._v(" "),t("p",[a._v("如果您想参与到copytranslator的跨平台移植当中，造福其他人，请联系我，我会指导您如何编译。")]),a._v(" "),t("h2",{attrs:{id:"locale-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#locale-settings"}},[a._v("#")]),a._v(" Locale settings")]),a._v(" "),t("p",[a._v("Using my own l10n module, for memory saving purpose.")]),a._v(" "),t("h3",{attrs:{id:"for-locale-maintainers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-locale-maintainers"}},[a._v("#")]),a._v(" For locale maintainers")]),a._v(" "),t("p",[a._v("If you want to add a new locale, follow the instructions below.")]),a._v(" "),t("blockquote",[t("p",[a._v("view "),t("code",[a._v("json")]),a._v(" files under "),t("code",[a._v("dist_locales")]),a._v(" to see the format of the locale file, fork the repo and add a new "),t("code",[a._v(a._s(a.locale)+".json")]),a._v(" file under the directory, and create a pull request.")])]),a._v(" "),t("p",[a._v("Welcome to join the "),t("code",[a._v("gitter")]),a._v(" chat room at "),t("a",{attrs:{href:"https://gitter.im/CopyTranslator/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),t("OutboundLink")],1),a._v(", so you can get notified before new version release. You can create a pull request at any time as "),t("strong",[a._v("the out of date locale file won't cause any error")]),a._v(", the program will go back to English for the missing words.")])])}),[],!1,null,null,null);t.default=r.exports}}]);