(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=(n(17),n(1)),c=n.n(s),l=n(4),u=n(5),m=n(6),v=n(9),p=n(7),d=n(10);n(19),n(20),n(21);var f=function(e){var t=e.poster,n=e.title;return r.a.createElement("img",{className:"Movie__Poster",src:t,alt:n,title:n})},h=n(8),g=n.n(h);var _=function(e){var t=e.title,n=e.poster,a=e.genres,o=e.summary;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Column"},r.a.createElement(f,{poster:n,title:t})),r.a.createElement("div",{className:"Movie__Column"},r.a.createElement("h1",null,t),r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement("span",{key:t},e)})),r.a.createElement("p",null,r.a.createElement(g.a,{text:o,maxLine:"5",ellipsis:" ...",trimRight:!0,basedOn:"letters"}))))},w=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e){return r.a.createElement(_,{key:e.id,title:e.title,poster:e.medium_cover_image,genres:e.genres,summary:e.summary})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=year").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return r.a.createElement("div",{className:this.state.movies?"App":"App-loading"},this.state.movies?this._renderMovies():r.a.createElement("h1",null,"Loading"))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.62d9c592.chunk.js.map