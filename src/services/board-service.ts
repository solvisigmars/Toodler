import { Board } from '../types/Board';
import { boards } from './data-service';

export function getBoards(): Board[]{
  return boards
}

export function addBoard(board: Board){
  boards.push(board)
} 

export function deleteBoard(id: number) {
  const index = boards.findIndex(b => b.id === id);
  if (index !== -1) {
    boards.splice(index, 1); 
  }
}