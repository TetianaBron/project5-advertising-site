import '../../scss/main.scss';
import cardTpl from '../../templates/card.hbs';
import { requestAddToFavorites } from '../helpers';
import { requestUserInfo } from '../helpers/API';
import getCardRefs from './getCardRefs';
import { openModal } from '../modal-window/index';

const cardRefs = getCardRefs();
cardRefs.cardListener.addEventListener('click', onAddToFavorites);
cardRefs.cardListener.addEventListener('click', onOpenModal);

function renderCards(ads) {
    const cardObj = ads.recreationAndSport
    const cardsMurkup = cardObj.map(card => cardTpl(card)).join('');
    return cardsMurkup; 
}

export function appendCards(ads) {
    const cardsContainer = document.querySelector('#root');
    cardsContainer.insertAdjacentHTML('beforeend', renderCards(ads))
}

export function onOpenModal(event) {
    if (!event.target.classList.contains('js-modal-icon')) {
        return;
    }
    openModal();
}

export function onAddToFavorites(event) {
    if (!event.target.classList.contains("js-favorite-icon")) {
        return;
    }
    
    clickedToAddToFavorites(event);
    const cardId = getCardId(event);
    const userToken = getUserToken();
    sendAdsToUserFavorite(userToken, cardId);
}

function getUserToken() {
    const getToken = sessionStorage.getItem('accessToken'); 
    return getToken;
}

function sendAdsToUserFavorite(userToken, _cardId) {
    if(requestUserInfo({ token: userToken })) {
        requestAddToFavorites({ token: userToken, _id: _cardId }).then(console.log).catch(error => alert(error.message));
    }
}

function findCheckedCard(event) {
    const arrayElements = event.path;
    const targetCard = arrayElements.find(el => el.className === "card");
    return targetCard;
}

function getCardId(event) {
    const getTargetCard = findCheckedCard(event);
    const getTargetCardId = getTargetCard.dataset.id;
    return getTargetCardId;
}

function clickedToAddToFavorites(event) {
    const click = event.target;
    click.classList.remove('icon-favorite')
    click.classList.add('icon-favorite-orange');
    click.textContent = 'favorite';
}

// function removeFavoritesListener() {
//     return {
//         removeFavoritesListener: document.querySelector('.js-favorite-icon')
//     }
// }

// export function removeAddToFavorites(event) {
//     const removeClick = event.target;
//     removeClick.classList.toggle('icon-favorite')
//     removeClick.textContent = 'favorite_border';
//     console.log(removeClick);
    
// }