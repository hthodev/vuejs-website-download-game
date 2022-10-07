<template>
  <div class="size-bg">
    <form>
      <div class="scoll">
        <div class="size-form">
      <div class="form-group">
        <label for=""> Tên sản phẩm </label>
        <input v-model="dataSubmit.Name" type="text" 
        class="form-control" 
        placeholder="Nhập tên sản phẩm..."/>
      </div>
      <div class="form-group">
        <label for=""> Thể loại </label>
        <input
          v-model="dataSubmit.Game_genre"
          type="text"
          class="form-control"
          placeholder="Nhập thể loại sản phẩm..."
        />

        <div class="form-group" style="width: 200px">
          <label for=""> Danh Mục </label>
          <select name="" v-model="dataSubmit.ID_Category" class="form-control">
            <option
              v-for="(category, index) in categories"
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
          v-model="dataSubmit.Video_Game"
          type="text"
          class="form-control"
          placeholder="Nhập vào URL Video..."
        />
      </div>
      <div class="form-group input-number">
        <label for=""> Dung lượng </label>
        <input
          v-model="dataSubmit.Free_Space"
          type="number"
          class="form-control"
          placeholder="Dung lượng game tối thiểu?"
        />
      </div>

      <div class="form-group">
        <label for=""> URL Avatar </label>
        <input v-model="dataSubmit.Image_1" type="text" 
        class="form-control" 
        placeholder="Nhập vào URL Avatar game"/>
      </div>

      <div class="form-group">
        <label for=""> URL Ảnh mô tả 1 </label>
        <input v-model="dataSubmit.Image_2" type="text" 
        class="form-control" 
        placeholder="Nhập vào URL hình ảnh giới thiệu game"/>
      </div>

      <div class="form-group">
        <label for=""> URL Ảnh mô tả 2 </label>
        <input v-model="dataSubmit.Image_3" 
        type="text" class="form-control" 
        placeholder="Nhập vào URL hình ảnh giới thiệu game"/>
      </div>

      <div class="form-group input-number">
        <label for=""> Yêu cầu Ram tối thiểu </label>
        <input v-model="dataSubmit.Ram" type="number" 
        class="form-control" 
        placeholder="Yêu cầu Ram tối thiểu?"/>
      </div>

      <div class="form-group">
        <label for=""> Hệ điều hành </label>
        <input v-model="dataSubmit.OS" type="text" class="form-control" 
        placeholder="Hệ điều hành chạy được game?"/>
      </div>

      <div class="form-group">
        <label for=""> Ngôn ngữ </label>
        <input
          v-model="dataSubmit.Languages"
          type="text"
          class="form-control"
          placeholder="Ngôn ngữ của game..."
        />
      </div>

      <div class="form-group input-number">
        <label for=""> Số người chơi </label>
        <input v-model="dataSubmit.Player" type="number" class="form-control" 
        placeholder="Số người có thể tương tác được"/>
      </div>

      <div class="form-group">
        <label for=""> Đường dẫn tải game bằng Fshare </label>
        <input
          v-model="dataSubmit.Link_Fshare"
          type="text"
          class="form-control"
          placeholder="Nhập vào URL đường dẫn tải game Fshare"
        />
      </div>

      <div class="form-group">
        <label for=""> Đường dẫn tải game trực tiếp </label>
        <input v-model="dataSubmit.Link_Vip" type="text" 
        class="form-control" 
        placeholder="Nhập vào URL tải game trực tiếp"/>
      </div>

      <div class="form-group">
        <label for=""> Mô tả </label>
        <textarea
          v-model="dataSubmit.Decription"
          type="text"
          class="form-control"
          placeholder="abcd..."
          rows="8"
        ></textarea>
      </div>
        </div>
      </div>
      <p>  &ensp;</p>
      <button  @click.prevent="onCreatePost" class="btn btn-primary">Lưu</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import catalogApi from '@/api/catalogApi'
export default {
  layout: 'admin',
  data() {
    return {
      dataSubmit: {
        Name: '',
        Game_genre: '',
        Decription: '',
        Video_Game: '',
        Free_Space: null,
        Time_Update: new Date().toISOString().substr(0, 10),
        Image_1: '',
        Image_2: '',
        Image_3: '',
        Point_Rare: '',
        Ram: null,
        OS: '',
        Languages: '',
        Player: '',
        Link_Fshare: '',
        Link_Vip: '',
        ID_Category: 1,
      },
      categories: [],
    }
  },
  async created() {
    await this.getCategories()
  },
  methods: {
    async getCategories() {
      try {
        const { data } = await catalogApi.getCategories(this.$axios)
        this.categories = data
      } catch (err) {
        console.log(err)
      }
    },


    async onCreatePost() {
      const data = {
          Name: this.dataSubmit.Name,
          Game_genre: this.dataSubmit.Game_genre,
          Decription: this.dataSubmit.Decription,
          Video_Game: this.dataSubmit.Video_Game,
          Free_Space: this.dataSubmit.Free_Space,
          Time_Update: this.dataSubmit.Time_Update,
          Image_1: this.dataSubmit.Image_1,
          Image_2: this.dataSubmit.Image_2,
          Image_3: this.dataSubmit.Image_3,
          Point_Rare: this.dataSubmit.Point_Rare,
          Ram: this.dataSubmit.Ram,
          OS: this.dataSubmit.OS,
          Languages: this.dataSubmit.Languages,
          Player: this.dataSubmit.Player,
          Link_Fshare: this.dataSubmit.Link_Fshare,
          Link_Vip: this.dataSubmit.Link_Vip,       
          ID_Category: this.dataSubmit.ID_Category

      }
      try {
        await this.$axios.$post('/product', data)
        
        // console.log('Signup successfully!')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          },
        })

        Toast.fire({
          icon: 'success',
          title: 'Added product successfully',
        })
        console.log(this.$router)
        this.$router.push('/admin')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style>
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
.input-number {
  width: 180px;
}
</style>