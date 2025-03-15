# Base Playable Template

A starter template for creating playable ads with TypeScript support. This template uses:

- [@smoud/playable-sdk](https://github.com/smoudjs/playable-sdk#readme) - SDK for creating playable ads with standardized events and methods
- [@smoud/playable-scripts](https://github.com/smoudjs/playable-scripts#readme) - Build and development tools optimized for playable ads

## Demo

Try out this template:
- [Open in CodeSandbox](https://codesandbox.io/p/github/smoudjs/playable-template-base/master?import=true)
- [View on CodePen](https://codepen.io/peter-hutsul/pen/QwWarRB)

## Features

- TypeScript support
- Hot module replacement during development
- Basic game structure with SDK integration
- Event handling (resize, pause, resume, volume, etc.)
- Installation button implementation
- Interaction tracking

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/index.ts` - Main entry point with SDK and Game initialization
- `src/Game.ts` - Game logic
- `src/index.css` - Styles for your playable
- `src/index.html` - HTML template

## Looking for More?

Check out other available templates for different frameworks and use cases:
- [playable-template-base-js](https://github.com/smoudjs/playable-template-base-js) - JavaScript version of this template
- [playable-template-pixi](https://github.com/smoudjs/playable-template-pixi) - Template with PixiJS (TypeScript)
- [playable-template-pixi-js](https://github.com/smoudjs/playable-template-pixi-js) - Template with PixiJS (JavaScript)
- [playable-template-three](https://github.com/smoudjs/playable-template-three) - Template with Three.js
- [playable-template-phaser](https://github.com/smoudjs/playable-template-phaser) - Template with Phaser
