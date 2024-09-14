import React, { useState } from 'react';
import List from './List';
import AddButton from './AddButton';

const Home = (props) =>{

    const [modal,setModal] = useState(false);
    return (
      <>
        {modal === true ? (
          <div>
            <AddButton/>
            <button className="m-2" onClick={() => setModal(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <div className="h-44">
            <h1>Zania</h1>
            <button className="m-2" onClick={() => setModal(true)}>
              Add Task
            </button>
            <div>
              <input className="border-2" type="text" />
              <button className="m-2">Search</button>
            </div>
            <button className="m-2">Cancel</button>
            <List data = {props.data}/>
          </div>
        )}
      </>
    );
}
export default Home;