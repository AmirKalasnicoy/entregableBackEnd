const validateProduct = (req, res, next) => {
    const { title, price, stock, category } = req.body;
    if (!title || typeof title !== "string") {
      return res.status(400).json({ error: "Invalid or missing 'title'" });
    }
    if (!price || typeof price !== "number") {
      return res.status(400).json({ error: "Invalid or missing 'price'" });
    }
    if (!stock || typeof stock !== "number") {
      return res.status(400).json({ error: "Invalid or missing 'stock'" });
    }
    if (!category || typeof category !== "string") {
      return res.status(400).json({ error: "Invalid or missing 'category'" });
    }
  };
  
  export default validateProduct;
  