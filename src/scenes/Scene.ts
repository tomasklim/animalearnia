import 'phaser'
import Player from '../game-objects/Player'
import { AbstractScene } from './AbstractScene'
import * as SCENES from '../constants/scenes'
import QuestGiver from '../game-objects/QuestGiver'

export default class Scene extends AbstractScene {
  constructor() {
    super(SCENES.SMALL_ZOO_MAP)
  }

  create() {
    const map = this.add.tilemap('map')

    const tileset = map.addTilesetImage('zoo_tiles')

    const worldLayer = map.createStaticLayer('Ground', tileset, 0, 0)
    const objectsLayer = map.createStaticLayer('Objects', tileset, 0, 0)
    const peopleLayer = map.createStaticLayer('People', tileset, 0, 0)

    worldLayer.setCollisionByProperty({ collider: true })
    objectsLayer.setCollisionByProperty({ collider: true })

    this.player = new Player(
      this,
      map.widthInPixels - 100,
      map.heightInPixels - 210
    )

    this.questGiver = new QuestGiver(this, 730, 1140)

    this.physics.add.collider(this.player.sprite, worldLayer)
    this.physics.add.collider(this.player.sprite, objectsLayer)

    /*
    const debugGraphics = this.add.graphics().setAlpha(0.75);
    worldLayer.renderDebug(debugGraphics, {
      tileColor: null, // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });
    objectsLayer.renderDebug(debugGraphics, {
      tileColor: null, // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });
    */

    const camera = this.cameras.main
    camera.setBackgroundColor('#27ae60')
    camera.startFollow(this.player.sprite)
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
  }

  update() {
    this.player.update()
    this.questGiver.update()
  }
}
