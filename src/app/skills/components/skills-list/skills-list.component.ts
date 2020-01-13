import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from '../../../shared/entities/skill';
import { SkillsService } from '../../../shared/services/skills.service';

@Component({
  selector: 'sm-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsListComponent {
  public displayedColumns: string[] = ['skillId', 'name', 'type', 'tasks', 'persons', 'actions'];
  public dataSource = [];
  @Input() set skills(currentSkills: Skill[]) {
    this.dataSource = currentSkills;
  }

  constructor(private skillsService: SkillsService) {}

  public removeSkill(skillId: number): void {
    this.skillsService.removeSkill(skillId).subscribe();
  }

  public editSkill(): void {

  }
}
