import db from '../dbConfig';
import Issue from '../Models/issueModel';

class IssueRepository {
  create(issue: Omit<Issue, 'id'>, callback: (err: Error | null, issue?: Issue) => void) {
    const { title, description } = issue;
    db.run("INSERT INTO issues (title, description) VALUES (?, ?)", [title, description], function (err) {
      if (err) {
        callback(err);
      } else {
        callback(null, new Issue(this.lastID, title, description));
      }
    });
  }

  findAll(callback: (err: Error | null, issues?: Issue[]) => void) {
    db.all("SELECT * FROM issues", (err, rows) => {
      if (err) {
        callback(err);
      } else {
        const issues = rows.map((row: any) => new Issue(row.id, row.title, row.description));
        callback(null, issues);
      }
    });
  }

  update(id: number, issue: Omit<Issue, 'id'>, callback: (err: Error | null, issue?: Issue) => void) {
    const { title, description } = issue;
    db.run("UPDATE issues SET title = ?, description = ? WHERE id = ?", [title, description, id], function (err) {
      if (err) {
        callback(err);
      } else {
        callback(null, new Issue(id, title, description));
      }
    });
  }

  delete(id: number, callback: (err: Error | null, id?: number) => void) {
    db.run("DELETE FROM issues WHERE id = ?", [id], function (err) {
      if (err) {
        callback(err);
      } else {
        callback(null, id);
      }
    });
  }
}

export default new IssueRepository();
