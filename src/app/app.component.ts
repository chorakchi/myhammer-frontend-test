import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { MatDialog } from '@angular/material';
import * as moment from 'moment';
import { DialogOverviewDialog } from './DialogOverviewDialog.component'
import { IJobData } from './IJobData'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'Myhammer';
  API_URL_GET_JOBS: string = environment.apiUrlGetJobs; //Api address getting jobs
  jobs: Array<IJobData> = [];
  // value for trigger loader with <mat-progress-bar> tag
  loading: boolean = true

  constructor(private http: Http, public dialog: MatDialog) {
    this.getjobs();
  }

  //  Api call
  getData(url) {
    return this.http.get(url).pipe(
      map((res: Response) => res.json()))
  }

  dateFormater(date: string) {
    // customization format is mentioned in http://momentjs.com
    // now in return, format is same Wednesday - 2018 October 31
    return moment(date).locale('de').format('dddd DD. MMMM YYYY');
  }
  //
  getjobs() {
    this.getData(this.API_URL_GET_JOBS).subscribe(data => {
      this.loading = false; //triggering loader

      //filter job state is active maping for change date format
      this.jobs = data.body.filter(data => data.state === 'active').map(item => ({
        ...item,
        created_at: this.dateFormater(item.created_at),
        end_date: this.dateFormater(item.end_date),
      }))
    })
  }

  //handler for open Dialog detail of job, prop data object of the selected job from the list
  openDialog(data: IJobData) {
    this.dialog.open(DialogOverviewDialog, {
      height: '90%',
      width: '99%',
      data: data
    });
  }
}
