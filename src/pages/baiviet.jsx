import React from "react";
import "../../style/baiviet.css" 
const BaiViet = ({ ASSET_PATH = "/assets" }) => {
  return (
    <section id="section-news" className="news-section">
      <div className="container">
        <h1 className="section-title">BÀI VIẾT</h1>
        <div className="news-layout">
          <main className="main-content">
            <div className="article-list">

              <article className="article-card">
                <img
                  src={`${ASSET_PATH}/fa6d744eb20e1e8bf85f7a175565ef27d18083fe.png`}
                  alt="Bai Viet 1"
                  className="article-image"
                />
                <div className="article-text-content">
                  <h2 className="article-title">1. Laptop gaming 2025 – Hiệu năng mạnh mẽ, thiết kế mỏng nhẹ</h2>
                  <p className="article-date">12/01/2025</p>
                  <p className="article-excerpt">
                    Các hãng laptop như ASUS, MSI, và Acer đang chạy đua ra mắt dòng laptop gaming mới sử dụng GPU RTX 50-series cùng chip Intel Gen 15. Không chỉ nâng hiệu năng đáng kể, thiết kế năm nay còn mỏng nhẹ hơn, giúp game thủ dễ dàng mang theo mà không mất đi sức mạnh xử lý.
                  </p>
                  <a href="#" className="read-more-btn">Xem thêm &gt;</a>
                </div>
              </article>

              <article className="article-card">
                <img
                  src={`${ASSET_PATH}/21d345c44916e035d53dc66541f02c377fb06d21.png`}
                  alt="Bai Viet 2"
                  className="article-image"
                />
                <div className="article-text-content">
                  <h2 className="article-title">2. Laptop học tập dưới 15 triệu đáng mua nhất hiện nay</h2>
                  <p className="article-date">28/02/2025</p>
                  <p className="article-excerpt">
                    Sau khi ra mắt chiếc smartphone cực mạnh Mate 8 với chip Kirin 950 thì mới đây, hãng smartphone hàng đầu Trung Quốc Huawei tiếp tục đăng quảng cáo về một smartphone mới với camera rất độc đáo.
                  </p>
                  <a href="#" className="read-more-btn">Xem thêm &gt;</a>
                </div>
              </article>

              <article className="article-card">
                <img
                  src={`${ASSET_PATH}/4257377d7cb2faa23592c2d30b4231f5d6754ca7.png`}
                  alt="Bai Viet 3"
                  className="article-image"
                />
                <div className="article-text-content">
                  <h2 className="article-title">iPhone 6c giá rẻ tiếp tục xuất hiện</h2>
                  <p className="article-date">8/4/2024</p>
                  <p className="article-excerpt">
                    Nếu bạn là sinh viên hoặc nhân viên văn phòng, những mẫu laptop như ASUS Vivobook, HP Pavilion hoặc Acer Aspire 5 đang được đánh giá cao nhờ mức giá hợp lý, hiệu năng ổn định, và pin sử dụng lên đến 8 tiếng liên tục.
                  </p>
                  <a href="#" className="read-more-btn">Xem thêm &gt;</a>
                </div>
              </article>

              <article className="article-card">
                <img
                  src={`${ASSET_PATH}/52fbb8192bc5da679665d721238848756847fae9.png`}
                  alt="Bai Viet 4"
                  className="article-image"
                />
                <div className="article-text-content">
                  <h2 className="article-title">3. Cách chọn laptop đồ họa phù hợp cho designer</h2>
                  <p className="article-date">10/03/2025</p>
                  <p className="article-excerpt">
                   Khi chọn laptop cho thiết kế đồ họa, CPU và GPU là yếu tố then chốt. Bạn nên ưu tiên các máy có card đồ họa rời như NVIDIA RTX hoặc Radeon, RAM từ 16GB trở lên và màn hình có độ phủ màu sRGB trên 100% để đảm bảo độ chính xác hình ảnh.
                  </p>
                  <a href="#" className="read-more-btn">Xem thêm &gt;</a>
                </div>
              </article>

              <article className="article-card">
                <img
                  src={`${ASSET_PATH}/a0b7201a456efab776f4ed9dd22f45d38bde67f2.png`}
                  alt="Bai Viet 4"
                  className="article-image"
                />
                <div className="article-text-content">
                  <h2 className="article-title">4. MacBook M4 sắp ra mắt – Nâng cấp lớn về pin và màn hình</h2>
                  <p className="article-date">05/05/2025</p>
                  <p className="article-excerpt">
                   Apple được cho là sẽ ra mắt MacBook Air và MacBook Pro dùng chip M4 với hiệu năng vượt trội và khả năng tiết kiệm điện tốt hơn 30%. Ngoài ra, màn hình mini-LED thế hệ mới cũng giúp hiển thị sắc nét và tiết kiệm pin đáng kể.
                  </p>
                  <a href="#" className="read-more-btn">Xem thêm &gt;</a>
                </div>
              </article>

  <article className="article-card">
                <img
                  src={`${ASSET_PATH}/a0b7201a456efab776f4ed9dd22f45d38bde67f2.png`}
                  alt="Bai Viet 5"
                  className="article-image"
                />
                <div className="article-text-content">
                  <h2 className="article-title">5. Kinh nghiệm bảo quản laptop giúp tăng tuổi thọ</h2>
                  <p className="article-date">20/07/2025</p>
                  <p className="article-excerpt">
                Để laptop hoạt động bền bỉ, người dùng nên thường xuyên vệ sinh khe tản nhiệt, không sử dụng trên chăn hoặc gối, và hạn chế sạc qua đêm. Ngoài ra, nên cập nhật driver định kỳ để hệ thống hoạt động ổn định hơn.
                  </p>
                  <a href="#" className="read-more-btn">Xem thêm &gt;</a>
                </div>
              </article>
            </div>
          </main>

          <aside className="sidebar">
            <div className="sidebar-widget">
              <h3 className="sidebar-title">QUẢNG CÁO</h3>
              <a href="#" className="ad-link">
                <img
                  src={`${ASSET_PATH}/42fdafaf95ca8ecb29fc3f9a9e02ab3025a0732c.png`}
                  alt="Quảng cáo 1"
                  className="sidebar-image"
                />
              </a>
              <a href="#" className="ad-link">
                <img
                  src={`${ASSET_PATH}/e39693f28bb72b9cf6b60dcb3876b9ef613b881f.png`}
                  alt="Quảng cáo 2"
                  className="sidebar-image"
                />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BaiViet;