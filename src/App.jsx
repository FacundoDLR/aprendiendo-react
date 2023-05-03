import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {
    return (
        <section className="tw-followCard-section">
            <TwitterFollowCard isFollowing={false} userName='midudev' name='Miguel Angel Duran'/>
            <TwitterFollowCard isFollowing userName='polgarcia' name='Leopoldo Garcia'/>
            <TwitterFollowCard isFollowing userName='mouredev' name='Brais Moure'/>
            <TwitterFollowCard isFollowing={false}/>
        </section>
    )
}