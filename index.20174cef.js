!function(){var o=document.querySelectorAll("[data-modal-open-room]"),e={closeModalBtn:document.querySelector("[data-modal-close-room]"),modal:document.querySelector("[data-modal-room]"),body:document.querySelector("[data-body]")};function d(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}o.forEach((function(o){o.addEventListener("click",d)})),e.closeModalBtn.addEventListener("click",d),e.modal.addEventListener("click",(function(o){o.currentTarget===o.target&&e.modal.classList.add("is-hidden")})),window.addEventListener("keydown",(function(o){"Escape"===o.code&&e.modal.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.20174cef.js.map
