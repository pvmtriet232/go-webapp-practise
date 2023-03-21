
class Modal {
    constructor(){
        this.modal = document.querySelector(".modal")
        this.modalBackground = document.querySelector(".modal-background")
    }

    open(){
        this.modal.classList.add("active")
        this.modalBackground.classList.add("active")
    }
    close(){
        this.modal.classList.remove("active")
        this.modalBackground.classList.remove("active")

    }
    accept(){

    }

}
var modal = new Modal()

openBtn = document.querySelector(".js-open-btn")
openBtn.addEventListener('click',function(){
    modal.open()
})
closeBtn = document.querySelectorAll(".js-close-btn")
closeBtn.forEach(node => {
    node.addEventListener('click',function(){
        modal.close()
    })
})