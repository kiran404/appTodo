import mongoose from "mongoose";
import TodoService from "./todo-service";

mongoose.connect("mongodb://localhost/todos", { useNewUrlParser: true });

const todoService = new TodoService();

async function main() {
  await todoService.createTodo("Take out trash", "Don't forget to recycle!");
  await todoService.createTodo(
    "Buy groceries",
    "Milk, eggs, bread, and apples"
  );

  console.log(await todoService.getAllTodos());
  // Output: [{ _id: '...', title: 'Take out trash', description: 'Don\'t forget to recycle!' }, { _id: '...', title: 'Buy groceries', description: 'Milk, eggs, bread, and apples' }]

  await todoService.updateTodo("...", {
    title: "Take out the trash",
    description: "Remember to recycle!",
  });

  console.log(await todoService.getAllTodos());
  // Output: [{ _id: '...', title: 'Take out the trash', description: 'Remember to recycle!' }, { _id: '...', title: 'Buy groceries', description: 'Milk, eggs, bread, and apples' }]

  await todoService.deleteTodo("...");

  console.log(await todoService.getAllTodos());
  // Output: [{ _id: '...', title: 'Take out the trash', description:
}

// const Todo = require("./todo");

// class TodoService {
//   async createTodo(title, description) {
//     const todo = new Todo({ title, description });
//     await todo.save();
//   }

//   async getAllTodos() {
//     return await Todo.find({});
//   }

//   async updateTodo(todoId, updates) {
//     const todo = await Todo.findById(todoId);
//     if (!todo) {
//       throw new Error(`Todo with ID ${todoId} not found`);
//     }
//     Object.assign(todo, updates);
//     await todo.save();
//   }

//   async deleteTodo(todoId) {
//     await Todo.findByIdAndDelete(todoId);
//   }
// }

// module.exports = TodoService;
