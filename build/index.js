(()=>{var e,t={892:(e,t,i)=>{"use strict";function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},o.apply(this,arguments)}const n=window.wp.element;var r=i(184),l=i.n(r);const s=window.wp.i18n,a=window.wp.hooks,d=window.wp.compose,c=window.wp.components,b=window.wp.blockEditor,p=(0,d.createHigherOrderComponent)((e=>t=>{const{attributes:i}=t,{hideOnDesktop:o,hideOnTablet:r,hideOnMobile:l}=i;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e,t),(0,n.createElement)(b.InspectorControls,null,(0,n.createElement)(c.PanelBody,{title:(0,s.__)("Visibility","block-visibility")},(0,n.createElement)(c.ToggleControl,{checked:o,label:(0,s.__)("Hide on desktop","block-visibility"),onChange:()=>t.setAttributes({hideOnDesktop:!o})}),(0,n.createElement)(c.ToggleControl,{checked:r,label:(0,s.__)("Hide on tablet","block-visibility"),onChange:()=>t.setAttributes({hideOnTablet:!r})}),(0,n.createElement)(c.ToggleControl,{checked:l,label:(0,s.__)("Hide on mobile","block-visibility"),onChange:()=>t.setAttributes({hideOnMobile:!l})}))))}),"withInspectorControl"),h=(0,d.createHigherOrderComponent)((e=>t=>{const{attributes:i}=t,{hideOnDesktop:r,hideOnTablet:s,hideOnMobile:a}=i,d=l()({"hide-on-desktop":r,"hide-on-tablet":s,"hide-on-mobile":a});return(0,n.createElement)(e,o({},t,{className:d}))}),"withYourCustomBlockClass");(0,a.addFilter)("blocks.registerBlockType","block-visibility/add-attributes",(e=>(void 0!==e.attributes&&(e.attributes=Object.assign(e.attributes,{hideOnDesktop:{type:"boolean",default:!1},hideOnTablet:{type:"boolean",default:!1},hideOnMobile:{type:"boolean",default:!1}})),e))),(0,a.addFilter)("editor.BlockEdit","block-visibility/with-advance-controls",p),(0,a.addFilter)("blocks.getSaveContent.extraProps","block-visibility/add-visibility-classes",((e,t,i)=>{const{hideOnDesktop:o,hideOnTablet:n,hideOnMobile:r}=i;return e.className=l()(e.className,{"hide-on-desktop":o,"hide-on-tablet":n,"hide-on-mobile":r}),e})),(0,a.addFilter)("editor.BlockListBlock","block-visibility/add-visibility-editor-classes",h)},184:(e,t)=>{var i;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)){if(i.length){var l=n.apply(null,i);l&&e.push(l)}}else if("object"===r){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var s in i)o.call(i,s)&&i[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()}},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,i,n,r)=>{if(!i){var l=1/0;for(c=0;c<e.length;c++){for(var[i,n,r]=e[c],s=!0,a=0;a<i.length;a++)(!1&r||l>=r)&&Object.keys(o.O).every((e=>o.O[e](i[a])))?i.splice(a--,1):(s=!1,r<l&&(l=r));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,n,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,[l,s,a]=i,d=0;if(l.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(a)var c=a(o)}for(t&&t(i);d<l.length;d++)r=l[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},i=globalThis.webpackChunkslothtenberg_extensions=globalThis.webpackChunkslothtenberg_extensions||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var n=o.O(void 0,[431],(()=>o(892)));n=o.O(n)})();