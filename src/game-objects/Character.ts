import 'phaser'
import { AbstractScene } from '../scenes/AbstractScene'

export abstract class Character {
  protected scene: AbstractScene
  public sprite: any
  public keys: Phaser.Types.Input.Keyboard.CursorKeys

  constructor(scene: AbstractScene, x: number, y: number) {
    this.scene = scene
    this.keys = null
    this.sprite = null
  }
}
