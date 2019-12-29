import { Skill } from './skill';

export class Task {
  taskId: number;
  name: string;
  startTime: Date;
  finishTime: Date;
  skills: Skill[];
}
