"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[60],{4081:function(n,e,t){t.d(e,{FU:function(){return f},Up:function(){return l},gL:function(){return g},uL:function(){return d},zv:function(){return h}});var r=t(5861),c=t(4687),o=t.n(c),a=t(2007),i=t(4569),u=t.n(i),s="https://api.themoviedb.org/3/",p="9922346ea7680187f6bd01b1263e365d",l=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("".concat(s,"/trending/all/day?api_key=").concat(p));case 3:return e=n.sent,t=e.data.results,r=t.map((function(n){return{id:n.id,poster_path:n.poster_path}})),n.abrupt("return",{movieData:r});case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("".concat(s,"movie/").concat(e,"?api_key=").concat(p,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("".concat(s,"search/movie?api_key=").concat(p,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,r=t.data.results,n.abrupt("return",{results:r});case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(p,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(p,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();f.propTypes={id:a.PropTypes.number.isRequired},d.propTypes={id:a.PropTypes.string.isRequired}},8758:function(n,e,t){t.d(e,{$:function(){return h}});var r,c,o,a=t(501),i=t(6871),u=t(168),s=t(9202),p=s.Z.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: centr;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]})),l=s.Z.li(c||(c=(0,u.Z)(["\n  flex-basis: calc((100% - 120px) / 4);\n  padding: ","px;\n  flex-wrap: wrap;\n  object-fit: cover;\n  &:hover,\n  &:focus {\n    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      0px 1px 1px rgba(0, 0, 0, 0.12);\n    transform: scale(1.03);\n  }\n"])),(function(n){return n.theme.space[2]})),f=s.Z.img(o||(o=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),d=t(184),h=function(n){var e=n.results,t=(0,i.TH)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(p,{children:e.map((function(n){var e=n.id,r=n.poster_path;return(0,d.jsx)(l,{children:(0,d.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:t},children:(0,d.jsx)(f,{src:"https://image.tmdb.org/t/p/w500"+r,alt:""})})},e)}))})})}},5060:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,c,o,a,i,u=t(5861),s=t(885),p=t(4687),l=t.n(p),f=t(2791),d=t(501),h=t(5562),g=t.n(h),m=t(168),v=t(9202),x=v.Z.div(r||(r=(0,m.Z)(["\n  //   top: 0;\n  //   left: 0;\n  //   position: sticky;\n  //   z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: ","px;\n  padding-right: ","px;\n  padding-left: ","px;\n  color: ",";\n"])),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.white})),w=v.Z.form(c||(c=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 3px;\n  overflow: hidden;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black})),b=v.Z.input(o||(o=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: ",";\n  border: none;\n\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  &::placeholder {\n    font: inherit;\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.s})),y=v.Z.button(a||(a=(0,m.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: ",";\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"])),(function(n){return"url(".concat(n.img,")")})),Z=v.Z.span(i||(i=(0,m.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),k=t(184),j=function(n){var e=n.onSubmit,t=(0,f.useState)(""),r=(0,s.Z)(t,2),c=r[0],o=r[1],a=function(){o("")};return(0,k.jsx)("div",{children:(0,k.jsx)(x,{children:(0,k.jsxs)(w,{onSubmit:function(n){if(n.preventDefault(),""===c.trim())return g().Notify.warning("Error Image with name ".concat(c," not found!"));e(c),a()},children:[(0,k.jsx)(y,{type:"submit",img:"https://img.icons8.com/windows/72/search-more.png",children:(0,k.jsx)(Z,{children:"Search"})}),(0,k.jsx)(b,{value:c,onChange:function(n){o(n.currentTarget.value.toLowerCase())},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"})]})})})},_=t(4081),S=t(8758),z=function(){var n,e=(0,f.useState)(null),t=(0,s.Z)(e,2),r=t[0],c=t[1],o=(0,d.lr)(),a=(0,s.Z)(o,2),i=a[0],p=a[1],h=null!==(n=i.get("query"))&&void 0!==n?n:"";(0,f.useEffect)((function(){""!==h&&(0,u.Z)(l().mark((function n(){var e,t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,_.uL)(h);case 2:e=n.sent,t=e.results,c(t);case 5:case"end":return n.stop()}}),n)})))()}),[h]);return(0,k.jsxs)("div",{children:[(0,k.jsx)(j,{onSubmit:function(n){p(""!==n?{query:n}:{}),c([])}}),(null===r||void 0===r?void 0:r.length)>0&&(0,k.jsx)(S.$,{results:r})]})}}}]);
//# sourceMappingURL=60.231a86cd.chunk.js.map