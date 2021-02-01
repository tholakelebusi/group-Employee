import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';



const routes: Routes = [ 
    { path: '', component: EmployeeListComponent },
     { path: 'navbar', component: NavbarComponent },
    { path: 'employee', component: EmployeeComponent },
     {path: 'projects', component: ProjectsComponent}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }