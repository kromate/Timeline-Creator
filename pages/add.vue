<template>
	<div class="bg min-h-screen mx-auto p-6">
		<div class="text-center mb-5">
			<h4 class="font-bold text-2xl mb-5 text">{{setupGlobalData.title}}</h4>
			<p class="text">{{setupGlobalData.desc}}</p>
		</div>
		<div class="flex justify-center">
			<div class="grid-cols-12">
				<div class="main-timeline">
					<div v-for="n in setupGlobalData.timelineDate" :key="n" class="timeline">
						<div class="timeline-icon"><i class="fas fa-rocket"></i></div>
						<span class="year text">2002</span>
						<div class="timeline-content">
							<h5 class="title">March 23</h5>
							<p class="description text">
								He who would be referred to as <strong>The Lord of Ghosts</strong> | <strong>Everyone's neighborhood ghost</strong> was born
							</p>
						</div>
					</div>
   
				</div>
			</div>
		</div>

		<div class="fixed inset-x-0 bottom-4 w-full flex justify-center">
			<form class="bg rounded-xl shadow-slate-500 shadow-lg p-4 mx-4 w-full md:w-auto ">
				<div
					class="flex flex-col items-center  mt-6 w-full"
				>
					<div class="flex flex-col w-full sm:min-w-[30.75rem]">
						<label for="title" class="font-extrabold text-base text mb-3">
							Date 
						</label>
						<input
							id="title"
							v-model="setupGlobalData.date"
							type="date"
							name="title"
							class="input"
							placeholder="Enter the Timeline title"
						/>
					</div>
					<div class="flex flex-col w-full mt-6">
						<label for="desc" class="font-extrabold text-base text mb-3">
							Details
						</label>
						<div class="flex items-center w-full">
							<textarea
								id="desc"
								v-model="setupGlobalData.details"
								rows="3"
								name="desc"
								class="input w-full"
								placeholder="Enter the timeline description"
							/>
						</div>
					</div>
				</div>
				<div class="flex items-center justify-between mt-8 w-full gap-5">
					<button class="btn h-[60px]	bg-black w-1/2 text-white mb-8" type="button" @click.prevent="$router.back()">Back</button>
					<button class="btn h-[60px]	bg-black w-1/2 text-white mb-8" type="button" @click.prevent="">add</button>
				</div>
			</form>
		</div>

	</div>
</template>

<script>
import { setupGlobalData } from '~/composables/useSetup'

export default {
	name:'AddPage',
	middleware:[({redirect})=>{
		if(!setupGlobalData.value.title){
			redirect.push('/')
		}
	}],

	setup(){
		return{
			setupGlobalData
		}
	}

}
</script>

<style scoped>
@import url("@/assets/css/timeline/one.scss");
</style>