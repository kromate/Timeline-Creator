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