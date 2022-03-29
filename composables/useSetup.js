
import { useStorage } from '@vueuse/core'
import {  useRouter } from '@nuxtjs/composition-api'
import { GlobalState } from './useGlobals'
import { useAlert } from './useNotification'

 



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

	const sortArray = (Arr) => {
		Arr.sort((a, b) => {
			return (new Date(a.date) - new Date(b.date))
		})
	}

	const addData = () => {
		const data = {
			date: setupGlobalData.value.date,
			details: setupGlobalData.value.details,
			edit:false
		}

		if (!setupGlobalData.value.timelineDate.includes(data)) {
			setupGlobalData.value.timelineDate.push(data)
			sortArray(setupGlobalData.value.timelineDate)
			setupGlobalData.value.date = ''
			setupGlobalData.value.details = ''
		} else {
			useAlert().openAlert('You trying to input identical data?. well I won\'t let you🤪')
		}
		

	}

	const delData = (index) => {
		setupGlobalData.value.timelineDate.splice(index, 1)
		sortArray(setupGlobalData.value.timelineDate)
	}

	const saveData = () => {
		delete setupGlobalData.value.date
		delete setupGlobalData.value.details

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

	const editData = (index) => {
		const editingData = setupGlobalData.value.timelineDate.find((el, i) => i === index)
		setupGlobalData.value.date = editingData.date
		setupGlobalData.value.details = editingData.details
		setupGlobalData.value.edit = false

		window.scrollTo({
			top: window.innerHeight,
			left: 0,
			behavior: 'smooth'
		} )
	}

	return {
		addData, formatDate, delData, saveData, editData
	}
}


