(() => {
const refs = {
    openModalBtn: document.querySelector("[data-modal-open-price-lux]"),
    closeModalBtn: document.querySelector("[data-modal-close-price-lux]"),
    modal: document.querySelector("[data-modal-price-lux]"),
    body: document.querySelector("[data-body]") 
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll")
}
})();