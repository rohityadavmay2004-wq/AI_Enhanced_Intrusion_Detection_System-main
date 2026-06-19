// =============================================
//  AI-IDS — Dynamic UI  (main.js)
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  const form    = document.getElementById('predict-form');
  const btn     = document.getElementById('predict-btn');
  const resultPanel = document.getElementById('result-panel');

  // ── Input validation styling ───────────────
  document.querySelectorAll('.form-group input').forEach(input => {
    input.addEventListener('blur', () => validateInput(input));
    input.addEventListener('input', () => input.classList.remove('error'));
  });

  function validateInput(input) {
    const val = input.value.trim();
    const ok  = val !== '' && !isNaN(parseFloat(val));
    input.classList.toggle('error', !ok);
    return ok;
  }

  function validateAll() {
    let valid = true;
    document.querySelectorAll('.form-group input[required]').forEach(i => {
      if (!validateInput(i)) valid = false;
    });
    return valid;
  }

  // ── Submit ─────────────────────────────────
  if (form) {
    form.addEventListener('submit', e => {
      if (!validateAll()) {
        e.preventDefault();
        btn.classList.add('shake');
        setTimeout(() => btn.classList.remove('shake'), 500);
        return;
      }
      btn.classList.add('loading');
      btn.disabled = true;
    });
  }

  // ── Reveal result panel ────────────────────
  if (resultPanel && resultPanel.dataset.hasResult === 'true') {
    setTimeout(() => {
      resultPanel.classList.add('visible');
      animateIcon();
      animateChips();
    }, 100);
  }

  function animateIcon() {
    const icon = resultPanel.querySelector('.verdict-icon');
    if (!icon) return;
    Object.assign(icon.style, { transform: 'scale(0.3)', opacity: '0',
      transition: 'transform 0.42s cubic-bezier(0.34,1.56,0.64,1), opacity 0.28s ease' });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      icon.style.transform = 'scale(1)';
      icon.style.opacity   = '1';
    }));
  }

  function animateChips() {
    document.querySelectorAll('.chip-value[data-raw]').forEach(chip => {
      const target = parseFloat(chip.dataset.raw);
      if (isNaN(target)) return;
      const isInt = Number.isInteger(target);
      const dur   = 750, start = performance.now();
      (function step(now) {
        const t   = Math.min((now - start) / dur, 1);
        const val = target * (1 - Math.pow(1 - t, 3));
        chip.textContent = isInt
          ? Math.round(val).toLocaleString()
          : val.toLocaleString(undefined, { maximumFractionDigits: 2 });
        if (t < 1) requestAnimationFrame(step);
      })(start);
    });
  }

  // ── Inject utility keyframes once ─────────
  if (!document.getElementById('ids-kf')) {
    const s = document.createElement('style');
    s.id = 'ids-kf';
    s.textContent = `
      @keyframes shake {
        0%,100%{ transform:translateX(0); }
        20%{ transform:translateX(-5px); }
        40%{ transform:translateX(5px); }
        60%{ transform:translateX(-3px); }
        80%{ transform:translateX(3px); }
      }
      .btn-predict.shake { animation: shake 0.45s ease; }
      .form-group input.error {
        border-color: #f43f5e !important;
        box-shadow: 0 0 0 3px rgba(244,63,94,0.12) !important;
      }
    `;
    document.head.appendChild(s);
  }

});
