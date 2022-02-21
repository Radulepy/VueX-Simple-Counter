<template>
  <div>
    <h1>Vuex Counter</h1>
    <h2 class="counter">{{counter}}</h2> 
    <!-- sau <h2 class="counter">{{$store.state.counter}}</h2>  -->
    <button @click="subtractFromCounter(value)">-</button>
    <input type="number" v-model="value"/>
    <button @click="addToCounter(value)">+</button>
    <div>
        <button class="btn" @click="addRandomNumber">Add Random Number</button>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState, mapActions} from 'vuex'
export default {
    data(){
        return{
            value: 0,
        }
    },
    computed: {
        ...mapState(["counter"])
        // ...mapState(["counter", "counter2", "counter3"])
    },
    methods: {
        ...mapMutations(["addToCounter", "subtractFromCounter"]),
        ...mapActions(["addRandomNumber"])
    }
};
</script>

<style>
.counter {
  font-size: 5rem;
}

button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}

input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}

.btn{
    border-radius: 0.5rem;
    width: auto;
    background-color: #41B883;
    margin-top: 1rem;
    color: white;
}
</style>
