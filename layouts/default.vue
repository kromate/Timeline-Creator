<template>
	<div :class="{'dark': GlobalState.darkMode}">
		<AlertBox/>
		<div class="fixed top-9 right-10">
			<input id="checkbox" v-model="GlobalState.darkMode" type="checkbox" class="checkbox">
			<label for="checkbox" class="label">
				<i class='fas fa-sun'></i>
				<i class="fas fa-moon"></i>
				<div class='ball'/>
			</label>
		</div>
		<Nuxt/>
	</div>
</template>

<script>

import { GlobalState } from '~/composables/useGlobals'
import AlertBox from '~/components/AlertBox.vue'
export default {
	name: 'DafaultLayout',
	components: { AlertBox },
	setup() {
		return { GlobalState };
	}
}
</script>

<style>

.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  width: 50px;
  height: 26px;
  background-color:#111;
  display: flex;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
}

.ball {
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

/*  target the elemenent after the label*/
.checkbox:checked + .label .ball{
  transform: translateX(24px);
}

.fa-moon {
  color: pink;
}

.fa-sun {
  color: yellow;
}
</style>