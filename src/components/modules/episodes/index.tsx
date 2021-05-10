import React from 'react';
import { useEpisodeListQuery } from '../../../generated/graphql';
import { EpisodeCard } from '../../cards/episode';
import { GqlState } from '../../gqlState';

export const EpisodeList = () => {
  const { data, loading, error } = useEpisodeListQuery();

  return (
    <div>
      <GqlState loading={loading} error={error} />
      {data?.episodes?.results?.map(
        epi => epi && <EpisodeCard episode={epi} />,
      )}
    </div>
  );
};
