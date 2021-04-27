import { css } from '@emotion/css';
import { CharacterList } from '../components/modules/characters';
import { EpisodeList } from '../components/modules/episodes';

export const Landing = () => {
  return (
    <div
      className={css`
        margin: 24px;
      `}
    >
      <h2>Rick and Morty</h2>
      <div>
        <CharacterList />
      </div>
      {/* <div>
        <EpisodeList />
      </div> */}
    </div>
  );
};
