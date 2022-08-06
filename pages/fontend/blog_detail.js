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

export default function blog_detail() {

    let loop01 = [];
    for (let i = 1; i <= 12; i++) {
        loop01.push(
            <div className="groupreview mt-4 gallery" key={i}> 
                                <div className="leftcontenReview">
                                    <div className="picprofile">
                                    </div>
                                </div>
                                <div className="rightnametxt">
                                    <b>ลลิษา มโนบาล</b> <br />
                                    <span className="smtxt1">เมื่อ 2 อาทิตย์ที่แล้ว</span>

                                </div>
                                <div className="contentText mt-2 pl-3">
                                    รีวิวดีมากเลยค่ะ
                                </div>
                                <div className="listcount">
                                    <div className="row">
                                        <div className="col">
                                            <li><i className="bi bi-heart-fill"></i> 1 Like </li>
                                            <li><i className="fi fi-rr-comment-alt-middle"></i> 0 Comment</li>
                                        </div>

                                    </div>
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
                <div className="row mt-4">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="blogdetailIS">
                            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1>
                            <div className="listcount">
                                <div className="row">
                                    <div className="col-6 col-lg-8">
                                        <li><i className="bi bi-heart-fill"></i> 43 </li>
                                        <li><i className="fi fi-rr-comment-alt-middle"></i> 4</li>
                                    </div>
                                    <div className="col-6 col-lg-4 text-end">
                                        <li><i className="fi fi-rr-clock-five"></i> 52 นาทีที่แล้ว</li>
                                    </div>
                                </div>
                            </div>
                            <div className="mainpic mt-3">
                                <img src="/template/images/side_banner2.png" className="img-fluid" alt="" />
                            </div>
                            <div className="contentText mt-3">

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis doloribus illum
                                iste, accusantium temporibus eveniet cumque vero beatae minima quidem ad, ipsum quis
                                distinctio minus error, ea itaque corporis?
                                <br /><br />

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis doloribus illum
                                iste, accusantium temporibus eveniet cumque vero beatae minima quidem ad, ipsum quis
                                distinctio minus error, ea itaque corporis?
                                <br />

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis doloribus illum
                                iste, accusantium temporibus eveniet cumque vero beatae minima quidem ad, ipsum quis
                                distinctio minus error, ea itaque corporis?
                                <br />
                                <br />

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis doloribus illum
                                iste, accusantium temporibus eveniet cumque vero beatae minima quidem ad, ipsum quis
                                distinctio minus error, ea itaque corporis?
                                <br /><br />

                                <img src="/template/images/side_banner1.png" className="img-fluid" alt="" />

                                <br /><br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis doloribus illum
                                iste, accusantium temporibus eveniet cumque vero beatae minima quidem ad, ipsum quis
                                distinctio minus error, ea itaque corporis?
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis doloribus illum
                                iste, accusantium temporibus eveniet cumque vero beatae minima quidem ad, ipsum quis
                                distinctio minus error, ea itaque corporis?
                            </div>
                            <div className="trending_hashtag mt-4 mb-3">
                                <li><a href="#">ช่วยให้ผ่อนคลาย</a></li>
                                <li><a href="#">ต้านอาการซึมเศร้า</a></li>
                                <li><a href="#">ช่วยคลายกล้ามเนื้อ</a></li>
                                <li><a href="#">ยับยั้งเซลล์มะเร็ง</a></li>
                            </div>
                            <div className="blog_share mt-4 mb-3">
                                <h6 className="mb-3">แชร์บทความนี้</h6>
                                <ul>
                                    <li><a href="#"><i className="fi fi-brands-facebook" style={{color:'#3b5998'}}></i> </a>
                                    </li>
                                    <li><a href="#"><i className="fi fi-brands-twitter" style={{color:'#55acee'}}></i> </a>
                                    </li>
                                    <li><a href="#"><i className="fi fi-rr-envelope" style={{color:'#bebebe'}}></i></a></li>
                                </ul>
                            </div>
                            <center>
                                <h5 className="mt-5 mb-3">มีรีวิวอะไรเอามาแชร์กัน ร่วมเป็นส่วนหนึ่งของ
                                    <span className="greenov"> World why weed </span>
                                    ได้ง่ายนิดเดียว</h5>
                                    <Link href="/fontend/create_blog">
                                    <a  className="btn btn-primary"><i className="fi fi-rr-comment-pen"></i>
                                    เริ่มเขียนบทความของคุณได้เลย!</a>
                                    </Link>
                              
                            </center>
                            <div className="row mt-4">
                                <div className="col">
                                    <div className="writecommentBox">
                                        <h6>COMMENT : ความคิดเห็น</h6>
                                        <textarea name="" id="" cols="30" rows="3" className="form-control"
                                            placeholder="เขียนความเห็นของคุณได้เลยค่ะ"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col">
                                    <h6><i className="fi fi-rr-comment-alt"></i> Recent comments ความคิดเห็นล่าสุด</h6>
                                </div>
                            </div>
                           {loop01}
                            <br />
                            <center><a className="loadMore btn btn-primary" href="#">ดูเพิ่มเติม</a></center>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <_footerfont />
        <Script type="text/javascript" src="/template/script_font/blog_detail_sc.js"></Script>
       </div>
   
  )
}
