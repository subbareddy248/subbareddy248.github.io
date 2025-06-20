---
title: Subba Reddy Oota's publications
layout: default
permalink: /publications
---

<link rel="stylesheet" href="{{ site.baseurl }}/css/search.css">
<script src="{{ site.baseurl }}/js/search.js"></script>

<!-- Google Scholar icon -->
<p style="text-align: center;">
  <a href="{{ site.google_scholar_url }}" target="_blank">
    <i class="ai ai-google-scholar-square ai-3x"></i>
  </a>
</p>

<div class="search-container">
  <span class="search-label">Search:</span>
  <input type="text" id="publication-search" placeholder="Search by title, author, or venue...">

  <span class="search-label">Year:</span>
  <select id="year-filter">
    <option value="all">All Years</option>
    {% assign years = site.data.papers | map: 'year' | compact | uniq | sort | reverse %}
    {% for year in years %}
      <option value="{{ year }}">{{ year }}</option>
    {% endfor %}
  </select>

  <span class="search-label">Venue:</span>
  <select id="venue-filter">
    <option value="all">All Venues</option>
    {% assign venues = site.data.papers | map: "venue_abbr" | compact | uniq | sort %}
    {% for venue in venues %}
        <option value="{{ venue }}">{{ venue }}</option>
    {% endfor %}
  </select>

  <div id="result-count"></div>
</div>

<div id="publications-list">
  {% for publication in site.data.papers %}
    <div class="publication-item"
         data-year="{{ publication.year }}"
         data-venue="{{ publication.venue_abbr }}">
      {% include publications.html publication=publication %}
    </div>
  {% endfor %}
</div>

<div class="footnotes">
  <p><small>*&nbsp;Equal contribution</small></p>
</div>
