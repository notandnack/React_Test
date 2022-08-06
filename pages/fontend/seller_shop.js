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
import _sidememberseller from '../fontend/layout_font/inc_sidememberseller'

export default function seller_shop() {

  return (
    
       <div>
        <_headerfont />
        <_topmenufont />

        <section id="memberpage">
        <div className="container-fluid nopad">
            <div className="wrapper_pad">
                <div className="row">
                    <div className="col-lg-3 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                        <div className="boxwhiteShadow">
                            <_sidememberseller />
                        </div>
                    </div>
                    <div className="col-lg-9">
                    <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
                            <a href="member_m_seller.php" className="whitelink">
                                <span><i className="fi fi-rr-angle-left"></i></span>
                                กลับ</a>
                        </div>
                        <div className="boxwhiteShadow">
                            <div className="titlemember">
                                <h1>รายละเอียดร้านค้า</h1>
                                <h2>จัดการข้อมูลร้านค้าของคุณ</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 swap_product2">
                                    <div className="formprofile mt-3 mt-lg-5 mb-5">
                                        <label for="name">ชื่อร้าน</label>
                                        <input type="type" className="form-control" />
                                        <label for="name">รายละเอียดร้านค้า</label>
                                        <input type="type" className="form-control" />
                                     
                                        

                                    </div>
                                    <a href="#" className="btn btn-primary">บันทึกข้อมูล</a>
                                </div>
                                <div className="col-lg-5 swap_product mt-3 mt-lg-0">
                                    <div className="profileupload">
                                    <div className="img_member">
                                            <div className="preview_seller img-wrapper"></div>
                                            <div className="file-upload-wrapper mt-5">
                                                <input type="file" name="file" className="file-upload-native" accept="image/*" />
                                                <input type="text" disabled className="file-upload-text" /> อัพโหลดรูปภาพร้านค้า
                                            </div>
                                        </div>
                                        <br />
                                        <center className="smtxt2">
                                            ขนาดไฟล์: สูงสุด 1 MB <br />
                                            ไฟล์ที่รองรับ: .JPEG, .PNG
                                        </center>
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
        <Script type="text/javascript" src="/template/script_font/seller_shop_sc.js"></Script>
       </div>
   
  )
}
