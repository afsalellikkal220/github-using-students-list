(this["webpackJsonpgithub-using-students-list"]=this["webpackJsonpgithub-using-students-list"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n.n(c),s=(n(12),n(13),n(4)),a=n(3),o=n.n(a),i=n(6),l=n(7),u=n(1),j=n(0);function b(){var e=Object(u.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(u.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t,n,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/abjs/github-using-students-list/main/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.Data,s=Object.keys(r).map((function(e){return r[e]})),console.log(s),c(s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}try{!function(){e.apply(this,arguments)}()}catch(t){console.log("error",t)}}),[]),Object(j.jsx)("div",{className:"app__container",children:Object(j.jsx)("div",{className:"app__component",children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(u.createElement)(p,Object(s.a)(Object(s.a)({},e),{},{key:t}))}))})})}var p=function(e){var t=e.name,n=e.github,c=e.college,r=e.department,s=n.replace("https://github.com/","");return Object(j.jsxs)("div",{className:"info__component",children:[Object(j.jsx)("a",{className:"avatar_component",href:n,target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{src:"".concat(n,".png"),alt:"Github profile image of "+t})}),Object(j.jsx)("div",{className:"name_college_department",children:Object(j.jsxs)("p",{children:["Hey , this is ",Object(j.jsx)("strong",{children:t})," from ",Object(j.jsx)("strong",{children:c})," ","in ",Object(j.jsx)("strong",{children:r})," department."]})}),Object(j.jsx)("a",{className:"github_info",href:n,target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=".concat(s,"&&show_icons=true&title_color=000&icon_color=00f&text_color=000&bg_color=fff&hide_rank=true"),alt:"".concat(t)})})]})};r.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.32eb7dfc.chunk.js.map