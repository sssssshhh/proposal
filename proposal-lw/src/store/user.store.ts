import { Injectable, OnInit } from "@angular/core";
import { Store } from "./store";
import { Observable } from 'rxjs';

@Injectable()
export class UseStore implements OnInit {
    private _testSubject: Store<number> = new Store<number>(0);

    get testSubject$(): Observable<number> {
      return this._testSubject.state$;
    }

    get testSubject(): number {
      return this._testSubject.state;
    }

    set testSubject(value: number) {
      this._testSubject.state = value;
    }

    constructor(){
      // Test Observable
      const delayedObservable = new Observable(observer => {
        setTimeout(() => {
          observer.next(0);
          observer.complete();
        }, 1000);
      });

      delayedObservable.subscribe(() => this.testSubject = 222);
    }

    ngOnInit(): void {
    }
}
