import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'cyrcury-ted-frcas',
    templateUrl: './cyrcury-ted-frcas.component.html',
    styleUrls: ['../../../assets/css/content.css']
})
export class CyrcuryTedFrcasComponent {
    public readonly deployUrl = environment.deployURL;
}
