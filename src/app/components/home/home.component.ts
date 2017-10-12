/* 
 *created by deepak panwar
 *contact no:9999190591
 */
import { Component } from "@angular/core";
import { HelperHttpService } from '../../services/helper-http.service'

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    public users: any[] = [];
    constructor(private heplerHttp: HelperHttpService) {
        this.heplerHttp.getData('https://jsonplaceholder.typicode.com/users')
            .subscribe(data => {
                this.users = data;
            })

    }
    textGetter(text) {
        const tArr = text.split(' ');
        if (tArr.length > 1) {
            return '' + tArr[0].charAt(0) + ' ' + tArr[1].charAt(0);
        } else if (tArr.length === 1) {
            return '' + tArr[0].charAt(0);
        }
    }

}
