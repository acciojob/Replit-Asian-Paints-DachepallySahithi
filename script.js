document.getElementById('change_button').addEventListener('click', function() {
    // Get block ID and color from inputs
    let blockId = document.getElementById('block_id').value;
    let color = document.getElementById('colour_id').value;
    
    // Check if the inputs are valid
    if (blockId >= 1 && blockId <= 9 && color) {
        // Reset all grid items to transparent
        let items = document.querySelectorAll('.grid-item');
        items.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
        
        // Change the background color of the selected block
        let selectedBlock = document.getElementById(blockId);
        selectedBlock.style.backgroundColor = color;
    } else {
        alert('Please enter a valid Block ID (1-9) and Color');
    }
});

document.getElementById('reset').addEventListener('click', function() {
    // Reset all grid items to transparent
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
    
    // Clear the inputs
    document.getElementById('block_id').value = '';
    document.getElementById('colour_id').value = '';
});
