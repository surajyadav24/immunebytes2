import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";
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
        subSubHeading1: ["By Type"],
        subSubMenu1: [
          { name: "DeFi", icon: defi,     link:"/dashboard" },
          { name: "NFT", icon: nft,     link:"/dashboard" },
          { name: "Token", icon: token,     link:"/dashboard" },
          { name: "dApp", icon: dapp,     link:"/dashboard" },
        ],
        subSubHeading2: ["By Type"],
        subSubMenu2: [
          { name: "Ethereum", icon: ethereum, link:"/dashboard" },
          { name: "Solana", icon: solana , link:"/dashboard"},
          { name: "BSC", icon: BSC, link:"/dashboard" },
          { name: "Polygon", icon: Polygon , link:"/dashboard"}
        ]
      },
      {
        name: "Blockchain Security Services"
      },
      {
        name: "Penetration Testing"
      }
    ],
    gridCols: 1
  },
  {
    name: "Portfolio",
    gridCols: 1
  }
];
