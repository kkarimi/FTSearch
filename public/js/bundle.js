!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="L7Xl")}({"03Zz":function(e,t,n){var a=function(e){return document.createElement(e)},r=function(e){return document.createTextNode(e)},i=function(e,t,n){e.setAttribute(t,n)};e.exports=function(e,t){var n=a("li"),o=a("article");i(o,"class","o-teaser o-teaser--has-image"),i(o,"data-o-component","o-teaser");var c=a("div");i(c,"class","o-teaser__image-container");var d=a("div");i(d,"class","o-teaser__image-placeholder image-placeholder");var s=a("img");s.src="/images/FTlogo194x194.png",i(s,"class","o-teaser__image"),i(s,"alt","article image");var u=a("div");i(u,"class","o-teaser__content");var l=a("div");i(l,"class","o-teaser__meta");var p=a("h3");i(p,"class","article__tag");var f=a("a");i(f,"href",""+e.tagLink),f.appendChild(r(e.tag));var v=a("h3");i(v,"class","o-teaser__heading ");var m=a("a");i(m,"href",""+e.link),m.appendChild(r(e.title));var h=a("p");i(h,"class","o-teaser__standfirst"),h.appendChild(r(e.excerpt));var g=a("p");e.author?g.appendChild(r(e.author)):g.appendChild(r(""));var C=a("time");C.appendChild(r(e.publicationDate)),t.appendChild(n),n.appendChild(o),o.appendChild(c),c.appendChild(d),d.appendChild(s),o.appendChild(u),u.appendChild(l),l.appendChild(p),p.appendChild(f),u.appendChild(v),v.appendChild(m),u.appendChild(h),u.appendChild(g),u.appendChild(C)}},"0dtO":function(e,t,n){var a=function(e,t,n){e.setAttribute(t,n)},r=function(e,t){e.removeAttribute(t)},i=function(e){var t=e.nextPageNumber,n=(e.previousPageNumber,e.currentPageNumber),i=document.getElementById("previousPageLink"),o=document.getElementById("nextPageLink"),c=document.getElementById("previousPageButton"),d=document.getElementById("nextPageButton");1===n?(a(i,"class","inactiveLink"),a(c,"disabled","disabled")):(a(i,"class",""),r(c,"disabled")),t===e.totalNumberOfPages?(a(o,"class","inactiveLink"),a(d,"disabled","disabled")):(a(o,"class",""),r(d,"disabled"))};e.exports=function(e,t){i(e),document.getElementById("currentPage-Number").innerHTML=e.currentPageNumber,document.getElementById("previousPageLink").href="?q="+t+"&page="+e.previousPageNumber,document.getElementById("nextPageLink").href="?q="+t+"&page="+e.nextPageNumber,history.replaceState("","","?q="+t+"&page="+e.currentPageNumber)}},HerG:function(e,t,n){var a=n("03Zz"),r=n("0dtO");e.exports=function(e){if(e){for(var t=document.getElementById("list-of--results");t.firstChild;)t.removeChild(t.firstChild);e.articles.forEach(function(e){a(e,t)}),r(e.pageInformation,e.articles[0].keyword)}}},L7Xl:function(e,t,n){var a=n("a3nv"),r=(n("03Zz"),n("0dtO"),n("HerG"));if("interactive"===document.readyState||"complete"===document.readyState){document.dispatchEvent(new CustomEvent("o.DOMContentLoaded")),"serviceWorker"in navigator&&navigator.serviceWorker.register("/serviceWorker.js").then(function(e){console.log("Service Worker Registration succeeded")}).catch(function(e){console.log("Service Worker Registration failed with "+e)});var i=function(e){var t="/search"+e;if(self.fetch)fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).catch(function(e){return console.error("Error:",e)}).then(function(e){r(e)});else{var n=a();!function(){n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){var e=JSON.parse(n.responseText);r(e)}else alert("An error occurred during your request: "+n.status+" "+n.statusText)},n.open("GET",t),n.setRequestHeader("Accepts","application/json"),n.send()}()}},o=document.getElementById("nextPageLink");null!==o&&o.addEventListener("click",function(e){e.preventDefault();var t=o.getAttribute("href");i(t)});var c=document.getElementById("previousPageLink");null!==c&&c.addEventListener("click",function(e){e.preventDefault();var t=c.getAttribute("href");i(t)})}document.addEventListener("DOMContentLoaded",function(){document.dispatchEvent(new CustomEvent("o.DOMContentLoaded"))})},a3nv:function(e,t,n){e.exports=function(){if(window.XMLHttpRequest)xmlhttp=new XMLHttpRequest;else if(window.ActiveXObject)try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}return xmlhttp||alert("Giving up : Cannot create an XMLHTTP instance"),xmlhttp}}});