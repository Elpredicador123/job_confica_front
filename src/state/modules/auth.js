import { getFirebaseBackend } from '../../helpers/firebase/authUtils'

export const state = {
    currentUser: sessionStorage.getItem('authUser'),
    userPermissions: [], 
}

export const mutations = {
    SET_CURRENT_USER(state, newValue) {
        state.currentUser = newValue
        saveState('auth.currentUser', newValue)
    },
    SET_USER_PERMISSIONS(state, permissions) {
        state.userPermissions = permissions.map(permission => permission.key);
    },
}

export const getters = {
    // Whether the user is currently logged in.
    loggedIn(state) {
        return !!state.currentUser
    },
    userPermissions: (state) => state.userPermissions,
    hasPermission: (state) => (permissionKey) => {
        return state.userPermissions.includes(permissionKey);
    },

}

export const actions = {
    // starts, along with any other actions named `init` in other modules.
    // eslint-disable-next-line no-unused-vars
    init({ state, dispatch }) {
        dispatch('validate')
    },

    // Logs in the current user.
    logIn({ commit, dispatch, getters }, { email, password } = {}) {
        // Si el usuario ya está logueado, valida el usuario actual.
        if (getters.loggedIn) return dispatch('validate')
    
        // Llamada al backend de Firebase para iniciar sesión.
        return getFirebaseBackend().loginUser(email, password).then((response) => {
            const user = response
            // Asumiendo que 'response' es un objeto que contiene el usuario y los permisos.
            // Realiza el commit de los datos del usuario.
            commit('SET_CURRENT_USER', user);
    
            // También realiza el commit de los permisos si están presentes en la respuesta.
            if (response.permissions) {
                commit('SET_USER_PERMISSIONS', response.permissions);
            }
    
            // Devuelve el usuario para la promesa.
            return user;
        });
    },
    // Logs out the current user.
    logOut({ commit }) {
        // eslint-disable-next-line no-unused-vars
        commit('SET_CURRENT_USER', null)
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-unused-vars
            getFirebaseBackend().logout().then((response) => {
                resolve(true);
            }).catch((error) => {
                reject(this._handleError(error));
            })
        });
    },

    // register the user
    register({ commit, dispatch, getters }, { username, email, password } = {}) {
        if (getters.loggedIn) return dispatch('validate')

        return getFirebaseBackend().registerUser(username, email, password).then((response) => {
            const user = response
            commit('SET_CURRENT_USER', user)
            return user
        });
    },

    // register the user
    // eslint-disable-next-line no-unused-vars
    resetPassword({ commit, dispatch, getters }, { email } = {}) {
        if (getters.loggedIn) return dispatch('validate')

        return getFirebaseBackend().forgetPassword(email).then((response) => {
            const message = response.data
            return message
        });
    },

    // Validates the current user's token and refreshes it
    // with new data from the API.
    // eslint-disable-next-line no-unused-vars
    validate({ commit, state }) {
        if (!state.currentUser) return Promise.resolve(null)
        const user = getFirebaseBackend().getAuthenticatedUser();
        commit('SET_CURRENT_USER', user)
        return user;
    },
}

// ===
// Private helpers
// ===

function saveState(key, state) {
    window.sessionStorage.setItem(key, JSON.stringify(state))
}
