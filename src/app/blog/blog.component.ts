import {Component} from "@angular/core";
import {environment} from "../../environments/environment";

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent {
    public deployURL = environment.deployURL;
}
