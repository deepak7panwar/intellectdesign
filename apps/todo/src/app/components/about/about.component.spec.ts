/*
 *created by deepak panwar
 *contact no:9999190591
 */
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { AboutComponent } from './about.component';
import { ClarityModule } from '@clr/angular';


describe('AboutComponent', () => {

    let expectedMsg: string = 'This is a page to help demonstrate routing.';

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AboutComponent
            ],
            imports: [
                ClarityModule
            ]
        });

        fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;

    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create the about page', async(() => {
        expect(compiled).toBeTruthy();
    }));

    it(`should display: "${expectedMsg}"`, async(() => {
        expect(compiled.querySelector("p").textContent).toMatch(expectedMsg);
    }));


});
