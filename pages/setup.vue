<template>
	<div class="flex flex-col w-full justify-center items-center  ">
		<div class="md:px-10 px-6 w-full md:w-auto">

	
			<div class="mb-14 mt-8">
				<h1 class="text-3xl font-semibold text-left">Setup page</h1>

			</div>

			<form >
			

				<div
					class="flex flex-col items-center  md:mt-12 mt-6 w-full"
				>
					<div class="flex flex-col w-full lg:min-w-[30.75rem]">
						<label for="title" class="font-extrabold text-base text-litBlack mb-3">
							Title
						</label>
						<input
							id="title"
							v-model="title"
							type="test"
							name="title"
							class="input"
							placeholder="Enter the Timeline title"
						/>
					</div>
					<div class="flex flex-col w-full mt-12">
						<label for="desc" class="font-extrabold text-base text-litBlack mb-3">
							Description
						</label>
						<div class="flex items-center w-full">
							<textarea
								id="desc"
								v-model="description"
								rows="5"
								name="desc"
								class="input w-full"
								placeholder="Enter the timeline description"
							/>
						</div>
				
					</div>
	
				</div>

				<div class="flex items-center justify-between mt-16 w-full">

					<button class="btn h-[60px]	bg-black w-1/2 text-white mb-8" type="button" @click.prevent="$router.back()">Back</button>
					<button class="btn h-[60px]	bg-black w-1/2 text-white mb-8" >Next</button>

				</div>
			</form>

		</div>
		
	</div>
</template>

<script>
export default {
	name: 'SetupPage',
}
</script>

<style>

</style>