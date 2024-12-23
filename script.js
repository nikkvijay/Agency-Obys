function loadingAnimation() {
  let tl = gsap.timeline();

  tl.from(".loaderContent h1", {
    y: 150,
    opacity: 0,
    duaration: 0.5,
    delay: 1,
    stagger: 0.2,
  });
  tl.from(".timer h2", {
    opacity: 0,
    onStart: function () {
      let time = document.querySelector("#time");
      let grow = 0;
      setInterval(function () {
        grow++;
        if (grow <= 100) {
          time.textContent = grow;
        } else {
          time.textContent = 100;
        }
      }, 20);
    },
  });
  tl.from(".waiting h3", {
    opacity: 0,
    y: 150,
    duaration: 0.5,
  });
  tl.to(".blink h2", {
    opacity: 0,
    duaration: 2,
    animationName: "blinker",
    duaration: 0.2,
  });
  tl.to("#loader .loaderContent h1, .timer h2, .waiting h3,.blink", {
    opacity: 0,
    delay: 1.2,
    duration: 0.1,
    stagger: 0.1,
    // y:-1200
  });
  tl.to("#loader", {
    display: "none",
  });

  tl.from(".heroContainer", {
    y: 1200,
    duration: 1,
  });

  tl.from("nav", {
    opacity: 0,
    y: -100,
  });
  tl.from(".heroContent h2, .heroContent", {
    y: 150,
    opacity: 0,
    // duaration : 0.1,
    stagger: 0.1,
  });
}

loadingAnimation();

function videoContainerEffect() {
  let videoContainer = document.querySelector(".videoContainer");
  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to("#videoCursor", {
        x: dets.x - 1000,
        y: dets.y - 100,
      });
    });
  });

  videoContainer.addEventListener("mouseleave", function () {
    gsap.to("#videoCursor", {
      top: "10%",
    });
  });
  let flag = 0;
  videoContainer.addEventListener("click", function () {
    let video = document.querySelector(".videoContainer video");
    let img = document.querySelector(".videoContainer img");

    if (flag == 0) {
      video.play();
      img.style.opacity = "0";
      document.querySelector(
        "#videoCursor"
      ).innerHTML = `<i class="ri-pause-mini-fill"></i>`;
      gsap.to("#videoCursor", {
        scale: "0.6",
      });
      flag = 1;
    } else {
      video.pause();
      img.style.opacity = "1";
      document.querySelector(
        "#videoCursor"
      ).innerHTML = `<i class="ri-play-mini-fill"></i>`;
      gsap.to("#videoCursor", {
        scale: "1",
      });

      flag = 0;
    }
  });
}

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#crsr", {
        left: dets.x,
        top: dets.y,
      });
    });
  
    Shery.makeMagnet(".menus" ,"svgs");
  }
  
  cursorAnimation();

function flagAnimation() {
  // let flagCard = document.querySelector('#flags');

  wrapper.addEventListener("mousemove", function (dets) {
    gsap.to("#flags", {
      left: dets.x,
      top: dets.y,
    });
  });

  document.querySelector("#hero3").addEventListener("mouseenter", function () {
    gsap.to("#flags", {
      opacity: 1,
    });
  });
  document.querySelector("#hero3").addEventListener("mouseleave", function () {
    gsap.to("#flags", {
      opacity: 0,
    });
  });
}
videoContainerEffect();
flagAnimation();
