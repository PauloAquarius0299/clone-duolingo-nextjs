import express from 'express';
import courseRoutes from './routes/courseRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', courseRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
