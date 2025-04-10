import {Component, OnInit} from '@angular/core';
import {ISkills} from '../models/ISkills.model';
import {CommonModule, NgStyle} from '@angular/common';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {ITools} from '../models/ITools.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgStyle,
  ],
  animations: [
    trigger('fadeIn', [
      state('void', style({opacity: 0})),
      transition(':enter', [
        animate('1s ease-in', style({opacity: 1}))
      ])
    ])
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // Skill tools

  skills: ISkills[] = [
    {name: 'Java', image: "java.png", level: 85, url: "https://www.oracle.com/java/", showPopup: false},
    {name: 'Spring', image: "springboot.png", level: 85, url: "https://spring.io/", showPopup: false},
    // {
    //   name: 'JavaScript',
    //   image: "javascript.png",
    //   level: 70,
    //   url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    //   showPopup: false
    // },
    // {name: 'TypeScript', image: "typescript.png", level: 60, url: "https://www.typescriptlang.org/", showPopup: false},
    {name: 'Angular', image: "angular.png", level: 60, url: "https://angular.io/", showPopup: false},
    {name: 'React', image: "react.png", level: 60, url: "https://reactjs.org/", showPopup: false},
    // {name: 'Junit', image: "JUnit.svg", level: 70, url: "#", showPopup: false},
  ];

  // TOOL-----------------------------------

  tools: ITools[] = [
    {name: 'Git', image: "git.png", level: 60, url: "https://git-scm.com/", showPopup: false},
    {name: 'Node.js', image: "nodejs.png", level: 60, url: "https://nodejs.org/en/", showPopup: false},
    {name: 'AWS', image: "aws.png", level: 60, url: "https://aws.amazon.com/", showPopup: false},

    {
      name: 'Postgresql',
      image: "postgresql_src_logo_icon_170834.png",
      level: 80,
      url: "https://www.postgresql.org/",
      showPopup: false
    },
    {
      name: 'Sql Server',
      image: "sql-server.png",
      level: 55,
      url: "https://www.microsoft.com/en-us/sql-server",
      showPopup: false
    },
    {name: 'intellij', image: "intellij.png", level: 85, url: "https://www.jetbrains.com/idea/", showPopup: false},
    {name: 'github', image: "github-150.png", level: 85, url: "https://github.com/", showPopup: false},
    {name: 'gitlab', image: "gitlab.svg", level: 85, url: "https://about.gitlab.com/", showPopup: false},
    {name: 'Docker', image: "docker.png", level: 60, url: "https://aws.amazon.com/", showPopup: false},
    {name: 'kafka', image: "kafka.png", level: 85, url: "https://kafka.apache.org/", showPopup: false},
    {name: 'jenkins', image: "jenkins.jpeg", level: 50, url: "https://www.jenkins.io/", showPopup: false},
    {name: 'Netlify', image: "Netlify_logo.png", level: 50, url: "https://www.netlify.com/", showPopup: false},
    {name: 'Portainer', image: "portainer.svg", level: 50, url: "https://www.portainer.io/", showPopup: false}
  ];


  ngOnInit() {
    console.log('Home component initialized');
  }

}
