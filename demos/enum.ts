enum Type {
  Fetch,
  Success
}

type FetchAction = {
  type: Type.Fetch
}

type SuccessAction = {
  type: Type.Success,
  payload: string
}

type Actions = FetchAction | SuccessAction

function reducer(action: Actions) {
  switch (action.type) {
    case Type.Fetch:
      return action
    case Type.Success:
      return action
  }
}

