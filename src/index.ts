import 'phaser'
import { Preloader } from './scenes/Preloader'
import { Menu } from './scenes/Menu'

import Scene from './scenes/Scene'

class PhaserGame extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'app',
      pixelArt: true,
      scene: [Menu, Preloader, Scene],
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }
          // debug: true
        }
      }
    }
    super(config)
  }
}

new PhaserGame()
