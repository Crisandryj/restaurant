(()=>{"use strict";const e=document.querySelector("body"),t=document.createElement("nav");e.appendChild(t);const n=document.createElement("button"),c=document.createElement("button"),o=document.createElement("button");n.textContent="Home",c.textContent="Menu",o.textContent="Contacts",t.appendChild(n),t.appendChild(c),t.appendChild(o),n.addEventListener("click",(function(){document.querySelector("#content").innerHTML="";const e=document.querySelector("#content"),t=document.createElement("img"),n=document.createElement("h1");n.textContent="Restaurant",e.appendChild(n),t.src="/rest.jpeg",e.appendChild(t)})),c.addEventListener("click",(function(){document.querySelector("#content").innerHTML="";const e=document.querySelector("#content"),t=document.createElement("img"),n=document.createElement("h1");n.textContent="Menu",e.appendChild(n),t.src="/rest.jpeg",e.appendChild(t)}))})();