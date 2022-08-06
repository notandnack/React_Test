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

export default function forgetpassword() {

  return (
    
       <div>
        <_headerfont />
        <_topmenufont />

        <section id="loginpage">
        <div className="container-fluid nopad">
            <div className="row">
                <div className="col">
                    <div className="bgheadgreen">
                        
                    </div>
                </div>
            </div>
            <div className="wrapper_pad">
                <div className="row mb-5">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="boxwhiteShadow">
                            <div className="titleBold text-center">
                                ลืมรหัสผ่าน
                            </div>
                            <div className="formGroup mt-4">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">
                                    <i className="fi fi-rr-envelope"></i>
                                    </span>
                                    <input type="text" className="form-control" placeholder="กรอกอีเมลของคุณ"
                                        aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                              
                              
                                <br />
                                <a href="#" className="btn btn-primary">รีเซ็ตรหัสผ่านใหม่</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <_footerfont />
       </div>
   
  )
}
