import db from "../db/conectdb.js";

export const getProducts = (req, res) => {
  db.query("SELECT * FROM san_pham", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
export const getOneProducts = (req, res) => {
  // Lấy thông tin sản phẩm
  db.query("SELECT * FROM san_pham WHERE id = ?", [req.params.id], (err, productResults) => {
    if (err) return res.status(500).json({ error: err.message });
    
    if (productResults.length === 0) {
      return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
    }
    
    const product = productResults[0];
    
    // Lấy danh sách hình ảnh của sản phẩm
    db.query("SELECT * FROM hinh_anh WHERE id_sanpham = ?", [req.params.id], (err, imageResults) => {
      if (err) return res.status(500).json({ error: err.message });
      
      // Thêm danh sách hình ảnh vào thông tin sản phẩm
      product.images = imageResults;
      
      res.json(product);
    });
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
