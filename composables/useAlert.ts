import { ref } from '@nuxtjs/composition-api';

const alertState = {
	active: ref(false),
	message: ref('')
}

export const useAlert = () => {
	const openAlert = (msg:string) => {
		alertState.message.value = msg
		alertState.active.value = true
	}

	return {...alertState, openAlert}
}