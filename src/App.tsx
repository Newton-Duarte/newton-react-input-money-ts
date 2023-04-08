import { useState } from 'react'
import './App.css'
import { InputMoney } from './InputMoney'
import { convertNumberToMoney } from './money';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <h2>Newton - React Input Money</h2>
      <InputMoney value={value} onChange={({ target }) => setValue(Number(target.value))} />

      <pre>{convertNumberToMoney(value)}</pre>
    </div>
  )
}

export default App
