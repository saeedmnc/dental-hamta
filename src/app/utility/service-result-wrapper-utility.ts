import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { ServiceResultEntity } from "../interfaces/service-result-entity";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class ServiceResultWrapperUtility {
    constructor(public snackBar: MatSnackBar,
        public dialog:MatDialog,
        // public messageBoxService:MessageBoxService
        ) { }
    public parse(obs: Observable<ServiceResultEntity>): Promise<any> {
        return new Promise<any[]>(resolve => {
            obs.subscribe(
                {
                    next: (r) => {
                        this.wrapResult(r).subscribe(content => {
                            resolve(content);
                        });
                    },
                    error: (err) =>{
                        this.manageError(err);
                    } 
                    
                }
            );
        });
    }
    public wrapResult(serviceResult: ServiceResultEntity): Observable<any> {
        const obs = new Observable((observer) => {
            if (serviceResult) {
                if (serviceResult.result) {
                    observer.next(serviceResult.content);
                }
                if (!serviceResult.result) {
                    this.openSnackBar(serviceResult.errorMessages);
                    observer.next(null);

                }
                else {
                    // this.messageBoxService.manageError(serviceResult.result);
                    observer.next(null);
                }
            } else {
                observer.next(null);
            }
        });
        return obs;
    }

    public openSnackBar(message: string) {
        this.snackBar.open(message,'', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration:3000
        });
    }

    public manageError(error: HttpErrorResponse) {
        let strMsg = error.error?.exceptionMessage;
        if (!strMsg) {
            strMsg = error.message;
        }
        // this.messageBoxService.showErrorMessageBox('سیستم با خطا مواجه شده است.', strMsg);
        // this.dialog.afterOpened.subscribe(r=>{
            
        // })

    }
    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';
}
