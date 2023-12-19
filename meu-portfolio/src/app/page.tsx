import { Experience } from './components/header/experience/experience'
import { Header } from './components/header/header'
import { Info} from './components/info/info'
import "./styles/home.scss"


export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Info />
            
        
        <div className="buttons">
          <div className="social">

          </div>
          <button>contact me</button>
        </div>

      
    </main>
  )
}
