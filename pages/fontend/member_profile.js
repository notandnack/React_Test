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
                    <h1>ข้อมูลส่วนตัวของฉัน</h1>
                    <h2>จัดการข้อมูลส่วนตัวคุณเพื่อความปลอดภัยของบัญชี</h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-7 swap_product2">
                      <div className="formprofile mt-3 mt-lg-5 mb-5">
                        <label htmlFor="name">ชื่อผู้ใช้</label>
                        <input type="type" className="form-control" />
                        <label htmlFor="name">ชื่อนามสกุล</label>
                        <input type="type" className="form-control" />
                        <label htmlFor="name">อีเมล</label>
                        <input type="type" className="form-control" />{" "}
                        <a href="#" className="linkud">
                          แก้ไข
                        </a>
                        <label htmlFor="name">เบอร์โทรศัพท์</label>
                        <input type="type" className="form-control" />{" "}
                        <a href="#" className="linkud">
                          แก้ไข
                        </a>
                        <div className="row">
                          <div className="col-md-4">
                            <label htmlFor="name">วัน</label>
                            <div className="selectBox">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option defaultValue>17</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="name">เดือน</label>
                            <div className="selectBox">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option defaultValue>มีนาคม</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="name">ปี</label>
                            <div className="selectBox">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option defaultValue>1991</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-5 col-xl-4">
                            <label htmlFor="name">เพศ</label>
                            <div className="selectBox">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option defaultValue>กรุณาเลือกเพศ</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a href="#" className="btn btn-primary">
                        บันทึกข้อมูล
                      </a>
                    </div>
                    <div className="col-lg-5 swap_product mt-3 mt-lg-0">
                      <div className="profileupload">
                        <div className="img_member">
                          <div className="preview img-wrapper"></div>
                          <div className="file-upload-wrapper mt-5">
                            <input
                              type="file"
                              name="file"
                              className="file-upload-native"
                              accept="image/*"
                            />
                            <input
                              type="text"
                              disabled
                              className="file-upload-text"
                            />{" "}
                            อัพโหลดรูปภาพ
                          </div>
                        </div>
                        <center className="smtxt2">
                        ขนาดไฟล์: สูงสุด 1 MB<div className='new-line'>ไฟล์ที่รองรับ: .JPEG, .PNG</div>
                        </center>
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
    </div>
  );
}
