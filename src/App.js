import React from 'react';
import './App.scss';
import Toggle from './Toggle/Toggle';
import ColorName from './ColorName/ColorName';
import Students from './Students/Students';
import Counter from './Counter/Counter';
import Timer from './Timer/Timer';
import Hits from './Hits/Hits';
import RealNumber from './RealNumber/RealNumber';
import Marker from './Marker/Marker';
import Todo from './Todo/Todo';

function App() {
  return (
    <div className="App">
        <div className="exercise" data-number="1" data-title="<Toggle />">
            <Toggle />
        </div>
        <div className="exercise" data-number="2" data-title="<ColorName />">
            <ColorName />
        </div>
        <div className="exercise" data-number="3" data-title="<Students />">
            <Students />
        </div>
        <div className="exercise" data-number="4" data-title="<Counter />">
            <Counter />
        </div>
        <div className="exercise" data-number="5" data-title="<Hits />">
            <Hits />
        </div>
        <div className="exercise" data-number="6" data-title="<Timer />">
            <Timer />
        </div>
        <div className="exercise" data-number="7" data-title="<RealNumber />">
            <RealNumber />
        </div>
        <div className="exercise" data-number="8" data-title="<Marker />">
            <Marker />
        </div>
        <div className="exercise" data-number="9" data-title="<Todo />">
            <Todo />
        </div>
    </div>
  );
}

export default App;
