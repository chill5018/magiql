import { css } from '@emotion/css';
import { EpisodeCardFragment } from '../../../generated/graphql';
import { renderStatus } from '../character';

interface IEpisodeCardProps {
  episode: EpisodeCardFragment;
}

export const EpisodeCard = (props: IEpisodeCardProps) => {
  const {
    episode: { characters, name },
  } = props;

  return (
    <div>
      <h1>{name}</h1>
      <div
        className={css`
          display: grid;
          grid-auto-flow: column;
          gap: 8px;
          overflow-x: auto;
        `}
      >
        {characters.map(
          p =>
            p?.image && (
              <img
                key={p.id}
                src={p.image}
                alt={`${name ?? 'A Character in rick and morty'}`}
                className={css`
                  border-radius: 50%;
                  height: 50px;
                  width: 50px;
                  border: 2px solid ${renderStatus(p.status ?? '')};
                `}
              />
            ),
        )}
      </div>
    </div>
  );
};
