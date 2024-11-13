import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatSnackBar,  MatSnackBarConfig } from "@angular/material/snack-bar";
import { LoginResponseI, UserI } from "../../public.interfaces";
import { Observable, tap, throwError, catchError } from "rxjs";

export const snackBarConfig: MatSnackBarConfig = {
  duration: 3000,
  horizontalPosition: 'right',
  verticalPosition: 'top'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar,
  ) { }

  login(user: UserI): Observable<LoginResponseI> {
    return this.httpClient.post<LoginResponseI>('api/user/login', user).pipe(
      tap((res: LoginResponseI) => localStorage.setItem('todo_app', res.access_token)),
      tap(() => this.snackbar.open('Login Successfull', 'Close', snackBarConfig)),
      catchError(e => {
        this.snackbar.open(`${e.error.message}`, 'Close', snackBarConfig);
        return throwError(e);
      })
    )
  }

  register(user: UserI): Observable<UserI> {
    return this.httpClient.post<UserI>('api/user', user).pipe(
     tap((createdUser: UserI) => this.snackbar.open(`User ${createdUser.username}s created`, 'Close', snackBarConfig)),
     catchError(e => {
       this.snackbar.open(`User registration failed because: ${e.error.message}`, 'Close', snackBarConfig);
       return throwError(e);
     })
    )
  }
  
}