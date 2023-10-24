export const Default = () => {
  return `<h1>Blogger</h1><button type="submit" class="btn btn-primary">Đăng nhập</button>
    <div class="block-list"></div>`;
};
export const register = () => {
  return `<div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-7">
        <form class="register">
        <div class="mb-3">
        <label for="">Tên</label>
        <input
          type="text"
          class="form-control name"
          placeholder="Name..."
        />
      </div>
        <div class="mb-3">
          <label for="">Email</label>
          <input
            type="email"
            class="form-control email"
            placeholder="Email..."
          />
        </div>
        <div class="mb-3">
          <label for="">Mật khẩu</label>
          <input
            type="password"
            class="form-control password"
            placeholder="Mật khẩu..."
          />
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-primary">Đăng kí</button>
        </div>
        </form>
        <div class ="msg text-danger"></div>
        <div>
        <span>Bạn đã có tài khoản?</span> <a class="login-button" href="#!">Đăng nhập</a>
        </div>
        <a class="default" href="#!">Quay lại trang chủ</a>
      </div>
    </div>
  </div>`;
};

export const login = () => {
  return `<div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-7">
        <form class="login">
        <div class="mb-3">
          <label for="">Email</label>
          <input
            type="email"
            class="form-control email"
            placeholder="Email..."
            value="vuongtridong1995@yahoo.com"
          />
        </div>
        <div class="mb-3">
          <label for="">Mật khẩu</label>
          <input
            type="password"
            class="form-control password"
            placeholder="Mật khẩu..."
            value="dong6395"
          />
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </div>
        </form>
        <div class ="msg text-danger"></div>
        <div>
        <span>Tạo tài khoản?</span> <a class="register-button" href="#!">Đăng Ký</a>
        </div>
        <a class="default" href="#!">Quay lại trang chủ</a>
      </div>
    </div>
  </div>`;
};
export const renderLoginContent = () => {
  return `<div class="container py-3">
    <h2 class="text-center">Chào mừng bạn đã quay trở lại</h2>
    <hr/>
    <ul class="list-unstyled d-flex gap-3 profile">
      <li>Chào bạn: <b class="name">Loading...</b></li>
      <li><a href="#"class="logout">Đăng xuất</a></li>
    </ul>
    <form class=" post container w-90">
  <div class="form-group text-left">
      <label class="w-100" for="title" class="label-form">Tiêu đề bài viết</label>
      <input class="w-100" id="title" placeholder="Nhập tiêu đề bài viết"/>
  </div>
  <div class="form-group text-left">
      <label class="w-100" for="content" class="label-form">Nhập nội dung bài viết</label>
      <textarea class="w-100" name="" id="content" cols="30" rows="10"></textarea>
  </div>
  <div class="form-group text-left">
      <label class="w-100" for="content" class="label-form">Chọn thời gian đăng bài</label>
      <input class="w-100" id="date" type="datetime-local">
  </div>
  <button id="post-option"class="btn btn-warning text-left w-100 my-3">Đăng bài</button>
</form>
<div class ="msgTwo text-danger"></div>
  </div>
  <div class="block-list"></div>`;
};
