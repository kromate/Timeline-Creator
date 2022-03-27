/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

import { useStorage } from '@vueuse/core';

export const GlobalState = useStorage('GlobalState', {
	darkMode: '',
	savedData: [],
	isLoggedIn: false,
	user:null
}).value


export const useUser = () => {
	const saveUser = (user) => {
		GlobalState.user = user
	}

	const clearUser = () => {
		GlobalState.user = null
	}
 
	return {...GlobalState, saveUser, clearUser}
}

