<template>

	<div class="w-full h-screen bg">
		<div class="container mx-auto flex flex-col justify-center items-center h-full text-center">
			<h1 class="md:text-6xl text-4xl font-bold text-white title tracking-wider mb-4">Welcome to Timelinx</h1>
			<p class="md:text-2xl text-lg text-black dark:text-white">
				Create Timeline for your projects, activities and milestones.
			</p>

			<div class="mt-12 w-full flex flex-col justify-center items-center">
				<nuxt-link to="/setup" class=" btn max-w-[75%] ">
					Get Started
					<i class="fas fa-star"></i>
				</nuxt-link >
				<nuxt-link to="/timeline" class=" btn max-w-[75%] border-white   mt-4">
					My Timelines
					<i class="fas fa-clock"></i>
				</nuxt-link >
				<nuxt-link to="/demo" class=" btn max-w-[75%] border-white   mt-4">
					Demo
					<i class="fas fa-book"></i>
				</nuxt-link >
				<a href="https://github.com/kromate/Timeline-Creator" target="_blank" class=" btn max-w-[75%] border-white   mt-4">
					Github
					<i class="fas fa-laptop"></i>
				</a >
			</div>

		</div>

	</div>


</template>

<script>

export default{
	name: 'IndexPage',
	setup(){
		return{}
	}
}
</script>

<style scoped>
    .title {
            text-shadow: -2px 2px 0 #000,
                          2px 2px 0 #000,
                         2px -2px 0 #000,
                        -2px -2px 0 #000;
        }
</style>