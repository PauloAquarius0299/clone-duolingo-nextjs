import express from 'express';
import { getCourses, createCourse } from '../controllers/courseController';

const router = express.Router();

router.get('/courses', async (req, res) => {
  try {
    const courses = await getCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/courses', async (req, res) => {
  const { title, imageSrc } = req.body;
  try {
    const newCourse = await createCourse(title, imageSrc);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
