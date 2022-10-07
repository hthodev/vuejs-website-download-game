<template>
  <div class="size-bg">
      <form >
        <div class="form-group">

      </div>
      <div class="form-group">
        <label for=""> Tên tài khoản email </label>
        <input v-model="listUser.Email" type="text" class="form-control" 
        />  
      </div>
      <div class="form-group">
        <label for=""> Số điện thoại </label>
        <input v-model="listUser.Phone" type="text" class="form-control" 
        />

      <div class="form-group input-number">
        <label for=""> Mật khẩu </label>
        <input v-model="listUser.Password" type="text" class="form-control" />
      </div>
    </div>
      <button @click.prevent="OnEdit" class="btn btn-primary"
      >Lưu</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import catalogApi from '@/api/catalogApi'
export default {
  layout: 'admin',
  data() {
    return {
      listUser: [],

    }
  },

  async created() {
    await this.getAllUser()
  },

  methods: {
    async getAllUser() {
      try {
        const { data } = await catalogApi.getByIdAccount(
          this.$axios,
          this.$route.params.id
        )
        this.listUser = data.data.account
      } catch (err) {
        console.log(err)
      }
    },


    OnEdit() {
      Swal.fire({
        title: 'Bạn có muốn lưu lại tất cả dữ liệu vừa nhập?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Lưu đi',
        denyButtonText: `Đổi ý rồi! Không lưu nữa`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$axios.$put('/account/update', this.listUser)
          Swal.fire('Lưu xong rồi nè!', '', 'success')
          this.$router.push('/admin/user/view')
        } else if (result.isDenied) {
          Swal.fire('Hờn rồi! Không lưu nữa', '', 'info')
          this.$router.push('/admin/product/manager')
        }
      })
    },
  },
}
</script>

<style>
.size-bg {
}
.input-number {
  width: 180px;
}
.form-control{
  width: 460%;
}
.scoll {
  width: 1000px;
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  overflow-block: auto;
}
.size-form {
 
}
.form-group {
  color: white;
}
</style>