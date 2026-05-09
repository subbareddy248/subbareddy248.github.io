---
title: Subba Reddy Oota's talks
layout: default
permalink: /talks
---

| <a href="{{ site.google_scholar_url }}" target="_blank" style="text-align:center; display:block"><i class="ai ai-google-scholar-square ai-3x"></i></a> | <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" style="text-align:center; display:block"><i class="fab fa-linkedin fa-2x"></i></a> | <a href="https://github.com/{{ site.github_username }}" target="_blank" style="text-align:center; display:block"><i class="fab fa-github fa-2x"></i></a> | <a href="https://x.com/{{ site.twitter_username }}" target="_blank" style="text-align:center; display:block"><i class="fa-brands fa-x-twitter fa-2x"></i></a> |

# TALKS

{% for talk in site.data.talks %}

{% include talks.html %}

{% endfor %}

<p>&nbsp;</p>
