import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { forkJoin,zip, merge, combineLatest, Subscription } from 'rxjs';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
  public minDate = new Date(2020, 11, 1);
  public maxDate = new Date(2020, 11, 10);
  public from = new Date(2020, 11, 1);
  public to = new Date(2020, 11, 5);
  public title = "注文日検索(YYYY/MM/DD - YYYY/MM/DD)"
  public calendarPosition = "bottom";
  private testSubject$;
  private subscriptions: Array<Subscription> = [];

  constructor(
    private testService: TestService
  ) { }

  ngOnInit(): void {
    console.log("test start")
    this.testService.loadData();
    this.testSubject$ = this.testService.DataSource;
    console.log("get subject")
    this.subscriptions.push(this.testSubject$.subscribe(x => {
      console.log("----subject----")
      console.log(x);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe);
  }

  onEvent($event) {
    //console.log($event);
  }

}
