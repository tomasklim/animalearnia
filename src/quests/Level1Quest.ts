import Task from './Task'
import { AbstractQuest } from './AbstractQuest'
import { AnimalKind, AudioName, CharacterType } from '../enums'

export default class Level1Quest extends AbstractQuest {
  constructor() {
    super()

    this.defineQuests()
  }

  defineQuests(): void {
    this.tasks.push(
      new Task(
        'Meet the Quest Giver',
        '',
        '',
        CharacterType.QUEST_GIVER,
        CharacterType.QUEST_GIVER,
        null,
        true
      )
    )
    this.tasks.push(
      new Task(
        'See all the Animals',
        'Welcome to the Zoo!\nLook around here.',
        '',
        CharacterType.QUEST_GIVER,
        [
          AnimalKind.ELEPHANT,
          AnimalKind.GIRAFFE,
          AnimalKind.LION,
          AnimalKind.ZEBRA,
          AnimalKind.TIGER
        ],
        AudioName.LEVEL1_WELCOME
      )
    )
    this.tasks.push(
      new Task(
        'Feed the Elephant',
        'Elephant is hungry.\nPlease feed him!',
        'Nicely done!',
        CharacterType.QUEST_GIVER,
        AnimalKind.ELEPHANT,
        AudioName.ELEPHANT_QUEST
      )
    )
    this.tasks.push(
      new Task(
        'Wave at the Lion',
        'Lion likes people.\nSay him hello!',
        'Perfect!',
        CharacterType.QUEST_GIVER,
        AnimalKind.LION,
        AudioName.LION_QUEST
      )
    )
    this.tasks.push(
      new Task(
        'Check the Zebra',
        'Zebra was sick.\nCheck her health!',
        'Uff, thank you!',
        CharacterType.QUEST_GIVER,
        AnimalKind.ZEBRA,
        AudioName.ZEBRA_QUEST
      )
    )
    this.tasks.push(
      new Task(
        'Feed the Tiger',
        'There is a meat.\nFeed the Tiger!',
        'Good job!',
        CharacterType.QUEST_GIVER,
        AnimalKind.TIGER,
        AudioName.TIGER_QUEST
      )
    )
    this.tasks.push(
      new Task(
        'Check the Giraffe',
        'Check the Giraffe.\nShe is pregnant.',
        'Last one!',
        CharacterType.QUEST_GIVER,
        AnimalKind.GIRAFFE,
        AudioName.GIRAFFE_QUEST
      )
    )
  }
}
