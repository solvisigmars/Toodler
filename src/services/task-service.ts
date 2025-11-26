import { tasks } from './data-service';
import { Task } from '../types/Task';

export function getTasksForList(listId: number): Task[] {
  return tasks.filter(t => t.listId === listId);
}

export function addTask(task: Task) {
  tasks.push(task);
}

export function deleteTask(id: number) {
  const index = tasks.findIndex(t => t.id === id);

  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

export function toggleTaskFinished(id: number) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.isFinished = !task.isFinished;
  }
}

export function moveTask(taskId: number, newListId: number) {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.listId = newListId;
  }
}