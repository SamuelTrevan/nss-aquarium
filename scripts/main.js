import { getFish } from "../database.js";
import { FishList } from "./fish.js";

const parentHTMLElement = document.querySelector(".right-column");
const HTMLFish = FishList();

parentHTMLElement.innerHTML = FishList();

// const locationsVisited = [
//   {
//     id: 1,
//     locationName: "Crystal Retreat, Amazon River",
//     locationImage:
//       "https://res.cloudinary.com/evolve-vacation-rental-network/image/upload/f_auto,c_limit,w_3840,q_auto/listings_s3/listings/427662/images/main/a0F4P00000MhiexUAB",
//   },
//   {
//     id: 2,
//     locationName: "Misty Banks, River Stour",
//     locationImage:
//       "https://live.staticflickr.com/766/31167819964_db736052ca.jpg",
//   },
//   {
//     id: 3,
//     locationName: "Rosewood Retreat, Five Lakes",
//     locationImage:
//       "https://wallup.net/wp-content/uploads/2019/09/919586-mountains-lake-scenery-slovenia-bled-nature.jpg",
//   },
//   {
//     id: 4,
//     locationName: "Shorebridge Point, Five Lakes",
//     locationImage:
//       "https://th.bing.com/th/id/R.bf6280a2b23d0c2c64b9d0fec7b7a50b?rik=%2bi6MIfgtHRmU7w&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f766%2f515%2f651%2fbeautiful-nature-scenery-lake-trees-water-reflection-sun-1080P-wallpaper.jpg&ehk=TTZ5I8eZFQHGW5Y6ay6tn4OrDsd%2fJ7aQj5ZozInmv9k%3d&risl=&pid=ImgRaw&r=0",
//   },
//   {
//     id: 5,
//     locationName: "Topaz Point, River Nile",
//     locationImage:
//       "https://africageographic.com/wp-content/uploads/2019/12/The_magnificent_Murchison_Falls_seen_from_the_bottom._Photo_Credit_-_African_Pearl_Safaris-768x512.jpg",
//   },
// ];

// const Quotes = [
//   "Fish come in three sizes: small, medium and the one that got away!",
//   "Good things come to those who bait",
//   "Fishing is like dating; it is all catch and release until you find a keeper.",
//   "The two best times to fish are when it is raining and when it aint.",
//   "If I have gone missing, I have gone fishing!",
// ];

// const fishTankCare = [
//   "Cycle the Tank",
//   "Test the Water Parameters",
//   "Change out the Water Often",
//   "Do not Overfeed the Fish",
//   "Manage the light Near the Aquarium",
// ];

// const fishCard = (fishObj) => {
//   let HTMLfishString = "";
//   for (const fish of fishObj) {
//     HTMLfishString += `<section>\nFish Species:${fish.species}\n${fish.image}\nFish Name:${fish.fishName}\nFish Size:${fish.size}\nFish Food:${fish.diet}\nLocation Harvested:${fish.locationHarvested}\n</section>\n`;
//   }
//   return HTMLfishString;
// };

const allFish = getFish();

for (const fish of allFish) {
  console.log(fish);
}
