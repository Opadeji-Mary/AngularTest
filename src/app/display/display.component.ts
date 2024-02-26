import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface studentarray{
  firstname:string
  lastname:string
  email:string
  password:string
}
@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  public studentArray:studentarray[]=[]
  firstName: any;
  lastName: any;
  email: any;
  passWord: any;
  ngOnInit(){
    if(localStorage['students']){
      this.studentArray=JSON.parse(localStorage['students'])
      console.log(this.studentArray);
    }
  }



  del(id:number){
    console.log(id);
    this.studentArray.splice(id, 1)
    localStorage.setItem('students', JSON.stringify(this.studentArray))
  }
  userId  = 0

  toSave(id: number) {
    this.userId = id
    }


    saveChange() {
    console.log(this.userId);
    let stuObj={
      firstName: this.firstName,
      lastName:this.lastName,
      email: this.email,
      passWord:this.passWord,
    }
    console.log(stuObj);
    localStorage.setItem('students', JSON.stringify(this.studentArray))
    window.location.reload()
    }
}
