import 'phaser'
import Player from '../game-objects/Player'

export abstract class AbstractScene extends Phaser.Scene {
  public player: Player

  constructor(key: string) {
    super(key)

    this.player = null
  }
}
