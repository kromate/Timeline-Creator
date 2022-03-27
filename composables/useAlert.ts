import { ref } from '@nuxtjs/composition-api';

const alertState = {
	active: ref(false),
	message: ref('')
}

export const useAlert = () => {
	const openAlert = (msg:string) => {
		alertState.message.value = msg
		alertState.active.value = true
		setTimeout(closeAlert, 3000)
	}
	const closeAlert = () => {
		alertState.message.value = ''
		alertState.active.value = false
	}

	return {...alertState, openAlert, closeAlert}
}