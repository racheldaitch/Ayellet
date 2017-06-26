"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var app_component_1 = require("./components/app/app.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var home_component_1 = require("./components/home/home.component");
var fetchdata_component_1 = require("./components/fetchdata/fetchdata.component");
var counter_component_1 = require("./components/counter/counter.component");
var weather_component_1 = require("./components/weather/weather.component");
var helloworld_component_1 = require("./components/helloworld/helloworld.component");
exports.sharedConfig = {
    bootstrap: [app_component_1.AppComponent],
    declarations: [
        app_component_1.AppComponent,
        navmenu_component_1.NavMenuComponent,
        counter_component_1.CounterComponent,
        fetchdata_component_1.FetchDataComponent,
        home_component_1.HomeComponent,
        weather_component_1.WeatherComponent,
        helloworld_component_1.HelloWorldComponent
    ],
    imports: [
        router_1.RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: home_component_1.HomeComponent },
            { path: 'counter', component: counter_component_1.CounterComponent },
            { path: 'hello', component: helloworld_component_1.HelloWorldComponent },
            { path: 'weather', component: weather_component_1.WeatherComponent },
            { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
//# sourceMappingURL=app.module.shared.js.map