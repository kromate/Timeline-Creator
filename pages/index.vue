<template>

	<div class="w-full h-screen bg">
		<transition name="slideUp" appear>
			<div class="container mx-auto flex flex-col justify-center items-center h-full text-center px-2">
				<h1 class="md:text-6xl text-4xl font-bold text-white title tracking-wider mb-4">Welcome to Timelinx</h1>
				<p class="md:text-2xl text-lg text-black dark:text-white">
					Create Timeline for your projects, activities and milestones. 
				</p>

				<div class="mt-12 w-full flex flex-col justify-center items-center">
			
					<div v-if="user == undefined || null"  class=" btn max-w-[75%] cursor-pointer" @click="googleAuth">
						Sign in 
						<i class="fas fa-user"></i>
					</div>

					<nuxt-link to="/setup" class=" btn max-w-[75%] mt-4">
						Get Started
						<i class="fas fa-star"></i>
					</nuxt-link >
					<nuxt-link to="/timeline" class=" btn max-w-[75%] border-white   mt-4">
						My Timelines
						<i class="fas fa-clock"></i>
					</nuxt-link >
					<nuxt-link to="/demo" class=" btn max-w-[75%] border-white   mt-4">
						Demo
						<i class="fas fa-book"></i>
					</nuxt-link >
					<a href="https://github.com/kromate/Timeline-Creator" target="_blank" class=" btn max-w-[75%] border-white   mt-4">
						Github
						<i class="fas fa-laptop"></i>
					</a>

					<div v-if="user != undefined"  class=" btn max-w-[75%] cursor-pointer mt-4" @click="signOutUser">
						Sign Out 
						<i class="fas fa-sign-out-alt"></i>
					</div>
				</div>

			</div>
		</transition>
	</div>


</template>

<script>
import {googleAuth, signOutUser} from '@/firebase/auth'
import { useUser } from '~/composables/useGlobals'
export default{
	name: 'IndexPage',
	setup(){
		const {user} = useUser()
		return{user, googleAuth, signOutUser}
	}
}
</script>

<style scoped>
    .title {
            text-shadow: -2px 2px 0 #000,
                          2px 2px 0 #000,
                         2px -2px 0 #000,
                        -2px -2px 0 #000;
        }

		.slideUp-enter,
.slideUp-leave-to{
opacity: 0;
transform: translateY(500px);
}

.slideUp-enter-active,
.slideUp-leave-active{
    transition: all 0.75s ease;
}
</style>