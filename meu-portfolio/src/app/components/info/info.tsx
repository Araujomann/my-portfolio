import { SectionTitle } from "../sectionTitle/section-title"
import "./info.scss"

export function Info () {
    return (
        <div className="infos">
          <SectionTitle text="Languages"/>
          <div className="language-info">
            <span>🇺🇸 EN - Basic</span>
            <span>🇧🇷 PT-BR - Native Speaker</span>
          </div>
          <SectionTitle text="Education"/>
           <div className="education-info">
            <span>I'm studying Computer Science for my Bachelor's degree at IFMA.</span>
            </div>
        </div>

    )
}