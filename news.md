---
title: Latest News and Updates
layout: default
permalink: /news
---

<div class="news-section-box">
    <div class="news-header">
        <div class="news-title">
            <i class="fa fa-newspaper-o"></i> Latest Updates
        </div>
    </div>
    
    <div class="news-content expanded">
        <div class="news-list">
            {% for article in site.data.news %}
                <div class="news-item-row">
                    <div class="news-date-col">
                        <span class="news-date">{{ article.date }}</span>
                    </div>
                    <div class="news-text-col">
                        {% if article.link %}
                            <a href="{{ article.link }}" target="_blank">{{ article.title }}</a>
                        {% else %}
                            {{ article.title }}
                        {% endif %}
                        {{ article.description }}
                        {% if article.conference_name and article.conference_link %}
                            <a href="{{ article.conference_link }}" class="conf-link" target="_blank">{{ article.conference_name }}</a>
                        {% endif %}
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>


