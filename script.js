document.getElementById('change_button').addEventListener('click', function() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;
    const block = document.getElementById(blockId);
    if (block) {
      block.style.backgroundColor = color;
    }
  });

  document.getElementById('reset_button').addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.style.backgroundColor = 'transparent';
    });
  });