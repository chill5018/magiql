import React from 'react';
import { css } from '@emotion/css';
import { CharacterCardFragment } from '../../../generated/graphql';

interface ICharacterCardProps {
  character?: CharacterCardFragment;
}

export const Character = (props: ICharacterCardProps) => {
  if (!props.character) {
    return null;
  }

  const { image, name, status, origin } = props.character;

  const renderStatus = () => {
    switch (status) {
      case 'Alive':
        return 'green';
      case 'Dead':
        return 'red';
      default:
        return 'lightgrey';
    }
  };

  return (
    <div
      className={css`
        border: 1px solid ${renderStatus()};
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
