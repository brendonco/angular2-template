import {Component, View, bootstrap} from '/angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  templateUrl: './html/welcome.html'
})
class AppComponent {
    name: string;
    constructor() {
        this.name = 'Alice';
    }
}
bootstrap(AppComponent);