<template>
  <section
    v-if="quotes"
    class="relative flex flex-col items-center justify-center flex-grow flex-shrink-0 h-full"
  >
    <h1 class="mb-8 text-4xl font-bold">{{ this.author }}</h1>
    <SimpleQuote
      v-for="(quote, index) in quotes"
      :key="index + 1"
      :quote="quote"
    />
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
  props: {
    author: null
  },
  data() {
    return {
      quotes: null
    };
  },
  mounted() {
    this.loadAuthorQuotes(this.author);
  },
  methods: {
    loadAuthorQuotes(author) {
      fetchAuthorQuotes(author)
        .then(res => {
          this.quotes = res.data;
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
