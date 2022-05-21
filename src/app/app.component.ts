import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rsp';

  activeFeature = 'recipe'

  setNavigate(feature: string){
    this.activeFeature = feature
    
  }
}
