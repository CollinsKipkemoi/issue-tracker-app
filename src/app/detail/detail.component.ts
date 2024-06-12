import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {IssueService} from "../issue.service";
import {Issue} from "../issue";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  issue : Issue | undefined = new Issue();
  constructor(private issueService : IssueService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.issue = this.issueService.getIssueById(Number(id));
  }
}
