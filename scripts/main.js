const fish = [
  {
    id: 1,
    species: "Altum Angelfish",
    fishName: "Ann Chovy",
    size: "1 lb",
    locationHarvested: "Crystal Retreat, Amazon River",
    diet: ["Tadpole", "Wax Moth Caterpillar", "Lob Worm"],
    image:
      "https://cdn.shopify.com/s/files/1/1163/2672/products/Altum-Angelfish-3.jpg?v=1536854643",
  },
  {
    id: 2,
    species: "Golden Orfe",
    fishName: "James Pond",
    size: "7 lb",
    locationHarvested: "Misty Banks, River Stour",
    diet: ["Clam", "Cheese", "Hot Dog"],
    image:
      "https://th.bing.com/th/id/R.1626d1598628dda46a83c8b8ac158b00?rik=5iZfmHrZlMg8KA&riu=http%3a%2f%2fthe-horsfalls.co.uk%2fanr%2fwp-content%2fgallery%2fimages%2fgolden-orfe.jpg&ehk=Mu%2ftHaSRV65utOv7ik6cxeNnv%2bSiUMCJIk2D4wi%2fmRQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
  },

  {
    id: 3,
    species: "Koi Carp",
    fishName: "Phish Styx",
    size: "20 lb",
    locationHarvested: "Rosewood Retreat, Five Lakes",
    diet: ["Chicken Liver", "Blood Worm", "Chafer Beetle"],
    image:
      "https://oklahomaponds.com/wp-content/uploads/2020/09/types-of-Koi-Fish-1024x684.png",
  },
  {
    id: 4,
    species: "Japanese Perch",
    fishName: "Happy Gill More",
    size: "1 lb",
    locationHarvested: "Shorebridge Point, Five Lakes",
    diet: ["Cricket", "Bee", "Tadpole"],
    image:
      "https://th.bing.com/th/id/R.e0610a7b73c7fa26c7741024cd614c70?rik=%2fzAPYaRccUxZLQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-ZUjbwlyK_Fg%2fTdszYeZfoHI%2fAAAAAAAACbc%2f3L27J3qAFBw%2fw1200-h630-p-k-no-nu%2fEOS5D_0786.jpg&ehk=y2sYXNf45r7bl%2fOTH2Jfae9pafSvEr6guB%2b2ju2bsWQ%3d&risl=&pid=ImgRaw&r=0",
  },

  {
    id: 5,
    species: "Spotted Killifish",
    fishName: "Swim Shady",
    size: "1 lb",
    locationHarvested: "Topaz Point, River Nile",
    diet: ["Red Worm", "Leech", "Salmon Roe"],
    image: "https://i.ebayimg.com/images/g/SAoAAOSw2rNfYonW/s-l1600.jpg",
  },
];

const locationsVisited = [
  {
    id: 1,
    locationName: "Crystal Retreat, Amazon River",
    locationImage:
      "https://res.cloudinary.com/evolve-vacation-rental-network/image/upload/f_auto,c_limit,w_3840,q_auto/listings_s3/listings/427662/images/main/a0F4P00000MhiexUAB",
  },
  {
    id: 2,
    locationName: "Misty Banks, River Stour",
    locationImage:
      "https://live.staticflickr.com/766/31167819964_db736052ca.jpg",
  },
  {
    id: 3,
    locationName: "Rosewood Retreat, Five Lakes",
    locationImage:
      "https://wallup.net/wp-content/uploads/2019/09/919586-mountains-lake-scenery-slovenia-bled-nature.jpg",
  },
  {
    id: 4,
    locationName: "Shorebridge Point, Five Lakes",
    locationImage:
      "https://th.bing.com/th/id/R.bf6280a2b23d0c2c64b9d0fec7b7a50b?rik=%2bi6MIfgtHRmU7w&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f766%2f515%2f651%2fbeautiful-nature-scenery-lake-trees-water-reflection-sun-1080P-wallpaper.jpg&ehk=TTZ5I8eZFQHGW5Y6ay6tn4OrDsd%2fJ7aQj5ZozInmv9k%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 5,
    locationName: "Topaz Point, River Nile",
    locationImage:
      "https://africageographic.com/wp-content/uploads/2019/12/The_magnificent_Murchison_Falls_seen_from_the_bottom._Photo_Credit_-_African_Pearl_Safaris-768x512.jpg",
  },
];

const Quotes = [
  "Fish come in three sizes: small, medium and the one that got away!",
  "Good things come to those who bait",
  "Fishing is like dating; it is all catch and release until you find a keeper.",
  "The two best times to fish are when it is raining and when it aint.",
  "If I have gone missing, I have gone fishing!",
];

const fishTankCare = [
  "Cycle the Tank",
  "Test the Water Parameters",
  "Change out the Water Often",
  "Do not Overfeed the Fish",
  "Manage the light Near the Aquarium",
];

const fishCard = (fishObj) => {
  let HTMLfishString = "";
  for (const fish of fishObj) {
    HTMLfishString += `<section>\nFish Species:${fish.species}\n${fish.image}\nFish Name:${fish.fishName}\nFish Size:${fish.size}\nFish Food:${fish.diet}\nLocation Harvested:${fish.locationHarvested}\n</section>\n`;
  }
  return HTMLfishString;
};

const HTMLFishCard = fishCard(fish);
console.log(HTMLFishCard);

const locationCard = (locationObj)=>{
    let HTMLLocation = ""
    for (const location of )
    
};

const quotesCard = (quotesArray) => {};

const fishTankCareCard = () => {};
