(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(57)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},53:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(20),c=a.n(l),r=(a(29),a(7)),i=a(8),s=a(10),u=a(9),m=a(11),h=a(59),d=a(61),k=a(60);a(30);var v=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark sticky"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},o.a.createElement("div",{className:"navbar-nav"},o.a.createElement("a",{className:"nav-item nav-link",href:"/search"},"Search"),o.a.createElement("a",{className:"nav-item nav-link",href:"/saved"},"Saved"))))},f=a(21);a(31);var b=function(e){var t=e.children;return o.a.createElement("div",{className:"jumbotron"},t)};a(32);var g=function(e){return o.a.createElement("div",{class:"container"},o.a.createElement("div",{className:"card mb-3"},o.a.createElement("div",{className:"row no-gutters"},o.a.createElement("div",{className:"col-md-4 imageHolder"},o.a.createElement("img",{src:e.image,alt:e.title})),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"card-header"},e.title),o.a.createElement("div",{className:"card-body"},o.a.createElement("h6",{className:"card-title"},e.subtitle),o.a.createElement("h6",{className:"card-text"},"Authors:",e.authors.map(function(e){return o.a.createElement("span",{key:e}," ",e)})),o.a.createElement("h6",{className:"card-text"},e.description),o.a.createElement("a",{href:e.link},o.a.createElement("button",{class:"btn btn-primary btn-lg active"},"View")),o.a.createElement("button",{class:"btn btn-primary btn-lg active deleteBtn",onClick:function(){return e.handleClick(e)}},e.clickType," "))))))};a(33);var p=function(e){var t=e.children;return o.a.createElement("div",null,t)},E=a(6),B=a.n(E),y={getBooks:function(e){return B.a.get("/api/google",{params:{q:e}})}},N={getBooks:function(){return B.a.get("/api/books")},getBook:function(e){return B.a.get("/api/books/"+e)},deleteBook:function(e){return B.a.delete("/api/books/"+e)},saveBook:function(e){return B.a.post("/api/books",e)}},S=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],searchBar:""},a.loadBooks=function(){y.getBooks().then(function(e){console.log(e),a.setState({books:e.data}),console.log(a.state.books)}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(f.a)({},n,o)),console.log("Search Bar State: ".concat(a.state.searchBar))},a.handleFormSubmit=function(e){e.preventDefault(),console.log("Handle form submit"),a.state.searchBar&&(console.log(a.state.searchBar.trim()),y.getBooks({query:a.state.searchBar}).then(function(e){console.log(e),a.setState({books:e.data})}).catch(function(e){return console.log(e)}))},a.handleClick=function(e){console.log("Saved"),N.saveBook({title:e.title,subtitle:e.subtitle,authors:e.authors,link:e.link,description:e.description,image:e.image,googleId:e.id}).then(function(e){console.log(e),a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App container"},o.a.createElement(b,null,o.a.createElement("h1",null,"(React) Google Books Search"),o.a.createElement("h3",null,"Search for and Save Books of Interest")),o.a.createElement("h3",null,"Book Search"),o.a.createElement("br",null),o.a.createElement("form",null,o.a.createElement("h5",null,"Book"),o.a.createElement("input",{type:"text",onChange:this.handleInputChange,name:"searchBar",placeholder:"Book Title"}),o.a.createElement("button",{onClick:this.handleFormSubmit},"Search")),o.a.createElement("hr",null),this.state.books.length?o.a.createElement(p,null,this.state.books.map(function(t){return o.a.createElement(g,{key:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,link:t.volumeInfo.canonicalVolumeLink,id:t.id,handleClick:e.handleClick,clickType:"Save"})})):o.a.createElement("h1",{className:"text-center"},"No Books to Display"))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:{}},a.loadBooks=function(){N.getBooks().then(function(e){console.log(e),a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.handleClick=function(e){console.log("Deleted"),console.log(e.id),N.deleteBook(e.id).then(function(e){console.log(e),a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App container"},o.a.createElement(b,null,o.a.createElement("h1",null,"(React) Google Books Search"),o.a.createElement("h3",null,"Save Books of Interest")),this.state.books.length?o.a.createElement(p,null,this.state.books.map(function(t){return o.a.createElement(g,{key:t.googleId,title:t.title,subtitle:t.subtitle,authors:t.authors,description:t.description,image:t.image,link:t.link,id:t._id,handleClick:e.handleClick,clickType:"Delete"})})):o.a.createElement("h1",{className:"text-center"},"No Books to Display"))}}]),t}(n.Component);var w=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))},O=(a(53),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(d.a,null,o.a.createElement(k.a,{exact:!0,path:"/",component:S}),o.a.createElement(k.a,{exact:!0,path:"/search",component:S}),o.a.createElement(k.a,{exact:!0,path:"/saved",component:j}),o.a.createElement(k.a,{component:w}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.8e6d4eba.chunk.js.map