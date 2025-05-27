import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ResearchInterest {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  researchInterests: ResearchInterest[] = [
    {
      title: 'Computational Cognitive Neuroscience',
      description: 'Bridging AI & Neuroscience through innovative computational models',
      icon: 'bi bi-braces'
    },
    {
      title: 'Brain-Language Analysis',
      description: 'Studying language processing in brains and large language models',
      icon: 'bi bi-diagram-3'
    },
    {
      title: 'Brain Encoding & Decoding',
      description: 'Working with fMRI, MEG, and EEG data to understand neural processes',
      icon: 'bi bi-activity'
    }
  ];

  recentAwards = [
    {
      title: 'Nasscom AI-Gamechangers award',
      description: 'Received for ACL-23 Findings paper'
    },
    {
      title: 'NeurIPS-23 scholar award',
      description: 'For accepted paper presentation'
    }
  ];

  recentPublications = [
    {
      title: 'Multi-modal brain encoding models for multi-modal stimuli',
      conference: 'ICLR 2025',
      type: 'Conference Paper'
    },
    {
      title: 'Speech language models lack important brain relevant semantics',
      conference: 'ACL 2024',
      type: 'Long Paper'
    }
  ];

  ngOnInit() {
    // Any initialization logic
  }
}
