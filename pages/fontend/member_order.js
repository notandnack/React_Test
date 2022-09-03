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
                    <h1>รายการสั่งซื้อของฉัน</h1>
                  </div>
                  <div className="Cropscroll">
                    <div className="orderlist_slide select-display-slide mt-4">
                      <li className="active" rel="1">
                        <a href="#">ทั้งหมด</a>
                      </li>
                      <li rel="2">
                        <a href="#">ที่ต้องชำระ</a>
                      </li>
                      <li rel="3">
                        <a href="#">ที่ต้องจัดส่ง</a>
                      </li>
                      <li rel="4">
                        <a href="#">ที่ต้องได้รับ</a>
                      </li>
                      <li rel="5">
                        <a href="#">สำเร็จแล้ว</a>
                      </li>
                      <li rel="6">
                        <a href="#">ยกเลิกแล้ว</a>
                      </li>
                    </div>
                  </div>
                  <div className="search_top">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_51_533)">
                            <path
                              d="M23.7068 22.293L17.7378 16.324C19.3644 14.3346 20.1642 11.7961 19.9716 9.23359C19.7791 6.67106 18.609 4.28056 16.7034 2.55655C14.7977 0.832537 12.3024 -0.0930816 9.73342 -0.0288498C7.16447 0.035382 4.71849 1.08455 2.9014 2.90164C1.08431 4.71873 0.0351379 7.16472 -0.029094 9.73367C-0.0933258 12.3026 0.832293 14.798 2.5563 16.7036C4.28031 18.6092 6.67081 19.7793 9.23334 19.9719C11.7959 20.1644 14.3344 19.3647 16.3238 17.738L22.2928 23.707C22.4814 23.8892 22.734 23.99 22.9962 23.9877C23.2584 23.9854 23.5092 23.8803 23.6946 23.6948C23.88 23.5094 23.9852 23.2586 23.9875 22.9964C23.9897 22.7342 23.8889 22.4816 23.7068 22.293ZM9.99978 18C8.41753 18 6.87081 17.5308 5.55522 16.6518C4.23963 15.7727 3.21425 14.5233 2.60875 13.0615C2.00324 11.5997 1.84482 9.99115 2.1535 8.4393C2.46218 6.88746 3.22411 5.46199 4.34293 4.34317C5.46175 3.22435 6.88721 2.46243 8.43906 2.15374C9.99091 1.84506 11.5994 2.00349 13.0613 2.60899C14.5231 3.21449 15.7725 4.23987 16.6515 5.55546C17.5306 6.87106 17.9998 8.41778 17.9998 10C17.9974 12.121 17.1538 14.1545 15.654 15.6543C14.1542 17.154 12.1208 17.9976 9.99978 18Z"
                              fill="#2E6E65"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_51_533">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    className="display-slide mt-4"
                    rel="1"
                    style={{ display: "block" }}
                  >
                    {/* <?php for ($i = 1; $i <= 3; $i++) { ?> */}
                    <div className="borderbox">
                      <a href="member_order_detail.php">
                        <div className="row mb-3">
                          <div className="col-md-7">
                            <div className="shopname">
                              <i className="fi fi-rr-shop"></i> Cannabis for you
                            </div>
                          </div>
                          <div className="col-md-5 text-md-end">
                            <div className="status_delivery">
                              <i className="fi fi-rr-truck-side"></i>{" "}
                              พัสดุถูกจัดส่งสำเร็จแล้ว
                            </div>
                            <div className="status_order">สำเร็จแล้ว</div>
                          </div>
                        </div>
                        <div className="middleline"></div>
                        <div className="boxofproduct">
                          <div className="row">
                            <div className="col-md-3 text-center">
                              {/* <a href="#">
                                <img
                                  src="/template/images/product_img2.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </a> */}
                            </div>
                            <div className="col-md-6">
                              <div className="contentprd">
                                <div className="title">Something Blue</div>
                                (Full-Spectrum Cartridge) <br />
                                AbsoluteXtracts
                                <div className="weightno">1g</div>
                              </div>
                            </div>
                            <div className="col-md-3 text-md-end">฿500.00 </div>
                          </div>
                        </div>
                        <div className="middleline"></div>
                        <div className="boxofproduct">
                          <div className="row">
                            <div className="col-md-3 text-center">
                              {/* <a href="#">
                                <img
                                  src="/template/images/product_img2.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </a> */}
                            </div>
                            <div className="col-md-6">
                              <div className="contentprd">
                                <div className="title">Something Blue</div>
                                (Full-Spectrum Cartridge) <br />
                                AbsoluteXtracts
                                <div className="weightno">1g</div>
                              </div>
                            </div>
                            <div className="col-md-3 text-md-end">฿500.00 </div>
                          </div>
                        </div>
                        <div className="middleline"></div>
                        <div className="sumorder mt-4">
                          <div className="row">
                            <div className="col-md-6">
                              {/* <a
                                href="#"
                                className="btn btn-primary"
                                data-width="648"
                                data-height="650"
                                data-fancybox
                                data-src="#address"
                              >
                                <i className="bi bi-star-fill"></i> ให้คะแนน
                              </a>
                              <a href="#" className="btn btn-link">
                                ซื้ออีกครั้ง
                              </a> */}
                            </div>
                            <div className="col-md-6 text-md-end">
                              <h5>
                                ยอดคำสั่งซื้อทั้งหมด: <span>฿500.00</span>{" "}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* <?php } ?> */}
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
