import { authHeader } from './auth-header';
import store from '@/state/store';

export const userService = {
    login,
    logout,
    register,
    getAll,
};

function login(username, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    //return fetch(`http://comfica_back.test:8084/api/login`, requestOptions)
    return fetch(this.$apiURL + "login", requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.token) {
                localStorage.setItem('user-token', JSON.stringify(user.token));
            }
            if (user.user) {
                localStorage.setItem('user', JSON.stringify(user.user));
                // Guardar roles y permisos
                //localStorage.setItem('user-roles', JSON.stringify(user.roles));
                localStorage.setItem('user-permissions', JSON.stringify(user.permissions));
                // Actualiza el estado en Vuex
                store.commit('auth/SET_USER_PERMISSIONS', user.permissions);
            }
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.clear()
    localStorage.removeItem('user-token');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`/users/register`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
