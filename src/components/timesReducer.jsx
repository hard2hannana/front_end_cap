
const DEFAULT = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];

export function initializeTimes() {
  return DEFAULT;
}

  
export function timesReducer(state, action) {
  switch (action.type) {
    case "SET_TIMES":
      return Array.isArray(action.payload) ? action.payload : state;
    default:
      return state ?? [];
  }
}


