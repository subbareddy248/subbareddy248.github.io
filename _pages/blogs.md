---
title: Research Blogs
layout: default
permalink: /blogs
---

<div class="blogs-container">
    <h1 class="section-title">Research Blogs</h1>
    <div class="blogs-grid">
        {% for post in site.posts %}
            <article class="blog-card">
                <div class="blog-card-content">
                    <h2 class="blog-title">
                        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                    </h2>
                    <div class="blog-meta">
                        <span class="blog-date">{{ post.date | date: "%B %d, %Y" }}</span>
                        {% if post.paper_link %}
                        <a href="{{ post.paper_link }}" class="paper-link" target="_blank">
                            <i class="fa fa-file-text-o"></i> Read the Paper
                        </a>
                        {% endif %}
                    </div>
                    <div class="blog-excerpt">
                        {{ post.excerpt }}
                    </div>
                    <div class="blog-tags">
                        {% for tag in post.tags %}
                        <span class="tag">{{ tag }}</span>
                        {% endfor %}
                    </div>
                </div>
            </article>
        {% endfor %}
    </div>
</div>
