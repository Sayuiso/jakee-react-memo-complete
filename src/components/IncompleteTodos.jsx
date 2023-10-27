import React from "react";

const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px"
};

export const IncompleteTodos = (props) => {
  const { todos, onClickDelete, onClickComplete } = props;
  return (
    <div style={style}>
      <p className="title">未完了のtodo</p>
      <ul>
        {/* indexはどのtodoか判別するために使用 */}
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <div className="todo-name">{todo}</div>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 関数に引数を渡す場合は無名関数として実行 */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
