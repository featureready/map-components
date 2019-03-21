(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(45),__webpack_require__(58);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_styles_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(131),_styles_scss__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__),react_google_maps__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(39);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}var Map=function(props){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_4__.GoogleMap,{defaultOptions:{mapTypeControl:!1},defaultZoom:props.zoom,defaultCenter:props.center},props.children)};Map.displayName="Map";var WrappedMap=Object(react_google_maps__WEBPACK_IMPORTED_MODULE_4__.withScriptjs)(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_4__.withGoogleMap)(Map)),LoadingElem=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:_styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.loading}),ContainerElem=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:_styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container}),MapElem=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:_styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.map});__webpack_exports__.a=function(props){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedMap,_extends({},props,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyCDo-1xCV3rIxId6c89zdupFEV0t1IED4g","&v=3.exp&libraries=geometry,drawing,places"),loadingElement:LoadingElem,containerElement:ContainerElem,mapElement:MapElem}))}},128:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_styles_scss__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(1),__webpack_require__(67)),_styles_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__),Cell=function(_ref){var title=_ref.title,caption=_ref.caption,icon=_ref.icon,active=_ref.active,onClick=_ref.onClick;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{onClick:onClick,className:"".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.outer," ").concat(active?"".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.active):"")},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image,src:icon}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title},title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.caption},caption)))};Cell.displayName="Cell",__webpack_exports__.a=Cell,Cell.__docgenInfo={description:"",methods:[],displayName:"Cell"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Cell/index.jsx"]={name:"Cell",docgenInfo:Cell.__docgenInfo,path:"components/Cell/index.jsx"})},129:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_styles_scss__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(1),__webpack_require__(88)),_styles_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__),InfoBox=function(_ref){var title=_ref.title,caption=_ref.caption,icon=_ref.icon;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box},icon&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon,src:icon})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title},title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.caption},caption)))};InfoBox.displayName="InfoBox",__webpack_exports__.a=InfoBox,InfoBox.__docgenInfo={description:"",methods:[],displayName:"InfoBox"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/InfoBox/index.jsx"]={name:"InfoBox",docgenInfo:InfoBox.__docgenInfo,path:"components/InfoBox/index.jsx"})},131:function(module,exports,__webpack_require__){var content=__webpack_require__(635);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(126)(content,options);content.locals&&(module.exports=content.locals)},179:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(45),__webpack_require__(102),__webpack_require__(33),__webpack_require__(144),__webpack_require__(99),__webpack_require__(56),__webpack_require__(54),__webpack_require__(32),__webpack_require__(80),__webpack_require__(58);var react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),prop_types__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__),react_google_maps__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(39),_Map__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(127),_Cell__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(128),_styles_scss__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(87),_styles_scss__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_15__);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ListMap=function(_ref){var zoom=_ref.zoom,center=_ref.center,places=_ref.places,carousel=_ref.carousel,_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_10__.useState)(0),2),activeIndex=_useState2[0],setActiveIndex=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div",{className:carousel?_styles_scss__WEBPACK_IMPORTED_MODULE_15___default.a.carouselContainer:_styles_scss__WEBPACK_IMPORTED_MODULE_15___default.a.listContainer},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div",{className:carousel?_styles_scss__WEBPACK_IMPORTED_MODULE_15___default.a.carousel:_styles_scss__WEBPACK_IMPORTED_MODULE_15___default.a.list},places.map(function(_ref2,idx){_ref2.position;var cell=_objectWithoutProperties(_ref2,["position"]);return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Cell__WEBPACK_IMPORTED_MODULE_14__.a,_extends({onClick:function onClick(){setActiveIndex(idx)},active:idx===activeIndex,key:idx},cell))})),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_13__.a,{zoom:zoom,center:center},places.map(function(_ref3){var id=_ref3.id,_ref3$position=_ref3.position,lat=_ref3$position.lat,lng=_ref3$position.lng;return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_12__.Marker,{key:id,position:{lat:lat,lng:lng}})})))};ListMap.displayName="ListMap",ListMap.propTypes={zoom:prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,center:prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({lat:prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,lng:prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number}),infoBox:prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({title:prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,caption:prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,offset:prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({x:prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,y:prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number})})},ListMap.defaultProps={zoom:8,center:{lat:0,lng:0},infoBox:{offset:{x:0,y:0}}},__webpack_exports__.a=ListMap,ListMap.__docgenInfo={description:"",methods:[],displayName:"ListMap",props:{zoom:{defaultValue:{value:"8",computed:!1},type:{name:"number"},required:!1,description:""},center:{defaultValue:{value:"{\n  lat: 0,\n  lng: 0\n}",computed:!1},type:{name:"shape",value:{lat:{name:"number",required:!1},lng:{name:"number",required:!1}}},required:!1,description:""},infoBox:{defaultValue:{value:"{\n  offset: {\n    x: 0,\n    y: 0\n  }\n}",computed:!1},type:{name:"shape",value:{title:{name:"string",required:!1},caption:{name:"string",required:!1},offset:{name:"shape",value:{x:{name:"number",required:!1},y:{name:"number",required:!1}},required:!1}}},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ListMap/index.jsx"]={name:"ListMap",docgenInfo:ListMap.__docgenInfo,path:"components/ListMap/index.jsx"})},181:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react_google_maps__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(39),_Map__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(127),react_google_maps_lib_components_addons_InfoBox__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(292),react_google_maps_lib_components_addons_InfoBox__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_google_maps_lib_components_addons_InfoBox__WEBPACK_IMPORTED_MODULE_4__),_InfoBox__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(129),SingleMap=function(_ref){var _ref$infoBox=_ref.infoBox,icon=_ref$infoBox.icon,infoTitle=_ref$infoBox.title,infoCaption=_ref$infoBox.caption,_ref$infoBox$offset=_ref$infoBox.offset,x=_ref$infoBox$offset.x,y=_ref$infoBox$offset.y,zoom=_ref.zoom,center=_ref.center;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_3__.a,{zoom:zoom,center:center},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_2__.Marker,{position:center},(infoTitle||infoCaption)&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps_lib_components_addons_InfoBox__WEBPACK_IMPORTED_MODULE_4___default.a,{defaultPosition:{lat:center.lat,lng:center.lng},options:{closeBoxURL:"",enableEventPropagation:!0,pixelOffset:{width:-150-x,height:-170-y}}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBox__WEBPACK_IMPORTED_MODULE_5__.a,{icon:icon,title:infoTitle,caption:infoCaption})))))};SingleMap.propTypes={zoom:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,center:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({lat:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,lng:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number}),infoBox:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,caption:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,offset:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({x:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,y:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number})})},SingleMap.defaultProps={zoom:8,center:{lat:0,lng:0},infoBox:{offset:{x:0,y:0}}},__webpack_exports__.a=SingleMap,SingleMap.__docgenInfo={description:"",methods:[],displayName:"SingleMap",props:{zoom:{defaultValue:{value:"8",computed:!1},type:{name:"number"},required:!1,description:""},center:{defaultValue:{value:"{\n  lat: 0,\n  lng: 0\n}",computed:!1},type:{name:"shape",value:{lat:{name:"number",required:!1},lng:{name:"number",required:!1}}},required:!1,description:""},infoBox:{defaultValue:{value:"{\n  offset: {\n    x: 0,\n    y: 0\n  }\n}",computed:!1},type:{name:"shape",value:{title:{name:"string",required:!1},caption:{name:"string",required:!1},offset:{name:"shape",value:{x:{name:"number",required:!1},y:{name:"number",required:!1}},required:!1}}},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/SingleMap/index.jsx"]={name:"SingleMap",docgenInfo:SingleMap.__docgenInfo,path:"components/SingleMap/index.jsx"})},293:function(module,exports,__webpack_require__){__webpack_require__(294),__webpack_require__(372),module.exports=__webpack_require__(373)},373:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(32),__webpack_require__(33),__webpack_require__(144),__webpack_require__(78);var _storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(38),req=__webpack_require__(441);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(76)(module))},441:function(module,exports,__webpack_require__){var map={"./list-map.stories.js":442,"./single-map.stories.js":645,"./ui-elements.stories.js":648};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=441},442:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(38),_components_ListMap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(179),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),mapTab="Map Options",stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("List map",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs);var places=[{id:1,title:"Shibuya Izakaya",caption:"Nice yakitori place",icon:"https://img.icons8.com/dusk/64/000000/picture.png",position:{lat:35.6592715,lng:139.7002091}},{id:2,title:"Shinjuku Sushi Restaurant",caption:"Cheap sushi bites",icon:"https://img.icons8.com/dusk/64/000000/picture.png",position:{lat:35.6603281,lng:139.707173}},{id:3,title:"Harajuku Gyoza",caption:"Japanese dumplings",icon:"https://img.icons8.com/dusk/64/000000/picture.png",position:{lat:35.6535471,lng:139.7047349}},{id:4,title:"Harajuku Curry Shop",caption:"Best curry in Tokyo",icon:"https://img.icons8.com/dusk/64/000000/picture.png",position:{lat:35.6511759,lng:139.6972676}},{id:5,title:"Karaoke Kan",caption:"Singing place",icon:"https://img.icons8.com/dusk/64/000000/picture.png",position:{lat:35.6549714,lng:139.7014199}},{id:6,title:"Onko Gakkai",caption:"2nd hand retro shop",icon:"https://img.icons8.com/dusk/64/000000/picture.png",position:{lat:35.6544832,lng:139.7052823}},{id:7,title:"Tsutaya",caption:"Book shop",icon:"https://img.icons8.com/dusk/64/000000/picture.png",position:{lat:35.6522689,lng:139.7086297}},{id:8,title:"Harajuku Curry Shop",caption:"Best curry in Tokyo",icon:"https://img.icons8.com/dusk/64/000000/picture.png",position:{lat:35.6511759,lng:139.6972676}}];stories.add("with a scrollable list",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListMap__WEBPACK_IMPORTED_MODULE_2__.a,{zoom:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Map zoom",14,{},mapTab),center:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Map center",{lat:35.6592715,lng:139.7002091},mapTab),places:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("List of places",places,mapTab)})}),stories.add("with a carousel",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListMap__WEBPACK_IMPORTED_MODULE_2__.a,{carousel:!0,zoom:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Map zoom",14,{},mapTab),center:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Map center",{lat:35.6592715,lng:139.7002091},mapTab),places:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("List of places",places,mapTab)})})}.call(this,__webpack_require__(76)(module))},635:function(module,exports,__webpack_require__){(exports=module.exports=__webpack_require__(125)(!1)).push([module.i,".styles__container___mvozE {\n  height: 400px;\n  flex: 5;\n  order: 2; }\n\n.styles__loading___1yo_U {\n  height: 100%; }\n\n.styles__map___2zs15 {\n  height: 100%; }\n",""]),exports.locals={container:"styles__container___mvozE",loading:"styles__loading___1yo_U",map:"styles__map___2zs15"}},637:function(module,exports,__webpack_require__){(exports=module.exports=__webpack_require__(125)(!1)).push([module.i,".styles__outer___1Tg0R {\n  cursor: pointer;\n  padding: 10px;\n  border-top: 1px solid #efefef;\n  display: flex;\n  align-items: center;\n  min-width: 200px; }\n  .styles__outer___1Tg0R:hover {\n    background: #f1f2f6; }\n\n.styles__active___2uPkM {\n  background: #f1f2f6; }\n\n.styles__image___2flb- {\n  width: 40px;\n  margin-right: 10px; }\n\n.styles__title___1jLC7 {\n  font-size: 14px;\n  font-weight: bold;\n  font-family: 'system-ui'; }\n\n.styles__caption___1Yz1B {\n  font-size: 12px;\n  color: #888;\n  font-family: 'system-ui'; }\n",""]),exports.locals={outer:"styles__outer___1Tg0R",active:"styles__active___2uPkM",image:"styles__image___2flb-",title:"styles__title___1jLC7",caption:"styles__caption___1Yz1B"}},638:function(module,exports,__webpack_require__){(exports=module.exports=__webpack_require__(125)(!1)).push([module.i,".styles__container___3qFgA, .styles__listContainer___Zvi5u, .styles__carouselContainer___G9gDj {\n  display: flex; }\n\n.styles__listContainer___Zvi5u {\n  height: 400px; }\n\n.styles__carouselContainer___G9gDj {\n  flex-direction: column; }\n  .styles__carouselContainer___G9gDj .styles__map___2fqYh {\n    height: 80%; }\n\n.styles__list___PyW1t {\n  flex: 2;\n  order: 1;\n  height: 100%;\n  overflow: scroll;\n  -webkit-overflow-scrolling: touch; }\n\n.styles__carousel___1gXgX {\n  display: flex;\n  overflow: scroll;\n  -webkit-overflow-scrolling: touch; }\n",""]),exports.locals={container:"styles__container___3qFgA",listContainer:"styles__listContainer___Zvi5u",carouselContainer:"styles__carouselContainer___G9gDj",map:"styles__map___2fqYh",list:"styles__list___PyW1t",carousel:"styles__carousel___1gXgX"}},645:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(38),_components_SingleMap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(181),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),infoBoxTab="Infobox Options",mapTab="Map Options",stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Single map",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs),stories.add("With infoBox",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SingleMap__WEBPACK_IMPORTED_MODULE_2__.a,{zoom:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Map zoom",8,{},mapTab),center:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Map center",{lat:-34.397,lng:150.644},mapTab),infoBox:{icon:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Info icon url","",infoBoxTab),title:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Info title","Where we will meet",infoBoxTab),caption:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Info caption","At front of Odakyu Hyakkaten. Shinjuku District, Shinjuku",infoBoxTab),offset:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Offset",{x:0,y:0},infoBoxTab)}})}),stories.add("With infoBox and icon",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SingleMap__WEBPACK_IMPORTED_MODULE_2__.a,{zoom:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Map zoom",8,{},mapTab),center:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Map center",{lat:-34.397,lng:150.644},mapTab),infoBox:{icon:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Info icon url","https://img.icons8.com/dusk/64/000000/picture.png",infoBoxTab),title:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Info title","Where we will meet",infoBoxTab),caption:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Info caption","At front of Odakyu Hyakkaten. Shinjuku District, Shinjuku",infoBoxTab),offset:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Info offset",{x:0,y:0},infoBoxTab)}})})}.call(this,__webpack_require__(76)(module))},647:function(module,exports,__webpack_require__){(exports=module.exports=__webpack_require__(125)(!1)).push([module.i,".styles__box___27LZc {\n  background-color: white;\n  padding: 20px;\n  width: 255px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.styles__icon___2QWz2 {\n  margin-right: 20px;\n  width: 45px;\n  height: 45px; }\n\n.styles__title___3_3J_ {\n  font-size: 16px;\n  font-weight: bold;\n  font-family: 'system-ui';\n  margin-bottom: 5px;\n  color: #333; }\n\n.styles__caption___304R3 {\n  font-size: 14px;\n  font-family: 'system-ui';\n  color: #888; }\n",""]),exports.locals={box:"styles__box___27LZc",icon:"styles__icon___2QWz2",title:"styles__title___3_3J_",caption:"styles__caption___304R3"}},648:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(38),_components_Cell__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(128),_components_InfoBox__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(129),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("UI elements",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs),stories.add("Cell",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cell__WEBPACK_IMPORTED_MODULE_2__.a,{icon:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Icon","https://img.icons8.com/dusk/64/000000/picture.png"),title:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Title","A title here"),caption:"A caption here"})}),stories.add("Info Box",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InfoBox__WEBPACK_IMPORTED_MODULE_3__.a,{icon:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Icon","https://img.icons8.com/dusk/64/000000/picture.png"),title:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Title","A title here"),caption:"A caption here"})})}.call(this,__webpack_require__(76)(module))},67:function(module,exports,__webpack_require__){var content=__webpack_require__(637);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(126)(content,options);content.locals&&(module.exports=content.locals)},87:function(module,exports,__webpack_require__){var content=__webpack_require__(638);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(126)(content,options);content.locals&&(module.exports=content.locals)},88:function(module,exports,__webpack_require__){var content=__webpack_require__(647);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(126)(content,options);content.locals&&(module.exports=content.locals)}},[[293,1,2]]]);
//# sourceMappingURL=main.8a45d2d04fc39baff921.bundle.js.map