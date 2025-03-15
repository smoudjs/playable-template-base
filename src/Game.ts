import { sdk } from '@smoud/playable-sdk';
// Using assets/* alias configured in tsconfig.json for direct assets import
import buttonBg from 'assets/button.png';

export class Game {
  private container: HTMLDivElement;
  private installButton: HTMLDivElement;
  private buttonImage: HTMLImageElement;

  constructor(width: number, height: number) {
    // Create game container
    this.container = document.createElement('div');
    this.container.style.cssText =
      'position: relative; display: flex; align-items: center; justify-content: center; background-color: rgb(28, 28, 28);';
    this.container.style.width = `${width}px`;
    this.container.style.height = `${height}px`;

    document.body.appendChild(this.container);

    // Load image
    this.buttonImage = new Image();
    this.buttonImage.src = buttonBg;

    this.buttonImage.onload = () => {
      this.create();
    };
  }

  public create(): void {
    this.installButton = document.createElement('div');
    this.installButton.style.cursor = 'pointer';
    this.installButton.onclick = () => sdk.install();

    // Add image
    this.buttonImage.width = 200;
    this.installButton.appendChild(this.buttonImage);

    // Add text overlay
    const text = document.createElement('div');
    text.textContent = 'Install';
    text.style.cssText =
      'position: absolute;top: 50%;left: 50%;transform: translate(-50%, -58%);color: rgb(255 255 255);font-size: 35px;font-weight: bold;text-shadow: rgb(255 252 106 / 63%) 4px 3px 9px;pointer-events: none;font-family: cursive;';
    this.installButton.appendChild(text);

    this.container.appendChild(this.installButton);

    // Set up interaction listener
    sdk.on('interaction', (count: number) => {
      console.log(`Interaction count: ${count}`);

      if (sdk.interactions >= 10) {
        sdk.finish();
      }
    });

    sdk.start();
  }

  public resize(width: number, height: number): void {
    this.container.style.width = `${width}px`;
    this.container.style.height = `${height}px`;

    // Calculate scale based on screen dimensions
    const scaleX = width / 320;
    const scaleY = height / 480;
    const scale = Math.min(scaleX, scaleY); // Use smaller scale to fit both dimensions

    this.installButton.style.transform = `scale(${scale})`;
  }

  public pause(): void {
    console.log('Game paused');
  }

  public resume(): void {
    console.log('Game resumed');
  }

  public volume(value: number): void {
    console.log(`Volume changed to: ${value}`);
  }

  public finish(): void {
    console.log('Game finished');
  }
}
