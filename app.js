// ===== AUTH CHECK =====
function checkAuth() {
  const user = JSON.parse(sessionStorage.getItem('msUser') || 'null');
  if (!user && !window.location.pathname.includes('login')) {
    window.location.href = 'login.html';
  }
  return user;
}

// ===== LOGOUT =====
function logout(e) {
  if (e) e.preventDefault();
  sessionStorage.removeItem('msUser');
  window.location.href = 'login.html';
}

// ===== SIDEBAR TOGGLE =====
function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('open');
}

// ===== MODAL =====
function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
    // Reset form if exists
    const form = el.querySelector('form');
    if (form && id.includes('add')) form.reset();
  }
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('active');
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});

// ESC key closes modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
  }
});

// Close mobile sidebar on outside click
document.addEventListener('click', (e) => {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.querySelector('.sidebar-toggle');
  if (sidebar?.classList.contains('open') && !sidebar.contains(e.target) && !toggle?.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});
