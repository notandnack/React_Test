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
        <div class="container-fluid nopad">
            <div class="wrapper_pad">
                <div class="row">
                    <div class="col-lg-3 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                        <div class="boxwhiteShadow">
                            <_sidememberseller />
                        </div>
                    </div>
                    <div class="col-lg-9">
                    <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none">
                            <a href="member_m_seller.php" class="whitelink">
                                <span><i class="fi fi-rr-angle-left"></i></span>
                                กลับ</a>
                        </div>
                        <div class="boxwhiteShadow">
                            <div class="titlemember">
                                <h1>รายละเอียดร้านค้า</h1>
                                <h2>จัดการข้อมูลร้านค้าของคุณ</h2>
                            </div>
                            <div class="row">
                                <div class="col-lg-7 swap_product2">
                                    <div class="formprofile mt-3 mt-lg-5 mb-5">
                                        <label for="name">ชื่อร้าน</label>
                                        <input type="type" class="form-control" />
                                        <label for="name">รายละเอียดร้านค้า</label>
                                        <input type="type" class="form-control" />
                                     
                                        

                                    </div>
                                    <a href="#" class="btn btn-primary">บันทึกข้อมูล</a>
                                </div>
                                <div class="col-lg-5 swap_product mt-3 mt-lg-0">
                                    <div class="profileupload">
                                    <div class="img_member">
                                            <div class="preview_seller img-wrapper"></div>
                                            <div class="file-upload-wrapper mt-5">
                                                <input type="file" name="file" class="file-upload-native" accept="image/*" />
                                                <input type="text" disabled class="file-upload-text" /> อัพโหลดรูปภาพร้านค้า
                                            </div>
                                        </div>
                                        <br />
                                        <center class="smtxt2">
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
