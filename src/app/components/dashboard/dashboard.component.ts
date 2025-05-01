import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LabelService } from 'src/app/services/label.service';
import { NotesService } from 'src/app/services/notes/notes.service';
import { SearchService } from 'src/app/services/search/search.service';
import { ViewServiceService } from 'src/app/services/view/view-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isSidenavOpen = true;
  showDropdown = false;
  headerTitle: string = 'Keep';

  @Input() labels: string[] = [];

  //for seachNote
  searchText: string = '';
  isSearchActive: boolean = false;

  isGridView: boolean = true;
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private labelService: LabelService,
    private viewToggleService: ViewServiceService,
    private noteService: NotesService,
    private searchService: SearchService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  onSearch() {
    this.searchService.emitSearchText(this.searchText); // emits event
  }

  toggleSideNav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;
        if (url.includes('/dashboard/notes')) {
          this.headerTitle = 'Keep';
        } else if (url.includes('/dashboard/archive')) {
          this.headerTitle = 'Archive';
        } else if (url.includes('/dashboard/bin')) {
          this.headerTitle = 'Bin';
        } else if (url.includes('/dashboard/reminder')) {
          this.headerTitle = 'Reminders';
        } else {
          this.headerTitle = 'Keep';
        }
      });

    this.labelService.labels$.subscribe((updatedLabels) => {
      this.labels = updatedLabels;
    });

    this.viewToggleService.viewMode$.subscribe((mode: boolean) => {
      this.isGridView = mode;
    });
  }

  toggleView() {
    this.viewToggleService.toggleView();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onSearchFocus() {
    this.isSearchActive = true;
  }

  onSearchBlur() {
    this.isSearchActive = false;
  }
}
