(this["webpackJsonpmarvel-search"]=this["webpackJsonpmarvel-search"]||[]).push([[0],{127:function(e,t,a){e.exports=a.p+"static/media/Font-Marvel-Logo.0392e6da.jpg"},144:function(e,t,a){e.exports=a(271)},149:function(e,t,a){},150:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(31),r=a.n(s),l=(a(149),a(38)),o=a(39),i=a(42),u=a(40),m=a(43),h=(a(150),a(127)),d=a.n(h),p=a(282),f=a(136),v=a(32),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).bookList=function(){return a.props.results<1?null:a.props.results.map((function(e){return c.a.createElement(p.a,{key:e.id},c.a.createElement(p.a.Content,null,c.a.createElement(v.b,{to:"/book/".concat(e.id)},c.a.createElement(f.a,{src:e.images[0].path+"."+e.images[0].extension,className:"bookImage"})),c.a.createElement(v.b,{to:"/book/".concat(e.id)},c.a.createElement(p.a.Header,{className:"cardHeader"},e.title))))}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a.Group,{centered:!0,className:"searchResults"},this.bookList(this.props.results))}}]),t}(n.Component),b=a(280),E=a(272),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={value:"",searchResults:[]},a.handleChange=function(e){a.setState({value:e.target.value})},a.getComics=function(){fetch("http://gateway.marvel.com/v1/public/comics?apikey=".concat("53edf8013ffc768094d59e068d968211","&ts=").concat("1","&hash=").concat("7e9a6f0439c442930f6bcf44fdd8dd49","&title=").concat(a.state.value),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.data.results.length>0?(a.setState({searchResults:e.data.results}),console.log(a.state.searchResults),a.setState({value:""})):alert("No matches! Check your spelling and try again.")}))},a.submitSearch=function(){a.getComics()},a.submitKeySearch=function(e){"Enter"===e.key&&a.getComics()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"pageHeader"},c.a.createElement("img",{src:d.a,alt:"Marvel Logo",width:"200px"}),c.a.createElement("h1",{className:"title"},"Search")),c.a.createElement("div",{className:"body"},c.a.createElement(b.a,{focus:!0,placeholder:"Search for Comic Book",className:"searchInput",icon:"search",value:this.state.value,onChange:this.handleChange,onKeyPress:this.submitKeySearch}),c.a.createElement(E.a,{className:"ui button",onClick:this.submitSearch},"Search"),c.a.createElement("div",{className:"main"},c.a.createElement("h2",null,"Results"),c.a.createElement(g,{results:this.state.searchResults}))))}}]),t}(n.Component),k=(a(270),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={book:{},title:"",imagesrc:"",series:"",price:""},a.parseUrl=function(){var e=window.location.href.split("/");return e[e.length-1]},a.getComic=function(e){console.log(e),fetch("http://gateway.marvel.com/v1/public/comics/".concat(e,"?apikey=").concat("53edf8013ffc768094d59e068d968211","&ts=").concat("1","&hash=").concat("7e9a6f0439c442930f6bcf44fdd8dd49"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){a.setState({allBookData:e.data.results[0],title:e.data.results[0].title,imagesrc:e.data.results[0].images[0].path+"."+e.data.results[0].images[0].extension,series:e.data.results[0].series.name,price:e.data.results[0].prices[0].price}),console.log(a.state.book)}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getComic(this.parseUrl())}},{key:"render",value:function(){return c.a.createElement("div",{className:"comicPage"},c.a.createElement("div",{className:"container"},c.a.createElement(f.a,{src:this.state.imagesrc,className:"comicImage"}),c.a.createElement("div",{className:"info"},c.a.createElement("div",null,c.a.createElement("h2",null,"Title"),this.state.title),c.a.createElement("div",null,c.a.createElement("h2",null,"Series"),this.state.series),c.a.createElement("div",null,c.a.createElement("h2",null,"Price"),this.state.price))),c.a.createElement(v.b,{to:"/"},c.a.createElement(E.a,null,"Back to Home Page")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(27);r.a.render(c.a.createElement(v.a,{basename:"/marvelsearch"},c.a.createElement(j.c,null,c.a.createElement(j.a,{exact:!0,path:"/"},c.a.createElement(y,null)),c.a.createElement(j.a,{exact:!0,path:"/book/:id"},c.a.createElement(k,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[144,1,2]]]);
//# sourceMappingURL=main.a0a94c66.chunk.js.map