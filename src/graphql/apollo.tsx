import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { PropsWithChildren, useMemo } from 'react';
import { jwtState } from '@app/stores';

export const MyApolloProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [jwt] = useRecoilState(jwtState);

  const client = useMemo(() => new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `JWT ${jwt}`,
    }
  }), [jwt]);

  return (<ApolloProvider client={client}>
    {children}
  </ApolloProvider>);
}

export default MyApolloProvider;