import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recepie-book-webapp';
  loadedFeature = 'recepie';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
