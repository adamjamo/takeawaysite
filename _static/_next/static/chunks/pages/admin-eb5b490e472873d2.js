(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{7953:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return e(1174)}])},1174:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSP:function(){return j}});var r=e(7568),i=e(9815),s=e(4051),c=e.n(s),a=e(5893),l=e(9669),o=e.n(l),d=e(5675),u=e.n(d),h=e(7294),f=e(4468),x=e.n(f),j=!0;n.default=function(t){var n=t.orders,e=t.products,s=(0,h.useState)(e),l=s[0],d=s[1],f=(0,h.useState)(n),j=f[0],p=f[1],m=["preparing","on the way","delivered"],_=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.prev=1,t.next=4,o().delete("https://delishhhapp.netlify.app/api/products/"+n);case 4:t.sent,d(l.filter((function(t){return t._id!==n}))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}(),b=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,s;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=j.filter((function(t){return t._id===n}))[0],r=e.status,t.prev=2,t.next=5,o().put("http://localhost:3000/api/orders/"+n,{status:r+1});case 5:s=t.sent,p([s.data].concat((0,i.Z)(j.filter((function(t){return t._id!==n}))))),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(n){return t.apply(this,arguments)}}();return(0,a.jsxs)("div",{className:x().container,children:[(0,a.jsxs)("div",{className:x().item,children:[(0,a.jsx)("h1",{className:x().title,children:"Products"}),(0,a.jsxs)("table",{className:x().table,children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{className:x().trTitle,children:[(0,a.jsx)("th",{children:"Image"}),(0,a.jsx)("th",{children:"Id"}),(0,a.jsx)("th",{children:"Title"}),(0,a.jsx)("th",{children:"Price"}),(0,a.jsx)("th",{children:"Action"})]})}),l.map((function(t){return(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{className:x().trTitle,children:[(0,a.jsx)("td",{children:(0,a.jsx)(u(),{src:t.img,width:50,height:50,objectFit:"cover",alt:""})}),(0,a.jsxs)("td",{children:[t._id.slice(0,5),"..."]}),(0,a.jsx)("td",{children:t.title}),(0,a.jsxs)("td",{children:["$",t.prices[0]]}),(0,a.jsxs)("td",{children:[(0,a.jsx)("button",{className:x().button,children:"Edit"}),(0,a.jsx)("button",{className:x().button,onClick:function(){return _(t._id)},children:"Delete"})]})]})},t._id)}))]})]}),(0,a.jsxs)("div",{className:x().item,children:[(0,a.jsx)("h1",{className:x().title,children:"Orders"}),(0,a.jsxs)("table",{className:x().table,children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{className:x().trTitle,children:[(0,a.jsx)("th",{children:"Id"}),(0,a.jsx)("th",{children:"Customer"}),(0,a.jsx)("th",{children:"Total"}),(0,a.jsx)("th",{children:"Payment"}),(0,a.jsx)("th",{children:"Status"}),(0,a.jsx)("th",{children:"Action"})]})}),j.map((function(t){return(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{className:x().trTitle,children:[(0,a.jsxs)("td",{children:[t._id.slice(0,5),"..."]}),(0,a.jsx)("td",{children:t.customer}),(0,a.jsxs)("td",{children:["$",t.total]}),(0,a.jsx)("td",{children:0===t.method?(0,a.jsx)("span",{children:"cash"}):(0,a.jsx)("span",{children:"paid"})}),(0,a.jsx)("td",{children:m[t.status]}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{onClick:function(){return b(t._id)},children:"Next Stage"})})]})},t._id)}))]})]})]})}},4468:function(t){t.exports={container:"Admin_container__7Kd1y",item:"Admin_item__FuGBz",table:"Admin_table__brNHw",button:"Admin_button___uar2"}},943:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,{Z:function(){return r}})},3375:function(t,n,e){"use strict";function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}e.d(n,{Z:function(){return r}})},9815:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var r=e(943);var i=e(3375);var s=e(1566);function c(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||(0,i.Z)(t)||(0,s.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=e(943);function i(t,n){if(t){if("string"===typeof t)return(0,r.Z)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,r.Z)(t,n):void 0}}}},function(t){t.O(0,[217,774,888,179],(function(){return n=7953,t(t.s=n);var n}));var n=t.O();_N_E=n}]);