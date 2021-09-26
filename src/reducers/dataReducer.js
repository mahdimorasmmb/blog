export default function dataReducer(state, action) {
  switch (action.type) {
    case "fetch":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
