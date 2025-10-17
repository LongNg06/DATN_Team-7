import React, { useEffect, useState } from "react";
import "../../style/cart.css" 

function CartPage() {
  const [products, setProducts] = useState([]); // lưu dữ liệu
  const [loading, setLoading] = useState(true); // trạng thái tải
  const [error, setError] = useState(null); // lỗi nếu có

  // Gọi API lấy dữ liệu sản phẩm
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Lỗi server: " + res.status);
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <>
    

      {/* CART */}
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
              </div>

              {/* DỮ LIỆU TỪ API */}
              {products.map((p) => (
                <div className="cart-item" key={p.id}>
                  <div className="col-image">
                    <img
                      src={p.image || "/assets/default.png"}
                      
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="col-product">{p.sanpham}</div>
                  <div className="col-price">
                    {Number(p.gia).toLocaleString()} VNĐ
                  </div>
                  <div className="col-quantity">1</div>
                  <div className="col-total">
                    {Number(p.gia).toLocaleString()} VNĐ
                  </div>
                </div>
              ))}
            </div>

            {/* TỔNG ĐƠN */}
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

              {/* Tính tổng tiền */}
              <div className="price-details">
                <p>
                  <span>Thành tiền:</span>{" "}
                  <strong>
                    {products
                      .reduce((sum, p) => sum + Number(p.gia || 0), 0)
                      .toLocaleString()}{" "}
                    VNĐ
                  </strong>
                </p>
                <p>
                  <span>Phí giao hàng:</span> <strong>50.000 VNĐ</strong>
                </p>
                <p>
                  <span>Tổng tiền:</span>{" "}
                  <strong>
                    {(
                      products.reduce((sum, p) => sum + Number(p.gia || 0), 0) +
                      50000
                    ).toLocaleString()}{" "}
                    VNĐ
                  </strong>
                </p>
              </div>

              <button className="checkout-btn">Thanh toán</button>
            </aside>
          </div>
        </div>
      </section>

     
    </>
  );
}

export default CartPage;
