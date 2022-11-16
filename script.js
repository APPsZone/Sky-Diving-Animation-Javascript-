const airplane = document.getElementById("airplane");
const person1 = document.getElementById("person-1");
const canvas = document.getElementById("canvas");
const clouds = document.getElementById("clouds");
const totalClouds = 30;

// random number between min and max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setCloud() {
  for (let i = 1; i < totalClouds; i++) {
    let cloud = document.createElement("div");
    cloud.id = "cloud" + i;
    cloud.classList.add("cloud" + i);
    clouds.appendChild(cloud);

    // set position
    cloud.style.left = random(-50, -window.innerWidth) + "px";
    cloud.style.top = random(0, window.innerHeight / 2) + "px";
    cloud.style.zIndex = random(1, 10);
  }
}

function setBackground() {
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight * 2 + "px";
  canvas.style.top = -window.innerHeight + "px";
}

function animate() {
  airplane.velocity(
    {
      top: "0",
      left: "40%",
      transform: ["rotate(10deg)", "rotate(0deg)"],
    },
    {
      duration: 7000,
    }
  );
  airplane.velocity(
    {
      left: "30%",
      transform: ["rotate(0deg)", "rotate(10deg)"],
    },
    {
      duration: 6500,
    }
  );

  airplane.velocity(
    {
      left: "-500px",
      top: "122px",
      transform: ["rotate(-5.3deg)", "rotate(0deg)"],
    },
    {
      duration: 15600,
    }
  );

  person1.velocity(
    {
      opacity: 1,
    },
    {
      delay: 12900,
      duration: 1100,
    }
  );

  person1.velocity(
    {
      top: window.innerHeight + 80,
    },
    {
      queue: false,
      delay: 12900,
      duration: 13000,
    }
  );

  canvas.velocity(
    {
      top: "0",
    },
    {
      queue: false,
      duration: 7000,
    }
  );

  for (let i = 1; i < totalClouds; i++) {
    let duration = Math.abs(parseInt(document.getElementById("cloud" + i).style.left) / 100) * 2000;

    console.log(duration);

    if (duration < 10000) {
      duration = random(10000, 15000);
    }
    document.getElementById("cloud" + i).velocity(
      {
        left: window.innerWidth + 500,
      },
      {
        duration: duration,
      }
    );
  }
}

setCloud();
setBackground();
animate();
