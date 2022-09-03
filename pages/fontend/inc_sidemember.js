import Script from "next/script";
function _incsidemember() {
  return (
    <div>
      <section id="membermenu">
        <div className="picprofile"></div>
        <div className="profiledetail">
          <h3>Netthakan O.</h3>
          <li>
            <i className="fi fi-rr-envelope"></i> Netthakan@gmail.com
          </li>
          <li>
            <i className="fi fi-rr-phone-call"></i> ********88
          </li>
        </div>

        <ul className="mainmember mt-3">
          <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <li>
              <a href="#">จัดการบัญชีของฉัน</a>
              <ul className="submenu_member">
                <li data-page="profile">
                  <a href="member_profile"> ข้อมูลส่วนตัว</a>
                </li>
                <li data-page="payment">
                  <a href="member_credit"> บัญชีธนาคาร</a>
                </li>
                <li data-page="address">
                  <a href="member_address"> ที่อยู่</a>
                </li>
                <li data-page="password">
                  <a href="member_password"> เปลี่ยนรหัสผ่าน</a>
                </li>
              </ul>
            </li>
          </div>

          <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
            <li>
              <a href="member_profile"> ข้อมูลส่วนตัว</a>
            </li>
            <li>
              <a href="member_credit"> บัญชีธนาคาร</a>
            </li>
            <li>
              <a href="member_address"> ที่อยู่</a>
            </li>
            <li>
              <a href="member_password"> เปลี่ยนรหัสผ่าน</a>
            </li>
          </div>

          <li data-page="history">
            <a href="member_order">การซื้อของฉัน</a>
          </li>
          <li data-page="promo">
            <a href="member_promocode">โค้ดส่วนลดของฉัน</a>
          </li>
          <li data-page="credit">
            <a href="member_coin">Credit ของฉัน</a>
          </li>
          <li data-page="notification">
            <a href="member_notification">การแจ้งเตือน</a>
          </li>
        </ul>
      </section>
      <Script
        type="text/javascript"
        src="/template/script_font/inc_sidemember_sc.js"
      ></Script>
    </div>
  );
}
export default _incsidemember;
