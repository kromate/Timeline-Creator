import { ref, watch } from "@nuxtjs/composition-api";


export const globalData = ref({
    title: '',
    desc: '',
    step: 0,
    timelineDate: []
})


watch(globalData, (globalData, prevState) => {
    console.log(globalData, prevState);
    
}, {deep: true})