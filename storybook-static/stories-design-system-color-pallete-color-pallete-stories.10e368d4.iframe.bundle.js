(self.webpackChunkstory_book=self.webpackChunkstory_book||[]).push([[837],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/design-system/color-pallete/color-pallete.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorPalette:()=>ColorPalette,__namedExportsOrder:()=>__namedExportsOrder,default:()=>color_pallete_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var color_palletengResource=__webpack_require__("./src/stories/design-system/color-pallete/color-pallete.css?ngResource"),color_palletengResource_default=__webpack_require__.n(color_palletengResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ColorPaletteComponent=class ColorPaletteComponent{colors=[];activeRow=null;copyHex(color,index){null===this.activeRow&&navigator.clipboard.writeText(color).then((()=>{this.showAlert(index)})).catch((err=>{alert(`Error al copiar al portapapeles: ${err}`)}))}showAlert(index){this.activeRow=index,setTimeout((()=>{this.activeRow=null}),1e3)}static propDecorators={colors:[{type:core.Input}]}};ColorPaletteComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"rlv-color-palette",standalone:!0,imports:[common.CommonModule],template:'<h1>Paleta de Colores</h1>\r\n<p>\r\n  A continuación, se muestran los colores utilizados en el sistema de diseño:\r\n</p>\r\n<table class="color-table">\r\n  <thead>\r\n    <tr>\r\n      <th>Nombre</th>\r\n      <th>Color</th>\r\n      <th>Hex</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    @for (color of colors; track $index) {\r\n      <tr class="color-row" (click)="copyHex(color.hex, $index)">\r\n        <td>{{ color.name }}</td>\r\n        <td><div [style.background]="color.hex" class="color-box"></div></td>\r\n        <td>{{ color.hex }}</td>\r\n        <div [ngClass]="{ show: activeRow === $index }" class="badger-alert">Copied!</div>\r\n      </tr>\r\n    }\r\n  </tbody>\r\n</table>\r\n',styles:[color_palletengResource_default()]})],ColorPaletteComponent);const color_pallete_stories={title:"Design System",component:ColorPaletteComponent,args:{colors:[{name:"Primary",hex:"#3E8989"},{name:"Low Priority",hex:"#616161"},{name:"Success",hex:"#4caf50"},{name:"Danger",hex:"#e53935"},{name:"Warning",hex:"#fb8c00"},{name:"Neutral",hex:"#e0e0e0"}]}},ColorPalette={},__namedExportsOrder=["ColorPalette"];ColorPalette.parameters={...ColorPalette.parameters,docs:{...ColorPalette.parameters?.docs,source:{originalSource:"{}",...ColorPalette.parameters?.docs?.source}}}},"./src/stories/design-system/color-pallete/color-pallete.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'.color-table {\n  justify-self: center;\n  width: 60%;\n  border-collapse: collapse;\n  margin-top: 50px;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n.color-table th,\n.color-table td {\n  padding: 12px 15px;\n  text-align: left;\n  font-size: 16px;\n  color: #333;\n}\n\n.color-table th {\n  background-color: #f5f5f5;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-bottom: 2px solid #e0e0e0;\n}\n\n.color-table tr:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\n.color-table tr:hover {\n  background-color: #f1f1f1;\n}\n\n.color-row {\n  position: relative;\n  cursor: pointer;\n  align-items: center;\n}\n\n.color-box {\n  width: 40px;\n  height: 40px;\n  border-radius: 4px;\n}\n\n.color-table td {\n  font-family: "Courier New", Courier, monospace;\n  color: #777;\n}\n\n.badger-alert{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  transform: translateX(-14px);\n  opacity: 0;\n  width: 80px;\n  height: 40px;\n  color: white;\n  border-radius: 12px;\n  background-color: #333333;\n  margin: 12px 0 0 15px;\n  transition: opacity 0.2s, transform 0.2s;\n  \n  &.show{\n    opacity: .4;\n    transform: translateX(0px);\n  }\n}\n',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);