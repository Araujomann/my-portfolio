import { GithubIcon } from "../icons/github-icon"
import { InstaIcon } from "../icons/insta-icon"
import { LinkedinIcon } from "../icons/linkedin-icon"
import { TwitterIcon } from "../icons/twitter-icon"
import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/lucamzg/" target="_blank">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/lucas-ara%C3%BAjo-4b3316226/" target="_blank">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/Araujomann" target="_blank">
                <GithubIcon/>
            </a>
            <a href="https://twitter.com/theoldlusca" target="_blank">
                <TwitterIcon/>
            </a>
        </div>
    )
}