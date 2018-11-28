type Type = 'fetch' | 'success'

type Action<T extends Type, P> = {
  type: T,
  payload: P
}

type FetchAction = Action<'fetch', undefined>

type SuccessAction = Action<'success', string>

type Actions = FetchAction | SuccessAction

function reducer(action: Actions) {
  switch (action.type) {
    case 'fetch':
      return action // $ExpectType FetchAction
    case 'success':
      return action // $ExpectType SuccessAction
  }
  
  const exhaustiveCheck: never = action
}


















export {}