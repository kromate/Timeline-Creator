<template>
	<transition name="slideUp" appear>
		<div class=" inset-x-0 bottom-4 w-full flex justify-center">
			<form class="bg rounded-xl  shadow-lg p-4 mx-4 w-full md:w-auto " @submit.prevent="addData">
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
							required
							type="date"
							name="title"
							class="input w-full"
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
								required
								rows="3"
								name="desc"
								class="input w-full"
								placeholder="Enter the timeline description"
							/>
						</div>
					</div>
				</div>
				<div class="flex items-center justify-between mt-8 w-full gap-5">
					<button class="btn h-[60px]	bg-black w-1/2 text-white mb-4" type="button" @click.prevent="$router.back()">Back</button>
					<button class="btn h-[60px]	bg-black w-1/2 text-white mb-4" type="submit" >add</button>
				</div>
				<button class="btn h-[60px]	bg-black w-full text-white " type="button" @click.prevent="edit ?saveEditedTimeline(id) : saveData()">Save</button>
			</form>
		</div>
	</transition>
</template>

<script>
import { setupGlobalData, useSetup,  } from '~/composables/useSetup'
export default {
	name:'AddContainer', 
	props:{
		edit:{
			default:false,
			type: Boolean,
		},
		id:{
			default:'',
			type: String,
		}
	},
	setup(){

		const {addData, saveData, saveEditedTimeline} = useSetup()
		return{
			setupGlobalData, addData, saveData, saveEditedTimeline
		}
	}
}
</script>

<style scoped>
.slideUp-enter,
.slideUp-leave-to{
opacity: 0;
transform: translateY(500px);
}

.slideUp-enter-active,
.slideUp-leave-active{
    transition: all 0.5s ease;
}
</style>