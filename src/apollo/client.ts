import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { ChainId } from 'dexswap-sdk'

export const defaultSubgraphClient = new ApolloClient({
  uri: 'https://graph.t.hmny.io/subgraphs/name/agin-dropdisco/harmony_agin',
  cache: new InMemoryCache()
})

export const subgraphClients: { [chainId in ChainId]?: ApolloClient<NormalizedCacheObject> | undefined } = {
  [ChainId.MAINNET]: new ApolloClient({
    uri: '',
    cache: new InMemoryCache()
  }),
  [ChainId.RINKEBY]: new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/agin-dropdisco/gin-rinkeby-data',
    cache: new InMemoryCache()
  }),
  [ChainId.HARMONY]: defaultSubgraphClient,
  [ChainId.HARMONY_TESTNET]: defaultSubgraphClient
}
