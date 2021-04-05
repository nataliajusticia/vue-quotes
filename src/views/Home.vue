<template>
  <section
    class="relative flex items-center justify-center flex-grow flex-shrink-0 h-full"
  >
    <a
      @click="loadRandomQuote"
      href=""
      class="absolute top-0 right-0 flex lowercase cursor-pointer text-gray focus:outline-black"
    >
      Random

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="ml-2 feather feather-refresh-cw"
      >
        <polyline points="23 4 23 10 17 10"></polyline>
        <polyline points="1 20 1 14 7 14"></polyline>
        <path
          d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
        ></path>
      </svg>
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
