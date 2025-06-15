---
title: Subba Reddy Oota's publications
layout: default
permalink: /publications
---

<link rel="stylesheet" href="{{ site.baseurl }}/css/search.css">
<script src="{{ site.baseurl }}/js/search.js"></script>

| <a href="{{ site.google_scholar_url }}" target="_blank" style="text-align:center; display:block"><i class="ai ai-google-scholar-square ai-3x"></i></a> |

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
  {% assign base_venues = "" | split: "" %}
  {% for paper in site.data.papers %}
    {% capture venue_text %}
      {{ paper.venue | strip_html | strip }}
    {% endcapture %}

    {% if venue_text contains "ACL" %}
      {% assign base_venues = base_venues | push: "ACL" %}
    {% elsif venue_text contains "NeurIPS" %}
      {% assign base_venues = base_venues | push: "NeurIPS" %}
    {% elsif venue_text contains "ICLR" %}
      {% assign base_venues = base_venues | push: "ICLR" %}
    {% elsif venue_text contains "EMNLP" %}
      {% assign base_venues = base_venues | push: "EMNLP" %}
    {% elsif venue_text contains "COLING" %}
      {% assign base_venues = base_venues | push: "COLING" %}
    {% elsif venue_text contains "NAACL" %}
      {% assign base_venues = base_venues | push: "NAACL" %}
    {% elsif venue_text contains "WACV" %}
      {% assign base_venues = base_venues | push: "WACV" %}
    {% elsif venue_text contains "INTERSPEECH" %}
      {% assign base_venues = base_venues | push: "INTERSPEECH" %}
    {% elsif venue_text contains "ICASSP" %}
      {% assign base_venues = base_venues | push: "ICASSP" %}
    {% elsif venue_text contains "TMLR" %}
      {% assign base_venues = base_venues | push: "TMLR" %}
    {% elsif venue_text contains "Arxiv" %}
      {% assign base_venues = base_venues | push: "Arxiv" %}
    {% endif %}
  {% endfor %}
  {% assign base_venues = base_venues | uniq | sort %}
  <select id="venue-filter">
    <option value="all">All Venues</option>
    {% for venue in base_venues %}
      <option value="{{ venue }}">{{ venue }}</option>
    {% endfor %}
  </select>

  <div id="result-count"></div>
</div>

<div id="publications-list">
  {% for publication in site.data.papers %}

    {% capture venue_text %}
      {{ publication.venue | strip_html | strip }}
    {% endcapture %}
    {% assign venue_name = "Arxiv" %}
    {% if venue_text contains "ACL" %}
      {% assign venue_name = "ACL" %}
    {% elsif venue_text contains "NeurIPS" %}
      {% assign venue_name = "NeurIPS" %}
    {% elsif venue_text contains "ICLR" %}
      {% assign venue_name = "ICLR" %}
    {% elsif venue_text contains "EMNLP" %}
      {% assign venue_name = "EMNLP" %}
    {% elsif venue_text contains "COLING" %}
      {% assign venue_name = "COLING" %}
    {% elsif venue_text contains "NAACL" %}
      {% assign venue_name = "NAACL" %}
    {% elsif venue_text contains "WACV" %}
      {% assign venue_name = "WACV" %}
    {% elsif venue_text contains "INTERSPEECH" %}
      {% assign venue_name = "INTERSPEECH" %}
    {% elsif venue_text contains "ICASSP" %}
      {% assign venue_name = "ICASSP" %}
    {% elsif venue_text contains "TMLR" %}
      {% assign venue_name = "TMLR" %}
    {% endif %}

    <div class="publication-item"
         data-year="{{ publication.year }}"
         data-venue="{{ venue_name }}">
      {% include publications.html %}
    </div>
  {% endfor %}
</div>

<div class="footnotes">
  <p><small>*&nbsp;Equal contribution</small></p>
</div>
