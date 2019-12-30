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
        'Meet Quest Giver',
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
        'See All Animals',
        'See all the animals here',
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
        'Feed Elephant',
        'Elephant is hungry\n Feed him',
        'Nice!',
        ASSETS.QUEST_GIVER,
        ASSETS.ELEPHANT,
        null
      )
    )
    this.tasks.push(
      new Task(
        'Wave at Lion',
        'Lion likes people\n Greet him',
        'Perfect!',
        ASSETS.QUEST_GIVER,
        ASSETS.LION,
        null
      )
    )
    this.tasks.push(
      new Task(
        'Check Zebra',
        'Zebra was sick\n Check her',
        'Uff thank you!',
        ASSETS.QUEST_GIVER,
        ASSETS.ZEBRA,
        null
      )
    )
    this.tasks.push(
      new Task(
        'Feed Tiger',
        'There is a meat\n Feed Tiger',
        'Good job!',
        ASSETS.QUEST_GIVER,
        ASSETS.TIGER,
        null
      )
    )
    this.tasks.push(
      new Task(
        'Check Giraffe',
        'Check Giraffe\n She is pregnant',
        'Congratulations!',
        ASSETS.QUEST_GIVER,
        ASSETS.GIRAFFE,
        null
      )
    )
  }
}
