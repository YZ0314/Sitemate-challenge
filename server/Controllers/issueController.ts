import { Request, Response } from 'express';
import issueService from '../Services/issueService';
import Issue from '../Models/issueModel';

// Create an Issue
const createIssue = (req: Request, res: Response) => {
  const issue: Omit<Issue, 'id'> = req.body;
  issueService.createIssue(issue, (err, newIssue) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log('Created:', newIssue);
    res.status(201).json(newIssue);
  });
};

// Get all Issues
const getIssues = (req: Request, res: Response) => {
  issueService.getIssues((err, issues) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(issues);
  });
};

// Update an Issue
const updateIssue = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const issue: Omit<Issue, 'id'> = req.body;
  issueService.updateIssue(id, issue, (err, updatedIssue) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log('Updated:', updatedIssue);
    res.status(200).json(updatedIssue);
  });
};

// Delete an Issue
const deleteIssue = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  issueService.deleteIssue(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log('Deleted:', id);
    res.status(200).json({ message: 'Issue deleted successfully', id });
  });
};

export { createIssue, getIssues, updateIssue, deleteIssue };
