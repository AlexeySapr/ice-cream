// Modal window
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

// Burger menu
(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelectorAll('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    for (let item of mobileMenuRef) {
      item.classList.toggle('is-open');
    }
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || 'false';
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', expanded);
  });
})();

// Smooth scroll
$(function () {
  $('a[href*="#How-it-made"]').on('click', function (e) {
    $('html,body')
      .stop()
      .animate({ scrollTop: $('#How-it-made').offset().top }, 1000);
    e.preventDefault();
  });

  $('a[href*="#Products"]').on('click', function (e) {
    $('html,body')
      .stop()
      .animate({ scrollTop: $('#Products').offset().top }, 1000);
    e.preventDefault();
  });

  $('a[href*="#Contacts"]').on('click', function (e) {
    $('html,body')
      .stop()
      .animate({ scrollTop: $('#Contacts').offset().top }, 1000);
    e.preventDefault();
  });
});
