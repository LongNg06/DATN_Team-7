import db from "../db/conectdb.js";

// Lấy danh sách danh mục sản phẩm
export const getCategories = (req, res) => {
  db.query("SELECT * FROM danhmuc_sanpham", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Thêm danh mục mới
export const addCategory = (req, res) => {
  const { ten_danh_muc } = req.body;
  db.query("INSERT INTO danhmuc_sanpham (ten_danhmuc) VALUES (?)", [ten_danh_muc], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Thêm danh mục thành công!", id: result.insertId });
  });
};
