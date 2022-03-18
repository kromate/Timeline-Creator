<template>
	<div class="flex flex-col w-full justify-center items-center  ">
		<div class="md:px-10 px-6 w-full md:w-auto">

	
			<div class="mb-14">
				<h1 class="text-heading font-semibold text-left">Log In</h1>
				<span class="text-gray text-left text-base">
					Description caption
				</span>

		
			</div>

			<form >
			

				<div
					class="flex flex-col items-center  md:mt-12 mt-6 w-full"
				>
					<div class="flex flex-col w-full lg:min-w-[30.75rem]">
						<label for="Phone" class="font-extrabold text-base text-litBlack mb-3">
							Email
						</label>
						<input
							id="email"
							v-model="email"
							type="Email"
							name="email"
							class="input"
							placeholder="example@youremail.com"
						/>
					</div>
					<div class="flex flex-col w-full mt-12">
						<label for="Phone" class="font-extrabold text-base text-litBlack mb-3">
							Password
						</label>
						<div class="flex items-center w-full">
							<input
								id="password"
								v-model="password"
								:type="showPassword ? 'text':'Password'"
								name="password"
								class="input w-full"
								placeholder="********"
							/>
							<p class="-ml-16" @click="toggleShow">{{showPassword ? 'hide':'show'}}</p>
						</div>
				
					</div>
	
				</div>

				<div class="flex items-center mt-16 w-full">
					<div class="flex flex-col items-center justify-center w-full">
						<button class="btn h-[65px]	bg-black w-full text-white mb-8" disabled>Login</button>

						<p class="font-bold">Don't have an account?  <nuxt-link to="/auth/signup" class="text-primary"> Create an Account
						</nuxt-link></p>
					</div>
				</div>
			</form>

		</div>
		
	</div>
</template>

<script>
export default {
	name: 'SetupPage',
}
</script>

<style>

</style>