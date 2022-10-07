<template>
  <div class="size-bg">
    <div class="nk-blog-post nk-blog-post-single">
      <div class="nk-post-text mt-0">
        <div class="nk-box-1 bg-dark-2">
          <h2 class="nk-decorated-h-3 heading-ellipsis">
            <i class="fal fa-photo-video"></i>
            <span class="text-descript"> ẢNH GAME {{ detailsProduct.Name }}</span>
          </h2>
          <div class="hnc-single-image">
            <span class="hnc-post-badge" style="background-color: #81d742">
              <i class="fas fa-bells mr-4"></i>GAME MỚI
            </span>
            <div class="nk-gallery-game">
              <div id="hnc-image-slider">
                <div
                  id="myCarousel"
                  class="carousel slide carousel-fade"
                  data-ride="carousel"
                  data-interval="6000"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to="0"
                      class=""
                    ></li>
                    <li
                      data-target="#myCarousel"
                      data-slide-to="1"
                      class=""
                    ></li>
                    <li
                      data-target="#myCarousel"
                      data-slide-to="2"
                      class="active"
                    ></li>
                    <li
                      data-target="#myCarousel"
                      data-slide-to="3"
                      class=""
                    ></li>
                    <li
                      data-target="#myCarousel"
                      data-slide-to="4"
                      class=""
                    ></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item">
                      <img
                        :src="detailsProduct.Image_2"
                        alt=""
                        class="nk-image-slider-img w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nk-gap-2"></div>

        <div class="nk-innercontent">
          <!-- start -->
          <h2 class="nk-decorated-h-3 heading-ellipsis ">
            <i class="fal fa-info-circle"></i
            ><span class="text-descript"> Chi tiết game {{ detailsProduct.Name }}</span>
          </h2>
          <div class="detals">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6 col-xl-6 card">
                <div class="col-detal-1 product-details card">
                  <ul class="variations-tableInfo table table-bordered">
                    <li>
                      <span class="table-label"
                        ><img
                          class="mr-10"
                          src="https://daominhha.com/wp-content/themes/hncgamingtheme/images/title.png"
                          width="20"
                          height="20"
                        /><b>Tên:</b> {{ detailsProduct.Name }}</span
                      >
                    </li>
                    <li>
                      <span class="table-label"
                        ><img
                          class="mr-10"
                          src="https://daominhha.com/wp-content/themes/hncgamingtheme/images/date.png"
                          width="20"
                          height="20"
                        />
                        <b>Ngày update:</b>
                        {{ detailsProduct.Time_Update }}</span
                      >
                    </li>
                    <li>
                      <span class="table-label"
                        ><img
                          class="mr-10"
                          src="https://daominhha.com/wp-content/themes/hncgamingtheme/images/genres.png"
                          width="20"
                          height="20"
                        /><b>Thể loại: </b> {{ detailsProduct.Game_genre }}
                      </span>
                    </li>
                    <li>
                      <span class="table-label"
                        ><img
                          class="mr-10"
                          src="https://daominhha.com/wp-content/themes/hncgamingtheme/images/zip.png"
                          width="20"
                          height="20"
                        /><b>Dung lượng: </b
                        >{{ detailsProduct.Free_Space }} GB</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="col-detal-2 product-details card">
                  <ul class="variations-tableInfo table table-bordered">
                    <li>
                      <span class="table-label"
                        ><i class="fas fa-check-circle"> </i
                        ><b>Kích thước RAM: </b>{{ detailsProduct.Ram }} GB</span
                      >
                    </li>
                    <li>
                      <span class="table-label"
                        ><i class="fas fa-check-circle"></i>
                        <b>Số người chơi: </b>{{ detailsProduct.Player }}</span
                      >
                    </li>
                    <li>
                      <span class="table-label"
                        ><i class="fas fa-check-circle"></i> <b>Ngôn ngữ: </b
                        >{{ detailsProduct.Languages }}</span
                      >
                    </li>
                    <li>
                      <span class="table-label"
                        ><i class="fas fa-check-circle"></i>
                        <b>Hệ điều hành: </b>{{ detailsProduct.OS }}</span
                      >
                    </li>
                    <li>
                      <span class="table-label"
                        ><i class="fas fa-check-circle"></i>
                        <b>Chơi bằng: </b>Bàn phím / Chuột</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nk-blockquote-icon"><span>"</span></div>
        <div class="hnc-single-content">
          <h2>Giới thiệu game {{ detailsProduct.Name }}</h2>
          <p class="text-descript">{{ detailsProduct.Decription }}</p>

          <p>
            <img
              class="aligncenter size-medium wp-image-56553"
              :src="detailsProduct.Image_2"
              alt=""
              width="900"
              height="720"
             
              
            />
          </p>

          <p>
            <img
              class="aligncenter size-medium wp-image-56553"
              :src="detailsProduct.Image_3"
              alt=""
              width="900"
              height="720"
           
            />
          </p>
          <h2>Video game</h2>
        </div>

        <div id="download">
          <div class="nk-box-1 bg-dark-2">
            <h2 class="nk-decorated-h-3">
              <i class="fal fa-cloud-download-alt mr-5"></i
              ><span class="text-descript">Link tải game {{ detailsProduct.Name }}</span>
            </h2>

            <!-- link tai Fshare-->
            <div class="nk-feature-1">
              <div class="nk-feature-icon ">
                <img
                  src="https://i.ibb.co/8M8y9R0/abc-removebg-preview.png"
                  alt="Categories Icon"
                  class="size-img text-descript"
                />
              </div>
              <template v-if="$auth.$state.loggedIn==false">
              <div class="nk-feature-cont">
                <h3 class="nk-feature-title">
                  <span class="text-descript">
                    Đăng nhập để thấy đường dẫn tải </span>
                </h3>
              </div>
              </template>

              <template v-else>
              <div class="nk-feature-cont">
                <h3 class="nk-feature-title">
                  <a :href="''+detailsProduct.Link_Fshare+''" class="text-descript">
                    DOWNLOAD (FSHARE) </a>
                </h3>
              </div>
              </template>
            </div>

           

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import catalogApi from '~/api/catalogApi'
// import users from '~/pages/index.vue'
export default {
  data() {
    return {
      detailsProduct: [],
    }
  },
  props: ["BaseURL", "params.idProd"],
  async created() {
    await this.detailsProducts()
  },

  methods: {
    async detailsProducts() {
      try {
        const { data } = await catalogApi.getByIdProducts(
          this.$axios,
          this.$route.params.id
        )
        this.detailsProduct = data.productDetail
        console.log(data)
        // data lay json tu server gom success message productdetail T .productDetail laf lay rieng detail thoi
        // success message ko ke
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>


<style>
.size-bg {
  margin-left: 15%;
  margin-right: 15%;
}
.imgdes {
  width: 1020;
  height: 720;
  min-height: 720;
  min-width: 1020;
  max-height: 720;
  max-width: 1020;
}
.text-descript{
  color: white;
}
.card{
  background-color: rgb(39, 41, 41);
}
.bg-dark-2 {
  background-color: rgb(50, 52, 53);
}
.nk-box-1,
.nk-box-rounded-1 {
  padding: 20px;
}
.nk-decorated-h-3 i {
  display: inline-block;
}
.nk-tabs .nav-tabs .nav-link {
  font-size: 14px;
}

.nk-decorated-h-3 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
}
.nk-decorated-h-3 > span,
.nk-decorated-h-3 > a {
  padding-right: 20px;
  font-size: 20px;
}
.nk-box-1,
.nk-box-rounded-1 {
  padding: 20px;
}
.nk-decorated-h-3 i {
  display: inline-block;
}
.hnc-single-image {
  position: relative;
}
.hnc-post-badge {
  display: block;
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 9;
  padding: 3px 15px;
  background: #4caf4f;
  border-radius: 0 5px 5px 0;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
#hnc-image-slider {
  background-color: #232930;
  border-bottom: 3px solid #dd163b;
}
#hnc-image-slider .hnc-caption {
  position: absolute;
  height: 100%;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 99999999;
  width: 320px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 25px;
}
#hnc-image-slider .carousel-indicators li {
  height: 6px;
}
#hnc-image-slider img {
  height: auto;
}
.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include clearfix();
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
  @include transition($carousel-transition);
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-left),
.active.carousel-item-right {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-right),
.active.carousel-item-left {
  transform: translateX(-100%);
}
.nk-blog-post {
  margin-bottom: 30px;
}
.nk-blog-post:not(.nk-blog-post-single):hover .nk-post-img img {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}
.nk-post-text {
  font-size: 14px;
}
.mt-0 {
  margin-top: 0px !important;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
@media (min-width: 540px) {
  .dropdown-notify {
    left: -120px !important;
  }
  .user-header-col {
    text-align: right;
  }
  .nk-decorated-h-3 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
  }
  .nk-decorated-h-3 > span,
  .nk-decorated-h-3 > a {
    padding-right: 20px;
    font-size: 20px;
  }
  .nk-box-1,
  .nk-box-rounded-1 {
    padding: 20px;
  }
  .nk-decorated-h-3 i {
    display: inline-block;
  }
  .nk-tabs .nav-tabs .nav-link {
    font-size: 14px;
  }
  #hnc-to-top {
    right: 15px;
  }
  ul.hnc-profile-links {
    text-align: right;
  }
  #hnc-game-filters .row [class^='col'] {
    margin-bottom: 0;
  }
  .col-sm-2dot4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }
  #hnc-game-filters {
    padding: 15px 40px;
  }
  .support_thread_meta ul {
    margin-top: 0;
  }
  .support_thread_meta ul li p {
    display: block;
  }

  .support_thread_meta ul li {
    padding: 5px 10px;
  }

  .hnc-copyright-main {
    text-align: left;
  }
  .hnc-copyright .nk-social-links {
    text-align: right;
  }
  .bg-blog,
  .bg-footer,
  .bg-breadcrumb,
  .bg-head,
  .bg-head-top,
  .bg-home,
  .bg-page {
    padding: 30px 15px 30px 15px;
  }
  .bg-head-top {
    padding: 7px 15px;
  }
  .bg-head {
    padding: 15px;
  }
  .bg-breadcrumb {
    padding: 10px 15px;
  }
  .nk-post-img img.game-image {
    height: 150px;
  }
  .nk-post-img img.phanmem-image,
  .nk-post-img img.thuthuat-image {
    height: 130px;
  }
  .nk-blog-post img.hnc-seri {
    height: 66px;
  }
  .product-details {
    margin-bottom: 0;
  }
}
ul.variations-tableInfo {
  border: 0;
  padding: 0;
  margin: 0;
  list-style: none;
  color: #fff;
}
ul.variations-tableInfo li {
  display: flex;
  align-items: center;
  padding: 5px 0;
}
.mr-10 {
  margin-right: 10px !important;
}
.nk-innercontent {
  position: relative;
}
.nk-innercontent .nk-blockquote-icon {
  display: table;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  margin-top: 50px;
  font-style: italic;
}
.nk-innercontent .nk-blockquote-icon::before,
.nk-innercontent .nk-blockquote-icon::after {
  content: '';
  display: table-cell;
  width: 100%;
  vertical-align: top;
  border-bottom: 2px solid #dd163b;
  -webkit-transform: translateY(-18px);
  -ms-transform: translateY(-18px);
  transform: translateY(-18px);
}
.nk-innercontent .nk-blockquote-icon::before {
  width: 50px;
  min-width: 50px;
}
.nk-innercontent .nk-blockquote-icon > span {
  display: table-cell;
  height: 0;
  padding-right: 25px;
  font-size: 96px;
  font-weight: 600;
  line-height: 0;
  color: #fff;
  vertical-align: top;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hnc-single-content h2,
.hnc-single-content h3 {
  background: #dd163b;
  padding: 3px 6px;
  border-radius: 5px;
}

.hnc-single-content h2:before,
.hnc-single-content h3:before {
  font-family: 'Font Awesome 5 Pro';
  font-weight: 900;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  color: #171e22;
  margin-left: 5px;
  margin-right: 5px;
}
.hnc-single-content h2:before {
  content: '\f101';
}

.hnc-single-content h3:before {
  content: '\f058';
}
.hnc-single-content h2 {
  font-size: 16px;
}
.hnc-single-content h3 {
  font-size: 15px;
  display: inline-block;
  margin-left: 20px;
}
.hnc-single-content h4 {
  font-size: 14px;
}
.hnc-single-content h5 {
  font-size: 13px;
}
@media (min-width: 540px) {
  .dropdown-notify {
    left: -120px !important;
  }
  .user-header-col {
    text-align: right;
  }
  .nk-decorated-h-3 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
  }
  .nk-decorated-h-3 > span,
  .nk-decorated-h-3 > a {
    padding-right: 20px;
    font-size: 20px;
  }
  .nk-box-1,
  .nk-box-rounded-1 {
    padding: 20px;
  }
  .nk-decorated-h-3 i {
    display: inline-block;
  }
  .nk-tabs .nav-tabs .nav-link {
    font-size: 14px;
  }
  #hnc-to-top {
    right: 15px;
  }
  ul.hnc-profile-links {
    text-align: right;
  }
  #hnc-game-filters .row [class^='col'] {
    margin-bottom: 0;
  }
  .col-sm-2dot4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }
  #hnc-game-filters {
    padding: 15px 40px;
  }
  .support_thread_meta ul {
    margin-top: 0;
  }
  .support_thread_meta ul li p {
    display: block;
  }

  .support_thread_meta ul li {
    padding: 5px 10px;
  }

  .hnc-copyright-main {
    text-align: left;
  }
  .hnc-copyright .nk-social-links {
    text-align: right;
  }
  .bg-blog,
  .bg-footer,
  .bg-breadcrumb,
  .bg-head,
  .bg-head-top,
  .bg-home,
  .bg-page {
    padding: 30px 15px 30px 15px;
  }
  .bg-head-top {
    padding: 7px 15px;
  }
  .bg-head {
    padding: 15px;
  }
  .bg-breadcrumb {
    padding: 10px 15px;
  }
  .nk-post-img img.game-image {
    height: 150px;
  }
  .nk-post-img img.phanmem-image,
  .nk-post-img img.thuthuat-image {
    height: 130px;
  }
  .nk-blog-post img.hnc-seri {
    height: 66px;
  }
  .product-details {
    margin-bottom: 0;
  }
}
@media (min-width: 540px) {
  .dropdown-notify {
    left: -120px !important;
  }
  .user-header-col {
    text-align: right;
  }
  .nk-decorated-h-3 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
  }
  .nk-decorated-h-3 > span,
  .nk-decorated-h-3 > a {
    padding-right: 20px;
    font-size: 20px;
  }
  .nk-box-1,
  .nk-box-rounded-1 {
    padding: 20px;
  }
  .nk-decorated-h-3 i {
    display: inline-block;
  }
  .nk-tabs .nav-tabs .nav-link {
    font-size: 14px;
  }
  #hnc-to-top {
    right: 15px;
  }
  ul.hnc-profile-links {
    text-align: right;
  }
  #hnc-game-filters .row [class^='col'] {
    margin-bottom: 0;
  }
  .col-sm-2dot4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }
  #hnc-game-filters {
    padding: 15px 40px;
  }
  .support_thread_meta ul {
    margin-top: 0;
  }
  .support_thread_meta ul li p {
    display: block;
  }

  .support_thread_meta ul li {
    padding: 5px 10px;
  }

  .hnc-copyright-main {
    text-align: left;
  }
  .hnc-copyright .nk-social-links {
    text-align: right;
  }
  .bg-blog,
  .bg-footer,
  .bg-breadcrumb,
  .bg-head,
  .bg-head-top,
  .bg-home,
  .bg-page {
    padding: 30px 15px 30px 15px;
  }
  .bg-head-top {
    padding: 7px 15px;
  }
  .bg-head {
    padding: 15px;
  }
  .bg-breadcrumb {
    padding: 10px 15px;
  }
  .nk-post-img img.game-image {
    height: 150px;
  }
  .nk-post-img img.phanmem-image,
  .nk-post-img img.thuthuat-image {
    height: 130px;
  }
  .nk-blog-post img.hnc-seri {
    height: 66px;
  }
  .product-details {
    margin-bottom: 0;
  }
}
.nk-download .nk-tabs .nav-tabs .nav-link {
  padding: 6px 20px;
  font-size: 15px;
}

