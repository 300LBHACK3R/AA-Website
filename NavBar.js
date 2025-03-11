//---- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//---- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//---- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//

//---- Hamburger Menu. ----//
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


function toggleStatus() {
  const indicator = document.getElementById('statusIndicator');
  const dot = indicator.querySelector('.status-dot');

  if (dot.classList.contains('live')) {
    dot.classList.remove('live');
    dot.classList.add('maintenance');
    indicator.innerHTML = '<span class="status-dot maintenance"></span> Maintenance';
  } else {
    dot.classList.remove('maintenance');
    dot.classList.add('live');
    indicator.innerHTML = '<span class="status-dot live"></span> Live';
  }
}

//---- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//---- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//---- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//