(() => {
  let openModalBtn = document.querySelectorAll('[data-modal-open-price]');

  const refs = {
    closeModalBtn: document.querySelector('[data-modal-close-price]'),
    modal: document.querySelector('[data-modal-price]'),
    body: document.querySelector('[data-body]'),
  };

  openModalBtn.forEach(element => {
    element.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscClick);

  function onEscClick(e) {
    if (e.code === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  }

  function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      refs.modal.classList.add('is-hidden');
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
