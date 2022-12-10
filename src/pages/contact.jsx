import React from 'react'
import { useState } from 'react'


export default function Contact() {

  const [form, setForm] = useState({})
  const [err, setErr] = useState()

  const handleButton = (ev) => {

    let errors = {}
    if (!form.name) {
      errors.name = "Vui long nhap ho ten"
    }
    if (!form.phone) {
      errors.phone = "Vui long nhap so dien thoai"
    } else {
      if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(form.phone)){
        errors.phone = "Vui long nhap dung dinh dang so dien thoai"
      }
    }
    if (!form.email) {
      errors.email = "Vui long nhap email"
    } else {
      if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)){
        errors.email = "Vui long nhap dung dinh dang email"
      }
    }
    if (!form.title) {
      errors.title = "Vui long nhap tieu de"
    }
    if (!form.content) {
      errors.content = "Vui long nhap noi dung"
    }
    setErr(errors);
  }

  return (
    <>
      <main className="register-course" id="main">
        <section className="section-1 wrap container">
          {/* <div class="main-sub-title">liên hệ</div> */}
          <h2 className="main-title">HỢP TÁC CÙNG Spacedev</h2>
          <p className="top-des">
            Đừng ngần ngại liên hệ với <strong>Spacedev</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>
          <form className="form">
            <label className='contact__label'>
              <p>Họ và tên<span>*</span></p>
              <input value={form.name} onChange={ev => setForm({ ...form, name: ev.target.value })} type="text" placeholder="Họ và tên bạn" />
              {err?.name && <span className='span'>{err.name}</span>}
            </label>
            <label className='contact__label'>
              <p>Số điện thoại</p>
              <input value={form.phone} onChange={ev => setForm({ ...form, phone: ev.target.value })} type="text" placeholder="Số điện thoại" />
              {err?.phone && <span className='span'>{err.phone}</span>}
            </label>
            <label className='contact__label'>
              <p>Email<span>*</span></p>
              <input value={form.email} onChange={ev => setForm({ ...form, email: ev.target.value })} type="text" placeholder="Email của bạn" />
              {err?.email && <span className='span'>{err.email}</span>}
            </label>
            <label className='contact__label'>
              <p>Website</p>
              <input value={form.web} onChange={ev => setForm({ ...form, web: ev.target.value })} type="text" placeholder="Đường dẫn website http://" />
            </label>
            <label className='contact__label'>
              <p>Tiêu đề<span>*</span></p>
              <input value={form.title} onChange={ev => setForm({ ...form, title: ev.target.value })} type="text" placeholder="Tiêu đề liên hệ" />
              {err?.title && <span className='span'>{err.title}</span>}
            </label>
            <label className='contact__label'>
              <p>Nội dung<span>*</span></p>
              <textarea value={form.content} onChange={ev => setForm({ ...form, content: ev.target.value })} name id cols={30} rows={10} defaultValue={""} />
              {err?.content && <span className='span'>{err.content}</span>}
            </label>
            <button onClick={handleButton} className="btn main rect">đăng ký</button>
          </form>
        </section>
        {/* <div class="register-success">
      <div class="contain">
          <div class="main-title">đăng ký thành công</div>
          <p>
              <strong>Chào mừng Vương Đặng đã trở thành thành viên mới của Spacedev Team.</strong> <br>
              Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
              hoặc số điện thoại của bạn.
          </p>
      </div>
      <a href="/" class="btn main rect">về trang chủ</a>
  </div> */}
      </main>


    </>
  )
}
