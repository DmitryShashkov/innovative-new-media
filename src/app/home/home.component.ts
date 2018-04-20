import {Component} from "@angular/core";
import {environment} from "../../environments/environment";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public deployURL = environment.imagesServerURL;
}
