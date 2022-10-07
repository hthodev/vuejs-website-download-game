<template>
  <div class="size-bg">
    <form @submit.prevent="onCreatePost">
      <div class="scoll">
        <div class="size-from">
      <div class="form-group">
        <label for="">Tên tài khoản Admin
            <div v-if="$v.form.email.$error" class="form-error">
              <span v-if="!$v.form.email.required"
              class="help is-danger" style="color:red"> 
              Vui lòng nhập tài khoản Admin </span>
              
            </div>
         </label>
        <input 
        @blur="$v.form.email.$touch()"
        v-model="form.email"
         type="text" class="form-control" />


      </div>
      <div class="form-group">
        <label for="">  Mật khẩu
            <div v-if="$v.form.password.$error" class="form-error">
              <span v-if="!$v.form.password.required"
              class="help is-danger" style="color:red"> 
              Vui lòng nhập Mật khẩu </span>
              <span v-if="!$v.form.password.minLength" class="help is-danger" style="color:red">
              Mật khẩu phải >6!
              </span>
            </div>
         </label>
        <input
          v-model="form.password"
          @blur="$v.form.password.$touch()"
          type="password"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="">  Xác nhận mật khẩu
        <div v-if="$v.form.re_password.$error" class="form-error">
              <span v-if="!$v.form.re_password.sameAs" class="help is-danger" style="color:red">
              &ensp;Mật khẩu không trùng khớp
              </span>
            </div>
         </label>
        <input 
        @blur="$v.form.re_password.$touch()"
        v-model="form.re_password" 
        type="password" class="form-control" />
      </div>

      <div class="form-group">
        <label for="">Số điện thoại
            <div v-if="$v.form.phone.$error" class="form-error">
              <span v-if="!$v.form.phone.required"
              class="help is-danger" style="color:red"> 
              Vui lòng nhập SDT </span>
              <span v-if="!$v.form.phone.maxLength" class="help is-danger" style="color:red">
                SDT dưới 10 số
              </span>
            </div>
         </label>
        <input 
        @blur="$v.form.phone.$touch()"
        v-model="form.phone"
        type="number" class="form-control" />
      </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary"
      >Lưu</button>
    </form>
  </div>
</template>

<script>

// import catalogApi from '@/api/catalogApi' ;
import { required, email, minLength, maxLength, sameAs } from "vuelidate/lib/validators" ;
import Swal from 'sweetalert2'


export default {
  middleware: 'authAdmin',

  layout: 'admin',

  data() {
    return {
      form: {
        email: null,
        password: null,
        re_password: null,
        phone: null,
        Date: new Date().toISOString().substr(0, 10)
      },
    }
  },
  validations:{
    form: {
      email: { required, emailValidator: email },
      password: { required, minLength: minLength(6) },
      phone: {required, maxLength: maxLength(10)},
      re_password: { sameAs: sameAs('password') }
    }
  },
   computed:{
    isFormValid(){
        return !this.$v.form.$invalid;
    }
  },

  methods: {

   async onCreatePost() {
      const data = {
        Email: this.form.email,
        Phone: this.form.phone,
        Password: this.form.password,
        CreateAt: this.form.Date
      }
      try {
        const res = await this.$axios.$post('/admin/signup', data)
        console.log(res)
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
          title: 'Signed up successfully',
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
.size-bg {

}
.scoll {
  width: 1000px;
  height: 400px;
    overflow-x:hidden;
    overflow-y:auto;
    overflow-block: auto;
}
.size-form{
  
  margin-right: 20%;
}
.form-group{
  color: white;
  width: 90%;
}
.input-number {
  width: 180px;
}
</style>