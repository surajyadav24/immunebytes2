
import dapp from "../../assets/images/header/dapp.svg";
import defi from "../../assets/images/header/defi.svg";
import nft from "../../assets/images/header/crypto.svg";
import token from "../../assets/images/header/token.svg";
import ethereum from "../../assets/images/header/ethereum.svg";
import solana from "../../assets/images/header/solana.svg";
import BSC from "../../assets/images/header/BSC.svg";
import Polygon from "../../assets/images/header/Polygon.svg";
import Near from "../../assets/images/header/Near.svg";
import Fantom from "../../assets/images/header/Fantom.svg";
import Arbitrum from "../../assets/images/header/Arbitrum.svg";
import Optimism from "../../assets/images/header/Optimism.svg";
import zkSync from "../../assets/images/header/zkSync.svg";
import BASE from "../../assets/images/header/BASE.svg";
import Starknet from "../../assets/images/header/Starknet.svg";

export const Menus = [
  {
    name: "services",
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "Smart Contract Audit",
        link:"/smartcontract",
        subSubHeading1: ["By Type"],
        subSubMenu1: [
          { name: "DeFi", icon: defi,     link:"/dashboard" },
          { name: "NFT", icon: nft,     link:"/dashboard" },
          { name: "Token", icon: token,     link:"/dashboard" },
          { name: "dApp", icon: dapp,     link:"/dashboard" },
        ],
        subSubHeading2: ["By Service"],
        subSubMenu2: [
          { name: "Ethereum", icon: ethereum, link:"/dashboard" },
          { name: "Solana", icon: solana , link:"/dashboard"},
          { name: "BSC", icon: BSC, link:"/dashboard" },
          { name: "Polygon", icon: Polygon , link:"/dashboard"},
          { name: "Near", icon: Near, link:"/dashboard" },
          { name: "Fantom", icon: Fantom , link:"/dashboard"},
          { name: "Arbitrum", icon: Arbitrum, link:"/dashboard" },
          { name: "Optimism", icon: Optimism , link:"/dashboard"},
          { name: "zkSync", icon: zkSync , link:"/dashboard"},
          { name: "BASE", icon: BASE , link:"/dashboard"},
          { name: "Starknet", icon: Starknet , link:"/dashboard"},
        ]
      },
      {
        name: "Blockchain Security Services",
        link:"/blockchainaudit",
      },
      {
        name: "Penetration Testing",
        link:"/penetration",
        subSubHeading1: ["By Type"],
        subSubMenu1: [
          { name: "DeFi", icon: defi,     link:"/dashboard" },
          { name: "NFT", icon: nft,     link:"/dashboard" },
          { name: "Token", icon: token,     link:"/dashboard" },
          { name: "dApp", icon: dapp,     link:"/dashboard" },
        ],
      }
    ],
    gridCols: 1
  },
  {
    name: "Portfolio",
      link:"/portfolio",
    gridCols: 1
  },
  {
    name: "About Us",
    link:"/about",
    gridCols: 1
  },
  {
    name: "Blog",
    gridCols: 1
  }
];
