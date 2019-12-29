import * as ASSETS from '../constants/assets'
import * as CONFIG from '../constants/config'
import { Character } from './Character'

export default class Player extends Character {
  public interactiveAreas: any
  public quest: any

  constructor(
    scene,
    x: number,
    y: number,
    interactiveAreas: Phaser.Physics.Arcade.Image[],
    quest
  ) {
    super(scene, x, y)

    this.interactiveAreas = interactiveAreas
    this.scene = scene
    this.quest = quest

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
      this.quest.state < this.quest.tasks.length
    ) {
      const collisionArea = this.findCollisionArea()

      if (collisionArea) {
        const currentQuest = this.quest.tasks[this.quest.state]

        if (currentQuest.giver == collisionArea.name && currentQuest.complete) {
          this.quest.state++
          if (this.quest.state === this.quest.tasks.length) {
            this.scene.questGiver.changeSpriteType(ASSETS.QUEST_GIVER_NO_QUEST)
          } else {
            this.scene.questGiver.changeSpriteType(
              ASSETS.QUEST_GIVER_INCOMPLETE_QUEST
            )
          }
        } else if (
          typeof currentQuest.goalTarget === 'object' &&
          collisionArea.name != ASSETS.QUEST_GIVER
        ) {
          currentQuest.goalTarget = currentQuest.goalTarget.filter(
            goalTarget => goalTarget !== collisionArea.name
          )
          currentQuest.goalStatus++
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
            this.quest.errors++
          }
        }
      }
    }
  }

  findCollisionArea() {
    return this.interactiveAreas.find(area =>
      this.scene.physics.overlap(this.sprite, area)
    )
  }
}
