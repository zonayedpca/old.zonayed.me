export default function(state = null, action) {
  switch (action.type) {
    case 'All_DATA':
      return action.payload.data
    default:
      return state;
  }
}
