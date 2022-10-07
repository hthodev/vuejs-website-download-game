<template>

    <div class="bg-color2" >
        <div class="cotainer-general">
        <!--use Header-->
        <div class="bg-color">
        <Header />
        </div>

        <div class="bg-color2">
        <Nuxt />
      </div>
        
        <div class="bg-color3">
        <Footer />
        </div>
        </div>
    </div>
</template>
<script>
// import conponent
import Header from '@/components/Shared/Header.vue'
import Footer from '@/components/Shared/Footer'
export default {
    name:'Default',
    // decleare component
    components:{
        Header,
        Footer,
    },
};
</script>
<style>
.bg-color{
    background-color: rgb(62, 62, 151);
}
.bg-color2{
    background-color: rgb(51, 52, 53);
}
.bg-color3{
    background-color: rgb(26, 26, 26);
}
  .container-general {
    width: 90% !important;
  }
</style>