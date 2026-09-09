---
layout: single
permalink: /
title: "Qianzhong Chen"
excerpt: "Robotics researcher and PhD student at Stanford Aero-Astro."
hide_title: true
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="hero" id="home">
  <div class="hero__portrait-wrap">
    <img class="hero__portrait" src="{{ '/images/bio_cqz_stanford.png' | relative_url }}" alt="Portrait of Qianzhong Chen">
  </div>

  <div class="hero__content">
    <span class="hero__eyebrow">Robotics · Embodied AI · Stanford</span>
    <h1>Qianzhong Chen <span>陈钱中</span></h1>
    <p class="hero__role">PhD Student in Aeronautics &amp; Astronautics at Stanford University</p>

    <p class="hero__bio">
      I am a PhD student advised by <a href="https://web.stanford.edu/~schwager/" target="_blank" rel="noopener noreferrer">Mac Schwager</a>. My goal is to build general-purpose robots that can perform complex manipulation tasks in homes and factories.
    </p>
    <p class="hero__bio">
      My research spans vision-language-action models, world models, robot policy reward modeling, and reinforcement learning. Previously, I worked on end-to-end drone navigation, legged locomotion, and differentiable simulation.
    </p>

    <div class="hero__actions">
      <a class="button-link button-link--primary" href="{{ '/publications/' | relative_url }}">View publications <span aria-hidden="true">→</span></a>
      <a class="button-link" href="{{ '/cv/' | relative_url }}">Curriculum vitae</a>
      <a class="button-link button-link--social" href="https://scholar.google.com/citations?user=MqU82XsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar <span aria-hidden="true">↗</span></a>
      <a class="button-link button-link--social" href="https://github.com/Qianzhong-Chen" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      <a class="button-link button-link--social" href="https://www.linkedin.com/in/qianzhong-chen-9bab01209/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
      <a class="button-link button-link--social" href="https://x.com/QianzhongChen" target="_blank" rel="noopener noreferrer">X / Twitter <span aria-hidden="true">↗</span></a>
    </div>

    <div class="hero__contact">
      <a href="mailto:qchen23@stanford.edu">qchen23 [at] stanford.edu</a>
      <span>WeChat: CQZ_David</span>
    </div>
  </div>
</section>

<section class="affiliation-timeline" aria-label="Education and work timeline">
  <div class="affiliation-row">
    <h2 class="affiliation-row__label">Education</h2>
    <div class="affiliation-row__items">
      <a class="affiliation-item affiliation-item--seal" href="https://www.zju.edu.cn/" target="_blank" rel="noopener noreferrer">
        <span class="affiliation-item__logo">
          <img src="{{ '/images/icons/zju.png' | relative_url }}" alt="Zhejiang University">
        </span>
        <span class="affiliation-item__detail">BEng, Mechanical Engineering · 2023</span>
      </a>
      <a class="affiliation-item affiliation-item--seal" href="https://illinois.edu/" target="_blank" rel="noopener noreferrer">
        <span class="affiliation-item__logo">
          <img src="{{ '/images/icons/uiuc.png' | relative_url }}" alt="University of Illinois Urbana-Champaign">
        </span>
        <span class="affiliation-item__detail">BS, Mechanical Engineering · 2023</span>
      </a>
      <a class="affiliation-item affiliation-item--seal" href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer">
        <span class="affiliation-item__logo">
          <img src="{{ '/images/icons/stf.avif' | relative_url }}" alt="Stanford University">
        </span>
        <span class="affiliation-item__detail">MS 2023–2025 · PhD 2025–Present</span>
      </a>
    </div>
  </div>

  <div class="affiliation-row">
    <h2 class="affiliation-row__label">Work</h2>
    <div class="affiliation-row__items">
      <a class="affiliation-item affiliation-item--unitree" href="https://www.unitree.com/" target="_blank" rel="noopener noreferrer">
        <span class="affiliation-item__logo">
          <img src="{{ '/images/icons/unitree.png' | relative_url }}" alt="Unitree Robotics">
        </span>
        <span class="affiliation-item__detail">Robotics Control Intern · Summer 2023</span>
      </a>
      <a class="affiliation-item affiliation-item--xdof" href="https://www.xdof.ai/" target="_blank" rel="noopener noreferrer">
        <span class="affiliation-item__logo">
          <img src="{{ '/images/icons/xdof_new.png' | relative_url }}" alt="XDOF">
        </span>
        <span class="affiliation-item__detail">Robotics Research Intern · 2025–2026</span>
      </a>
      <a class="affiliation-item affiliation-item--amazon" href="https://www.amazon.science/" target="_blank" rel="noopener noreferrer" aria-label="Amazon Personal Robotics Group">
        <span class="affiliation-item__logo">
          <img src="{{ '/images/icons/amazon.svg' | relative_url }}" alt="Amazon">
        </span>
        <span class="affiliation-item__detail">Applied Scientist Intern · Summer 2026</span>
      </a>
    </div>
  </div>
</section>

