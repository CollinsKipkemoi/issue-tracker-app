import { Injectable } from '@angular/core';
import {Issue} from "./issue";

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor() { }

  private issues: Issue[] = [
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

  getIssues(): Issue[] {
    return this.issues
  }

  getIssueById(id: number) : Issue | undefined{
    return this.issues.find(issue => issue.id === id)
  }
}
