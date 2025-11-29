 
    // Afficher / masquer mot de passe
    const pwd = document.getElementById('password');
    const toggle = document.getElementById('togglePwd');
    const eyeOpen = document.getElementById('eyeOpen');
    const eyeClosed = document.getElementById('eyeClosed');

    toggle.addEventListener('click', ()=>{
      if(pwd.type === 'password'){
        pwd.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = '';
        toggle.setAttribute('aria-label','Masquer le mot de passe');
      } else {
        pwd.type = 'password';
        eyeOpen.style.display = '';
        eyeClosed.style.display = 'none';
        toggle.setAttribute('aria-label','Afficher le mot de passe');
      }
    });

    // Simple client-side validation hint (non-blocking)
    document.querySelector('form').addEventListener('submit', (e)=>{
      const email = document.getElementById('email');
      if(!email.value || !email.value.includes('@')){
        e.preventDefault();
        email.focus();
        email.style.outline = '2px solid rgba(239,68,68,0.12)';
        setTimeout(()=>email.style.outline='none',1800);
      }
    });
