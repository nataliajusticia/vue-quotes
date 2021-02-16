<template>
  <div class="max-w-screen-md mx-auto mt-8">
    <p class="text-4xl mb-8 border-l-8 border-black pl-16 py-8">
      {{ quote.quoteText }}
    </p>

    <div class="pl-16 border-l-8 border-transparent">
      <p class="font-bold">{{ quote.quoteAuthor }}</p>
      <p>{{ quote.quoteGenre }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: {
    quote: null
  }
};
</script>
