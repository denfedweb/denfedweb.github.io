(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[9],{1008:function(e,t,a){"use strict";a.r(t);var n=a(18),c=a(0),o=a.n(c),i=a(364),l=a.n(i),r=a(13),u=a(26);var s=a(36);function m(e){return function(e){if(Array.isArray(e))return Object(u.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(s.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=a(31),b=a(12),d=a(83),h=a.n(d);var p=function(){var e=Object(c.useState)({fontawesome:"",href:"",text:""}),t=Object(n.a)(e,2),a=t[0],i=t[1],l=Object(c.useState)([]),u=Object(n.a)(l,2),s=u[0],d=u[1],p=Object(r.c)((function(e){return e.auth})).token;function v(e){i(Object(b.a)({},a,Object(f.a)({returnSecureToken:!0},e.target.name,e.target.value)))}return Object(c.useEffect)((function(){h.a.get("https://denfedweb-github-io.firebaseio.com/about/socialLinks.json").then((function(e){var t=e.data,a=Object.keys(t).map((function(e){return Object(b.a)({},t[e],{id:e})}));d(a)}))}),[]),o.a.createElement("ul",{className:"collection"},s.map((function(e){return o.a.createElement("li",{key:e.id,className:"collection-item",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},o.a.createElement("span",null,e.text),o.a.createElement("button",{onClick:function(){return t=e.id,void h.a.delete("https://denfedweb-github-io.firebaseio.com/about/socialLinks/".concat(t,".json?auth=").concat(p)).then((function(){var e=s.filter((function(e){return e.id!==t}));d(e)}));var t},className:"btn waves-effect waves-light"},"Remove"))})),o.a.createElement("li",{className:"collection-item"},o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{onChange:v,value:a.fontawesome,id:"fontawesome",name:"fontawesome",type:"text"}),o.a.createElement("label",{htmlFor:"fontawesome"},"Fontawesome icon")),o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{onChange:v,value:a.href,id:"href",name:"href",type:"text"}),o.a.createElement("label",{htmlFor:"href"},"Href")),o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{onChange:v,value:a.text,id:"text",name:"text",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"Text")),o.a.createElement("button",{className:"btn waves-effect waves-light",onClick:function(){h.a.post("https://denfedweb-github-io.firebaseio.com/about/socialLinks.json?auth=".concat(p),a).then((function(){d([].concat(m(s),[a])),i({fontawesome:"",href:"",text:""})}))}},"Add social link")))};var v=function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),a=t[0],i=t[1];return Object(c.useEffect)((function(){h.a.get("https://denfedweb-github-io.firebaseio.com/about/socialLinks.json").then((function(e){var t=e.data,a=Object.keys(t).map((function(e){return Object(b.a)({},t[e],{id:e})}));i(a)}))}),[]),o.a.createElement("ul",null,a.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("i",{className:e.fontawesome})," ",o.a.createElement("a",{href:e.href},e.text))})))},g=a(144),E=a.n(g),j=a(33);t.default=function(){var e=Object(r.c)((function(e){return e.editState})),t=Object(c.useState)(""),a=Object(n.a)(t,2),i=a[0],u=a[1],s=Object(c.useState)(""),m=Object(n.a)(s,2),f=m[0],b=m[1],d=Object(c.useState)(!0),g=Object(n.a)(d,2),w=g[0],O=g[1],k=Object(c.useState)(!0),y=Object(n.a)(k,2),N=y[0],x=y[1],_=Object(r.c)((function(e){return e.auth})).token,S=e.edited;return Object(c.useEffect)((function(){h.a.get("https://denfedweb-github-io.firebaseio.com/about/adminImg.json").then((function(e){var t=e.data;u(t.img),x(!1)})),h.a.get("https://denfedweb-github-io.firebaseio.com/about/htmlContent.json").then((function(e){var t=e.data;b(t.content),O(!1)}))}),[]),o.a.createElement("div",{className:"row ".concat(l.a.row)},o.a.createElement("div",{className:"col l4 ".concat(l.a.leftBlock)},o.a.createElement("h3",{className:"title-text"},"About me"),N?o.a.createElement("div",{className:l.a.imgWrap,style:{backgroundColor:"#424343",height:"250px",width:"250px"}}):o.a.createElement(c.Fragment,null,S?o.a.createElement("div",null,o.a.createElement(E.a,{modules:{toolbar:[["image"]]},theme:"snow",value:i,onChange:u}),o.a.createElement("button",{className:"btn waves-effect waves-light",onClick:function(){h.a.patch("https://denfedweb-github-io.firebaseio.com/about/adminImg.json?auth=".concat(_),{img:i}).then((function(){alert("Updated")}))}},"Update photo")):o.a.createElement("div",{className:l.a.imgWrap,dangerouslySetInnerHTML:{__html:i}})),S?o.a.createElement(p,null):o.a.createElement(v,null)),o.a.createElement("div",{className:"col l8 ".concat(l.a.rightBlock)},w?o.a.createElement(j.a,null):o.a.createElement(c.Fragment,null,S?o.a.createElement("div",null,o.a.createElement(E.a,{modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["clean"]],clipboard:{matchVisual:!1}},theme:"snow",value:f,onChange:b}),o.a.createElement("button",{className:"btn waves-effect waves-light",onClick:function(){h.a.patch("https://denfedweb-github-io.firebaseio.com/about/htmlContent.json?auth=".concat(_),{content:f}).then((function(){alert("Updated")}))}},"Update content")):o.a.createElement("div",{dangerouslySetInnerHTML:{__html:f}}))))}},364:function(e,t,a){e.exports={imgWrap:"about_imgWrap__2Nh7Y",leftBlock:"about_leftBlock__1N0ho",rightBlock:"about_rightBlock__24KhE",row:"about_row__i2GV-"}}}]);
//# sourceMappingURL=9.32becd5a.chunk.js.map