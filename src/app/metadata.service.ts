import { Inject, Injectable } from '@angular/core';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';
import {HOST_URL} from './tokens/host-url';
import { Router } from '@angular/router';

export interface PageMetadata {
  title: string;
  imageRelativeUrl: string;
  description: string;
  author: string;
  keywords: string[];
  type: string;
}

const defaultMetadata: PageMetadata = {
  title: 'App Title',
  imageRelativeUrl: 'og-default.png',
  description: 'App description',
  author: 'Daniil Baunov',
  keywords: ['Angular', 'meta tags', 'Angular Universal'],
  type: 'website',
};

@Injectable()
export class MetadataService {
  constructor(private metaTagService: Meta,
              private titleService: Title,
              @Inject(HOST_URL) private hostUrl: string,
              private router: Router) {}

  public updateMetadata(metadata: Partial<PageMetadata>, index: boolean = true): void {
    const pageMetadata: PageMetadata = {...defaultMetadata, ...metadata};
    const metatags: MetaDefinition[] = this.generateMetaDefinitions(pageMetadata);

    this.metaTagService.addTags([
     ...metatags,
     { property: 'og:url', content: `${this.hostUrl}${this.router.url}`},
     { name: 'robots', content: index ? 'index, follow' : 'noindex' },
     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
    ], false);

    this.titleService.setTitle(pageMetadata.title);
  }

  private generateMetaDefinitions(metadata: PageMetadata): MetaDefinition[] {
    return [
      { name: 'title', content: metadata.title },
      { property: 'og:title', content: metadata.title },

      { name: 'description', content: metadata.description },
      { property: 'og:description', content: metadata.description },

      { name: 'author', content: metadata.author },
      { property: 'og:author', content: metadata.author },

      { name: 'keywords', content: metadata.keywords.join(', ') },

      { property: 'og:type', content: metadata.type },

      { property: 'og:image', content: `${this.hostUrl}${metadata.imageRelativeUrl}`}
    ];
  }
}
