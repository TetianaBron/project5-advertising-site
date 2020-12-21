import { requestUserById } from '../helpers';

function addClassVisuallyHidden(e) {
  if (!e.target.classList.contains('visually-hidden')) {
    e.target.classList.add('visually-hidden');
  }
  document
    .querySelector('.js-product-modal__btn--on-click')
    .classList.remove('visually-hidden');
  requestProductModalUserId();
}
function removeClassVisuallyHidden(e) {
  if (!e.target.classList.contains('visually-hidden')) {
    e.target.classList.add('visually-hidden');
  }
  document
    .querySelector('.js-product-modal__btn--less-on-click')
    .classList.remove('visually-hidden');
}
function renderProductModalInfo(item) {
  console.log(item);
}
function requestProductModalUserId() {
  const userId = document.querySelector('.product-modal').dataset.userid;
  requestUserById({ userId }).then(item => renderProductModalInfo(item));
}
function addEventListenersImgBtn() {
  document
    .querySelectorAll('.product-modal__box-img-small-btn')
    .forEach(btn => {
      btn.addEventListener('click', e => {
        document
          .querySelectorAll('.product-modal__box-img-small-btn')
          .forEach(item =>
            item.classList.remove('product-modal__box-img-small-btn--accent'),
          );

        document.querySelector('.js-product-modal__img-big').src = e.target.src;
        btn.classList.add('product-modal__box-img-small-btn--accent');
      });
    });
}
export function productModalAddEventListeners() {
  document
    .querySelector('.modal-window__item')
    .classList.add('modal-window__product-modal');
  document.querySelector('.product-modal').addEventListener('click', e => {
    e.preventDefault();
  });
  const productModalOnClickBtnRef = document.querySelector(
    '.js-product-modal__btn--on-click',
  );
  const productModalBtnRef = document.querySelector(
    '.js-product-modal__btn--less-on-click',
  );
  productModalBtnRef.addEventListener('click', addClassVisuallyHidden);
  productModalOnClickBtnRef.addEventListener(
    'click',
    removeClassVisuallyHidden,
  );
  addEventListenersImgBtn();
}
