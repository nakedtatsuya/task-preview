import {Task} from "../types/task-schema";
import { readFileSync } from 'fs';
import commentJson from 'comment-json';

export const readProject = (projectPath: string): Task => {
  const fileContent = readFileSync(projectPath, 'utf-8');
  const jsonData = commentJson.parse(fileContent);
  return jsonData as unknown as Task;
}
