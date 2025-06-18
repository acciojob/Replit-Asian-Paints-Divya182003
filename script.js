document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Set all grid items' background color to transparent
  const gridItems = document.getElementsByClassName("grid-item");
  for (let item of gridItems) {
    item.style.backgroundColor = "transparent";
  }

  // Apply the new color to the selected block
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  }
});

document.getElementById("Reset").addEventListener("click", function () {
  const gridItems = document.getElementsByClassName("grid-item");
  for (let item of gridItems) {
    item.style.backgroundColor = "transparent";
  }

  // Clear inputs
  document.getElementById("block_id").value = "";
  document.getElementById("colour_id").value = "";
});
