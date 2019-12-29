import 'phaser'

export default class QuestBar extends Phaser.GameObjects.GameObject {
  private quest: any
  private questBar: Phaser.GameObjects.Rectangle
  private questText: Phaser.GameObjects.Text
  private questCounter: Phaser.GameObjects.Text
  private questStatus: Phaser.GameObjects.Text
  private currentQuestState: string
  private currentQuestStatus: string
  private currentQuestGoalStatus: number

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

    this.currentQuestState = this.quest.state
    this.currentQuestStatus = this.quest.tasks[this.quest.state].complete
    this.currentQuestGoalStatus = this.quest.tasks[this.quest.state].goalStatus
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
    // TODO: update from player
    if (
      this.currentQuestState !== this.quest.state &&
      this.quest.state < this.quest.tasks.length
    ) {
      this.questText.setText(this.quest.tasks[this.quest.state].objective)
      this.currentQuestState = this.quest.state
    } else if (this.quest.state >= this.quest.tasks.length) {
      this.questText.setText('No quest')
      this.questText.setColor('#ff0000')
      this.questStatus.setText('')
      this.questCounter.setText('')
    }

    if (
      this.quest.state < this.quest.tasks.length &&
      (this.currentQuestStatus !==
        this.quest.tasks[this.quest.state].complete ||
        this.quest.tasks[this.quest.state].goalStatus !==
          this.currentQuestGoalStatus)
    ) {
      this.currentQuestStatus = this.quest.tasks[this.quest.state].complete

      if (this.currentQuestStatus) {
        this.questStatus.setText('Complete')
        this.questStatus.setColor('#116133')
        this.questCounter
          .setText(
            `${this.quest.tasks[this.quest.state].goalStatus} / ${
              this.quest.tasks[this.quest.state].goalTotal
            }`
          )
          .setColor('#116133')
      } else {
        this.questStatus.setText('In progress')
        this.questStatus.setColor('#F9A602')
        this.questCounter
          .setText(
            `${this.quest.tasks[this.quest.state].goalStatus} / ${
              this.quest.tasks[this.quest.state].goalTotal
            }`
          )
          .setColor('#F9A602')
      }

      this.currentQuestGoalStatus = this.quest.tasks[
        this.quest.state
      ].goalStatus
    }
  }
}
