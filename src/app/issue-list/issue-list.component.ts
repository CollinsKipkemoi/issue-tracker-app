import { Component, OnInit } from '@angular/core';
import { Issue } from "../issue";
import { JsonPipe, NgForOf } from "@angular/common";
import { StatusFilterComponent } from "../status-filter/status-filter.component";
import { NewIssueComponent } from "../new-issue/new-issue.component";
import { IssueFormComponent } from "../issue-form/issue-form.component";
import {IssueService} from "../issue.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [
    NgForOf,
    StatusFilterComponent,
    JsonPipe,
    NewIssueComponent,
    IssueFormComponent,
    RouterLink
  ],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit {

  status: string = 'DONE';
  filteredeIssues: Issue[] = []
  selectedIssue: Issue | null = null
  issues : Issue[] = []

constructor(private issueService: IssueService) {
}
  ngOnInit() {
    this.issues = this.issueService.getIssues()
    this.filterIssue()
  }

  filterIssue() {
    this.filteredeIssues = this.status === 'ALL' ? this.issues : this.issues.filter(issue => issue.status === this.status)
  }

  selectIssue(issue: Issue): void {
    this.selectedIssue = issue;
  }

  handleChangeStatus(newStatus: string): void {
    this.status = newStatus
    this.filterIssue()
  }

  handleSave(issue: Issue): void {
    if (this.selectedIssue != null) {
      Object.assign(this.selectedIssue, issue)
    }
    this.selectedIssue = null
  }
}
