import db from "../db/conectdb.js";

// Lấy danh sách hãng
export const getBrands = (req, res) => {
  db.query("SELECT * FROM hang", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Thêm hãng mới
export const addBrand = (req, res) => {
  const { ten_hang } = req.body;
  db.query("INSERT INTO hang (ten_hang) VALUES (?)", [ten_hang], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Thêm hãng thành công!", id: result.insertId });
  });
};
