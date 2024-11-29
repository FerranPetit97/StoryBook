(self.webpackChunkstory_book=self.webpackChunkstory_book||[]).push([[704],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/components/basics/button/cta-button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,PrimaryDanger:()=>PrimaryDanger,Raw:()=>Raw,RawDanger:()=>RawDanger,Secondary:()=>Secondary,SecondaryDanger:()=>SecondaryDanger,Tertiary:()=>Tertiary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>cta_button_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var cta_buttonngResource=__webpack_require__("./src/stories/components/basics/button/cta-button.css?ngResource"),cta_buttonngResource_default=__webpack_require__.n(cta_buttonngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let CTAButtonComponent=class CTAButtonComponent{type="primary";backgroundColor;size="medium";label="Button";loading=!1;fullWidth=!1;disabled=!1;icon={src:"",alt:""};onClick=new core.EventEmitter;get classes(){const width=this.fullWidth?"full":"",disabled=this.disabled?"disabled":"";return["rlv-cta-button",`rlv-cta-button--${this.size}`,`rlv-cta-button--${this.type}`,width,disabled]}static propDecorators={type:[{type:core.Input}],backgroundColor:[{type:core.Input}],size:[{type:core.Input}],label:[{type:core.Input}],loading:[{type:core.Input}],fullWidth:[{type:core.Input}],disabled:[{type:core.Input}],icon:[{type:core.Input}],onClick:[{type:core.Output}]}};CTAButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"rlv-cta-button",standalone:!0,imports:[common.CommonModule],template:'<button\r\n  [disabled]="disabled"\r\n  type="button"\r\n  (click)="onClick.emit($event)"\r\n  [ngClass]="classes"\r\n>\r\n  @if (loading) {\r\n  <div class="loader"></div>\r\n  } @else {\r\n    @if(icon.src){\r\n    <img [src]="icon.src" [alt]="icon.alt" class="icon-button" />\r\n    }\r\n    {{ label }}\r\n  }\r\n</button>\r\n',styles:[cta_buttonngResource_default()]})],CTAButtonComponent);const cta_button_stories={title:"Basics/CTA Button",component:CTAButtonComponent,tags:["autodocs"],argTypes:{backgroundColor:{table:{disable:!0}},type:{control:"select",options:["primary","secondary","tertiary","raw","primary--danger","secondary--danger","raw--danger"],description:"Define el estilo del botón",table:{type:{summary:"primary | secondary | tertiary | raw | primary--danger | secondary--danger | raw--danger"}}},size:{control:"radio",options:["large","medium","small"],description:"Define el tamaño del botón",table:{type:{summary:"large | medium | small"}}},loading:{control:"boolean",description:"Muestra el estado de carga del botón"},fullWidth:{control:"boolean",description:"Ocupa todo el espacio en ancho"},disabled:{control:"boolean",description:"Deshabilita el botón"},icon:{control:{type:"object"},description:'Añadir icono con estructura: { src: "assets/icons/download.svg", alt: "Icono de descarga"}',defaultValue:null,table:{type:{summary:"object"},defaultValue:{summary:"null"}}}}},Primary={args:{type:"primary",size:"medium",label:"Button",loading:!1,fullWidth:!1,disabled:!1,icon:{src:"",alt:""}}},Secondary={args:{type:"secondary",size:"medium",label:"Button",loading:!1,fullWidth:!1,disabled:!1,icon:{src:"",alt:""}}},Tertiary={args:{type:"tertiary",size:"medium",label:"Button",loading:!1,fullWidth:!1,disabled:!1,icon:{src:"",alt:""}}},Raw={args:{type:"raw",size:"medium",label:"Button",loading:!1,fullWidth:!1,disabled:!1,icon:{src:"",alt:""}}},PrimaryDanger={args:{type:"primary--danger",size:"medium",label:"Button",loading:!1,fullWidth:!1,icon:{src:"",alt:""}},argTypes:{disabled:{table:{disable:!0}}}},SecondaryDanger={args:{type:"secondary--danger",size:"medium",label:"Button",loading:!1,fullWidth:!1,icon:{src:"",alt:""}},argTypes:{disabled:{table:{disable:!0}}}},RawDanger={args:{type:"raw--danger",size:"medium",label:"Button",loading:!1,fullWidth:!1,icon:{src:"",alt:""}},argTypes:{disabled:{table:{disable:!0}}}},__namedExportsOrder=["Primary","Secondary","Tertiary","Raw","PrimaryDanger","SecondaryDanger","RawDanger"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'primary',\n    size: 'medium',\n    label: 'Button',\n    loading: false,\n    fullWidth: false,\n    disabled: false,\n    icon: {\n      src: '',\n      alt: ''\n    }\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'secondary',\n    size: 'medium',\n    label: 'Button',\n    loading: false,\n    fullWidth: false,\n    disabled: false,\n    icon: {\n      src: '',\n      alt: ''\n    }\n  }\n}",...Secondary.parameters?.docs?.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...Tertiary.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'tertiary',\n    size: 'medium',\n    label: 'Button',\n    loading: false,\n    fullWidth: false,\n    disabled: false,\n    icon: {\n      src: '',\n      alt: ''\n    }\n  }\n}",...Tertiary.parameters?.docs?.source}}},Raw.parameters={...Raw.parameters,docs:{...Raw.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'raw',\n    size: 'medium',\n    label: 'Button',\n    loading: false,\n    fullWidth: false,\n    disabled: false,\n    icon: {\n      src: '',\n      alt: ''\n    }\n  }\n}",...Raw.parameters?.docs?.source}}},PrimaryDanger.parameters={...PrimaryDanger.parameters,docs:{...PrimaryDanger.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'primary--danger',\n    size: 'medium',\n    label: 'Button',\n    loading: false,\n    fullWidth: false,\n    icon: {\n      src: '',\n      alt: ''\n    }\n  },\n  argTypes: {\n    disabled: {\n      table: {\n        disable: true\n      }\n    }\n  }\n}",...PrimaryDanger.parameters?.docs?.source}}},SecondaryDanger.parameters={...SecondaryDanger.parameters,docs:{...SecondaryDanger.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'secondary--danger',\n    size: 'medium',\n    label: 'Button',\n    loading: false,\n    fullWidth: false,\n    icon: {\n      src: '',\n      alt: ''\n    }\n  },\n  argTypes: {\n    disabled: {\n      table: {\n        disable: true\n      }\n    }\n  }\n}",...SecondaryDanger.parameters?.docs?.source}}},RawDanger.parameters={...RawDanger.parameters,docs:{...RawDanger.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'raw--danger',\n    size: 'medium',\n    label: 'Button',\n    loading: false,\n    fullWidth: false,\n    icon: {\n      src: '',\n      alt: ''\n    }\n  },\n  argTypes: {\n    disabled: {\n      table: {\n        disable: true\n      }\n    }\n  }\n}",...RawDanger.parameters?.docs?.source}}}},"./src/stories/components/basics/button/cta-button.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".rlv-cta-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: 0;\n  border-radius: 50px;\n  cursor: pointer;\n  line-height: 1;\n}\n.rlv-cta-button--primary {\n  color: white;\n  background-color: #3e8989;\n  outline: none;\n\n  &:hover {\n    background-color: #316d6d;\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    background-color: #a0a0a0;\n  }\n\n  .icon-button {\n    filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(7deg) brightness(104%)\n      contrast(102%);\n  }\n}\n.rlv-cta-button--secondary {\n  color: #3e8989;\n  background-color: transparent;\n  box-shadow: #3e8989 0px 0px 0px 1px inset;\n\n  &:hover {\n    background-color: #3e898941;\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    color: #a0a0a0;\n    background-color: transparent;\n    box-shadow: #a0a0a0 0px 0px 0px 1px inset;\n  }\n\n  .icon-button {\n    filter: brightness(0) saturate(100%) invert(57%) sepia(5%) saturate(3464%) hue-rotate(131deg) brightness(81%)\n      contrast(89%);\n  }\n}\n.rlv-cta-button--tertiary {\n  color: #616161;\n  background-color: transparent;\n  box-shadow: #616161 0px 0px 0px 1px inset;\n\n  &:hover {\n    background-color: #61616141;\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    color: #a0a0a0;\n    background-color: transparent;\n    box-shadow: #a0a0a0 0px 0px 0px 1px inset;\n  }\n\n  .icon-button {\n    filter: brightness(0) saturate(100%) invert(38%) sepia(0%) saturate(1%) hue-rotate(345deg) brightness(95%)\n      contrast(90%);\n  }\n}\n.rlv-cta-button--raw {\n  color: #616161;\n  background-color: transparent;\n\n  &:hover {\n    color: #313131;\n\n    .icon-button {\n      filter: brightness(0) saturate(100%) invert(14%) sepia(37%) saturate(12%) hue-rotate(351deg) brightness(94%)\n        contrast(86%);\n    }\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    color: #a0a0a0;\n  }\n\n  .icon-button {\n    filter: brightness(0) saturate(100%) invert(38%) sepia(0%) saturate(1%) hue-rotate(345deg) brightness(95%)\n      contrast(90%);\n  }\n}\n.rlv-cta-button--primary--danger {\n  color: white;\n  background-color: #e53935;\n\n  &:hover {\n    background-color: #b82e2b;\n  }\n\n  .icon-button {\n    filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(7deg) brightness(104%)\n      contrast(102%);\n  }\n}\n.rlv-cta-button--secondary--danger {\n  color: #e53935;\n  background-color: transparent;\n  box-shadow: #e53935 0px 0px 0px 1px inset;\n\n  &:hover {\n    background-color: #e5393541;\n  }\n\n  .icon-button {\n    filter: brightness(0) saturate(100%) invert(34%) sepia(74%) saturate(2141%) hue-rotate(340deg) brightness(91%)\n      contrast(96%);\n  }\n}\n.rlv-cta-button--raw--danger {\n  color: #e53935;\n  background-color: transparent;\n\n  &:hover {\n    color: #b82e2b;\n\n    .icon-button {\n      filter: brightness(0) saturate(100%) invert(46%) sepia(95%) saturate(2585%) hue-rotate(332deg) brightness(69%)\n        contrast(110%);\n    }\n  }\n\n  .icon-button {\n    filter: brightness(0) saturate(100%) invert(34%) sepia(74%) saturate(2141%) hue-rotate(340deg) brightness(91%)\n      contrast(96%);\n  }\n}\n.rlv-cta-button--small {\n  height: 32px;\n  padding: 0 20px;\n}\n.rlv-cta-button--medium {\n  height: 40px;\n  padding: 0 20px;\n}\n.rlv-cta-button--large {\n  height: 48px;\n  padding: 0 24px;\n}\n\n.full {\n  width: 100%;\n}\n\n.icon-button {\n  height: 24px;\n  width: 24px;\n}\n\n.loader {\n  justify-self: center;\n  width: 1em;\n  height: 1em;\n  border: 0.15em solid #616161;\n  border-top: 0.15em solid #61616166;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);