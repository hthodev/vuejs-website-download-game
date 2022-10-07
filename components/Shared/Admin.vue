<template>
<div class="bg-main" >
  <div class="list_menu_site width_common">
    <div class="item_menu_site border">
      <a class="menu_cap1 color-text" href="http://localhost:3000/admin"
        >Trang chủ Admin <span class="icon_carret_down"></span
      ></a>
    </div>

    <div class="item_menu_site border">
      <div class="menu_cap1 color-text"
        >Quản lý User<span class="icon_carret_down"></span
      ></div>
    </div>
    <div class="item_menu_site border">
      <a class="menu_cap2" href="http://localhost:3000/admin/user/view"
        >&emsp; Tài khoản User<span class="icon_carret_down"></span
      ></a>
    </div>
    <div class="item_menu_site border">
      <a class="menu_cap2" href="http://localhost:3000/admin/user/role"
        >&emsp; Phân quyền<span class="icon_carret_down"></span
      ></a>
    </div>
    <div class="item_menu_site border">
      <a class="menu_cap2" href="http://localhost:3000/admin/user/add"
        >&emsp; Tạo tài khoản Admin<span class="icon_carret_down"></span
      ></a>
    </div>

    <div class="item_menu_site border">
      <div class="menu_cap1 parent_submenu color-text"
        >Quản lý sản phẩm <span class="icon_carret_down"></span
      ></div>
    </div>
    <div class="item_menu_site border">
      <a class="menu_cap2" href="http://localhost:3000/admin/product/add"
        >&emsp;Thêm sản phẩm<span class="icon_carret_down"></span
      ></a>
    </div>
    <div class="item_menu_site border">
      <a class="menu_cap2" href="http://localhost:3000/admin/product/manager"
        >&emsp;Sửa, xóa sản phẩm<span class="icon_carret_down"></span
      ></a>
    </div>
    <p> &emsp; </p>
    <div>
        <div class="item_menu_site">
            <a class="menu_cap1 parent_submenu color-text2" href=""
            >Liên hệ <span class="icon_carret_down"></span
            ></a>
        </div>

        <div class="item_menu_site ">
            <a class="menu_cap1 parent_submenu color-text2" href=""
            >Báo cáo vi phạm <span class="icon_carret_down"></span
            ></a>
        </div>

    </div>
  </div>
</div>
</template>


<style>
.bg-main{
    width: 250px;
    background-color: rgb(90, 86, 86);
    
}
.color-text{
  color:red
}
.color-text2{
  color:rgb(233, 233, 233)
}
.block_ct_menu_site{
  border-bottom: 10px solid #f1f1f5;
}
.border{
  border-block: 1px solid rgb(93, 96, 100);
}
.item_menu_site{
  width: 100%;
  float: left;
  position: relative;
}
.item_menu_site .icon_carret_down{
  position: absolute;
  right: 10px;
  top: 15px;
  transform: rotate(270deg);
}
.item_menu_site .menu_cap1 .icon_carret_down{
  top: 20px
}
.item_menu_site .icon_carret_down:before{
  background: none;
  border: 1px solid #a0a0a0;
}
.item_menu_site .menu_cap1{
  font-size: 18px;
  font-weight: 700;
}
.item_menu_site .menu_cap2{
  font-size: 14px;
  color:white
}
.item_menu_site .menu_cap1,
.item_menu_site .menu_cap2{
  display: block;
  padding:10px;
}
.list_sub_menu_site .menu_cap3{
  padding: 10px 10px 10px 20px;
   display: block;
}
.list_sub_menu_site .menu_cap2{
  font-weight: 700;
}
.item_menu_site  a:hover{
  background: #e5fbf1;
  color: #306e51;
}
.item_menu_site  a:hover .icon_carret_down:before{
  border: 1px solid #306e51;
}
#wrapper_menu .block_hot_line{
  border: none;
  padding:0 10px;
  margin: 0;
  width: 100%;
}
#wrapper_menu .item_hotline{
  font-size: 16px;
  line-height: 16px;
  margin-left: 0;
  margin-right: 5%;
  width: 45%;
  padding-left: 30px;
}

#wrapper_menu .icons_hotline{
  left: 0px;
}
#wrapper_menu .item_hotline strong{
  font-size: 20px;
  line-height: 20px;
}
#wrapper_menu .block_sub_menu_site{
    position: fixed;
    width: 360px;
    top: -1px;
    z-index: 22;
    height: 100%;   
    left:0px;
    background: #fff;   
    -webkit-overflow-scrolling: touch;
    -webkit-transform: translate3d(-200%,0px,0);
    -ms-transform: translate3d(-200%,0px,0);
    -o-transform: translate3d(-200%,0px,0);
    transform: translate3d(-200%,0px,0);
    -webkit-transition: transform .5s cubic-bezier(.16,.68,.43,.99);
    -moz-transition: transform .5s cubic-bezier(.16,.68,.43,.99);
    -o-transition: transform .5s cubic-bezier(.16,.68,.43,.99);
    transition: transform .5s cubic-bezier(.16,.68,.43,.99);
}
#wrapper_menu .show_submenu .block_sub_menu_site{
  -webkit-transform: translate3d(0,0px,0);
    -ms-transform: translate3d(0,0px,0);
    -o-transform: translate3d(0,0px,0);
    transform: translate3d(0,0px,0);
}
#wrapper_menu .item_back_sub_menu .back_sub_menu{
  padding: 10px;
  display: block;
  border-bottom: 10px solid #f1f1f5;
  font-size: 14px;
  font-weight: 700;
}
#wrapper_menu .icon_back{
  margin-right: 10px;
  margin-top: -3px;
}
</style>
