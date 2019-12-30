import 'phaser'

export default class QuestBar extends Phaser.GameObjects.GameObject {
  private quest: any
  private questBar: Phaser.GameObjects.Rectangle
  private questText: Phaser.GameObjects.Text
  private questCounter: Phaser.GameObjects.Text
  private questStatus: Phaser.GameObjects.Text

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
      .rectangle(590, 10, 200, 80, 0xffffff, 1)
      .setStrokeStyle(2, 0x000)
      .setOrigin(0)

    this.questText = this.scene.add.text(
      600,
      20,
      this.quest.tasks[this.quest.state].objective,
      { color: '#000' }
    )

    this.questCounter = this.scene.add.text(
      600,
      40,
      `${this.quest.tasks[this.quest.state].goalStatus} / ${
        this.quest.tasks[this.quest.state].goalTotal
      }`,
      {
        color: '#F9A602'
      }
    )

    this.questStatus = this.scene.add.text(600, 60, 'In progress', {
      color: '#F9A602'
    })

    return this
  }

  private glueElements() {
    this.questBar.setScrollFactor(0)
    this.questText.setScrollFactor(0)
    this.questCounter.setScrollFactor(0)
    this.questStatus.setScrollFactor(0)
    return this
  }

  update() {
    if (this.quest.state < this.quest.tasks.length) {
      const currentTask = this.quest.tasks[this.quest.state]

      this.questText.setText(currentTask.objective)

      if (currentTask.complete) {
        this.questStatus.setText('Complete')
        this.questStatus.setColor('#116133')
        this.questCounter
          .setText(`${currentTask.goalStatus} / ${currentTask.goalTotal}`)
          .setColor('#116133')
      } else {
        this.questStatus.setText('In progress')
        this.questStatus.setColor('#F9A602')
        this.questCounter
          .setText(`${currentTask.goalStatus} / ${currentTask.goalTotal}`)
          .setColor('#F9A602')
      }
    } else if (this.quest.state >= this.quest.tasks.length) {
      this.questText.setText('No quest')
      this.questText.setColor('#ff0000')
      this.questStatus.setText('')
      this.questCounter.setText('')
    }
  }
}
