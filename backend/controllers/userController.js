import db from "../db/conectdb.js";

// Lấy tất cả user
export const getUsers = (req, res) => {
  db.query("SELECT * FROM tai_khoan", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Lấy 1 user theo ID
export const getUserById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM tai_khoan WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "Không tìm thấy user" });
    res.json(results[0]);
  });
};

//  Thêm user
export const createUser = (req, res) => {
  const { ten, email, mat_khau, dien_thoai, dia_chi, vai_tro, trang_thai, anh } = req.body;

  const sql = `
    INSERT INTO tai_khoan (ten, email, mat_khau, dien_thoai, dia_chi, vai_tro, trang_thai, anh)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [ten, email, mat_khau, dien_thoai, dia_chi, vai_tro, trang_thai, anh], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Thêm user thành công", id: result.insertId });
  });
};

//  Sửa user
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { ten, email, mat_khau, dien_thoai, dia_chi, vai_tro, trang_thai, anh } = req.body;

  const sql = `
    UPDATE tai_khoan
    SET ten=?, email=?, mat_khau=?, dien_thoai=?, dia_chi=?, vai_tro=?, trang_thai=?, anh=?
    WHERE id=?
  `;
  db.query(sql, [ten, email, mat_khau, dien_thoai, dia_chi, vai_tro, trang_thai, anh, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Cập nhật user thành công" });
  });
};

//  Xóa user
export const deleteUser = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM tai_khoan WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Xóa user thành công" });
  });
};
