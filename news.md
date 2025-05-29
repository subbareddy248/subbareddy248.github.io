---
title: Latest News and Updates
layout: default
permalink: /news
---

<link rel="stylesheet" href="{{ site.baseurl }}/css/news-ticker.css">

<!-- News Ticker -->
<div class="news-ticker">
    <div class="news-icon">
        <i class="fa fa-newspaper-o" aria-hidden="true"></i>
    </div>
    <div class="news-ticker-content">
        {% for article in site.data.news %}
            <span class="news-ticker-item">
                <span class="news-ticker-date">{{ article.date }}</span>
                {{ article.news }}
            </span>
        {% endfor %}
    </div>
</div>

<!-- Full News List -->
<div class="news-list">
    {% for article in site.data.news %}
        {% include news.html %}
    {% endfor %}
</div>
