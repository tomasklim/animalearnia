import 'phaser'
import SpeechBubble from './SpeechBubble'

export default class Animal extends Phaser.GameObjects.GameObject {
  private animal: string
  private xSpeechBubble: number
  private ySpeechBubble: number
  private text: string
  private audio: any

  constructor(
    scene: Phaser.Scene,
    animal: string,
    x: number,
    y: number,
    xSpeechBubble: number,
    ySpeechBubble: number,
    text: string,
    audio: string
  ) {
    super(scene, animal)
    this.animal = animal
    this.xSpeechBubble = xSpeechBubble
    this.ySpeechBubble = ySpeechBubble
    this.text = text
    this.audio = this.scene.sound.add(audio)
    scene.physics.add.image(x, y, this.animal)
  }

  talk() {
    new SpeechBubble(
      this.scene,
      this.xSpeechBubble,
      this.ySpeechBubble - 50,
      200,
      35,
      this.text
    )
    this.audio.play()
  }
}
