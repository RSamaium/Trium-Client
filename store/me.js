import Http from 'axios'
import Token from '../core/token'
import config from '../../nuxt.config'

const URI = `${config.api}/me`

export const state = () => ({
    meData: {}
})

export const mutations = {
    me(state, obj) {
        state.meData = obj
    }
}

export const actions = {
    login({ commit }, { username, password, remember }) {
        return Http.post(`${URI}/login`, { username, password }).then(res => {
            const { token } = res.data
            Token.set(token)
            Token.save(remember)
        })
    },

    logout({ commit }) {
        Token.delete()
        commit('set', {})
    },

    me({ commit }) {
        return Http.get(URI)
            .then(res => res.data)
            .then(d => {
                commit('me', d)
                return d
            })
    },

    update(data) {
        return Http.put(this.uri, data)
            .then(res => res.data)
            .then(d => {
                // store.commit('set', d)
                return d
            })
    },

    loggedIn() {
        // return store.state.me.data._id
    }
}