---
layout: archive
title: "Publications"
permalink: /publications/
hide_title: true
author_profile: false
---

<header class="publications-page-intro">
  <div>
    <span class="page-header__eyebrow">Research output</span>
    <h1>Publications</h1>
    <p>Work in robot learning, reward modeling, world models, autonomous navigation, locomotion, and differentiable control.</p>
  </div>
  <a class="button-link" href="https://scholar.google.com/citations?user=MqU82XsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar <span aria-hidden="true">↗</span></a>
</header>

{% assign preprints = site.data.publications | where: "section", "Preprints" %}
{% assign conferences = site.data.publications | where: "section", "Conferences" %}
{% assign journals = site.data.publications | where: "section", "Journal Articles" %}

<section class="publication-section" id="preprints">
  <div class="publication-section__heading">
    <h2>Preprints</h2>
    <span>{{ preprints.size }} {% if preprints.size == 1 %}work{% else %}works{% endif %}</span>
  </div>
  <div class="publications-list">
    {% for publication in preprints %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>
</section>

<section class="publication-section" id="conferences">
  <div class="publication-section__heading">
    <h2>Conferences</h2>
    <span>{{ conferences.size }} works</span>
  </div>
  <div class="publications-list">
    {% for publication in conferences %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>
</section>

<section class="publication-section" id="journals">
  <div class="publication-section__heading">
    <h2>Journal articles</h2>
    <span>{{ journals.size }} works</span>
  </div>
  <div class="publications-list">
    {% for publication in journals %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>
</section>
