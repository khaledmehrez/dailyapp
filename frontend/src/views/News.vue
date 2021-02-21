<template>
  <div class="about">
    <Spinner v-if="GetRequest" style="marginLeft:50%" />
    <MessageError v-if="GetError" severity="warn" sticky>{{
      GetErrorMessage
    }}</MessageError>
    <div class="p-grid">
      <Card
        class="p-col"
        v-for="(GetNewsList, index) in GetNewsList"
        v-bind:key="index"
        :GetNewsList="GetNewsList"
      />
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { onMounted } from "vue";
import Card from "../components/Card.vue";

export default {
  components: { Card },
  name: "News",

  setup() {
    const store = useStore();
    // dipatch action to get data
    onMounted(() => {
      store.dispatch("fetchNews");
    });
    return {
      GetNewsList: computed(() => store.getters.GetNewsList),
      GetRequest: computed(() => store.getters.GetRequest),
      GetError: computed(() => store.getters.GetError),
      GetErrorMessage: computed(() => store.getters.GetErrorMessage),
    };
  },
};
</script>