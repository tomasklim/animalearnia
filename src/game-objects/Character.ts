import AbstractScene from '../scenes/AbstractScene'

export interface KeyboardKeys {
  down?: Phaser.Input.Keyboard.Key
  S?: Phaser.Input.Keyboard.Key
  up?: Phaser.Input.Keyboard.Key
  W?: Phaser.Input.Keyboard.Key
  left?: Phaser.Input.Keyboard.Key
  A?: Phaser.Input.Keyboard.Key
  right?: Phaser.Input.Keyboard.Key
  D?: Phaser.Input.Keyboard.Key
  space?: Phaser.Input.Keyboard.Key
}

export abstract class Character {
  protected scene: AbstractScene

  protected keys: KeyboardKeys

  protected x: number

  protected y: number

  public sprite: Phaser.Physics.Arcade.Sprite

  constructor(scene: AbstractScene, x: number, y: number) {
    this.scene = scene
    this.x = x
    this.y = y
  }
}
