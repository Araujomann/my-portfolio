import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { EmailIcon } from './components/icons/email-icon'
import { Info} from './components/info/info'
import { SocialBtns } from './components/social-btns/social-btn'
import "./styles/home.scss"


export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Info />
            
        
        <div className="buttons">
          <SocialBtns />
          <a href="mailto:lucastheeyepatch@gmail.com" className='btn-primary'>contact me
            <EmailIcon/>
          </a>
        </div>

      
    </main>
  )
}
