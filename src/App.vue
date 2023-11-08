<template>
  <Header />
  <HeaderBlock />
  <Menu />
  <router-view />
  <Footer />
</template>

<script>
import Header from '@/components/v-header.vue'
import HeaderBlock from '@/components/v-header-block.vue'
import Menu from '@/components/v-nav-bar.vue'
import Footer from '@/components/v-footer.vue'

export default{
  components: {
    Header,
    HeaderBlock,
    Menu,
    Footer
  }
}
</script>

<style>
  * {
    font-family: 'DINPro-Medium', Arial, Helvetica, sans-serif;
  }
</style>
