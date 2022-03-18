// import { ref, watch } from "@nuxtjs/composition-api";
import { useStorage } from '@vueuse/core'

export const GlobalState = useStorage('GlobalState', {
    darkMode: '',
})




