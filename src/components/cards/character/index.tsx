import React from 'react';
import { css } from '@emotion/css';
import { CharacterCardFragment } from '../../../generated/graphql';

interface ICharacterCardProps {
  character?: CharacterCardFragment;
}

export const renderStatus = (status?: string) => {
  switch (status) {
    case 'Alive':
      return 'green';
    case 'Dead':
      return 'red';
    default:
      return 'lightgrey';
  }
};

export const Character = (props: ICharacterCardProps) => {
  if (!props.character) {
    return null;
  }

  const { image, name, status, origin } = props.character;

  return (
    <div
      className={css`
        border: 1px solid ${renderStatus(status ?? '')};
        border-radius: 4px;
        height: 100%;
      `}
    >
      <div
        className={css`
          position: relative;
          display: block;
          width: 100%;
        `}
      >
        {image && (
          <img
            src={image}
            alt="Character in Rick and Morty"
            className={css`
              height: 240px;
              width: 240px;
              object-fit: cover;
            `}
          />
        )}
      </div>
      <h2>{name}</h2>
      <h3>{origin?.name}</h3>
      <h5>{status}</h5>
    </div>
  );
};
