import SpeechBubble from './SpeechBubble'

export default class Animal extends Phaser.GameObjects.GameObject {
  private animal: string

  private xSpeechBubble: number
  private ySpeechBubble: number

  private speechText: string
  private audioText: Phaser.Sound.BaseSound

  constructor(
    scene: Phaser.Scene,
    animal: string,
    x: number,
    y: number,
    xSpeechBubble: number,
    ySpeechBubble: number,
    speechText: string,
    audioText: string
  ) {
    super(scene, animal)

    this.animal = animal
    this.xSpeechBubble = xSpeechBubble
    this.ySpeechBubble = ySpeechBubble
    this.speechText = speechText
    this.audioText = this.scene.sound.add(audioText)

    scene.physics.add.image(x, y, this.animal)
  }

  talk() {
    new SpeechBubble(
      this.scene,
      this.xSpeechBubble,
      this.ySpeechBubble - 50,
      200,
      35,
      this.speechText
    )
    this.audioText.play()
  }
}
