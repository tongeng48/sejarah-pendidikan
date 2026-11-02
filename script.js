const pages=[...document.querySelectorAll('.page')];
function showPage(){
  const id=(location.hash||'#home').slice(1);
  const target=document.getElementById(id);
  pages.forEach(p=>p.classList.toggle('active',p===target));
  document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('current',a.getAttribute('href')==='#'+id));
  document.getElementById('nav').classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});
}
window.addEventListener('hashchange',showPage);
document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
document.querySelectorAll('.choices').forEach(group=>{
  group.querySelectorAll('button').forEach(button=>{
    button.addEventListener('click',()=>{
      if(group.dataset.done)return;
      group.dataset.done='1';
      const correct=button.dataset.choice===group.dataset.answer;
      const feedback=group.parentElement.querySelector('.feedback');
      feedback.textContent=correct?'🎉 Betul! '+group.dataset.feedback:'Cuba lagi lain kali. '+group.dataset.feedback;
      group.querySelectorAll('button').forEach(b=>{b.disabled=true;if(b.dataset.choice===group.dataset.answer)b.style.background='#d8f6df';});
    });
  });
});
showPage();