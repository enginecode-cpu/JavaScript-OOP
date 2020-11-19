export class Modal {
  constructor() {
    this._modalWrap = document.createElement('div');
    this._modalWrap.style.display = 'none';

    this._modal = document.createElement('div');
    this._modalTitle = document.createElement('div');
    this._closeWrap = document.createElement('div');
    this._closeBtn = document.createElement('button');
    
    this._modalWrap.classList.add('modal-wrapper');
    this._modal.classList.add('mymodal');

    this._modalTitle.classList.add('modal-title');
    this._modalTitle.innerText = '전부 채워주세요.';

    this._closeWrap.classList.add('close-wrapper')
    this._closeBtn.classList.add('modal-close');
    this._closeBtn.innerText = '닫기';

    this._modalWrap.appendChild(this._modal);
    this._modal.appendChild(this._modalTitle);
    this._modal.appendChild(this._closeWrap);

    this._closeWrap.appendChild(this._closeBtn);

    document.body.appendChild(this._modalWrap);

    this.modalOpen();
    this.modalClose();
  }

  modalOpen() {
    this._modalWrap.style.display = 'flex';
  }

  modalClose() {
    this._closeWrap.addEventListener('click', () => {
      this._modalWrap.style.display = 'none';
    })
  }
}