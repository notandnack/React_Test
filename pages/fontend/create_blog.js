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

export default function create_blog() {

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
                            <h1>Create Topic</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper_pad">
                <div className="row mb-5">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="boxwhiteShadow">
                            <div className="titleBold text-center">
                                หัวข้อบทความ
                            </div>

                            <div className="formGroupall  mt-2">
                                <label>ชื่อ</label>
                                <input type="text" className="form-control" placeholder="ใส่ชื่อหัวข้อ" />

                                <label>เลือกประเภทบทความ</label>
                                <div className="selectBox">
                                    <select className="form-select" aria-label="Default select example">
                                        <option defaultValue>กรุณาเลือกประเภท</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                    </select>
                                </div>
                                <label>เริ่มเขียนบทความ</label>

                                <textarea name="" id="" cols="30" rows="5" className="form-control" p></textarea>


                            </div>
                         
                            <div className="hashtagselect mt-3 mb-3">
                                <h6>เลือก Keyword อย่างน้อย 1 คำ ที่เกี่ยวข้องกับกระทู้ของคุณ</h6>
                                <label className="check-container"> ทางการแพทย์
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                               <label className="check-container"> ช่วยผ่อนคลาย
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                            </div>

                         <center><button className="btn btn-primary">ส่งข้อความ</button></center>   

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
