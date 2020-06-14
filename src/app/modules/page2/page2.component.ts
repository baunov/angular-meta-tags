import {Component, OnInit, Optional} from '@angular/core';
import {MetadataService} from '../../metadata.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(@Optional() private metadataService: MetadataService) { }

  ngOnInit(): void {
    if (this.metadataService) {
      this.metadataService.updateMetadata({
        title: 'Page 2',
        description: 'There is some content on page 2'
      });
    }
  }

}
