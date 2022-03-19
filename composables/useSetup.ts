// import { ref, watch } from "@nuxtjs/composition-api";
import { useStorage } from '@vueuse/core'

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

    return {
        addData
    }
}


