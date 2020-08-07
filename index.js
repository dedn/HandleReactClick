import React, {useCallback, useState} from 'react'
import { render } from 'react-dom';
import Hello from './Hello';
import ComponentFirst from './ComponentFirst';
import ComponentSecond from './ComponentSecond';
import './style.css';

const App = () => {
 
  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'React'
  //   };
  // }

      const [isAdded, setIsAdded] = useState(false);

    function handleClick(status) {
        setIsAdded(status)
    }

  
    return (
      <div>
          <ComponentFirst
                  HandleClick={handleClick}
          />
               <ComponentSecond
                  isAdded={isAdded}
                handleCreate={handleClick}
               />
      </div>
    );
  
}

render(<App />, document.getElementById('root'));
