import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { BitstampService } from "./services/bitstamp.service";
import { TimeInterval } from "app/services/bitstamp.service.enums";
import { ObjectListItems, ListItem } from "app/modules/ObjectListItems";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'app works!';
  data = [];
  protected items: ObjectListItems = new ObjectListItems();
  scrollItems: ListItem[] = [];
  constructor( private _bitstampService: BitstampService) {

  }

  ngOnInit() {
    this._bitstampService.getTransactions(TimeInterval.day).subscribe( _data => {
      var startDate = new Date();
      this.data = _data.map( ( d, i ) => {
        d.date = new Date(d.date * 1000); //transform the unix timestamp to js dateobject
        d.index = i;
        return d;
      });
      var endDate = new Date();
      var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      console.log(startDate, endDate, seconds);
      this.items.length = this.data.length;
    })
  }

  //fired when scrolling
  onUpdate(event) {
    let start = event.start;
    let end = event.end;
    
    this.scrollItems = this.data.slice(start, end);
  }

}
