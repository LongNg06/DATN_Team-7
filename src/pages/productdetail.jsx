import React, { useEffect, useState } from "react";
import "../../style/productdetail.css";
import { Link } from "react-router-dom";

function ProductDetail({ ASSET_PATH = "/assets" }) {
  const [products, setProducts] = useState([]);     // nơi lưu dữ liệu
  const [loading, setLoading] = useState(true);     // trạng thái tải
  const [error, setError] = useState(null);         // bắt lỗi nếu có

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

  // Giả sử API trả về danh sách, ta hiển thị sản phẩm đầu tiên làm ví dụ
  const product = products[0];

  return (
    <>
     

      <section id="section-product" className="product-section">
        <div className="container product-container">
          {/* Ảnh sản phẩm */}
          <div className="product-gallery">
            <img
              src={product?.image || `${ASSET_PATH}/bf77cc37aa6a54dceda1d845771b1a6b53524624.png`}
              alt={product?.sanpham || "Sản phẩm"}
            />
          </div>

          {/* Thông tin sản phẩm */}
          <div className="product-details">
            <h1 className="product-title">
              {product?.sanpham || "Tên sản phẩm"}
            </h1>
            <p className="product-rating">⭐ ⭐ ⭐ ⭐ ⭐ 6 đánh giá</p>

            <div className="product-options-grid">
              <button className="option-button active">
                <span>{product?.dungluong || "256GB"}</span>
                <span>{"39.000.000đ"}</span>
                
              </button>
              <button className="option-button active">
                <span>{product?.dungluong || "256GB"}</span>
                <span>{"39.000.000đ"}</span>
                
              </button>
              <button className="option-button active">
                <span>{product?.dungluong || "512GB"}</span>
                <span>{"46.900.000đ"}</span>
                
              </button>
              <button className="option-button active">
                <span>{product?.dungluong || "512GB"}</span>
                <span>{"46.900.000đ"}</span>
                
              </button>
            </div>

            <p className="color-selection-title">Chọn màu bạn muốn xem</p>
            <div className="color-options">
              {["Xanh", "Cam", "Bạc", "Tím"].map((color, index) => (
                <button className="color-swatch" key={index}>
                  <img
                    src={`${ASSET_PATH}/968845f0a14b8dd8f9c4504d810abc6294a87b3a.png`}
                 
                  />
                  <div className="color-info">
                    <span className="color-name">{color}</span>
                    <span className="color-price">{product?.gia || "39.000.000đ"}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="price-summary">
              <span className="final-price">{product?.gia || "39.000.000đ"}</span>
              <div className="divider"></div>
              <p className="installment-info">
                Chỉ cần trả trước:<br />
                <strong>11.999.000đ</strong>
              </p>
            </div>

            <div className="promotions">
              <h3 className="promo-title">Khuyến mãi</h3>
              <p className="promo-main">
                Cam kết hàng Chính Hãng Việt Nam - Mới 100% - Nguyên Seal
              </p>
              <ul className="promo-list">
                <li>
                  Ưu đãi <strong>Giá Bán Đặc biệt</strong> khi áp dụng chương trình cũ đổi mới:
                  <span className="promo-highlight"> Rẻ hơn 1 triệu</span>
                </li>
                <li><strong>Ưu đãi khi mua hàng:</strong></li>
                <li>
                  Thu cũ đổi mới <span className="promo-highlight-percent">90%</span> giá trị máy
                </li>
              </ul>
            </div>

            <div className="product-actions">
              <div className="quantity-stepper">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
             <Link to="/cart" className="btn-add-to-cart">
  Thêm vào giỏ
</Link>

            </div>
          </div>
        </div>
      </section>

      {/* Bình luận */}
      <section id="section-comments" className="comments-section">
        <div className="container">
          <h2 className="comments-title">
            Bình luận về {product?.sanpham || "Sản phẩm"}
          </h2>
          <div className="comments-wrapper">
            <div className="user-comments">
              <h3>Bình luận từ người dùng khác</h3>
              <article className="comment-item">
                <p className="comment-author">Người dùng 1</p>
                <p className="comment-date">10/12/2024 08:10</p>
                <p className="comment-text">Máy đẹp, giao hàng nhanh, rất hài lòng!</p>
              </article>
              <hr className="comment-divider" />
              <article className="comment-item">
                <p className="comment-author">Người dùng 2</p>
                <p className="comment-date">10/12/2024 08:10</p>
                <p className="comment-text">Chất lượng tốt, giá rẻ.</p>
              </article>
            </div>

            <div className="comment-form-container">
              <h3>Bình luận sản phẩm</h3>
              <form className="comment-form">
                <textarea placeholder="Viết bình luận về sản phẩm của bạn ..."></textarea>
                <button type="submit" className="btn-submit-comment">Gửi bình luận</button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default ProductDetail;
