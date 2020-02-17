import { AbstractQuest } from '../quests/AbstractQuest'
import * as CONFIG from '../constants/config'

export default class QuestBar extends Phaser.GameObjects.GameObject {
  private quest: AbstractQuest
  private questBar: Phaser.GameObjects.Rectangle
  private questText: Phaser.GameObjects.Text
  private questStatus: Phaser.GameObjects.Text
  private questCounter: Phaser.GameObjects.Text
  private errorsCounter: Phaser.GameObjects.Text

  constructor(scene: Phaser.Scene, quest) {
    super(scene, 'QuestBar')

    this.quest = quest
    this.init()
  }

  private init() {
    this.createLevelBar().glueElements()
  }

  private createLevelBar() {
    this.questBar = this.scene.add
      .rectangle(570, 10, 220, 80, 0xffffff, 1)
      .setStrokeStyle(2, 0x000)
      .setOrigin(0)

    this.questText = this.scene.add.text(
      580,
      20,
      this.quest.tasks[this.quest.state].objective,
      { color: '#000' }
    )

    this.questCounter = this.scene.add.text(
      580,
      40,
      `${this.quest.tasks[this.quest.state].goalStatus} / ${
        this.quest.tasks[this.quest.state].goalTotal
      }`,
      {
        color: '#F9A602'
      }
    )

    this.errorsCounter = this.scene.add.text(700, 40, `0 Errors`, {
      color: '#FF0000'
    })

    this.questStatus = this.scene.add.text(580, 60, 'In progress', {
      color: '#F9A602'
    })

    return this
  }

  private glueElements() {
    this.questBar.setScrollFactor(0).setDepth(10)
    this.questText.setScrollFactor(0).setDepth(10)
    this.questCounter
      .setScrollFactor(0)
      .setDepth(10)
      .setDepth(10)
    this.questStatus.setScrollFactor(0).setDepth(10)
    this.errorsCounter.setScrollFactor(0).setDepth(10)
    return this
  }

  update() {
    if (this.quest.state < this.quest.tasks.length) {
      const currentTask = this.quest.tasks[this.quest.state]
      this.questText.setText(currentTask.objective)
      this.errorsCounter.setText(`${this.quest.errors} Errors`)

      if (currentTask.complete) {
        this.questStatus.setText('Complete')
        this.questStatus.setColor(CONFIG.GREEN_COLOR)
        this.questCounter
          .setText(`${currentTask.goalStatus} / ${currentTask.goalTotal}`)
          .setColor(CONFIG.GREEN_COLOR)
      } else {
        this.questStatus.setText('In progress')
        this.questStatus.setColor(CONFIG.ORANGE_COLOR)
        this.questCounter
          .setText(`${currentTask.goalStatus} / ${currentTask.goalTotal}`)
          .setColor(CONFIG.ORANGE_COLOR)
      }
    } else if (this.quest.state >= this.quest.tasks.length) {
      this.questText.setText('No quest')
      this.questText.setColor(CONFIG.RED_COLOR)
      this.questStatus.setText('')
      this.questCounter.setText('')
      this.errorsCounter.setX(580)
    }
  }
}
