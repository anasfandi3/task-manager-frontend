import React from 'react';
import SortableList from '@/components/sortable/SortableList';

const Home = () => {
  return (
    <div className="d-flex pt-3">
      <div className='mx-md-auto mw-md-400'>
        <SortableList />
      </div>
    </div>
  );
};

export default Home;