<section class="home-section" id="research">
  <div class="section-heading">
    <div>
      <span class="section-heading__eyebrow">Research direction</span>
      <h2>Learning robots that improve through experience</h2>
    </div>
    <p>I work across policy learning, predictive models, and autonomous systems to make robots more capable, adaptable, and useful in the physical world.</p>
  </div>

  <div class="research-grid">
    <article class="research-card">
      <span class="research-card__number">01 · MANIPULATION</span>
      <h3>Robot manipulation</h3>
      <p>Building versatile robot policies for complex, long-horizon manipulation tasks in homes and factories.</p>
      <div class="research-card__tags">
        <span>VLA models</span>
        <span>Long-horizon tasks</span>
        <span>Loco-manipulation</span>
      </div>
    </article>

    <article class="research-card">
      <span class="research-card__number">02 · EXPERIENCE</span>
      <h3>Learning from experience</h3>
      <p>Enabling robots to improve from demonstrations, autonomous rollouts, reward models, and reinforcement learning.</p>
      <div class="research-card__tags">
        <span>Reward models</span>
        <span>Self-improvement</span>
        <span>Reinforcement learning</span>
      </div>
    </article>

    <article class="research-card">
      <span class="research-card__number">03 · WORLD</span>
      <h3>World models</h3>
      <p>Learning predictive representations of visual appearance, geometry, and dynamics for planning, control, and policy training.</p>
      <div class="research-card__tags">
        <span>3D representations</span>
        <span>Differentiable simulation</span>
        <span>Model-based control</span>
      </div>
    </article>
  </div>
</section>

<section class="home-section" id="selected-publications">
  <div class="section-heading">
    <div>
      <span class="section-heading__eyebrow">Selected work</span>
      <h2>Publications</h2>
    </div>
    <a class="section-heading__link" href="{{ '/publications/' | relative_url }}">View full publication list →</a>
  </div>

  <div class="publications-list">
    {% for publication in site.data.publications %}
      {% if publication.selected %}
        {% include publication-card.html publication=publication %}
      {% endif %}
    {% endfor %}
  </div>
</section>

<section class="home-section" id="news">
  <div class="section-heading">
    <div>
      <span class="section-heading__eyebrow">Updates</span>
      <h2>News &amp; recognition</h2>
    </div>
  </div>

  <div class="home-grid">
    <div class="news-list">
      <article class="news-item">
        <time datetime="2026-09">2026.09</time>
        <p>Two papers, <a href="https://uynitsuj.github.io/warp-rm/" target="_blank" rel="noopener noreferrer">WARP-RM</a> and <a href="https://legsvla.github.io/" target="_blank" rel="noopener noreferrer">LEGS</a>, were accepted to <a href="https://www.corl.org/" target="_blank" rel="noopener noreferrer">CoRL 2026</a>.</p>
      </article>
      <article class="news-item">
        <time datetime="2026-06">2026.06</time>
        <p>Started at Amazon Fauna as an Applied Scientist Intern.</p>
      </article>
      <article class="news-item">
        <time datetime="2026-05">2026.05</time>
        <p><a href="https://qianzhong-chen.github.io/gradnavpp.github.io/" target="_blank" rel="noopener noreferrer">GRaD-Nav++</a> received the IEEE RA-L 2025 Best Paper Award.</p>
      </article>
      <article class="news-item">
        <time datetime="2026-01">2026.01</time>
        <p><a href="https://qianzhong-chen.github.io/sarm.github.io/" target="_blank" rel="noopener noreferrer">SARM</a> was accepted to ICLR 2026 and added to Hugging Face LeRobot.</p>
      </article>
      <article class="news-item">
        <time datetime="2025-11">2025.11</time>
        <p><a href="https://qianzhong-chen.github.io/gradnavpp.github.io/" target="_blank" rel="noopener noreferrer">GRaD-Nav++</a> was accepted to IEEE Robotics and Automation Letters.</p>
      </article>
      <article class="news-item">
        <time datetime="2025-08">2025.08</time>
        <p><a href="https://long-horizon-assembly.github.io/" target="_blank" rel="noopener noreferrer">ARCH</a> and <a href="https://suninghuang19.github.io/particleformer_page/" target="_blank" rel="noopener noreferrer">ParticleFormer</a> were accepted to CoRL 2025.</p>
      </article>
      <article class="news-item">
        <time datetime="2025-04">2025.04</time>
        <p>Admitted to the Stanford Aeronautics &amp; Astronautics PhD program, advised by Mac Schwager.</p>
      </article>
    </div>

    <div class="credentials-stack">
      <article class="credential-card">
        <h3>Education</h3>
        <ul>
          <li>PhD, Aeronautics &amp; Astronautics, Stanford University</li>
          <li>MS, Mechanical Engineering, Stanford University, 2025</li>
          <li>BS/BEng, Mechanical Engineering, UIUC &amp; Zhejiang University, 2023</li>
        </ul>
      </article>

      <article class="credential-card">
        <h3>Honors</h3>
        <ul>
          <li>IEEE RA-L Best Paper Award, 2025</li>
          <li>Stanford Aero-Astro PhD Fellowship, 2025</li>
          <li>Outstanding Undergraduate Thesis Award, ZJU, 2023</li>
          <li>First Class Academic Scholarship, ZJU-UIUC Institute, 2022</li>
        </ul>
      </article>

      <article class="credential-card">
        <h3>Academic service</h3>
        <ul>
          <li>Reviewer: IEEE TRO, IEEE TRL, IEEE RA-L, IEEE IoT, IEEE TIE</li>
          <li>Reviewer: CoRL 2026, NeurIPS 2026, IROS 2025 2026, ICRA 2026</li>
          <li>Member, IEEE Robotics and Automation Society</li>
        </ul>
      </article>
    </div>
  </div>
</section>
