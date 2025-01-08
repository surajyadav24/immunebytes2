
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
import Mobile from "../../assets/images/header/mobile.svg";
import web from "../../assets/images/header/web.svg";

export const Menus = [
  {
    name: "services",
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "Smart Contract Audit",
   
        subSubHeading1: ["By Type"],
        subSubMenu1: [
          { name: "DeFi", icon: defi,     link:"#" },
          { name: "NFT", icon: nft,     link:"#" },
          { name: "Token", icon: token,     link:"#" },
          { name: "dApp", icon: dapp,     link:"#" },
        ],
        subSubHeading2: ["By Ecosystem"],
        subSubMenu2: [
          { name: "Ethereum", icon: ethereum, link:"#" },
          { name: "Solana", icon: solana , link:"#"},
          { name: "BSC", icon: BSC, link:"#" },
          { name: "Polygon", icon: Polygon , link:"#"},
          { name: "Near", icon: Near, link:"#" },
          { name: "Fantom", icon: Fantom , link:"#"},
          { name: "Arbitrum", icon: Arbitrum, link:"#" },
          { name: "Optimism", icon: Optimism , link:"#"},
          { name: "zkSync", icon: zkSync , link:"#"},
          { name: "BASE", icon: BASE , link:"#"},
          { name: "Starknet", icon: Starknet , link:"#"},
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
          { name: "Mobile", icon: Mobile,     link:"#" },
          { name: "Web", icon: web,     link:"#" },

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
