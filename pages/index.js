import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import _headerfont from '../pages/fontend/headerfont'
import _topmenufont from '../pages/fontend/inc_topmenu'
import Script from 'next/script'

export default function Home() {
  return (
    
       <div>
        <_headerfont />

          <section id="indexpage">
          <_topmenufont />
          <div className="container-fluid nopad">
            <div className="row mt-2">
                <div className="col three-elems">
                    <div className="banner-first-elem">
                        <div className="banner_top owl-carousel owl-theme">
                            <div className="item">
                                <img src="/template/images/bigbanner.png" alt="" className="img-fluid" />

                            </div>
                            <div className="item">
                                <img src="/template/images/bigbanner.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="last-elem">
                        <div className="topChild">
                            <div>
                                <a href="#"><img src="/template/images/side_banner1.png" alt="" className="img-fluid" /></a>
                            </div>
                        </div>
                        <div className="bottomChild">
                            <a href="#"><img src="/template/images/side_banner2.png" alt="" className="img-fluid" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper_pad">
                <div className="row mt-4">
                    <div className="col">
                        <div className="flashsalegroup">
                            <div className="titleBold">
                                Flash sale
                            </div>
                            <div className="countdown_topmenu">
                                <ul className="countdowninside">
                                    <li><span id="days"></span> <br />
                                    </li>
                                    <li><span id="hours"></span> <br />
                                    </li>
                                    <li><span id="minutes"></span> <br />
                                    </li>
                                    <li><span id="seconds"></span><br />
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col">
                        <div className="flashsale">
                            <div className="flashsale_slide owl-carousel owl-theme">
                              {/* 01 */}
                              <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt="" /></a>
                                            <span className="salelabel">
                                                50% <br /> Off
                                            </span>
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
                                        <div className="progress-sale progress-striped">
                                            <div className="progress-bar-sale progress-bar-danger" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                style={{width: '71%'}}> <span>240 Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 02 */}
                              <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt="" /></a>
                                            <span className="salelabel">
                                                50% <br /> Off
                                            </span>
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
                                        <div className="progress-sale progress-striped">
                                            <div className="progress-bar-sale progress-bar-danger" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                style={{width: '71%'}}> <span>240 Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 03 */}
                              <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt="" /></a>
                                            <span className="salelabel">
                                                50% <br /> Off
                                            </span>
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
                                        <div className="progress-sale progress-striped">
                                            <div className="progress-bar-sale progress-bar-danger" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                style={{width: '71%'}}> <span>240 Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 04 */}
                              <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt="" /></a>
                                            <span className="salelabel">
                                                50% <br /> Off
                                            </span>
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
                                        <div className="progress-sale progress-striped">
                                            <div className="progress-bar-sale progress-bar-danger" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                style={{width: '71%'}}> <span>240 Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 05 */}
                              <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt="" /></a>
                                            <span className="salelabel">
                                                50% <br /> Off
                                            </span>
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
                                        <div className="progress-sale progress-striped">
                                            <div className="progress-bar-sale progress-bar-danger" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                style={{width: '71%'}}> <span>240 Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 06 */}
                              <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt="" /></a>
                                            <span className="salelabel">
                                                50% <br /> Off
                                            </span>
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
                                        <div className="progress-sale progress-striped">
                                            <div className="progress-bar-sale progress-bar-danger" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                style={{width: '71%'}}> <span>240 Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 07 */}
                              <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt="" /></a>
                                            <span className="salelabel">
                                                50% <br /> Off
                                            </span>
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
                                        <div className="progress-sale progress-striped">
                                            <div className="progress-bar-sale progress-bar-danger" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                style={{width: '71%'}}> <span>240 Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 08 */}
                              <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt="" /></a>
                                            <span className="salelabel">
                                                50% <br /> Off
                                            </span>
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
                                        <div className="progress-sale progress-striped">
                                            <div className="progress-bar-sale progress-bar-danger" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                style={{width: '71%'}}> <span>240 Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 09 */}
                              <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt="" /></a>
                                            <span className="salelabel">
                                                50% <br /> Off
                                            </span>
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
                                        <div className="progress-sale progress-striped">
                                            <div className="progress-bar-sale progress-bar-danger" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                style={{width: '71%'}}> <span>240 Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 10 */}
                              <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt="" /></a>
                                            <span className="salelabel">
                                                50% <br /> Off
                                            </span>
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
                                        <div className="progress-sale progress-striped">
                                            <div className="progress-bar-sale progress-bar-danger" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                style={{width: '71%'}}> <span>240 Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 11 */}
                              <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt="" /></a>
                                            <span className="salelabel">
                                                50% <br /> Off
                                            </span>
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
                                        <div className="progress-sale progress-striped">
                                            <div className="progress-bar-sale progress-bar-danger" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                style={{width: '71%'}}> <span>240 Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 12 */}
                              <div className="item">
                                    <div className="boxofproduct hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/product_img.png" className="img-fluid" alt="" /></a>
                                            <span className="salelabel">
                                                50% <br /> Off
                                            </span>
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
                                        <div className="progress-sale progress-striped">
                                            <div className="progress-bar-sale progress-bar-danger" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                style={{width: '71%'}}> <span>240 Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categorybg">
                <div className="wrapper_pad">
                    <div className="row">
                        <div className="col">
                            <div className="titleBoldWhite">
                                Shop by category
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="category_slide owl-carousel owl-theme">
                               {/* second 01 */}
                               <div className="item">
                                    <div className="hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/cat1.png" className="img-fluid" alt="" /></a>
                                        </figure>
                                        <span>Flowers</span>
                                    </div>
                                </div>
                                {/* second 02 */}
                               <div className="item">
                                    <div className="hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/cat1.png" className="img-fluid" alt="" /></a>
                                        </figure>
                                        <span>Flowers</span>
                                    </div>
                                </div>
                                {/* second 03 */}
                               <div className="item">
                                    <div className="hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/cat1.png" className="img-fluid" alt="" /></a>
                                        </figure>
                                        <span>Flowers</span>
                                    </div>
                                </div>
                                {/* second 04 */}
                               <div className="item">
                                    <div className="hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/cat1.png" className="img-fluid" alt="" /></a>
                                        </figure>
                                        <span>Flowers</span>
                                    </div>
                                </div>
                                {/* second 05 */}
                               <div className="item">
                                    <div className="hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/cat1.png" className="img-fluid" alt="" /></a>
                                        </figure>
                                        <span>Flowers</span>
                                    </div>
                                </div>
                                {/* second 06 */}
                               <div className="item">
                                    <div className="hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/cat1.png" className="img-fluid" alt="" /></a>
                                        </figure>
                                        <span>Flowers</span>
                                    </div>
                                </div>
                                {/* second 07 */}
                               <div className="item">
                                    <div className="hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/cat1.png" className="img-fluid" alt="" /></a>
                                        </figure>
                                        <span>Flowers</span>
                                    </div>
                                </div>
                                {/* second 08 */}
                               <div className="item">
                                    <div className="hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/cat1.png" className="img-fluid" alt="" /></a>
                                        </figure>
                                        <span>Flowers</span>
                                    </div>
                                </div>
                                {/* second 09 */}
                               <div className="item">
                                    <div className="hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/cat1.png" className="img-fluid" alt="" /></a>
                                        </figure>
                                        <span>Flowers</span>
                                    </div>
                                </div>
                                {/* second 10 */}
                               <div className="item">
                                    <div className="hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/cat1.png" className="img-fluid" alt="" /></a>
                                        </figure>
                                        <span>Flowers</span>
                                    </div>
                                </div>
                                {/* second 11 */}
                               <div className="item">
                                    <div className="hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/cat1.png" className="img-fluid" alt="" /></a>
                                        </figure>
                                        <span>Flowers</span>
                                    </div>
                                </div>
                                {/* second 12 */}
                               <div className="item">
                                    <div className="hoverstyle">
                                        <figure>
                                            <a href="#"><img src="/template/images/cat1.png" className="img-fluid" alt="" /></a>
                                        </figure>
                                        <span>Flowers</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper_pad">
                <div className="row mt-5 mb-5">
                    <div className="col-md-6">
                        <div className="forspace hoverstyle">
                            <figure>
                                <a href="#"><img src="/template/images/aw1.png" alt="" /></a>
                            </figure>
                            <figcaption>
                                <div>Free Shipping <br /> all order</div>
                                <a href="#" className="btn btnshop">Shop now</a>
                            </figcaption>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="forspace hoverstyle">
                            <figure>
                                <a href="#"><img src="/template/images/aw2.png" alt="" /></a>
                            </figure>
                            <figcaption>
                                <div>Sale <br /> up to 80%</div>
                                <a href="#" className="btn btnshop">Shop now</a>
                            </figcaption>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 pe-md-0">
                        <div className="mh-100"
                            style={{width: '100%', height: '100%', backgroundImage: 'url("/template/images/brands_big.png")'}}>
                        </div>

                    </div>
                    <div className="col-md-9 ps-md-0">
                        <div className="boxwhite">
                            <div className="categoryTop owl-carousel owl-theme">
                                <div className="item">
                                    <div className="groupbrands">
                                        <img src="/template/images/product_img3.png" alt="" className="img-fluid" />
                                        <div className="logobrands">
                                            <img src="/template/images/logo_brand2.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>

                                    <div className="groupbrands">
                                        <img src="/template/images/product_img3.png" alt="" className="img-fluid" />
                                        <div className="logobrands">
                                            <img src="/template/images/logo_brand2.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="groupbrands">
                                        <img src="/template/images/product_img3.png" alt="" className="img-fluid" />
                                        <div className="logobrands">
                                            <img src="/template/images/logo_brand2.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="groupbrands">
                                        <img src="/template/images/product_img3.png" alt="" className="img-fluid" />
                                        <div className="logobrands">
                                            <img src="/template/images/logo_brand2.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="groupbrands">
                                        <img src="/template/images/product_img3.png" alt="" className="img-fluid" />
                                        <div className="logobrands">
                                            <img src="/template/images/logo_brand2.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="groupbrands">
                                        <img src="/template/images/product_img3.png" alt="" className="img-fluid" />
                                        <div className="logobrands">
                                            <img src="/template/images/logo_brand2.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="groupbrands">
                                        <img src="/template/images/product_img3.png" alt="" className="img-fluid" />
                                        <div className="logobrands">
                                            <img src="/template/images/logo_brand2.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="groupbrands">
                                        <img src="/template/images/product_img3.png" alt="" className="img-fluid" />
                                        <div className="logobrands">
                                            <img src="/template/images/logo_brand2.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="titleBold">
                            Buyers' and Sellers' Guide
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="partnerlist">
                            <center>
                                <h5>Buyer</h5>
                            </center>
                             {/* 01 */}
                             <div className="iconlist"><i className="bi bi-check-circle-fill"></i></div>
                            <div className="listpartner">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan magna lectus, sit
                                amet pharetra massa fringilla
                            </div>
                             {/* 02 */}
                             <div className="iconlist"><i className="bi bi-check-circle-fill"></i></div>
                            <div className="listpartner">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan magna lectus, sit
                                amet pharetra massa fringilla
                            </div>
                             {/* 03 */}
                             <div className="iconlist"><i className="bi bi-check-circle-fill"></i></div>
                            <div className="listpartner">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan magna lectus, sit
                                amet pharetra massa fringilla
                            </div>
                             {/* 04 */}
                             <div className="iconlist"><i className="bi bi-check-circle-fill"></i></div>
                            <div className="listpartner">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan magna lectus, sit
                                amet pharetra massa fringilla
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="partnerlist">
                            <center>
                                <h5>Seller</h5>
                            </center>
                             {/* 01 */}
                             <div className="iconlist"><i className="bi bi-check-circle-fill"></i></div>
                            <div className="listpartner">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan magna lectus, sit
                                amet pharetra massa fringilla
                            </div>
                             {/* 02 */}
                             <div className="iconlist"><i className="bi bi-check-circle-fill"></i></div>
                            <div className="listpartner">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan magna lectus, sit
                                amet pharetra massa fringilla
                            </div>
                             {/* 03 */}
                             <div className="iconlist"><i className="bi bi-check-circle-fill"></i></div>
                            <div className="listpartner">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan magna lectus, sit
                                amet pharetra massa fringilla
                            </div>
                             {/* 04 */}
                             <div className="iconlist"><i className="bi bi-check-circle-fill"></i></div>
                            <div className="listpartner">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan magna lectus, sit
                                amet pharetra massa fringilla
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col-lg-6 offset-lg-6">
                    <div className="partnerbg">
                        Become our partner
                        <h3>Here's How You Can Partner with Us! </h3>
                        <a href="#" className="btn btn-primary">Contact us</a>
                    </div>
                </div>
            </div>
        </div>
          </section>


          <Script type="text/javascript" src="/template/script_font/index_sc.js"></Script>
       </div>
   
  )
}
