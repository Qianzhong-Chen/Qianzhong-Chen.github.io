---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

An updated list of all publications can be found on my <a href="https://scholar.google.com/citations?user=MqU82XsAAAAJ&hl=en" target="_blank">Google Scholar</a> profile.

---

## Preprints

<div class="publication" style="display: flex; align-items: stretch; margin-bottom: 30px;">
  <img src="/images/publications/sarm.png" alt="sarm" style="width: 240px; height: 150px; object-fit: fill; margin-right: 20px; border-radius: 8px;">
  <div>
     <strong>[Accepted to ICLR 2026] SARM: Stage-Aware Reward Modeling for Long Horizon Robot Manipulation</strong><br>
    <strong>Q. Chen</strong>, J. Yu, M. Schwager, P. Abbeel, F. Shentu, P. Wu<br>
    <a href="https://arxiv.org/abs/2509.25358" target="_blank">arXiv</a> |
    <a href="https://qianzhong-chen.github.io/sarm.github.io/" target="_blank">website</a> |
    <a href="https://huggingface.co/docs/lerobot/sarm" target="_blank">LeRobot</a> |
    <a href="https://qianzhong-chen.github.io/sarm.github.io/" target="_blank">code</a><br><br>
    <strong>TL;DR:</strong> SARM is a stage-aware, video-based reward modeling framework that enables scalable and robust imitation learning for long-horizon tasks by deriving progress signals from natural language annotations, dramatically improving policy performance over standard behavior cloning.
  </div>
</div>

<div class="publication" style="display: flex; align-items: stretch; margin-bottom: 30px;">
  <img src="/images/publications/dojo.png" alt="Dojo" style="width: 240px; height: 150px; object-fit: fill; margin-right: 20px; border-radius: 8px;">
  <div>
    <strong> Dojo: A Differentiable Physics Engine for Robotics</strong><br>
    T. Howell, S. Cleac'h, J. Brüdigam, <strong>Q. Chen</strong>, J. Sun, Z. Kolter, M. Schwager, Z. Manchester<br>
    <a href="https://arxiv.org/abs/2203.00806" target="_blank">arXiv</a> |
    <a href="https://dojo-sim.github.io/Dojo.jl/stable/index.html" target="_blank">website</a> |
    <a href="https://github.com/dojo-sim/Dojo.jl" target="_blank">code</a><br><br>
    <strong>TL;DR:</strong> Dojo is a differentiable physics engine that solves contact dynamics with a custom interior-point method, offering stable simulation and smooth gradients for robotics tasks such as trajectory optimization, policy learning, and system identification.
  </div>
</div>

---

## Journal Articles

<div class="publication" style="display: flex; align-items: stretch; margin-bottom: 30px;">
  <img src="/images/publications/grad_nav_pp.png" alt="DroneVLA" style="width: 240px; height: 150px; object-fit: fill; margin-right: 20px; border-radius: 8px;">
  <div>
    <strong> [RA-L 2025] GRaD-Nav++: Vision-Language Model Enabled Visual Drone Navigation with Gaussian Radiance Fields and Differentiable Dynamics</strong><br>
    <strong>Q. Chen</strong>, N. Gao, S. Huang, J. Low, T. Chen, J. Sun, M. Schwager<br>
    <a href="https://www.arxiv.org/abs/2506.14009" target="_blank">arXiv</a> |
    <a href="https://qianzhong-chen.github.io/gradnavpp.github.io/" target="_blank">website</a> |
    <a href="https://github.com/Qianzhong-Chen/grad_nav" target="_blank">code</a><br><br>
    <strong>TL;DR:</strong> GRaD-Nav++ is a lightweight, fully onboard Vision-Language-Action framework that enables drones to follow natural language commands in real time using DiffRL training in a 3DGS simulator, achieving strong generalization across tasks and environments both in simulation and on real hardware.
  </div>
</div>


<div class="publication" style="display: flex; align-items: stretch; margin-bottom: 30px;">
  <img src="/images/publications/RAL_1.gif" alt="UAV traj" style="width: 240px; height: 150px; object-fit: fill; margin-right: 20px; border-radius: 8px;">
  <div>
    <strong>[RA-L 2023] Simultaneous Spatial and Temporal Assignment for Fast UAV Trajectory Optimization using Bilevel Optimization</strong><br>
    <strong>Q. Chen</strong>, S. Cheng, N. Hovakimyan<br>
    <em>IEEE Robotics and Automation Letters</em>, vol. 8, no. 6, pp. 3860–3867, 2023<br>
    <a href="https://ieeexplore.ieee.org/document/10117594" target="_blank">link</a> |
    <a href="https://arxiv.org/abs/2211.15902" target="_blank">arXiv</a><br><br>
    <strong>TL;DR:</strong> Proposes a bilevel optimization framework for jointly assigning UAV waypoints in space and time to achieve efficient navigation through constrained environments.
  </div>
