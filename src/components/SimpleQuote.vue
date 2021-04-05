<template>
  <div class="w-full max-w-screen-md mx-auto mt-8">
    <p
      class="w-full pl-8 mb-8 font-sans text-lg leading-normal border-l-8 border-yellow-300 md:pl-16 md:text-2xl"
    >
      "{{ quote.quoteText }}"
    </p>
  </div>
</template>

<script>
export default {
  name: "SimpleQuote",
  data() {
    return {
      author: this.quote.quoteAuthor
    };
  },
  props: {
    quote: null
  }
};
</script>
