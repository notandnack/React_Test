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
                  <div class="titlemember">
                    <h1>เปลี่ยนรหัสผ่าน</h1>
                    <h2>
                      กรุณาอย่าเปิดเผยรหัสผ่านแก่คนอื่น
                      เพื่อความปลอดภัยของบัญชีผู้ใช้คุณเอง
                    </h2>
                  </div>
                  <div class="formGroupall mt-3 mt-md-5 mb-5">
                    <label for="pass">รหัสผ่านปัจจุบัน</label>
                    <input type="password" class="form-control" />
                    <label for="pass">รหัสผ่านใหม่</label>
                    <input type="password" class="form-control" />
                    <label for="pass">ยืนยันรหัสผ่านใหม่</label>
                    <input type="password" class="form-control" />
                  </div>
                  <a href="#" class="btn btn-primary">
                    บันทึกข้อมูล
                  </a>
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
