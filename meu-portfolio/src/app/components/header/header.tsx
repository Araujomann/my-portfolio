import Image from 'next/image'
import './header.scss'

export function Header() {
    return(
        <div className="header">
          <div>
            <h1>Hi, I'm Lucas! 👋</h1>
            <h2>Software Developer</h2>
          </div>
          <Image
              src="/me.jpg"
              alt="Lucas's image"
              width={295}
              height={297}
              priority
                />
      </div>
    )
}