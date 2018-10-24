import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry,) {
    this.matIconRegistry.addSvgIcon(
      'icon_label',
      'path_to_custom_icon.svg'
    );
  }
  title = 'GardenApp';
}
