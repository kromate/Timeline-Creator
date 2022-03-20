
import { useStorage } from '@vueuse/core'
import {  useRouter } from '@nuxtjs/composition-api'
import { GlobalState } from './useGlobals'

 



const months = {
	'01': 'January',
	'02': 'February',
	'03': 'March',
	'04': 'April',
	'05': 'May',
	'06': 'June',
	'07': 'July',
	'08': 'August',
	'09': 'September',
	'10': 'October',
	'11': 'November',
	'12': 'December',
}

export const setupGlobalData = useStorage('setupGlobalData', {
	title: '',
	desc: '',
	date: '',
	details: '',
	timelineDate: []
})

const cleanAll = () => {
	setupGlobalData.value.title = ''
	setupGlobalData.value.desc = ''
	setupGlobalData.value.date = ''
	setupGlobalData.value.details = ''
	setupGlobalData.value.timelineDate = []
}

export const useSetup = () => {
	const router = useRouter()
	const addData = () => {
		setupGlobalData.value.timelineDate.push({
			date: setupGlobalData.value.date,
			details: setupGlobalData.value.details,
		})
		setupGlobalData.value.date = ''
		setupGlobalData.value.details = ''
	}
	const delData = (i) => {
		setupGlobalData.value.timelineDate.splice(i, 1)
        
	}

	const saveData = () => {
		
		delete setupGlobalData.value.date
		delete setupGlobalData.value.details

		console.log(GlobalState.value);
		if (GlobalState.value.savedData == null || undefined) {
			GlobalState.value.savedData = []
		} else {
			console.log(GlobalState.value.savedData.includes(setupGlobalData));
			if (!GlobalState.value.savedData.includes(setupGlobalData)) {
				GlobalState.value.savedData.push(setupGlobalData)
			}
		}
		
		cleanAll()

		router.push('/')

	}

	const formatDate = (value, type) => {
		if (type === 'year') {
			return value.split('-')[0]
		} else {
			return `${months[value.split('-')[1]]} ${value.split('-')[2]}`
		}
        
	}

	return {
		addData, formatDate, delData, saveData
	}
}


