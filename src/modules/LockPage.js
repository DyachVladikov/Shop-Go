class LockPage {
    constructor(isModalOpen) {
        this.Init(isModalOpen)
    }

    Init(isModalOpen) {
       const mainPage =  document.querySelector(`[data-js-main-page]`)
       if(isModalOpen)
        mainPage.classList.add("is-lock")
        else {
            mainPage.classList.remove("is-lock")
        }
    }
}

export default LockPage