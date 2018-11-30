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
      return action
    case 'success':
      return action
  }

  const exhaustiveCheck: never = action
}

























export {}
