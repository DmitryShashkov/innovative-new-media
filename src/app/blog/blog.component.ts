import {Component} from "@angular/core";
import {environment} from "../../environments/environment";
import {Meta, Title} from "@angular/platform-browser";

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent {
    public deployURL = environment.imagesServerURL;

    constructor (
        private titleService: Title,
        private metaService: Meta
    ) {
        this.titleService.setTitle('Top 10 Most Popular Swift Libraries from GitHub');
        this.metaService.addTag({
            name: 'description',
            content: 'As a team that is directly connected with iOS app development, we keep an eye on all the innovations in the IT industry including libraries. It is not a secret that the usage of libraries can help to save a lot of time. However, which ones to use when it comes to such a relatively new language as Swift? In this article, we are going to present you top 10 Swift libraries on GitHub for iOS development.'
        })
    }
}
