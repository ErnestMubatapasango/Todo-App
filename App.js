import React, {useState, useEffect} from 'react';
import './App.css';
import {FormControl, Input, Button, InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase'



function App(todo, props) {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

  
    
    useEffect(() => {
      db.collection('todos').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => ( { id: doc.id ,todo : doc.data().todo}) ))
      })
    }, [input]);

    const addTodo = (event) => {
      event.preventDefault();
      setTodos([...todos, input]);
      
      db.collection('todos').add({
        todo: input,
        createdAt : firebase.firestore.FieldValue.serverTimestamp()
      });
      setInput('');
    }

    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if(todo.id === id)
        {
        todo.isComplete = !todo.isComplete
        }
        return todo
      })
      setTodos(updatedTodos);
    }
    

  return (
    <div className="todo-app">
       <h1> Whats the plan for today?📔</h1>
       <form className='todo-form'>
          <FormControl>

            <InputLabel>✔ Write a Todo</InputLabel>
            <Input className='todo-input' type='text' value={input} name='text' onChange={event => setInput(event.target.value)} />
            
          </FormControl>

          <Button className='todo-button' disabled= {!input} onClick={addTodo} type='submit' variant='contained' color='primary'>
                Add Todo
            </Button> 
           
      </form>
       
      <ul>    

          {todos.map((todo, index) =>(
              <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                 <Todo todo={todo}/>
              </div>
            ))}

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            
      </ul>

      
    </div>
  );

        }

export default App;