import {Component, OnInit} from '@angular/core';
import {Issue} from "../issue";
import {JsonPipe, NgForOf} from "@angular/common";
import {StatusFilterComponent} from "../status-filter/status-filter.component";
import {NewIssueComponent} from "../new-issue/new-issue.component";

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [
    NgForOf,
    StatusFilterComponent,
    JsonPipe,
    NewIssueComponent
  ],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements  OnInit {
  issues: Issue[] = [
    {
      id: 1, title: 'Title1', description: 'Desc1', place: 'PCLab1', status: 'NEW'
    },
    {
      id: 2, title: 'Title2', description: 'Desc2', place: 'PCLab2', status: 'DOING'
    },
    {
      id: 3, title: 'Title3', description: 'Desc3', place: 'PCLab3', status: 'DONE'
    },
    {
      id: 4, title: 'Title4', description: 'Desc4', place: 'PCLab4', status: 'NEW'
    }
  ]
  status : string = 'DONE';
  filteredeIssues : Issue[] = []
  selectedIssue : Issue | null = null
  ngOnInit() {
    this.filterIssue()
  }

  filterIssue(){
    this.filteredeIssues = this.status === 'ALL' ? this.issues : this.issues.filter(issue => issue.status === this.status)
  }

  handleChangeStatus(newStatus : string) : void {
    this.status = newStatus
    this.filterIssue()
  }
}
