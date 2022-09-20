import logo from './logo.svg';
import './App.css';
import TasklistComponent from './component/container/task_list';
import ContactoComponent1 from './component/container/contacto';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
 
 {/* Componente de listado de tareas */}
<TasklistComponent></TasklistComponent>
<ContactoComponent1></ContactoComponent1>

      </header>
    </div>
  );
}

export default App;
