import Task from './Task'

export abstract class AbstractQuest {
  public state: number
  public currentObjective: string
  public tasks: Array<Task>
  public errors: number

  constructor() {
    this.state = 0
    this.errors = 0
    this.tasks = []
  }

  abstract defineQuests(): void
}
