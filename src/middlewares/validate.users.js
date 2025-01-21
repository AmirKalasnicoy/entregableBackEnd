const validateUser = (req, res, next) => {
    const { name, email, password, age } = req.body;
    if (!name || typeof name !== "string") {
      return res.status(400).json({ error: "Invalid or missing 'name'" });
    }
    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Invalid or missing 'email'" });
    }
    if (!password || typeof password !== "string") {
      return res.status(400).json({ error: "Invalid or missing 'password'" });
    }
    if (!age || typeof age !== "number") {
      return res.status(400).json({ error: "Invalid or missing 'age'" });
    }
  };
  
  export default validateUser;
  