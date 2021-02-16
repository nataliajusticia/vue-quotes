<template>
  <section class="flex items-center justify-center h-full relative">
    <a
      @click="loadRandomQuote"
      class="font-semibold text-gray absolute right-0 top-0 cursor-pointer"
    >
      Random
    </a>

    <Quote v-for="(quote, index) in quotes" :key="index + 1" :quote="quote" />
  </section>
</template>

<script>
import { fetchRandomQuote } from "@/services/RandomQuote.js";
import Quote from "@/components/Quote.vue";

export default {
  name: "Home",
  components: {
    Quote
  },
  data() {
    return {
      quotes: null
    };
  },
  mounted() {
    this.loadRandomQuote();
  },
  methods: {
    loadRandomQuote() {
      fetchRandomQuote()
        .then(res => {
          this.quotes = res.data;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
