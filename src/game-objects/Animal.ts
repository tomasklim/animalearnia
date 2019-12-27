import 'phaser'

export default class LevelBar extends Phaser.GameObjects.GameObject {
  private animal: string
  private object: any

  constructor(scene: Phaser.Scene, animal: string, x: number, y: number) {
    super(scene, animal)
    this.animal = animal

    this.object = scene.physics.add.image(x, y, animal)
  }
}
