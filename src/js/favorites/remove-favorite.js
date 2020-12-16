import { requestRemoveFromFavorites } from '../helpers';
import { requestUserInfo } from '../helpers/API';
import { getUserToken } from '../helpers/index';
import { renderMyAccPage } from '../account/account';
import { renderMyFav } from './favorites';

// Delete favorite item

const mainContainer = document.querySelector('#root');

export async function onRemoveFavoritesListener() {
  await mainContainer.addEventListener('click', delFavItem);
}

async function delFavItem(e) {
  const cardId = getId(e);
  const userToken = getUserToken();

  await removeFromFavorites(userToken, cardId);
  console.log(`удаление ${cardId}`);
  // updateFav();
}

async function removeFromFavorites(userToken, _cardId) {
  if (requestUserInfo({ token: userToken })) {
    await requestRemoveFromFavorites({ token: userToken, _id: _cardId });
  }
}

function getId(e) {
  const card = e.path.find(el => el.className === 'card');
  return card.dataset.id;
}

// async function updateFav() {
//   let favList = mainContainer.getElementsByClassName('favorite-list');
//   console.log(favList[0].innerHTML);
//   favList[0].innerHTML = '';
//   console.log(favList[0].innerHTML);
//   await renderMyFav();
// }
