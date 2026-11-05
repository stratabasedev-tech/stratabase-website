(function(){
 const toggle=document.querySelector('[data-menu-toggle]'),nav=document.querySelector('[data-menu]');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
 const search=document.querySelector('#release-search'),filter=document.querySelector('#release-filter'),releases=[...document.querySelectorAll('[data-release]')],empty=document.querySelector('#release-empty');
 function apply(){const q=(search?.value||'').toLowerCase().trim(),f=filter?.value||'all';let shown=0;releases.forEach(el=>{const match=el.textContent.toLowerCase().includes(q)&&(f==='all'||el.dataset.channel===f);el.hidden=!match;if(match)shown++});if(empty)empty.hidden=shown>0}
 search?.addEventListener('input',apply);filter?.addEventListener('change',apply);
})();
