export default class SpeechBubble extends Phaser.GameObjects.GameObject {
  private bubble: Phaser.GameObjects.Graphics
  private text: Phaser.GameObjects.Text

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    quote: string
  ) {
    super(scene, 'SpeechBubble')

    this.createSpeechBubble(x, y, width, height, quote)
      .fadeInElements()
      .fadeOutElements()
      .destroyElements()
  }

  createSpeechBubble(
    x: number,
    y: number,
    width: number,
    height: number,
    quote: string
  ): SpeechBubble {
    const bubbleWidth = width
    const bubbleHeight = height
    const bubblePadding = 10
    const arrowHeight = bubbleHeight / 4

    this.bubble = this.scene.add.graphics({ x: x, y: y })

    //  Bubble color
    this.bubble.fillStyle(0xffffff, 1)

    //  Bubble outline line style
    this.bubble.lineStyle(4, 0x000, 1)

    //  Bubble shape and outline
    this.bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 0)
    this.bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 0)

    //  Calculate arrow coordinates
    const point1X = Math.floor(bubbleWidth / 7)
    const point1Y = bubbleHeight
    const point2X = Math.floor((bubbleWidth / 7) * 2)
    const point2Y = bubbleHeight
    const point3X = Math.floor(bubbleWidth / 7)
    const point3Y = Math.floor(bubbleHeight + arrowHeight)

    //  Bubble arrow fill
    this.bubble.fillTriangle(
      point1X,
      point1Y,
      point2X,
      point2Y,
      point3X,
      point3Y
    )
    this.bubble.lineStyle(2, 0x000, 1)
    this.bubble.lineBetween(point2X, point2Y, point3X, point3Y)
    this.bubble.lineBetween(point1X, point1Y, point3X, point3Y)

    this.text = this.scene.add.text(0, 0, quote, {
      color: '#000000',
      align: 'center',
      wordWrap: { width: bubbleWidth - bubblePadding * 2 }
    })

    const bounds = this.text.getBounds()

    this.text.setPosition(
      this.bubble.x + bubbleWidth / 2 - bounds.width / 2,
      this.bubble.y + bubbleHeight / 2 - bounds.height / 2
    )

    return this
  }

  private fadeInElements(): SpeechBubble {
    const { tweens } = this.scene

    tweens.add({
      alpha: 1,
      duration: 500,
      targets: [this.bubble, this.text]
    })

    return this
  }

  private fadeOutElements(): SpeechBubble {
    const { tweens } = this.scene

    const numberOfElements = 2
    let elementsCompleted = 0

    setTimeout(() => {
      tweens.add({
        alpha: 0,
        duration: 500,
        onComplete: () => {
          elementsCompleted = elementsCompleted + 2

          if (elementsCompleted === numberOfElements) {
            this.toggleVisibility(false)
          }
        },
        targets: [this.bubble, this.text]
      })
    }, 3000)

    return this
  }

  private destroyElements(): void {
    setTimeout(() => {
      this.text.destroy()
      this.bubble.destroy()
    }, 5000)
  }

  private toggleVisibility(show: boolean): SpeechBubble {
    if (show) {
      this.bubble.setAlpha(0)
      this.text.setAlpha(0)
    }

    this.bubble.setVisible(show)
    this.text.setVisible(show)

    return this
  }
}
