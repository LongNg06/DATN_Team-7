import db from "../db/conectdb.js";

export const getProducts = (req, res) => {
  db.query("SELECT * FROM san_pham", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
export const getOneProducts = (req, res) => {
  db.query("SELECT * FROM san_pham WHERE id = ?", [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};
export const addProduct = (req, res) => {
  const { ten_san_pham, gia } = req.body;
  db.query(
    "INSERT INTO san_pham (ten_san_pham, gia) VALUES (?, ?)",
    [ten_san_pham, gia],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "✅ Thêm sản phẩm thành công!", id: result.insertId });
    }
  );
};
