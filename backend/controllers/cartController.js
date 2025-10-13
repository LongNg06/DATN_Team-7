import db from "../db/conectdb.js";

//  Thêm giỏ hàng (khi người dùng đăng nhập mà chưa có giỏ)
export const createCart = (req, res) => {
  const { id_taikhoan } = req.body;
  if (!id_taikhoan) {
    return res.status(400).json({ error: "Thiếu id_taikhoan" });
  }

  db.query("INSERT INTO gio_hang (id_taikhoan) VALUES (?)", [id_taikhoan], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Tạo giỏ hàng thành công!", id_giohang: result.insertId });
  });
};

//  Thêm sản phẩm vào giỏ hàng
export const addToCart = (req, res) => {
  const { id_giohang, id_bienthe, soluong, gia } = req.body;
  if (!id_giohang || !id_bienthe || !soluong || !gia) {
    return res.status(400).json({ error: "Thiếu dữ liệu bắt buộc" });
  }

  const sql = `
    INSERT INTO chitiet_giohang (id_giohang, id_bienthe, soluong, gia)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [id_giohang, id_bienthe, soluong, gia], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Đã thêm sản phẩm vào giỏ hàng!", id_chitiet: result.insertId });
  });
};
