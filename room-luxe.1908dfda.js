(()=>{let e=document.querySelectorAll("[data-modal-open-price]");const o={closeModalBtn:document.querySelector("[data-modal-close-price]"),modal:document.querySelector("[data-modal-price]"),body:document.querySelector("[data-body]")};function d(){o.modal.classList.toggle("is-hidden"),o.body.classList.toggle("no-scroll")}e.forEach((e=>{e.addEventListener("click",d)})),o.closeModalBtn.addEventListener("click",d),o.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&(o.modal.classList.add("is-hidden"),o.body.classList.remove("no-scroll"))})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(o.modal.classList.add("is-hidden"),o.body.classList.remove("no-scroll"))}))})();
//# sourceMappingURL=room-luxe.1908dfda.js.map
