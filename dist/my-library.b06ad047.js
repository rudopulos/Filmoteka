(()=>{
    const refs = {
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]")
    };
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("gallery-is-hidden");
    }
})();

//# sourceMappingURL=my-library.b06ad047.js.map
