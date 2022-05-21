import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: "./header.component.html",
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{

    @Output() handleFeature = new EventEmitter<string>()

    handleClick(feature: string){
        this.handleFeature.emit(feature)
    }

}