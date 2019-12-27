import 'phaser'
import * as SCENES from '../constants/scenes'

export class Menu extends Phaser.Scene {
  public playButton: any

  protected create() {
    this.playButton = this.add
      .text(this.cameras.main.centerX, this.cameras.main.centerY, 'PLAY', {
        fill: '#000',
        fontSize: '30px'
      })
      .setInteractive()
      .on('pointerdown', () => this.play())
      .on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState())

    const camera = this.cameras.main
    camera.setBackgroundColor('#27ae60')
  }

  enterButtonRestState() {
    this.playButton.setStyle({ fill: '#000' })
  }

  enterButtonHoverState() {
    this.playButton.setStyle({ fill: '#fff' })
  }

  play() {
    this.scene.start(SCENES.PRELOADER)
  }
}
