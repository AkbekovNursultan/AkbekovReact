import React, { useState } from "react";
import "./App.css";
const positions = [
  "Java Junior Developer",
  "Java Middle Developer",
  "Java Senior Developer"
];

function App() {

  const handleClick = () => {
    setMessage("Должность повышена!");
  };
  const [message, setMessage] = useState("");
  
  return (
    <div className="App">
      <div className="profile">
        <h1>Информация о человеке</h1>
        <p>Имя: Нурсултан Акбеков</p>
        <p>Должность: {positions[0]}</p>
        <p>Компания: Компания "Незнаю"</p>
        <p>Возраст: 19 лет</p>
        <p>Город: Бишкек</p>
        <p>Семейное положение: Не женат</p>
        {message && <p>{message}</p>}
        <button onClick={handleClick}>Повысить в должности</button>
      </div>
    </div>
  );
}

export default App;
