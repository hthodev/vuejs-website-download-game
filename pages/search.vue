<template>
  <main>
    <div class="cotainer-general">
      <div class="container">
        <div class="slider">
          
          <div class="nk-gap-2"></div>
        </div>
        
            <!-- product by category -->
                <h3 class="nk-decorated-h-2" h3><span>
           <span class="text-main-1" style="color:#ec4464">GAMES ĐƯỢC TÌM KIẾM VỚI TỪ KHÓA</span> {{$route.params.searchkey}}</span></h3>
        <div class="nk-gap-2"></div>
        <div class="row">

          <!-- cart  --> 

          <div
            :key="index"
            class="col-12 col-md-4 mb-3 text-center"
            v-for="(products, index) in listProduct"
          >
            <div class="card mb-4 shadow-sm">
              <div class="color-bl card-body img-style">
                <p>
                  <img :src="products.Image_1" alt="" class="img-fluid min-size-img"/>
                </p>

                <h4 class="text-name my-0 font-weight-normal min-size-Name">
                  {{ products.Name }}
                </h4>

                <p style="overflow-y "> Thể Loại:
                <h1 class="text-name1 min-size-Gamegenre">
                  {{ products.Game_genre }}
                </h1>
                </p>
                <div>

                  <div
                    class="game-info">
                    <div class="view-btn">
                      <nuxt-link
                        :to="{name: 'detail' , params: {id: products.ID_Product}}"
                        class="text-white"
                      >Tải Game
                      </nuxt-link>
                    </div>
                    <div class="rate-inner">
                      <div class="text-white">ĐÁNH GIÁ {{products.Point_Rare}} ĐIỂM
                      </div>
                      <div class="progress">
                        <div :aria-valuenow=" '' +  products.Point_Rare + ''"
                             :style="'width:' + products.Point_Rare + '%' "
                             aria-valuemax="100"
                             aria-valuemin="0"
                             class="progress-bar bg-danger"
                             role="progressbar"></div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

          </div>
        </div>



      </div>
    </div>
  </main>
</template>


<script>
import catalogApi from '~/api/catalogApi'

export default {
    data(){
        return {
            listProduct: []
        }
    },
    async created() {
    await this.ProductBySearch();
     },
  mounted() {
    this.searchkey = this.$route.params.searchkey
  },
   params() {
      this.searchkey = this.$route.params.searchkey
    },
  methods: {
      async ProductBySearch() {
      try {
        const { data } = await catalogApi.getProductBySearch(
            this.$axios,
            this.$route.params.id)

            this.listProduct = data.product
        console.log(data)
        // data lay json tu server gom success message productdetail T .productDetail laf lay rieng detail thoi
        // success message ko ke
      } catch (err) {
        console.log(err)
      }
    },
  }
}
</script>
    

