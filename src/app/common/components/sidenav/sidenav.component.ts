import { ChangeDetectionStrategy, Component } from '@angular/core';

interface RouteItem {
  label: string;
  url: string[];
  iconName: string;
}

const ROUTES: RouteItem[] = [
  {
    label: 'Users',
    url: ['users'],
    iconName: 'group'
  },
  {
    label: 'Tasks',
    url: ['tasks'],
    iconName: 'list'
  }
];

@Component({
  selector: 'sm-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  public routes: RouteItem[] = ROUTES;
  public isExpanded = false;
}
