import React from "react";
import "../../style/cart.css"

const CartPage = () => {
  return (
    <>
      {/* Header */}
      <section id="header">
        <header className="site-header">
          <div className="header-container">
            <a href="#" className="logo">
              <img
                src="/assets/1b26f06cfc31998bfb34742de83aaaf283f20b0a.png"
                alt="CoreLab Logo"
              />
            </a>

            <button className="header-button category-button">
              <img src="/assets/320_454.svg" alt="Category Icon" />
              <span>Danh mục</span>
              <img src="/assets/320_460.svg" alt="Dropdown Arrow" />
            </button>

            <button className="header-button location-button">
              <img src="/assets/320_463.svg" alt="Location Icon" />
              <span className="location-text">
                Xem giá tại <strong>Hồ Chí Minh</strong>
              </span>
              <img src="/assets/320_471.svg" alt="Dropdown Arrow" />
            </button>

            <div className="search-bar">
              <img
                src="/assets/320_478.svg"
                alt="Search Icon"
                className="search-icon"
              />
              <input type="text" placeholder="Bạn muốn mua gì hôm nay?" />
              <button className="clear-search-btn">×</button>
            </div>

            <button className="header-button login-button">
              <span>Đăng nhập</span>
              <img src="/assets/320_490.svg" alt="Login Icon" />
            </button>

            <a href="#" className="cart-link">
              <img src="/assets/320_494.svg" alt="Cart Icon" />
              <span>Giỏ hàng</span>
            </a>
          </div>
        </header>
      </section>

      {/* Cart Section */}
      <section id="cart" className="cart-section">
        <div className="container">
          <h1 className="cart-title">Giỏ hàng của Bạn</h1>
          <div className="cart-layout">
            <div className="cart-items">
              <div className="cart-items-header">
                <div className="col-image">Ảnh</div>
                <div className="col-product">Tên sản phẩm</div>
                <div className="col-price">Giá</div>
                <div className="col-quantity">Số lượng</div>
                <div className="col-total">Thành tiền</div>
                <div className="col-action">Thao tác</div>
              </div>

              {/* Các sản phẩm */}
              <div className="cart-item">
                <div className="col-image">
                  <span>Ảnh</span>
                </div>
                <div className="col-product">Laptop ABC</div>
                <div className="col-price">14.000.000 VNĐ</div>
                <div className="col-quantity">1</div>
                <div className="col-total">14.000.000 VNĐ</div>
                <div className="col-action">
                  <button className="remove-btn">Xoá</button>
                </div>
              </div>

              <div className="cart-item">
                <div className="col-image">
                  <span>Ảnh</span>
                </div>
                <div className="col-product">Điện thoại Samsung</div>
                <div className="col-price">7.000.000 VNĐ</div>
                <div className="col-quantity">3</div>
                <div className="col-total">21.000.000 VNĐ</div>
                <div className="col-action">
                  <button className="remove-btn">Xoá</button>
                </div>
              </div>

              <div className="cart-item">
                <div className="col-image">
                  <span>Ảnh</span>
                </div>
                <div className="col-product">Iphone 17</div>
                <div className="col-price">32.000.000 VNĐ</div>
                <div className="col-quantity">1</div>
                <div className="col-total">32.000.000 VNĐ</div>
                <div className="col-action">
                  <button className="remove-btn">Xoá</button>
                </div>
              </div>
            </div>

            <aside className="order-summary">
              <h2 className="summary-title">Tổng đơn hàng</h2>
              <hr className="summary-divider" />
              <p className="promo-label">Nhập mã giảm giá</p>
              <form className="promo-form">
                <input type="text" className="promo-input" placeholder="" />
                <button type="submit" className="promo-submit">
                  Nhập mã
                </button>
              </form>
              <div className="price-details">
                <p>
                  <span>Thành tiền:</span>{" "}
                  <strong>67.000.000 VNĐ</strong>
                </p>
                <p>
                  <span>Phí giao hàng:</span>{" "}
                  <strong>50.000 VNĐ</strong>
                </p>
                <p>
                  <span>Tổng tiền:</span>{" "}
                  <strong>67.050.000 VNĐ</strong>
                </p>
              </div>
              <button className="checkout-btn">Thanh toán</button>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="footer">
        <footer className="site-footer">
          <div className="footer-top">
            <div className="container">
              <div className="footer-grid">
                <div className="footer-col">
                  <h3 className="footer-title">
                    Tổng đài hỗ trợ miễn phí
                  </h3>
                  <p>
                    Mua hàng - bảo hành{" "}
                    <a href="tel:18002097">
                      <strong>1800.2097</strong>
                    </a>{" "}
                    (7h30 - 22h00)
                  </p>
                  <p>
                    Khiếu nại{" "}
                    <a href="tel:18002063">
                      <strong>1800.2063</strong>
                    </a>{" "}
                    (8h00 - 21h30)
                  </p>
                  <h3 className="footer-title">
                    Phương thức thanh toán
                  </h3>
                  <ul className="payment-methods">
                    <li>
                      <img
                        src="https://cdn2.cellphones.com.vn/x35,webp,q100/media/logo/payment/vnpay-logo.png"
                        alt="VNPAY"
                      />
                    </li>
                    <li>
                      <img
                        src="https://cdn2.cellphones.com.vn/x35,webp,q100/media/logo/payment/moca-logo.png"
                        alt="Moca"
                      />
                    </li>
                    <li>
                      <img
                        src="https://cdn2.cellphones.com.vn/x35,webp,q100/media/logo/payment/momo-logo.png"
                        alt="MoMo"
                      />
                    </li>
                    <li>
                      <img
                        src="https://cdn2.cellphones.com.vn/x35,webp,q100/media/logo/payment/kredivo-logo.png"
                        alt="Kredivo"
                      />
                    </li>
                    <li>
                      <img
                        src="https://cdn2.cellphones.com.vn/x35,webp,q100/media/logo/payment/zalopay-logo.png"
                        alt="ZaloPay"
                      />
                    </li>
                    <li>
                      <img
                        src="https://cdn2.cellphones.com.vn/x35,webp,q100/media/logo/payment/fundiin-logo.png"
                        alt="Fundiin"
                      />
                    </li>
                  </ul>
                </div>
                {/* Các cột footer còn lại giữ nguyên như HTML của bạn */}
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default CartPage;
