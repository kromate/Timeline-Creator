// import { ref, watch } from "@nuxtjs/composition-api";
import { useStorage } from '@vueuse/core'

const 

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

    const formatDate = (value, type) => {
        if (type == 'year') {
            return value.split("-")[0]
        } else {
             return value
        }
        
    }

    return {
        addData, formatDate
    }
}


