<template>
  <div class="max-w-screen-md mx-auto mt-8">
    <p
      class="pl-8 mb-8 font-sans text-lg leading-normal border-l-8 border-yellow-300 md:pl-16 md:text-2xl"
    >
      "{{ quote.quoteText }}"
    </p>

    <router-link
      :to="{ name: 'Author', params: { aId: author } }"
      class="flex items-center justify-between p-8 transition duration-500 ease-in-out border-l-8 border-transparent cursor-pointer focus:outline-black focus:bg-black focus:text-white md:p-16 hover:bg-black hover:text-white group"
    >
      <div>
        <p class="text-lg font-bold md:text-xl">{{ quote.quoteAuthor }}</p>
        <p>{{ quote.quoteGenre }}</p>
      </div>

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
        class="hidden feather feather-arrow-right group-hover:block group-focus:block"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Quote",
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
