(()=>{
'use strict';
const input=document.getElementById('helpSearch');
const results=document.getElementById('helpSearchResults');
const sections=[...document.querySelectorAll('.help-entry')];
const links=[...document.querySelectorAll('[data-help-jump]')];
const norm=x=>String(x||'').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'');
let timer;
function search(){
 const q=norm(input.value).trim();
 if(q.length<2){results.hidden=true;results.replaceChildren();return}
 const terms=q.split(/\s+/).filter(Boolean);
 const matches=sections.map(e=>{
   const title=e.querySelector('h2').textContent;
   const text=norm(e.textContent+' '+(e.dataset.search||''));
   return {el:e,title,score:terms.every(t=>text.includes(t))?(terms.reduce((n,t)=>n+(norm(title).includes(t)?4:0),0)+1):0};
 }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,9);
 results.replaceChildren();
 if(!matches.length){const p=document.createElement('p');p.textContent='No matching topics. Try a shorter search.';results.appendChild(p)}
 for(const m of matches){const a=document.createElement('a');a.href='#'+m.el.id;const name=document.createElement('b');name.textContent=m.title;const small=document.createElement('small');small.textContent='OPEN TOPIC ↗';a.append(name,small);a.addEventListener('click',()=>{results.hidden=true;input.value=''});results.appendChild(a)}
 results.hidden=false;
}
input.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(search,90)});
input.addEventListener('keydown',e=>{if(e.key==='Escape'){input.value='';results.hidden=true;input.blur()}if(e.key==='Enter'&&!results.hidden){const a=results.querySelector('a');if(a)a.click()}});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&!e.ctrlKey&&!e.metaKey){e.preventDefault();input.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('.help-search-wrap')&&!e.target.closest('.help-search-results'))results.hidden=true});
if('IntersectionObserver' in window){const o=new IntersectionObserver(entries=>{const visible=entries.filter(x=>x.isIntersecting);if(!visible.length)return;visible.sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);const id=visible[0].target.id;links.forEach(a=>a.classList.toggle('active',a.hash==='#'+id))},{rootMargin:'-100px 0px -68% 0px',threshold:0});sections.forEach(s=>o.observe(s))}
})();
