import { AnimalKind, Star,Direction, AudioName, CharacterType, SceneName } from '../enums'

export class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneName.preloader)
  }

  protected preload() {
    this.loadAssets()
    this.loadSounds()
  }

  protected create() {
    this.createAnims()

    this.scene.launch(SceneName.smallZooMap)
  }

  private loadAssets() {
    this.load.spritesheet(
      CharacterType.player,
      './assets/sprites/character-64px.png',
      {
        frameWidth: 64,
        frameHeight: 64
      }
    )

    this.load.spritesheet(
      CharacterType.questGiver,
      './assets/sprites/quest-giver-64px.png',
      {
        frameWidth: 64,
        frameHeight: 64
      }
    )

    this.load.image('zoo_tiles', './assets/environment/zoo_image.png')
    this.load.tilemapTiledJSON('map', './assets/environment/zoo_map_20x25.json')

    this.load.image(AnimalKind.tiger, './assets/animals/tiger.png')
    this.load.image(AnimalKind.elephant, './assets/animals/elephant.png')
    this.load.image(AnimalKind.lion, './assets/animals/lion.png')
    this.load.image(AnimalKind.zebra, './assets/animals/zebra.png')
    this.load.image(AnimalKind.giraffe, './assets/animals/giraffe.png')

    this.load.image(Star.full, './assets/others/star_full.png')
    this.load.image(Star.empty, './assets/others/star_empty.png')
  }

  private loadSounds() {
    this.load.audio(
      AudioName.elephantQuest,
      `./assets/sounds/${AudioName.elephantQuest}`
    )
    this.load.audio(
      AudioName.tigerQuest,
      `./assets/sounds/${AudioName.tigerQuest}`
    )
    this.load.audio(
      AudioName.zebraQuest,
      `./assets/sounds/${AudioName.zebraQuest}`
    )
    this.load.audio(
      AudioName.giraffeQuest,
      `./assets/sounds/${AudioName.giraffeQuest}`
    )
    this.load.audio(
      AudioName.lionQuest,
      `./assets/sounds/${AudioName.lionQuest}`
    )
    this.load.audio(
      AudioName.tigerVoice,
      `./assets/sounds/${AudioName.tigerVoice}`
    )
    this.load.audio(
      AudioName.zebraVoice,
      `./assets/sounds/${AudioName.zebraVoice}`
    )
    this.load.audio(
      AudioName.lionVoice,
      `./assets/sounds/${AudioName.lionVoice}`
    )
    this.load.audio(
      AudioName.giraffeVoice,
      `./assets/sounds/${AudioName.giraffeVoice}`
    )
    this.load.audio(
      AudioName.elephantVoice,
      `./assets/sounds/${AudioName.elephantVoice}`
    )
    this.load.audio(
      AudioName.level1Welcome,
      `./assets/sounds/${AudioName.level1Welcome}`
    )
    this.load.audio(
      AudioName.Level1Complete,
      `./assets/sounds/${AudioName.Level1Complete}`
    )

    this.load.audio(AudioName.errorSound, `./assets/sounds/${AudioName.errorSound}`)
  }

  private createAnims() {
    this.anims.create({
      key: Direction.down,
      frames: this.anims.generateFrameNumbers(CharacterType.player, {
        start: 0,
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: Direction.left,
      frames: this.anims.generateFrameNumbers(CharacterType.player, {
        start: 4,
        end: 7
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: Direction.right,
      frames: this.anims.generateFrameNumbers(CharacterType.player, {
        start: 8,
        end: 11
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: Direction.up,
      frames: this.anims.generateFrameNumbers(CharacterType.player, {
        start: 12,
        end: 15
      }),
      frameRate: 8,
      repeat: -1
    })
  }
}
