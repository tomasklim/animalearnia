import { AbstractScene } from '../scenes/AbstractScene'
import * as ASSETS from '../constants/assets'
import * as CONFIG from '../constants/config'

export default class LevelComplete extends Phaser.GameObjects.GameObject {
  private rectBackground: Phaser.GameObjects.Rectangle
  private rectTextBackground: Phaser.GameObjects.Rectangle

  private textLevel: Phaser.GameObjects.Text
  private textLevelComplete: Phaser.GameObjects.Text

  private level: number
  private stars: Array<Phaser.GameObjects.Image>

  protected scene: AbstractScene

  constructor(scene: AbstractScene, level: number) {
    super(scene, 'LevelComplete')
    this.scene = scene

    this.level = level
    this.stars = []

    this.init()
  }

  private init() {
    this.createLevelBar()
      .glueElements()
      .toggleVisibility(true)
      .fadeInElements()
  }

  private createLevelBar() {
    const { innerHeight: windowHeight, innerWidth: windowWidth } = window
    const halfHeight = windowHeight / 2
    const halfWidth = windowWidth / 2

    this.rectBackground = this.scene.add.rectangle(
      halfWidth,
      halfHeight,
      windowWidth,
      windowHeight + 20,
      0xfff,
      0.3
    )

    this.rectTextBackground = this.scene.add.rectangle(
      halfWidth,
      halfHeight,
      windowWidth,
      100,
      0x000
    )

    this.textLevel = this.scene.add.text(
      40,
      halfHeight - 20,
      `LEVEL ${this.level}`,
      {
        ...{ fontSize: 50, color: CONFIG.GREEN_COLOR }
      }
    )

    this.textLevelComplete = this.scene.add.text(
      300,
      halfHeight - 20,
      'COMPLETE',
      {
        ...{ fontSize: 50, color: CONFIG.GREEN_COLOR }
      }
    )

    this.stars[0] = this.scene.add.image(600, halfHeight, ASSETS.STAR_FULL)
    this.stars[1] = this.scene.add.image(
      670,
      halfHeight,
      this.scene.quest.errors > 1 ? ASSETS.STAR_EMPTY : ASSETS.STAR_FULL
    )
    this.stars[2] = this.scene.add.image(
      740,
      halfHeight,
      this.scene.quest.errors >= 1 ? ASSETS.STAR_EMPTY : ASSETS.STAR_FULL
    )

    return this
  }

  private glueElements() {
    this.rectBackground.setScrollFactor(0)
    this.rectTextBackground.setScrollFactor(0)
    this.textLevel.setScrollFactor(0)
    this.textLevelComplete.setScrollFactor(0)
    this.stars.map(star => star.setScrollFactor(0))

    return this
  }

  private fadeInElements() {
    const { tweens } = this.scene

    tweens.add({
      alpha: 0.5,
      duration: 600,
      targets: this.rectBackground
    })

    tweens.add({
      alpha: 1,
      displayHeight: 150,
      duration: 600,
      targets: this.rectTextBackground
    })

    tweens.add({
      alpha: 1,
      delay: 200,
      duration: 300,
      targets: this.textLevel,
      x: 20
    })

    tweens.add({
      alpha: 1,
      delay: 400,
      duration: 300,
      targets: this.textLevelComplete,
      x: 255
    })

    tweens.add({
      alpha: 1,
      delay: 400,
      duration: 300,
      targets: this.stars[0],
      x: 550
    })

    tweens.add({
      alpha: 1,
      delay: 400,
      duration: 300,
      targets: this.stars[1],
      x: 620
    })

    tweens.add({
      alpha: 1,
      delay: 400,
      duration: 300,
      targets: this.stars[2],
      x: 690
    })

    setTimeout(() => this.scene.scene.pause(), 1000)

    return this
  }

  private toggleVisibility(show: boolean) {
    if (show) {
      this.rectBackground.setAlpha(0)
      this.rectTextBackground.setAlpha(0)
      this.textLevel.setAlpha(0)
      this.textLevelComplete.setAlpha(0)
      this.stars.map(star => star.setAlpha(0))
    }

    this.rectBackground.setVisible(show)
    this.rectTextBackground.setVisible(show)
    this.textLevel.setVisible(show)
    this.textLevelComplete.setVisible(show)
    this.stars.map(star => star.setVisible(show))

    return this
  }
}
