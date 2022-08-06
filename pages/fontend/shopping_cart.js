import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import _headerfont from '../fontend/layout_font/headerfont'
import _topmenufont from '../fontend/layout_font/inc_topmenu'
import _footerfont from '../fontend/layout_font/footerfont'
import Script from 'next/script'
import Link from 'next/link'

    let loopdiv = [];
    for (let i = 1; i <= 6; i++) {
        loopdiv.push(
            <div className="col-lg-12" key={i}>
            <div className="couponcode_box mt-3">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="bgblueg">
                            Discount
                        </div>
                        <div className="circleshape2"></div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-7">
                                <div
                                    className="code_detail pt-2 pl-3 pb-2 pr-2">
                                    50% off <br />
                                    Min. Spend ฿฿499

                                    <span
                                        className="smtxt">Valid
                                        Till : <br />
                                        21.06.2022 -
                                        21.06.2022
                                    </span>

                                </div>
                            </div>
                            <div className="col-lg-5">
                                <a href="#"
                                    className="btn btn-info">Use
                                    code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       );
    }

export default function shopping_cart() {
    

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
                            <div className="bigtitletext ">
                                <h1>Shopping Cart</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="wrapper_pad">
                <div className="row mb-5">
                    <div className="col">
                        <div className="groupcartfirst">
                            <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                                <table className="table carttable">
                                    <thead>
                                        <tr>
                                            <th>
                                                <label className="check-container"> Product
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </th>
                                            <th>
                                                Unit Price

                                            </th>
                                            <th>
                                                Quantity


                                            </th>
                                            <th>
                                                Total Price

                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="shopname">
                                            <td colSpan="5">
                                                <label className="check-container"> <i className="fi fi-rr-shop"></i> Cannabis
                                                    for you
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                        </tr>
{/* looptr*/}
<tr >
                <td className="productcheck">
                    <label className="check-container">
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
                                        <div className="weightno">1g</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </td>
                <td style={{minWidth: '250px'}}>
                    <div className="price">
                        <div className="saleprice">
                            ฿500.00
                        </div>
                        <div className="ogprice">฿1000.00 </div>
                    </div>

                </td>
                <td style={{maxWidth:'200px'}}>
                    <div className="qtyCart">
                        <div className="qty_group_cart mb-2">
                            <div className="input-group"> <span className="input-group-btn">
                                    <button id="qty-minus" type="button"
                                        className="btn btn-default btn-number"
                                        disabled="disabled" data-type="minus"
                                        data-field="quant[1]">
                                        <i className="fi fi-rr-minus-small"></i>
                                    </button>
                                </span>
                                <input id="CC-prodDetails-quantity" type="text"
                                    name="quant[1]" className="form-control input-number"
                                    defaultValue="1" min="1" max="100" /> <span
                                    className="input-group-btn">
                                    <button id="qty-plus" type="button"
                                        className="btn btn-default btn-number" data-type="plus"
                                        data-field="quant[1]">
                                        <i className="fi fi-rr-plus-small"></i>
                                    </button>
                                </span> </div>
                        </div>
                    </div>
                </td>
                <td style={{minWidth: '150px'}}>
                    <span className="saletext_rd">
                        ฿500.00
                    </span>
                </td>
                <td>
                    <a href="#" className="deleteBin"><i className="fi fi-rr-trash"></i></a> </td>
            </tr>
            <tr >
                <td className="productcheck">
                    <label className="check-container">
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
                                        <div className="weightno">1g</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </td>
                <td style={{minWidth: '250px'}}>
                    <div className="price">
                        <div className="saleprice">
                            ฿500.00
                        </div>
                        <div className="ogprice">฿1000.00 </div>
                    </div>

                </td>
                <td style={{maxWidth:'200px'}}>
                    <div className="qtyCart">
                        <div className="qty_group_cart mb-2">
                            <div className="input-group"> <span className="input-group-btn">
                                    <button id="qty-minus" type="button"
                                        className="btn btn-default btn-number"
                                        disabled="disabled" data-type="minus"
                                        data-field="quant[1]">
                                        <i className="fi fi-rr-minus-small"></i>
                                    </button>
                                </span>
                                <input id="CC-prodDetails-quantity" type="text"
                                    name="quant[1]" className="form-control input-number"
                                    defaultValue="1" min="1" max="100" /> <span
                                    className="input-group-btn">
                                    <button id="qty-plus" type="button"
                                        className="btn btn-default btn-number" data-type="plus"
                                        data-field="quant[1]">
                                        <i className="fi fi-rr-plus-small"></i>
                                    </button>
                                </span> </div>
                        </div>
                    </div>
                </td>
                <td style={{minWidth: '150px'}}>
                    <span className="saletext_rd">
                        ฿500.00
                    </span>
                </td>
                <td>
                    <a href="#" className="deleteBin"><i className="fi fi-rr-trash"></i></a> </td>
            </tr>
            <tr >
                <td className="productcheck">
                    <label className="check-container">
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
                                        <div className="weightno">1g</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </td>
                <td style={{minWidth: '250px'}}>
                    <div className="price">
                        <div className="saleprice">
                            ฿500.00
                        </div>
                        <div className="ogprice">฿1000.00 </div>
                    </div>

                </td>
                <td style={{maxWidth:'200px'}}>
                    <div className="qtyCart">
                        <div className="qty_group_cart mb-2">
                            <div className="input-group"> <span className="input-group-btn">
                                    <button id="qty-minus" type="button"
                                        className="btn btn-default btn-number"
                                        disabled="disabled" data-type="minus"
                                        data-field="quant[1]">
                                        <i className="fi fi-rr-minus-small"></i>
                                    </button>
                                </span>
                                <input id="CC-prodDetails-quantity" type="text"
                                    name="quant[1]" className="form-control input-number"
                                    defaultValue="1" min="1" max="100" /> <span
                                    className="input-group-btn">
                                    <button id="qty-plus" type="button"
                                        className="btn btn-default btn-number" data-type="plus"
                                        data-field="quant[1]">
                                        <i className="fi fi-rr-plus-small"></i>
                                    </button>
                                </span> </div>
                        </div>
                    </div>
                </td>
                <td style={{minWidth: '150px'}}>
                    <span className="saletext_rd">
                        ฿500.00
                    </span>
                </td>
                <td>
                    <a href="#" className="deleteBin"><i className="fi fi-rr-trash"></i></a> </td>
            </tr>
            <tr >
                <td className="productcheck">
                    <label className="check-container">
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
                                        <div className="weightno">1g</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </td>
                <td style={{minWidth: '250px'}}>
                    <div className="price">
                        <div className="saleprice">
                            ฿500.00
                        </div>
                        <div className="ogprice">฿1000.00 </div>
                    </div>

                </td>
                <td style={{maxWidth:'200px'}}>
                    <div className="qtyCart">
                        <div className="qty_group_cart mb-2">
                            <div className="input-group"> <span className="input-group-btn">
                                    <button id="qty-minus" type="button"
                                        className="btn btn-default btn-number"
                                        disabled="disabled" data-type="minus"
                                        data-field="quant[1]">
                                        <i className="fi fi-rr-minus-small"></i>
                                    </button>
                                </span>
                                <input id="CC-prodDetails-quantity" type="text"
                                    name="quant[1]" className="form-control input-number"
                                    defaultValue="1" min="1" max="100" /> <span
                                    className="input-group-btn">
                                    <button id="qty-plus" type="button"
                                        className="btn btn-default btn-number" data-type="plus"
                                        data-field="quant[1]">
                                        <i className="fi fi-rr-plus-small"></i>
                                    </button>
                                </span> </div>
                        </div>
                    </div>
                </td>
                <td style={{minWidth: '150px'}}>
                    <span className="saletext_rd">
                        ฿500.00
                    </span>
                </td>
                <td>
                    <a href="#" className="deleteBin"><i className="fi fi-rr-trash"></i></a> </td>
            </tr>
{/* looptr*/}
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
                                                    <div className="qtyCart">
                                                        <div className="qty_group_cart mt-2 mb-2">
                                                            <div className="input-group"> <span className="input-group-btn">
                                                                    <button id="qty-minus" type="button"
                                                                        className="btn btn-default btn-number"
                                                                        disabled="disabled" data-type="minus"
                                                                        data-field="quant[1]">
                                                                        <i className="fi fi-rr-minus-small"></i>
                                                                    </button>
                                                                </span>
                                                                <input id="CC-prodDetails-quantity" type="text"
                                                                    name="quant[1]" className="form-control input-number"
                                                                    defaultValue="1" min="1" max="100" /> <span
                                                                    className="input-group-btn">
                                                                    <button id="qty-plus" type="button"
                                                                        className="btn btn-default btn-number"
                                                                        data-type="plus" data-field="quant[1]">
                                                                        <i className="fi fi-rr-plus-small"></i>
                                                                    </button>
                                                                </span> </div>
                                                        </div>
                                                    </div>
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
                                            <div className="col-6 mt-3 text-end">
                                                <a href="#" className="deleteBin"><i className="fi fi-rr-trash"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
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
                                                    <div className="qtyCart">
                                                        <div className="qty_group_cart mt-2 mb-2">
                                                            <div className="input-group"> <span className="input-group-btn">
                                                                    <button id="qty-minus" type="button"
                                                                        className="btn btn-default btn-number"
                                                                        disabled="disabled" data-type="minus"
                                                                        data-field="quant[1]">
                                                                        <i className="fi fi-rr-minus-small"></i>
                                                                    </button>
                                                                </span>
                                                                <input id="CC-prodDetails-quantity" type="text"
                                                                    name="quant[1]" className="form-control input-number"
                                                                    defaultValue="1" min="1" max="100" /> <span
                                                                    className="input-group-btn">
                                                                    <button id="qty-plus" type="button"
                                                                        className="btn btn-default btn-number"
                                                                        data-type="plus" data-field="quant[1]">
                                                                        <i className="fi fi-rr-plus-small"></i>
                                                                    </button>
                                                                </span> </div>
                                                        </div>
                                                    </div>
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
                                            <div className="col-6 mt-3 text-end">
                                                <a href="#" className="deleteBin"><i className="fi fi-rr-trash"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="summarygroup mt-4 mb-5">
                            <div className="row border-bottom pt-3 pb-3">
                                <div className="col-lg-5 offset-lg-7">
                                    <div className="enterpromotion">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="input-group">
                                                    <span className="input-group-text" id="basic-addon1">
                                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_93_1790)">
                                                                <path
                                                                    d="M19 12.6667L19 12.5638C18.9966 12.2094 18.8757 11.8663 18.6562 11.5882C18.4367 11.3101 18.131 11.1127 17.7872 11.0271C17.4524 10.9355 17.1571 10.7364 16.9465 10.4604C16.736 10.1845 16.622 9.84707 16.622 9.5C16.622 9.15293 16.736 8.81548 16.9465 8.53956C17.1571 8.26363 17.4524 8.06453 17.7872 7.97288C18.131 7.88729 18.4367 7.68995 18.6562 7.41183C18.8757 7.1337 18.9966 6.79055 19 6.43625L19 6.33333C18.9987 5.2839 18.5813 4.27782 17.8392 3.53576C17.0972 2.7937 16.0911 2.37626 15.0417 2.375L2.375 2.375C1.74511 2.375 1.14102 2.62522 0.695621 3.07062C0.250221 3.51602 -7.62812e-08 4.12011 -1.03815e-07 4.75L-1.77523e-07 6.43625C0.00336628 6.79055 0.124302 7.1337 0.34382 7.41182C0.563337 7.68995 0.869007 7.88729 1.21283 7.97287C1.54758 8.06453 1.84294 8.26363 2.05347 8.53956C2.264 8.81548 2.37803 9.15293 2.37803 9.5C2.37803 9.84707 2.264 10.1845 2.05347 10.4604C1.84294 10.7364 1.54758 10.9355 1.21283 11.0271C0.869007 11.1127 0.563337 11.3101 0.34382 11.5882C0.124301 11.8663 0.00336604 12.2094 -4.45364e-07 12.5637L-5.19073e-07 14.25C-5.46606e-07 14.8799 0.250221 15.484 0.695621 15.9294C1.14102 16.3748 1.74511 16.625 2.375 16.625L15.0417 16.625C16.0911 16.6237 17.0972 16.2063 17.8392 15.4642C18.5813 14.7222 18.9987 13.7161 19 12.6667V12.6667ZM1.58333 14.25L1.63321 12.5535C2.305 12.3675 2.89667 11.9651 3.31647 11.4086C3.73627 10.8522 3.96073 10.1727 3.95504 9.47572C3.94936 8.77869 3.71385 8.10301 3.28504 7.55347C2.85623 7.00392 2.25807 6.61121 1.58333 6.43625L1.58333 4.75C1.58333 4.54004 1.66674 4.33867 1.81521 4.19021C1.96367 4.04174 2.16504 3.95833 2.375 3.95833L5.54167 3.95833L5.54167 5.54167C5.54167 5.75163 5.62507 5.95299 5.77354 6.10146C5.92201 6.24993 6.12337 6.33333 6.33333 6.33333C6.5433 6.33333 6.74466 6.24993 6.89313 6.10146C7.04159 5.95299 7.125 5.75163 7.125 5.54167L7.125 3.95833L15.0417 3.95833C15.6716 3.95833 16.2756 4.20856 16.721 4.65395C17.1664 5.09935 17.4167 5.70344 17.4167 6.33333L17.3668 6.44654C16.6991 6.63197 16.1104 7.03079 15.6906 7.58212C15.2707 8.13346 15.0428 8.80702 15.0417 9.5C15.0476 10.2023 15.2829 10.8835 15.7116 11.4398C16.1403 11.9962 16.739 12.3972 17.4167 12.582L17.4167 12.6667C17.4167 13.2966 17.1664 13.9006 16.721 14.346C16.2756 14.7914 15.6716 15.0417 15.0417 15.0417L7.125 15.0417L7.125 13.4583C7.125 13.2484 7.04159 13.047 6.89313 12.8985C6.74466 12.7501 6.5433 12.6667 6.33333 12.6667C6.12337 12.6667 5.92201 12.7501 5.77354 12.8985C5.62507 13.047 5.54167 13.2484 5.54167 13.4583L5.54167 15.0417L2.375 15.0417C2.16504 15.0417 1.96367 14.9583 1.81521 14.8098C1.66674 14.6613 1.58333 14.46 1.58333 14.25Z"
                                                                    fill="#88CE67" />
                                                                <path
                                                                    d="M7.125 10.2916L7.125 8.70829C7.125 8.49833 7.04159 8.29697 6.89313 8.1485C6.74466 8.00003 6.5433 7.91663 6.33333 7.91663C6.12337 7.91663 5.92201 8.00003 5.77354 8.1485C5.62507 8.29697 5.54167 8.49833 5.54167 8.70829L5.54167 10.2916C5.54167 10.5016 5.62507 10.703 5.77354 10.8514C5.92201 10.9999 6.12337 11.0833 6.33333 11.0833C6.5433 11.0833 6.74466 10.9999 6.89313 10.8514C7.04159 10.703 7.125 10.5016 7.125 10.2916Z"
                                                                    fill="#88CE67" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_93_1790">
                                                                    <rect width="19" height="19" fill="white"
                                                                        transform="translate(19) rotate(90)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </span>
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter promo code" aria-label="Recipient's username"
                                                        aria-describedby="button-addon2" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" className="morecode" data-width="748" data-height="650"
                                                    data-fancybox data-src="#promo">Select or Enter
                                                    code</a>
                                                <div style={{display: 'none'}} id="promo">
                                                    <div className="titlepopup">
                                                        <h3>Select Voucher</h3>
                                                        <div className="row mt-3">
                                                            <div className="col promocodemember">
                                                                <div className="input-group">
                                                                    <span className="input-group-text" id="basic-addon1">
                                                                        <svg width="19" height="19" viewBox="0 0 19 19"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <g clipPath="url(#clip0_93_1790)">
                                                                                <path
                                                                                    d="M19 12.6667L19 12.5638C18.9966 12.2094 18.8757 11.8663 18.6562 11.5882C18.4367 11.3101 18.131 11.1127 17.7872 11.0271C17.4524 10.9355 17.1571 10.7364 16.9465 10.4604C16.736 10.1845 16.622 9.84707 16.622 9.5C16.622 9.15293 16.736 8.81548 16.9465 8.53956C17.1571 8.26363 17.4524 8.06453 17.7872 7.97288C18.131 7.88729 18.4367 7.68995 18.6562 7.41183C18.8757 7.1337 18.9966 6.79055 19 6.43625L19 6.33333C18.9987 5.2839 18.5813 4.27782 17.8392 3.53576C17.0972 2.7937 16.0911 2.37626 15.0417 2.375L2.375 2.375C1.74511 2.375 1.14102 2.62522 0.695621 3.07062C0.250221 3.51602 -7.62812e-08 4.12011 -1.03815e-07 4.75L-1.77523e-07 6.43625C0.00336628 6.79055 0.124302 7.1337 0.34382 7.41182C0.563337 7.68995 0.869007 7.88729 1.21283 7.97287C1.54758 8.06453 1.84294 8.26363 2.05347 8.53956C2.264 8.81548 2.37803 9.15293 2.37803 9.5C2.37803 9.84707 2.264 10.1845 2.05347 10.4604C1.84294 10.7364 1.54758 10.9355 1.21283 11.0271C0.869007 11.1127 0.563337 11.3101 0.34382 11.5882C0.124301 11.8663 0.00336604 12.2094 -4.45364e-07 12.5637L-5.19073e-07 14.25C-5.46606e-07 14.8799 0.250221 15.484 0.695621 15.9294C1.14102 16.3748 1.74511 16.625 2.375 16.625L15.0417 16.625C16.0911 16.6237 17.0972 16.2063 17.8392 15.4642C18.5813 14.7222 18.9987 13.7161 19 12.6667V12.6667ZM1.58333 14.25L1.63321 12.5535C2.305 12.3675 2.89667 11.9651 3.31647 11.4086C3.73627 10.8522 3.96073 10.1727 3.95504 9.47572C3.94936 8.77869 3.71385 8.10301 3.28504 7.55347C2.85623 7.00392 2.25807 6.61121 1.58333 6.43625L1.58333 4.75C1.58333 4.54004 1.66674 4.33867 1.81521 4.19021C1.96367 4.04174 2.16504 3.95833 2.375 3.95833L5.54167 3.95833L5.54167 5.54167C5.54167 5.75163 5.62507 5.95299 5.77354 6.10146C5.92201 6.24993 6.12337 6.33333 6.33333 6.33333C6.5433 6.33333 6.74466 6.24993 6.89313 6.10146C7.04159 5.95299 7.125 5.75163 7.125 5.54167L7.125 3.95833L15.0417 3.95833C15.6716 3.95833 16.2756 4.20856 16.721 4.65395C17.1664 5.09935 17.4167 5.70344 17.4167 6.33333L17.3668 6.44654C16.6991 6.63197 16.1104 7.03079 15.6906 7.58212C15.2707 8.13346 15.0428 8.80702 15.0417 9.5C15.0476 10.2023 15.2829 10.8835 15.7116 11.4398C16.1403 11.9962 16.739 12.3972 17.4167 12.582L17.4167 12.6667C17.4167 13.2966 17.1664 13.9006 16.721 14.346C16.2756 14.7914 15.6716 15.0417 15.0417 15.0417L7.125 15.0417L7.125 13.4583C7.125 13.2484 7.04159 13.047 6.89313 12.8985C6.74466 12.7501 6.5433 12.6667 6.33333 12.6667C6.12337 12.6667 5.92201 12.7501 5.77354 12.8985C5.62507 13.047 5.54167 13.2484 5.54167 13.4583L5.54167 15.0417L2.375 15.0417C2.16504 15.0417 1.96367 14.9583 1.81521 14.8098C1.66674 14.6613 1.58333 14.46 1.58333 14.25Z"
                                                                                    fill="#88CE67" />
                                                                                <path
                                                                                    d="M7.125 10.2916L7.125 8.70829C7.125 8.49833 7.04159 8.29697 6.89313 8.1485C6.74466 8.00003 6.5433 7.91663 6.33333 7.91663C6.12337 7.91663 5.92201 8.00003 5.77354 8.1485C5.62507 8.29697 5.54167 8.49833 5.54167 8.70829L5.54167 10.2916C5.54167 10.5016 5.62507 10.703 5.77354 10.8514C5.92201 10.9999 6.12337 11.0833 6.33333 11.0833C6.5433 11.0833 6.74466 10.9999 6.89313 10.8514C7.04159 10.703 7.125 10.5016 7.125 10.2916Z"
                                                                                    fill="#88CE67" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_93_1790">
                                                                                    <rect width="19" height="19"
                                                                                        fill="white"
                                                                                        transform="translate(19) rotate(90)" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>

                                                                    </span>
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Enter promo code"
                                                                        aria-label="Recipient's username"
                                                                        aria-describedby="button-addon2" />
                                                                    <button className="btn btn-outline-secondary"
                                                                        type="button" id="button-addon2">Apply</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="promo_slide select-display-slide mt-4">
                                                                    <li className="active" rel="1">
                                                                        <a href="#">Code From Word Why
                                                                            Weed</a>
                                                                    </li>
                                                                    <li rel="2">
                                                                        <a href="#">
                                                                            Code From Partner
                                                                        </a>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="display-slide mt-4" rel="1"
                                                                    style={{display:'block'}}>
                                                                    <div className="row">

                                                                        {loopdiv}

                                                                    </div>
                                                                </div>
                                                                <div className="display-slide" rel="2">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row border-bottom pt-3 pb-3">
                                <div className="col-lg-5 offset-lg-7">
                                    <div className="row">
                                        <div className="col-9 col-lg-9 remainpoint">
                                            <label className="check-container"> Use WWWeed Credits <a href="#"
                                                    data-width="748" data-height="650" data-fancybox
                                                    data-src="#pointinfo"><i
                                                        className="fi fi-rr-info"></i></a>
                                                <div className="smtxt2"> Remaining Balance: 0 ฿</div>
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <div style={{display: 'none'}} id="pointinfo">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                                                deserunt voluptas animi nobis dolore consectetur? Error recusandae a
                                                nam, cum enim odio rerum! Culpa eveniet inventore iste cupiditate, alias
                                                porro?
                                            </div>
                                        </div>
                                        <div className="col-3 col-lg-3 text-md-end">
                                            <b>฿165</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row border-bottom pt-3 pb-3">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-12 col-md-4 col-lg-5 remainpoint">
                                            <label className="check-container"> Select all (4)
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-5 text-md-end mt-3 mt-md-0">
                                            Total (4 items):
                                            <span className="saletext_rd"><b>฿2499</b></span>

                                        </div>
                                        <div className="col-12 col-md-4 col-lg-2 text-center mt-3 mt-md-0">
                                            <Link href="/fontend/shopping_checkout"><a className="btn btn-primary">Check out</a></Link>
                                        </div>
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
        <Script type="text/javascript" src="/template/script_font/shopping_cart_sc.js"></Script>
       </div>
   
  )
}
