import { useState } from "react";

export function TwitterFollowCard({ userName, name }) {
  const [isFollowing, setIsFollowing] = useState(false); // Estado para seguir o no seguir
  const [isHovered, setIsHovered] = useState(false); // Estado para manejar el hover

  // Texto del botón
  const text = isFollowing ? (isHovered ? 'Dejar de seguir' : 'Siguiendo') : 'Seguir';

  // Clase del botón
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  // Función para manejar el clic en el botón
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  // Función para manejar el hover
  const handleMouseEnter = () => {
    if (isFollowing) {
      setIsHovered(true);
    }
  };

  // Función para manejar el fin del hover
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt={`El avatar de ${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button
          className={buttonClassName}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </button>
      </aside>
    </article>
  );
}