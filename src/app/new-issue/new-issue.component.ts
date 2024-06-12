import {Component, OnInit} from '@angular/core';
import {IssueFormComponent} from "../issue-form/issue-form.component";
import {Issue} from "../issue";
import {IssueService} from "../issue.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-issue',
  standalone: true,
  imports: [
    IssueFormComponent
  ],
  templateUrl: './new-issue.component.html',
  styleUrl: './new-issue.component.css'
})
export class NewIssueComponent implements  OnInit {

  issue: Issue = new Issue();
  constructor(private issueService: IssueService, private router : Router, private route : ActivatedRoute, private location : Location) {}

  handleSave(issue: Issue): void {
    if(issue.id) {
      this.issueService.modifyIssue(issue);
      // route.navigate(['/issues'])
    } else{}
    this.issueService.addIssue(issue)
    this.router.navigate(['/issues'])
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.issue = this.issueService.getIssueById(Number(id))!;
    }
  }
}
