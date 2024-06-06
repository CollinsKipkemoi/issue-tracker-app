import { Component } from '@angular/core';
import {IssueFormComponent} from "../issue-form/issue-form.component";

@Component({
  selector: 'app-new-issue',
  standalone: true,
  imports: [
    IssueFormComponent
  ],
  templateUrl: './new-issue.component.html',
  styleUrl: './new-issue.component.css'
})
export class NewIssueComponent {

}