<style scoped>

  .container-general {
    width: 70% !important;
    margin: auto;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .size-img{
  height: 30px;
  width: 30px;
}

  .slider {
    position: relative;
  }

  .slider .mota {
    color: black;
    width: 30%;
    background-size: cover;
    margin-left: 70%;
    margin-top: 10%;
    background-color: rgba(0, 0, 0, 0.466);
    font-size: 17px !important;
  }

  .rslides {
    position: relative;
    list-style: none;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  .rslides div.slid {
    -webkit-backface-visibility: hidden;
    width: 100%;
    left: 0;
    top: 0;
  }

  .rslides img {
    display: block;
    height: auto;
    float: left;
    width: 100%;
    border: 0;
  }

  .caption {
    width: 100%;
    margin-top: 16em;
  }

  .banner-info {
    position: absolute;
    z-index: 99;
    top: 100px;
    left: 0;
    right: 0;
  }

  .caption {
    text-align: center;
    top: 90px;
    position: absolute;
  }

  .caption h3 {
    color: #ffffff;
    font-size: 2.8em;
    font-family: 'Play-Bold';
  }

  .caption p {
    line-height: 1.8em;
    font-size: 1em;
    font-weight: 400;
    color: #ffffff;
    width: 60%;
    margin: 1em auto 0 auto;
  }

  .banner1 {
    background: url(https://i.ytimg.com/vi/tEX3tGBKerk/maxresdefault.jpg) no-repeat 0px 0px;
    background-size: cover;
    min-height: 550px;
    position: relative;
  }

  .callbacks_tabs a:after {
    content: '\f111';
    font-size: 0;
    font-family: FontAwesome;
    visibility: visible;
    display: block;
    height: 15px;
    width: 15px;
    display: inline-block;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    -ms-border-radius: 50%;
    background: #69d2e8;
    border: 2px solid #fff;
  }

  .callbacks_here a:after {
    background: #d52f47;
  }

  .callbacks_tabs a {
    visibility: hidden;
  }

  .callbacks_tabs li {
    display: inline-block;
  }

  ul.callbacks_tabs.callbacks1_tabs {
    position: absolute;
    bottom: 50px;
    z-index: 999;
    left: 46%;
  }

  .background {
    background-color: rgba(27, 29, 30) !important;
  }

  .nk-decorated-h,
  .nk-decorated-h-2 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .nk-decorated-h::after,
  .nk-decorated-h::before,
  .nk-decorated-h-2::after,
  .nk-decorated-h-2::before {
    content: '';
    display: block;
    -webkit-box-flex: 10;
    -ms-flex: 10;
    flex: 10;
    border-bottom: 4px solid;
    -webkit-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    transform: translateY(-10px);
  }

  .nk-gap-2 {
    height: 50px;
  }

  .nk-news-box {
    height: 425px;
    overflow: hidden;
    background-color: #232930;
    border: 1px solid #293139;
    border-radius: 4px;
  }

  .nk-news-box .nk-news-box-list,
  .nk-news-box .nk-news-box-each-info {
    float: left;
    width: 50%;
    height: 100%;
  }

  .nk-news-box .nk-news-box-item {
    padding: 10px;
    cursor: pointer;
    -webkit-transition: 0.15s color, 0.15s background-color;
    -o-transition: 0.15s color, 0.15s background-color;
    transition: 0.15s color, 0.15s background-color;
  }

  .nk-news-box .nk-news-box-item::after {
    content: '';
    display: block;
    clear: both;
  }

  .nk-news-box .nk-news-box-item + .nk-news-box-item {
    border-top: 1px solid #293139;
  }

  .nk-news-box .nk-news-box-item:hover,
  .nk-news-box .nk-news-box-item.hover {
    background-color: #293139;
  }

  .nk-news-box .nk-news-box-item.nk-news-box-item-active {
    color: #fff;
    background-color: #dd163b;
  }

  .nk-news-box .nk-news-box-item .nk-news-box-item-img {
    float: left;
    width: 100px;
    margin-right: 20px;
    overflow: hidden;
  }

  .nk-news-box .nk-news-box-item .nk-news-box-item-img img {
    width: 100%;
    height: auto;
    -webkit-transition: -webkit-transform 0.15s ease-in-out;
    transition: -webkit-transform 0.15s ease-in-out;
    -o-transition: transform 0.15s ease-in-out;
    transition: transform 0.15s ease-in-out;
    transition: transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    will-change: transform;
  }

  .nk-news-box .nk-news-box-item:hover .nk-news-box-item-img img {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }

  .nk-news-box .nk-news-box-item .nk-news-box-item-categories,
  .nk-news-box .nk-news-box-item .nk-news-box-item-url,
  .nk-news-box .nk-news-box-item .nk-news-box-item-full-img {
    display: none;
  }

  .nk-news-box .nk-news-box-item .nk-news-box-item-title {
    margin-top: 5px;
    margin-bottom: 2px;
    overflow: hidden;
    font-size: 1.1rem;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nk-news-box .nk-news-box-item .nk-news-box-item-text,
  .nk-news-box .nk-news-box-item .nk-news-box-item-text p {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nk-news-box .nk-news-box-item .nk-news-box-item-text {
    max-height: 25px;
    margin-bottom: 13px;
  }

  .nk-news-box .nk-news-box-item .nk-news-box-item-text p {
    margin: 0;
  }

  .nk-news-box .nk-news-box-item .nk-news-box-item-date {
    margin-top: 5px;
    font-size: 0.9em;
  }

  .nk-news-box .nk-news-box-item .nk-news-box-item-date span {
    margin-right: 6px;
    font-size: 1rem;
  }

  .nk-news-box .nk-news-box-each-info {
    border-left: 1px solid #293139;
  }

  .nk-news-box .nk-news-box-each-info .nano-content {
    padding: 20px;
  }

  .nk-news-box .nk-news-box-each-info .nk-news-box-item-categories {
    position: absolute;
    top: 10px;
    right: 0;
    margin-top: 6px;
    font-size: 1rem;
  }

  .nk-news-box .nk-news-box-each-info .nk-news-box-item-categories span {
    padding: 2px 19px;
    color: #fff;
    background-color: #38a220;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .nk-news-box .nk-news-box-each-info .nk-news-box-item-image {
    margin-top: -20px;
    margin-right: -20px;
    margin-bottom: 20px;
    margin-left: -20px;
    background-position: center center;
    background-size: cover;
  }

  .nk-news-box .nk-news-box-each-info .nk-news-box-item-image img {
    width: 100%;
    height: auto;
  }

  .nk-news-box
  .nk-news-box-each-info
  .nk-news-box-item-image[style*='background'] {
    padding-top: 41.2%;
  }

  .nk-news-box .nk-news-box-each-info .nk-news-box-item-title {
    margin-bottom: 15px;
    font-size: 1.2rem;
  }

  .nk-news-box .nk-news-box-each-info .nk-news-box-item-more {
    font-weight: 600;
    text-transform: uppercase;
  }

  .nk-news-box .nk-news-box-each-info .nk-news-box-item-date {
    float: right;
    margin-top: 5px;
    font-size: 0.9em;
  }

  .nk-news-box .nk-news-box-each-info .nk-news-box-item-date span {
    margin-right: 6px;
    font-size: 1rem;
  }

  @media (max-width: 767px) {
    .nk-news-box {
      height: 720px;
    }

    .nk-news-box .nk-news-box-list,
    .nk-news-box .nk-news-box-each-info {
      float: none;
      width: 100%;
    }

    .nk-news-box .nk-news-box-each-info {
      height: 400px;
      border-left: 0;
    }

    .nk-news-box .nk-news-box-list {
      height: 320px;
    }

    .nk-news-box .nk-news-box-list .nk-news-box-item-img {
      width: 60px;
    }

    .nk-news-box .nk-news-box-list .nk-news-box-item-date {
      display: none;
    }
  }

  .text-name {
    color: white;
    font-weight: 650;
  }

  .text-name1 {
    color: red !important;
    font-size: 17px;
  }

  img.profile-photo-lg {
    height: 80px;
    width: 80px;
    border-radius: 70%;
  }

  .img_style {
    height: 150px;
  }

  .min-size-img {
    min-width: 250px;
    min-height: 200px;
  }

  .min-size-Gamegenre {
    min-width: 100px;
    min-height: 50px;
  }

  .min-size-Name {
    min-width: 100px;
    min-height: 60px;
  }

  .rate-inner {
    background-color: #293139;
    border-color: #101215;
    padding: 7px 15px;
    font-size: 12px;
    line-height: 1.5;
    height: 40px;
    border-radius: 4px;
    font-weight: 600;
    text-transform: uppercase;
    -webkit-transition: 0.15s all;
    -o-transition: 0.15s all;
    transition: 0.15s all;
    cursor: pointer;
  }

  .text-white {
    margin-top: 5px;
    color: #fff !important;
  }

  .progress-bar.bg-danger {
    background-color: #dd163b !important;
  }

  .progress {
    margin-top: 9px;
    height: 8px;
    background-color: #484e54;
  }

  .view-btn,
  .rate-inner {
    background-color: #293139;
    border-color: #101215;
    padding: 7px 15px;
    font-size: 12px;
    line-height: 1.5;
    height: 60px;
    border-radius: 4px;
    font-weight: 800;
    text-transform: uppercase;
    -webkit-transition: 0.15s all;
    -o-transition: 0.15s all;
    transition: 0.15s all;
    cursor: pointer;
  }

  .view-btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 140px;
  }

  .view-btn a {
    text-decoration: unset;
  }

  .view-btn:hover {
    background-color: #dd163b;
  }

  .game-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
  }
</style>