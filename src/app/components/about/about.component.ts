/*
 *created by deepak panwar
 *contact no:9999190591
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelperHttpService } from '../../services/helper-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    styleUrls: ['./about.component.scss'],
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit, OnDestroy {
    private id;
    public newtodo = null;
    private sub: any
    public listOfToDo = [];
    constructor(private helperHttp: HelperHttpService,
        private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.helperHttp.getData(`https://jsonplaceholder.typicode.com/todos?userId=${this.id}`
            ).subscribe(data => {
                this.listOfToDo = data;
                console.log(data);
            });

        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    update(i) {
        setTimeout(() => {
            console.log('here received', this.listOfToDo[i]);
            this.helperHttp.updateService(` https://jsonplaceholder.typicode.com/todos/${this.listOfToDo[i].id}`, this.listOfToDo[i])
                .subscribe(data => {
                    console.log('what result', data);
                })
        }, 100)

    }
    delete(index) {
        let deleted = this.listOfToDo.splice(index, 1);
        this.helperHttp.deleteServiceWithId(' https://jsonplaceholder.typicode.com/todos', 'id', deleted[0].id)
            .subscribe(data => {
                console.log(data);
            });
    }
    addToDo() {
        if (this.newtodo == null) {
            alert('please enter todo in list ');
        } else {
            let dat = {
                'userId': this.id,
                'title': this.newtodo,
                'completed': false
            };
            this.helperHttp.postData('https://jsonplaceholder.typicode.com/todos', dat)
                .subscribe(data => {
                    console.log(JSON.stringify(data));
                    dat['id'] = data['id'];
                    this.listOfToDo.push(dat);
                    this.newtodo = null;

                });
        }

    }
}
