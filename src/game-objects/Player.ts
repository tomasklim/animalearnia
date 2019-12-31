import * as ASSETS from '../constants/assets'
import * as CONFIG from '../constants/config'
import { Character } from './Character'
import LevelComplete from './LevelComplete'

export default class Player extends Character {
  public interactiveAreas: any

  constructor(
    scene,
    x: number,
    y: number,
    interactiveAreas: Phaser.Physics.Arcade.Image[]
  ) {
    super(scene, x, y)

    this.interactiveAreas = interactiveAreas
    this.scene = scene

    this.sprite = this.scene.physics.add
      .sprite(this.x, this.y, ASSETS.PLAYER)
      .setSize(38, 20)
      .setOffset(12, 42)
      .setTexture(ASSETS.PLAYER, 4)

    this.keys = this.scene.input.keyboard.addKeys(
      'W,S,A,D,up,down,left,right,space'
    )
  }

  update() {
    const { keys, sprite } = this
    const { quest } = this.scene

    const prevVelocity = sprite.body.velocity.clone()

    // Stop any previous movement from the last frame
    sprite.body.setVelocity(0)

    // Update the animation last and give left/right/down animations precedence over up animations
    if (keys.down.isDown || keys.S.isDown) {
      sprite.body.setVelocityY(CONFIG.SPEED)
      sprite.anims.play(ASSETS.PLAYER_WALK_DOWN, true)
    } else if (keys.up.isDown || keys.W.isDown) {
      sprite.body.setVelocityY(-CONFIG.SPEED)
      sprite.anims.play(ASSETS.PLAYER_WALK_UP, true)
    } else if (keys.left.isDown || keys.A.isDown) {
      sprite.body.setVelocityX(-CONFIG.SPEED)
      sprite.anims.play(ASSETS.PLAYER_WALK_LEFT, true)
    } else if (keys.right.isDown || keys.D.isDown) {
      sprite.body.setVelocityX(CONFIG.SPEED)
      sprite.anims.play(ASSETS.PLAYER_WALK_RIGHT, true)
    } else {
      sprite.anims.stop()

      // If we were moving & now we're not, then pick a single idle frame to use
      if (prevVelocity.x < 0) {
        sprite.setTexture(ASSETS.PLAYER, 4)
      } else if (prevVelocity.x > 0) {
        sprite.setTexture(ASSETS.PLAYER, 8)
      } else if (prevVelocity.y < 0) {
        sprite.setTexture(ASSETS.PLAYER, 12)
      } else if (prevVelocity.y > 0) {
        sprite.setTexture(ASSETS.PLAYER, 0)
      }
    }

    if (
      Phaser.Input.Keyboard.JustDown(keys.space) &&
      quest.state < quest.tasks.length
    ) {
      const collisionArea = this.findCollisionArea()

      if (collisionArea) {
        if (this.scene.animals.get(collisionArea.name)) {
          this.scene.animals.get(collisionArea.name).talk()
        }

        const currentQuest = quest.tasks[quest.state]

        if (currentQuest.giver == collisionArea.name && currentQuest.complete) {
          quest.state++
          if (quest.state === quest.tasks.length) {
            this.scene.questGiver.changeSpriteType(ASSETS.QUEST_GIVER_NO_QUEST)
            this.scene.complete = true
            this.scene.questGiver.talk(
              'Level 1 is complete.\n See you in level 2!',
              240,
              ASSETS.LEVEL1_COMPLETE_AUDIO
            )
            setTimeout(() => {
              this.scene.levelBar = new LevelComplete(this.scene, 1)
            }, 2000)
          } else {
            this.scene.questGiver.changeSpriteType(
              ASSETS.QUEST_GIVER_INCOMPLETE_QUEST
            )
            this.scene.questGiver.talk(
              `${
                quest.tasks[quest.state].questCompleteText
                  ? `${quest.tasks[quest.state].questCompleteText}\n`
                  : ''
              }${quest.tasks[quest.state].questGiverText}`,
              240,
              quest.tasks[quest.state].sound
            )
          }
        } else if (
          typeof currentQuest.goalTarget === 'object' &&
          collisionArea.name != ASSETS.QUEST_GIVER
        ) {
          const counter = currentQuest.goalTarget.length
          // @ts-ignore
          currentQuest.goalTarget = currentQuest.goalTarget.filter(
            goalTarget => goalTarget !== collisionArea.name
          )
          if (counter != currentQuest.goalTarget.length) {
            currentQuest.goalStatus++
          }
          if (!currentQuest.goalTarget.length) {
            currentQuest.complete = true
            this.scene.questGiver.changeSpriteType(
              ASSETS.QUEST_GIVER_COMPLETE_QUEST
            )
          }
        } else if (currentQuest.goalTarget == collisionArea.name) {
          currentQuest.complete = true
          currentQuest.goalStatus++
          this.scene.questGiver.changeSpriteType(
            ASSETS.QUEST_GIVER_COMPLETE_QUEST
          )
        } else {
          if (collisionArea.name !== ASSETS.QUEST_GIVER) {
            quest.errors++
            this.scene.sound.add(ASSETS.ERROR_AUDIO, { volume: 0.1 }).play()
          }
        }

        this.scene.questBar.update()
      }
    }
  }

  findCollisionArea() {
    return this.interactiveAreas.find(area =>
      this.scene.physics.overlap(this.sprite, area)
    )
  }
}
