import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'mail-header',
  templateUrl: './mail-header.component.html',
  styles: [`
    .header-actions-main {
      width: 300px;
      display: flex;
    }
    .header-actions-main .input-group .input-group-text,
    .header-actions-main .input-group  .dropdown-toggle {
      line-height: 1;
      height: 31px;
    }
    .header-actions-main .input-group .input-group-text {
      background: white;
    }
    .header-actions-main .input-group .dropdown-toggle {
      border-radius: 0 0.2rem 0.2rem 0;
    }
    .my-icon-refresh {
      height: 16px;
      width: 16px;
    }
  `]
})
export class MailHeaderComponent implements OnInit {
  @Input() headerData;
  public totalMessages: number;
  private paginationSize;
  private paginationFrom;
  private paginationTo;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.paginationSize = 3;
    this.totalMessages = 34;
    this.paginationFrom = 1;
    this.paginationTo = this.paginationSize;
  }
}
