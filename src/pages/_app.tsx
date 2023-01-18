import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { AppContextProvider } from "../context/contextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

function MyApp({ Component, pageProps }: AppProps) {
  // the chainId our app wants to be running on
  // for our example the Polygon Mumbai Testnet
  const desiredChainId = ChainId.Polygon

  const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [
      alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID || "" }),
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'Konnektr 1.0 (alpha)',
    chains
  });
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })

  // Create a client
  const queryClient = new QueryClient()
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
     <ThirdwebProvider desiredChainId={desiredChainId}>
      <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
      </QueryClientProvider>
      </ThirdwebProvider>
      </RainbowKitProvider>
    </WagmiConfig>
    
  );
}

export default MyApp;
