import Player from '../game-objects/Player'
import QuestGiver from '../game-objects/QuestGiver'
import Animal from '../game-objects/Animal'
import { AbstractQuest } from '../quests/AbstractQuest'
import LevelBar from '../game-objects/LevelBar'
import QuestBar from '../game-objects/QuestBar'

export abstract class AbstractScene extends Phaser.Scene {
  public player: Player
  public questGiver: QuestGiver
  public levelBar: LevelBar
  public levelComplete: Phaser.GameObjects.GameObject
  public quest: AbstractQuest
  public questBar: QuestBar
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
