export const requestUserRegistration = async ({ email, password }) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const body = JSON.stringify({
    email,
    password,
  });
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body,
    redirect: 'follow',
  };
  const response = await fetch(
    'https://callboard-backend.herokuapp.com/auth/register',
    requestOptions,
  );
  return response.json();
};
export const requestUserLogin = async ({ email, password }) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const body = JSON.stringify({
    email,
    password,
  });
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body,
    redirect: 'follow',
  };
  const response = await fetch(
    'https://callboard-backend.herokuapp.com/auth/login',
    requestOptions,
  );
  return response.json();
};
export const requestUserLogout = async ({ token }) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  const requestOptions = {
    method: 'POST',
    headers,
    redirect: 'follow',
  };
  const response = await fetch(
    'https://callboard-backend.herokuapp.com/auth/logout',
    requestOptions,
  );
  return { status: response.status, statusText: response.statusText };
};
export const requestRefreshUserCredentials = async ({ refreshToken, sid }) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${refreshToken}`);
  headers.append('Content-Type', 'application/json');
  const body = JSON.stringify({ sid });
  const requestOptions = {
    method: 'POST',
    headers,
    body,
    redirect: 'follow',
  };
  const response = await fetch(
    'https://callboard-backend.herokuapp.com/auth/refresh',
    requestOptions,
  );
  return response.json();
};
// google
export const requestUserInfo = async ({ token }) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
    method: 'GET',
    headers,
    redirect: 'follow',
  };

  const response = await fetch(
    'https://callboard-backend.herokuapp.com/user',
    requestOptions,
  );
  return response.json();
};
export const requestPostProduct = async ({ token, product }) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  headers.append('Content-Type', 'application/json');
  const body = JSON.stringify(product);
  const requestOptions = {
    method: 'POST',
    headers,
    body,
    redirect: 'follow',
  };
  const response = await fetch(
    'https://callboard-backend.herokuapp.com/call',
    requestOptions,
  );
  return response.json();
};
export const requestAdsPagination = async page => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const response = await fetch(
    `https://callboard-backend.herokuapp.com/call?page=${page}`,
    requestOptions,
  );
  const data = await response.json();

  return data;
};
export const requestAddToFavorites = async ({ token, _id }) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
    method: 'POST',
    headers,
    redirect: 'follow',
  };
  const response = await fetch(
    `https://callboard-backend.herokuapp.com/call/favourite/${_id}`,
    requestOptions,
  );
  return await response.json();
};
//call/favourite/{callId}
//call/{callId} edit call
//call/{callId} delete user call
export const requestUserFavorites = async ({ token }) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
    method: 'GET',
    headers,
    redirect: 'follow',
  };

  const response = await fetch(
    'https://callboard-backend.herokuapp.com/call/favourites',
    requestOptions,
  );
  return response.json();
};
export const requestUserOwn = async ({ token }) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
    method: 'GET',
    headers,
    redirect: 'follow',
  };

  const response = await fetch(
    'https://callboard-backend.herokuapp.com/call/own',
    requestOptions,
  );
  return response.json();
};

export const requestAdsByCategory = async category => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const response = await fetch(
    `https://callboard-backend.herokuapp.com/call/specific/${category}`,
    requestOptions,
  );
  return response.json();
};
export const requestFindAds = async query => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const response = await fetch(
    `https://callboard-backend.herokuapp.com/call/find?search=${query}`,
    requestOptions,
  );
  return response.json();
};
export const requestCategories = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const response = await fetch(
    'https://callboard-backend.herokuapp.com/call/categories',
    requestOptions,
  );
  return response.json();
};
