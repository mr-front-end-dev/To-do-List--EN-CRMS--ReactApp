import { debounce, call, put, delay, select } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  console.log("I start work")
  try {
    const tasks = yield select(selectTasks);
    yield delay(1000);
    const exampleTasks = yield call (getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

export function* watchFetchExampleTasks() {
  console.log("Saga jest podłączona!")
  yield debounce(2000, fetchExampleTasks.type, fetchExampleTasksHandler);
}