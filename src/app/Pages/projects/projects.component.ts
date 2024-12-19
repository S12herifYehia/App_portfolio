import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


  ngOnInit(){
    Aos.init({
      duration:800,
      easing: 'ease-in-out', // نوع الحركة
      once: false

    })
  }

}
