import db from "../db/conectdb.js";

export const getPosts = (req, res) => {
  db.query("SELECT * FROM bai_viet ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
export const getPostById = (req, res) => {
  const { id } = req.params;
  // Kiểm tra ID
  if (!id || isNaN(id) || id <= 0) {
    return res.status(400).json({ 
      error: "ID bài viết không hợp lệ" 
    });
  }
  db.query(`
    SELECT 
      bv.id, 
      bv.tieu_de, 
      bv.khoang_trong, 
      bv.noi_dung, 
      bv.trang_thai, 
      bv.thumbnail, 
      bv.hinh,
      bv.id_danhmuc_baiviet,
      bv.id_tacgia,
      dmb.ten as ten_danhmuc,
      tk.ten as ten_tacgia
    FROM bai_viet bv
    LEFT JOIN danhmuc_baiviet dmb ON bv.id_danhmuc_baiviet = dmb.id
    LEFT JOIN tai_khoan tk ON bv.id_tacgia = tk.id
    WHERE bv.id = ?
  `, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) {
      return res.status(404).json({ 
        error: "Không tìm thấy bài viết với ID này" 
      });
    }
    res.json(results[0]);
  });
};
export const addPost = (req, res) => {
  const { 
    tieu_de, 
    khoang_trong, 
    noi_dung, 
    trang_thai, 
    thumbnail, 
    id_danhmuc_baiviet, 
    id_tacgia, 
    hinh 
  } = req.body;
  // Kiểm tra dữ liệu
  if (!tieu_de || !khoang_trong || !noi_dung || !thumbnail || !id_danhmuc_baiviet || !id_tacgia || !hinh) {
    return res.status(400).json({ 
      error: "Tất cả các trường đều bắt buộc: tieu_de, khoang_trong, noi_dung, trang_thai, thumbnail, id_danhmuc_baiviet, id_tacgia, hinh" 
    });
  }
  // Kiểm tra độ dài tiêu đề
  if (tieu_de.length > 100) {
    return res.status(400).json({ 
      error: "Tiêu đề không được vượt quá 100 ký tự" 
    });
  }
  // Kiểm tra danh mục và tác giả
  if (isNaN(id_danhmuc_baiviet) || id_danhmuc_baiviet <= 0) {
    return res.status(400).json({ 
      error: "danh mục bài viết không hợp lệ" 
    });
  }
  if (isNaN(id_tacgia) || id_tacgia <= 0) {
    return res.status(400).json({ 
      error: "tác giả không hợp lệ" 
    });
  }
  // Kiểm tra danh mục
  db.query("SELECT * FROM danhmuc_baiviet WHERE id = ?", [id_danhmuc_baiviet], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) {
      return res.status(404).json({ 
        error: "Không tìm thấy danh mục bài viết với ID này" 
      });
    }
    // Kiểm tra tác giả
    db.query("SELECT * FROM tai_khoan WHERE id = ?", [id_tacgia], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      
      if (results.length === 0) {
        return res.status(404).json({ 
          error: "Không tìm thấy tác giả với ID này" 
        });
      }

      //thêm bài viết
      const sql = `
        INSERT INTO bai_viet 
        (tieu_de, khoang_trong, noi_dung, trang_thai, thumbnail, id_danhmuc_baiviet, id_tacgia, hinh) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [
        tieu_de, 
        khoang_trong, 
        noi_dung, 
        trang_thai || 1, 
        thumbnail, 
        id_danhmuc_baiviet, 
        id_tacgia, 
        hinh
      ];

      db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ 
          message: "Bài viết đã được tạo thành công", 
          id: result.insertId 
        });
      });
    });
  });
};
export const updatePost = (req, res) => {
  const { id } = req.params;
  const { 
    tieu_de, 
    khoang_trong, 
    noi_dung, 
    trang_thai, 
    thumbnail, 
    id_danhmuc_baiviet, 
    id_tacgia, 
    hinh 
  } = req.body;
  // Kiểm tra ID
  if (!id || isNaN(id) || id <= 0) {
    return res.status(400).json({ 
      error: "ID bài viết không hợp lệ" 
    });
  }
  // Kiểm tra dữ liệu
  if (!tieu_de || !khoang_trong || !noi_dung || !thumbnail || !id_danhmuc_baiviet || !id_tacgia || !hinh) {
    return res.status(400).json({ 
      error: "Tất cả các trường đều bắt buộc: tieu_de, khoang_trong, noi_dung, trang_thai, thumbnail, id_danhmuc_baiviet, id_tacgia, hinh" 
    });
  }
  // Kiểm tra danh mục và tác giả
  if (isNaN(id_danhmuc_baiviet) || id_danhmuc_baiviet <= 0) {
    return res.status(400).json({ 
      error: "danh mục bài viết không hợp lệ" 
    });
  }
  if (isNaN(id_tacgia) || id_tacgia <= 0) {
    return res.status(400).json({ 
      error: "tác giả không hợp lệ" 
    });
  }
  // Kiểm tra bài viết
  db.query("SELECT * FROM bai_viet WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    
    if (results.length === 0) {
      return res.status(404).json({ 
        error: "Không tìm thấy bài viết với ID này" 
      });
    }
    // Kiểm tra danh mục
    db.query("SELECT * FROM danhmuc_baiviet WHERE id = ?", [id_danhmuc_baiviet], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      
      if (results.length === 0) {
        return res.status(404).json({ 
          error: "Không tìm thấy danh mục bài viết với ID này" 
        });
      }
      // Kiểm tra tác giả
      db.query("SELECT * FROM tai_khoan WHERE id = ?", [id_tacgia], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        
        if (results.length === 0) {
          return res.status(404).json({ 
            error: "Không tìm thấy tác giả với ID này" 
          });
        }
        //Cập nhật
        const sql = `
          UPDATE bai_viet 
          SET tieu_de = ?, khoang_trong = ?, noi_dung = ?, trang_thai = ?, 
              thumbnail = ?, id_danhmuc_baiviet = ?, id_tacgia = ?, hinh = ?
          WHERE id = ?
        `;
        const values = [
          tieu_de, 
          khoang_trong, 
          noi_dung, 
          trang_thai || 1, 
          thumbnail, 
          id_danhmuc_baiviet, 
          id_tacgia, 
          hinh,
          id
        ];

        db.query(sql, values, (err, result) => {
          if (err) return res.status(500).json({ error: err.message });
          
          if (result.affectedRows === 0) {
            return res.status(404).json({ 
              error: "Không thể cập nhật bài viết" 
            });
          }
          
          res.json({ 
            message: "Bài viết đã được cập nhật thành công"
          });
        });
      });
    });
  });
};
export const deletePost = (req, res) => {
  const { id } = req.params;

  // Kiểm tra ID
  if (!id || isNaN(id) || id <= 0) {
    return res.status(400).json({ 
      error: "ID bài viết không hợp lệ" 
    });
  }

  // Kiểm tra tồn tại
  db.query("SELECT * FROM bai_viet WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    
    if (results.length === 0) {
      return res.status(404).json({ 
        error: "Không tìm thấy bài viết với ID này" 
      });
    }
    //Xóa
    db.query("DELETE FROM bai_viet WHERE id = ?", [id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ 
          error: "Không thể xóa bài viết" 
        });
      }
      res.json({ 
        message: "Bài viết đã được xóa thành công", 
      });
    });
  });
};