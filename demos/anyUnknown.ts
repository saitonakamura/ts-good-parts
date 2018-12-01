type Task = {
  title: string
}

const taskAny: Task = JSON.parse(
  '{ "tile": "Сходить на WSD" }'
  )



// А здесь пусто
console.log(taskAny.title)


// Нельзя привести unknown к Task
// нужно проверить
const taskUnkown = JSON.parse(
  '{ "tile": "Сходить на WSD" }'
  ) as unknown



// Функция проверки
const isTask = (obj: any)
  : obj is Task =>
  {
    return !!obj &&
      'title' in obj;
  }


// isTask возвратит false
if (isTask(taskUnkown)) {
  console.log(taskUnkown.title)
} else {
  console.log('Это не Task')
}






















export {}