(()=>{"use strict";const e=()=>{const e=document.querySelector("section");e.classList.add("home");const t=document.createElement("article"),n=document.createElement("p"),d=document.createElement("p");n.textContent="Potatoes are the best.",d.textContent="Come and eat delicious potatoes at Potatoes.",t.appendChild(n),t.appendChild(d),e.appendChild(t)},t={insertHome:e,insertMenu:()=>{const e=document.querySelector("section");e.classList.add("menu");const t=document.createElement("article"),n=document.createElement("div"),d=document.createElement("p"),c=document.createElement("p");n.classList.add("mashed"),d.textContent="Mashed potatoes",c.textContent="5$",t.appendChild(n),t.appendChild(d),t.appendChild(c);const o=document.createElement("article"),a=document.createElement("div"),l=document.createElement("p"),m=document.createElement("p");a.classList.add("fried"),l.textContent="Fried potatoes",m.textContent="5$",o.appendChild(a),o.appendChild(l),o.appendChild(m);const p=document.createElement("article"),i=document.createElement("div"),s=document.createElement("p"),r=document.createElement("p");i.classList.add("boiled"),s.textContent="Potatoes",r.textContent="5$",p.appendChild(i),p.appendChild(s),p.appendChild(r),e.appendChild(t),e.appendChild(o),e.appendChild(p)},insertContact:()=>{const e=document.querySelector("section");e.classList.add("contact");const t=document.createElement("article"),n=document.createElement("h2"),d=document.createElement("p");n.textContent="Address",d.textContent="Potato Av.42",t.appendChild(n),t.appendChild(d),e.appendChild(t);const c=document.createElement("article"),o=document.createElement("h2"),a=document.createElement("p");o.textContent="Email",a.textContent="potato@potato.com",c.appendChild(o),c.appendChild(a),e.appendChild(c)}};(()=>{const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("nav"),d=document.createElement("section"),c=document.createElement("h1");c.textContent="Potatoes",t.appendChild(c);const o=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div");o.textContent="Home",a.textContent="Menu",l.textContent="Contact",n.appendChild(o),n.appendChild(a),n.appendChild(l),e.appendChild(t),e.appendChild(n),e.appendChild(d)})(),e(),function(){const e=document.querySelector("nav"),n=document.querySelector("section"),d=e=>{c(),o();let n=e.target;n.classList.add("selected"),t["insert"+n.textContent]()},c=()=>{n.textContent="",n.classList=""},o=()=>{e.childNodes.forEach((e=>{e.classList.remove("selected")}))};e.childNodes.forEach((e=>{e.addEventListener("click",d)}))}()})();