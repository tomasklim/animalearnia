import SpeechBubble from './SpeechBubble'
import { AnimalKind } from '../enums'

// TODO
export default class Animal extends Phaser.GameObjects.GameObject {
  private animal: string

  private xSpeechBubble: number

  private ySpeechBubble: number

  private speechText: string

  private audio: Phaser.Sound.BaseSound

  constructor(
    scene: Phaser.Scene,
    animal: AnimalKind,
    x: number,
    y: number,
    xSpeechBubble: number,
    ySpeechBubble: number,
    speechText: string,
    audioName: string
  ) {
    super(scene, animal)

    this.animal = animal
    this.xSpeechBubble = xSpeechBubble
    this.ySpeechBubble = ySpeechBubble
    this.speechText = speechText
    this.audio = this.scene.sound.add(audioName)

    scene.physics.add.image(x, y, this.animal)
  }

  talk(): void {
    new SpeechBubble(this.scene, this.xSpeechBubble, this.ySpeechBubble - 50, 200, 35, this.speechText)
    this.audio.play()
  }
}
