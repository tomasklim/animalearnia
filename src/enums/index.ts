export enum SceneName {
  SMALL_ZOO_MAP = 'small_zoo_map',
  PRELOADER = 'preloader'
}

export enum Color {
  WHITE = '#ffffff',
  BLACK = '#000',
  GREEN = '#1eb960',
  ORANGE = '#F9A602',
  RED = '#ff0000',
  BACKGROUND = '#27ae60'
}

export enum Direction {
  DOWN = 'down',
  UP = 'up',
  LEFT = 'left',
  RIGHT = 'right'
}

export enum AnimalKind {
  GIRAFFE = 'giraffe',
  TIGER = 'tiger',
  ELEPHANT = 'elephant',
  LION = 'lion',
  ZEBRA = 'zebra'
}

export enum Star {
  EMPTY = 'empty',
  FULL = 'full'
}

export enum AudioName {
  ELEPHANT_QUEST = 'Elephant-quest.mp3',
  ZEBRA_QUEST = 'Zebra-quest.mp3',
  GIRAFFE_QUEST = 'Giraffe-quest.mp3',
  TIGER_QUEST = 'Tiger-quest.mp3',
  LION_QUEST = 'Lion-quest.mp3',
  LEVEL1_COMPLETE = 'Level1-complete.mp3',
  LEVEL1_WELCOME = 'Level1-welcome.mp3',
  ELEPHANT_VOICE = 'Elephant-voice.mp3',
  ZEBRA_VOICE = 'Zebra-voice.mp3',
  GIRAFFE_VOICE = 'Giraffe-voice.mp3',
  TIGER_VOICE = 'Tiger-voice.mp3',
  LION_VOICE = 'Lion-voice.mp3',
  ERROR = 'Error.mp3'
}

export enum CharacterType {
  PLAYER = 'player',
  QUEST_GIVER = 'quest_giver'
}

export enum QuestGiverState {
  NEW_QUEST = 0,
  INCOMPLETE_QUEST,
  COMPLETE_QUEST,
  NO_QUEST
}
