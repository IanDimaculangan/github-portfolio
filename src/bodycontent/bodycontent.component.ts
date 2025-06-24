import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatList, MatListItem, MatNavList } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [MatIconModule,MatListItem,MatList,CommonModule],
  selector: 'app-bodycontent',
  templateUrl: './bodycontent.component.html',
  styleUrl: './bodycontent.component.css'
})
export class BodycontentComponent {
  projects = [
    {
      title: 'Wordpress',
      description: 'Developed front-facing responsive and SEO-friendly WordPress sites for clients with the help of different Plugins with security also in mind, focused on using the Elementor Editor accessible locally and online.'
    },
    {
      title: 'Front-Facing Websites Wireframe & Figma',
      description: 'Created multiple front-facing UI/UX wireframes and mockups using Figma for different clients sites, which will be then developed using WordPress or Angular Framework, focusing on responsive design, user experience, and Security.'
    },
    {
      title: 'Basic Inventory Management System using Angular Framework (Intern Project - Unfinished)',
      description: 'Created a basic inventory CRUD system with the Basics of Angular components and services including some security validation as it has been made with security in mind, which i have starting learning Angular using the Tour of Heroes Guide on their official website.'
    },
    {
      title: 'Basic Workaround Moodle System',
      description: 'Explored & customized the basics of Moodle LMS as well as Additional Plugins for different varieties of real-world applications including Themes, Configurations, and enhancement of Moodle Features.'
    }
  ];
  
  // ✅ Set default selected project
  selectedProject = this.projects[0];
  
  selectProject(project: any) {
    this.selectedProject = project;
  }
  
}
