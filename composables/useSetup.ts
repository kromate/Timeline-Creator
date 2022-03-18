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
    const addData = (value:never) => {
        setupGlobalData.value.timelineDate.push(value)
    }

    return {
        addData
    }
}


