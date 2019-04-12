import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../common/task';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() tasks: Task[];

  ngOnInit(): void {}

  trackElement(index: number, element: any): any {
    return element ? element.guid : 0;
  }
}
