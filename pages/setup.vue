<template>
	<div class="flex flex-col w-full h-screen justify-center items-center bg">
		<transition name="slideUp" appear>
			<Setup/>
		</transition>
		
	</div>
</template>

<script>
import Setup from '~/components/Setup.vue'
import { useUser } from '~/composables/useGlobals'
import { useAlert } from '~/composables/useNotification'
export default {
	name: 'SetupPage',
	components: { Setup },
	middleware:[({ redirect }) => {
		if (useUser().user) {
			redirect('/')
			useAlert().openAlert('You need to sign in to create timelines dhur🙄')
		}
	}]
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