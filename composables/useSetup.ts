// import { ref, watch } from "@nuxtjs/composition-api";
import { useStorage } from '@vueuse/core'

export const setupGlobalData = useStorage('setupGlobalData', {
    title: '',
    desc: '',
    step: 0,
    timelineDate: []
})




