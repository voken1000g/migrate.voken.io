(window.webpackJsonp=window.webpackJsonp||[]).push([[30,15],{510:function(e,t,o){"use strict";o.r(t);var n={name:"LayoutFooterSimple"},r=o(7),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"mt-16 lg:mt-18 xl:mt-20 2xl:mt-28 pt-6 md:pt-8 lg:pt-10 xl:pt-12 border-t border-gray-300"},[e._t("default")],2)}),[],!1,null,"7bbebab7",null);t.default=component.exports},521:function(e,t,o){"use strict";(function(e){var n=o(177),r=o.n(n),d=o(510);t.a={name:"base32",layout:"indigoBubble",components:{LayoutFooterSimple:d.default},head:function(){return{title:"npm: @voken/base32"}},data:function(){return{Buffer:e,Base32:r.a,decoded:"",encoded:"",exception:null,decodeError:!1,encodeError:!1}},watch:{decoded:function(){if(this.encodeError=!1,this.decodeError=!1,this.exception=null,this.decoded)try{this.encoded=r.a.encode(e.from(this.decoded))}catch(e){this.encodeError=!0,this.exception=e.message}else this.encoded=""},encoded:function(){if(this.encodeError=!1,this.decodeError=!1,this.exception=null,this.encoded)try{this.decoded=r.a.decode(this.encoded)}catch(e){this.decodeError=!0,this.exception=e.message}else this.decoded=""}}}}).call(this,o(9).Buffer)},537:function(e,t,o){var content=o(559);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("b608f15c",content,!0,{sourceMap:!1})},558:function(e,t,o){"use strict";o(537)},559:function(e,t,o){var n=o(16)((function(i){return i[1]}));n.push([e.i,"a[data-v-361b6012]{\n  --tw-text-opacity:1;\n  color:rgba(81, 69, 205, var(--tw-text-opacity))\n}\na[data-v-361b6012]:hover{\n  --tw-text-opacity:1;\n  color:rgba(104, 117, 245, var(--tw-text-opacity))\n}",""]),e.exports=n},620:function(e,t,o){"use strict";o.r(t);var n=o(521).a,r=(o(558),o(7)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"resp-wide pb-12"},[o("article",{staticClass:"resp-mt prose lg:prose-lg xl:prose-xl max-w-none"},[o("h1",[e._v("\n      "+e._s(e.$t("nav.Base32"))+"\n    ")]),e._v(" "),o("p",[e._v("\n      "+e._s(e.$t("nav.Base32_"))+"\n    ")])]),e._v(" "),o("div",{staticClass:"mt-10 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-x-3 lg:space-y-0"},[o("div",{staticClass:"flex-1",class:{error:e.encodeError}},[o("label",{attrs:{for:"decoded"}},[e._v("\n        "+e._s(e.$t("base32.Input_here_to_auto_encode_"))+"\n      ")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.decoded,expression:"decoded"}],staticClass:"mt-2 w-full form-textarea font-mono text-sm md:text-base lg:text-lg",attrs:{name:"decoded",id:"decoded",rows:"20",placeholder:e.$t("base32.Sample")},domProps:{value:e.decoded},on:{input:function(t){t.target.composing||(e.decoded=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"flex-1",class:{error:e.decodeError}},[o("label",{attrs:{for:"encoded"}},[e._v("\n        "+e._s(e.$t("base32.Input_here_to_auto_decode_"))+"\n      ")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.encoded,expression:"encoded"}],staticClass:"mt-2 w-full form-textarea font-mono text-sm md:text-base lg:text-lg",attrs:{name:"encoded",id:"encoded",rows:"20",placeholder:e.Base32.encode(e.Buffer.from(e.$t("base32.Sample")))},domProps:{value:e.encoded},on:{input:function(t){t.target.composing||(e.encoded=t.target.value)}}})])]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.exception,expression:"exception"}],staticClass:"my-2 md:my-3 lg:my-4 lg:text-lg xl:text-xl text-red-700"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.encodeError,expression:"encodeError"}]},[e._v("\n      "+e._s(e.$t("base32.Encoded_input_"))+"\n    ")]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.decodeError,expression:"decodeError"}]},[e._v("\n      "+e._s(e.$t("base32.Decoded_input_"))+"\n    ")]),e._v(" "),o("div",{staticClass:"mt-2 px-2 md:px-3 lg:px-4"},[e._v("\n      "+e._s(e.exception)+"\n    ")])]),e._v(" "),o("layout-footer-simple",{staticClass:"font-mono text-gray-600 text-center"},[o("div",[o("span",[e._v("\n        "+e._s(e.$t("base32.Documentation.text"))+"\n      ")]),e._v(" "),o("a",{staticClass:"a-indigo",attrs:{target:"_blank",href:e.$t("base32.Documentation.href")}},[e._v("\n        "+e._s(e.$t("base32.Documentation.href"))+"\n      ")])]),e._v(" "),o("div",{staticClass:"mt-2"},[o("span",[e._v("\n        npm:\n      ")]),e._v(" "),o("a",{attrs:{target:"_blank",href:"https://www.npmjs.com/package/@voken/base32"}},[e._v("\n        https://www.npmjs.com/package/@voken/base32\n      ")])]),e._v(" "),o("div",{staticClass:"mt-2"},[o("span",[e._v("\n        GitHub:\n      ")]),e._v(" "),o("a",{attrs:{target:"_blank",href:"https://github.com/voken1000g/npm-base32"}},[e._v("\n        https://github.com/voken1000g/npm-base32\n      ")])])])],1)}),[],!1,null,"361b6012",null);t.default=component.exports;installComponents(component,{LayoutFooterSimple:o(510).default})}}]);