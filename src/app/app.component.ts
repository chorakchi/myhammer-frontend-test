import { Component, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'myhammer';
  API_URL: string = environment.apiUrl;
  jobs: any = {};

  constructor(private http: Http, public dialog: MatDialog) {
    console.log("Hello Fellow User")
    this.getContacts();
    this.getData();
  }


  getData() {
    return this.http.get(this.API_URL).pipe(
      map((res: Response) => res.json()))
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.jobs = data.body.filter(data => data.state === 'active')
    })
  }


  openDialog(data: any) {
    console.log(data)
    this.dialog.open(DialogOverviewDialog, {
      height: '90%',
      width: '99%',
      data: data
    });
  }
}

@Component({
  selector: 'dialog-overview-dialog',
  templateUrl: 'dialog-overview-dialog.html',
  styleUrls: ['./dialogOverviewDialog.component.sass']
})
export class DialogOverviewDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
