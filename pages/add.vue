<template>
	<div class="bg min-h-screen mx-auto p-6">
		<div class="text-center mb-5">
			<h4 class="font-bold text-2xl mb-5 text">{{setupGlobalData.title}}</h4>
			<p class="text">{{setupGlobalData.desc}}</p>
		</div>
		<div class="flex justify-center">
			<div class="grid-cols-12">
				<div class="main-timeline">
					<div v-for="(timeline, index) in setupGlobalData.timelineDate" :key="timeline.details" class="timeline ">
						<div class="timeline-icon" @dblclick="delData(index)"><i class="fas fa-rocket"></i></div>
						<span class="year text">{{formatDate(timeline.date, 'year')}}</span>
						<div class="timeline-content ">
							<h5 class="title">{{formatDate(timeline.date, 'month')}}</h5>
							<p class="description text">
								{{timeline.details}} 
							</p>
						</div>
					</div>
   
				</div>
			</div>
		</div>

		<AddContainer/>

	</div>
</template>

<script>
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
	setup() {

		const {formatDate, delData} = useSetup()
		return {
			setupGlobalData, formatDate, delData
		}
	}
}
</script>

<style scoped>
@import url("@/assets/css/timeline/one.scss");
</style>