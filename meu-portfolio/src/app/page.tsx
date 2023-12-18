import { Header } from './components/header/header'
import "./styles/home.scss"


export default function Home() {
  return (
    <main className='container'>
      <Header />
      
      <div className="experience">
        <h3>Experience</h3>
        <p>texto</p>
        <div className="experience-time">

        </div>

        <div className="infos">
          <h3>Languages</h3>
          <div className="language-info">
            <span>EN - Basic</span>
            <span>PT-BR - Native Speaker</span>
          </div>
           <h3>Education</h3>
           <div className="education-info">
            <span></span>
            <span>I'm studying Computer Science for my Bachelor's degree at IFMA.</span>
           </div>
            
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>contact me</button>
        </div>
      </div>
      
    </main>
  )
}
