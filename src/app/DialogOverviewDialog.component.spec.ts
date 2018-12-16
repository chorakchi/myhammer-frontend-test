import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogOverviewDialog } from './DialogOverviewDialog.component';
import { MaterialModule } from "./../material-module";
import { IJobData } from './IJobData';

// mockData for inject to component
const data: IJobData = {
  title: 'lablabbbbb',
  description: 'lablabbbbb',
  city: 'Brlin',
  state: 'lablabb',
  created_at: 'lablabb',
  end_date: 'lablabbbbb',
  id: 'lablab',
  is_awarded: true,
  thumbnail: 'lablabbb',
  zip_code: 'lablab',
  attachments: [],
  counter: []
}

describe('DialogOverviewDialog', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpModule,
        MaterialModule
      ],
      declarations: [
        DialogOverviewDialog
      ],
    }).compileComponents();
  }));


  it('should create the DialogOverviewDialog', () => {
    const fixture = TestBed.createComponent(DialogOverviewDialog);
    //***!? */
    //I don't know how should be injection 💉 for the test in typescript! 😕
    //I should learn about that! 🤞
    const app = fixture.debugElement.injector.get({ data: data }, { data: data }).componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(DialogOverviewDialog);
    fixture.detectChanges();
    const compiled = fixture.debugElement.injector.get({ data: data }, { data: data }).nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(this.data.title);
  });
});
