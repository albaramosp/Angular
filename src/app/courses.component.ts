import { Component } from "@angular/core"
import { CoursesService } from './courses.service';

@Component({
    selector: "courses",
    template:   `
                <h2>{{ getTitle() }}</h2>
                <ul>
                    <li *ngFor="let c of courses">
                        {{ c }}
                    </li>
                </ul>

                {{ course.title | uppercase }} <br>
                {{ course.students | number }} <br>
                {{ course.rating | number:'2.1-1' }} <br>
                {{ course.price | currency:'EUR':true:'3.2' }} <br>
                {{ course.releaseDate | date:'shortDate' }} <br>
                {{ course.description | summary:30 }}

                <!-- Capitalization -->
                <br>
                <input [(ngModel)]="inputText"/>
                <br>
                {{ inputText | toCapitals }}
                <br>
            
                <!--'[]' binds the attribute with its value. When the value changes, DOM is updated-->
                <div>
                    <img [src]="imgURL" style="width:300px;height:300px;"/>
                </div>
                
                <br>
                <!-- WITHOUT EVENT FILTERING
                
                     <input (keyup)="onKeyUp($event)" />
                -->

                <!-- WITH EVENT FILTERING -->
                <p>Using event filtering
                <input (keyup.enter)="onKeyUp($event)" />
                </p>
                <br>

                <!-- WITH TEMPLATE VARIABLE -->
                <p>Using template variable
                <input #inputTxt (keyup.enter)="showAlert(inputTxt.value)"/>
                </p>
                <br>

                <!-- WITH BINDING  from component to view -->
                <p>With one way binding
                <input [value]="inputText" (keyup.enter)="showAlert()"/>
                </p>
                <br>

                <!-- WITH BINDING  from component to view and viceversa -->
                <p>With manual 2 way binding
                <input [value]="inputText" (keyup.enter)="inputText=$event.target.value; showAlert()"/>
                </p>
                <br>

                <!-- WITH 2-WAY BINDING -->
                <p>With ngModel
                <input [(ngModel)]="inputText" (keyup.enter)="showAlert()"/>
                </p>

                <div>
                    <!-- Class binding: if condition is true, class is added to element -->
                    <button class="btn" [class.btn-primary]="isPrimary" (click)="onSave($event)">
                        Save
                    </button>

                    <button class="btn" [style.backgroundColor]="isActive ? 'blue' : 'cyan'">
                        Delete
                    </button>
                </div>
                
                
                `
})
export class CoursesComponent{
    title = "List of courses";
    isPrimary = true;
    isActive = true;
    imgURL = "https://www.dailydot.com/wp-content/uploads/2018/10/olli-the-polite-cat.jpg";
    courses;
    inputText = "example input";
    course = {
        title: "Ingenieria Informatica",
        rating: 3.6677,
        students: 2734567,
        price: 1200.953,
        releaseDate: new Date(2014, 3, 1),
        description: "La ingenieria informatica es un conjunto de conocimientos tecnicos y vitales que te ayudaran a ser una mejor persona en este mundo de caos. Animate y pruebalo, no te dejará indiferente."
    }

    // Dependency injection => less coupling
    constructor(service: CoursesService){
       this.courses = service.getCourses();
    }

    // Hardcoded data that should be in the server =>
    // Less coupling
    //courses = ["Astronomy", "Astrophotography", "Angular"];

    getTitle(){
        return this.title;
    }

    onSave($event){
        $event.stopPropagation(); // Stop bubbling event to parents
        console.log("Saved by event: ", $event);
    }

    onKeyUp($event){
        // Without event filtering, handle event here
        /*
        if ($event.keyCode == 13) // 13 is Enter code
            console.log("Enter was pressed");
        */
       console.log("Input value: " + $event.target.value);
    }

    showAlert(txt="."){
        if (txt != ".")
            alert(txt);
        else
            alert(this.inputText);
    }
}

