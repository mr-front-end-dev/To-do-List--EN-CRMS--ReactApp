(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),o=n(3),i=n.n(o),a=(n(9),n(4)),l=(n(10),n(0)),r=function(){return Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("input",{className:"form__input",type:"text",placeholder:"What is there to do?",required:!0}),Object(l.jsx)("button",{className:"form__button",children:"Add new task"})]})},j=(n(12),function(t){var e=t.tasks,n=t.hideDone;return Object(l.jsx)("ul",{className:"tasks",children:e.map((function(t){return Object(l.jsxs)("li",{className:"tasks__item".concat(t.done&&n?" tasks__item--hidden":""),children:[Object(l.jsx)("button",{className:"tasks__button tasks__button--toggleDone",children:t.done?"\u2714":""}),Object(l.jsx)("span",{className:"tasks__content".concat(t.done?" tasks__content--done":""),children:t.content}),Object(l.jsx)("button",{className:"tasks__button tasks__button--remove",children:"\ud83d\uddd1"})]},t.id)}))})}),b=(n(13),function(){return Object(l.jsxs)("section",{className:"section__links",children:[Object(l.jsx)("a",{className:"section__button--link",href:"#",children:Object(l.jsx)("button",{className:"section__button",children:"RU"})}),Object(l.jsx)("a",{className:"section__button--link",href:"#",children:Object(l.jsx)("button",{className:"section__button",children:"DE"})}),Object(l.jsx)("a",{className:"section__button--link",href:"#",children:Object(l.jsx)("button",{className:"section__button",children:"ES"})}),Object(l.jsx)("a",{className:"section__button--link",href:"#",children:Object(l.jsx)("button",{className:"section__button",children:"PL"})}),Object(l.jsx)("a",{className:"section__button--link",href:"#",children:Object(l.jsx)("button",{className:"section__button",children:"UA"})}),Object(l.jsx)("a",{className:"section__button--link",href:"#",children:Object(l.jsx)("button",{className:"section__button section__button--deepskyblue",children:"\ud83c\udf13"})})]})}),d=(n(14),function(t){var e=t.tasks,n=t.hideDone,s=t.toggleHideDone;return Object(l.jsx)("div",{className:"buttons",children:e.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("button",{onClick:s,className:"buttons__button",children:[n?"Show":"Hide"," completed tasks"]}),Object(l.jsx)("button",{className:"buttons__button",autofocus:!0,disabled:e.every((function(t){return t.done})),children:"Complete all tasks"})]})})}),u=(n(15),function(t){var e=t.title,n=t.body,s=t.extraHeaderContent;return Object(l.jsxs)("section",{className:"section",children:[Object(l.jsxs)("header",{className:"section__header",children:[Object(l.jsx)("h2",{className:"section__title",children:e}),s]}),Object(l.jsx)("div",{className:"section__body",children:n})]})}),h=(n(16),function(t){var e=t.title;return Object(l.jsx)("header",{children:Object(l.jsx)("h2",{className:"section__title",children:e})})}),_=(n(17),function(t){var e=t.children;return Object(l.jsx)("main",{className:"container",children:e})}),x=[{id:1,content:"Switch to React.js",done:!0},{id:2,content:"Have lunch",done:!0}];var O=function(){var t=Object(s.useState)(!1),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(l.jsxs)(_,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(h,{title:"To-do list"}),Object(l.jsx)(u,{title:"Add new Task",body:Object(l.jsx)(r,{})}),Object(l.jsx)(u,{title:"To-do list",body:Object(l.jsx)(j,{tasks:x,hideDone:n}),extraHeaderContent:Object(l.jsx)(d,{tasks:x,hideDone:n,toggleHideDone:function(){c(!n)}})}),Object(l.jsx)("section",{className:"section section__stats",children:Object(l.jsx)("div",{})})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),s(t),c(t),o(t),i(t)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.cca3f576.chunk.js.map