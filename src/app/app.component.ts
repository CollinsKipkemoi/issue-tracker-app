import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {MainComponent} from "./main/main.component";
import {IssueListComponent} from "./issue-list/issue-list.component";
import {DetailComponent} from "./detail/detail.component";
import {NewIssueComponent} from "./new-issue/new-issue.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainComponent, IssueListComponent, DetailComponent, NewIssueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'issue-tracker';
}

