import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import _headerfont from './layout_font/headerfont'
import _topmenufont from './layout_font/inc_topmenu'
import _footerfont from './layout_font/footerfont'
import _incsideproduct from './inc_sideproduct'
import Script from 'next/script'
import Link from 'next/link'
import _sidememberseller from './layout_font/inc_sidememberseller'

export default function shop() {

  return (
    
       <div>
        <_headerfont />
        <_topmenufont />

        <section id="productpage">
        <div className="container-fluid nopad">
            <div className="shopprofilebox">
                <div className="wrapper_pad">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="logoshop">
                                <img src="/template/images/logo_brand2.png"
                                            className="img-fluid" alt="" />
                            </div>
                            <div className="shopnametitle">
                                <h1>Papa Barkley</h1>
                                <span>รายการสินค้า 50 ชิ้น</span>
                                <span>คะแนน 4.5/5</span>
                                <span>เข้าร่วมเมื่อ 1 ปีที่แล้ว</span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="shopdetail">
                               <h2>รายละเอียดร้านค้า</h2>
                               <p className="contentText">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusamus
                                distinctio saepe quidem voluptatibus expedita tenetur perspiciatis deleniti, cupiditate
                                illo quia tempora quod, ipsum harum nulla dolor culpa! Aliquid, molestiae!
                               </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper_pad">

                <div className="row mt-4">
                    <div className="col">
                        <div className="titleBold">
                            Best Seller
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="flashsale">
                            <div className="flashsale_slide owl-carousel owl-theme">
                                {/* <?php for ($i = 1; $i <= 12; $i++) { ?> */}
                                <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt=""/></a>

                                        </figure>
                                        <div className="contentprd">
                                            <div className="title">Something Blue</div>
                                            <div className="rating">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill sp"></i>
                                                <a href="#">32 Reviews</a>
                                            </div>
                                            <div className="price">
                                                <div className="saleprice">
                                                    ฿500.00
                                                </div>
                                                <div className="ogprice">฿1000.00 </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                {/* <?php } ?> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                    <_incsideproduct />
                    </div>
                    <div className="col-lg-9">
                        <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" className="btn btn-default" data-bs-toggle="modal"
                                        data-bs-target="#sortmodal">
                                        <i className="bi bi-sort-down"></i> Sort By
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button type="button" className="btn btn-default" data-bs-toggle="modal"
                                        data-bs-target="#filtermodal">
                                        <i className="bi bi-sliders"></i> Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="sorting_filter mt-3 mt-lg-5 mb-3">
                            <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">

                                Sort by
                                <li>
                                    <input type="checkbox" className="btn-check" id="btn-check" defaultChecked autoComplete="off" />
                                    <label className="btn btn-primary" htmlFor="btn-check">Popular</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="btn-check" id="btn-check-2" autoComplete="off" />
                                    <label className="btn btn-primary" htmlFor="btn-check-2">Latest</label>
                                </li>
                                <li>
                                    <div className="selectBox">
                                        <select className="htmlForm-select" aria-label="Default select example">
                                            <option defaultValue disabled>Price</option>
                                            <option value="1">ราคาสูงไปต่ำ</option>
                                            <option value="2">ราคาต่ำไปสูง</option>
                                        </select>
                                    </div>
                                </li>
                            </div>
                            <div className="pagenumber text-end text-lg-center">
                                1/50
                                <li className="prev"><a href="#"><i className="fi fi-rr-angle-left"></i></a></li>
                                <li className="next"><a href="#"><i className="fi fi-rr-angle-right"></i></a></li>
                            </div>

                        </div>
                        <div className="titlecat">
                            <h1>Indica</h1>
                        </div>
                        <div className="row mt-4 mb-5">

                            {/* <?php for ($i = 1; $i <= 23; $i++) { ?> */}
                            <div className="col-6 col-md-3">
                                <div className="boxofproduct hoverstyle">
                                    <figure>
                                        <a href="#"><img src="/template/images/product_img2.png" className="img-fluid" alt=""/></a>

                                    </figure>
                                    <div className="contentprd">
                                        <div className="title">Something Blue</div>
                                        <div className="rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill sp"></i>
                                            <a href="#">32 Reviews</a>
                                        </div>
                                        <div className="price">
                                            <div className="saleprice">
                                                ฿500.00
                                            </div>
                                            <div className="ogprice">฿1000.00 </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/* <?php } ?> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <_footerfont />
        <Script type="text/javascript" src="/template/script_font/shop_sc.js"></Script>
       </div>
  )
}
