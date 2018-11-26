type Task = {
  title: string
}

const taskAny: Task = JSON.parse('{ "tile": "Сходить на WSD" }')

console.log(taskAny.title) // А здесь пусто

// Нельзя привести unknown к Task, нужно проверить
const taskUnkown = JSON.parse('{ "tile": "Сходить на WSD" }') as unknown

// Функция проверки
const isTask = (obj: any): obj is Task =>
  !!obj &&
  'title' in obj

if (isTask(taskUnkown)) { // isTask возвратит false
  console.log(taskUnkown.title)
} else {
  console.log('Это не Task')
}






















export {}