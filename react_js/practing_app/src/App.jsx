import Component from './Component';
import Props from './Props';
import UseState from './UseState';
import List from './List';
import UseEffect from './UseEffect';
import Form from './Forms';
import LiftingStateUp from './ LiftingStateUp';
import TodoForm from './todo/TodoForm';
import TodoList from './todo/TodoList';
import {Routes,Route,Link,Navigate} from 'react-router-dom';
import { useState } from 'react';
import DynamicRouting from './DynamicRouting';
import NotFound from './NotFound';
import { UserContext } from './ContextAPI/UserContent';
import Profile from './ContextAPI/Profile';
import Data from './CustomHooks/Data';
import './App.css';
// import Button from './p'



function App (){
  const [todos,settodos]=useState([]);
  const addtodo=(text)=>{
    settodos([...todos,text]);
}
  const [user,setUser]=useState('Guest');
  return(
    <>
      <nav className='nav'>
        <Link to='/component'>Component</Link>
        <Link to='/props'>Props</Link>
        <Link to='/UseState'>UseState</Link>
        <Link to='/List'>List</Link>
        <Link to='/UseEffect'>UseEffect</Link>
        <Link to='/Forms'>Forms</Link>
        <Link to='/LiftingStateUp'>Lifting_state_up</Link>
        <span>Dynamic Routing:</span>
          <Link to="/DynamicRouting/1">User 1</Link>
          <Link to="/DynamicRouting/2">User 2</Link>
        {/* <Link to='/NotFound'>NotFound</Link> */}
        {/* context API */}
        <span>Context API:</span>
          <Link to='/ContextAPI/Profile'>Profile</Link>
        <span>Custom Hooks:</span>
         <Link to='/CustomHooks/Data'>Data</Link>
      </nav>
      {/* routing */}
      <Routes>
        <Route path='/component' element={<Component/>}/>
        <Route path='/props' element={<Props name='anand' role='developer'/>}/>
        <Route path='/UseState' element={<UseState/>}/>
        <Route path='/List' element={<List/>}/>
        <Route path='/UseEffect' element={<UseEffect/>}/>
        <Route path='/Forms' element={<Form/>}/>
        <Route path='/LiftingStateUp' element={<LiftingStateUp/>}>
          <Route path='TodoForm' element={<TodoForm onAdd={addtodo}/>}/>
          <Route path='TodoList' element={<TodoList todos={todos}/>}/>
        </Route>
        {/* Context API */}
        <Route
          path="/ContextAPI/Profile"
          element={
            <UserContext.Provider value={{ user, setUser }}>
              <Profile />
            </UserContext.Provider>
          }
        />
        <Route path='/CustomHooks/Data' element={<Data/>}/>
        <Route path='/DynamicRouting/:id' element={<DynamicRouting/>}></Route>
        {/* 404 route */}
        {/* <Route path='*'element={<NotFound/>}/> */}
        {/* Redirect */}
        {/* <Route path='*' element={<Navigate to='/component'/>}/> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
        {/* <h1>hello..!</h1>
        <p>this is the main component.</p>
        <Component/>
        <Props name='anand' role='frontendier'/>
        <Props name='balu' role='backendier'/>
        <UseState/>
        <List/>
        <UseEffect/>
        <Form/>
        <h1>Todo App</h1>
        <TodoForm/>
        <TodoList todos={todos}/> */}
        {/* <Button/> */}

   
    </>
  )
}
export default App

