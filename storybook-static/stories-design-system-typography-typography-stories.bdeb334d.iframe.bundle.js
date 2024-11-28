(self.webpackChunkstory_book=self.webpackChunkstory_book||[]).push([[889],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/design-system/typography/typography.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Typography:()=>Typography,__namedExportsOrder:()=>__namedExportsOrder,default:()=>typography_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var typographyngResource=__webpack_require__("./src/stories/design-system/typography/typography.css?ngResource"),typographyngResource_default=__webpack_require__.n(typographyngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let TypographyComponent=class TypographyComponent{categories=[];fonts=[];getFontFamily(fontFamily){const font=this.fonts.find((font=>fontFamily===font.type));return font?font.name:"Inter"}getBackgroundColor(type){let color;switch(type){case 2:color="#4caf50";break;case 3:color="#e53935";break;default:color="#3E8989"}return color}static propDecorators={categories:[{type:core.Input}],fonts:[{type:core.Input}]}};TypographyComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"rlv-typography",standalone:!0,imports:[common.CommonModule],template:'<h1 class="typography-title">Tipografía del Sistema de Diseño</h1>\r\n<p class="typography-description">\r\n  Aquí se muestran las tres diferente tipografías que se utilizan según la\r\n  utilidad de cada una.\r\n</p>\r\n\r\n<table class="typography-table first-table">\r\n  <thead>\r\n    <tr>\r\n      <th>Nombre</th>\r\n      <th>Vista previa</th>\r\n      <th>Tipo</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    @for (font of fonts; track $index) {\r\n      <tr class="typography-row">\r\n        <td>{{ font.name }}</td>\r\n        <td [ngStyle]="{ \'font-family\': font.name }">{{ font.preview }}</td>\r\n        <td>\r\n          <div\r\n            [ngStyle]="{ \'background-color\': getBackgroundColor(font.type) }"\r\n            class="type-square"\r\n          ></div>\r\n        </td>\r\n      </tr>\r\n    }\r\n  </tbody>\r\n</table>\r\n\r\n<p class="typography-description">\r\n  A continuación, se muestran las categorías tipográficas definidas para los\r\n  diferentes elementos de HTML, incluyendo tamaños, pesos, alturas de línea y\r\n  colores.\r\n</p>\r\n\r\n@for (category of categories; track $index) {\r\n  <div class="typography-category">\r\n    <h2>{{ category.category }}</h2>\r\n    <table class="typography-table">\r\n      <thead>\r\n        <tr>\r\n          <th>Vista previa</th>\r\n          <th>Etiqueta</th>\r\n          <th>Tamaño</th>\r\n          <th>Peso</th>\r\n          <th>Altura de línea</th>\r\n          <th>Color</th>\r\n          <th>Tipo</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        @for (style of category.styles; track $index) {\r\n          <tr class="typography-row">\r\n            <td [ngStyle]="{ \'font-family\': getFontFamily(style.fontFamily) }">\r\n              <div\r\n                [ngStyle]="{\r\n                  \'font-size\': style.fontSize,\r\n                  \'font-weight\': style.fontWeight,\r\n                  \'line-height\': style.lineHeight,\r\n                  \'background-color\': style.backgroundColor\r\n                    ? style.backgroundColor\r\n                    : null,\r\n                  \'border-radius\': style.backgroundColor ? \'8px\' : null,\r\n                  width: style.backgroundColor ? \'60px\' : null,\r\n                  \'text-align\': style.backgroundColor ? \'center\' : null,\r\n                  padding: style.backgroundColor ? \'8px\' : null,\r\n                  color: style.color,\r\n                }"\r\n              >\r\n                {{ style.name }}\r\n              </div>\r\n            </td>\r\n            <td>{{ style.element }}</td>\r\n            <td>{{ style.fontSize }}</td>\r\n            <td>{{ style.fontWeight }}</td>\r\n            <td>{{ style.lineHeight }}</td>\r\n            <td>\r\n              <span class="color-box" [style.background]="style.color"></span>\r\n              {{ style.color }}\r\n            </td>\r\n            <td>\r\n              <div\r\n                [ngStyle]="{\r\n                  \'background-color\': getBackgroundColor(style.fontFamily),\r\n                }"\r\n                class="type-square"\r\n              ></div>\r\n            </td>\r\n          </tr>\r\n        }\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n}\r\n',styles:[typographyngResource_default()]})],TypographyComponent);const typography_stories={title:"Design System/Typography",component:TypographyComponent,args:{categories:[{category:"Encabezados",styles:[{name:"Heading 1",element:"h1",fontSize:"32px",fontWeight:"700",lineHeight:"1.5",color:"#333333",fontFamily:2},{name:"Heading 2",element:"h2",fontSize:"28px",fontWeight:"600",lineHeight:"1.4",color:"#444444",fontFamily:2},{name:"Heading 3",element:"h3",fontSize:"24px",fontWeight:"500",lineHeight:"1.4",color:"#555555",fontFamily:2},{name:"Heading 4",element:"h4",fontSize:"20px",fontWeight:"500",lineHeight:"1.3",color:"#666666",fontFamily:2},{name:"Heading 5",element:"h5",fontSize:"18px",fontWeight:"400",lineHeight:"1.3",color:"#777777",fontFamily:2},{name:"Heading 6",element:"h6",fontSize:"16px",fontWeight:"400",lineHeight:"1.3",color:"#888888",fontFamily:2}]},{category:"Texto",styles:[{name:"Párrafo",element:"p",fontSize:"16px",fontWeight:"400",lineHeight:"1.6",color:"#555555",fontFamily:1},{name:"Texto Resaltado",element:"strong",fontSize:"16px",fontWeight:"700",lineHeight:"1.6",color:"#333333",fontFamily:1},{name:"Texto Enfatizado",element:"em",fontSize:"16px",fontWeight:"400",fontStyle:"italic",lineHeight:"1.6",color:"#555555",fontFamily:1},{name:"Texto Reducido",element:"small",fontSize:"12px",fontWeight:"400",lineHeight:"1.4",color:"#666666",fontFamily:1},{name:"Cita",element:"blockquote",fontSize:"18px",fontWeight:"400",fontStyle:"italic",lineHeight:"1.6",color:"#444444",fontFamily:2}]},{category:"Listas",styles:[{name:"Lista Ordenada",element:"ol",fontSize:"16px",fontWeight:"400",lineHeight:"1.5",color:"#555555",fontFamily:1},{name:"Lista Desordenada",element:"ul",fontSize:"16px",fontWeight:"400",lineHeight:"1.5",color:"#555555",fontFamily:1},{name:"Elemento de Lista",element:"li",fontSize:"16px",fontWeight:"400",lineHeight:"1.5",color:"#555555",fontFamily:1}]},{category:"Formularios",styles:[{name:"Etiqueta",element:"label",fontSize:"14px",fontWeight:"500",lineHeight:"1.4",color:"#333333",fontFamily:1},{name:"Campo de Texto",element:"input",fontSize:"16px",fontWeight:"400",lineHeight:"1.5",color:"#444444",fontFamily:1},{name:"Área de Texto",element:"textarea",fontSize:"16px",fontWeight:"400",lineHeight:"1.5",color:"#444444",fontFamily:1},{name:"Botón",element:"button",fontSize:"16px",fontWeight:"600",lineHeight:"1.5",color:"#ffffff",backgroundColor:"#3E8989",fontFamily:1}]},{category:"Código",styles:[{name:"Código",element:"code",fontSize:"14px",fontWeight:"400",lineHeight:"1.4",color:"#d63384",backgroundColor:"#3E8989",fontFamily:3},{name:"Bloque",element:"pre",fontSize:"14px",fontWeight:"400",lineHeight:"1.4",color:"#ffffff",backgroundColor:"#343a40",fontFamily:3}]}],fonts:[{name:"Inter",preview:"Example",type:1},{name:"Playfair Display",preview:"Example",type:2},{name:"Courier New",preview:"Example",type:3}]}},Typography={},__namedExportsOrder=["Typography"];Typography.parameters={...Typography.parameters,docs:{...Typography.parameters?.docs,source:{originalSource:"{}",...Typography.parameters?.docs?.source}}}},"./src/stories/design-system/typography/typography.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"\n.typography-title {\n  font-size: 24px;\n  font-weight: bold;\n  margin: 16px 0 16px 0;\n}\n\n.typography-description {\n  font-size: 16px;\n  margin: 24px 0 24px 0;\n}\n\n.typography-table {\n  width: 70%;\n  border-collapse: collapse;\n  margin-top: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n\n  &.first-table {\n    width: 50%;\n  }\n}\n\n.typography-table th,\n.typography-table td {\n  padding: 12px 15px;\n  text-align: left;\n  color: #333;\n}\n\n.typography-table td {\n  height: 50px;\n}\n\n.typography-table th {\n  background-color: #f5f5f5;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-bottom: 2px solid #e0e0e0;\n}\n\n.typography-table tr:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\n.typography-table tr:hover {\n  background-color: #f1f1f1;\n}\n\n.typography-row {\n  position: relative;\n  align-items: center;\n}\n\n.type-square {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n}\n\n.download-button {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  border: 1px solid #3E8989;\n  background-image: url('download.6cffbdb11d4c01f8.svg');\n  background-repeat: no-repeat;\n  background-size: 16px 16px;\n  background-position: center;\n\n  &:hover {\n    background-color: #dadada;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);