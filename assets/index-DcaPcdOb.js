var m=Object.defineProperty;var f=r=>{throw TypeError(r)};var g=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var h=(r,e,t)=>g(r,typeof e!="symbol"?e+"":e,t),y=(r,e,t)=>e.has(r)||f("Cannot "+t);var u=(r,e,t)=>(y(r,e,"read from private field"),t?t.call(r):e.get(r)),d=(r,e,t)=>e.has(r)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t);var a=(r,e,t)=>(y(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var l,o,c;class S{constructor(e,{loop:t=!1,typeSpeed:n=50,deletingSpeed:i=51}){d(this,o);h(this,"element");h(this,"loop");h(this,"typeSpeed");h(this,"deletingSpeed");d(this,l,[]);this.element=e,this.loop=t,this.typeSpeed=n,this.deletingSpeed=i}typeString(e){return a(this,o,c).call(this,t=>{let n=0;const i=setInterval(()=>{this.element.append(e[n]),n++,n==e.length&&(clearInterval(i),t())},this.typeSpeed)}),this}deleteChars(e){return a(this,o,c).call(this,t=>{let n=0;const i=setInterval(()=>{this.element.innerText=this.element.innerText.substring(0,this.element.innerText.length-1),n++,n==e&&(clearInterval(i),t())},this.deletingSpeed)}),this}deleteAll(e=this.deletingSpeed){return a(this,o,c).call(this,t=>{const n=setInterval(()=>{this.element.innerText=this.element.innerText.substring(0,this.element.innerText.length-1),this.element.innerText.length==0&&(clearInterval(n),t())},e)}),this}pauseFor(e){return a(this,o,c).call(this,t=>{setTimeout(()=>{t()},e)}),this}async start(){let e=u(this,l).shift();for(;e!=null;)await e(),this.loop&&u(this,l).push(e),e=u(this,l).shift();return this}}l=new WeakMap,o=new WeakSet,c=function(e){u(this,l).push(()=>new Promise(e))};const v=new S(document.querySelector(".white-spaces"),{loop:!0});v.typeString(" Where do i start?").pauseFor(1e3).typeString(`

functio`).deleteChars(7).typeString(" const temp").pauseFor(150).deleteAll(10).typeString(" why is this so easy?").pauseFor(1e3).typeString(`

dont compare yourself with others`).pauseFor(1e3).typeString(`

finally i can do this`).pauseFor(1e3).deleteAll(10).start();
