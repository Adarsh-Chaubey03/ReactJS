import './App.css'
import { ThemeProvider } from './context/theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <div>....</div>
    </ThemeProvider>
  )
}

export default App
