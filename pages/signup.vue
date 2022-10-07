<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>Sign Up</h3>
          <div class="d-flex justify-content-end social_icon">
            <span><i class="fab fa-facebook-square"></i></span>
            <span><i class="fab fa-google-plus-square"></i></span>
            <span><i class="fab fa-twitter-square"></i></span>
          </div>
        </div>
        <div class="card-body">
          <form>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><i class="fas fa-user"></i
                ></span>
              </div>
              <input
                id="email"
                v-model="form.email"
                @blur="$v.form.email.$touch()"
                
                type="text"
                class="form-control color-ip"
                placeholder="email"
              />
           
            <div v-if="$v.form.email.$error" class="form-error">
              <span v-if="!$v.form.email.required"
              class="help is-danger" style="color:red"> 
              &ensp; vui lòng nhập email </span>
              <span v-if="!$v.form.email.emailValidator" class="help is-danger" style="color:red">
              &ensp; email không hợp lệ!
              </span>
            </div>
             </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>

              <input
                id="phone"
                @blur="$v.form.phone.$touch()"
                v-model="form.phone"
                type="text"
                class="form-control color-ip"
                placeholder="phone number"
              />
              <div v-if="$v.form.phone.$error" class="form-error">
              <span v-if="!$v.form.phone.required"
              class="help is-danger" style="color:red"> 
              &ensp; vui lòng nhập SDT </span>
              <span v-if="!$v.form.phone.maxLength" class="help is-danger" style="color:red">
              &ensp; SDT dưới 10
              </span>
            </div>
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>

              <input
                id="password"
                @blur="$v.form.password.$touch()"
                v-model="form.password"
                type="password"
                class="form-control color-ip"
                placeholder="password"
              />
             <div v-if="$v.form.password.$error" class="form-error">
              <span v-if="!$v.form.password.required"
              class="help is-danger" style="color:red"> 
              &ensp; vui lòng nhập Mật khẩu </span>
              <span v-if="!$v.form.password.minLength" class="help is-danger" style="color:red">
              &ensp; Mật khẩu phải >6!
              </span>
            </div>
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>

              <input
                id="re_password"
                @blur="$v.form.re_password.$touch()"
                v-model="form.re_password"
                type="password"
                class="form-control color-ip"
                placeholder="re-password"
              />
             <div v-if="$v.form.re_password.$error" class="form-error">
              <span v-if="!$v.form.re_password.sameAs" class="help is-danger" style="color:red">
              &ensp; Mật khẩu không trùng khớp
              </span>
            </div>
            </div>
            <button class="btn float-right login_btn" 
            @click.prevent="register" 
            :disabled="$v.form.$invalid"
            type="submit">
              Đăng ký
            </button>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Quay lại 
            <a href="http://localhost:3000/signin">Đăng nhập</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email, minLength, maxLength, sameAs } from "vuelidate/lib/validators";
import Swal from 'sweetalert2';
import catalogApi from '@/api/catalogApi'
export default {
  middleware: "auth",
  auth: "guest",
  data() {
    return {
      form: {
        email: null,
        phone: null,
        password: null,
        re_password: null,
        Date: new Date().toISOString().substr(0, 10)
      },
      listEmail: [],
    }
  },
  validations:{
    form: {
      email: { required, emailValidator: email},
      password: { required, minLength: minLength(6) },
      phone: {required, maxLength: maxLength(10)},
      re_password: { sameAs: sameAs('password') }
    }
  },
  async created(){
      await this.AllListEmail();
    },

  computed:{
    isFormValid(){
        return !this.$v.form.$invalid;
    }
  },
  methods: {
    async AllListEmail(){
      try{
        const {data} = await catalogApi.getAllEmail(this.$axios)
        this.listEmail = data.accs
        console.log(this.listEmail);
      }catch(err){console.log(err);}
    },
    
    // eslint-disable-next-line require-await
    async onClickEmail(){
      if (this.listEmail.length === this.form.email){
        console.log("Email da ton tai");
      }
    },

    async register() {
      const data = {
        Email: this.form.email,
        Phone: this.form.phone,
        Password: this.form.password,
        CreateAt: this.form.Date
      }
      try {
        const res = await this.$axios.$post('/account/signup', data)
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
        this.$router.push('/signin')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style>
.container {
  height: 100%;
  align-content: center;
}
.color-ip{
  background-color: rgb(177, 200, 211);
}
.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #ffc312;
}

.social_icon span:hover {
  color: white;
  cursor: pointer;
}

.card-header h3 {
  color: white;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span {
  width: 50px;
  background-color: #ffc312;
  color: black;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.remember {
  color: white;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  color: black;
  background-color: #ffc312;
  width: 100px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}

.links {
  color: white;
}

.links a {
  margin-left: 4px;
}
</style>