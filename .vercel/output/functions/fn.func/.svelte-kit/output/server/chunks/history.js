import { w as writable } from "./index.js";
import { config } from "@onflow/fcl";
import { p as public_env } from "./shared-server.js";
const dappTitle = "CryptoCardShop";
const dappInfo = {
  title: "CryptoCard Shop",
  description: "LCD Slabs for your Digital Collectibles",
  url: "soon",
  author: "Noah Naizir",
  icon: "/shop-logo.png"
};
const resolver = async () => {
  const nonce = "7f190deedcd3b0538b7cd0ebc1994ed40d9db16cc1a6fcc3e7a994240c14d86d";
  return {
    appIdentifier: "CryptoCard Shop",
    nonce
  };
};
const network = public_env.PUBLIC_FLOW_NETWORK;
const fclConfigInfo = {
  emulator: {
    accessNode: "http://127.0.0.1:8888",
    discoveryWallet: "http://localhost:8701/fcl/authn"
  },
  testnet: {
    accessNode: "https://rest-testnet.onflow.org",
    discoveryWallet: "https://fcl-discovery.onflow.org/testnet/authn"
  },
  mainnet: {
    accessNode: "https://rest-mainnet.onflow.org",
    discoveryWallet: "https://fcl-discovery.onflow.org/authn"
  }
};
config().put("app.detail.title", dappInfo.title).put("app.detail.icon", dappInfo.icon).put("fcl.accountProof.resolver", resolver).put("flow.network", network).put("accessNode.api", fclConfigInfo[network].accessNode).put("discovery.wallet.method", "POP/RPC").put("discovery.wallet", fclConfigInfo[network].discoveryWallet).put("discovery.wallet", "https://accounts.meetdapper.com/fcl/authn-restricted");
const contractData = {
  NonFungibleToken: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0x631e88ae7f1d7c20",
    mainnet: "0x1d7e57aa55817448"
  },
  FungibleTokenMetadataViews: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0x9a0766d93b6608b7",
    mainnet: "0xf233dcee88fe0abe"
  },
  ViewResolver: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0x631e88ae7f1d7c20",
    mainnet: "0x1d7e57aa55817448"
  },
  MetadataViews: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0x631e88ae7f1d7c20",
    mainnet: "0x1d7e57aa55817448"
  },
  FungibleToken: {
    emulator: "0xee82856bf20e2aa6",
    testnet: "0x9a0766d93b6608b7",
    mainnet: "0xf233dcee88fe0abe"
  },
  FlowToken: {
    emulator: "0x0ae53cb6e3f42a79",
    testnet: "0x7e60df042a9c0868",
    mainnet: "0x1654653399040a61"
  },
  FUSD: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0xe223d8a629e49c68",
    mainnet: "0x3c5959b568896393"
  },
  FiatToken: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0xa983fecbed621163",
    mainnet: "0xb19436aae4d94622"
  },
  NFTCatalog: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0x324c34e1c517e4db",
    mainnet: "0x49a7cda3a1eecc29"
  },
  ECTreasury: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0x6c0d53c676256e8c",
    mainnet: "0x5643fd47a29770e7"
  },
  FLOAT: {
    emulator: "",
    testnet: "0x0afe396ebc8eee65",
    mainnet: "0x2d4c3caffbeab845"
  },
  FIND: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0xa16ab1d0abde3625",
    mainnet: "0x097bafa4e0b48eef"
  },
  Toucans: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0xaba4ef9fe3cbc7d0",
    mainnet: "0x577a3c409c5dcb5e"
  },
  SwapUtils: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0xddb929038d45d4b3",
    mainnet: "0xb78ef7afa52ff906"
  },
  SwapFactory: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0xcbed4c301441ded2",
    mainnet: "0xb063c16cac85dbd1"
  },
  EmeraldIdentity: {
    emulator: "0xf8d6e0586b0a20c7",
    testnet: "0x87d0c9cd424434be",
    mainnet: "0x39e42c67cc851cfb"
  }
};
const user = writable({
  loggedIn: false,
  addr: null
});
const momments = writable([]);
({
  NonFungibleToken: contractData.NonFungibleToken[network],
  MetadataViews: contractData.MetadataViews[network],
  ViewResolver: contractData.ViewResolver[network],
  FungibleTokenMetadataViews: contractData.FungibleTokenMetadataViews[network],
  FungibleToken: contractData.FungibleToken[network],
  FlowToken: contractData.FlowToken[network],
  FUSD: contractData.FUSD[network],
  ECTreasury: contractData.ECTreasury[network],
  FLOAT: contractData.FLOAT[network],
  FIND: contractData.FIND[network],
  Toucans: contractData.Toucans[network],
  FiatToken: contractData.FiatToken[network],
  NFTCatalog: contractData.NFTCatalog[network],
  SwapUtils: contractData.SwapUtils[network],
  SwapFactory: contractData.SwapFactory[network],
  EmeraldIdentity: contractData.EmeraldIdentity[network]
});
const canUseDOM = () => typeof window !== "undefined" && "document" in window && "location" in window;
const getLocation = (source) => {
  return {
    ...source.location,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};
const createHistory = (source) => {
  const listeners = [];
  let location = getLocation(source);
  return {
    get location() {
      return location;
    },
    listen(listener) {
      listeners.push(listener);
      const popstateListener = () => {
        location = getLocation(source);
        listener({ location, action: "POP" });
      };
      source.addEventListener("popstate", popstateListener);
      return () => {
        source.removeEventListener("popstate", popstateListener);
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    },
    navigate(to, { state, replace = false, preserveScroll = false } = {}) {
      state = { ...state, key: Date.now() + "" };
      try {
        if (replace)
          source.history.replaceState(state, "", to);
        else
          source.history.pushState(state, "", to);
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }
      location = getLocation(source);
      listeners.forEach(
        (listener) => listener({ location, action: "PUSH", preserveScroll })
      );
      document.activeElement.blur();
    }
  };
};
const createMemorySource = (initialPathname = "/") => {
  let index = 0;
  const stack = [{ pathname: initialPathname, search: "" }];
  const states = [];
  return {
    get location() {
      return stack[index];
    },
    addEventListener(name, fn) {
    },
    removeEventListener(name, fn) {
    },
    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState(state, _, uri) {
        const [pathname, search = ""] = uri.split("?");
        index++;
        stack.push({ pathname, search });
        states.push(state);
      },
      replaceState(state, _, uri) {
        const [pathname, search = ""] = uri.split("?");
        stack[index] = { pathname, search };
        states[index] = state;
      }
    }
  };
};
createHistory(
  canUseDOM() ? window : createMemorySource()
);
export {
  dappTitle as d,
  momments as m,
  user as u
};
