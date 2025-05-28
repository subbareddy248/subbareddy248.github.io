---
title: Subba Reddy Oota
layout: default
permalink: /
---

| <a href="{{ site.google_scholar_url }}" target="_blank" style="text-align:center; display:block"><i class="ai ai-google-scholar-square ai-3x"></i></a> | <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" style="text-align:center; display:block"><i class="fa fa-linkedin ai-3x"></i></a> | <a href="https://github.com/{{ site.github_username }}" target="_blank" style="text-align:center; display:block"><i class="fa fa-github ai-3x"></i></a> |

<!-- <br/> -->

<img class="profile-picture" src="{{site.url}}{{site.baseurl}}/images/profile-picture/img_0118.jpg" />

I am currently a Postdoctoral Researcher at [TU Berlin, Germany](https://denizenslab.github.io/), under the supervision of Prof. Fatma Deniz. I work on understanding language processing in human brain and language models.

I completed my PhD in Computer Science at [Inria](https://team.inria.fr/mnemosyne/team-members/){:target="_blank"}, I was supervised by [Dr. Xavier Hinaut](https://sites.google.com/site/xavierhinaut/){:target="_blank"} and [Prof. Alexandre Frederic](https://www.labri.fr/perso/falexand/){:target="_blank"}. During my Ph.D, I also spent time as a visiting scholar at MaxPlanck Institute for Software Systems (MPI-SWS), Germany, where I was supervised by [Dr. Mariya Toneva](https://mtoneva.com/){:target="_blank"}. My main research interests are at the Bridging AI and Neuroscience (Neuro-AI), Language Analysis in the Brain and Language Models, Multimodal brain alignment with multimodal models, and Mechanistic interpretability of language moedls.
<!-- My projects include score-based diffusion probabilistic models for video prediction, generation, interpolation; multi-resolution image generation; self-supervised video prediction using dynamical modelling; 3D human pose estimation and inverse kinematics from videos. -->

<!-- I also work as an AI Advisor to [Blue Lion Labs](https://bluelionlabs.com/){:target="_blank"}. -->
 
Prior to that, I was a Lead Data Scientist at Woundtech Innovative Healthcare Solutions, where I worked on AI-driven solutions for automated wound assessment, patient risk of hospitalization, wound image segmentation and NLP-based document processing to enhance clinician decision-making. Before that, I was a Data Scientist at [Teradata R&D](https://www.teradata.com/), where I worked on NLP, text analytics, machine learning, and graph analytics to enhance Teradata Aster's AI/ML capabilities. 
<!-- In 2019 and 2020, I was an AI Scientist in Residence at [NextAI](https://www.nextcanada.com/next-ai/){:target="_blank"}. -->

<!-- Previously, I worked as a Research Fellow with [Prof. C. V. Jawahar](https://faculty.iiit.ac.in/~jawahar/){:target="_blank"} at [IIIT-Hyderabad](https://cvit.iiit.ac.in){:target="_blank"} on automated lip synthesis for translation of a video into a different languages. I was a Mentor for the first [Foundations of AI/ML](https://www.talentsprint.com/aiml.dpl){:target="_blank"} certificate program for industry professionals by IIIT-H Machine Learning Lab. Prior to that, I worked at [GreyOrange Robotics](http://www.greyorange.com/){:target="_blank"} on real time embedded vision in videos for warehouse automation, and autonomous robots; and at [Airbus, India](http://www.airbus.com/){:target="_blank"} on software development and integration. -->

I post-graduated from the [International Institute of Information Technology (IIIT-H), Hyderabad, India](https://www.iiit.ac.in/){:target="_blank"}, in 2016 with a Master's Degree (M.Tech) in Computer Science Enginering.

## PUBLICATIONS

<!-- | <a href="{{ site.google_scholar_url }}" target="_blank" style="text-align:center; display:block"><i class="ai ai-google-scholar-square ai-3x"></i></a> | -->

For a more complete list, please check my <a href="{{ site.google_scholar_url }}" target="_blank">Google Scholar</a> page.

{% for publication in site.data.papers %}

{% include publications.html %}

{% endfor %}

<p>&nbsp;</p>

## News

<table>
{% for article in site.data.news %}
<tr>
{% include news.html %}
</tr>
{% endfor %}
</table>
