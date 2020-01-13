import { Skill } from './skill';

export class Task {
  taskId: number;
  name: string;
  startTime: Date | string;
  finishTime: Date | string;
  skills: Skill[];
}
