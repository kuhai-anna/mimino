

(() => {
    let openModalBtn = document.querySelectorAll("[data-modal-open-room]")
    
    
const refs = {
    closeModalBtn: document.querySelector("[data-modal-close-room]"),
    modal: document.querySelector("[data-modal-room]"),
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
