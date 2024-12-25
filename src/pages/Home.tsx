import {useEffect} from 'react'
import SortableList from '@/components/sortable/SortableList';
import Axios from '@/api/Axios';
import useTaskStore from '@/store/TaskStore';

const Home = () => {
  const {setTasks} = useTaskStore();
  const fetchTasks = async function(){
    try {
      const response = await Axios.get(`tasks`);
      console.log(response.data)
      const tasks = response.data.tasks;
      setTasks(tasks);
    } catch (err: any) {
      console.error('Fetch error:', err);
    } finally {
      // setLoading(false); 
    }
  }
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="d-flex pt-3">
      <div className='mx-md-auto mw-md-400'>
        <SortableList />
      </div>
    </div>
  );
};

export default Home;
