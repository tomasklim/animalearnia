import * as ASSETS from '../constants/assets'
import { Character } from './Character'

export default class Player extends Character {
  constructor(scene, x, y) {
    super(scene, x, y)

    this.sprite = scene.physics.add
      .sprite(x, y, ASSETS.PLAYER, 0)
      .setSize(38, 20)
      .setOffset(12, 42)

    this.sprite.setTexture(ASSETS.PLAYER, 4)

    this.keys = scene.input.keyboard.addKeys('W,S,A,D,up,down,left,right')
  }

  freeze() {
    this.sprite.body.moves = false
  }

  update() {
    const keys = this.keys
    const sprite = this.sprite
    const speed = 300
    const prevVelocity = sprite.body.velocity.clone()

    // Stop any previous movement from the last frame
    sprite.body.setVelocity(0)
    // Update the animation last and give left/right/down animations precedence over up animations
    if (keys.down.isDown || keys.S.isDown) {
      sprite.body.setVelocityY(speed)
      sprite.anims.play(ASSETS.PLAYER_WALK_DOWN, true)
    } else if (keys.up.isDown || keys.W.isDown) {
      sprite.body.setVelocityY(-speed)
      sprite.anims.play(ASSETS.PLAYER_WALK_UP, true)
    } else if (keys.left.isDown || keys.A.isDown) {
      sprite.body.setVelocityX(-speed)
      sprite.anims.play(ASSETS.PLAYER_WALK_LEFT, true)
    } else if (keys.right.isDown || keys.D.isDown) {
      sprite.body.setVelocityX(speed)
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
  }

  destroy() {
    this.sprite.destroy()
  }
}
