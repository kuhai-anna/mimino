

(() => {
    let openModalBtn = document.querySelectorAll("[data-modal-open-table]")
    
    
const refs = {
    closeModalBtn: document.querySelector("[data-modal-close-table]"),
    modal: document.querySelector("[data-modal-table]"),
    body: document.querySelector("[data-body]") 
    };
        openModalBtn.forEach(element => {
        element.addEventListener("click", toggleModal);
    });
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll")
}
})();