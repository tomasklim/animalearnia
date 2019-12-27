import * as ASSETS from '../constants/assets'
import { Character } from './Character'

export default class QuestGiver extends Character {
  private spriteType = ASSETS.QUEST_GIVER_NEW_QUEST

  constructor(scene, x, y) {
    super(scene, x, y)

    this.sprite = scene.physics.add.sprite(
      x,
      y,
      ASSETS.QUEST_GIVER,
      this.spriteType
    )
  }

  update() {}

  talk() {
    console.log('Hey man!')
  }

  changeSpriteType = spriteType => {
    switch (spriteType) {
      case ASSETS.QUEST_GIVER_NEW_QUEST:
        this.sprite.setTexture(ASSETS.QUEST_GIVER, ASSETS.QUEST_GIVER_NEW_QUEST)
        break
      case ASSETS.QUEST_GIVER_INCOMPLETE_QUEST:
        this.sprite.setTexture(
          ASSETS.QUEST_GIVER,
          ASSETS.QUEST_GIVER_INCOMPLETE_QUEST
        )
        break
      case ASSETS.QUEST_GIVER_COMPLETE_QUEST:
        this.sprite.setTexture(
          ASSETS.QUEST_GIVER,
          ASSETS.QUEST_GIVER_COMPLETE_QUEST
        )
        break
    }
  }
}
