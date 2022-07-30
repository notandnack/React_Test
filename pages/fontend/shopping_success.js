import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import _headerfont from '../fontend/layout_font/headerfont'
import _topmenufont from '../fontend/layout_font/inc_topmenu'
import _footerfont from '../fontend/layout_font/footerfont'
import Script from 'next/script'

    

export default function shopping_success() {
    

  return (
    
       <div>
        <_headerfont />
        <_topmenufont />

        <section id="cartpage">
        <div className="container-fluid nopad">
            <div className="row">
                <div className="col">
                    <div className="bgheadgreen">
                        <div className="wrapper_pad">
                            <div className="bigtitletext">
                                <h1>Order Success</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper_pad">
                <div className="row mb-5">
                    <div className="col">
                        <div className="groupcartfirst  text-center">
                            <div className="titleBold">
                            <i className="fi fi-rr-checkbox"></i>
                                <h2>ขอขอบคุณ ที่ช็อปสินค้ากับ  <br /> World Why Weed</h2>
                            </div>
                            <br />
                            <h4>รหัสสั่งซื้อเลขที่ : 8323454</h4>
                            <br />
                            Please make your payment within 24 hours. Once you have made the payment or after you have   <br />
                            sent us the bank transfer receipt, you should receive the tracking number from us once the
                            package is shipped. Thank you.

                            <div className="row mt-4 mb-4">
                    <div className="col">
                        <a href="#" className="btn btn-primary">ดูรายการออเดอร์ </a>
                    </div>
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
