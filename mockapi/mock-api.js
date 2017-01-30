import {v4} from 'node-uuid';

const fakeData = {
  todoList: [
    {
      id: v4(),
      text: "hey",
      done: true
    },
    {
      id: v4(),
      text: "ho",
      done: false
    },
    {
      id: v4(),
      text: "let's go",
      done: false
    },
  ]
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(5000).then(() => {

    if(Math.random() > 0.5)
      throw new Error("boom!");

    switch (filter) {
      case "all":
        return fakeData.todoList;
      case "todo":
        return fakeData.todoList.filter(x => !x.done);
      case "done":
        return fakeData.todoList.filter(x => x.done);
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  });


