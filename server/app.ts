import express from 'express';
import issueRoutes from './Routes/issueRoutes';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
// routs
app.use('/api/issues', issueRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
