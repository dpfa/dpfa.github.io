(this["webpackJsonpdpfa-react"]=this["webpackJsonpdpfa-react"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"name":"Duke Sine","body":"Arizona","id":1,"artworks":[{"title":"Unitited","year":1988,"height":0,"width":0,"medium":"pastel","image":"IMG_2807.JPG","price":"1200"},{"title":"Untitled","year":1988,"height":0,"width":0,"medium":"pastel","image":"IMG_2805.JPG","price":"1200"},{"title":"Geronimo","year":1988,"height":0,"width":0,"medium":"colored pencil and graphite on paper","image":"IMG_2818.JPG"},{"title":"Hawk and Rattlesnake","year":1988,"height":0,"width":0,"medium":"colored pencil on paper","image":"IMG_2809.JPG","price":"1800"},{"title":"Buffalo and Eagle","year":1988,"height":0,"width":0,"medium":"graphite on paper","image":"IMG_2814.JPG","price":"2000"},{"title":"Geronimo with Bandana","year":1988,"height":0,"width":0,"medium":"graphite on paper","image":"IMG_2821.JPG","price":"2000"},{"title":"Untitled","year":1988,"height":0,"width":0,"medium":"graphite on paper","image":"IMG_2823.JPG","price":"1800"},{"title":"Untitled","year":1988,"height":0,"width":0,"medium":"colored pencil on paper","image":"IMG_2815.JPG","price":"1500"},{"title":"Untitled","year":1988,"height":0,"width":0,"medium":"colored pencil on paper","image":"IMG_2819.JPG","price":"SOLD"},{"title":"Untitled","year":1988,"height":0,"width":0,"medium":"colored pencil on paper","image":"IMG_2812.JPG","price":"1200"},{"title":"Untitled","year":1988,"height":0,"width":0,"medium":"mixed media","image":"IMG_2808.JPG","price":"2200"},{"title":"Untitled","year":1988,"height":0,"width":0,"medium":"colored pencil on paper","image":"IMG_2824.JPG","price":"1500"},{"title":"Apache Crown Dancers","year":0,"height":0,"width":0,"medium":"white paint on black paper- Set of 5","image":"IMG_2798.JPG","price":"2500"},{"title":"Sacred Clown","year":0,"height":0,"width":0,"medium":"white paint on black paper- Set of 5","image":"IMG_2805.JPG","price":"2500"}]},{"name":"Jim Stoker","body":"New Mexico","id":2,"artworks":[{"title":"The Bluff Remembers the Bison","year":1984,"height":50,"width":60,"medium":"oil on canvas","image":"IMG_2790.JPG","price":"9000"},{"title":"Summer Rain at San Ildefonso","year":1982,"height":50,"width":60,"medium":"oil on canvas","image":"IMG_2791.JPG","price":"8000"},{"title":"Texas Wildflowers and Longhorn","year":0,"height":24,"width":30,"medium":"oil on canvas","image":"IMG_2794.JPG","price":"5000"}]}]')},23:function(e,a,t){e.exports=t(41)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=(t(25),t(14)),l=t.n(r),c=(t(29),t(15));t(30),t(31);t(32);var o=function(e){return n.a.createElement("div",{className:"footer"},n.a.createElement("p",{className:"footer-item"},"\xa9 ",(new Date).getFullYear()," ",e.name," | All Rights Reserved"))},m=t(16),s=t(17),d=t(21),h=t(18),p=t(22),u=(t(33),function(e){var a=window.location.pathname+window.location.search,t=e.path===a?"nav-item active":"nav-item",i=e.disabled?"nav-link disabled":"nav-link";return n.a.createElement("li",{className:t},n.a.createElement("a",{href:e.path,className:i},e.name,e.path===a?n.a.createElement("span",{className:"sr-only"},"(current)"):""))});n.a.Component;var g=function(e){return n.a.createElement("nav",{className:"navbar navbar-expand"},n.a.createElement("a",{className:"navbar-brand",href:"/"},n.a.createElement("img",{src:"/images/DP.png",alt:"DP logo",width:"30px",height:"auto"})),n.a.createElement("div",{className:"navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement(u,{path:"/artists",name:"Artists"}),n.a.createElement(u,{path:"/contact",name:"Contact"}))))};t(34),t(35);var w=function(e){var a=e.data;console.log(a);var t="/images/".concat(a.image),i="".concat("","/images/").concat(a.image);return n.a.createElement("div",{className:"col-6 artwork"},n.a.createElement("a",{href:i},n.a.createElement("img",{src:t,alt:a.title,height:"100",width:"100"})),n.a.createElement("h6",null,a.title),n.a.createElement("p",null,a.medium," - $",a.price))};var v=function(e){var a=e.data;return console.log(a),n.a.createElement("div",{className:"col-12 artist"},n.a.createElement("h4",null,a.name),n.a.createElement("div",{className:"row artworks"},a.artworks.map((function(e,a){return n.a.createElement(w,{className:"col-6",data:e,key:a})}))))};var E=function(e){var a=e.match,t=e.data;return console.log("call artistList"),console.log(a,t),n.a.createElement("div",{className:"artist-list"},n.a.createElement("div",{className:"row artists"},t.map((function(e,a){return n.a.createElement(v,{className:"col-6 artist-listed",data:e,key:a})}))))};var f=function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:"images/IMG_2791.JPG",alt:"IMG_2791",height:"auto",width:"100%"})))};var G=function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h4",null,"Contact "),n.a.createElement("p",null,"Please ",n.a.createElement("a",{href:"emailto:dpfa@gmail.com"},"email us here")," for inquiries regarding available artworks.")))},y=t(5);var N=function(){return console.log("call app"),n.a.createElement("div",{className:"container"},n.a.createElement(g,null),n.a.createElement("main",null,n.a.createElement(y.c,null,n.a.createElement(y.a,{path:"/",component:f,exact:!0}),n.a.createElement(y.a,{exact:!0,path:"/artists",render:function(e){return n.a.createElement(E,Object.assign({},e,{data:c}))}}),n.a.createElement(y.a,{exact:!0,path:"/artist/:id",component:v}),n.a.createElement(y.a,{path:"/contact",component:G}))),n.a.createElement(o,{name:"DP Fine Arts",tagline:"c'est la vie"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=t(9);l.a.render(n.a.createElement(J.a,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.1456c50f.chunk.js.map