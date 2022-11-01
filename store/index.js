export const state = () => ({
    valute: {}

})

export const mutations =  {
    setValute(state, param){
        state.valute = param
    }
}

export const actions = {
    async getData({commit}) {
        const response = await this.$axios.$get('https://www.cbr-xml-daily.ru/daily_json.js')

        commit('setValute',response.Valute)
    },

}

export const getters = {

    getValute: (state) => {
        return state.valute
    },

}
