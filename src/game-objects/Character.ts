import 'phaser'
import { AbstractScene } from '../scenes/AbstractScene'

export abstract class Character {
  protected scene: AbstractScene
  protected keys: any
  protected x: number
  protected y: number
  public sprite: any

  constructor(scene: AbstractScene, x: number, y: number) {
    this.scene = scene
    this.x = x
    this.y = y
  }
}
