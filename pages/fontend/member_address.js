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
                                <div className="col-md-8">
                                    <div className="titlemember">
                                        <h1>ที่อยู่ของฉัน</h1>
                                        <h2>จัดการข้อมูลที่อยู่เพื่อการจัดส่ง</h2>
                                    </div>
                                </div>
                                <div className="col-md-4 text-md-end">
                                    <a href="#" className="btn btn-primary" data-width="648" data-height="650" data-fancybox
                                        data-src="#address">+ เพิ่มที่อยู่ใหม่</a>
                                    <div style={{ display: "none" }} id="address">
                                        <div className="titlepopup">
                                            <h3>เพิ่มที่อยู่การจัดส่ง</h3>
                                            <h4>จัดการข้อมูลที่อยู่เพื่อการจัดส่ง</h4>
                                        </div>
                                        <div className="formGroupall">


                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <label htmlFor="name">ชื่อ-นามสกุล</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="กรุณาระบุชื่อของคุณ"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="name">เบอร์โทรศัพท์</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="กรุณาระบุเบอร์โทรศัพท์ของคุณ"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="name">ที่อยู่การจัดส่ง</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="กรุณาระบุบ้านเลขที่ ถนน/ซอย/ชื่ออาคาร"/>
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
                                                    <input type="text" className="form-control"
                                                        placeholder="กรุณาระบุรหัสไปรษณีย์"/>
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col-md-12">
                                                    <label htmlFor="name">โปรดเลือกประเภทสถานที่จัดส่ง</label>
                                                    <div className="selectcatadds">
                                                        <li>
                                                            <input type="radio" className="btn-check" name="options"
                                                                id="option1" autoComplete="off" defaultChecked/>
                                                            <label className="btn btn-secondary"
                                                                htmlFor="option1">ที่บ้าน</label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="btn-check" name="options"
                                                                id="option2" autoComplete="off"/>
                                                            <label className="btn btn-secondary"
                                                                htmlFor="option2">ที่ทำงาน</label>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <a href="#" className="btn btn-primary">บันทึกข้อมูล</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                                <div className="row mt-5">
                                    <div className="col">
                                        <div className="groupotable">
                                            <table className="table addresstable">
                                                <thead>
                                                    <tr>
                                                        <th>ชื่อ-นามสกุล</th>
                                                        <th>ที่อยู่</th>
                                                        <th>เบอร์โทร</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <label className="check-container"> เนตรทกาญ อ่อนน้อม
                                                                <input type="checkbox"/>
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <div className="tagadderss">ที่ทำงาน</div> <br/>

                                                            146/82-83 ซอย ลาดพร้าว 122 ลาดพร้าว <br/>
                                                            แขวง พลับพลา เขต วังทองหลาง <br/>
                                                            กรุงเทพมหานคร 10310

                                                        </td>
                                                        <td>0814499488</td>
                                                        <td>
                                                            <a href="#" className="linkud">แก้ไข</a> <br/>
                                                            <a href="#"
                                                                className="btn btn-default disabled">ตั้งเป็นค่าเริ่มต้น</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="check-container"> เนตรทกาญ อ่อนน้อม
                                                                <input type="checkbox"/>
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <div className="tagadderss">ที่ทำงาน</div> <br/>

                                                            146/82-83 ซอย ลาดพร้าว 122 ลาดพร้าว <br/>
                                                            แขวง พลับพลา เขต วังทองหลาง <br/>
                                                            กรุงเทพมหานคร 10310

                                                        </td>
                                                        <td>0814499488</td>
                                                        <td>
                                                            <a href="#" className="linkud">แก้ไข</a> <a href="#"
                                                                className="linkud">ลบ</a> <br/>
                                                            <a href="#" className="btn btn-default-press">ตั้งเป็นค่าเริ่มต้น</a>
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
                                            <div className="tagadderss">ที่ทำงาน</div> <br/>
                                            <b>เนตรทกาญ อ่อนน้อม</b> <br/>
                                            146/82-83 ซอย ลาดพร้าว 122 ลาดพร้าว <br/>
                                            แขวง พลับพลา เขต วังทองหลาง <br/>
                                            กรุงเทพมหานคร 10310 <br/>
                                            Tel : 0814499488 <br/><br/>
                                            <a href="#" className="linkud">แก้ไข</a> 
                                            <br/><br/>
                                            <a href="#" className="btn btn-default disabled">ตั้งเป็นค่าเริ่มต้น</a>
                                        </div>

                                    </div>
                                    <div className="col-12 col-md-6">
                                    <div className="borderbox">
                                            <div className="tagadderss">ที่ทำงาน</div> <br/>
                                            <b>เนตรทกาญ อ่อนน้อม</b> <br/>
                                            146/82-83 ซอย ลาดพร้าว 122 ลาดพร้าว <br/>
                                            แขวง พลับพลา เขต วังทองหลาง <br/>
                                            กรุงเทพมหานคร 10310 <br/>
                                            Tel : 0814499488 <br/><br/>
                                            <a href="#" className="linkud">แก้ไข</a> <a href="#" className="linkud">ลบ</a>
                                            <br/><br/>
                                            <a href="#" className="btn btn-default-press">ตั้งเป็นค่าเริ่มต้น</a>
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
