import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Skill } from '../../../shared/entities/skill';
import { MatDialog } from '@angular/material';
import { SkillsService } from '../../../shared/services/skills.service';
import { DIALOG_DEFAULT_CONFIG } from '../../../shared/constants/dialog-config.const';
import { SkillDialogComponent } from '../dialogs/skill-dialog/skill-dialog.component';

@Component({
  selector: 'sm-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsPageComponent implements OnInit {
  public skills: Skill[];
  constructor(private matDialog: MatDialog,
              private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe((skills) => {
      this.skills = skills;
    });
  }

  public addSkill(): void {
    const dialogRef = this.matDialog.open(SkillDialogComponent, {
      ...DIALOG_DEFAULT_CONFIG,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.skillsService.addSkill(result).subscribe();
    });
  }
}
