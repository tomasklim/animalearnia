import * as ASSETS from '../constants/assets'
import { Character } from './Character'

export default class QuestGiver extends Character {
  public spriteType = ASSETS.QUEST_GIVER_NEW_QUEST

  constructor(scene, x, y) {
    super(scene, x, y)

    this.sprite = scene.physics.add
      .sprite(x, y, ASSETS.QUEST_GIVER, this.spriteType)
      .setSize(38, 20)

    this.sprite.setTexture(ASSETS.QUEST_GIVER, 0)

    this.sprite.setInteractive()
    this.sprite.on('pointerdown', () => this.talk())

    this.keys = scene.input.keyboard.addKeys('SPACE')
  }

  update() {
    if (this.keys.SPACE.isDown) {
      this.talk()
    }
  }

  talk() {
    /* console.log(
      Math.abs(this.scene.player.sprite.x - this.sprite.x),
      Math.abs(this.scene.player.sprite.y - this.sprite.y)
    ) */
    if (
      Math.abs(this.scene.player.sprite.x - this.sprite.x) < 60 &&
      Math.abs(this.scene.player.sprite.y - this.sprite.y) < 30
    ) {
      console.log('kuk')
    }
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
