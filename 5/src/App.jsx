import './App.css'
import Counter from './component/Counter'
import Exam1 from './component/Exam1'
import Exam2 from './component/Exam2'
import Exam3 from './component/Exam3'

function App() {
  const user = {
    name: 'Elice',
    age: 20,
  }

  return (
    <main>
      <Exam1 {...user} />
      <Exam2 />
      <Exam3 />
      <Counter />
    </main>
  )
}

export default App
