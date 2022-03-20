<template>
	<div class="flex flex-col w-full min-h-screen justify-start items-center bg py-10">
		<div class="md:px-10 px-6  w-auto">
			<div class="mb-14 w-full text-center mt-4">
				<h1 class="text-3xl font-semibold text mb-2">My Timelines</h1>
				<p class="text">This contains a list of all your timelines</p>
			</div>


			<div class="gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
				<article
					v-for="n in 10"
					:key="n" class="overflow-hidden rounded-md shadow-xl p-4 border border-slate-700 dark:border-slate-200 text w-[22rem] max-w-[100%]"
				>
					<h1 class="text-xl underline mb-2">Anthony's Timeline</h1>
					<p>this is the timeline description for those that want to test</p>

					<div class="flex gap-4 mt-4">
						<span class="dark:bg-white bg-black dark:text-black text-white px-3 rounded-md">View</span>
						<span class="dark:bg-white bg-black dark:text-black text-white px-3 rounded-md">Share</span>
						<span class="dark:bg-white bg-black dark:text-black text-white px-3 rounded-md">Delete</span>
					</div>
				</article>
			</div>

		

	
		</div>
		
	</div>


</template>

<script>

export default {
	name: 'SetupPage',

}
</script>

<style>
.slideUp-enter-from,
.slideUp-leave-to{
opacity: 0;
transform: translateY(-100px);
}

.slideUp-enter-active,
.slideUp-leave-active{
    transition: all 0.35s ease;
}
</style>