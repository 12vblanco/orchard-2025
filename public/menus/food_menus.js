export const menuItems = [
  // Food Menu
  {
    menu: "Food Menu",
    allergyNotice: "*** Please make your server aware of any allergies ***",
    chipFryerNotice: "*please be advised we do not have a dedicated chip fryer, cross contamination may occur*",
    servingHours: "Food Served - Noon 'til 8.30 pm",
    categories: [
      {
        category: "Starters & Lighter Bites",
        items: [
          {
            name: "Meat, Cheese and Bread selection",
            description: "Designed for sharing, with cured meats, assorted cheese, bread and dips",
            price: "£17.45"
          },
          {
            name: "The Orchard's Soup of the Day (V)",
            description: "With crusty bread & butter",
            price: "£6.25",
            vegetarian: true
          },
          {
            name: "Cockburn's of Dingwall Award Winning Haggis Fritters",
            description: "With tomato chilli jam and balsamic glaze",
            price: "£9.95/£15.25"
          },
          {
            name: "The Orchard's Cullen Skink",
            description: "Served with crusty bread & butter",
            price: "£10.25"
          },
          {
            name: "Spiced Muhammara topped with Pomegranate (Vegan)(N)",
            description: "Served with whipped feta & crostini",
            price: "£9.75",
            vegan: true
          }
        ]
      },
      {
        category: "The Orchard's Rustic Sandwiches",
        note: "Available till 4pm",
        items: [
          {
            name: "Flat Iron Steak Sandwich",
            description: "With mixed leaves, tomato chilli jam & mayonnaise",
            price: "£10.45"
          },
          {
            name: "Chicken Shawarma & Asian Slaw Sandwich",
            description: "With baby gem lettuce & mayonnaise",
            price: "£10.45"
          },
          {
            name: "Roasted Red Pepper & Whipped Feta Sandwich (Vegan)(N)",
            description: "With muhammara and mixed leaves",
            price: "£9.75",
            vegan: true
          },
          {
            name: "Battered Haddock Sandwich",
            description: "With tartare sauce, pea puree & baby gem lettuce",
            price: "£9.95"
          },
          {
            name: "Brie, Bacon & Cranberry Sandwich",
            description: "With baby gem & mayonnaise",
            price: "£9.95"
          },
          {
            name: "Add a bowl of soup, chips or a house salad to your sandwich",
            price: "£4.25"
          }
        ]
      },
      {
        category: "Mains",
        items: [
          {
            name: "Fresh Haddock & Hand cut Potato Chips",
            description: "Crispy beer battered (or breaded for an extra £1) with petit pois & homemade tartare sauce",
            price: "£18.75"
          },
          {
            name: "Twice Baked Goats Cheese Soufflé (V)",
            description: "With oven roasted cherry tomatoes. Add a house salad OR chips for £4.25",
            price: "£17.95",
            vegetarian: true
          },
          {
            name: "The Orchard's Legendary Steak Pie",
            description: "With a puff pastry bonnet, green beans & hand cut potato chips",
            price: "£18.75"
          },
          {
            name: "Wild Mushroom & Chestnut Stroganoff (Vegan)",
            description: "With vegan crème fraiche & pearl couscous",
            price: "£17.95",
            vegan: true
          },
          {
            name: "Pheasant Roulade wrapped in Streaky Bacon",
            description: "With a black pudding & haggis stuffing, celeriac puree, red cabbage & a juniper gravy",
            price: "£24.75"
          },
          {
            name: "The Orchard's Veggie Burger (V)",
            description: "Sweet potato, black eyed bean & sweetcorn burger with Asian slaw, sriracha vegan mayo & baby gem on a seeded bap with hand cut chips",
            price: "£17.45",
            vegetarian: true
          },
          {
            name: "The Orchard's Prime Scotch Beef Burger",
            description: "With smoked cheddar, onion relish, gherkins, mayo & baby gem on a seeded bap and with hand cut chips. Add bacon for an extra £1.50",
            price: "£17.75"
          },
          {
            name: "Sides",
            description: "Hand cut chips, onion rings, garlic bread, house salad, mixed olives",
            price: "£5.75"
          }
        ]
      },
      {
        category: "Sunday Roasts",
        note: "Sunday 12-8.30pm",
        roastNote: "*** Please help us by pre ordering your roast dinner if possible. This will help to guarantee availability for all.**",
        items: [
          {
            name: "Sirloin of Scotch Beef or Lamb",
            description: "With Yorkshire pudding, roast potatoes, beetroot, tenderstem broccoli, carrots & red wine gravy",
            price: "£24.95"
          },
          {
            name: "Chicken Supreme",
            description: "With Yorkshire pudding, roast potatoes, beetroot, tenderstem broccoli, carrots & red wine gravy",
            price: "£22.95"
          }
        ]
      }
    ]
  },

  // GLUTEN FREE (and the rest of your menus follow...)
  {
    menu: "Gluten Free",
    allergyNotice: "*** Please make your server aware of any allergies. \nWe do not have a dedicated chip fryer. Cross contamination may occur***",
    servingHours: "Food Served - Noon 'til 8.30 pm",
    categories: [
      // ... rest of gluten free menu
    ]
  },

  // GLUTEN FREE
  {
    menu: "Gluten Free",
    allergyNotice: "*** Please make your server aware of any allergies. \nWe do not have a dedicated chip fryer. Cross contamination may occur***",
    servingHours: "Food Served - Noon 'til 8.30 pm",
    categories: [
      {
        category: "Starters & Lighter Bites",
        items: [
          {
            name: "Meat & Cheese Selection",
            description: "Designed for sharing, with cured meats, assorted cheese, gluten free oatcakes and a selection of dips",
            price: "£17.45",
          },
          {
            name: "The Orchard's Soup of the Day (V)",
            description: "With gluten free oatcakes",
            price: "£6.25",
            vegetarian: true,
          },
          {
            name: "The Orchard's Cullen Skink",
            description: "With gluten free oatcakes",
            price: "£10.25",
          },
          {
            name: "Mulled Wine Poached Pear and Blue Cheese Salad (V)(N)",
            description: "With candied walnuts, cranberries and mixed leaves",
            price: "£9.95",
            vegetarian: true,
          },
          {
            name: "Spiced Muhammara topped with Pomegranate Seeds (Vegan)(N)",
            description: "Served with whipped vegan feta and gluten free oatcakes",
            price: "£9.75",
            vegan: true,
          },
        ],
      },
      {
        category: "Salads",
        items: [
          {
            name: "Brie, Bacon, Cranberry",
            description: "Served with fresh mixed leaves, cucumber, peppers, cherry tomatoes and our house dressing",
            price: "£9.95",
          },
          {
            name: "Chicken Shawarma, Asian Slaw",
            description: "Served with fresh mixed leaves, cucumber, peppers, cherry tomatoes and our house dressing",
            price: "£10.45",
          },
          {
            name: "Flat Iron Steak, Tomato Chilli Jam",
            description: "Served with fresh mixed leaves, cucumber, peppers, cherry tomatoes and our house dressing",
            price: "£10.45",
          },
          {
            name: "Roasted Red Pepper, Whipped Feta, Muhammara (Vegan)(N)",
            description: "Served with fresh mixed leaves, cucumber, peppers, cherry tomatoes and our house dressing",
            price: "£9.75",
            vegan: true,
          },
        ],
      },
      {
        category: "Mains",
        items: [
          {
            name: "Fresh hand cut Grilled Haddock fillet & hand cut chips OR salad",
            description: "Petit pois and homemade tartare sauce",
            price: "£18.75",
          },
          {
            name: "Twice Baked Goats Cheese Souffle (V)",
            description: "Add house salad for £3.75",
            price: "£17.95",
            vegetarian: true,
          },
          {
            name: "Pan fried fillet of Cod with a Champagne Beurre Blanc",
            description: "On a bed of leek & potato mash and buttered greens",
            price: "£23.95",
          },
          {
            name: "The Orchard's Prime Scotch Beef Burger (NO BUN)",
            description: "With cheddar cheese, baby gem & onion relish with hand cut chips OR salad. Add bacon for an extra £1.50",
            price: "£17.75",
          },
          {
            name: "The Orchard's Veggie Burger (NO BUN) (V)",
            description: "Sweet potato, black eyed bean & sweetcorn burger with Asian slaw & vegan sriracha mayo with hand cut chips OR salad",
            price: "£17.45",
            vegetarian: true,
          },
          {
            name: "Our Sunday Roasts",
            description: "Served on Sunday -- Beef, Chicken & Lamb (see our main menu for details)",
          },
        ],
      },
    ],
  },

  // Sunday Roast Menu
  {
    menu: "Sunday Roasts",
    allergyNotice: "*** Please make your server aware of any allergies ***",
    servingHours: "Food Served - Noon ‘til 8.30 pm",
    categories: [
      {
        category: "Roasts, Sunday 12-8.30pm",
        items: [
          {
            name: "Sirloin of Scotch Beef or Lamb",
            description:
              "with Yorkshire pudding, roast potatoes, beetroot, tenderstem broccoli, carrots & red wine gravy ",
            price: "£25.95",
          },
          {
            name: "Chicken Supreme",
            description:
              "with Yorkshire pudding, roast potatoes, beetroot, tenderstem broccoli, carrots & red wine gravy ",
            price: "£24.95",
          },
          {
            name: "",
            description:
              "**please help us by pre ordering your roast dinner if possible. This will help to guarantee availability for all.",
            price: "",
          },
        ],
      },
    ],
  },

  // Kids Menu
  {
    menu: "Kids Menu",
    allergyNotice: "*** Please make your server aware of any allergies ***",
    servingHours: "Food Served - Noon ‘til 8.30 pm",
    categories: [
      {
        category: "Main Meals",
        items: [
          {
            name: "Freshly made Soup of the day",
            description: "",
            price: "£3",
          },
          {
            name: "Garlic bread",
            description: "",
            price: "£3",
          },
          {
            name: "Fresh battered haddock with hand cut chips or salad",
            description: "",
            price: "£6.50",
          },
          {
            name: "Sliced chicken breast (battered or pan-fried) with hand cut chips or salad",
            description: "",
            price: "£6.50",
          },
          {
            name: "Penne pasta with cheesy sauce or sundried tomato pesto",
            description: "",
            price: "£6.50",
          },
        ],
      },
      {
        category: "Includes",
        items: [
          {
            name: "Main meal price includes an ice lolly",
            description: "",
            price: "",
          },
        ],
      },
      {
        category: "Soft Drinks & Fruit Juices",
        items: [
          {
            name: "A selection of soft drinks & fruit juices are available",
            description: "",
            price: "",
          },
        ],
      },
    ],
  },

  // Updated Beers Menu
  {
    menu: "Beers",
    categories: [
      {
        category: "Draught (ABV)",
        items: [
          { name: "Deuchars IPA (3.8)", price: "£5.30" },
          { name: "Tennents (4.0)", price: "£5.25" },
          { name: "Stella Artois (4.8)", price: "£6.10" },
          { name: "Innis & Gunn Lager (4.6)", price: "£6.30" },
          { name: "Peroni (5.0)", price: "£6.90" },
          { name: "Pravha (4.0)", price: "£6.10" },
          { name: "Maltsmiths IPA (4.6)", price: "£6.40" },
          { name: "Belhaven Best (3.2)", price: "£5.15" },
          { name: "Belhaven Black Stout (4.2)", price: "£5.70" },
          { name: "Guinness (4.2)", price: "£6.20" },
          { name: "Aspall cider (5.5)", price: "£6.10" },
          { name: "Please ask at the bar about our Cask Ales", price: "" },
        ],
      },
      {
        category: "Bottled Beers & Ales",
        items: [
          { name: "Budweiser (4.5) 330ml", price: "£5.60" },
          { name: "Peroni (5) 330ml", price: "£5.60" },
          { name: "Peroni Gluten Free (5) 330ml", price: "£5.60" },
          { name: "Budvar (5) 330ml", price: "£5.60" },
          { name: "Punk IPA (5.4) 330ml", price: "£6.10" },
          { name: "Heineken (5) 330ml", price: "£5.60" },
          { name: "Corona (4.5) 330ml", price: "£5.60" },
          { name: "Erdinger Weissbier (5.3) 500ml", price: "£6.30" },
          { name: "Greene King Gluten Free IPA (3.6) 500ml", price: "£5.70" },
        ],
      },
      {
        category: "Bottled Ciders",
        items: [
          {
            name: "Rekorderlig (4) 500ml",
            description: "Strawberry and Lime, Mango & Raspberry, Wild Berries",
            price: "£6.05",
          },
          {
            name: "Old Mout Non-Alcoholic (0%) 500ml",
            description: "Pineapple & Rasp' or Berries & Cherries",
            price: "£5.85",
          },
          { name: "Magners (4.5) 568ml", price: "£6.05" },
          { name: "Crabbies Gingerbeer (4) 500ml", price: "£6.05" },
        ],
      },
      {
        category: "Non-Alcohol Beer",
        items: [
          { name: "Heineken (0.0%) 330ml", price: "£4.80" },
          { name: "Erdinger (<0.5%) 500ml", price: "£5.50" },
          { name: "Guinness (0.0%) 538ml", price: "£5.40" },
        ],
      },
    ],
  },

  // Updated Gins Menu
  {
    menu: "Gins",
    categories: [
      {
        category: "Scottish Gins",
        items: [
          {
            name: "Arbikie",
            description: "Farm-grown ingredients from Arbroath",
            price: "£4.10",
          },
          {
            name: "Kirsty's",
            description: "Potato base with sea kelp and blueberries",
            price: "£4.10",
          },
          {
            name: "The Botanist",
            description: "31 botanicals from Islay",
            price: "£4.50",
          },
          {
            name: "Caoruun",
            description: "Speyside gin with rowan berries and heather",
            price: "£4.40",
          },
          {
            name: "Daffy's",
            description: "Lebanese mint and rare lemons",
            price: "£4.40",
          },
          {
            name: "Edinburgh Gin",
            description: "Award-winning with milk thistle and pine",
            price: "£4.20",
          },
          {
            name: "Edinburgh Seaside Gin",
            description: "Foraged coastal botanicals",
            price: "£4.20",
          },
          {
            name: "Edinburgh Gin Cannonball",
            description: "57.2% ABV with Szechuan pepper",
            price: "£4.20",
          },
          {
            name: "Harris",
            description: "Notes of pine needles and bitter orange",
            price: "£4.70",
          },
          {
            name: "Hendrick's",
            description: "Rose petals and cucumber",
            price: "£4.40",
          },
          {
            name: "Pickering's",
            description: "1947 recipe with cardamom and clove",
            price: "£4.20",
          },
          {
            name: "Lind & Lime",
            description: "Traditional London dry from Leith",
            price: "£4.10",
          },
        ],
      },
      {
        category: "World Gins",
        items: [
          {
            name: "Brockman's Gin",
            description: "Blueberries & blackberries",
            price: "£4.20",
          },
          {
            name: "Bombay Sapphire",
            description: "Botanicals from Tuscany and Spain",
            price: "£4.10",
          },
          {
            name: "Gordons",
            description: "Iconic London dry gin",
            price: "£3.15",
          },
          {
            name: "Monkey 47",
            description: "47 botanicals from Schwarzwald",
            price: "£4.80",
          },
          {
            name: "Roku",
            description: "Japanese seasonal botanicals",
            price: "£4.40",
          },
          {
            name: "Tanqueray 10",
            description: "Citrusy full-bodied gin",
            price: "£4.70",
          },
          {
            name: "Tanqueray Sevilla",
            description: "Bittersweet Seville oranges",
            price: "£4.20",
          },
        ],
      },
    ],
  },

  // Updated Whisky Menu (simplified structure)
  // Updated Simple Whisky Menu - replace the existing "Whisky" object
  {
    menu: "Whisky",
    categories: [
      {
        category: "Whisky List",
        items: [
          { name: "Aberfeldy 12", price: "£6.20" },
          { name: "Aberlour 12", price: "£6.30" },
          { name: "Ancnoc 12", price: "£5.90" },
          { name: "Ardbeg 10", price: "£6.80" },
          { name: "Ardbeg An Oa", price: "£6.75" },
          { name: "Ardnamurchan 6, Cadenheads", price: "£7.40" },
          { name: "Ardnamurchan AD 46.8", price: "£5.95" },
          { name: "Ardnamurchan AD/09 Cask 58.4%", price: "£6.95" },
          { name: "Ardnamurchan Thomson Brothers 6yr", price: "£8.40" },
          { name: "Arran 10", price: "£5.95" },
          { name: "Arran Machrie Moor, 46%", price: "£6.45" },
          { name: "Arran small batch, RMW Excl 57.4%", price: "£7.80" },
          { name: "Auchentoshan 12", price: "£5.95" },
          { name: "Auchentoshan 3 wood", price: "£6.20" },
          { name: "Auchentoshan 18", price: "£8.30" },
          { name: "Balblair 10, Cadenheads Rum Cask 60.5%", price: "£7.25" },
          { name: "Ballindalloch 2015, 46%, Vintage release", price: "£8.40" },
          {
            name: "Ballindalloch 2015, 60.8%, Single cask, Oloroso",
            price: "£8.90",
          },
          { name: "Ballindalloch 2016, single cask 61%", price: "£9.40" },
          { name: "Balvenie 12", price: "£6.25" },
          { name: "Balvenie 14, Caribbean Cask", price: "£7.90" },
          { name: "Ben Nevis 10", price: "£6.10" },
          { name: "Ben Nevis 9, Small parcels, 48%", price: "£7.05" },
          { name: "Benrinnes 9, RMW, 46%", price: "£6.45" },
          { name: "Ben Riach 12", price: "£5.95" },
          { name: "Bowmore 12", price: "£6.20" },
          { name: "Bruichladdich 8, The Classic Laddie", price: "£6.05" },
          { name: "Bunnahabhain 12", price: "£5.95" },
          { name: "Campbeltown Loch, Blend", price: "£5.10" },
          { name: "Caol Ila 12", price: "£6.10" },
          { name: "Caol Ila 9, Carn Mor, Ruby Port cask", price: "£7.40" },
          { name: "Caol ila, 10, Bourbon Cask, 58.7%", price: "£7.75" },
          { name: "Clynelish 14", price: "£6.25" },
          { name: "Craigellachie 16, Oloroso cask, 57.1%", price: "£7.75" },
          { name: "Daftmill 2010, 11year old 59.5%", price: "£9.40" },
          {
            name: "Daftmill 2011, RMW, Oloroso Sherry, 59.3%",
            price: "£11.15",
          },
          { name: "Dailluaine 14, Fino cask, 51.7%", price: "£6.70" },
          { name: "Dalmore 12", price: "£6.60" },
          { name: "Dalwhinnie 15", price: "£6.75" },
          { name: "Deanston 12, 46.3%", price: "£5.95" },
          { name: "Glenallachie 8, Scottish Oak cask, 46%", price: "£6.40" },
          { name: "Glenallachie 10 cask strength 57.2%", price: "£7.05" },
          { name: "Glenallachie 12", price: "£5.95" },
          { name: "Glenallachie 15", price: "£7.10" },
          { name: "Glenallachie 18", price: "£11.25" },
          { name: "Glendronach 12", price: "£6.15" },
          { name: "Glendronach no11 Cask, 59.8%", price: "£7.80" },
          { name: "Glendronach Port wood", price: "£5.95" },
          { name: "Glenfarclas 10", price: "£5.95" },
          { name: "Glenfiddich 12", price: "£5.95" },
          { name: "Glenfiddich 15", price: "£7.50" },
          { name: "Glenfiddich 18", price: "£9.10" },
          { name: "Glen Keith 25, Cadenheads 47.8%", price: "£11.95" },
          { name: "Glenlivet 15", price: "£7.45" },
          { name: "Glenmorangie 14, Quinta Ruben", price: "£7.30" },
          { name: "Glen Ord 10, Rarefind, CDP finish, 57.6%", price: "£8.40" },
          { name: "Glen Scotia 15", price: "£7.40" },
          { name: "Glen Scotia 18", price: "£9.70" },
          {
            name: "Glen Scotia 9, Heavy peat, Ribera del deuro, 54.3%",
            price: "£6.70",
          },
          {
            name: "Glen Scotia 12, The Mermaid, Palo Cortado 54.1%",
            price: "£8.10",
          },
          {
            name: "Glen Scotia 14, Dragon, Peated, Barolo cask, 56.8%",
            price: "£8.20",
          },
          { name: "Glen Scotia Victoriana 54.2%", price: "£6.95" },
          { name: "Glentauchers 16, RMW, Sherry cask, 46%", price: "£8.20" },
          { name: "Hazelburn 12, Olorroso cask 49.9%", price: "£8.10" },
          { name: "Hazelburn 21", price: "£14.70" },
          { name: "Hearach, 46%", price: "£6.50" },
          { name: "Hibiki Harmony", price: "£7.80" },
          { name: "Highland Park 12", price: "£6.15" },
          { name: "Highland Park 14, Oloroso cask, 57.1%", price: "£7.75" },
          { name: "Highland Park 18", price: "£9.40" },
          { name: "Inchgower 13, refill PX hogshead, 58.3%", price: "£6.15" },
          { name: "Jura 12", price: "£5.95" },
          { name: "Jura 31, Bourbon cask, Cadenheads, 44.4%", price: "£17.85" },
          {
            name: "Kilchoman, 10, `Loch Gorm`, Sherry cask, 46%",
            price: "£7.75",
          },
          { name: "Kilchoman Sanaig", price: "£6.95" },
          { name: "Kilchoman 13th Edition, 50%", price: "£7.80" },
          { name: "Kilkerran 8, Bourbon Cask, 55.6%", price: "£6.95" },
          { name: "Kilkerran 12", price: "£6.10" },
          { name: "Kilkerran 16", price: "£7.70" },
          { name: "Lagavulin 16", price: "£7.80" },
          { name: "Laphroaig 10, 40%", price: "£6.25" },
          { name: "Laphroaig 10, Cask strength, 56.5%", price: "£7.60" },
          { name: "Ledaig 14, Bourbon cask, 46%", price: "£8.10" },
          { name: "Lindores Abbey, Friar John Cor, 60.2%", price: "£7.10" },
          { name: "Lindores Abbey, `The Owners Cask`, 60.4%", price: "£7.15" },
          {
            name: "Linkwood 17,Signatory,PX & Olorosso casks,57.1%",
            price: "£7.75",
          },
          { name: "Lochlea Our Barley", price: "£5.60" },
          { name: "Longmorn 14, Sherry Octave, 60.5%", price: "£8.80" },
          { name: "Longrow 18", price: "£11.60" },
          { name: "Longrow Peated", price: "£5.95" },
          { name: "Macallan 12 Double cask", price: "£8.20" },
          { name: "Macallan 12 Sherry cask", price: "£8.90" },
          {
            name: "Macallan 13, Signatory, Oloroso Cask, 57.1%",
            price: "£7.40",
          },
          { name: "Miltonduff 11, Cadenheads, 55%", price: "£7.15" },
          {
            name: "Miltonduff 17, Cadenheads, Carcavelos cask, 51%",
            price: "£7.60",
          },
          { name: "Mortlach 12", price: "£6.75" },
          {
            name: "Mortlach 13, Signatory, Sherry Cask, 57.1%",
            price: "£6.70",
          },
          { name: "Mossburn 12, Foursquare rum cask, 57.7%", price: "£7.10" },
          { name: "Nikka Coffey Grain", price: "£6.40" },
          { name: "Nikka The Barrel", price: "£6.45" },
          { name: "Oban 14", price: "£7.45" },
          { name: "Paul John 7, Cadenheads, Goa, 55.4%", price: "£7.90" },
          { name: "Port Charlotte 10, 50%", price: "£5.95" },
          {
            name: "Port Charlotte PMC:01, Pomerol Cask, 54.5%",
            price: "£9.80",
          },
          { name: "Port Charlotte, Islay Barley, 50%", price: "£8.10" },
          { name: "Raasay", price: "£5.95" },
          { name: "Scapa Skiren", price: "£6.10" },
          { name: "Scapa Glanska", price: "£6.10" },
          {
            name: "Speyside – Glenlivet, 26, Cadenheads 48.9%",
            price: "£9.40",
          },
          { name: "Springbank 10", price: "£6.40" },
          { name: "Springbank 15", price: "£7.70" },
          { name: "Tamdhu 12, 43%", price: "£6.75" },
          { name: "Tomatin 12", price: "£5.95" },
          { name: "Tomatin 9, Rarefind, Sherry casks, 58.3%", price: "£7.10" },
          { name: "Tullibardine 26, Cadenheads 43.9%", price: "£9.95" },
          { name: "Yamazaki 12", price: "£11.25" },
        ],
      },
    ],
  },

  // Updated Detailed Whisky Menu - replace the existing "Whisky-Detailed" object
  {
    menu: "Whisky-Detailed",
    categories: [
      {
        category: "Lowlands",
        description:
          "An excellent starting place for any journey: lowland whiskies are delicate, light-bodied and dry. These whiskies are ideal as an aperitif.",
        items: [
          {
            name: "Auchentoshan 12 Year Old",
            price: "£5.95",
            description:
              "Triple distilled and matured solely in American bourbon casks. The result: a Lowland Single Malt Whisky with the sweet aromas of vanilla and coconut along with the signature smooth, delicate, Auchentoshan taste.",
          },
          {
            name: "Auchentoshan Three Wood",
            price: "£6.20",
            description:
              "Rich and elegant, matured in Bourbon, Oloroso and PX sherry casks. Like a rich Black Forest Gateaux, liqueur cherries in dark chocolate with ripe dark forest fruits.",
          },
          {
            name: "Auchentoshan 18 Year Old",
            price: "£8.30",
            description:
              "Matured in American oak casks we have here toasty vanilla, dark nuttiness and something zesty softening after a time.",
          },
          {
            name: "Daftmill 2010, Cask Strength, 11 Year Old, 59.5%",
            price: "£9.40",
            description:
              "A combination of 5 2010 vintage ex bourbon casks from the famous farm to bottle distillery. A juicy sweetly fruity whisky, impressively thick and engaging mouth feel.",
          },
          {
            name: "Daftmill 2011, Oloroso Sherry Cask, 59.3%",
            price: "£11.15",
            description:
              "Bottled exclusively for Royal Mile Whiskies this Daftmill Single Sherry Cask is packed with honey, dark chocolate, stone fruits and much more.",
          },
          {
            name: "Girvan 28, Bourbon Cask, Cadenheads, 54.7%",
            price: "£",
            description:
              "Distilled in 1988 this 28 year old single grain whisky from the Girvan distillery was bottled by Cadenheads in 2016. With a nose of butterscotch and jam tarts, the whisky progresses with a hint of cloves and nutmeg with sweet caramel and butterscotch.",
          },
          {
            name: "Glenkinchie 12 Year Old",
            price: "£5.95",
            description:
              "Our local distillery, just 20 miles from Edinburgh. Dry, floral notes on the nose develop into a refreshing citrus taste with a subtle creaminess.",
          },
          {
            name: "Lindores Abbey MCDXCIV (1494) 46%",
            price: "£5.60",
            description:
              "Matured in a selection of bourbon barrels, wine barriques and sherry butts. Impressively light yet rich aromatic spice and black pepper cuts through creamy caramel and vanilla.",
          },
          {
            name: "Lindores Abbey Friar John Cor – 60.2%",
            price: "£7.10",
            description:
              "Matured in a combination of bourbon, monbazillac sweet wine, STR and sherry casks give us a silky profile with lots of honeyed stone fruit, spiced nuts, figs & dates.",
          },
        ],
      },
      {
        category: "Highlands",
        description:
          "Geographically the largest of the regions, Highland whiskies are diverse in their individual notes; however they share a depth of flavour profile, with most having an initial sweetness that gives way to a dry finish.",
        items: [
          {
            name: "Aberfeldy 12 Year Old",
            price: "£6.20",
            description:
              "Our personal favourite, sweet and malty with a faint smokiness and crisp citrus finish.",
          },
          {
            name: "AnCnoc 12 Year Old",
            price: "£5.90",
            description:
              "A nice robust whisky that wears its oak and barley on its sleeve with subtle coffee notes.",
          },
          {
            name: "Arran 10 Year Old",
            price: "£5.95",
            description:
              "This 10 year old exudes the honeyed richness we associate with the island distillery. With herbal biscuityness and grass on the nose it finishes with a malty feel along with green fruits.",
          },
          {
            name: "Arran Machrie Moor, 10yr, 46%",
            price: "£6.45",
            description:
              "Named after the famous peat bog and standing stones on Arran. This peated expression has baked earth balanced with orchard fruit on the nose yet finishes with orange zest & maybe lemongrass.",
          },
          {
            name: "Clynelish 14 Year Old",
            price: "£6.25",
            description:
              "A Highland Malt on the coast where the maritime climate influences this delicious malt. Fruity with slight smokiness, rich and a drying finish. A great dram.",
          },
          {
            name: "Dalmore 12 Year Old",
            price: "£6.60",
            description:
              "Aged for the first 9 years in American White Oak ex-Bourbon casks, before half is transferred to ex-oloroso sherry casks for the final 3 years. The result is a whisky with a combination of sweetness and rich, sherried flavours.",
          },
          {
            name: "Dalwhinnie 15 Year Old",
            price: "£6.75",
            description:
              "A gorgeous whisky from a bleak landscape, full of nuts, honey and floral notes with a hint of vanilla and toffee.",
          },
          {
            name: "Glenmorangie 14 Year Old, The Quinta Ruban",
            price: "£7.30",
            description:
              "First aged in ex-bourbon casks then finished in ruby port casks which develop this smooth fruity spirit into a dark deep velvety whisky with bold chocolate notes.",
          },
          {
            name: "Oban 14 Year Old",
            price: "£7.45",
            description:
              "Initial hints of peat smoke, combined with a salty maritime flavour are balanced with citrus orangey notes. The finish contains sweeter honeyed notes endowing this malt a smoother silky finish.",
          },
          {
            name: "Tomatin 12 Year Old",
            price: "£5.95",
            description:
              "Smooth and silky, having been matured in traditional Scotch Whisky, ex-Bourbon and ex-Spanish sherry casks. The result is a sweet whisky with notes of apples, citrus and sweet spice.",
          },
          {
            name: "Tullibardine 26 Year Old, 43.9%",
            price: "£9.95",
            description:
              "Mangos, golden syrup, freshly whipped cream leads to a finish of caramelised bananas, honey with a hint of wood shavings.",
          },
        ],
      },
      {
        category: "Speyside",
        description:
          "The most prolific of the malt regions, Speyside is renowned for the quality of its spring water which provides the perfect canvas for a wealth of distilleries to display their craft. The whiskies from Speyside tend towards sweet.",
        items: [
          {
            name: "Aberlour 12 Year Old",
            price: "£6.20",
            description:
              "An easy going Speyside, the 12 Year Old has strong sherry notes with orchard fruits and gentle ginger spiciness. A deliciously complex whisky from an historic distillery.",
          },
          {
            name: "The Balvenie Doublewood 12 Year Old",
            price: "£6.25",
            description:
              "A second maturation in Sherry Casks gives a rich, full flavour with notes of summer fruits and chocolate, overlaid with subtle cinnamon and black pepper spice.",
          },
          {
            name: "The Glenlivet 12 Year Old",
            price: "£5.95",
            description:
              "Sweet orchard fruits on the palate, coupled with a grassy aroma make this the perfect dram for a summer's evening.",
          },
          {
            name: "Glenallachie 10 Year Old, Cask Strength 57.2%",
            price: "£7.05",
            description:
              "Heather honey, Mocha & brittle toffee with grapefruit, cinnamon, earthy tannins & ginger to finish.",
          },
          {
            name: "Glenallachie 12 Year Old",
            price: "£5.95",
            description:
              "Bursts of Orange zest, heather honey & damsons, followed by lashings of mocha, dark chocolate, cinnamon, figs & dates.",
          },
          {
            name: "Glenallachie 15 Year Old",
            price: "£7.10",
            description:
              "Lashings of fig syrup, mocha & treacle lead to dark chocolate, sweet spice, heather honey & a hint of ginger.",
          },
          {
            name: "Glenallachie 18 Year Old",
            price: "£11.25",
            description:
              "A glorious single malt. Casks were selected from across the distilleries 16 warehouses dating back to the 1970's. Impressive stuff with notes of toffee, robust malt and honeyed fruit.",
          },
          {
            name: "Glenfarclas 12 Year Old",
            price: "£6.45",
            description:
              "Malty, with a touch of spice and full of the rich sweetness a high quality Speyside can deliver.",
          },
          {
            name: "Glenfiddich 12 Year Old",
            price: "£5.95",
            description:
              "A consistent crowd pleaser with all the typical characteristics of a Speyside.",
          },
          {
            name: "Glenfiddich 15 Year Old",
            price: "£7.50",
            description:
              "Bourbon, sherry and virgin oak casks all play a part in producing this rich Christmas pudding-like malt.",
          },
          {
            name: "Glenfiddich 18 Year Old",
            price: "£9.10",
            description:
              "The extra time spent in the cask enhances the rich autumnal notes of this classic.",
          },
          {
            name: "Glen Keith 25 Year Old, 47.8%",
            price: "£11.95",
            description:
              "Aged for 25 years in 100% Bourbon casks. Sweet with an abundance of fruit on the palate, this whisky features notes of zingy pineapple, poached pears and melted milk chocolate.",
          },
          {
            name: "Linkwood 17 Year Old, 57.1%",
            price: "£7.75",
            description:
              "This addition to Signatory's exceptional cask 100 proof edition comes from the Linkwood distillery. This has spent 17 years in a selection of PX hogsheads and Olorosso sherry butts.",
          },
          {
            name: "Mortlach 12 Year Old, 43.4%",
            price: "£6.75",
            description:
              "Matured in both bourbon and sherry casks. This is a beautifully balanced, combining darker sherry notes with fresher Orchard-fruit flavours.",
          },
          {
            name: "The Speyside Distillery 26 Year Old, 48.9%",
            price: "£9.40",
            description:
              "Creamy caramel and almond flakes lead to a finish of bark, peppermint slice & dark chocolate.",
          },
        ],
      },
      {
        category: "Campbeltown",
        description:
          "Distilled in the Burgh of Campbletown on the Kintyre peninsula. Once a major producer with as many as 30 distileries by 2010 there were only three left Springbank, Glengoyle & Glen Sotia. Campbeltown whiskies are well known for notes of dried fruit, vanilla, toffee and brine from the see.",
        items: [
          {
            name: "Springbank 10 Year Old – 46%",
            price: "£6.05",
            description:
              "The perfect introduction to the Springbank range. Matured in a combination of bourbon and sherry casks, it is perfectly balanced with a full, rich finish.",
          },
          {
            name: "Springbank 15 Year Old – 46%",
            price: "£7.70",
            description:
              "A 15 year old from the Springbank distillery with plenty of sherry notes and spice, dried fruits & nuts.",
          },
          {
            name: "Glen Scotia 15 Year Old, 46%",
            price: "£7.40",
            description:
              "Aged in American oak in Campbeltown creating a beautifully fruity, salty and slightly spicy single malt.",
          },
          {
            name: "Glen Scotia 18 Year Old, 46%",
            price: "£9.70",
            description:
              "Finished in Oloroso sherry casks this delicious 18 year old shows off a good balance between fruity sweetness and classic Campbeltown salinity.",
          },
          {
            name: "Hazleburn 21 Year Old – 46%",
            price: "£14.70",
            description:
              "Triple distilled, non peated from the Springbank distillery. A rare chance to sample this highly collectible whisky. Vibrant & fruity.",
          },
          {
            name: "Kilkerran Batch No.6 – 57.4%",
            price: "£5.95",
            description:
              "Heavily Peated version of the usually lightly peated Kilkerran. Sweet peat smoke with notes of honeycomb lead to a peppery finish and a lot of peat smoke.",
          },
          {
            name: "Kilkerran 12 Year Old, 46%",
            price: "£6.10",
            description:
              "Lightly peated and matured in a combination of bourbon & sherry casks. Fruity citrus notes lead to vanilla, honeycomb & digestive biscuits.",
          },
          {
            name: "Kilkerran 16 Year Old, 46%",
            price: "£7.70",
            description:
              "A gorgeous Bourbon matured Campbeltown from Kilkerran. A touch of dried Apricot leads into earthy peat, peppery spice, biscuits & a hint of brine. Stone mineral notes to finish.",
          },
          {
            name: "Longrow Peated Campbeltown Single Malt, 46%",
            price: "£5.95",
            description:
              "Named after a long lost distillery of Campbeltown. Longrow was first produced in 1973 to provide a peaty, oily and robust component to a blend being created at the time.",
          },
          {
            name: "Longrow 18 Year Old, 46%",
            price: "£11.60",
            description:
              "Fully sherry matured and heavily peated. On the palate we have notes of honey, butterscotch and parma violets & hints of orange complement the subtle peat influence.",
          },
        ],
      },
      {
        category: "Islands",
        description:
          "Island whiskies are as varied and unique as the Scottish Islands themselves and offer rich rewards for those who explore them. Most Island malts have rich smoky notes as a result of the underground peat that carries the water to the distilleries.",
        items: [
          {
            name: "Highland Park 12 Year Old",
            price: "£6.15",
            description:
              "Distilled at the most northerly distillery in Scotland, on the island of Orkney. Highland Park has the distinction of being the last distillery that still cuts its own peat. The rewards of this labour are a whisky with an award-winning, subtle floral smoky sweetness that gives way to a rich malt delivery on the palate. The most approachable of the Island malts.",
          },
          {
            name: "Highland Park 18 Year Old",
            price: "£9.40",
            description:
              "Matured in a high proportion of 1st fill Sherry casks this wonderful dram features all of Highland Parks distinctive notes. Ripe cherries dusted with bittersweet cocoa, honeycomb and candied orange peel with a hint of minerality.",
          },
          {
            name: "Jura Origin",
            price: "£5.95",
            description:
              "A sweet honey aroma and gentile oak flavours leading to caramel and liquorice notes, finished in ex-Bourbon casks give Origin its distinctive Jura style.",
          },
          {
            name: "Jura 31 Year Old, 44.4%, Cadenheads",
            price: "£17.85",
            description:
              "Matured in a single Bourbon barrel, this 31 year old whisky has dried Mango on the nose with a lovely minerality and melon on the palate, with an earthy, dried ginger to finish.",
          },
          {
            name: "Talisker 10 Year Old",
            price: "£6.10",
            description:
              "Distilled on the beautiful Isle of Skye, there is no mistaking Talisker's maritime heritage; its powerful peat-smoke nose is cut through with sea-water saltiness. While the smoke carries though on the palate, it is complimented with warming barley-malt and dried-fruit flavours.",
          },
        ],
      },
      {
        category: "Islay",
        description:
          "The boldest whiskies in Scotland, Islay whiskies are renowned for their strong smoky flavours, imbued by malting the barley using the island's native peat. Bold and smoky, they can be medicinal and seaweed; their bold flavours make them an exceptional digestif.",
        items: [
          {
            name: "Ardbeg 10 Year Old",
            price: "£6.80",
            description:
              "This highly acclaimed whisky softens its sharp citrus with hints of vanilla, with a lingering smoke finish.",
          },
          {
            name: "Ardbeg An Oa",
            price: "£6.75",
            description:
              "Matured in a combination of Pedro Ximinez sherry casks and Bourbon barrels. This is a rounded & smoky dram with notes of toffee, aniseed, dates & apricots.",
          },
          {
            name: "Bowmore 12 Year Old",
            price: "£6.20",
            description:
              "Subtle lemon and honey and Bowmore's trademark peaty smokiness on the nose lead to a sweet heather-honey taste with a hit of peat smoke, giving it a long, mellow finish.",
          },
          {
            name: "Bruichladdich The Classic Laddie, 50%",
            price: "£6.05",
            description:
              "Sea salt & black pepper on the nose, Malty biscuit, apple & pear on the palate, although unpeated it has a distinctive impression of faint smoke.",
          },
          {
            name: "Bunnahabhain 12 Year Old",
            price: "£5.95",
            description:
              "Offering a fresh and aromatic experience with hints of smoke. The taste starts with a light fruit and nut note that leads to a malty sweetness, finishing with a full-bodied lingering experience.",
          },
          {
            name: "Caol Ila 12 Year Old",
            price: "£6.10",
            description:
              "An ideal introduction to the bold smoky Islay flavours. The peat is balanced with an oily body, and sweet peppery undertones.",
          },
          {
            name: "Kilchoman Sanaig, 49.8%",
            price: "£6.95",
            description:
              "Matured in both Bourbon and Sherry casks. Plenty of fruit and earthy peat come through with a touch of dark chocolate covered raisins.",
          },
          {
            name: "Kilchoman The 13th Edition, 50%",
            price: "£7.80",
            description:
              "Distilled from Barley grown on the farm at Kilchoman, this whisky has been aged for a minimum of 8 years in Bourbon barrels. Wood spice, milk chocolate, peat smoke & candied citrus.",
          },
          {
            name: "Laphroaig 10 Year Old",
            price: "£6.15",
            description:
              "The classic Islay malt; dry and full of peat smoke. A drop of water opens up more complex spicy notes. A taste difficult to forget once acquired.",
          },
          {
            name: "Lagavulin 16 Year Old",
            price: "£7.80",
            description:
              "An intensely, rich dried-fruit sweetness, smokey and strong with barley-malt flavours whisky, but also offering a dryness that turns it into a truly interesting dram.",
          },
          {
            name: "Port Charlotte Heavily Peated 10 Year Old, 50%",
            price: "£5.95",
            description:
              "The flagships Port Charlotte expression from Bruichladdie distillery. A delicious smoky number indeed, matured in 1st & 2nd fill American whiskey casks & 2nd fill French wine casks.",
          },
          {
            name: "Port Charlotte PMC:01, Pomerol Cask, 54.5%",
            price: "£9.80",
            description:
              "Balances Peat smoke with subtle floral & fruit notes. This 11 year old whisky has spent 6 years in Pomerol casks from Bordeaux.",
          },
        ],
      },
      {
        category: "India",
        items: [
          {
            name: "Paul John 7 Year Old (India)",
            price: "£7.90",
            description:
              "Distilled in Goa, India. This is an interesting offering with heavy peat and smoke. Rich, spicy & herbal on the nose aromas. The peat becomes bigger on the palate with forest fruits and raisins with more peat & honey on the finish.",
          },
        ],
      },
      {
        category: "Whisky Flights",
        items: [
          {
            name: "The Regions",
            description:
              "Auchentoshan 12 (Lowland), Dalmore 12 (Highland), Glenallachie 12 (Speyside), Bowmore 12 (Islay)",
            price: "£30",
          },
          {
            name: "Speyside",
            description:
              "Glenallachie 12, The Balvenie, Glenfiddich 12, Mortlach 12",
            price: "£30",
          },
          {
            name: "Islay",
            description:
              "Ardbeg 10, Laphroaig 10, Port Charlotte 10, Bunnahabhain 12",
            price: "£30",
          },
          {
            name: "Campbeltown",
            description: "Springbank 10, Glen Scotia 15, Kilkerran 12, Longrow",
            price: "£35",
          },
          {
            name: "Sherry Bombs",
            description:
              "Tamdhu 12, Sherry Oak casks 43%, Highland Park 14, Oloroso Sherry butts 57.1%, Tomatin 9 Sherry casks 58.3%, Strathmill 12, Oloroso Sherry butts 57.1%",
            price: "£35",
          },
          {
            name: "Old & Rare",
            description:
              "Glen Keith 25 year old 47.8%, Daftmill 11 year old, 59.5%, Girvan 28 year old, 54.7%, Hazelburn 21 year old 46%",
            price: "£60",
          },
        ],
      },
    ],
  },
  // Updated Wine Menu
  // Updated Wine Menu - replace the existing "Wine" object completely
  {
    menu: "Wine",
    categories: [
      {
        category: "White Wines",
        items: [
          {
            name: "2023 'G' Garganega | 12.5%",
            description:
              "Alpha Zeta, Veneto, Italy - Lively, crisp, honey, almond & lime",
            price: "£5.25/£6.45/£26.00",
          },
          {
            name: "2023 Dao Branco | 13%",
            description:
              "Grao Vasco, Portugal - Refreshing, pear, pineapple with a mineral bite",
            price: "£5.50/£6.95/£28.00",
          },
          {
            name: "2023 Sauvignon Blanc | 13.5%",
            description:
              "Montes Classic Series, Casablanca, Chile - Fresh, easy drinking with tropical fruit",
            price: "£5.75/£7.45/£31.00",
          },
          {
            name: "2023 Picpoul | 12.5%",
            description:
              "Richemer, Cotes De Thau France - Refreshing citrus, saline character, a perfect match with seafood",
            price: "£5.95/£7.75/£33.00",
          },
          {
            name: "2023 Pinot Grigio | 12.5%",
            description:
              "Ponte del Diavolo, Friuli, Italy - Fresh, pear, almond and elegant palate",
            price: "£6.25/£8.25/£35.00",
          },
          {
            name: "2023 Alvarinho Eschola | 13.5%",
            description:
              "Azevedo, Portugal - Broad rich & creamy with vibrant acidity",
            price: "£6.50/£8.75/£37.00",
          },
          {
            name: "2023 Viognier | 12.5%",
            description:
              "Bodega Garzon Estate, Maldonaldo, Portugal - Dried Apricots & white Peach, firm acidity",
            price: "£6.75/£9.25/£39.00",
          },
          {
            name: "2022 Mendoza Chardonnay | 14.5%",
            description:
              "Kaiken Ultra, Argentina - Fruity, mineral and a touch of smoke",
            price: "£6.95/£9.95/£42.00",
          },
          {
            name: "2023 Sauvignon Blanc | 12%",
            description:
              "Kim Crawford, Marlborough, NZ - Vibrant, passion fruit, melon and blackcurrant bud",
            price: "£6.95/£9.45/£41.00",
          },
          {
            name: "2020 Organic Estate Riesling | 12.0%",
            description:
              "Dreissigacker, Rheinhessen, Germany - Juicy, ripe fruit, subtle spice",
            price: "£48.00/bottle",
          },
          {
            name: "2023 Sancerre | 13.0%",
            description:
              "Domaine des Brosses, Loire, France - Pure, mineral, citrus, herbaceous notes",
            price: "£58.00/bottle",
          },
          {
            name: "2021 Old Vines White Blend | 13.5%",
            description:
              "Moulineux signature, South Africa - Fragrant, floral nose, richly textured",
            price: "£60.00/bottle",
          },
          {
            name: "2019 'La Rocca' Soave Classico | 13%",
            description:
              "Pieropan, Veneto, Italy - Intense, balanced, Garganega at its finest",
            price: "£65.00/bottle",
          },
          {
            name: "2018 'Les Vaudevey' Chablis Premier Cru | 12.5%",
            description:
              "Domaine Laroche, France - Ripe citrus, smoky notes, minerality",
            price: "£75.00/bottle",
          },
          {
            name: "2017 Santa Rita Hills Chardonnay | 12.5%",
            description: "Racines, California, USA",
            price: "£85.00/bottle",
          },
        ],
      },
      {
        category: "Red Wines",
        items: [
          {
            name: "2023 'C' Corvina | 12.5%",
            description:
              "Alpha Zeta, Veneto, Italy - Balanced, juicy, ripe cherries, plums",
            price: "£5.25/£6.45/£26.00",
          },
          {
            name: "2022 Vinho Regional Lisboa Tinto | 13%",
            description:
              "Evaristo, Portugal - Deep ruby in colour, ripe cherries, juicy blackberries and blackcurrants",
            price: "£5.50/£6.95/£28.00",
          },
          {
            name: "2022 Colchagua Merlot | 14.5%",
            description:
              "Montes Classic, Chile - Plum, blackberry, sweet spices",
            price: "£5.75/£7.45/£30.00",
          },
          {
            name: "2022 Familia de Vinos Organic Fairtrade Malbec | 13.5%",
            description:
              "Mendoza, Argentina - Plums, cherries & a hint of violet with round & velvety tannins",
            price: "£5.95/£7.75/£33.00",
          },
          {
            name: "2022 Primitivo di Puglia | 13.5%",
            description:
              "A Mano, Puglia, Italy - Fresh, complex, ripe dark fruits",
            price: "£6.25/£8.25/£35.00",
          },
          {
            name: "2022 Cabernet Shiraz Willunga 100 | 14.5%",
            description:
              "McLaren Vale, Australia - Red fruits, complemented with fresh blood orange, spices & fine tannins",
            price: "£6.50/£8.75/£37.00",
          },
          {
            name: "2022 Cotes-du-Rhône | 14%",
            description:
              "Famille Perrin, Southern Rhône, France - Redcurrant, peppery spice, soft, balanced",
            price: "£6.75/£9.25/£39.00",
          },
          {
            name: "2020 Rioja Reserva | 14.5%",
            description:
              "Izadi, Rioja, Spain - Rich and concentrated with black fruit, hints of tobacco and liquorice",
            price: "£7.25/£9.95/£42.00",
          },
          {
            name: "2022 Tannat, Bodega Garzon Reserve | 14%",
            description:
              "Maldonado, Uruguay - Full bodied, ripe tannins, dark fruit",
            price: "£45.00/bottle",
          },
          {
            name: "2022 Chianti Ruffina | 13.5%",
            description:
              "Selvepiana, Tuscany, Italy - Ripe blackberry, cherry, floral finish",
            price: "£48.00/bottle",
          },
          {
            name: "2022 Morgon 'Les Grand Cras' | 13.0%",
            description:
              "Jean Marc Burgaud, Beaujolais, France - Dark berry fruits, lifted acidity",
            price: "£52.00/bottle",
          },
          {
            name: "2022 'Crimson' Martinborough Pinot Noir | 13%",
            description:
              "Ata Rangi, New Zealand - Food friendly, aromatically enticing, structured",
            price: "£60.00/bottle",
          },
          {
            name: "2017 Syrah Mullineux Signature | 14.5%",
            description:
              "Coastal Region, South Africa - Aromatic, fresh acidity, dusty tannins",
            price: "£65.00/bottle",
          },
          {
            name: "2021 '8 Songs' Barossa Valley Shiraz | 14.5%",
            description:
              "Peter Lehmann Masters, South Australia - Full bodied, Ripe plums with notes of deep dark chocolate, coffee & warm spice",
            price: "£70.00/bottle",
          },
          {
            name: "2016 Saint-Émillion Grand Cru | 14.5%",
            description:
              "Chateau Fleur de Lisse, Bordeaux, France - Flavourful, fine grain tannins, fresh finish",
            price: "£75.00/bottle",
          },
          {
            name: "2018 Chateauneuf-du-Pape 'Les Sinards' | 14.5%",
            description:
              "Famille Perrin 'Les Crus', France - Fresh, forward, spicy red/ black fruit",
            price: "£85.00/bottle",
          },
        ],
      },
      {
        category: "Rosé Wine",
        items: [
          {
            name: "2023 'R' Rosato | 12.5%",
            description:
              "Alpha Zeta, Veneto, Italy - Strawberries, Jasmine, savoury finish",
            price: "£5.45/£6.75/£28.00",
          },
          {
            name: "2023 Grenache Rosé | 12.5%",
            description:
              "Willunga 100, McLaren Vale, Australia - Crisp, dry and pale full of red fruit and rose petal aromas",
            price: "£6.25/£8.45/£38.00",
          },
        ],
      },
      {
        category: "Champagne & Sparkling Wines",
        items: [
          {
            name: "NV Prosecco Superiore Spumante",
            description:
              "Ca' Morlin, Veneto, Italy - Clean, floral, pear, fine bubbles",
            price: "£7.95/£36.00",
          },
          {
            name: "NV Blanc de Blanc Cava",
            description:
              "Penedes, Cataluna, Spain - Fresh & fruity with serious flair",
            price: "£8.95/£46.00",
          },
          {
            name: "NV Essential Cuvée Extra Brut",
            description:
              "Piper Heidseck, Champagne, France - Fine bubbles, apples, almonds, finesse",
            price: "£65.00/bottle",
          },
          {
            name: "NV Rosé Sauvage",
            description:
              "Piper Heidseck, Champagne, France - Well balanced, long smoky finish",
            price: "£75.00/bottle",
          },
          {
            name: "NV Essential Blanc de Blancs Extra Brut",
            description:
              "Piper Heidseck, Champagne, France - Lemon, brioche, full bodied, entrancing mid palate",
            price: "£85.00/bottle",
          },
          {
            name: "2014 Vintage",
            description:
              "Piper Heidseck, Champagne, France - Magnificent maturity, perfectly balanced",
            price: "£110.00/bottle",
          },
        ],
      },
      {
        category: "Sherry, Port & Pudding Wines",
        items: [
          {
            name: "NV Fino Innocente Single Vineyard",
            description:
              "Valdespina, Andalucia, Spain - Complex, almonds, apples & a little saltiness",
            price: "£6.45/£28.00",
          },
          {
            name: "2023 Barosa Valley Botrytis Semillon",
            description:
              "Peter Lehman, Australia - Luscious apricot honey & butterscotch",
            price: "£6.45/£28.00",
          },
          {
            name: "NV Rutherglen Muscat",
            description:
              "Chambers Rosewood, Victoria, Australia - Sweet, rich and unctuous yet zesty & balanced",
            price: "£6.75/£29.00",
          },
          {
            name: "2019 Sauternes",
            description:
              "Chateau Laville, Bordeaux, France - Candied fruits, honey, spice with a citrus finish",
            price: "£8.45/£42.00",
          },
          {
            name: "2018 Unfiltered LBV Port",
            description: "Sandeman, Douro, Portugal",
            price: "£6.25/£48.00",
          },
          {
            name: "NV 10 year old Tawny Port",
            description: "Sandeman, Douro, Portugal",
            price: "£6.95/£55.00",
          },
          {
            name: "NV 20 year old Tawny Port",
            description: "Sandeman, Douro, Portugal",
            price: "£9.25/£85.00",
          },
        ],
      },
    ],
  },

  // Rums Menu
  {
    menu: "Rums",
    categories: [
      {
        category: "Barbados",
        items: [
          {
            name: "Foursquare Exceptional Cask Series",
            description:
              "Détente, Mark XIV, 10yr, 51% - Ex Bourbon & Ex port casks",
            price: "£5.80",
          },
          {
            name: "Foursquare Private Cask Series",
            description:
              "Elysium, TWE, 12yr, 60% - Ex Bourbon & Ex Sherry casks",
            price: "£6.10",
          },
          {
            name: "Cadenheads Single Cask Foursquare",
            description: "Foursquare 11yr, single cask, 60.9%",
            price: "£6.60",
          },
          {
            name: "R.L. Seale’s 10yr old, 46%",
            description: "",
            price: "£4.60",
          },
          {
            name: "Mount Gay Eclipse, 40%",
            description: "",
            price: "£3.80",
          },
          {
            name: "Mount Gay XO, 43%",
            description: "",
            price: "£4.10",
          },
          {
            name: "Mount Gay Black Barrel, 43%",
            description: "",
            price: "£4.40",
          },
          {
            name: "Doorly’s XO, 43%",
            description: "",
            price: "£4.90",
          },
          {
            name: "Doorly’s 12, 43%",
            description: "",
            price: "£5.20",
          },
          {
            name: "Doorly’s 14yr old, 48%",
            description: "",
            price: "£5.90",
          },
          {
            name: "Bristol Classic Foursquare, 11yr, 47%",
            description: "",
            price: "£5.30",
          },
        ],
      },
      {
        category: "Belize",
        items: [
          {
            name: "Travellers single cask, 11yr old, 64.6%",
            description: "",
            price: "£5.80",
          },
          {
            name: "Travellers single cask, 12yr old, 64.1%",
            description: "",
            price: "£6.10",
          },
        ],
      },
      {
        category: "Brazil",
        items: [
          {
            name: "Epris,12yr old, single cask, 51.2%",
            description: "",
            price: "£9.40",
          },
        ],
      },
      {
        category: "Cuba",
        items: [
          {
            name: "Havana Club Especial, 40%",
            description: "",
            price: "£3.80",
          },
          {
            name: "Havana Club 7, 40%",
            description: "",
            price: "£4.10",
          },
        ],
      },
      {
        category: "Fiji",
        items: [
          {
            name: "Plantation, Fiji Islands, 13 yr, 49.5%",
            description: "",
            price: "£5.80",
          },
        ],
      },
      {
        category: "Guatemala",
        items: [
          {
            name: "Ron Zacapa 23, 40%",
            description: "",
            price: "£5.70",
          },
        ],
      },
      {
        category: "Guyana",
        items: [
          {
            name: "Cadenheads, Uitvlugt 18yr, 58.7%",
            description: "",
            price: "£8.90",
          },
          {
            name: "El Dorado 15 yr, 43%",
            description: "",
            price: "£6.60",
          },
          {
            name: "Woods Old Navy Rum, 57%",
            description: "",
            price: "£4.60",
          },
        ],
      },
      {
        category: "Haiti",
        items: [
          {
            name: "Clairin Sajous, 55.9%",
            description: "",
            price: "£6.20",
          },
        ],
      },
      {
        category: "Jamaica",
        items: [
          {
            name: "Appleton Estate Signature, 40%",
            description: "",
            price: "£3.80",
          },
          {
            name: "Appleton Estate Rare 12yr, 43%",
            description: "",
            price: "£4.80",
          },
          {
            name: "Appleton Estate 21yr, 43%",
            description: "",
            price: "£12.70",
          },
          {
            name: "Worthy Park, Single estate, 45%",
            description: "",
            price: "£5.80",
          },
          {
            name: "Worthy Park 109, Dark, 54.5%",
            description: "",
            price: "£5.60",
          },
        ],
      },
      {
        category: "Martinique",
        items: [
          {
            name: "Trois Rivieres, *Cuvee de l’ocean*, 42%",
            description: "",
            price: "£4.40",
          },
        ],
      },
      {
        category: "St Lucia",
        items: [
          {
            name: "Chairman’s Reserve Original, 40%",
            description: "",
            price: "£3.80",
          },
          {
            name: "Chairman’s Reserve Spiced, 40%",
            description: "",
            price: "£3.80",
          },
        ],
      },
      {
        category: "Trinidad",
        items: [
          {
            name: "St. Andrews Rum company",
            description: "Caroni 17yr, 46%",
            price: "£8.30",
          },
          {
            name: "Cadenheads Single Cask Caroni",
            description: "Caroni 20yr, single cask, 60.6%",
            price: "£12.50",
          },
        ],
      },
      {
        category: "Venezuela",
        items: [
          {
            name: "Diplomatico Reserva, 40%",
            description: "",
            price: "£4.90",
          },
          {
            name: "Cadenheads 13yr, single cask 58.6%",
            description: "",
            price: "£5.90",
          },
        ],
      },
    ],
  },

  // Tea, Coffee & Sherry Menu
  {
    menu: "Tea, Coffee & Sherry",
    categories: [
      {
        category: "Drinks",
        items: [
          {
            name: "English Breakfast Tea",
            description: "Traditional tea served with milk",
            price: "£2.00",
          },
          {
            name: "Espresso",
            description: "Strong black coffee served in a small shot",
            price: "£2.50",
          },
          {
            name: "Sherry",
            description: "A glass of sweet sherry",
            price: "£4.00",
          },
        ],
      },
    ],
  },
];
