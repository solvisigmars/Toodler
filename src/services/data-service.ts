import data from '../resources/data.json';
import { Board } from '../types/Board';
import { List } from '../types/Lists';
import { Task } from '../types/Task';

export let boards: Board[] = [...data.boards];
export let lists: List[] = [...data.lists];
export let tasks: Task[] = [...data.tasks];
