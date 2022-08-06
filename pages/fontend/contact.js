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

export default function contact() {

  return (
    
       <div>
        <_headerfont />
        <_topmenufont />

        <section id="contactpage">
        <div className="container-fluid nopad">
            <div className="row">
                <div className="col">
                    <div className="bgheadgreen">
                        <div className="bigtitletext text-center">
                            <h1>CONTACT US</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper_pad">
                <div className="row mb-5">
                    <div className="col-lg-6">
                        <div className="titleBold mt-3">
                            World Why Weed
                        </div>
                        
                        <div className="contactinfo mt-4 mt-md-0">
                            <p className="contentText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate ducimus quam modi laborum accusantium distinctio blanditiis deleniti quaerat a architecto corrupti aliquam totam exercitationem consequatur, vero, sapiente, adipisci voluptatibus.</p>
                        <ul>
                            <li><a href="#"><i className="fi fi-brands-facebook"></i></a></li>
                            <li><a href="#"><i className="fi fi-brands-instagram"></i></a></li>
                            <li><a href="#"><i className="fi fi-brands-twitter"></i></a></li>
                            <li><a href="#"><i className="fi fi-brands-youtube"></i></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="boxwhiteShadow">
                            <div className="titleBold">
                                แบบฟอร์มติดต่อเรา
                            </div>
                            <p className="contentText">Please fill in the form below and our customer service team will get
                                back to you as soon
                                as possible, or view our direct contact details below.

                            </p>
                            <div className="formGroupall  mt-2">
                                <label>ชื่อ</label>
                                <input type="text" className="form-control" placeholder="กรุณาระบุชื่อของคุณ" />

                                <label>นามสกุล</label>
                                <input type="text" className="form-control" placeholder="กรุณาระบุนามสกุลของคุณ" />

                                <label>เบอร์ติดต่อ</label>
                                <input type="text" className="form-control" placeholder="กรุณาระบุเบอร์โทรศัพท์" />

                                <label>อีเมล</label>
                                <input type="text" className="form-control" placeholder="กรุณาระบุอีเมลของคุณ" />
                                <label>ข้อความ</label>
                                <textarea name="" id="" cols="30" rows="5" className="form-control" p></textarea>

                                <br />
                                <button className="btn btn-primary">ส่งข้อความ</button>

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
