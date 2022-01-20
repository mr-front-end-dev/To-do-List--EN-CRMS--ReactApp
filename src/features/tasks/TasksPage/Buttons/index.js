import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Button } from './styled';
import { 
  toggleHideDone, 
  setAllDone, 
  selectAreTasksEmpty, 
  selectHideDone, 
  selectIsEveryTaskDone, 
  fetchExampleTasks 
} from '../../tasksSlice';

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Download sample tasks
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Show" : "Hide"} completed tasks
          </Button>
          <Button 
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Complete all tasks
          </Button>
        </>
      )}
    </Wrapper> 
  );
};

export default Buttons;