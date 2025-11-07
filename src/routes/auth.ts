import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (password.length < 6) {
    return res.status(401).json({ error: "Invalid password" });
  }

  return res.status(200).json({ success: true });
});

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (password.length < 6) {
    return res.status(401).json({ error: "Invalid password" });
  }

  return res.status(200).json({ success: true });
});

router.post("/register3rdparty", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (password.length < 6) {
    return res.status(401).json({ error: "Invalid password" });
  }

  return res.status(200).json({ success: true });
});

router.post("/register4th", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (password.length < 6) {
    return res.status(401).json({ error: "Invalid password" });
  }

  return res.status(200).json({ success: true });
});

router.post("/register5th", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (password.length < 6) {
    return res.status(401).json({ error: "Invalid password" });
  }

  return res.status(200).json({ success: true });
});

router.post("/register6th", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (password.length < 6) {
    return res.status(401).json({ error: "Invalid password" });
  }

  return res.status(200).json({ success: true });
});

router.post("/register7th", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (password.length < 6) {
    return res.status(401).json({ error: "Invalid password" });
  }

  return res.status(200).json({ success: true });
});

export default router;
