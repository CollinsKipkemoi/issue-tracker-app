import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Issue} from "../issue";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-issue-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './issue-form.component.html',
  styleUrl: './issue-form.component.css'
})
export class IssueFormComponent implements  OnChanges{
  @Input() issue: Issue = new Issue();
  @Output() save = new EventEmitter<Issue>();
  issueForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', Validators.required],
    status: ['', [Validators.required]],
    place: ['', [Validators.required, Validators.pattern(/^PC\d+/)]]
  });

  constructor(private fb: FormBuilder) {
  }

  get title() {
    return this.issueForm.get('title');
  }

  get description() {
    return this.issueForm.get('description');
  }

  get status() {
    return this.issueForm.get('status');
  }

  get place() {
    return this.issueForm.get('place');
  }

  ngOnChanges() {
    this.issueForm.patchValue(this.issue);
  }

  handleSubmit() {
    const issue = new Issue();
    this.save.emit(Object.assign(issue, this.issueForm.value));
  }
}
