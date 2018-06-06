export const payload = state => {
  return state.payload
}
export const APIError = state => {
  return state.error
}

export const server1 = (state,getters,rootState) => {
  return state.server1 = rootState.server1
}
