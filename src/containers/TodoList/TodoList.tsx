import { useState } from "react";

interface IProps {
    title: string;
}

type TodoType = {
    id: number; title: string; content: string; done: boolean;
};

export default function TodoList(props: IProps) {
    const { title } = props;
    const [todos, setTodos] = useState<TodoType[]>([
        { id: 1, title: "SWPP", content: "take swpp class", done: true },
        { id: 2, title: "Movie", content: "watch movie", done: false },
        { id: 3, title: "Dinner", content: "eat dinner", done: false },
    ])
    return <div className="TodoList">{title}</div>;
}
