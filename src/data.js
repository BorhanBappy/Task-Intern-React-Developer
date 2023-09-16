import { faYoutube, faFacebook, faMeta } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faFaceAngry,
  faBabyCarriage,
  faBagShopping,
  faBattery3,
  faBaseballBatBall,
} from "@fortawesome/free-solid-svg-icons";
import {
  faImage,
  faAddressBook,
  faBell,
  faBarChart,
  faAddressCard,
  faChessKing,
  faBellSlash,
  faDriversLicense,
} from "@fortawesome/free-regular-svg-icons";

export const data = [
  {
    name: "Youtube",
    style: "solid",
    icon: faYoutube, // Solid
    classic: false,
    sharp: true,
    brands: true,
    free: false,
  },
  {
    name: "home",
    style: "light",
    icon: faHome, // Light
    classic: true,
    sharp: false,
    brands: true,
    free: false,
  },
  {
    name: "faImage",
    style: "regular",
    icon: faImage, // Regular
    classic: true,
    sharp: true,
    brands: true,
    free: false,
  },
  {
    name: "Facebook",
    style: "thin",
    icon: faFacebook, // Thin
    classic: false,
    sharp: true,
    brands: true,
    free: false,
  },
  {
    name: "Meta",
    style: "duotone",
    icon: faMeta, // Duotone
    classic: false,
    sharp: true,
    brands: true,
    free: false,
  },
  {
    name: "FaceAngry",
    style: "extra-light",
    icon: faFaceAngry, // Extra-Light
    classic: false,
    sharp: true,
    brands: false,
    free: true,
  },
  {
    name: "BabyCarriage",
    style: "ultra-light",
    icon: faBabyCarriage, // Ultra-Light
    classic: false,
    sharp: false,
    brands: false,
    free: true,
  },
  // Additional entries with various styles
  {
    name: "BagShopping",
    style: "regular",
    icon: faBagShopping, // Regular
    classic: true,
    sharp: true,
    brands: false,
    free: true,
  },
  {
    name: "Battery3",
    style: "light",
    icon: faBattery3, // Light
    classic: true,
    sharp: false,
    brands: false,
    free: true,
  },
  {
    name: "BaseballBatBall",
    style: "thin",
    icon: faBaseballBatBall, // Thin
    classic: false,
    sharp: true,
    brands: false,
    free: true,
  },
  {
    name: "AddressBook",
    style: "duotone",
    icon: faAddressBook, // Duotone
    classic: true,
    sharp: true,
    brands: false,
    free: true,
  },
  {
    name: "Bell",
    style: "extra-light",
    icon: faBell, // Extra-Light
    classic: true,
    sharp: false,
    brands: false,
    free: true,
  },
  {
    name: "BarChart",
    style: "ultra-light",
    icon: faBarChart, // Ultra-Light
    classic: false,
    sharp: false,
    brands: false,
    free: true,
  },
  // Even more entries with various styles
  {
    name: "AddressCard",
    style: "solid",
    icon: faAddressCard, // Solid
    classic: true,
    sharp: true,
    brands: false,
    free: true,
  },
  {
    name: "ChessKing",
    style: "light",
    icon: faChessKing, // Light
    classic: false,
    sharp: false,
    brands: false,
    free: true,
  },
  {
    name: "BellSlash",
    style: "thin",
    icon: faBellSlash, // Thin
    classic: true,
    sharp: false,
    brands: false,
    free: true,
  },
  {
    name: "DriversLicense",
    style: "duotone",
    icon: faDriversLicense, // Duotone
    classic: false,
    sharp: true,
    brands: false,
    free: true,
    categories :"time",
    feature:"staff-favorites"
  },
  // Continue to add more items with other styles as needed
];
