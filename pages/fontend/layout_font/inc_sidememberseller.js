import Link from 'next/link'
import Script from 'next/script'

function _sidememberseller() {
  return (
    <div>
     <section id="membermenu">
    <div className="picprofile_seller">
    </div>
    <div className="profiledetail">
        <h3>PAPA BARKLEY</h3>
        <li><i className="fi fi-rr-envelope"></i> papabarkley@gmail.com</li>
        <li><i className="fi fi-rr-phone-call"></i> ********88</li>
    </div>

    <ul className="mainmember mt-3">
        <li data-page="history"><Link href="/fontend/seller_shop"><a>รายละเอียดร้านค้า</a></Link></li>
        <li data-page="promo"><Link href="/fontend/seller_rate"><a>คะแนนร้านค้า</a></Link></li>
        <li data-page="promo"><Link href="/fontend/shop"><a>ดูร้านค้า</a></Link></li>
        <li><a href="#">ออกจากระบบ</a></li>

    </ul>
</section>

<Script type="text/javascript" src="/template/script_font/inc_sidememberseller_sc.js"></Script>
    </div>

  )
}
export default _sidememberseller