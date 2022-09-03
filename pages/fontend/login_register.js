import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import _headerfont from '../fontend/layout_font/headerfont'
import _topmenufont from '../fontend/layout_font/inc_topmenu'
import _footerfont from '../fontend/layout_font/footerfont'
import _incsideproduct from '../fontend/inc_sideproduct'
import Script from 'next/script'
import Link from 'next/link'
// import axios from '../../public/template/script_font/axios.config';

export default function login_register() {

    function send_regis(){
        var error_id=0;
        if($("#email_regis").val() == null || $("#email_regis").val() == ""){
            error_id = 1;
            Swal.fire({
                icon: 'error',
                text: 'กรุณาระบุ Email หรือเบอร์โทรศัพท์',
            });
        }

        if($("#pass_regis").val() == null || $("#pass_regis").val() == ""){
            error_id = 1;
            Swal.fire({
                icon: 'error',
                text: 'กรุณาระบุ Password หรือเบอร์โทรศัพท์',
            });
        }

        if(error_id == 0){
            const data2 = JSON.stringify({
                email: $("#email_regis").val(),
                password: $("#pass_regis").val(),
                role:$("#role").val(),
              });
    
            const res = axios.post('accounts/register', data2).then(function (response) {
                if(response.data.status == "success"){
                    Swal.fire({
                        icon: 'success',
                        text: "ลงทะเบียนเรียบร้อย",
                        timer: 2300,
                        showConfirmButton: false,
                    }).then(() => {
                        window.location.reload();
                    });
                }else{
                    Swal.fire({
                        icon: 'error',
                        text: response.data.message,
                    });
                }
              }).catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    text: error,
                });
              });
        }
        
    }
  return (
    
       <div>
        <_headerfont />
        <_topmenufont />

        <section id="loginpage">
        <div className="container-fluid nopad">
            <div className="row">
                <div className="col">
                    <div className="bgheadgreen">
                        <div className="bigtitletext text-center">
                            <h1> Login or Register</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper_pad">
                <div className="row mb-5">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="boxwhiteShadow">
                            <div className="login">
                                <div className="row">
                                    <div className="col-md-6 border-end gx-5">
                                        <div className="titleBold text-center">
                                            ลูกค้าที่กลับมา
                                        </div>

                                        <div className="formGroup mt-4">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">
                                                <i className="fi fi-rr-user"></i>
                                                </span>
                                                <input type="text" id="email_login" className="form-control"
                                                    placeholder="หมายเลขโทรศัพท์หรืออีเมลของคุณ" aria-label="Username"
                                                    aria-describedby="basic-addon1" />
                                            </div>
                                            <div className="input-group mb-3" id="show_hide_password">
                                                <span className="input-group-text"><i className="fi fi-rr-lock"></i>
                                                </span>
                                                <input type="password" id="password_login" className="form-control showPassStyForm"
                                                    placeholder="รหัสผ่าน" autoComplete="off" defaultValue="" />
                                                <span className="input-group-text showPassSty"> <a href=""><i className="fi fi-rr-eye"></i></a></span>
                                            </div>
                                           

                                            <div className="row">
                                                <div className="col-7 col-md-6 ">


                                                    <label className="check-container"> ให้ฉันอยู่ในระบบต่อไป
                                                        <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="col-5 col-md-6 text-end">
                                                    <Link href="/fontend/forgetpassword">
                                                    <a className="linkud">ลืมรหัสผ่าน?</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <br />
                                            <Link href="/fontend/member_profile"><a className="btn btn-primary">ลงชื่อเข้าใช้</a></Link>
                                            
                                            <br /><br />
                                            <a className="btn btn-signup btn_join_us">สร้างบัญชี</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0 gx-5">

                                        <div className="titleBold text-center mb-3">
                                            ลงชื่อเข้าใช้ด้วยโซเชียลมีเดีย
                                        </div>
                                        <p className="smtxt2">ยอมรับ
                                            <a href="#" className="linkud">เงื่อนไขการใช้งาน</a> 
                                            และรับทราบว่าฉันได้อ่าน  <a href="#"
                                                className="linkud">นโยบายความเป็นส่วนตัวแล้ว</a>
                                        </p>
                                        <div className="socialLogin mt-3">
                                            <a href="#" className="btn GgBtn">
                                                <img src="/template/images/google-plus.png" className="img-fluid" alt="" />
                                                เข้าสู่ระบบด้วย Google</a> 
                                            <a href="#" className="btn FbBtn mt-3"><i className="fi fi-brands-facebook"></i>
                                                เข้าสู่ระบบด้วย Facebook</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="join_us">
                                <div className="row">
                                    <div className="col-md-6 border-end gx-5">
                                        <div className="titleBold text-center">
                                            สร้างบัญชี
                                        </div>

                                        <div className="formGroup mt-2">
                                        <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">
                                                <i className="fi fi-rr-user"></i>
                                                </span>
                                                <input type="text" className="form-control" id="email_regis"
                                                    placeholder="หมายเลขโทรศัพท์หรืออีเมลของคุณ" aria-label="Username"
                                                    aria-describedby="basic-addon1" />
                                            </div>
                                            <div className="input-group mb-3" id="show_hide_password">
                                                <span className="input-group-text"><i className="fi fi-rr-lock"></i>
                                                </span>
                                                <input type="password" className="form-control showPassStyForm" id="pass_regis"
                                                    placeholder="รหัสผ่าน" autoComplete="off" defaultValue="" />
                                                <span className="input-group-text showPassSty"> <a href=""><i className="fi fi-rr-eye"></i></a></span>
                                            </div>
                                            <input name="role" id="role" defaultValue="User" hidden />
                                            <button onClick={send_regis} className="btn btn-primary">สร้างบัญชี</button>
                                            <div className="alreadyACC text-center mt-4 mb-4">
                                                มีบัญชีอยู่แล้วใช่ไหม <a href="#" className="morecode btn_login">ลงชื่อเข้าใช้
                                                </a>
                                            </div>

                                            <div className="socialLogin mt-3">
                                                <a href="member_account.php" className="btn GgBtn">
                                                    <img src="/template/images/google-plus.png" className="img-fluid" alt="" />
                                                    เข้าสู่ระบบด้วย Google</a>
                                                <a href="member_account.php" className="btn FbBtn mt-3"><i
                                                        className="fab fa-facebook-f"></i>
                                                    เข้าสู่ระบบด้วย Facebook</a>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0 gx-5">
                                        <div className="titleBold">
                                            สิทธิพิเศษสำหรับสมาชิก
                                        </div>
                                        <div className="benefits mt-3">
                                            <li>ติดตามและจัดการคำสั่งซื้อของคุณ </li>
                                            <li>สร้างรายการสิ่งที่อยากได้หลายรายการ
                                            </li>
                                            <li>สามารถบันทึกที่อยู่จัดส่งสินค้าเพื่อการสั่งซื้อที่รวดเร็ว
                                            </li>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <_footerfont />
        <Script type="text/javascript" src="/template/script_font/login_register_sc.js"></Script>
       </div>
   
  )
}
