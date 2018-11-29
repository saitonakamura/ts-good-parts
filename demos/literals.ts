type FetchAction = {
  type: 'fetch'
}

type SuccessAction = {
  type: 'success',
  payload: string
}

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
