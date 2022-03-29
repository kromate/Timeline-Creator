<template>
	<div class="flex flex-col w-full min-h-screen justify-start items-center bg py-10">
		<div class="md:px-10 px-6  w-auto">
			<div class="mb-14 w-full text-center mt-4">
				<h1 class="text-3xl font-semibold text mb-2">My Timelines</h1>
				<p class="text">This contains a list of all your timelines</p>
			</div>


			
			<transition-group
				appear
				class="gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 "
				@before-enter="beforeEnter"
				@enter="enter"
			>
				<article
					v-for="(n, index) in result"
					:key="n.id"
					:data-index="index" class="overflow-hidden rounded-md shadow-xl p-4 border border-slate-700 dark:border-slate-200 text w-[22rem] max-w-[100%]"
				>
					<h1 class="text-xl underline mb-2">Anthony's Timeline</h1>
					<p>this is the timeline description for those that want to test</p>

					<div class="flex gap-4 mt-4">
						<span class="dark:bg-white bg-black dark:text-black text-white px-3 rounded-md">View</span>
						<span class="dark:bg-white bg-black dark:text-black text-white px-3 rounded-md">Share</span>
						<span class="dark:bg-white bg-black dark:text-black text-white px-3 rounded-md">Delete</span>
					</div>
				</article>
			</transition-group>


		

	
		</div>
		
	</div>


</template>

<script>
import {gsap} from 'gsap'
import { onMounted, ref } from '@nuxtjs/composition-api';
import { useUser } from '~/composables/useGlobals'
import { useAlert } from '~/composables/useNotification'
import { getUserTimeline } from '~/firebase/firestore'

export default {
	name: 'SetupPage',
	middleware:[({ redirect }) => {
		if (!useUser().UserRef) {
			redirect('/')
			useAlert().openAlert('You need to sign in to create timelines dhur🙄')
		}
	}],

	 setup(){
		const result = ref([])
		onMounted(async () => {
			result.value = await getUserTimeline()
		})
		

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
		console.log(result);

		return{ 
			beforeEnter, enter, result
		}
	}
}
</script>

