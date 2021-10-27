import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { SearchService } from './search.service';

describe('Service: Search', () => {
  let service: SearchService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SearchService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create search service truthly', () => {
    expect(service).toBeTruthy();
  });

  it('should inject httpClient service into search service truthly and have the same instance', inject(
    [HttpClient],
    (injectService: HttpClient) => {
      expect(injectService).toBe(httpClient);
    }
  ));

  it('should search and return SearchItems', fakeAsync(() => {
    let response = {
      resultCount: 1,
      results: [
        {
          artistId: 78500,
          artistName: 'U2',
          trackName: 'Beautiful Day',
          artworkUrl60: 'image.jpg',
        },
      ],
    };
    service.search('U2');
    const req = httpTestingController.expectOne(
      'https://itunes.apple.com/search?term=U2&media=music&limit=20'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(response);
    tick();
    expect(service.results.length).toBe(1);
    expect(service.results[0].artist).toBe('U2');
    expect(service.results[0].name).toBe('Beautiful Day');
    expect(service.results[0].thumbnail).toBe('image.jpg');
    expect(service.results[0].artistId).toBe(78500);
  }));
});
