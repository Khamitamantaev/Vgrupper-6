import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
declarations: [
AppComponent,
ProductsComponent,
LoginComponent,
RegisterComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
ReactiveFormsModule,
BrowserAnimationsModule,
MatInputModule,
MatTableModule,
MatPaginatorModule,
MatSortModule,
MatProgressSpinnerModule,
MatIconModule,
MatButtonModule,
MatCardModule,
MatFormFieldModule
],
providers: [
{
provide: HTTP_INTERCEPTORS,
useClass: TokenInterceptor,
multi: true
}
],
bootstrap: [AppComponent]
})
export class AppModule { }
