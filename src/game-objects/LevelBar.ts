import 'phaser'

export default class LevelBar extends Phaser.GameObjects.GameObject {
  private rectBackground: Phaser.GameObjects.Rectangle
  private rectTextBackground: Phaser.GameObjects.Rectangle

  private textLevel: Phaser.GameObjects.Text
  private textLevelNumber: Phaser.GameObjects.Text

  private level: number

  constructor(scene: Phaser.Scene, level: number) {
    super(scene, 'LevelBar')

    this.level = level

    this.init()
  }

  private init() {
    this.createLevelBar()
      .glueElements()
      .toggleVisibility(true)
      .fadeInElements()
      .fadeOutElements()
      .destroyElements()
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

    this.textLevel = this.scene.add.text(40, halfHeight - 20, 'LEVEL', {
      ...{ fontSize: 70 }
    })

    this.textLevelNumber = this.scene.add.text(
      300,
      halfHeight - 30,
      `${this.level}`,
      {
        ...{ fontSize: 90 }
      }
    )

    return this
  }

  private glueElements() {
    this.rectBackground.setScrollFactor(0)
    this.rectTextBackground.setScrollFactor(0)
    this.textLevel.setScrollFactor(0)
    this.textLevelNumber.setScrollFactor(0)

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
      targets: this.textLevelNumber,
      x: 250
    })

    return this
  }

  private fadeOutElements() {
    const { tweens } = this.scene

    const numberOfElements = 4
    let elementsCompleted = 0

    setTimeout(() => {
      tweens.add({
        alpha: 0,
        duration: 500,
        onComplete: () => {
          elementsCompleted++

          if (elementsCompleted === numberOfElements) {
            this.toggleVisibility(false)
          }
        },
        targets: this.textLevelNumber,
        x: 300
      })

      tweens.add({
        alpha: 0,
        delay: 200,
        duration: 500,
        onComplete: () => {
          elementsCompleted++

          if (elementsCompleted === numberOfElements) {
            this.toggleVisibility(false)
          }
        },
        targets: this.textLevel,
        x: 40
      })

      tweens.add({
        delay: 600,
        duration: 600,
        onComplete: () => {
          elementsCompleted++

          if (elementsCompleted === numberOfElements) {
            this.toggleVisibility(false)
          }
        },
        targets: this.rectBackground,
        alpha: 0
      })

      tweens.add({
        alpha: 0,
        delay: 600,
        displayHeight: 100,
        duration: 600,
        onComplete: () => {
          elementsCompleted++

          if (elementsCompleted === numberOfElements) {
            this.toggleVisibility(false)
          }
        },
        targets: this.rectTextBackground
      })
    }, 2000)

    return this
  }

  private destroyElements() {
    setTimeout(() => {
      this.textLevel.destroy()
      this.textLevelNumber.destroy()
      this.rectBackground.destroy()
      this.rectTextBackground.destroy()
    }, 4000)
  }

  private toggleVisibility(show: boolean) {
    if (show) {
      this.rectBackground.setAlpha(0)
      this.rectTextBackground.setAlpha(0)
      this.textLevel.setAlpha(0)
      this.textLevelNumber.setAlpha(0)
    }

    this.rectBackground.setVisible(show)
    this.rectTextBackground.setVisible(show)
    this.textLevel.setVisible(show)
    this.textLevelNumber.setVisible(show)

    return this
  }
}
