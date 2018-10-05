import {getElmById, 
        getElmsByClass, 
        addEventToElms} from './helper';


class Modal {
    constructor() {
        this.openModalButton = getElmsByClass('js-open-modal');
        this.modal = getElmById('js-modal');
        this.closeModalButton = getElmById('js-modal__close');
        this.events();
    }

    events() {
        // open modal
        addEventToElms(this.openModalButton, 'click', this.openModal.bind(this));
        // close modal from the X button
        this.closeModalButton.addEventListener('click', this.closeModal.bind(this));
        // push any key
        document.addEventListener('keyup', this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.keyCode === 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.classList.add('modal_is-visible');
        return false;
    }

    closeModal() {
        this.modal.classList.remove('modal_is-visible');
    }
}

export default Modal;