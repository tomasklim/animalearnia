import { Character } from './Character'
import SpeechBubble from './SpeechBubble'
import AbstractScene from '../scenes/AbstractScene'
import { CharacterType, QuestGiverState } from '../enums'

export default class QuestGiver extends Character {
  private spriteType = QuestGiverState.newQuest

  constructor(scene: AbstractScene, x: number, y: number) {
    super(scene, x, y)

    this.sprite = scene.physics.add.sprite(x, y, CharacterType.questGiver, this.spriteType)
  }

  /**
   * Change sprite type of quest giver
   */
  changeSpriteType = (spriteType: QuestGiverState): void => {
    this.spriteType = spriteType
    switch (spriteType) {
      case QuestGiverState.newQuest:
        this.sprite.setTexture(CharacterType.questGiver, QuestGiverState.newQuest)
        break
      case QuestGiverState.incompleteQuest:
        this.sprite.setTexture(CharacterType.questGiver, QuestGiverState.incompleteQuest)
        break
      case QuestGiverState.completeQuest:
        this.sprite.setTexture(CharacterType.questGiver, QuestGiverState.completeQuest)
        break
      case QuestGiverState.noQuest:
        this.sprite.setTexture(CharacterType.questGiver, QuestGiverState.noQuest)
        break
      default:
        break
    }
  }

  talk(text, width, audio): void {
    new SpeechBubble(this.scene, 730, 1045, width, 70, text)
    this.scene.sound.add(audio).play()
  }
}
