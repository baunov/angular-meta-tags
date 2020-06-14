import {Component, OnInit, Optional} from '@angular/core';
import { MetadataService } from '../../metadata.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(@Optional() private metadataService: MetadataService) {}

  ngOnInit(): void {
    if (this.metadataService) {
      this.metadataService.updateMetadata({
        title: 'Page 1',
        description: 'There is some content on page 1'
      });
    }
  }

}
