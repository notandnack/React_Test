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
              <div className="bigtitletext text-center"></div>
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
                  <div className="row">
                    <div className="col-12 col-md-8">
                      <div className="titlemember">
                        <h1>บัญชีธนาคารของฉัน</h1>
                        <h2>ช่องทางการชำระเงิน</h2>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 text-md-end">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-width="748"
                        data-height="480"
                        data-fancybox
                        data-src="#credit"
                      >
                        + เพิ่มบัตรใหม่
                      </a>
                      <div style={{ display: "none" }} id="credit">
                        <div className="titlepopup">
                          <h3>เพิ่มบัตรเครดิต/บัตรเดบิต</h3>
                          <h4>ข้อมูลบัตรเครดิต/เดบิต</h4>
                        </div>
                        <div className="formGroupall">
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <label htmlFor="name">ชื่อที่ปรากฏบนบัตร</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="กรุณาระบุชื่อบนบัตร"
                              />
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-6 position-relative">
                              <label htmlFor="name">หมายเลขบัตรเครดิต</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="กรุณาระบุหมายเลขบัตรเครดิต"
                              />

                              <span className="piccrd">
                                <img
                                  src="/template/images/creditcard.png"
                                  alt=""
                                />
                              </span>
                            </div>

                            <div className="w-100"></div>
                            <div className="col-md-4">
                              <label htmlFor="name">วันหมดอายุ</label>
                              <div className="selectBox">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
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
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option defaultValue>YYYY</option>
                                  <option value="1">2</option>
                                  <option value="2">3</option>
                                  <option value="3">4</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <label htmlFor="name">CVV</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="000"
                              />
                            </div>
                          </div>
                          <br />
                          <a href="#" className="btn btn-primary">
                            บันทึกข้อมูล
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                    <div className="row mt-5">
                      <div className="col">
                        <div className="groupotable">
                          <table className="table credittable">
                            <thead>
                              <tr>
                                <th>บัตรของฉัน</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <label className="check-container">
                                    {" "}
                                    <img
                                      src="/template/images/banktrans_10.png"
                                      alt=""
                                    />{" "}
                                    บัตรเครดิต KTC
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </td>

                                <td>**** **** ***** 1212</td>
                                <td>
                                  <a href="#" className="linkud">
                                    ลบ
                                  </a>{" "}
                                  <br />
                                  <a
                                    href="#"
                                    className="btn btn-default disabled"
                                  >
                                    ตั้งเป็นค่าเริ่มต้น
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="check-container">
                                    {" "}
                                    <img
                                      src="/template/images/banktrans_06.png"
                                      alt=""
                                    />
                                    ไทยพาณิชย์ (SCB)
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </td>

                                <td>**** **** ***** 1212</td>
                                <td>
                                  <a href="#" className="linkud">
                                    ลบ
                                  </a>{" "}
                                  <br />
                                  <a href="#" className="btn btn-default-press">
                                    ตั้งเป็นค่าเริ่มต้น
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
                    <div className="row mt-3">
                      <div className="col-12 col-md-6">
                        <div className="borderbox">
                          <label className="check-container">
                            {" "}
                            <img
                              src="/template/images/banktrans_10.png"
                              alt=""
                            />
                            บัตรเครดิต KTC
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          **** **** ***** 1212 <br />
                          <a href="#" className="linkud">
                            ลบ
                          </a>{" "}
                          <br /> <br />
                          <a href="#" className="btn btn-default disabled">
                            ตั้งเป็นค่าเริ่มต้น
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="borderbox">
                          <label className="check-container">
                            {" "}
                            <img
                              src="/template/images/banktrans_06.png"
                              alt=""
                            />
                            บัตรเครดิต KTC
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          **** **** ***** 1212 <br />
                          <a href="#" className="linkud">
                            ลบ
                          </a>{" "}
                          <br /> <br />
                          <a href="#" className="btn btn-default-press">
                            ตั้งเป็นค่าเริ่มต้น
                          </a>
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
    </div>
  );
}
