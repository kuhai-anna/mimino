(() => {
const refs = {
    openModalBtn: document.querySelector("[data-modal-open-table]"),
    closeModalBtn: document.querySelector("[data-modal-close-table]"),
    modal: document.querySelector("[data-modal-table]"),
    body: document.querySelector("[data-body]") 
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll")
}
})();