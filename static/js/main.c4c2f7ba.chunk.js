(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),s=n(12),r=n.n(s),i=(n(25),n(26),n(13)),l=n(14),h=n(19),d=n(17),j=n(15),u=n.n(j),m=function(e,t){var n=e.filter((function(e){return console.log(e.name),console.log(t),e.name.toLowerCase()===t.toLowerCase()}));return console.log(n),n},b=function(){return u.a.get("https://randomuser.me/api/?results=100&nat=us&inc=name,location,email,dob,cell,picture&noinfo")},p=n(18);n(44);var O=function(e){return Object(c.jsxs)("div",{className:"table-body",children:[e.children,Object(c.jsxs)(p.a,{striped:!0,bordered:!0,responsive:!0,hover:!0,size:"sm",sorting:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Full Name"}),Object(c.jsx)("th",{children:"Location"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"DOB"}),Object(c.jsx)("th",{children:"Mobile"}),Object(c.jsx)("th",{children:"Photo"})]})}),Object(c.jsx)("tbody",{children:e.employees.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.location}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.dob}),Object(c.jsx)("td",{children:e.mobile}),Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:e.photo,class:"photo",alt:"profile"})})]})}))})]})]})};n(45);var x=function(e){return Object(c.jsx)("form",{className:"search",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"employee",list:"employees",type:"text",className:"form-whole",placeholder:"Start typing a name to begin",id:"employee"}),Object(c.jsx)("datalist",{id:"employees",children:e.employees.map((function(t){return Object(c.jsx)("option",{value:t.name},e.employees.name)}))}),Object(c.jsx)("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-warning",children:"Search"})]})})},f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={search:"",employees:[],results:[]},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault();var n=m(e.state.employees,e.state.search);e.setState({employees:n})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){for(var n=t.data.results,c=[],a=0;a<n.length;a++){var o={name:n[a].name.first+" "+n[a].name.last,location:n[a].location.city+", "+n[a].location.state,email:n[a].email,dob:n[a].dob.date,mobile:n[a].cell,photo:n[a].picture.medium};c.push(o)}e.setState({employees:c})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{employees:this.state.employees,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(c.jsx)(O,{employees:this.state.employees})]})}}]),n}(a.Component);n(46);var y=function(e){return Object(c.jsx)("div",{className:"container",children:e.children})};var g=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(y,{children:[Object(c.jsxs)("p",{className:"heading",children:["Type in a name to activate ",Object(c.jsx)("code",{children:"search by name"}),". You can also click on any table heading to ",Object(c.jsx)("code",{children:"sort by that category"}),"."]}),Object(c.jsx)(f,{})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};n(47);r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),v()}},[[48,1,2]]]);
//# sourceMappingURL=main.c4c2f7ba.chunk.js.map