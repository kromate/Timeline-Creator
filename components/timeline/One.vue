<template>
    <div class="container mx-auto p-6">
    <div class="text-center mb-5">
      <h4 class="font-bold text-xl mb-3">LordGhostX Timeline</h4>
      <p>Welcome to my Timeline, nothing fancy here. It's more like a diary where I dump stuff because I don't want to forget it.</p>
    </div>
    <div class="flex ">
      <div class="grid-cols-12">
        <div class="main-timeline">
          <div class="timeline">
            <div class="timeline-icon"><i class="fas fa-rocket"></i></div>
            <span class="year">2002</span>
            <div class="timeline-content">
              <h5 class="title">March 23</h5>
              <p class="description">
                He who would be referred to as <strong>The Lord of Ghosts</strong> | <strong>Everyone's neighborhood ghost</strong> was born
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
            <span class="year">2015</span>
            <div class="timeline-content">
              <h5 class="title">March</h5>
              <p class="description">
                Wrote my first program with Windows Batch Scripting
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
            <span class="year">2015</span>
            <div class="timeline-content">
              <h5 class="title">March</h5>
              <p class="description">
                Wrote my first program with Windows Batch Scripting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:"TimelineOne",

}
</script>

<style scoped>
@import url("@/assets/css/timeline/one.css");
</style>