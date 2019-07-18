import { ADD_LESSON, UPDATE_LESSON, DELETE_LESSON, SET_VISIBILITY_FILTER, VisibilityFilter } from "./lessonAction";
import { combineReducers } from "redux";

const initialState = {
  visibilityFilter: VisibilityFilter.SHOW_ALL,
  lesson: []
}

function lessons(lessons = [], action) {
  switch (action.type) {
    case ADD_LESSON:
      return [...lessons, action.lesson]
    case UPDATE_LESSON:
      return lessons.map((lesson) => {
        if (lesson.id === action.lesson.id) {
          return Object.assign([], action.lesson)
        }
        return lesson
      })
    case DELETE_LESSON:
      const { deleted, ...newState } = lessons
      return newState
    default:
      return lessons
  }
}

function visibilityFilter(visibilityFilter = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return visibilityFilter
  }
}

export default function lessonApp(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    lesson: lessons(state.lessons, action)
  }
}

// const lessonApp = combineReducers({
//   visibilityFilter,
//   lessons
// })

// export default lessonApp