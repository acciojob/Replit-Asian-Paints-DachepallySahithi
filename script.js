const blockIdInput = document.getElementById('block_id');
        const colorIdInput = document.getElementById('colour_id');
        const changeButton = document.getElementById('change_button');
        const resetButton = document.getElementById('reset_button');
        const gridItems = document.querySelectorAll('.grid-item');

        // Event listener for the Change Color button
        changeButton.addEventListener('click', () => {
            // Get the block ID and color values
            const blockId = blockIdInput.value;
            const color = colorIdInput.value;

            if (blockId && color) {
                // Reset all grid item colors to transparent
                gridItems.forEach(item => {
                    item.style.backgroundColor = 'transparent';
                });

                // Change the color of the selected block
                const selectedBlock = document.getElementById(blockId);
                if (selectedBlock) {
                    selectedBlock.style.backgroundColor = color;
                } else {
                    alert('Invalid Block ID!');
                }
            } else {
                alert('Please enter both Block ID and Color!');
            }
        });

        // Event listener for the Reset button
        resetButton.addEventListener('click', () => {
            // Reset all grid item colors to transparent
            gridItems.forEach(item => {
                item.style.backgroundColor = 'transparent';
            });

            // Reset the input fields
            blockIdInput.value = '';
            colorIdInput.value = '';
        });
