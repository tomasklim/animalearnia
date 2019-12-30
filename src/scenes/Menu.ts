import 'phaser'
import * as SCENES from '../constants/scenes'

export class Menu extends Phaser.Scene {
  public playButton: any
  public spaceBar: Phaser.Input.Keyboard.Key

  protected preload() {
    this.load.image('menu', '../../assets/scenes/menu.png')
  }

  protected create() {
    this.add.image(0, 0, 'menu').setOrigin(0)

    this.playButton = this.add
      .text(340, 280, 'PLAY', {
        fill: '#f68a24',
        fontSize: '60px',
        fontFamily: '"Acumin Pro"'
      })
      .setInteractive()
      .on('pointerdown', () => this.play())
      .on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState())

    const camera = this.cameras.main

    this.spaceBar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    )
  }

  update() {
    if (this.spaceBar.isDown) {
      this.play()
    }
  }

  enterButtonRestState() {
    this.playButton.setStyle({ fill: '#f68a24' })
  }

  enterButtonHoverState() {
    this.playButton.setStyle({ fill: '#ecc66a' })
  }

  play() {
    this.scene.start(SCENES.PRELOADER)
  }
}
