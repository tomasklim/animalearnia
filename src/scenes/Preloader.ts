import { AnimalKind, Star,Direction, AudioName, CharacterType, SceneName } from '../enums'

export class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneName.PRELOADER)
  }

  protected preload() {
    this.loadAssets()
    this.loadSounds()
  }

  protected create() {
    this.createAnims()

    this.scene.launch(SceneName.SMALL_ZOO_MAP)
  }

  private loadAssets() {
    this.load.spritesheet(
      CharacterType.PLAYER,
      './assets/sprites/character-64px.png',
      {
        frameWidth: 64,
        frameHeight: 64
      }
    )

    this.load.spritesheet(
      CharacterType.QUEST_GIVER,
      './assets/sprites/quest-giver-64px.png',
      {
        frameWidth: 64,
        frameHeight: 64
      }
    )

    this.load.image('zoo_tiles', './assets/environment/zoo_image.png')
    this.load.tilemapTiledJSON('map', './assets/environment/zoo_map_20x25.json')

    this.load.image(AnimalKind.TIGER, './assets/animals/tiger.png')
    this.load.image(AnimalKind.ELEPHANT, './assets/animals/elephant.png')
    this.load.image(AnimalKind.LION, './assets/animals/lion.png')
    this.load.image(AnimalKind.ZEBRA, './assets/animals/zebra.png')
    this.load.image(AnimalKind.GIRAFFE, './assets/animals/giraffe.png')

    this.load.image(Star.FULL, './assets/others/star_full.png')
    this.load.image(Star.EMPTY, './assets/others/star_empty.png')
  }

  private loadSounds() {
    this.load.audio(
      AudioName.ELEPHANT_QUEST,
      `./assets/sounds/${AudioName.ELEPHANT_QUEST}`
    )
    this.load.audio(
      AudioName.TIGER_QUEST,
      `./assets/sounds/${AudioName.TIGER_QUEST}`
    )
    this.load.audio(
      AudioName.ZEBRA_QUEST,
      `./assets/sounds/${AudioName.ZEBRA_QUEST}`
    )
    this.load.audio(
      AudioName.GIRAFFE_QUEST,
      `./assets/sounds/${AudioName.GIRAFFE_QUEST}`
    )
    this.load.audio(
      AudioName.LION_QUEST,
      `./assets/sounds/${AudioName.LION_QUEST}`
    )
    this.load.audio(
      AudioName.TIGER_VOICE,
      `./assets/sounds/${AudioName.TIGER_VOICE}`
    )
    this.load.audio(
      AudioName.ZEBRA_VOICE,
      `./assets/sounds/${AudioName.ZEBRA_VOICE}`
    )
    this.load.audio(
      AudioName.LION_VOICE,
      `./assets/sounds/${AudioName.LION_VOICE}`
    )
    this.load.audio(
      AudioName.GIRAFFE_VOICE,
      `./assets/sounds/${AudioName.GIRAFFE_VOICE}`
    )
    this.load.audio(
      AudioName.ELEPHANT_VOICE,
      `./assets/sounds/${AudioName.ELEPHANT_VOICE}`
    )
    this.load.audio(
      AudioName.LEVEL1_WELCOME,
      `./assets/sounds/${AudioName.LEVEL1_WELCOME}`
    )
    this.load.audio(
      AudioName.LEVEL1_COMPLETE,
      `./assets/sounds/${AudioName.LEVEL1_COMPLETE}`
    )

    this.load.audio(AudioName.ERROR, `./assets/sounds/${AudioName.ERROR}`)
  }

  private createAnims() {
    this.anims.create({
      key: Direction.DOWN,
      frames: this.anims.generateFrameNumbers(CharacterType.PLAYER, {
        start: 0,
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: Direction.LEFT,
      frames: this.anims.generateFrameNumbers(CharacterType.PLAYER, {
        start: 4,
        end: 7
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: Direction.RIGHT,
      frames: this.anims.generateFrameNumbers(CharacterType.PLAYER, {
        start: 8,
        end: 11
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: Direction.UP,
      frames: this.anims.generateFrameNumbers(CharacterType.PLAYER, {
        start: 12,
        end: 15
      }),
      frameRate: 8,
      repeat: -1
    })
  }
}
