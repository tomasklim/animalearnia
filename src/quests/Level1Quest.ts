import Task from './Task'
import AbstractQuest from './AbstractQuest'
import { AnimalKind, AudioName, CharacterType } from '../enums'

export default class Level1Quest extends AbstractQuest {
  constructor() {
    super()

    this.defineQuests()
  }

  defineQuests(): void {
    this.tasks.push(
      new Task('Meet the Quest Giver', '', '', CharacterType.questGiver, CharacterType.questGiver, null, true),
    )
    this.tasks.push(
      new Task(
        'See all the Animals',
        'Welcome to the Zoo!\nLook around here.',
        '',
        CharacterType.questGiver,
        [AnimalKind.elephant, AnimalKind.giraffe, AnimalKind.lion, AnimalKind.zebra, AnimalKind.tiger],
        AudioName.level1Welcome,
      ),
    )
    this.tasks.push(
      new Task(
        'Feed the Elephant',
        'Elephant is hungry.\nPlease feed him!',
        'Nicely done!',
        CharacterType.questGiver,
        AnimalKind.elephant,
        AudioName.elephantQuest,
      ),
    )
    this.tasks.push(
      new Task(
        'Wave at the Lion',
        'Lion likes people.\nSay him hello!',
        'Perfect!',
        CharacterType.questGiver,
        AnimalKind.lion,
        AudioName.lionQuest,
      ),
    )
    this.tasks.push(
      new Task(
        'Check the Zebra',
        'Zebra was sick.\nCheck her health!',
        'Uff, thank you!',
        CharacterType.questGiver,
        AnimalKind.zebra,
        AudioName.zebraQuest,
      ),
    )
    this.tasks.push(
      new Task(
        'Feed the Tiger',
        'There is a meat.\nFeed the Tiger!',
        'Good job!',
        CharacterType.questGiver,
        AnimalKind.tiger,
        AudioName.tigerQuest,
      ),
    )
    this.tasks.push(
      new Task(
        'Check the Giraffe',
        'Check the Giraffe.\nShe is pregnant.',
        'Last one!',
        CharacterType.questGiver,
        AnimalKind.giraffe,
        AudioName.giraffeQuest,
      ),
    )
  }
}
