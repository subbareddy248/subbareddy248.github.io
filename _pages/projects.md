---
layout: default
title: Projects
permalink: /projects/
---

<div class="container mt-5">
  <h1 class="mb-4">Research Projects</h1>
  
  <div class="projects-grid">
    {% assign projects = site.pages | where: "layout", "project" | sort: 'date' | reverse %}
    {% for project in projects %}
      <div class="project-card">
        <a href="{{ project.url | relative_url }}" class="project-link">
          {% if project.image %}
            <div class="project-image">
              <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
            </div>
          {% endif %}
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-meta">
              <span class="project-date">{{ project.date | date: "%B %Y" }}</span>
            </div>
            <div class="project-tags">
              {% for tag in project.tags %}
                <span class="project-tag">{{ tag }}</span>
              {% endfor %}
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .project-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: #fff;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
  
  .project-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  
  .project-image {
    height: 200px;
    overflow: hidden;
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .project-card:hover .project-image img {
    transform: scale(1.05);
  }
  
  .project-content {
    padding: 1.5rem;
  }
  
  .project-title {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: #333;
  }
  
  .project-meta {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: #666;
  }
  
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .project-tag {
    padding: 0.25rem 0.5rem;
    background-color: #f0f0f0;
    border-radius: 4px;
    font-size: 0.8rem;
    color: #555;
  }
  
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
