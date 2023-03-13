import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "./store";

@Injectable()
export class UseStore implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
    // public testSubject: Store<number> = new Store<number>(0);

    // ngOnInit(): void {
    //     const observable = new Observable((subscriber) => {
    //         subscriber.next(1);
    //         subscriber.next(2);
    //         subscriber.next(3);
    //         setTimeout(() => {
    //           subscriber.next(4);
    //           subscriber.complete();
    //         }, 1000);
    //       });

    //       observable.subscribe(value => this.testSubject.state = 1)
    // }
}
