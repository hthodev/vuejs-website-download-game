

<template>
  <div class="container">
    <div class="table-wrapper">
      <link
        href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css"
        rel="stylesheet"
      />
      <div class="table-title">
        <div class="row">
          <div class="col-sm-6" style="color:red">
            <h2>Manage <b>User</b></h2>
          </div>
         
        </div>
      </div>
      <form>
        <div class="scoll">
          <div class="size-form">
        <table class="table table-striped table-hover">
          <thead class="fixer">
            <tr>
              <th class="color-text-1">ID</th>
              <th class="color-text-1">Tài khoản</th>
              <th class="color-text-1">SDT</th>
              <th class="color-text-1">Mật khẩu</th>
              <th class="color-text-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="index" v-for="(manager, index) in listAccount">
              <td class="color-text-2">{{ manager.ID_DLer }}</td>
              <td class="color-text-2">{{ manager.Email }}</td>
              <td class="color-text-2">
                {{ manager.Phone }}
              </td>
              <td class="color-text-2">
                *********</td>
              <td>
                <a href="" class="edit" data-toggle="modal">
                  <router-link
                    :to="{
                      path: './edit/' + manager.ID_DLer,
                      params: { idProd: manager.ID_DLer },
                    }"
                  >
                    <i
                      class="material-icons"
                      data-toggle="tooltip"
                      title="Edit"
                    >
                      ✍
                    </i>
                  </router-link>
                </a>
                <a
                  @click.prevent="OnDelete(manager.ID_DLer)"
                  class="delete"
                  href=""
                  >
                  <i
                    style="color: red"
                  >
                    ✘
                  </i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
          </div>
        </div>
      </form>
      <a href="http://localhost:3000/admin"
        ><button type="button" class="btn btn-primary">Back to home</button>
      </a>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import catalogApi from '~/api/catalogApi'

export default {
  layout: 'admin',
  middleware: 'authAdmin',
  data(){
    return{
      listAccount: []
  }
  },
  async created(){
      await this.Managerlist();
    },
    methods: {
      async Managerlist(){
        try{
          const {data} = await catalogApi.getAllEmail(this.$axios)
          this.listAccount = data.accs
          console.log(this.listAccount);
        }catch(err) {console.log(err);}
      },

       OnDelete(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      })

      swalWithBootstrapButtons
        .fire({
          title: 'Bạn chắn chắn muốn xóa',
          text: "Dữ liệu không thể khôi phục!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Xóa luôn!',
          cancelButtonText: 'Thôi em rút lui!',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            catalogApi.deleteAccount(this.$axios, id)
            swalWithBootstrapButtons.fire(
              'Đã xóa thành công!',
              'Sản phẩm đã được tiễn về ông bà!',
              'success'
            )
            this.$router.push('admin/product/manager')
            this.$router.go()
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Thôi không xóa nữa',
              'Sản phẩm của bạn còn ở đấy',
              'error'
            )
          }
          
        })
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
.color-text-1{
  color:rgb(38, 255, 9)
}
.color-text-2{
  color: white;
}
</style>