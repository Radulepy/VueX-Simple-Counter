<template>
  <div class="container">
    <h4>History</h4>
    <div class="flex">
      <p v-for="(number, index) in history" :key="index" :class="activeIndexes(value).includes(index) && 'bold'">
        {{ number }}
      </p>
    </div>
    {{activeIndexes(value)}}
    <input type="number" placeholder="Search" v-model="value" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndexes"])
  },
};
</script>

<style>
.container {
  margin-top: 5rem;
}
.flex {
  display: flex;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}
.flex p {
  margin: 1rem;
}
.bold{
    font-weight: 1000;
}
</style>
