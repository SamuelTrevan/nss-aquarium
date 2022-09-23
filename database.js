const database = {
  fish: [
    {
      id: 6,
      species: "ClownFish",
      fishName: "Bart",
      size: "3 lb",
      locationHarvested: "Great Barrier Reef, Australia",
      diet: ["crustaceans"],
      image:
        "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_400_q85.jpg",
    },
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
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
