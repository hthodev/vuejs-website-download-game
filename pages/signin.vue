<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>Đăng nhập</h3>
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
                v-model="form.Email"
                type="text"
                class="form-control color-ip"
                placeholder="email"
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input
                v-model="form.Password"
                type="password"
                class="form-control color-ip"
                placeholder="password"
              />
            </div>
            <div class="row align-items-center remember">
              <input type="checkbox" />Nhớ tài khoản
            </div>
            <button class="btn float-right login_btn" @click.prevent="login" type="submit">
              Đăng nhập
            </button>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Chưa có tài khoản?<a href="http://localhost:3000/signup">Đăng ký</a>
          </div>
          <div class="d-flex justify-content-center">
            <a href="#">Quên mật khẩu</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
  layout: 'none',
  middleware: "auth",
  auth: "guest",
  data() {
    return {
      form: {
        Email: null,
        Password: null,
      },
    }
  },
  methods: {
    async login() {
      const data = {
        Email: this.form.Email,
        Password: this.form.Password,
      }
      try {
        const res = await this.$axios
          .$post('/account/signin', data)
          .then(() => {
            this.$auth.loginWith('local', {
              data: {
                Email: this.form.Email,
                Password: this.form.Password,
              },
            })
          })
        console.log(res)
        this.form.Email = null
        this.form.Password = null
        // console.log('Login successfully!')
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
          title: 'Signed in successfully',

        })
        this.$router.push('/signup')
      } catch (error) {
        alert("Tài khoản hoặc mật khẩu không đúng!")
      }
    },
    // test() {
    //   const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'top-end',
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener('mouseenter', Swal.stopTimer)
    //       toast.addEventListener('mouseleave', Swal.resumeTimer)
    //     },
    //   })

    //   Toast.fire({
    //     icon: 'success',
    //     title: 'Signed in successfully',
    //   })
    // },
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