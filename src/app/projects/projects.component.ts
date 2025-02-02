import {Component, OnInit} from '@angular/core';
import {IProject} from '../models/IProject.model';
import {CommonModule, NgStyle} from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  projects: IProject[] = [
    {
      name: 'Virtual - Personal Portfolio',
      description: 'an open source personal portfolio template for developers, designers, and content creators.',
      image: 'virtual.png',
      website: 'https://virtual.is-a.dev/',
      repository: 'https://github.com/MarkAguirre26/virtual'
    },
    {
      name: 'Player Companion',
      description: 'Player Companion is a platform that provides valuable insights and tools to enhance baccarat and sicbo gameplay.',
      image: 'player_companion.jpg',
      website: 'https://sicbo.player-companion.com/',
      repository: 'https://github.com/MarkAguirre26/player-companion'
    },
    {
      name: 'C2B4 Strategy App',
      description: 'Improve this Baccarat Strategy App for enhanced gameplay and valuable insights.',
      image: 'c2b4.png',
      website: '#',
      repository: '#'
      },
    {
      name: 'URL Shortener',
      description: 'This is a simple URL shortener application built using Spring Boot.',
      image: 'url_shortener.jpg',
      website: '#',
      repository: 'https://github.com/MarkAguirre26/UrlShortener'
    },
    {
      name: 'Medical Software',
      description: 'This system is primarily designed for managing the medical records of seafarers.',
      image: 'medicalSoftware.jpg',
      website: '#',
      repository: 'https://github.com/MarkAguirre26/CenterportMedical'
    }
  ];

  ngOnInit() {
    console.log('ProjectsComponent initialized');
  }
}
