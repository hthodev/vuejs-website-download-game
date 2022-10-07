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
            <h2>Phân Quyền</h2>
          </div>
          <div class="col-sm-6">
            <a
              href="http://localhost:3000/admin/user/add"
              class="btn btn-success"
              data-toggle="modal"
              ><i class="material-icons">&#xE147;</i>
              <span>Add New Account</span></a
            >
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
              <th class="color-text-1">Tên tài khoản</th>
              <th class="color-text-1">Số điện thoại</th>
              <th class="color-text-1">Phân quyền</th>
              <th class="color-text-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="index" v-for="(manager, index) in listUser">
              <td class="color-text-2">{{ manager.ID_DLer }}</td>
              <td class="color-text-2">{{ manager.Email }}</td>
              <td class="color-text-2">{{ manager.Phone }}</td>
              <td class="color-text-2">
                <select
                 v-model="manager.Role">
                    <option value="0"> Quyền thành viên </option>
                    <option value="1"> Quyển quản trị viên </option>
                </select>
                
                <input :value="dataSubmit.Role = manager.Role" type="hidden" >
                <input v-model="dataSubmit.Role" type="hidden">
              </td>
              <td style=" margin-left:55%">
                <a
                  @click.prevent="OnSave(manager.ID_DLer)"
                  class="save"
                  href=""
                  >
                  <i
                    style="color: red"
                  >
                    Save
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
  data() {
    return {
      listUser: [],
      dataSubmit:{
          ID_DLer:'',
          Role:1,
      }
    }
  },
  async created() {
    await this.Managerlist()
  },

  methods: {
    async Managerlist() {
      try {
        const { data } = await catalogApi.getAllEmailAd(this.$axios)
        this.listUser = data.accs
      } catch (err) {
        console.log(err)
      }
    },

     OnSave(id) {
        
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      })

      swalWithBootstrapButtons
        .fire({
          title: 'Bạn chắn chắn muốn lưu',
          text: "Dữ liệu sẽ được lưu!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Lưu luôn đê!',
          cancelButtonText: 'Thằng đó phèn quá không lưu đâu!',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.dataSubmit.ID_DLer = id
            this.$axios.$put('/account/role', this.dataSubmit)
            swalWithBootstrapButtons.fire(
              'Đã lưu thành công!',
              'Account đã được #/𝄞 chức!',
              'success'
            )
            this.$router.push('admin/user/role')
            this.$router.go()
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Thôi không lưu nữa',
              'Hờn luôn rồi!',
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