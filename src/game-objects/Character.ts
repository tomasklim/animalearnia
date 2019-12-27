import 'phaser'
import { AbstractScene } from '../scenes/AbstractScene'

export abstract class Character {
  protected scene: AbstractScene
  public sprite: any
  public keys: any
  public x: number
  public y: number

  constructor(scene: AbstractScene, x: number, y: number) {
    this.scene = scene
    this.x = x
    this.y = y
    this.keys = null
    this.sprite = null
  }
}
