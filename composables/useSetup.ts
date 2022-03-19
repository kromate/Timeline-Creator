// import { ref, watch } from '@nuxtjs/composition-api';
import { useStorage } from '@vueuse/core';

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

export const useSetup = () => {
    const addData = () => {
        setupGlobalData.value.timelineDate.push({
            date: setupGlobalData.value.date,
            details: setupGlobalData.value.details,
        })
        setupGlobalData.value.date = ""
        setupGlobalData.value.details = ""
    }
    const delData = (i) => {
        console.log(i);
        
        // setupGlobalData.value.timelineDate.slice
    }

    const formatDate = (value, type) => {
        if (type == 'year') {
            return value.split("-")[0]
        } else {
             return `${months[value.split("-")[1]]} ${value.split("-")[2]}`
        }
        
    }

    return {
        addData, formatDate, delData
    }
}


