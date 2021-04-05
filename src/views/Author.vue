<template>
  <section
    v-if="quotes"
    class="relative flex flex-col items-center justify-center flex-grow flex-shrink-0 h-full"
  >
    <h1 class="mb-8 text-4xl font-bold">{{ $route.params.aId }}</h1>
    <SimpleQuote
      v-for="(quote, index) in quotes"
      :key="index + 1"
      :quote="quote"
    />

    <router-link
      :to="{ name: 'Home' }"
      class="absolute top-0 right-0 flex lowercase cursor-pointer text-gray focus:outline-black"
    >
      Go Back

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
        class="ml-2 feather feather-corner-up-left "
      >
        <polyline points="9 14 4 9 9 4"></polyline>
        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
      </svg>
    </router-link>
  </section>
</template>

<script>
import { fetchAuthorQuotes } from "@/services/AuthorQuotes.js";
import SimpleQuote from "@/components/SimpleQuote.vue";

export default {
  name: "Author",
  components: {
    SimpleQuote
  },
  data() {
    return {
      quotes: null
    };
  },
  mounted() {
    this.loadAuthorQuotes(this.$route.params.aId);
  },
  methods: {
    loadAuthorQuotes(author) {
      fetchAuthorQuotes(author)
        .then(res => {
          this.quotes = res.data;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
