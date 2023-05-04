import { TwitterFollowCard } from "./TwitterFollowCard";
import './App.css'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true,
    },
    {
        userName: 'polgarcia',
        name: 'Leopoldo Garcia',
        isFollowing: false,
    },
    {
        userName: 'jonmircha',
        name: 'Jonathan MirCha',
        isFollowing: true,
    },
    {
        userName: 'mouredev',
        name: 'Brais Moure',
        isFollowing: false,
    },
]

export function App () {
    return (
        <section className="tw-followCard-section">
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            name={name}
                            initialIsFollowing={isFollowing}
                        />
                    )
                })
            }
        </section>
    )
}