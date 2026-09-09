(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".site-nav__toggle");
  var nav = document.querySelector(".site-nav");

  function closeMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("nav-open", !isOpen);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  var publicationVideos = document.querySelectorAll("[data-publication-video]");

  function muteVideo(video) {
    video.defaultMuted = true;
    video.muted = true;
    video.volume = 0;
  }

  function playVideo(video) {
    muteVideo(video);

    if (
      video.ended ||
      (Number.isFinite(video.duration) && video.currentTime >= video.duration - 0.05)
    ) {
      video.currentTime = 0;
    }

    var playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        // Muted autoplay can still be blocked by browser or power-saving rules.
      });
    }
  }

  if (publicationVideos.length) {
    publicationVideos.forEach(function (video) {
      muteVideo(video);

      video.addEventListener("volumechange", function () {
        if (!video.muted || video.volume !== 0) muteVideo(video);
      });

      video.addEventListener("ended", function () {
        video.currentTime = 0;
        playVideo(video);
      });
    });

    if ("IntersectionObserver" in window) {
      var videoObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              playVideo(entry.target);
            } else {
              entry.target.pause();
            }
          });
        },
        { rootMargin: "180px 0px", threshold: 0.08 }
      );

      publicationVideos.forEach(function (video) {
        videoObserver.observe(video);
      });
    } else {
      publicationVideos.forEach(playVideo);
    }
  }
})();
