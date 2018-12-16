import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { IJobData } from './IJobData';

@Component({
  selector: 'dialog-overview-dialog',
  templateUrl: 'dialog-overview-dialog.component.html',
  styleUrls: ['./dialogOverviewDialog.component.sass']
})
export class DialogOverviewDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IJobData) { }

  openAttachment(url) {
    window.open(url, '_blank');
  }
}
