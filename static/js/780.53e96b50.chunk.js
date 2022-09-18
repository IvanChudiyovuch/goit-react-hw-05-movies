"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[780],{1780:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,c,i,u,o=t(5861),s=t(885),p=t(4687),l=t.n(p),d=t(6871),f=t(2791),v=t(4081),h=t(168),g=t(9202),x=g.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  margin: 0 auto;\n  padding: 10px;\n  border-top: 1px solid black;\n"]))),m=g.Z.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: centr;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]})),w=g.Z.li(c||(c=(0,h.Z)(["\n  flex-basis: calc((100% - 150px) / 5);\n  padding: ","px;\n  flex-wrap: wrap;\n  object-fit: cover;\n  flex-grow: 1;\n"])),(function(n){return n.theme.space[2]})),y=g.Z.img(i||(i=(0,h.Z)(["\n  width: 100%;\n"]))),_=g.Z.div(u||(u=(0,h.Z)(["\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),b=t(184),Z=function(n){var e=n.credits;return(0,b.jsx)(x,{children:(0,b.jsx)(m,{children:e.map((function(n){var e=n.character,t=n.profile_path,r=n.original_name,a=n.credit_id;return(0,b.jsxs)(w,{children:[(0,b.jsx)(y,{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://via.placeholder.com/260x390?text=No+Photo",alt:r}),(0,b.jsxs)(_,{children:[(0,b.jsx)("h4",{children:r}),(0,b.jsxs)("p",{children:["Character: ",(0,b.jsx)("span",{children:e})]})]})]},a)}))})})},k=function(){var n=(0,d.UO)().id,e=(0,f.useState)([]),t=(0,s.Z)(e,2),r=t[0],a=t[1];return(0,f.useEffect)((function(){(0,o.Z)(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.zv)(n);case 2:t=e.sent,r=t.cast,a(r);case 5:case"end":return e.stop()}}),e)})))()}),[n]),(0,b.jsx)("div",{children:r.length>0?(0,b.jsx)(Z,{credits:r}):"We have no cast for this movie"})}},4081:function(n,e,t){t.d(e,{FU:function(){return d},Up:function(){return l},gL:function(){return h},uL:function(){return f},zv:function(){return v}});var r=t(5861),a=t(4687),c=t.n(a),i=t(2007),u=t(4569),o=t.n(u),s="https://api.themoviedb.org/3/",p="9922346ea7680187f6bd01b1263e365d",l=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(s,"/trending/all/day?api_key=").concat(p));case 3:return e=n.sent,t=e.data.results,r=t.map((function(n){return{id:n.id,poster_path:n.poster_path}})),n.abrupt("return",{movieData:r});case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(s,"movie/").concat(e,"?api_key=").concat(p,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(s,"search/movie?api_key=").concat(p,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,r=t.data.results,n.abrupt("return",{results:r});case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(p,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(p,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();d.propTypes={id:i.PropTypes.number.isRequired},f.propTypes={id:i.PropTypes.string.isRequired}}}]);
//# sourceMappingURL=780.53e96b50.chunk.js.map