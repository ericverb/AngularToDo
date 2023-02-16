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
  car = { task: "Get Gas", completed: false }
  clean = { task: "Clean House", completed: false }
  makemoney = { task: "Side Hustle", completed: false }
  workout = { task: "Get in Shape", completed: false }

  title = 'TODOList';
  component: TODO[] = [this.work, this.school, this.homework, this.laundry,this.car,this.clean,this.makemoney,this.workout]



  addTask(form: NgForm) {
    let newtodo = { task: form.value.name, completed: false }
    this.component.push(newtodo);
  }

  completeTask(i:number) {
    this.component[i].completed = true
  }

}

interface TODO{
  task: string
  completed: boolean
}
