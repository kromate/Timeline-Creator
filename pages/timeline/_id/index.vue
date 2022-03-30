<template>
	<div class="bg min-h-screen mx-auto p-6">
		<div v-if="result">
			<div class="text-center mb-5">
				<h4 class="font-bold text-2xl mb-5 text">{{result.value.title}}</h4>
				<p class="text">{{result.value.desc}}</p>
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
				
						<div v-for="(timeline, index) in result.value.timelineDate" :key="timeline.details" :data-index="index+1" class="timeline ">
							<div class="timeline-icon"  @dblclick="timeline.edit = !timeline.edit"><i class="fas fa-rocket"></i></div>
							<span class="year text">{{formatDate(timeline.date, 'year')}}</span>
							<div class="timeline-content ">
								<h5 class="title">{{formatDate(timeline.date, 'month')}}</h5>
								<p class="description text">
									{{timeline.details}} 
								</p>
							</div>
						</div>
   


					</transition-group>

				</div>
			</div>
		</div>

		<div v-else class="grid grid-cols-1 place-content-center place-items-center">
			<lottie-player src="https://assets2.lottiefiles.com/packages/lf20_4owMZE.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
			<h3 class="text text-center">We would not find your requested timeline. If someone sent this to you beat them up 😼, you can also create yours by click the button below</h3>
			<nuxt-link to="/setup" class=" btn max-w-[75%] mt-4 justify-center items-center flex">
				Create Timeline
			</nuxt-link >
		</div>
	

	</div>
</template>

<script>
import { onMounted, useRoute, ref } from '@nuxtjs/composition-api'
import {gsap} from 'gsap'
import { setupGlobalData, useSetup } from '~/composables/useSetup'
import { getSingleTimeline } from '~/firebase/firestore'


export default {
	name: 'ViewPage',


	setup(){
		const result = ref(null)
		const id = useRoute().value.params.id
		console.log(id);
		onMounted(async () => {
			result.value = await getSingleTimeline(id)
			console.log(result.value);
		})
		
		const {formatDate, delData, editData} = useSetup()
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
			beforeEnter, enter,	setupGlobalData, formatDate, delData, editData, result
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