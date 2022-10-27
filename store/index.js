export const state = () => ({
    valute: {}

})

export const mutations =  {
    setValute(state, param){
        state.valute = param
    }
}

export const actions = {
    async checkToken(state) {
        const response = await this.$axios.$get('https://www.cbr-xml-daily.ru/daily_json.js')
        console.log(response.Valute);
        state.valute = response.Valute
    },

}

export const getters = {

    getValute: (state) => {
        return state.valute
    },

}
