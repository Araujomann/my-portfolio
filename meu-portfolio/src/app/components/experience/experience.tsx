import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"
import Image from "next/image"

export function Experience(){
    return(
      <div className="experience">
        <SectionTitle text="Experience" />
        <p>Studying software development as a front-end and searching the firsts opportunities.</p>
        <div className="experience-time">
          <div className="experience-language">
          <Image
              src="js 2.svg"
              alt="javascript logo"
              width={40}
              height={40}
              priority
                />
            <div className="experience-unit">
              <div className="experience-measure measure-1">
                <span>1 year</span>
              </div>
            </div>
          </div>
          <div className="experience-language">
          <Image
              src="ts 2.svg"
              alt="typescript logo"
              width={40}
              height={40}
              priority
                />
              <div className="experience-unit">
                <div className="experience-measure measure-1">
                  <span>1 year</span>
                </div>
              </div>
          </div>
          <div className="experience-language">
          <Image
              src="react 2.svg"
              alt="react logo"
              width={40}
              height={40}
              priority
                />
              <div className="experience-unit">
                <div className="experience-measure measure-1">
                  <span>1 year</span>
                </div>
              </div>
          </div>
        </div>
      </div>
        
    )
}