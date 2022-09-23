import { getFish } from "../database.js";

export const FishList = () => {
  const fishes = getFish();
  let htmlString = `<article class="fish-owned">\n <h1>Current Fish</h1>\n`;

  for (const fish of fishes) {
    htmlString += `<div class="fish-card">\n<div class="fish-image"><img class="fish-image" src=${fish.image} alt=${fish.species}></div>\n<div class="fish-details">\n<div>Species:${fish.species}</div>\n<div>Fish Name:${fish.fishName}</div>\n<div>Fish Size:${fish.size}</div>\n<div>Fish Food:${fish.diet}</div>\n<div>Location Harvested:${fish.locationHarvested}</div>\n</div>\n`;
  }
  htmlString += `</article>`;
  return htmlString;
};

