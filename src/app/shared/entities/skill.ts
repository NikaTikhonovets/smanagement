import { Task } from './task';
import { Person } from './person';

export class Skill {
  skillId: number;
  name: string;
  type: string;
  tasks: Task[];
  persons: Person[];
}
