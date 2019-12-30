import 'phaser'

export default class Animal extends Phaser.GameObjects.GameObject {
  private animal: string

  constructor(scene: Phaser.Scene, animal: string, x: number, y: number) {
    super(scene, animal)
    this.animal = animal

    scene.physics.add.image(x, y, this.animal)
  }
}
