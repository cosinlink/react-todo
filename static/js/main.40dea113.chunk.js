(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),u=n(8),i=n(3),o=n(7),m=n(4);function s(e){var t=e.newTask,n=e.handleChange,a=e.handleSubmit;return l.a.createElement("form",{onSubmit:a},l.a.createElement("input",{name:"title",placeholder:"New task",value:t.title||"",onChange:n}),t.title?l.a.createElement(l.a.Fragment,null,l.a.createElement("textarea",{name:"description",placeholder:"Details...",value:t.description||"",onChange:n}),l.a.createElement("button",{type:"submit"},"Add Task")):null)}function d(e){var t=e.allTasks,n=e.handleDelete;return l.a.createElement("ul",null,t.map((function(e){var t=e.title,a=e.description,r=e.id;return l.a.createElement("li",{key:r},l.a.createElement("div",null,l.a.createElement("h2",null,t),l.a.createElement("button",{onClick:function(){return n(r)}},"X")),a?l.a.createElement("p",null,a):null)})))}function h(){var e=Object(a.useState)({}),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),h=Object(m.a)(c,2),p=h[0],E=h[1];return l.a.createElement("main",null,l.a.createElement("h1",null,"Tasks"),l.a.createElement(s,{newTask:n,handleChange:function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(o.a)({},e,Object(i.a)({},n,a))}))},handleSubmit:function(){E((function(e){return[].concat(Object(u.a)(e),[n])}))}}),l.a.createElement(d,{allTasks:p,handleDelete:function(e){return E((function(t){return t.filter((function(t,n,a){return t.id!==e}))}))}}))}c.a.render(l.a.createElement(h,null),document.getElementById("app"))},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.40dea113.chunk.js.map