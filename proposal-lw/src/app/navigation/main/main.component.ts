import { Component, OnInit } from '@angular/core';
import { UseStore } from 'src/store/user.store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(private userStore: UseStore){
  }

  ngOnInit(): void {
    this.userStore.testSubject$.subscribe(value => console.log('test', value))
  }
}
