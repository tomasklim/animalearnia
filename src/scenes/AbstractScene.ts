import 'phaser'
import Player from '../game-objects/Player'
import QuestGiver from '../game-objects/QuestGiver'
import Animal from '../game-objects/Animal'

export abstract class AbstractScene extends Phaser.Scene {
  public player: Player
  public questGiver: QuestGiver
  public levelBar: any
  public quest: any
  public questBar: any
  public animals: Map<string, Animal>
  public complete: boolean

  constructor(key: string) {
    super(key)

    this.player = null
    this.questGiver = null
    this.animals = new Map()
    this.complete = false
  }
}
