import Player from '../game-objects/Player'
import AbstractScene from './AbstractScene'
import QuestGiver from '../game-objects/QuestGiver'
import QuestBar from '../game-objects/QuestBar'
import Level1Quest from '../quests/Level1Quest'
import LevelBar from '../game-objects/LevelBar'
import { AnimalKind, AudioName, SceneName } from '../enums'
import Animal from '../game-objects/Animal'
import * as CONFIG from '../config'

export default class Level1 extends AbstractScene {
  constructor() {
    super(SceneName.smallZooMap)
  }

  create(): void {
    const map = this.add.tilemap('map')

    const tileset = map.addTilesetImage('zoo_tiles')

    const worldLayer = map.createStaticLayer('Ground', tileset, 0, 0)
    const objectsLayer = map.createStaticLayer('Objects', tileset, 0, 0)
    // const peopleLayer = map.createStaticLayer('People', tileset, 0, 0)
    map.createStaticLayer('People', tileset, 0, 0)

    const interactiveAreas = map
      .createFromObjects('Areas', 'area', {
        alpha: 0,
      })
      .map(area =>
        this.physics.add
          .image(area.x, area.y + area.displayHeight, 'area')
          .setVisible(false)
          .setSize(area.displayWidth, area.displayHeight)
          .setName(area.data.list[0].value)
      )

    this.player = new Player(this, map.widthInPixels - 100, map.heightInPixels - 210, interactiveAreas)

    this.quest = new Level1Quest()
    this.questGiver = new QuestGiver(this, 730, 1140)
    this.spawnAnimals()

    this.levelBar = new LevelBar(this, 1)
    this.questBar = new QuestBar(this, this.quest)

    worldLayer.setCollisionByProperty({ collider: true })
    objectsLayer.setCollisionByProperty({ collider: true })
    this.physics.add.collider(this.player.sprite, worldLayer)
    this.physics.add.collider(this.player.sprite, objectsLayer)

    const camera = this.cameras.main
    camera.setBackgroundColor(CONFIG.BACKGROUND_COLOR)
    camera.startFollow(this.player.sprite)
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
  }

  spawnAnimals(): void {
    this.animals.set(
      AnimalKind.giraffe,
      new Animal(this, AnimalKind.giraffe, 670, 290, 620, 215, 'I am a giraffe.', AudioName.giraffeVoice)
    )
    this.animals.set(
      AnimalKind.elephant,
      new Animal(this, AnimalKind.elephant, 990, 950, 890, 895, 'I am an elephant.', AudioName.elephantVoice)
    )
    this.animals.set(
      AnimalKind.lion,
      new Animal(this, AnimalKind.lion, 960, 570, 910, 525, 'I am a lion.', AudioName.lionVoice)
    )
    this.animals.set(
      AnimalKind.zebra,
      new Animal(this, AnimalKind.zebra, 280, 530, 285, 480, 'I am a zebra.', AudioName.zebraVoice)
    )
    this.animals.set(
      AnimalKind.tiger,
      new Animal(this, AnimalKind.tiger, 305, 960, 315, 920, 'I am a tiger.', AudioName.tigerVoice)
    )
  }

  update(): void {
    this.player.update()
  }
}
