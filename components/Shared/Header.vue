<template>
<div class="container-general">
  <div>
  <div
    class="
      
      d-flex
      flex-column flex-md-row
      align-items-center
      p-3
      px-md-4
      mb-3
      bg-white
      border-bottom
      shadow-sm
      background
    "
  >
    <a href="http://localhost:3000/" 
    class="my-0 mr-md-auto font-weight-normal">
    <img class="bg-img" src="https://i.ibb.co/hHc1ZKL/logo-quan-game-dep-1024x1024-removebg-preview.png" />
    </a>
    <div>
					 
             <input class="search" v-model="search" type="text" value="" placeholder="Search...">
              
              <router-link :to="{ path: '/search/'+ search }" >
              <span style="  font-size: 18px; color: white;" > &emsp; ⌕ &emsp;</span>
            </router-link>
          
				 </div>
         
    <nav class="my-2 my-md-0 mr-md-3">
		<div class="dropdown nav1 ">
							<button class="nut_dropdown p-2">Danh Mục+</button>
							<div class="noidung_dropdown">
                <router-link :to="{ path: '/category/'+ 1 }" >Game </router-link>
                <router-link :to="{ path: '/category/'+ 2 }" >Game Phiêu Lưu </router-link>
                <router-link :to="{ path: '/category/'+ 3 }" >Game Hành Động </router-link>
                <router-link :to="{ path: '/category/'+ 4 }" >Game Kinh Dị </router-link>
                <router-link :to="{ path: '/category/'+ 5 }" >Game Giải Đố </router-link>
                <router-link :to="{ path: '/category/'+ 6 }" >Game Chiến Thuật </router-link>
                <router-link :to="{ path: '/category/'+ 7 }" >Game 18+ </router-link>
                <router-link :to="{ path: '/category/'+ 8 }" >Game Đối Kháng </router-link>
                <router-link :to="{ path: '/category/'+ 9 }" >Game Chặt Chém </router-link>
                <router-link :to="{ path: '/category/'+ 10 }" >Game Giả Lập </router-link>
                <router-link :to="{ path: '/category/'+ 11 }" >Game Mô Phỏng </router-link>
                <router-link :to="{ path: '/category/'+ 12 }" >Game Bắn Súng </router-link>
                <router-link :to="{ path: '/category/'+ 13 }" >Game Nhập Vai </router-link>
                <router-link :to="{ path: '/category/'+ 14 }" >Game Thể Thao </router-link>
                <router-link :to="{ path: '/category/'+ 15 }" >Game Sinh Tồn </router-link>
                <router-link :to="{ path: '/category/'+ 16 }" >Game Online </router-link>
                
							</div>
						  </div>
      
      <a class="p-2 text-light " href="">Cộng Đồng</a>
      <a class="p-2 text-light " href="mailto:thienthotran.it@gmail.com">Liên Hệ+</a>
    </nav>
    
    <template v-if="statusLogined==false">
      <a
      class="btn btn-outline-primary" 
      href="http://localhost:3000/signin">
      Đăng nhập
      </a>
    </template>

    <template v-else >
      <div class="navbar-item nav1 dropdown is-hoverable ">
          <a class="navbar-link "> 
            <span class="icon is-small is-left">
              <i class="fab fa-earlybirds"></i>
            </span> Hello, {{$auth.$state.user.user.Email}} 
            
          </a>
              <div class="noidung_dropdown">
                <a href="#" class=""> Profile </a>
                <template v-if="$auth.$state.user.user.Role==1"> 
                <a href="http://localhost:3000/admin" class=""> Admin </a>
                </template>
                <a @click="$auth.logout()" style="color: red"> Logout </a>
              </div>
      </div>
    </template>
  </div>
</div>
</div>
</template>
<script>
export default {
  data(){
    return {  
      statusLogined: this.$auth.loggedIn,
      search: ''
    }
  },
   
  methods:{
      }
  }
</script>
<style>
.bg-img{
    max-width: 55px;
    max-height: 55px;
    margin-left: 20%;
  }
.size-img{
}
  .background{
    background-color: rgb(27, 29, 30) !important;
  }
 .container-general{
    width: 90% !important;
    margin: auto;
    margin-top: 1%;
  }
	.nut_dropdown {
  background-color: rgba(0, 153, 255, 0.014) !important;
  color: #3ae8ff;
  padding: 16px;
  font-size: 18px;
  border: none;
}
/* Thiết lập vị trí cho thẻ div với class dropdown*/
.dropdown {
  position: relative;
  display: inline-block;
}
/* Nội dung Dropdown */
.noidung_dropdown {
  /*Ẩn nội dung các đường dẫn*/
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.445);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
/* Thiết kế style cho các đường dẫn trong Dropdown */
.noidung_dropdown a {
  
  color: rgb(252, 252, 252);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}


/* thay đổi màu background khi hover vào đường dẫn */
.noidung_dropdown a:hover {background-color: rgb(170, 33, 33);}
/* hiển thị nội dung dropdown khi hover */
 .dropdown:hover .noidung_dropdown {display: block;}
/* Thay đổi màu background cho nút khi được hover */
 .dropdown:hover .nut_dropdown { color: red;}

.search {
  position: relative;
  float: left;
  background: #46524f;
  color: #3ae8ff;

}
</style>