import { Routes, Route } from 'react-router-dom';
import { DynamicItem, Sidebar, dummyData } from './components';
import './App.css';

function App() {
  return (
    <div id="mainPage">
      <Sidebar>
        <Routes>
          <Route path="/" element={<DynamicItem page="home" />} />
          {dummyData && dummyData.map((item, index) => (
            <Route key={index} path={item.path} element={<DynamicItem page={item.name} />} />
          ))}
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;

