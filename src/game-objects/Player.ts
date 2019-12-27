import * as ASSETS from '../constants/assets'
import * as CONFIG from '../constants/config'
import { Character } from './Character'

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

    if (Phaser.Input.Keyboard.JustDown(keys.space)) {
      const collisionArea = this.findCollisionArea()
      if (collisionArea) {
        console.log(collisionArea.name)
      }
    }
  }

  findCollisionArea() {
    return this.interactiveAreas.find(area =>
      this.scene.physics.overlap(this.sprite, area)
    )
  }
}
