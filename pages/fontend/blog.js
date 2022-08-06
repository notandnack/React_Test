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

export default function blog() {

    let loop01 = [];
    for (let i = 1; i <= 12; i++) {
        loop01.push(
            <div className="item" key={i}>
            <div className="bloggroup hoverstyle">
                <figure>
                    <Link href="#">
                        <a>
                        <img src="/template/images/aw1.png" className="img-fluid" alt="" />
                        <div className="blogcontent">
                            <span>Review</span>
                            <div className="content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                                reiciendis
                                dolorem quos, molestias ab labore pariatur cum numquam repellat ex
                                distinctio, veritatis esse iste perferendis tempora animi tenetur
                                officiis
                                ipsum?
                            </div>
                        </div>
                        </a>

                    </Link>
                </figure>
            </div>
        </div>
       );
    }
        
    let loop02 = [];
    for (let i = 1; i <= 12; i++) {
        loop02.push(
            <div className="col-md-3" key={i}>
            <div className="bloggroup hoverstyle">
                <figure>
                    <Link href="/fontend/blog_detail">
                        <a>
                        <img src="/template/images/aw1.png" style={{cursor:'pointer'}} className="img-fluid" alt="" />
                        </a>
                    </Link>
                    <div className="blogcontent">
                            <span>Review</span>
                            <div className="content">
                                
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                                reiciendis
                                dolorem quos, molestias ab labore pariatur cum numquam repellat ex
                                distinctio, veritatis esse iste perferendis tempora animi tenetur
                                officiis
                                ipsum?
                            </div>
                            <div className="trending_hashtag mt-3">
                                <li><a href="#">ช่วยให้ผ่อนคลาย</a></li>
                                <li><a href="#">ต้านอาการซึมเศร้า</a></li>
                            </div>
                            <div className="row mt-2">
                                <div className="col-9 col-md-9">
                                    <div className="timement pt-2">
                                        <li><i className="fi fi-rr-clock-five"></i> 52 นาทีที่แล้ว</li>
                                        <li><i className="fi fi-rr-comment-alt-middle"></i> 2</li>
                                        
                                        
                                    </div>
                                </div>
                                <div className="col-3 col-md-3 likebtn text-end">
                                    <div className="wrapper">
                                        <a href="#" className="like-button">
                                        <i className="bi bi-heart not-liked"></i>
                                        <i className="bi bi-heart-fill is-liked"></i>
                                            <span className="like-overlay"></span>
                                        </a>

                                     
                                    </div>
                                </div>
                            </div>

                        </div>
                </figure>
            </div>
        </div>
       );
    }

  return (
    
       <div>
        <_headerfont />
        <_topmenufont />

        <section id="blogpage">
        <div className="container-fluid nopad">
            <div className="wrapper_pad">
                <div className="row mt-3">
                    <div className="col">
                        <div className="blogslide owl-carousel owl-theme">
                            {loop01}
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-md-9">
                        <div className="trending_hashtag">
                            <h3 className="pb-2">บทความยอดฮิต</h3>
                            <li><a href="#">ช่วยให้ผ่อนคลาย</a></li>
                            <li><a href="#">ต้านอาการซึมเศร้า</a></li>
                            <li><a href="#">ช่วยคลายกล้ามเนื้อ</a></li>
                            <li><a href="#">ยับยั้งเซลล์มะเร็ง</a></li>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="selectBox">
                            <select className="form-select" aria-label="Default select example">
                                <option defaultValue disabled>Sort by</option>
                                <option value="1">Recent</option>
                                <option value="2">Popular</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-center">
                        <div className="trending_hashtag">
                            <h3 className="pb-2">เลือกดูประเภทบทความ</h3>
                        </div>
                        <div className="Cropscroll">
                        <div className="blogcat">
                            <li><a href="#"><span><i className="fi fi-rr-doctor"></i> </span> <br /> ทางการแพทย์</a>
                            </li>
                            <li><a href="#"><span><i className="fi fi-rr-comment-alt"></i> </span> <br /> ประโยชน์
                                    ของกัญชา</a>
                            </li>
                            <li><a href="#"><span><i className="fi fi-rr-diploma"></i> </span> <br /> รางวัล</a>
                            </li>
                            <li><a href="#"><span><i className="fi fi-rr-leaf"></i></span> <br /> ปลูกกัญชา</a>
                            </li>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                       {loop02}
                    </div>
                </div>
            </div>
        </div>
    </section>
        <_footerfont />
        <Script type="text/javascript" src="/template/script_font/blog_sc.js"></Script>
       </div>
   
  )
}
