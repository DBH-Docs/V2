import React, { ReactElement, Component } from 'react';
import Layout from '@theme/Layout';
import uuid from 'uuid/v4';
import styles from './Todo.module.css';
import Item from '../components/todoCard';
import NewItem from '../components/newTodo';

import type { todoItem } from '../data/todoData';

export type updateHandler = {
  toggle: (item: todoItem) => void;
  remove: (item: todoItem) => void;
  setPriority: (item: todoItem, value: number) => void;
  rename: (item: todoItem) => void;
  addItem: (title: string, deadline: Date, priority: number) => void;
  update: () => void;
}

interface todoProps {}

interface todoState {
  list: todoItem[];
}

class Todo extends Component<todoProps, todoState> {

  handler: updateHandler;

  constructor(props: todoProps) {
    super(props);
    let list: todoItem[] = [];
    // let history: string|null = localStorage.getItem("jc_todolistData");
    // if (history != null)
    //   list = JSON.parse(history);
    this.state = {list: list};

    this.handler = {
      toggle: item => {
        this.setState(state => {
          return {
            list: state.list.map(el => (el.id === item.id ? {...el, done: !item.done} : el))
          }
        });
      },
      remove: item => {
        this.setState(state => {
          return {
            list: state.list.filter(el => { return el.id !== item.id; }),
          }
        });
      },
      setPriority: (item, value) => {
        this.setState(state => {
          let nlist = state.list.map(el => (el.id === item.id ? {...el, priority: value} : el));
          return {
            list: nlist
          }
        });
      },
      rename: item => {
      },
      addItem: (title, deadline, priority) => {
        this.setState(state => {
          let nlist = state.list.concat(
            [{id: uuid(), name: title, priority: priority, deadline: deadline, done: false}]
          );
          nlist.sort((a: todoItem, b: todoItem): number => { return b.priority - a.priority });
          return {
            list: nlist
          };
        })
      },
      update: () => {
        this.setState(state => {
          let nlist = [...state.list];
          nlist.sort((a: todoItem, b: todoItem): number => { return b.priority - a.priority });
          return {
            list: nlist
          }
        });
      }
    };
  }

  render(): ReactElement {
    const todos: todoItem[] = this.state.list.filter(i => { return !i.done; });
    const dones: todoItem[] = this.state.list.filter(i => { return i.done; });

    return (
      <Layout
        title="Todo list"
        description="A convenient todo list"
      >
        <main>
          <div className="container margin-vert--lg">
            <div className={styles.todolist}>
              <h1>Todo list</h1>
              <p>A convenient todo list. Run on your own browser.</p>
              <h2>Todo</h2>
              <div className={styles.cardContainer}>
                {todos.map(
                  (item): ReactElement => (
                    <Item key={item.id} item={item} handler={this.handler} />
                  )
                )}
                <NewItem handler={this.handler}></NewItem>
              </div>
              <h2>Done</h2>
              <div className={styles.cardContainer}>
                {dones.map(
                  (item): ReactElement => (
                    <Item key={item.id} item={item} handler={this.handler} />
                  )
                )}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default Todo;
