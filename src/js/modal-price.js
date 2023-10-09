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

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
