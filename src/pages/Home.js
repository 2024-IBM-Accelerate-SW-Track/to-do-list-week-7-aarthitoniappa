import React, { Component } from "react";
import Todos from "../component/todos";
import AddTodo from "../component/AddTodo";
import "../pages/Home.css";
import Axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      showImage: false,
    };
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  addTodo = (todo) => {
    const exists = this.state.todos.find(t => t.content === todo.content);
    if (exists || todo.duedate == null || todo.duedate === "Invalid Date"){ return }
    todo.id = Math.random();

    const jsonObject = {
      id: todo.id,
      task: todo.content,
      currentDate: todo.date,
      dueDate: todo.duedate
    };

    Axios({
      method: "POST",
      url: "http://localhost:8080/add/items", 
      data: jsonObject,
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true // Add this line
    }).then(res => {
        console.log(res.data.message);
        this.setState({ showImage: true });
        setTimeout(() => {
          this.setState({ showImage: false });
        }, 2000);
    });

    let new_list = [...this.state.todos, todo];
    this.setState({
      todos: new_list,
    });
  };

  render() {
    return (
      <div className="Home">
        <h1>Todo's </h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        {this.state.showImage && (
          <img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2FmZjVyenR1eDhmcjIxc2Z3OWphcm1hODZpNWJyeHpnY2YzdmQ1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRQSNJRFAV5fsGI/giphy.gif"
            alt="Frustrated GIF"
            style={{ marginTop: '15px', width: '45%', maxWidth: '300px' }}
          />
        )}
      </div>
    );
  }
}

export default Home;
