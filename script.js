// Reveal on scroll + particles + mailto
(function(){
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} });
  },{threshold:.1, rootMargin:'0px 0px -10% 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Particles (soft gold dots)
  const holder = document.getElementById('particles');
  if(holder){
    for(let i=0;i<28;i++){
      const s = document.createElement('span');
      const size = 6 + (i%5)*3;
      s.style.cssText = `position:absolute;border-radius:999px;background:rgba(229,199,99,.12);filter:blur(6px);`+
        `width:${size}px;height:${size}px;left:${(i*37)%100}%;top:${(i*19)%100}%;`+
        `animation:float ${2+(i%5)*.6}s ease-in-out ${i*.2}s infinite alternate;opacity:.5`;
      holder.appendChild(s);
    }
  }
})();

function sendMailto(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Αίτημα Προσφοράς – BETOX LUXE');
  const body = encodeURIComponent(`Όνομα: ${name}%0AEmail: ${email}%0AΤηλέφωνο: ${phone}%0A%0AΜήνυμα:%0A${message}`);
  window.location.href = `mailto:info@betox.gr?subject=${subject}&body=${body}`;
  return false;
}
