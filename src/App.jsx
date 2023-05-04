import { TwitterFollowCard } from "./TwitterFollowCard";
import './App.css'
export function App () {
    return (
        <section className="tw-followCard-section">
            <TwitterFollowCard  userName='midudev' name='Miguel Angel Duran' initialIsFollowing={true}/>
            <TwitterFollowCard  userName='polgarcia' name='Leopoldo Garcia'/>
            <TwitterFollowCard  userName='mouredev' name='Brais Moure'/>
            <TwitterFollowCard />
        </section>
    )
}