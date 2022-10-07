<template>

    <div class="bg-color2">
        <div class="cotainer-general">
        <!--use Header-->
        <div class="bg-color bl-0">
        <Header />
        </div>

        <div class="bl-main">
        <div class="bg-color bl-1">
        <Admin />
        </div>

        <div class="bg-color2 bl-2">
        <Nuxt />
      </div>
        </div>
        <div class="bg-color3 bl-0">
        <Footer />
        </div>
        </div>
    </div>
</template>
<script>
// import conponent
import Header from '@/components/Shared/Header.vue'
import Footer from '@/components/Shared/Footer'
import Admin from '@/components/Shared/Admin.vue'
export default {
    name:'Default',
    // decleare component
    components:{
        Header,
        Admin,
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
    /* width: 90% !important; */
  }

.bl-main{
    display: inline;
    position: relative;
}
.bl-0{
    display: inline;
}

.bl-1{
    display: inline-block;
    margin-left: 70px;
    width: 250px;
    position: initial;
}
div.bl-2{
    overflow: visible;
    display: inline-block;
    margin-left: 70px;
    position: absolute;

}
</style>