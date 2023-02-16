import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  work = { task: "Drive to Work", completed: true };
  school = { task: "Go to Grand Circus", completed: false };
  homework = { task: "Do Homework", completed: true }
  laundry = { task: "Fold Clothes", completed: false }
  title = 'TODOList';
  component: { task: string, completed: boolean }[] = [this.work, this.school, this.homework, this.laundry]

  //component : string[] = [ "Fold Clothes","Do Homework","Go to Work","Play Bills","Go To Class"]



  addTask(form: NgForm) {
    let newtodo = form.form.value.name;
    this.component.push(newtodo);
  }

  completeTask(form: NgForm) {
    let newtodo = form.form.value.name;
    this.component.push(newtodo);
  }

}
