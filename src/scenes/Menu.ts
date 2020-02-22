import { SceneName } from '../enums'

export default class Menu extends Phaser.Scene {
  public playButton: Phaser.GameObjects.Text

  public spaceBar: Phaser.Input.Keyboard.Key

  protected preload(): void {
    this.load.image('menu', './assets/scenes/menu.png')
  }

  protected create(): void {
    this.add.image(0, 0, 'menu').setOrigin(0)

    this.playButton = this.add
      .text(340, 280, 'PLAY', {
        fill: '#f68a24',
        fontSize: '60px',
        fontFamily: '"Acumin Pro"',
      })
      .setInteractive()

    this.playButton
      .on('pointerdown', () => this.play())
      .on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState())

    this.cameras.main

    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
  }

  update(): void {
    if (this.spaceBar.isDown) {
      this.play()
    }
  }

  enterButtonRestState(): void {
    this.playButton.setStyle({ fill: '#f68a24' })
  }

  enterButtonHoverState(): void {
    this.playButton.setStyle({ fill: '#ecc66a' })
  }

  play(): void {
    this.scene.start(SceneName.preloader)
  }
}
