import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import _headerfont from '../fontend/layout_font/headerfont'
import _topmenufont from '../fontend/layout_font/inc_topmenu'
import _footerfont from '../fontend/layout_font/footerfont'
import Script from 'next/script'

    

export default function shopping_checkout() {
    

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
                                    <h1>Checkout</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper_pad">
                    <div className="row">
                        <div className="col">
                            <div className="groupcartfirst">
                                <div className="titleBold">
                                    ที่อยู่ในการจัดส่ง
                                </div>
                                <div className="row">
                                    <div className="col-lg-9">
                                        เลือกที่อยู่จัดส่ง
                                    </div>
                                    <div className="col-lg-3 mt-3 mt-md-0">
                                        <label className="check-container"> <b>ใช้ที่อยู่ตามที่เลือกเพื่อออกใบกำกับภาษี</b>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none mt-3">
                                    <div className="borderbox">
                                        <div className="tagadderss">ที่ทำงาน</div> <br />
                                        <b>เนตรทกาญ อ่อนน้อม</b> <br />
                                        146/82-83 ซอย ลาดพร้าว 122 ลาดพร้าว <br />
                                        แขวง พลับพลา เขต วังทองหลาง <br />
                                        กรุงเทพมหานคร 10310 <br />
                                        Tel : 0814499488 <br /><br />
                                        <a href="#" className="linkud">แก้ไข</a>
                                        <br /><br />
                                    </div>
                                </div>
                                <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                                    <table className="table addresstable mt-3">
                                        <thead>
                                            <tr>
                                                <th>ชื่อ-นามสกุล</th>
                                                <th>ที่อยู่</th>
                                                <th>เบอร์โทร</th>
                                                <th> <a href="#" className="linkud">แก้ไข</a></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <label className="check-container"> เนตรทกาญ อ่อนน้อม
                                                        <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <div className="tagadderss">ที่ทำงาน</div> <br />

                                                    146/82-83 ซอย ลาดพร้าว 122 ลาดพร้าว <br />
                                                    แขวง พลับพลา เขต วังทองหลาง <br />
                                                    กรุงเทพมหานคร 10310

                                                </td>
                                                <td>0814499488</td>
                                                <td></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <a href="#" className="btn btn-primary" data-width="648" data-height="650" data-fancybox
                                    data-src="#address">+ เพิ่มที่อยู่ใหม่</a>
                                <div style={{display: 'none'}} id="address">
                                    <div className="titlepopup">
                                        <h3>เพิ่มที่อยู่การจัดส่ง</h3>
                                        <h4>จัดการข้อมูลที่อยู่เพื่อการจัดส่ง</h4>
                                    </div>
                                    <div className="formGroupall">


                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <label htmlFor="name">ชื่อ-นามสกุล</label>
                                                <input type="text" className="form-control" placeholder="กรุณาระบุชื่อของคุณ" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="name">เบอร์โทรศัพท์</label>
                                                <input type="text" className="form-control"
                                                    placeholder="กรุณาระบุเบอร์โทรศัพท์ของคุณ" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="name">ที่อยู่การจัดส่ง</label>
                                                <input type="text" className="form-control"
                                                    placeholder="กรุณาระบุบ้านเลขที่ ถนน/ซอย/ชื่ออาคาร" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="name">จังหวัด</label>
                                                <div className="selectBox">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option defaultValue>กรุณาเลือกจังหวัด</option>
                                                        <option value="1">2</option>
                                                        <option value="2">3</option>
                                                        <option value="3">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="name">ตำบล/แขวง</label>
                                                <div className="selectBox">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option defaultValue>กรุณาเลือกตำบล/แขวง</option>
                                                        <option value="1">2</option>
                                                        <option value="2">3</option>
                                                        <option value="3">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="name">อำเภอ/เขต</label>
                                                <div className="selectBox">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option defaultValue>กรุณาเลือกอำเภอ/เขต</option>
                                                        <option value="1">2</option>
                                                        <option value="2">3</option>
                                                        <option value="3">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="name">รหัสไปรษณีย์</label>
                                                <input type="text" className="form-control" placeholder="กรุณาระบุรหัสไปรษณีย์" />
                                            </div>
                                            <div className="w-100"></div>
                                            <div className="col-md-12">
                                                <label htmlFor="name">โปรดเลือกประเภทสถานที่จัดส่ง</label>
                                                <div className="selectcatadds">
                                                    <li>
                                                        <input type="radio" className="btn-check" name="options" id="option1"
                                                            autoComplete="off" defaultChecked />
                                                        <label className="btn btn-secondary" htmlFor="option1">ที่บ้าน</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" className="btn-check" name="options" id="option2"
                                                            autoComplete="off" />
                                                        <label className="btn btn-secondary" htmlFor="option2">ที่ทำงาน</label>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <a href="#" className="btn btn-primary">บันทึกข้อมูล</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <div className="groupcart">
                                <div className="titleBold">
                                    เลือกวิธีชำระเงิน
                                </div>
                                <div className="Cropscroll">
                                    <div className="payment_select select-display-slide mt-4">
                                        <li className="active" rel="1">
                                            <a href="#">
                                                บัตรเครดิต/บัตรเดบิต
                                            </a>
                                        </li>
                                        <li rel="2">
                                            <a href="#">
                                                iBanking
                                            </a>
                                        </li>
                                        <li rel="3">
                                            <a href="#">
                                                Mobile Banking
                                            </a>
                                        </li>
                                        <li rel="4">
                                            <a href="#">
                                                ชำระผ่าน ATM
                                            </a>
                                        </li>
                                        <li rel="5">
                                            <a href="#">
                                                โอน/ชำระผ่านบัญชีธนาคาร
                                            </a>
                                        </li>
                                        <li rel="6">
                                            <a href="#">
                                                เก็บปลายทาง
                                            </a>
                                        </li>
                                    </div>
                                </div>
                                <div className="display-slide mt-4" rel="1" style={{display:'block'}}>
                                    <div className="payment_method">
                                        <div className="row">
                                            <div className="col-lg-2 mt-3">
                                                <div className="paytitle">
                                                    เลือกบัญชีการชำระเงิน
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="md-radio md-radio-inline radiocheck">
                                                    <input id="section-2" type="radio" name="accordion-group1" />
                                                    <label htmlFor="section-2">
                                                        <div className="contentsty">

                                                            <img src="/template/images/visa.png" alt="" />
                                                            บัตรเครดิต KTC **** 1212
                                                        </div>
                                                    </label>

                                                </div>

                                                <a href="#" className="btn btn-primary" data-width="748" data-height="480"
                                                    data-fancybox data-src="#credit">+
                                                    ชำระด้วยบัตรใหม่</a>
                                                <div style={{display: 'none'}} id="credit">
                                                    <div className="titlepopup">
                                                        <h3>เพิ่มบัตรเครดิต/บัตรเดบิต</h3>
                                                        <h4>ข้อมูลบัตรเครดิต/เดบิต</h4>
                                                    </div>
                                                    <div className="formGroupall">


                                                        <div className="row mb-3">
                                                            <div className="col-md-6">
                                                                <label htmlFor="name">ชื่อที่ปรากฏบนบัตร</label>
                                                                <input type="text" className="form-control"
                                                                    placeholder="กรุณาระบุชื่อบนบัตร" />
                                                            </div>
                                                            <div className="w-100"></div>
                                                            <div className="col-md-6 position-relative">
                                                                <label htmlFor="name">หมายเลขบัตรเครดิต</label>
                                                                <input type="text" className="form-control"
                                                                    placeholder="กรุณาระบุหมายเลขบัตรเครดิต" />

                                                                <span className="piccrd"><img src="/template/images/creditcard.png"
                                                                        alt="" /></span>
                                                            </div>

                                                            <div className="w-100"></div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="name">วันหมดอายุ</label>
                                                                <div className="selectBox">
                                                                    <select className="form-select"
                                                                        aria-label="Default select example">
                                                                        <option defaultValue>MM</option>
                                                                        <option value="1">2</option>
                                                                        <option value="2">3</option>
                                                                        <option value="3">4</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="name">&nbsp</label>
                                                                <div className="selectBox">
                                                                    <select className="form-select"
                                                                        aria-label="Default select example">
                                                                        <option defaultValue>YYYY</option>
                                                                        <option value="1">2</option>
                                                                        <option value="2">3</option>
                                                                        <option value="3">4</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="name">CVV</label>
                                                                <input type="text" className="form-control" placeholder="000" />
                                                            </div>


                                                        </div>
                                                        <br />
                                                        <a href="#" className="btn btn-primary">บันทึกข้อมูล</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="display-slide mt-4" rel="2">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <div className="groupcart">
                                <div className="titleBold">
                                    สั่งซื้อสินค้าแล้ว

                                </div>
                                <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                                    <table className="table carttable">
                                        <tbody>
                                            <tr className="shopname">
                                                <td colSpan="5">
                                                    <i className="fi fi-rr-shop"></i> Cannabis
                                                    for you
                                                </td>
                                            </tr>
                                            {/* loopptr */}
                                            <tr>
                                                <td className="productcheck">

                                                    <div className="boxofproduct">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <a href="#"><img src="/template/images/product_img2.png"
                                                                        className="img-fluid" alt="" /></a>
                                                            </div>
                                                            <div className="col-lg-9">
                                                                <div className="contentprd">
                                                                    <div className="title">Something Blue</div>
                                                                    (Full-Spectrum Cartridge) <br />
                                                                    AbsoluteXtracts

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td style={{minWidth: '250px'}}>1g</td>
                                                <td style={{minWidth: '250px'}}>
                                                    <div className="price">
                                                        <div className="saleprice">
                                                            ฿500.00
                                                        </div>
                                                        <div className="ogprice">฿1000.00 </div>
                                                    </div>

                                                </td>
                                                <td style={{minWidth: '200px'}}>
                                                    2
                                                </td>
                                                <td style={{minWidth: '150px'}}>
                                                    <div className="saleprice">
                                                        ฿500.00
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="productcheck">

                                                    <div className="boxofproduct">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <a href="#"><img src="/template/images/product_img2.png"
                                                                        className="img-fluid" alt="" /></a>
                                                            </div>
                                                            <div className="col-lg-9">
                                                                <div className="contentprd">
                                                                    <div className="title">Something Blue</div>
                                                                    (Full-Spectrum Cartridge) <br />
                                                                    AbsoluteXtracts

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td style={{minWidth: '250px'}}>1g</td>
                                                <td style={{minWidth: '250px'}}>
                                                    <div className="price">
                                                        <div className="saleprice">
                                                            ฿500.00
                                                        </div>
                                                        <div className="ogprice">฿1000.00 </div>
                                                    </div>

                                                </td>
                                                <td style={{minWidth: '200px'}}>
                                                    2
                                                </td>
                                                <td style={{minWidth: '150px'}}>
                                                    <div className="saleprice">
                                                        ฿500.00
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* loopptr */}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
                            
                                    <div className="borderbox">
                                        <div className="shopname">
                                            <i className="fi fi-rr-shop"></i> Cannabis for you
                                        </div>
                                        <div className="boxofproduct">
                                            <div className="row">
                                                <div className="col-md-3 text-center">
                                                    <a href="#"><img src="/template/images/product_img2.png" className="img-fluid"
                                                            alt="" /></a>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="contentprd">
                                                        <div className="title">Something Blue</div>
                                                        (Full-Spectrum Cartridge) <br />
                                                        AbsoluteXtracts
                                                        <div className="weightno">1g</div>
                                                    
                                                    </div>
                                                </div>
                                                <div className="col-6 text-lg-end">
                                                    <div className="price">
                                                        <div className="saleprice">
                                                            ฿500.00
                                                        </div> <br />
                                                        <div className="ogprice">฿1000.00 </div>
                                                    </div>
                                                </div>
                                            

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-5 offset-lg-7 text-end">
                            <div className="row summaryorder">
                                <div className="col-6 col-lg-6 text-start">
                                    <b>ยอดรวมสินค้า</b>
                                </div>
                                <div className="col-6  col-lg-6">
                                    <b> ฿1500 </b>
                                </div>
                                <div className="col-6  col-lg-6 text-start">
                                    <b>รวมการจัดส่ง</b>
                                </div>
                                <div className="col-6  col-lg-6">
                                    <b>฿35 </b>
                                </div>
                                <div className="col-6  col-lg-6 text-start">
                                    <b>การชำระเงินทั้งหมด</b>
                                </div>
                                <div className="col-6  col-lg-6">
                                    <span className="salebig">฿1535</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col text-end">
                            <Link href="/fontend/shopping_success" className="btn btn-primary"> ยืนยันสั่งซื้อ </Link>
                        </div>
                    </div>

            </div>
        </div>
    </section>
        <_footerfont />

       </div>
   
  )
}
