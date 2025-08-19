import Newsletter from "../models/NewsLetter.js";

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    // check if email already exists
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.json({ success: true, message: "You are already subscribed!" });
    }

    await Newsletter.create({ email });

    res.json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
