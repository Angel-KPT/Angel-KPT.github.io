$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
createPlatform()
createPlatform()
createPlatform()
createPlatform()
createPlatform()
createPlatform()

    // TODO 2 - Create Platforms
createCollectable('database', 355, 625, 0.5, 0.7);
createCollectable('datebase', 476, 523, 0.5, 0.7);
createCollectable('max', 400, 700, 0.5, 0.7);
createCollectable('database', 761, 576, 0.5, 0.7);
createCollectable('steve', 193, 900, 0.5, 0.7);
createCollectable('diamond', 800, 409, 0.5, 0.7);

    // TODO 3 - Create Collectables
createCannon("bottom", 600, 1000);
createCannon("right", 600, 1000);
createCannon("top", 700, 1000);
createCannon("left", 450, 1000);
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
