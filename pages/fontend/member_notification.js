import "bootstrap/dist/css/bootstrap.css";
import _headerfont from "./layout_font/headerfont";
import _topmenufont from "./layout_font/inc_topmenu";
import _footerfont from "./layout_font/footerfont";
import _incsidemember from "./inc_sidemember";

export default function about() {
  return (
    <div>
      <_headerfont />
      <_topmenufont />

      <section id="memberpage">
        <div className="container-fluid nopad">
          <div className="row">
            <div className="col">
              <div className="bgheadgreen"></div>
            </div>
          </div>
          <div className="wrapper_pad">
            <div className="row">
              <div className="col-lg-3 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className="boxwhiteShadow">
                  <_incsidemember />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
                  <a href="member_m.php" className="whitelink">
                    <span>
                      <i className="fi fi-rr-angle-left"></i>
                    </span>
                    กลับ
                  </a>
                </div>
                <div className="boxwhiteShadow">
                  <div className="titlemember">
                    <h1>การแจ้งเตือนของฉัน</h1>
                  </div>
                  <div className="style_slide select-display-slide mt-4">
                    <li className="active" rel="1">
                      <a href="#">ทั้งหมด</a>
                    </li>
                    <li rel="2">
                      <a href="#">อัปเดตคำสั่งซื้อ</a>
                    </li>
                    <li rel="3">
                      <a href="#">เรื่องโปรโมชั่น</a>
                    </li>
                    <li rel="4">
                      <a href="#">อัพเดทจากทาง WorldwhyWeed</a>
                    </li>
                  </div>
                  <div
                    className="display-slide mt-4"
                    rel="1"
                    style={{ display: "block" }}
                  >
                    <div className="row">
                      <div className="col-lg-2">
                        <a href="#">
                          <img
                            src="/template/images/product_img.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="col-lg-8">สินค้าถูกจัดส่งแล้ว</div>
                      <div className="col-lg-2"></div>
                    </div>
                  </div>
                  <div className="display-slide" rel="2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <_footerfont />
    </div>
  );
}
