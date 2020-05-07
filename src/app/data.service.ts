import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  serviceSubject: BehaviorSubject<string[]> = new BehaviorSubject(['Item 1']);
}
