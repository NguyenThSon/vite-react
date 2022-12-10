import { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/form';
import ToDoList from './components/ToDoList';
import  './asset/style.css'
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages';
import Contact from './pages/contact';
import Course from './pages/course';
import Profile from './pages/profile';
import Project from './pages/project';
import Team from './pages/team';

// const STORE_KEY = 'TO_DO_APP'
function App() {
  
  // const [toDoList, setToDoList] = useState(() =>{
    // {
    //   id: 1,
    //   name: 'Cong Viec A',
    //   isCompleted: false
    // },
    // {
    //   id: 3,
    //   name: 'Cong Viec C',
    //   isCompleted: false
    // },
    // {
    //   id: 2,
    //   name: 'Cong Viec B',
    //   isCompleted: true
    // }
  //   let list = localStorage.getItem(STORE_KEY)
  //   if (list){
  //     return JSON.parse(list)
  //   }
  //   return[]
  // })
  
  // useEffect(() =>{
  //   localStorage.setItem(STORE_KEY, JSON.stringify(toDoList))
  // },[toDoList])

  // const onAdd = (name) => {
  //   const task = {
  //     id: Date.now(),
  //     name,
  //     isCompleted: false
  //   }
  //   setToDoList([...toDoList, task])
  // }

  // const onCompleted = (id) =>{
  //   let task = toDoList.find(e => e.id === id)
  //   if(task){
  //     task.isCompleted = true
  //     setToDoList([...toDoList])
  //   }
  // }

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
      
        <Route path="/" element={<Home name='2345' />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/course" element={<Course />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/team" element={<Team/>}/>


      
      </Routes>
      <Footer/>
      </BrowserRouter> 
    </>
    //  {/* <ToDoList toDoList={toDoList} onAdd={onAdd} onCompleted={onCompleted}/> */}
   

  
    
    
  )
}

export default App;





// UPDATE Git

