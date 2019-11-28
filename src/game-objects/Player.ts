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

    this.keys = scene.input.keyboard.createCursorKeys()
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

    // Normalize and scale the velocity so that sprite can't move faster along a diagonal
    sprite.body.velocity.normalize().scale(speed)

    // Update the animation last and give left/right/down animations precedence over up animations
    if (keys.down.isDown) {
      sprite.body.setVelocityY(speed)
      sprite.anims.play(ASSETS.PLAYER_WALK_DOWN, true)
    } else if (keys.up.isDown) {
      sprite.body.setVelocityY(-speed)
      sprite.anims.play(ASSETS.PLAYER_WALK_UP, true)
    } else if (keys.left.isDown) {
      sprite.body.setVelocityX(-speed)
      sprite.anims.play(ASSETS.PLAYER_WALK_LEFT, true)
    } else if (keys.right.isDown) {
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
