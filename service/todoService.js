import { TodoModel } from "../model/todoModel";

class TodoService {
  async createTodo(name, description) {
    const todo = new TodoModel({ title, description });
    await todo.save();
  }

  async getAllTodos() {
    return await TodoModel.find({});
  }

  async updateTodo(todoId, updates) {
    const todo = await TodoModel.findById(todoId);
    if (!todo) {
      throw new Error(`Todo with ID ${todoId} not found`);
    }
    Object.assign(todo, updates);
    await todo.save();
  }

  async deleteTodo(todoId) {
    await TodoModel.findByIdAndDelete(todoId);
  }
}

module.exports = TodoService;
