import { useState } from 'react';
import { css } from '@emotion/css';
import { useCharacterModulesQuery } from '../../../generated/graphql';
import { Character } from '../../cards/character';

export const CharacterList = () => {
  const [status, setStatus] = useState('Alive');
  const { data, loading, error } = useCharacterModulesQuery({
    variables: { status: status },
  });

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div>Looks like we do not have any data</div>;
  }

  const updateCharacterFilter = (e: any) => {
    setStatus(e.target.value);
  };

  const filterOptions = ['Alive', 'Dead', 'Unknown'];

  return (
    <div>
      <div
        className={css`
          display: grid;
          grid-auto-flow: row;
          width: 120px;
        `}
      >
        <label htmlFor="lifeStatus">Life Status</label>
        <select
          id="lifeStatus"
          className={css`
            margin-bottom: 40px;
          `}
          onChange={updateCharacterFilter}
        >
          {filterOptions.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div
        className={css`
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: 4fr;
          gap: 16px;
          overflow-x: scroll;
          padding-bottom: 8px;
        `}
      >
        {data?.characters?.results?.map(
          (character, index) =>
            character && <Character key={index} character={character} />,
        )}
      </div>
    </div>
  );
};
