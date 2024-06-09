import {Routes} from '@angular/router';
import {DetailComponent} from "./detail/detail.component";
import {IssueListComponent} from "./issue-list/issue-list.component";
import {NewIssueComponent} from "./new-issue/new-issue.component";
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
  {
    path : "",
    component : MainComponent
  },
  {
    path: 'issue/:id',
    component: DetailComponent
  },
  {
    path: 'issues/new',
    component: NewIssueComponent
  },
  {
    path: 'issues',
    component: IssueListComponent
  },
  {
    path : "detail",
    component : DetailComponent
  }
];
