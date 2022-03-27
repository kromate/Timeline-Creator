<template>
	<transition appear name="slide">
		<div v-if="active"  class="overflow-hidden max-w-[70%] rounded-md shadow-xl fixed top-8 left-4 p-4 border border-slate-700 dark:border-slate-200 text w-[22rem] ">
			<div class="h-full w-1.5 bg-inverse absolute left-0 top-0"/>
			<i class="fas fa-times-circle absolute right-1 top-0 cursor-pointer text-xl" @click="closeAlert"></i>
			<p>{{message}}</p>
		</div>
	</transition>

</template>

<script>
import { ref } from 'vue-demi'
import { useAlert } from '~/composables/useNotification'
export default {
	name:'AlertBox',
	setup(){
		const {active, message, closeAlert} = useAlert()


		return{active, message, closeAlert }
	}
}
</script>

<style scoped>
.slide-enter,
.slide-leave-to{
	transform: translateX(-30rem);
	opacity: 0;
}

.slide-enter-active, .slide-leave-active{
	transition: all 0.5s ease;
}
</style>