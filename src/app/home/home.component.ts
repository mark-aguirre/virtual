import {Component, OnInit} from '@angular/core';
import {ISkillTools} from '../models/ISkillTools.model';
import {CommonModule, NgStyle} from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgStyle,
  ],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // Skill tools

skills: ISkillTools[] = [
  {name: 'Java', image: "java.png", level: 85, url: "https://www.oracle.com/java/", showPopup: false},
  {name: 'Spring', image: "springboot.png", level: 85, url: "https://spring.io/", showPopup: false},
  {name: 'JavaScript', image: "javascript.png", level: 70, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", showPopup: false},
  {name: 'TypeScript', image: "typescript.png", level: 60, url: "https://www.typescriptlang.org/", showPopup: false},
  {name: 'Angular', image: "angular.png", level: 60, url: "https://angular.io/", showPopup: false},
  {name: 'React', image: "react.png", level: 60, url: "https://reactjs.org/", showPopup: false},
  {name: 'Git', image: "git.png", level: 60, url: "https://git-scm.com/", showPopup: false},
  {name: 'Node.js', image: "nodejs.png", level: 60, url: "https://nodejs.org/en/", showPopup: false},
  {name: 'AWS', image: "aws.png", level: 60, url: "https://aws.amazon.com/", showPopup: false},
  {name: 'Docker', image: "docker.png", level: 60, url: "https://aws.amazon.com/", showPopup: false},
  {name: 'Postgresql', image: "postgresql_src_logo_icon_170834.png", level: 80, url: "https://www.postgresql.org/", showPopup: false},
  {name: 'Sql Server', image: "sql-server.png", level: 55, url: "https://www.microsoft.com/en-us/sql-server", showPopup: false},
  {name: 'intellij', image: "intellij.png", level: 85, url: "https://www.jetbrains.com/idea/", showPopup: false},
  {name: 'github', image: "github-150.png", level: 85, url: "https://github.com/", showPopup: false},
];


  ngOnInit() {
    console.log('Home component initialized');
  }

}
