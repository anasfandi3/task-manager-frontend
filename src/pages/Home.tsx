import {useEffect} from 'react'
import SortableList from '@/components/sortable/SortableList';
import useTaskStore from '@/store/TaskStore';

const Home = () => {
  const {fetchTasks} = useTaskStore();
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="d-flex pt-3 justify-content-center">
      <div className='mx-md-auto mw-md-400'>
        <SortableList />
      </div>
    </div>
  );
};

export default Home;
