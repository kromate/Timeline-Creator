<template>
	<div class="flex flex-col w-full h-screen justify-center items-center bg">
		<transition name="slideUp" appear>
			<Setup/>
		</transition>
		
	</div>
</template>

<script>
import Setup from '~/components/Setup.vue'
export default {
	name: 'SetupPage',
	components: { Setup }
}
</script>

<style>
.slideUp-enter-from,
.slideUp-leave-to{
opacity: 0;
transform: translateY(-100px);
}

.slideUp-enter-active,
.slideUp-leave-active{
    transition: all 0.35s ease;
}
</style>