.nk-download-content p {
  margin-bottom: 4px;
}

.nk-download-content {
  padding: 0 0 15px 0;
}
.nk-download ul.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: unset;
}

.nk-download ul.nav li {
  margin: 0;
  padding: 0;
  width: 100%;
  display: block;
}
.nk-gap-2 {
  height: 30px;
}
.mw-100 {
  max-width: 100% !important;
}
.mh-100 {
  max-height: 100% !important;
}

// Viewport additional helpers

.min-vw-100 {
  min-width: 100vw !important;
}
.min-vh-100 {
  min-height: 100vh !important;
}

.vw-100 {
  width: 100vw !important;
}
.vh-100 {
  height: 100vh !important;
}
.nk-decorated-h-3 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
}
.nk-decorated-h-3 > span,
.nk-decorated-h-3 > a {
  padding-right: 20px;
  font-size: 20px;
}
.nk-box-1,
.nk-box-rounded-1 {
  padding: 20px;
}
.nk-decorated-h-3 i {
  display: inline-block;
}
.nk-tabs .nav-tabs .nav-link {
  font-size: 14px;
}
#hnc-to-top {
  right: 15px;
}
ul.hnc-profile-links {
  text-align: right;
}
#hnc-game-filters .row [class^='col'] {
  margin-bottom: 0;
}
.nk-feature-15{
  background-color: rgb(43, 42, 42);
}
.nk-feature-1,
.nk-feature-2 {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  min-height: 50px;
  padding: 10px;
  border: 1px solid #293139;
  border-radius: 4px;
}

.nk-feature-1 .nk-feature-icon,
.nk-feature-2 .nk-feature-icon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 116px;
  height: 50px;
  padding-right: 10px;
  font-size: 18px;
  line-height: 50px;
  color: #fff;
  text-align: center;
  border-right: 1px solid #293139;
  border-radius: 3px;
}

.nk-feature-1 .nk-feature-icon img,
.nk-feature-2 .nk-feature-icon img {
  max-width: 100%;
  height: auto;
}

.nk-feature-1 .nk-feature-cont,
.nk-feature-2 .nk-feature-cont {
  padding-top: 8px;
  padding-left: 38px;
}
.size-img{
  width: 80px;
}
</style>
