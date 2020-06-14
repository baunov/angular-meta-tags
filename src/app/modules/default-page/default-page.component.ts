import {Component, OnInit, Optional} from '@angular/core';
import {MetadataService} from '../../metadata.service';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  constructor(@Optional() private metadataService: MetadataService) { }

  ngOnInit(): void {
    if (this.metadataService) {
      this.metadataService.updateMetadata({
        title: 'Default Page',
        description: 'There is some content on Default Page'
      });
    }
  }

}
