<template>
  <div class="size-bg">
    <div class="bl">
    <div class="wlcome" > WELCOME, <span style="color:red"> {{$auth.$state.user.user.Email}} </span> <p> </p> </div>
    <div class="row vertical-gap">
      <div class="col-lg-4">
        <div class="nk-feature-1">
          <div class="nk-feature-icon">
            <img class="size-img"
              src="https://i.ibb.co/zZ0z6PJ/1-removebg-preview-3.png"
              alt="Categories Icon"
            />
          </div>
          <div class="nk-feature-cont">
            <h3 class="nk-feature-title">
              <a href="http://localhost:3000/admin/user/view">CÁC THÀNH VIÊN</a>
            </h3>
            <h4 class="nk-feature-title text-main-1">
              <a href="http://localhost:3000/admin/user/view">Xem thêm</a>
            </h4>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="nk-feature-1">
          <div class="nk-feature-icon">
            <img class="size-img"
              src="https://i.ibb.co/g38mS8L/1-removebg-preview-4.png"
              alt="Categories Icon"
            />
          </div>
          <div class="nk-feature-cont">
            <h3 class="nk-feature-title">
              <a href="http://localhost:3000/admin/user/role">PHÂN QUYỀN</a>
            </h3>
            <h4 class="nk-feature-title text-main-1">
              <a href="http://localhost:3000/admin/user/role">Xem thêm</a>
            </h4>
          </div>
        </div>
      </div>
        <div class="col-lg-4">
        <div class="nk-feature-1">
          <div class="nk-feature-icon">
            <img class="size-img"
              src="https://i.ibb.co/xmjr77v/1-removebg-preview-5.png"
              alt="Categories Icon"
            />
          </div>
          <div class="nk-feature-cont">
            <h3 class="nk-feature-title">
              <a href="http://localhost:3000/admin/user/add">THÊM THÀNH VIÊN ADMIN</a>
            </h3>
            <h4 class="nk-feature-title text-main-1">
              <a href="http://localhost:3000/admin/user/add">Xem thêm</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
    <p> </p>
    <div class="prod" > <p> PRODUCTS </p> </div>
    <div class="row vertical-gap">
      <div class="col-lg-4">
        <div class="nk-feature-1">
          <div class="nk-feature-icon">
            <img class="size-img"
              src="https://i.ibb.co/LRtWkzf/1-removebg-preview-10.png"
              alt="Categories Icon"
            />
          </div>
          <div class="nk-feature-cont">
            <h3 class="nk-feature-title">
              <a href="http://localhost:3000/admin/product/add">THÊM SẢN PHẨM</a>
            </h3>
            <h4 class="nk-feature-title text-main-1">
              <a href="http://localhost:3000/admin/product/add">Xem thêm</a>
            </h4>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="nk-feature-1">
          <div class="nk-feature-icon">
            <img class="size-img"
              src="https://i.ibb.co/WPWh5Db/1-removebg-preview-9.png"
              alt="Categories Icon"
            />
          </div>
          <div class="nk-feature-cont">
            <h3 class="nk-feature-title">
              <a href="http://localhost:3000/admin/product/manager">QUẢN LÝ SẢN PHẨM</a>
            </h3>
            <h4 class="nk-feature-title text-main-1">
              <a href="http://localhost:3000/admin/product/manager">Xem thêm</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  layout: 'admin',

  middleware: 'authAdmin',
}
</script>


<style>
.size-bg {
  width: 900px;
  height: 500px;
}
.size-img{
  width: 80px;
}
.wlcome{
  font-size: 40px;
  color: rgb(255, 255, 255);
}
.prod{
  font-size: 30px;
  color: rgb(0, 255, 21);
}
.nk-feature-1{
  background-color: white;
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
  min-height: 120px;
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
  font-size: 3rem;
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

.nk-feature-2 {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.nk-feature-2 .nk-feature-icon {
  width: 100%;
  height: auto;
  padding: 20px 0;
  border: 0;
}

.nk-feature-2 .nk-feature-cont {
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}
.nk-feature-title {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.nk-feature-title a {
  color: inherit;
  text-decoration: none;
}

</style>

