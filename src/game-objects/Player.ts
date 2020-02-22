import * as CONFIG from '../config'
import { Character } from './Character'
import LevelComplete from './LevelComplete'
import AbstractScene from '../scenes/AbstractScene'
import { Direction, AudioName, CharacterType, QuestGiverState } from '../enums'

export default class Player extends Character {
  private interactiveAreas: Phaser.Physics.Arcade.Image[]

  constructor(scene: AbstractScene, x: number, y: number, interactiveAreas: Phaser.Physics.Arcade.Image[]) {
    super(scene, x, y)

    this.interactiveAreas = interactiveAreas

    this.sprite = this.scene.physics.add
      .sprite(this.x, this.y, CharacterType.player)
      .setSize(38, 20)
      .setOffset(12, 42)
      .setTexture(CharacterType.player, 4)

    this.keys = this.scene.input.keyboard.addKeys('W,S,A,D,up,down,left,right,space')
  }

  update(): void {
    const { keys, sprite } = this
    const { quest } = this.scene

    const prevVelocity = sprite.body.velocity.clone()

    // Stop any previous movement from the last frame
    sprite.setVelocity(0)

    // Update the animation last and give left/right/down animations precedence over up animations
    if (keys.down.isDown || keys.S.isDown) {
      sprite.setVelocityY(CONFIG.SPEED)
      sprite.anims.play(Direction.down, true)
    } else if (keys.up.isDown || keys.W.isDown) {
      sprite.setVelocityY(-CONFIG.SPEED)
      sprite.anims.play(Direction.up, true)
    } else if (keys.left.isDown || keys.A.isDown) {
      sprite.setVelocityX(-CONFIG.SPEED)
      sprite.anims.play(Direction.left, true)
    } else if (keys.right.isDown || keys.D.isDown) {
      sprite.setVelocityX(CONFIG.SPEED)
      sprite.anims.play(Direction.right, true)
    } else {
      sprite.anims.stop()

      // If we were moving & now we're not, then pick a single idle frame to use
      if (prevVelocity.x < 0) {
        sprite.setTexture(CharacterType.player, 4)
      } else if (prevVelocity.x > 0) {
        sprite.setTexture(CharacterType.player, 8)
      } else if (prevVelocity.y < 0) {
        sprite.setTexture(CharacterType.player, 12)
      } else if (prevVelocity.y > 0) {
        sprite.setTexture(CharacterType.player, 0)
      }
    }

    if (Phaser.Input.Keyboard.JustDown(keys.space) && quest.state < quest.tasks.length) {
      const collisionArea = this.findCollisionArea()

      if (collisionArea) {
        if (this.scene.animals.get(collisionArea.name)) {
          this.scene.animals.get(collisionArea.name).talk()
        }

        const currentQuest = quest.tasks[quest.state]

        if (currentQuest.giver === collisionArea.name && currentQuest.complete) {
          quest.state++
          if (quest.state === quest.tasks.length) {
            this.scene.questGiver.changeSpriteType(QuestGiverState.noQuest)
            this.scene.complete = true
            this.scene.questGiver.talk('Level 1 is complete.\n See you in level 2!', 240, AudioName.Level1Complete)
            setTimeout(() => {
              this.scene.levelComplete = new LevelComplete(this.scene, 1)
            }, 2000)
          } else {
            this.scene.questGiver.changeSpriteType(QuestGiverState.incompleteQuest)
            this.scene.questGiver.talk(
              `${quest.tasks[quest.state].questCompleteText ? `${quest.tasks[quest.state].questCompleteText}\n` : ''}${
                quest.tasks[quest.state].questGiverText
              }`,
              240,
              quest.tasks[quest.state].sound,
            )
          }
        } else if (typeof currentQuest.goalTarget === 'object' && collisionArea.name !== CharacterType.questGiver) {
          const counter = currentQuest.goalTarget.length
          currentQuest.goalTarget = currentQuest.goalTarget.filter(goalTarget => goalTarget !== collisionArea.name)
          if (counter !== currentQuest.goalTarget.length) {
            currentQuest.goalStatus++
          }
          if (!currentQuest.goalTarget.length) {
            currentQuest.complete = true
            this.scene.questGiver.changeSpriteType(QuestGiverState.completeQuest)
          }
        } else if (currentQuest.goalTarget === collisionArea.name) {
          currentQuest.complete = true
          currentQuest.goalStatus++
          this.scene.questGiver.changeSpriteType(QuestGiverState.completeQuest)
        } else if (collisionArea.name !== CharacterType.questGiver) {
          quest.errors++
          this.scene.sound.add(AudioName.errorSound, { volume: 0.1 }).play()
        }

        this.scene.questBar.update()
      }
    }
  }

  findCollisionArea(): Phaser.Physics.Arcade.Image {
    return this.interactiveAreas.find(area => this.scene.physics.overlap(this.sprite, area))
  }
}
