import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            counter: 0,
            history: [0],
            // counter2: 20,
            // counter3: 30
        }
    },
    mutations: { //functions we can use in Counter.vue
        addToCounter(state, payload) { // state takes the above funtion
            state.counter = state.counter + payload;
            state.history.push(state.counter);
        },
        subtractFromCounter(state, payload) {
            state.counter = state.counter - payload;
            state.history.push(state.counter);
        }
    },
    actions: {
        async addRandomNumber(context) {
            let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"); // http request to get random nr
            context.commit("addToCounter", data.data);
        }
    },
    getters: {
        activeIndexes: (state) => (payload) => {
            let indexes = [];
            state.history.forEach((number, index) =>{
                if(number === payload)
                {
                    indexes.push(index)
                }
            })
            return indexes;
        }
    },
     
});

const app = createApp(App);

app.use(store);

app.mount('#app')
