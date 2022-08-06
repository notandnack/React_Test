import Link from 'next/link'
import Script from 'next/script'

function _sidemember() {
  return (
    <div>
       <section id="membermenu">
    <div className="picprofile">
    </div>
    <div className="profiledetail">
        <h3>Netthakan O.</h3>
        <li><i className="fi fi-rr-envelope"></i> Netthakan@gmail.com</li>
        <li><i className="fi fi-rr-phone-call"></i> ********88</li>
    </div>

    <ul className="mainmember mt-3">
        <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <li><a href="#">จัดการบัญชีของฉัน</a> 
                <ul className="submenu_member">
                    <li data-page="profile"><Link href="/fontend/member_profile"><a> ข้อมูลส่วนตัว</a></Link></li>
                    <li data-page="payment"><Link href="/fontend/member_credit"><a> บัญชีธนาคาร</a></Link></li>
                    <li data-page="address"><Link href="/fontend/member_address"><a> ที่อยู่</a></Link></li>
                    <li data-page="password"><Link href="/fontend/member_password"><a> เปลี่ยนรหัสผ่าน</a></Link></li>
                </ul>
                </li>
        </div>

        <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">

            <li><Link href="/fontend/member_profile"><a> ข้อมูลส่วนตัว</a></Link></li>
            <li><Link href="/fontend/member_credit"><a> บัญชีธนาคาร</a></Link></li>
            <li><Link href="/fontend/member_address"><a> ที่อยู่</a></Link></li>
            <li><Link href="/fontend/member_password"><a> เปลี่ยนรหัสผ่าน</a></Link></li>
        </div>
      
        <li data-page="history"><Link href="/fontend/member_order"><a>การซื้อของฉัน</a></Link></li>
        <li data-page="promo"><Link href="/fontend/member_promocode"><a>โค้ดส่วนลดของฉัน</a></Link></li>
        <li data-page="credit"><Link href="/fontend/member_coin"><a>Credit ของฉัน</a></Link></li>
        <li data-page="notification"><Link href="/fontend/member_notification"><a>การแจ้งเตือน</a></Link></li>

    </ul>
</section>
<Script type="text/javascript" src="/template/script_font/inc_sidemember_sc.js"></Script>
    </div>

  )
}
export default _sidemember