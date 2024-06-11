import issueRepository from '../Repositories/issueRepository';
import Issue from '../Models/issueModel';

class IssueService {
  createIssue(issue: Omit<Issue, 'id'>, callback: (err: Error | null, issue?: Issue) => void) {
    issueRepository.create(issue, callback);
  }

  getIssues(callback: (err: Error | null, issues?: Issue[]) => void) {
    issueRepository.findAll(callback);
  }

  updateIssue(id: number, issue: Omit<Issue, 'id'>, callback: (err: Error | null, issue?: Issue) => void) {
    issueRepository.update(id, issue, callback);
  }

  deleteIssue(id: number, callback: (err: Error | null, id?: number) => void) {
    issueRepository.delete(id, callback);
  }
}

export default new IssueService();
