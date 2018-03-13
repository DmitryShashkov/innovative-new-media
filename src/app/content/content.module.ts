import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DesignComponent} from "./design/design.component";
import {DevelopmentComponent} from "./development/development.component";
import {RouterModule} from "@angular/router";
import {AnimationComponent} from "./animation/animation.component";
import {BannersComponent} from "./banners/banners.component";
import {GraphicComponent} from "./graphic/graphic.component";
import {MarketingComponent} from "./marketing/marketing.component";
import {SeoComponent} from "./seo/seo.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'design',
                component: DesignComponent
            },
            {
                path: 'development',
                component: DevelopmentComponent
            },
            {
                path: 'animation',
                component: AnimationComponent
            },
            {
                path: 'banners',
                component: BannersComponent
            },
            {
                path: 'graphic',
                component: GraphicComponent
            },
            {
                path: 'marketing',
                component: MarketingComponent
            },
            {
                path: 'seo',
                component: SeoComponent
            }
        ])
    ],
    declarations: [
        DesignComponent,
        DevelopmentComponent,
        AnimationComponent,
        BannersComponent,
        GraphicComponent,
        MarketingComponent,
        SeoComponent
    ]
})
export class ContentModule {}
