(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/dumbell.2e6e928c.svg"},29:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},38:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),u=(a(37),a(38),a(21)),o=a.n(u),m=a(4);var i=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"GitFit: Home"),r.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/register"},"Register"))))};var s=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"GitFit: Login"),r.a.createElement(m.b,{to:"/summary"},"Summary Link for Dev Purposes"))},E=a(8),d=a.n(E),p=a(22),f=a(5),v=a(23),h=a.n(v);var b=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/summary"},"Summary")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/calendar"},"Calendar"))))};var g=function(){var e=Object(n.useState)({}),t=Object(f.a)(e,2),a=t[0],l=t[1];function c(){return(c=Object(p.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://gitfit.lucasreyna.me/advice");case 3:return t=e.sent,e.abrupt("return",t.data[0]);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){(function(){return c.apply(this,arguments)})().then(function(e){e&&l(e)})},[]),r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("h3",null,"GitFit: Summary"),r.a.createElement("div",{id:"adviceDisplay",style:{backgroundColor:"darkgray",borderRadius:15}},r.a.createElement("a",{href:a.source},a.source),r.a.createElement("p",null,'"',a.advice,'" -')))},y=(a(58),a(24)),k=a(25),w=a(27),S=a(26),O=a(28),F=(a(59),function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(w.a)(this,Object(S.a)(t).call(this,e))).state={},a}return Object(O.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.row,a=e.col,n=e.mood,l=e.isSelected,c=e.num,u=l?"selected-tile":"";return r.a.createElement("div",{id:"tile-".concat(t,"-").concat(a),className:"tile ".concat(u)},r.a.createElement("span",{className:"tile-num"},c),r.a.createElement("span",{className:"tile-mood"},n))}}]),t}(n.Component)),j=["Su","Mo","Tu","We","Th","Fr","Sa"];function x(){var e=j.map(function(e){return r.a.createElement("th",{class:"day-week-text"},e)});return r.a.createElement("thead",null,r.a.createElement("tr",null,e))}var N=function(){for(var e=[],t=0;t<6;t++){for(var a=[],n=0;n<7;n++){var r={row:t,col:n,mood:"\ud83d\ude10",num:20,isSelected:!1};a.push(r)}e.push(a)}return e};function C(e){var t=N().map(function(e,t){return r.a.createElement("tr",{key:t},e.map(function(e,a){var n=e.isSelected,l=e.mood,c=e.num;return r.a.createElement("td",null,r.a.createElement(F,{key:a,row:t,col:a,mood:l,num:c,isSelected:n}))}))});return r.a.createElement("tbody",null,t)}var L=function(e){return r.a.createElement("div",{className:"calendar"},r.a.createElement("div",null,r.a.createElement("button",{class:"arrow-button"},"\u21e6"),r.a.createElement("span",{id:"month-year-text"},e.dateData.month," ",e.dateData.year),r.a.createElement("button",{class:"arrow-button"},"\u21e8")),r.a.createElement("table",null,r.a.createElement(x,null),r.a.createElement(C,null)))},A={dayOfWeek:"Thursday",dayOfMonth:25,month:"April",year:2022};var D=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("h3",null,"GitFit: Calendar"),r.a.createElement(L,{dateData:A}))},G=a(1);var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{id:"This is the routes set up div"},r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/",exact:!0,element:r.a.createElement(i,null)}),r.a.createElement(G.a,{path:"/login",exact:!0,element:r.a.createElement(s,null)}),r.a.createElement(G.a,{path:"/register",element:r.a.createElement(s,null)}),r.a.createElement(G.a,{path:"/summary",element:r.a.createElement(g,null)}),r.a.createElement(G.a,{path:"/calendar",element:r.a.createElement(D,null)}))),r.a.createElement("a",{className:"App-link",href:"https://github.com/LukeSandsor/GitFit-App",target:"_blank",rel:"noopener noreferrer"},"Link to GitHub Repo")))},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(T,null)))),R()}},[[29,1,2]]]);
//# sourceMappingURL=main.1778269a.chunk.js.map