</div>

---

## Conferences
<div class="publication" style="display: flex; align-items: stretch; margin-bottom: 30px;">
  <img src="/images/publications/arch.png" alt="ARCH" style="width: 240px; height: 150px; object-fit: fill; margin-right: 20px; border-radius: 8px;">
  <div>
    <strong>[CoRL 2025] ARCH: Hierarchical Hybrid Learning for Long-Horizon Contact-Rich Robotic Assembly</strong><br>
    J. Sun, A. Curtis, Y. You, Y. Xu, M. Koehle, <strong>Q. Chen</strong>, S. Huang, L. Guibas, S. Chitta, M. Schwager, H. Li<br>
    <a href="https://arxiv.org/abs/2409.16451" target="_blank">arXiv</a> |
    <a href="https://long-horizon-assembly.github.io/" target="_blank">website</a> |
    <a href="https://long-horizon-assembly.github.io/" target="_blank">code</a><br><br>
    <strong>TL;DR:</strong> ARCH is a hierarchical modular framework that combines imitation learning and reinforcement learning primitives with a high-level policy to enable data-efficient, high-precision, and generalizable long-horizon robotic assembly.
  </div>
</div>

<div class="publication" style="display: flex; align-items: stretch; margin-bottom: 30px;">
  <img src="/images/publications/particle_former_website.jpg" alt="ParticleFormer" style="width: 240px; height: 150px; object-fit: fill; margin-right: 20px; border-radius: 8px;">
  <div>
    <strong>[CoRL 2025] ParticleFormer: A 3D Point Cloud World Model for Multi-Object, Multi-Material Robotic Manipulation</strong><br>
    S. Huang, <strong>Q. Chen</strong>, X. Zhang, J. Sun, M. Schwager<br>
    <a href="https://arxiv.org/abs/2506.23126" target="_blank">arXiv</a> |
    <a href="https://suninghuang19.github.io/particleformer_page/" target="_blank">website</a> |
    <a href="https://suninghuang19.github.io/particleformer_page/" target="_blank">code</a><br><br>
    <strong>TL;DR:</strong> A state-of-the-art 3D world model trained directly from point clouds, which enables accurate dynamics prediction across multi-object, multi-material scenarios and empowers model-based visuomotor control in robotic manipulation tasks.
  </div>
</div>

<div class="publication" style="display: flex; align-items: stretch; margin-bottom: 30px;">
  <img src="/images/publications/gradnav.png" alt="GRaD-Nav" style="width: 240px; height: 150px; object-fit: fill; margin-right: 20px; border-radius: 8px;">
  <div>
    <strong>[IROS 2025] GRaD-Nav: Efficiently learning visual drone navigation with Gaussian radiance fields and differentiable dynamics</strong><br>
    <strong>Q. Chen</strong>, J. Sun, N. Gao, J. Low, T. Chen, M. Schwager<br>
    <a href="https://arxiv.org/abs/2503.03984" target="_blank">arXiv</a> |
    <a href="https://qianzhong-chen.github.io/gradnav.github.io/" target="_blank">website</a> |
    <a href="https://github.com/Qianzhong-Chen/grad_nav" target="_blank">code</a><br><br>
    <strong>TL;DR:</strong> We propose a vision-based drone navigation framework that leverages differentiable dynamics and Gaussian radiance fields for sample-efficient learning and robust generalization.
  </div>
</div>

<div class="publication" style="display: flex; align-items: stretch; margin-bottom: 30px;">
  <img src="/images/publications/difftune.png" alt="Difftune" style="width: 240px; height: 150px; object-fit: fill; margin-right: 20px; border-radius: 8px;">
  <div>
    <strong>[IROS 2025] Autotuning Bipedal Locomotion MPC with GRFM-Net for Efficient Sim-to-Real Transfer</strong><br>
    <strong>Q. Chen</strong>, J. Li, S. Cheng, N. Hovakimyan, Q. Nguyen<br>
    <a href="https://arxiv.org/abs/2409.15710" target="_blank">arXiv</a> |
    <a href="https://sites.google.com/view/difftune-hector/home" target="_blank">website</a><br><br>
    <strong>TL;DR:</strong> This work introduces GRFM-Net for modeling bipedal robot actuation and proposes an MPC autotuning pipeline that enables robust sim-to-real locomotion transfer.
  </div>
</div>
