import { List } from '../types/Lists';
import { lists } from './data-service';

export function getListsForBoard(boardId: number): List[] {
  return lists.filter(list => list.boardId === boardId);
}

export function getListById(id: number): List | undefined {
  return lists.find(l => l.id === id);
}

export function addList(list: List) {
  lists.push(list);
}

export function deleteList(id: number) {
  const index = lists.findIndex(l => l.id === id);
  if (index !== -1) {
    lists.splice(index, 1);
  }
}

export function updateList(id: number, updatedFields: Partial<List>){
  const index = lists.findIndex(list => list.id === id);

  if (index === -1) return false; 

  lists[index] = {
    ...lists[index],   
    ...updatedFields    
  };

  return true;
}