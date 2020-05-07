import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styles: [
    `
      div {
        border: 1px solid black;
        width: fit-content;
        padding: 16px;
      }
    `,
  ],
})
export class TwoComponent implements OnInit {
  componentData = [];

  constructor(private service: DataService) {}

  subscribe() {
    this.service.serviceSubject.subscribe((serviceData) => {
      this.componentData = serviceData;
    });
  }

  ngOnInit(): void {
    this.subscribe();
  }

  updateData(newData: string) {
    this.service.serviceSubject.next([...this.componentData, newData]);
  }
}
