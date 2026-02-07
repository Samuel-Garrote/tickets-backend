export function validateTicket(req, res, next) {
    const { title, description } = req.body;

    if (!title || title.trim() === '') {
    return res.status(400).json({ message: "Title is required" });
    }

    if (!description || description.trim().length < 5) {
    return res.status(400).json({ message: "Description must be at least 5 characters" });
    }

  next(); // todo bien, continuar
}
