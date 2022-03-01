<template>
<div class="w-full h-screen bg-orange-300">
  <div class="container mx-auto flex flex-col justify-center items-center h-full text-center">
    <h1 class="md:text-6xl text-4xl font-bold text-white title tracking-wider mb-4">Welcome to Timelinx</h1>
    <p class="md:text-2xl text-lg">
      Create Timeline for your projects, activities and milestones.
    </p>

<div class="mt-12 w-full flex flex-col justify-center items-center">
    <nuxt-link to="/" class=" btn border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white">
      Get Started
      <i class="fas fa-star"></i>
    </nuxt-link >
    <nuxt-link to="/" class=" btn border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-white mt-4">
      Demo
      <i class="fas fa-book"></i>
    </nuxt-link >
    <nuxt-link to="/" class=" btn border-green-700 text-green-700 hover:bg-green-700 hover:text-white mt-4">
      Github
      <i class="fas fa-laptop"></i>
    </nuxt-link >
</div>

  </div>

</div>
</template>

<script lang="ts">

export default{
  name: 'IndexPage',
}
</script>

<style scoped>
    .title {
            text-shadow: -2px 2px 0 #727cb6,
                          2px 2px 0 #727cb6,
                         2px -2px 0 #727cb6,
                        -2px -2px 0 #727cb6;
        }
</style>