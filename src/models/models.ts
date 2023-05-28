export interface todoItem {
    id: number,
    title: string,
    isDone: boolean,
}

export interface todoListProps {
    todoList: todoItem[],
    dispatch: React.Dispatch<Action>
}

export interface inputBoxProps {
    todoDispatch: React.Dispatch<Action>
}

export interface todoItemProps {
    item: todoItem,
    dispatch: React.Dispatch<Action>
}

export type Action = {type: "DONE", payload: number} | {type: "DELETE", payload: number} | {type: "ADD", payload: string} | {type: "EDIT", payload: {id: number, title: string}} | {type: "SET_VALUE", payload: todoItem[]};