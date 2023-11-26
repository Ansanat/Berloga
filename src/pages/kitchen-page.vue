<template>
<div class="v-kitchen-page" id="kitchen-page">
  <img src="@/images/Menu1.jpg" class="menu-image"/>
  <img src="@/images/Menu2.jpg" class="menu-image"/>
</div>
</template>

<script>

export default {
  name: 'kitchen-page',
  components: {
  }
}
</script>

<style>
.v-kitchen-page{
  width: 100%;
  
}
.menu-image{
  display: inline-block;
  width: 50%;
  height: 1300px;
}
@media screen and (max-width: 700px) {
  .menu-image{
    width: 100%;
    display: block;
    height: auto;
  }
}
</style>
