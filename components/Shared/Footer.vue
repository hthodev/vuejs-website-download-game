<template>
  <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <div class="col-12 col-md">
        <img
          class="mb-2"
          src="/docs/4.6/assets/brand/bootstrap-solid.svg"
          alt=""
          width="24"
          height="24"
        />
      <div class="col-6 col-md block3">
        <h5>Thành viên</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Trần Hữu Thọ</a></li>
          <li><a class="text-muted" href="#">Nguyễn Văn Đạt</a></li>
          <li><a class="text-muted" href="#">Lê Nguyễn Minh Trọng</a></li>
        </ul>
      </div>

      <div class="col-6 col-md block1">
        <h5>Liên Hệ</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Fix lỗi game</a></li>
          <li><a class="text-muted" href="#">Email</a></li>
          <li><a class="text-muted" href="#">Facebook</a></li>
        </ul>
      </div>


      <div class="col-6 col-md block2">
        <h5>Thông tin</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Trường ĐH Sư Phạm</a></li>
          <li><a class="text-muted" href="#">Team 4</a></li>
          <li><a class="text-muted" href="#">3 People</a></li>
        </ul>
      </div>
     <p>
       <small class="d-block mb-3 text-muted center" style="text-align: center;">&copy; 2021</small>
      </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {}
</script>

<style>
  .center{
    margin-left:11% ;
    
  }
  h5{
    color: white
  }
  .block1{
  display: inline-block; /* mặc định với span, a, strong, b, i... */
  width: 300px;
  height: 150px;
  padding: 5px;
  
  }

  .block2{
  display: inline-block; /* mặc định với span, a, strong, b, i... */
  width: 300px;
  height: 150px;
  padding: 5px;
  }

  .block3{
  display: inline-block; /* mặc định với span, a, strong, b, i... */
  width: 300px;
  height: 150px;
  padding: 5px;
  margin-left: 20%;
  }
</style>