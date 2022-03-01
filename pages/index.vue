<template>
<div class="w-full h-screen bg-orange-300">
  <div class="container mx-auto flex flex-col justify-center items-center h-full text-center">
    <h1 class="md:text-6xl text-4xl font-bold text-white title tracking-wider mb-4">Welcome to Timelinx</h1>
    <p class="md:text-2xl text-lg">
      Create Timeline for your projects, activities and milestones.
    </p>

<div class="mt-5 w-full">
    <button class="py-2 px-7 text-xl  border-4 rounded-lg border-purple-700 text w-[25rem] max-w-[75%]">
      Get Started
    </button>
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