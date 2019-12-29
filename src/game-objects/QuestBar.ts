import 'phaser'

export default class QuestBar extends Phaser.GameObjects.GameObject {
  private quest: any
  private questBar: Phaser.GameObjects.Rectangle
  private questText: Phaser.GameObjects.Text
  private currentQuestState: string

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
      .rectangle(590, 10, 200, 100, 0xffffff, 1)
      .setStrokeStyle(2, 0x000)
      .setOrigin(0)

    this.questText = this.scene.add.text(
      600,
      20,
      this.quest.tasks[this.quest.state].objective,
      { color: '#000' }
    )

    this.currentQuestState = this.quest.state
    return this
  }

  private glueElements() {
    this.questBar.setScrollFactor(0)
    this.questText.setScrollFactor(0)
    return this
  }

  update() {
    if (
      this.currentQuestState !== this.quest.state &&
      this.quest.state < this.quest.tasks.length
    ) {
      this.questText.setText(this.quest.tasks[this.quest.state].objective)
      this.currentQuestState = this.quest.state
    } else if (this.quest.state >= this.quest.tasks.length) {
      this.questText.setText('No quest')
      this.questText.setColor('#ff0000')
    }
  }
}
