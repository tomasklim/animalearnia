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
        'Welcome in Zoo!',
        ASSETS.QUEST_GIVER,
        ASSETS.QUEST_GIVER,
        null,
        true
      )
    )
    this.tasks.push(
      new Task(
        'See all the Animals',
        'Welcome in Zoo!\nLook around here.',
        'Good work!',
        ASSETS.QUEST_GIVER,
        [
          ASSETS.ELEPHANT,
          ASSETS.GIRAFFE,
          ASSETS.LION,
          ASSETS.ZEBRA,
          ASSETS.TIGER
        ],
        null
      )
    )
    this.tasks.push(
      new Task(
        'Feed the Elephant',
        'Elephant is hungry.\nPlease feed him!',
        'Nicely done!',
        ASSETS.QUEST_GIVER,
        ASSETS.ELEPHANT,
        null
      )
    )
    this.tasks.push(
      new Task(
        'Wave at the Lion',
        'Lion likes people.\nSay him hello!',
        'Perfect!',
        ASSETS.QUEST_GIVER,
        ASSETS.LION,
        null
      )
    )
    this.tasks.push(
      new Task(
        'Check the Zebra',
        'Zebra was sick.\nCheck her health!',
        'Uff, thank you!',
        ASSETS.QUEST_GIVER,
        ASSETS.ZEBRA,
        null
      )
    )
    this.tasks.push(
      new Task(
        'Feed the Tiger',
        'There is a meat.\nFeed the Tiger!',
        'Good job!',
        ASSETS.QUEST_GIVER,
        ASSETS.TIGER,
        null
      )
    )
    this.tasks.push(
      new Task(
        'Check the Giraffe',
        'Check the Giraffe.\nShe is pregnant.',
        'Last one!',
        ASSETS.QUEST_GIVER,
        ASSETS.GIRAFFE,
        null
      )
    )
  }
}
