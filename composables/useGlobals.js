/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

import { useStorage } from '@vueuse/core';

export const GlobalState = useStorage('GlobalState', {
	darkMode: '',
	savedData: [],
	isLoggedIn: false,
	user:null
})


export const useUser = () => {
	const saveUser = (user) => {
		GlobalState.value.user = user
	}

	const clearUser = () => {
		GlobalState.value.user = null
	}
 
	return {...GlobalState, saveUser, clearUser}
}

