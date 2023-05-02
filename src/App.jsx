export function App () {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src="https://unavatar.io/github/37t?fallback=https://avatar.vercel.sh/37t?size=400" alt="Avatar aleatorio" />
                <div className="tw-followCard-info">
                    <strong>Leopoldo Garcia</strong>
                    <span className="tw-followCard-infoUserName">@polgarcia</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}