/*! For license information please see main.65c69661.chunk.js.LICENSE.txt */
(this["webpackJsonpgithub_search-redux-thunk"]=this["webpackJsonpgithub_search-redux-thunk"]||[]).push([[0],{16:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var s=r(1),c=r(0),n=r.n(c),a=r(3),i=r.n(a),u=(r(16),r(4)),o=function(e){return Object(s.jsxs)("div",{className:"user-info",children:[Object(s.jsx)("div",{className:"avatar",children:Object(s.jsx)("img",{src:e.user.avatar_url,alt:"avatar"})}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("h1",{children:e.user.name}),Object(s.jsx)("p",{children:Object(s.jsxs)("strong",{children:["Bio:",e.user.bio]})}),Object(s.jsx)("p",{children:Object(s.jsxs)("strong",{children:["location:",e.user.location]})}),Object(s.jsx)("p",{children:Object(s.jsxs)("strong",{children:["followers:",e.user.followers]})}),Object(s.jsx)("p",{children:Object(s.jsxs)("strong",{children:["following:",e.user.following]})})]})]})};var l=Object(u.b)((function(e){return{data:e}}))((function(e){var t;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("form",{onSubmit:function(r){r.preventDefault();var s=t.value;e.dispatch(function(e){var t=e.replace(/\s/g,"");return f.dispatch({type:"FETCH_USER"}),function(e,r){return fetch("https://api.github.com/users/".concat(t)).then((function(e){return e.json()})).then((function(t){if("Not Found"===t.message)throw new Error("No such user found!");e(function(e){return{type:"FETCHED_USER",data:e}}(t))})).catch((function(t){return e({type:"RECEIVE_ERROR"})}))}}(s)),t.value="",console.log(s)},className:"form",children:[Object(s.jsx)("h2",{className:"title",children:"Github Search Profile"}),Object(s.jsx)("input",{type:"text",placeholder:"Enter github username",required:!0,ref:function(e){return t=e}}),Object(s.jsx)("button",{className:"button",children:"Submit"})]}),e.data.isFetching?Object(s.jsx)("div",{className:"fetching_loading"}):null,e.data.isError?Object(s.jsx)("h3",{className:"error",children:"No such user exists."}):null,!0===e.data.receiveData?Object(s.jsx)(o,{user:e.data.userData}):null]})})),h=r(2),j={userData:{},isFetching:!1,isError:!1,receiveData:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return Object.assign({},e,{isFetching:!0,userData:{},isError:!1,receiveData:!1});case"FETCHED_USER":return Object.assign({},e,{userData:t.data,isFetching:!1,isError:!1,receiveData:!0});case"RECEIVE_ERROR":return Object.assign({},e,{isError:!0,userData:{},isFetching:!1,receiveData:!1});default:return e}},b=r(10),O=Object(h.c)(d,Object(h.a)(b.a)),f=t.default=O;i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(u.a,{store:O,children:Object(s.jsx)(l,{})})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.65c69661.chunk.js.map