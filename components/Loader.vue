<template>
	<div class="fixed inset-x-0 h-screen w-screen bg flex justify-center items-center flex-col ">
		<div class="waviy text">
			<span style="--i:1">L</span>
			<span style="--i:2">O</span>
			<span style="--i:3">A</span>
			<span style="--i:4">D</span>
			<span style="--i:5">I</span>
			<span style="--i:6">N</span>
			<span style="--i:7">G</span>
		</div>

		<p class="text text-3xl mt-20">Kinnichiwa</p>
	</div>
</template>

<script>
export default {
	name:'LoaderComponent',
}
</script>

<style scoped>
.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0,0,0,.2));
  font-size: 60px;
}
.waviy span {

  position: relative;
  display: inline-block;
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(.1s * var(--i));
  
}
@keyframes waviy {
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
}
</style>