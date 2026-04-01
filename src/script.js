// Get DOM elements
const textarea = document.getElementById('restricted-textarea');
const characterCount = document.getElementById('character-count');
const maxCharacters = document.getElementById('max-characters');

// Configuration
const MAX_LENGTH = 200;

// Initialize the max characters display
maxCharacters.textContent = MAX_LENGTH;

/**
 * Updates the character count display and applies visual feedback
 */
function updateCharacterCount() {
    const currentLength = textarea.value.length;
    
    // Update the count display
    characterCount.textContent = currentLength;
    
    // Check if limit is reached
    const limitReached = currentLength >= MAX_LENGTH;
    
    // Toggle visual indicators
    if (limitReached) {
        textarea.classList.add('limit-reached');
        characterCount.classList.add('warning');
    } else {
        textarea.classList.remove('limit-reached');
        characterCount.classList.remove('warning');
    }
}

/**
 * Handles input events on the textarea
 * Prevents input when character limit is reached
 */
function handleInput(event) {
    const currentLength = textarea.value.length;
    
    // If we're at the limit, truncate any additional input
    if (currentLength > MAX_LENGTH) {
        textarea.value = textarea.value.substring(0, MAX_LENGTH);
    }
    
    updateCharacterCount();
}

/**
 * Handles paste events to ensure pasted content doesn't exceed limit
 */
function handlePaste(event) {
    // Allow the paste to happen, then check and truncate if needed
    setTimeout(() => {
        if (textarea.value.length > MAX_LENGTH) {
            textarea.value = textarea.value.substring(0, MAX_LENGTH);
        }
        updateCharacterCount();
    }, 0);
}

// Event listeners
textarea.addEventListener('input', handleInput);
textarea.addEventListener('paste', handlePaste);
textarea.addEventListener('keyup', updateCharacterCount);
textarea.addEventListener('keydown', updateCharacterCount);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCharacterCount();
});