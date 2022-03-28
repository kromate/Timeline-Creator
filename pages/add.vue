<template>
	<div class="bg min-h-screen mx-auto p-6">
		<div class="text-center mb-5">
			<h4 class="font-bold text-2xl mb-5 text">{{setupGlobalData.title}}</h4>
			<p class="text">{{setupGlobalData.desc}}</p>
		</div>
		<div class="flex justify-center">
			<div class="grid-cols-12">
			
				<transition-group
					appear
					class="main-timeline"
					name="sideLeft"
					@before-enter="beforeEnter"
					@enter="enter"
				>
					<div v-if="setupGlobalData.timelineDate.length < 2" :key="0" class="timeline ">
						<div class="timeline-icon" ><i class="fas fa-rocket"></i></div>
						<span class="year text">2001</span>
						<div class="timeline-content ">
							<h5 class="title">February 17</h5>
							<p class="description text">
								This is the start of yet another awesome timeline. <br> <span class="text-red-500">Instrustions: Double click on the rocket for more options, and this would disappear after adding two events to this timeline</span>
							</p>
					
						</div>
					</div>
					<div v-for="(timeline, index) in setupGlobalData.timelineDate" :key="timeline.details" :data-index="index+1" class="timeline ">
						<div class="timeline-icon"  @dblclick="timeline.edit = !timeline.edit"><i class="fas fa-rocket"></i></div>
						<span class="year text">{{formatDate(timeline.date, 'year')}}</span>
						<div class="timeline-content ">
							<h5 class="title">{{formatDate(timeline.date, 'month')}}</h5>
							<p class="description text">
								{{timeline.details}} 
							</p>
							<div v-if="timeline.edit"  class="flex gap-4 mt-4 duration-500 transition-all">
								<span class="dark:bg-white bg-black dark:text-black text-white px-3 rounded-md du">Edit</span>
								<span class="dark:bg-white bg-black dark:text-black text-white px-3 rounded-md cursor-pointer" @click="delData(index)">Delete</span>
							</div>
						</div>
					</div>
   


				</transition-group>

			</div>
		</div>

		<AddContainer/>

	</div>
</template>

<script>
import {gsap} from 'gsap'
import { ref } from '@nuxtjs/composition-api'
import { setupGlobalData, useSetup } from '~/composables/useSetup'
import AddContainer from '~/components/addContainer.vue'

export default {
	name: 'AddPage',
	components: { AddContainer },
	middleware: [({ redirect }) => {
		if (!setupGlobalData.value.title) {
			redirect('/setup')
		}
	}],
	setup(){

		const {formatDate, delData} = useSetup()
		const beforeEnter = (el) => {
			  el.style.opacity = 0
			el.style.transform = 'translateY(100px)'
		}
		const enter = (el, done) => {
			gsap.to(el, {
				opacity: 1,
				y: 0,
				duration: 0.5,
				onComplete: done,
				delay: el.dataset.index * 0.1
			})
		}

		return{ 
			beforeEnter, enter,	setupGlobalData, formatDate, delData, 
		}
	}
}
</script>

<style scoped>
@import url("@/assets/css/timeline/one.scss");

.sideLeft-leave-to{
opacity: 0;
transform: translateX(2500px);
}


.sideLeft-leave-active{
    transition: all 0.5s ease;
}
</style>