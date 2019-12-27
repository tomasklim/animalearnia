import 'phaser'
import Player from '../game-objects/Player'
import QuestGiver from '../game-objects/QuestGiver'

export abstract class AbstractScene extends Phaser.Scene {
  public player: Player
  public questGiver: QuestGiver
  public levelBar: any

  constructor(key: string) {
    super(key)

    this.player = null
    this.questGiver = null
  }
}
