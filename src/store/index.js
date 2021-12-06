import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lancamento: [{
            id: 0,
            original_language: "",
            original_title: "",
            overview: "",
            popularity: 0,
            poster_path: '',
            release_date: '',
            title: '',
            video: false,
            vote_average: 0,
            vote_count: '',
        }
        ],

        bomboniere: [
            {
                produto: 'Pipoca',
                preco: 'R$ 12,00',
                imagem: 'https://d1uz88p17r663j.cloudfront.net/original/8b93a5e2db24a573dd2948709d45c631_pipoca-leite-po-molico-receitas-nestle.jpg',
            },
            {
                produto: 'Refrigerante',
                preco: 'R$ 7,00',
                imagem: 'https://bolodamadre.com.br/wp-content/uploads/2020/05/refrigerante-1.jpg',
            },
            {
                produto: 'Trident',
                preco: 'R$ 2,00',
                imagem: 'https://imageswscdn.plataformawebstore.com.br//files/22571/chiclete-trident-8g-725970.peg',
            },
            {
                produto: 'Halls',
                preco: 'R$ 1,50',
                imagem: 'https://images.tcdn.com.br/img/img_prod/622802/drops_halls_21x28g_10_1_20201205120623.jpg',
            },
            {
                produto: 'Chocolate',
                preco: '5,00',
                imagem: 'https://www.thehersheycompany.com/content/dam/corporate-us/Corporate_international/pt_br/Images/home/Hersheys_Banners_1600x900px_portfolio.jpg?hei=640&wid=1140&fmt=jpg',
            },
            {
                produto: 'Agua',
                preco: 'R$ 4,50',
                imagem: 'https://www.gimba.com.br/objetosmidia/ExibirObjetoMidia?id=84380',
            },
            {
                produto: 'Salgadinho',
                preco: 'R$ 6,00',
                imagem: 'https://i.ytimg.com/vi/PETBMCcFJFc/maxresdefault.jpg',
            },
            {
                produto: 'Amendoim',
                preco: 'R$ 5,00',
                imagem: 'https://m.media-amazon.com/images/I/71iJnJJY8SL._AC_SX425_.jpg',
            }
        ]
    },

    mutations: {
        SET_PREMIERE: (state, payload) => (state.lancamento = payload),
    },
    actions: {
        async fetchPremieres ({commit}) {

            await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=a16ea728297818060c2ed1e5a6f1d09a`)

                .then(res => {

                    const payload = (res.data.results);
                    commit('SET_PREMIERE', payload)

                })
                .catch((e) => console.log(e))
        },
    },
    modules: {},
    getters: {
        searchResult: (state) => state.lancamento,
    }
})
