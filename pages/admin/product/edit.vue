<template>
  <div class="size-bg">
      <form >
        <div class="scoll">
          <div class="size-form">
      <div class="form-group">
        <label for=""> Tên sản phẩm </label>
        <input v-model="listProducts.Name" type="text" class="form-control" 
        />
      </div>
      <div class="form-group">
        <label for=""> Thể loại </label>
        <input v-model="listProducts.Game_genre" type="text" class="form-control" 
        />

        <div class="form-group" style="width: 200px">
          <label for=""> Danh Mục </label>
          <select name="" 
          v-model="listProducts.ID_Category" class="form-control">
            <option
              v-for="(category, index) in listCategory"
              :key="index"
              :value="category.ID_Category"
            >
              {{ category.Name }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for=""> URL Video </label>
        <input
          v-model="listProducts.Video_Game"
          type="text"
          class="form-control"
        />
      </div>
      <div class="form-group input-number">
        <label for=""> Dung lượng </label>
        <input
          v-model="listProducts.Free_Space"
          type="text"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for=""> URL Avatar </label>
        <input v-model="listProducts.Image_1" type="text" class="form-control" />
      </div>

      <div class="form-group">
        <label for=""> URL Ảnh mô tả 1 </label>
        <input v-model="listProducts.Image_2" type="text" class="form-control" />
      </div>

      <div class="form-group">
        <label for=""> URL Ảnh mô tả 2 </label>
        <input v-model="listProducts.Image_3" type="text" class="form-control" />
      </div>

      <div class="form-group input-number">
        <label for=""> Yêu cầu Ram tối thiểu </label>
        <input v-model="listProducts.Ram" type="number" class="form-control" />
      </div>

      <div class="form-group">
        <label for=""> Hệ điều hành </label>
        <input v-model="listProducts.OS" type="text" class="form-control" />
      </div>

      <div class="form-group">
        <label for=""> Ngôn ngữ </label>
        <input v-model="listProducts.Languages" type="text" class="form-control" />
      </div>

      <div class="form-group input-number">
        <label for=""> Số người chơi </label>
        <input v-model="listProducts.Player" type="number" class="form-control" />
      </div>

      <div class="form-group">
        <label for=""> Đường dẫn tải game bằng Fshare </label>
        <input
          v-model="listProducts.Link_Fshare"
          type="text"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for=""> Đường dẫn tải game trực tiếp </label>
        <input v-model="listProducts.Link_Vip" type="text" class="form-control" />
      </div>

      <div class="form-group">
        <label for=""> Mô tả </label>
        <textarea
        v-model="listProducts.Decription"
          key="listProducts.Decription = dataSubmit.Decription"
          type="text"
          class="form-control"
          rows="10"
        ></textarea>
      </div>
          </div>
        </div>
        <p> &ensp; </p>
      <button @click.prevent="OnEdit" class="btn btn-primary"
      >Lưu</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import catalogApi from '@/api/catalogApi';
export default {
  layout: 'admin',
    data() {
      return {
        listProducts: [],
        listCategory: [],
      }
    },


    async created() {
      await this.getAllProducts()
      await this.getCategory()
    },

     methods: {
      async getAllProducts() {
        try {
          const {data} = await catalogApi.getByIdProducts(this.$axios,
          this.$route.params.id)
          this.listProducts = data.productDetail
          console.log(this.listProducts);
        } catch (err) {
          console.log(err)
        }
      },

      async getCategory() {
        try {
          const {data} = await catalogApi.getCategories(this.$axios)
          this.listCategory = data
        } catch (err) {
          console.log(err)
        }
      },

      OnEdit(){
        
        Swal.fire({
        title: 'Bạn có muốn lưu lại tất cả dữ liệu vừa nhập?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Lưu đi',
        denyButtonText: `Đổi ý rồi! Không lưu nữa`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$axios.$put('/product/update/', this.listProducts)
          Swal.fire('Lưu xong rồi nè!', '', 'success')
          this.$router.push('/admin/product/manager')
        } else if (result.isDenied) {
          Swal.fire('Hờn rồi! Không lưu nữa', '', 'info')
          this.$router.push('/admin/product/manager')
        }
      })
      }
  }
}
</script>

<style>
.size-bg {
}
.input-number {
  width: 180px;
}
.scoll {
  width: 1000px;
  height: 400px;
    overflow-x:hidden;
    overflow-y:auto;
    overflow-block: auto;
}
.size-form{
  
  margin-right: 10%;
}
.form-group{
  color: white;
}
</style>