import express from 'express';
import { createIssue, getIssues, updateIssue, deleteIssue } from '../Controllers/issueController';

const router = express.Router();

router.post('/', createIssue);
router.get('/', getIssues);
router.put('/:id', updateIssue);
router.delete('/:id', deleteIssue);

export default router;
