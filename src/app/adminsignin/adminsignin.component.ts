import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

interface adminsignin{
  FirstName:string,
   LastName:string,
   Email:string,
   Age:string,
   Password:string,
  }

@Component({
  selector: 'app-adminsignin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './adminsignin.component.html',
  styleUrl: './adminsignin.component.css'
})
export class AdminsigninComponent {
  public FirstName:string=""
  public Email:string=""

  // signin(){
  //   let currentarray=this.adminsignin.find((student, index)=>this.Email==student.email
  //    && this.passWord==student.PassWord)
  //   if(currentarray){
  //     localStorage.setItem('currebt_user',JSON.stringify("currentuser"))
  //     this.routes.navigate(['/dashboard'])
  //   }
  //   else{
  //     this.message="User not found"
  //   }
  // }
}
