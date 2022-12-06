import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const toggelMenu = () => { 
        document.body.classList.toggle('menu-is-show')
     }
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={toggelMenu}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <a href="./" className="logo">
                        <img src="img/logo.svg" alt="" />
                        <h1>Spacedev</h1>
                    </a>
                    <div className="right">
                        <div className="have-login">
                            <div className="account">
                                <Link to="/profile" className="info">
                                    <div className="name">Đặng Thuyền Vương</div>
                                    <div className="avatar">
                                        <img src="img/avt.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <a href="#">Khóa học của tôi</a>
                                <a href="#">Thông tin tài khoản</a>
                                <a href="#">Đăng xuất</a>
                            </div>
                        </div>
                        {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
                    </div>
                </div>
            </header>
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="#">Đăng nhập</a>
                            <a href="#">Đăng ký</a>
                        </li>
                        <li>
                            <a className="active" href="./">Trang chủ</a>
                        </li>
                        <li>
                            <a href="./team.html">Spacedev Team</a>
                        </li>
                        <li>
                            <Link to="/course" onClick={toggelMenu} >Khóa Học</Link>
                        </li>
                        <li>
                            <a href="./project.html">Dự Án</a>
                        </li>
                        <li>
                            <Link  to="/contact" onClick={toggelMenu}  >Liên hệ</Link>
                        </li>
                    </ul>
                </nav>
                <div className="overlay_nav" onClick={toggelMenu} />
            </div>

        </>
    )
}
