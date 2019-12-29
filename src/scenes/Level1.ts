import 'phaser'
import Player from '../game-objects/Player'
import { AbstractScene } from './AbstractScene'
import * as SCENES from '../constants/scenes'
import * as ASSETS from '../constants/assets'
import * as CONFIG from '../constants/config'
import QuestGiver from '../game-objects/QuestGiver'
import LevelBar from '../game-objects/LevelBar'
import QuestBar from '../game-objects/QuestBar'
import Animal from '../game-objects/Animal'
import Level1Quest from '../quests/Level1Quest'

export default class Level1 extends AbstractScene {
  constructor() {
    super(SCENES.SMALL_ZOO_MAP)
  }

  create() {
    this.quest = new Level1Quest()

    const map = this.add.tilemap('map')

    const tileset = map.addTilesetImage('zoo_tiles')

    const worldLayer = map.createStaticLayer('Ground', tileset, 0, 0)
    const objectsLayer = map.createStaticLayer('Objects', tileset, 0, 0)
    const peopleLayer = map.createStaticLayer('People', tileset, 0, 0)

    const interactiveAreas = map
      .createFromObjects('Areas', 'area', {
        alpha: 0
      })
      .map(area =>
        this.physics.add
          .image(area.x, area.y + area.displayHeight, 'area')
          .setVisible(false)
          .setSize(area.displayWidth, area.displayHeight)
          .setName(area.data.list[0].value)
      )

    worldLayer.setCollisionByProperty({ collider: true })
    objectsLayer.setCollisionByProperty({ collider: true })

    this.player = new Player(
      this,
      map.widthInPixels - 100,
      map.heightInPixels - 210,
      interactiveAreas,
      this.quest
    )

    this.questGiver = new QuestGiver(this, 730, 1140)

    this.physics.add.collider(this.player.sprite, worldLayer)
    this.physics.add.collider(this.player.sprite, objectsLayer)

    const camera = this.cameras.main
    camera.setBackgroundColor(CONFIG.BACKGROUND_COLOR)
    camera.startFollow(this.player.sprite)
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels)

    this.animals.set(ASSETS.GIRAFFE, new Animal(this, ASSETS.GIRAFFE, 670, 290))
    this.animals.set(
      ASSETS.ELEPHANT,
      new Animal(this, ASSETS.ELEPHANT, 990, 950)
    )
    this.animals.set(ASSETS.LION, new Animal(this, ASSETS.LION, 960, 570))
    this.animals.set(ASSETS.ZEBRA, new Animal(this, ASSETS.ZEBRA, 280, 530))
    this.animals.set(ASSETS.TIGER, new Animal(this, ASSETS.TIGER, 305, 960))

    this.levelBar = new LevelBar(this, 1)
    this.questBar = new QuestBar(this, this.quest)
  }

  update() {
    this.player.update()
    this.questBar.update()
  }
}
