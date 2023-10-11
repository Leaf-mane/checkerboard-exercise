document.addEventListener("DOMContentLoaded", function () {
    // Define the size of the checkerboard
    const boardSize = 8;
  
    // Get the body element
    const body = document.body;
  
    // Create a container div for the tiles
    const tilesContainer = document.createElement("div");
    tilesContainer.id = "tiles-container";
    tilesContainer.style.display = "flex";
    tilesContainer.style.flexWrap = "wrap";
    tilesContainer.style.width = "800px";
    tilesContainer.style.height = "800px";
    tilesContainer.style.margin = "auto";
    //tilesContainer.style.background = "linear-gradient(45deg, red, black)";"
    tilesContainer.style.zIndex = "0";
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        const tile = document.createElement("div");
  
        //background color based on the row and column (red and black) 
        if ((i + j) % 2 === 0) {
          tile.style.backgroundColor = "red";
        } else {
          tile.style.backgroundColor = "black";
        }
         
        //Multi-colored Background
        // const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
        //     tile.style.backgroundColor = randomColor;

        //Random color swap
        // function colorSwap(){
        //     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
        //     tile.style.backgroundColor = randomColor;
        // }

        //Gradient Checkerboard
        

        // setInterval(colorSwap, 2000)
        // Set the tile size
        tile.style.width = "12.5%";
        tile.style.height = "12.5%";
         
        
        // Append the tile to the container
        tilesContainer.appendChild(tile);
      }
    }
    
    // Add the container to the body
    body.appendChild(tilesContainer);
  });