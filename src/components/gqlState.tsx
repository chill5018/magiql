import { ApolloError } from '@apollo/client';

interface IGqlStateProps {
  error?: ApolloError;
  loading: boolean;
}

export const GqlState = ({ loading, error }: IGqlStateProps) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return null;
};
