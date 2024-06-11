import { test, expect } from '@playwright/test';
import sqlite3 from 'sqlite3';
import express from 'express';
import issueRoutes from '../Routes/issueRoutes';

const db = new sqlite3.Database(':memory:');

const app = express();
app.use(express.json());
app.use('/api/issues', issueRoutes);

test.beforeAll(async () => {
  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS issues (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT)");
  });
  app.listen(8000, () => {
    console.log('Server is running on port 8000');
  });
});

test.afterAll(async () => {
  db.serialize(() => {
    db.run("DROP TABLE IF EXISTS issues");
    db.close();
  });
});

test.describe('Issue API', () => {
  let issueId: number;

  test('should create a new issue', async ({ request }) => {
    const response = await request.post('/api/issues', {
      data: { title: 'Test Issue', description: 'Test Description' },
    });
    
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.title).toBe('Test Issue');
    expect(responseBody.description).toBe('Test Description');
    
    issueId = responseBody.id;
  });

  test('should get all issues', async ({ request }) => {
    const response = await request.get('/api/issues');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBeTruthy();
  });

  test('should update an issue', async ({ request }) => {
    const response = await request.put(`/api/issues/${issueId}`, {
      data: { title: 'Updated Issue', description: 'Updated Description' },
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.title).toBe('Updated Issue');
    expect(responseBody.description).toBe('Updated Description');
  });

  test('should delete an issue', async ({ request }) => {
    const response = await request.delete(`/api/issues/${issueId}`);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('message', 'Issue deleted successfully');
  });
});
