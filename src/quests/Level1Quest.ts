import * as ASSETS from '../constants/assets'
import Task from './Task'
import { AbstractQuest } from './AbstractQuest'

export default class Level1Quest extends AbstractQuest {
  constructor() {
    super()

    this.defineQuests()
  }

  defineQuests() {
    this.tasks.push(
      new Task(
        'Meet the Quest Giver',
        '',
        '',
        ASSETS.QUEST_GIVER,
        ASSETS.QUEST_GIVER,
        null,
        true
      )
    )
    this.tasks.push(
      new Task(
        'See all the Animals',
        'Welcome to the Zoo!\nLook around here.',
        '',
        ASSETS.QUEST_GIVER,
        [
          ASSETS.ELEPHANT,
          ASSETS.GIRAFFE,
          ASSETS.LION,
          ASSETS.ZEBRA,
          ASSETS.TIGER
        ],
        ASSETS.LEVEL1_WELCOME_AUDIO
      )
    )
    this.tasks.push(
      new Task(
        'Feed the Elephant',
        'Elephant is hungry.\nPlease feed him!',
        'Nicely done!',
        ASSETS.QUEST_GIVER,
        ASSETS.ELEPHANT,
        ASSETS.ELEPHANT_QUEST_AUDIO
      )
    )
    this.tasks.push(
      new Task(
        'Wave at the Lion',
        'Lion likes people.\nSay him hello!',
        'Perfect!',
        ASSETS.QUEST_GIVER,
        ASSETS.LION,
        ASSETS.LION_QUEST_AUDIO
      )
    )
    this.tasks.push(
      new Task(
        'Check the Zebra',
        'Zebra was sick.\nCheck her health!',
        'Uff, thank you!',
        ASSETS.QUEST_GIVER,
        ASSETS.ZEBRA,
        ASSETS.ZEBRA_QUEST_AUDIO
      )
    )
    this.tasks.push(
      new Task(
        'Feed the Tiger',
        'There is a meat.\nFeed the Tiger!',
        'Good job!',
        ASSETS.QUEST_GIVER,
        ASSETS.TIGER,
        ASSETS.TIGER_QUEST_AUDIO
      )
    )
    this.tasks.push(
      new Task(
        'Check the Giraffe',
        'Check the Giraffe.\nShe is pregnant.',
        'Last one!',
        ASSETS.QUEST_GIVER,
        ASSETS.GIRAFFE,
        ASSETS.GIRAFFE_QUEST_AUDIO
      )
    )
  }
}
