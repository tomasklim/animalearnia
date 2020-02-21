import { Character } from './Character'
import SpeechBubble from './SpeechBubble'
import { AbstractScene } from '../scenes/AbstractScene'
import { CharacterType, QuestGiverState } from '../enums'

export default class QuestGiver extends Character {
  private spriteType = QuestGiverState.NEW_QUEST

  constructor(scene: AbstractScene, x: number, y: number) {
    super(scene, x, y)

    this.sprite = scene.physics.add.sprite(
      x,
      y,
      CharacterType.QUEST_GIVER,
      this.spriteType
    )
  }

  changeSpriteType = (spriteType: QuestGiverState): void => {
    this.spriteType = spriteType
    switch (spriteType) {
      case QuestGiverState.NEW_QUEST:
        this.sprite.setTexture(
          CharacterType.QUEST_GIVER,
          QuestGiverState.NEW_QUEST
        )
        break
      case QuestGiverState.INCOMPLETE_QUEST:
        this.sprite.setTexture(
          CharacterType.QUEST_GIVER,
          QuestGiverState.INCOMPLETE_QUEST
        )
        break
      case QuestGiverState.COMPLETE_QUEST:
        this.sprite.setTexture(
          CharacterType.QUEST_GIVER,
          QuestGiverState.COMPLETE_QUEST
        )
        break
      case QuestGiverState.NO_QUEST:
        this.sprite.setTexture(
          CharacterType.QUEST_GIVER,
          QuestGiverState.NO_QUEST
        )
        break
    }
  }

  talk(text, width, audio): void {
    new SpeechBubble(this.scene, 730, 1045, width, 70, text)
    this.scene.sound.add(audio).play()
  }
}
