import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeCreateComponent } from "./employee-create/employee-create.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routesEmployee: Routes = [
    { path: '', redirectTo: 'employee-list', pathMatch: 'full'},
    { path: 'create-employee', component: EmployeeCreateComponent},
    { path: 'employee-list', component: EmployeeListComponent},
    { path: 'employee-edit/:id', component: EmployeeEditComponent},
    { path: 'employee-detail/:id', component: EmployeeDetailComponent},
    { path: '404', component: NotFoundComponent},
    { path: '**', redirectTo:'404'}
]; 

@NgModule({
    imports: [RouterModule.forRoot(routesEmployee)],
    exports: [RouterModule]
})

export class AppRoutingModule {}