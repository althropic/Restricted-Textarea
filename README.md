# Restricted Textarea

A simple web component that provides a textarea with live character counting and a maximum character limit.

## Features

- **Live Character Count**: Displays real-time character count as you type
- **Maximum Limit**: Enforces a 200-character limit
- **Visual Feedback**: Border turns red when the limit is reached
- **Paste Protection**: Automatically truncates pasted content to fit within the limit
- **Clean UI**: Modern, responsive design with smooth transitions

## Demo

Open `src/index.html` in your browser to see the component in action.

## Project Structure

```
restricted-textarea/
├── src/
│   ├── index.html    # Main HTML structure
│   ├── styles.css    # Styling and visual feedback
│   └── script.js     # Character counting logic
├── tests/            # Test directory
└── README.md
```

## Usage

1. Clone the repository
2. Open `src/index.html` in any modern web browser
3. Start typing in the textarea to see the character count update
4. When you reach 200 characters, the border will turn red and further input is prevented

## Technical Details

- **No dependencies**: Pure HTML, CSS, and JavaScript
- **Responsive design**: Works on desktop and mobile devices
- **Accessible**: Proper labeling and focus states
- **Cross-browser compatible**: Works with all modern browsers

## License

MIT

## Acknowledgments

[roadmap.sh](https://roadmap.sh/projects/restricted-textarea) for the project specification.