import React from "react";

const Footer = () => {
  return (
    <div>
      <table bgcolor="#24272e" width="100%">
        <section class="footer clearfix py-4 mx-auto text-light">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h3>Hệ thống cửa hàng-Apple Mart</h3>
                <ul>
                  <li>80 Nguyễn Du, P. Bến Nghé, Quận 1, TP.HCM</li>
                  <li>291A Tô Hiến Thành, P. 13, Quận 10, TP.HCM</li>
                  <li>122A Phan Đăng Lưu, Phường 3, Quận Phú Nhuận, TP.HCM</li>
                  <li>254 Lê Văn Việt, P. Tăng Nhơn Phú A, Quận 9, TP.HCM</li>
                  <li>365 Cộng Hòa, P. 13, Quận Tân Bình, TP.HCM</li>
                </ul>
              </div>
              <div class="col-md-6">
                <h3>Liên hệ</h3>
                <ul>
                  <li>
                    <strong>Hotline</strong>: 079 313 3888
                  </li>
                  <li>
                    <strong>Email</strong>: applemart@gmail.com
                  </li>
                  <li>
                    <strong>FB</strong>: https://www.facebook.com/apple.mart
                  </li>
                  <li>
                    <strong>Giờ mở cửa</strong> : Thứ 2 – Chủ Nhật Hàng Tuần: Từ
                    9h00 đến 22h00
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="copyright clearfix py-2">
          <div class="container border-top border-light text-light">
            <div class="row">
              <div class=" text-center">
                Thiết kế bởi <strong>Nguyễn Thị Ngọc Kiều</strong>
              </div>
            </div>
          </div>
        </section>
      </table>
    </div>
  );
};

export default Footer;
