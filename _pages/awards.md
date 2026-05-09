---
title: Awards & Honors
layout: default
permalink: /awards
---

<div class="awards-section">
  <h1 class="section-title">Awards and Honors</h1>

  <div class="award-category">
    <h2>Travel Grants</h2>
    <div class="award-grid">
      {% for award in site.data.awards %}
        {% if award.type == 'travel' %}
        <div class="award-card">
          <div class="award-title">{{ award.title }}</div>
          <div class="award-year">{{ award.year }}</div>
          {% if award.location %}
          <p class="award-description">{{ award.location }}</p>
          {% endif %}
        </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <div class="award-category">
    <h2>Achievements & Awards</h2>
    <div class="award-grid">
      {% for award in site.data.awards %}
        {% if award.type == 'award' %}
        <div class="award-card">
          <div class="award-title">{{ award.title }}</div>
          <div class="award-year">{{ award.year }}</div>
          {% if award.location %}
          <p class="award-description">{{ award.location }}</p>
          {% endif %}
        </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <div class="award-category">
    <h2>Ranks</h2>
    <ul class="award-rank-list">
      {% for rank in site.data.awards %}
        {% if rank.type == 'rank' %}
          <li><strong>{{ rank.title }}</strong>, {{ rank.exam }}</li>
        {% endif %}
      {% endfor %}
    </ul>
  </div>
</div>
