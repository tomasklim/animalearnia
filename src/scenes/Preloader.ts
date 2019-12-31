import 'phaser'
import * as SCENES from '../constants/scenes'
import * as ASSETS from '../constants/assets'

export class Preloader extends Phaser.Scene {
  constructor() {
    super(SCENES.PRELOADER)
  }

  protected preload() {
    this.loadAssets()
    this.loadSounds()
  }

  protected create() {
    this.createAnims()

    this.scene.launch(SCENES.SMALL_ZOO_MAP)
  }

  private loadAssets() {
    this.load.spritesheet(
      ASSETS.PLAYER,
      '../../assets/sprites/character-64px.png',
      {
        frameWidth: 64,
        frameHeight: 64
      }
    )

    this.load.spritesheet(
      ASSETS.QUEST_GIVER,
      '../../assets/sprites/quest-giver-64px.png',
      {
        frameWidth: 64,
        frameHeight: 64
      }
    )

    this.load.image('zoo_tiles', '../../assets/environment/zoo_image.png')
    this.load.tilemapTiledJSON(
      'map',
      '../../assets/environment/zoo_map_20x25.json'
    )

    this.load.image(ASSETS.TIGER, '../../assets/animals/tiger.png')
    this.load.image(ASSETS.ELEPHANT, '../../assets/animals/elephant.png')
    this.load.image(ASSETS.LION, '../../assets/animals/lion.png')
    this.load.image(ASSETS.ZEBRA, '../../assets/animals/zebra.png')
    this.load.image(ASSETS.GIRAFFE, '../../assets/animals/giraffe.png')

    this.load.image(ASSETS.STAR_FULL, '../../assets/others/star_full.png')
    this.load.image(ASSETS.STAR_EMPTY, '../../assets/others/star_empty.png')
  }

  private loadSounds() {
    this.load.audio(
      ASSETS.ELEPHANT_QUEST_AUDIO,
      `../../assets/sounds/${ASSETS.ELEPHANT_QUEST_AUDIO}`
    )
    this.load.audio(
      ASSETS.TIGER_QUEST_AUDIO,
      `../../assets/sounds/${ASSETS.TIGER_QUEST_AUDIO}`
    )
    this.load.audio(
      ASSETS.ZEBRA_QUEST_AUDIO,
      `../../assets/sounds/${ASSETS.ZEBRA_QUEST_AUDIO}`
    )
    this.load.audio(
      ASSETS.GIRAFFE_QUEST_AUDIO,
      `../../assets/sounds/${ASSETS.GIRAFFE_QUEST_AUDIO}`
    )
    this.load.audio(
      ASSETS.LION_QUEST_AUDIO,
      `../../assets/sounds/${ASSETS.LION_QUEST_AUDIO}`
    )
    this.load.audio(
      ASSETS.TIGER_VOICE_AUDIO,
      `../../assets/sounds/${ASSETS.TIGER_VOICE_AUDIO}`
    )
    this.load.audio(
      ASSETS.ZEBRA_VOICE_AUDIO,
      `../../assets/sounds/${ASSETS.ZEBRA_VOICE_AUDIO}`
    )
    this.load.audio(
      ASSETS.LION_VOICE_AUDIO,
      `../../assets/sounds/${ASSETS.LION_VOICE_AUDIO}`
    )
    this.load.audio(
      ASSETS.GIRAFFE_VOICE_AUDIO,
      `../../assets/sounds/${ASSETS.GIRAFFE_VOICE_AUDIO}`
    )
    this.load.audio(
      ASSETS.ELEPHANT_VOICE_AUDIO,
      `../../assets/sounds/${ASSETS.ELEPHANT_VOICE_AUDIO}`
    )
    this.load.audio(
      ASSETS.LEVEL1_WELCOME_AUDIO,
      `../../assets/sounds/${ASSETS.LEVEL1_WELCOME_AUDIO}`
    )
    this.load.audio(
      ASSETS.LEVEL1_COMPLETE_AUDIO,
      `../../assets/sounds/${ASSETS.LEVEL1_COMPLETE_AUDIO}`
    )

    this.load.audio(
      ASSETS.ERROR_AUDIO,
      `../../assets/sounds/${ASSETS.ERROR_AUDIO}`
    )
  }

  private createAnims() {
    this.anims.create({
      key: ASSETS.PLAYER_WALK_DOWN,
      frames: this.anims.generateFrameNumbers(ASSETS.PLAYER, {
        start: 0,
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: ASSETS.PLAYER_WALK_LEFT,
      frames: this.anims.generateFrameNumbers(ASSETS.PLAYER, {
        start: 4,
        end: 7
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: ASSETS.PLAYER_WALK_RIGHT,
      frames: this.anims.generateFrameNumbers(ASSETS.PLAYER, {
        start: 8,
        end: 11
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: ASSETS.PLAYER_WALK_UP,
      frames: this.anims.generateFrameNumbers(ASSETS.PLAYER, {
        start: 12,
        end: 15
      }),
      frameRate: 8,
      repeat: -1
    })
  }
}
