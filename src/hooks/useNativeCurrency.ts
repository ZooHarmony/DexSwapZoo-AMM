import { Currency } from 'dexswap-sdk'
import { useActiveWeb3React } from '.'

export function useNativeCurrency(): Currency {
  const { chainId } = useActiveWeb3React()
  // fallback to ether if chain id is not defined
  if (!chainId) return Currency.USD
  return Currency.getNative(chainId) || Currency.USD
}
