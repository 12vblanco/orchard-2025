export const menuItems = [
  // Food Menu
  {
    menu: "Food Menu",
    categories: [
      {
        category: "Starters & Lighter Bites",
        items: [
          {
            name: "Meat, Cheese and Bread selection",
            description:
              "Designed for sharing, with cured meats, assorted cheeses, bread and dips",
            price: "£17.45",
          },
          {
            name: "The Orchard’s Soup of the Day",
            description: "With crusty bread & butter",
            price: "£6.25",
            vegetarian: true,
          },
          {
            name: "Cockburn’s of Dingwall Award Winning Haggis Fritters",
            description: "With tomato chilli jam and balsamic glaze",
            price: "£9.95 / £15.25",
          },
          {
            name: "Cullen Skink",
            description:
              "Smoked haddock, leek, onion, potato & cream soup with crusty bread",
            price: "£10.25",
          },
          {
            name: "Black Pudding and Blue Cheese Salad",
            description: "With crispy bacon, cherry tomatoes and mixed leaves",
            price: "£9.95 / £15.75",
          },
          {
            name: "Baba Ghanoush topped with Pecan Nuts and Pomegranate",
            description: "Served with muhammara & walnut dip and crostini",
            price: "£9.75",
            vegan: true,
          },
        ],
      },
      {
        category: "The Orchard’s Rustic Sandwiches",
        items: [
          {
            name: "Flat Iron Steak Sandwich",
            description: "With mixed leaves & thousand island dressing",
            price: "£9.95",
          },
          {
            name: "Chicken Shawarma & Asian slaw Sandwich",
            description: "With mayonnaise & baby gem lettuce",
            price: "£9.95",
          },
          {
            name: "Roasted Red Pepper & Feta Sandwich",
            description:
              "With muhammara & walnut dip, mixed leaves & vegan mayo",
            price: "£9.45",
            vegan: true,
          },
          {
            name: "Battered Haddock Fillet & Tartare Sauce Sandwich",
            description: "With pea puree & baby gem lettuce",
            price: "£9.95",
          },
          {
            name: "Brie & Bacon Sandwich",
            description: "With mayonnaise, baby gem & tomato chilli jam",
            price: "£9.75",
          },
          {
            name: "Add a bowl of soup, chips or a house salad to your sandwich",
            price: "£4.25",
          },
        ],
      },
      {
        category: "Mains",
        items: [
          {
            name: "Fresh Haddock & Hand cut Potato Chips",
            description:
              "Crispy beer battered (or breaded for an extra £1) with petit pois & homemade tartare sauce",
            price: "£17.45",
          },
          {
            name: "Twice baked Goats Cheese Soufflé",
            description:
              "With oven roasted cherry tomatoes, add a house salad OR chips for £4.25",
            price: "£16.95",
            vegetarian: true,
          },
          {
            name: "The Orchard’s Legendary Steak Pie",
            description:
              "With a puff pastry bonnet, green beans & hand cut potato chips",
            price: "£17.45",
          },
          {
            name: "Mushroom, Chestnut & Sage Risotto",
            description:
              "Topped with toasted pumpkin seeds and vegetarian parmesan. Vegan feta available as a substitute",
            price: "£16.95",
            vegetarian: true,
          },
          {
            name: "Pan fried Fillet of Coley",
            description: "With a chorizo and bean cassoulet",
            price: "£19.45",
          },
          {
            name: "28 day aged 8oz Scottish Flat Iron Steak",
            description:
              "With potato fondant, tenderstem broccoli and onion rings with miso mushroom sauce. Add chips for £4.25",
            price: "£22.25",
          },
          {
            name: "The Orchard’s Veggie Burger",
            description:
              "Sweet potato, black eyed bean & sweetcorn burger with Asian slaw & sweet chilli mayo on a seeded bap with hand cut chips",
            price: "£15.75",
            vegetarian: true,
          },
          {
            name: "The Orchard’s Prime Scotch Beef Burger",
            description:
              "With cheddar cheese, baby gem & thousand island dressing on a seeded bap and with hand cut chips. Add bacon for an extra £1.50",
            price: "£15.95",
          },
          {
            name: "Sides",
            description:
              "Hand cut chips, onion rings, garlic bread, house salad, mixed olives",
            price: "£5.45",
          },
        ],
      },
    ],
  },

  // Sunday Roast Menu
  {
    menu: "Sunday Roast",
    categories: [
      {
        category: "Roasts",
        items: [
          {
            name: "Roast Lamb",
            description: "With roasted vegetables, gravy, and potatoes",
            price: "£18.00",
          },
          {
            name: "Roast Chicken",
            description: "With seasonal vegetables and stuffing",
            price: "£16.50",
          },
          {
            name: "Vegetarian Roast",
            description:
              "Stuffed butternut squash with quinoa, lentils, and spinach",
            price: "£15.00",
            vegetarian: true,
          },
        ],
      },
    ],
  },

  // Kids Menu
  {
    menu: "Kids Menu",
    categories: [
      {
        category: "Main Courses",
        items: [
          {
            name: "Mini Burger and Chips",
            description: "Beef burger with fries",
            price: "£7.00",
          },
          {
            name: "Chicken Tenders and Chips",
            description: "With a choice of dip",
            price: "£7.50",
          },
          {
            name: "Pasta with Tomato Sauce",
            description: "Vegan pasta with fresh tomato sauce",
            price: "£6.50",
            vegan: true,
          },
        ],
      },
    ],
  },

  // Gluten-Free Menu
  {
    menu: "Gluten Free",
    categories: [
      {
        category: "Gluten-Free Options",
        items: [
          {
            name: "Grilled Salmon",
            description: "With quinoa salad and avocado",
            price: "£19.50",
          },
          {
            name: "Quinoa and Roasted Vegetables",
            description: "Mixed quinoa and roasted vegetables with olive oil",
            price: "£15.00",
            glutenFree: true,
          },
        ],
      },
    ],
  },

  // Wine Menu
  {
    menu: "Wine",
    categories: [
      {
        category: "Wines",
        items: [
          {
            name: "Red Wine",
            description: "A selection of our finest reds",
            price: "£5.00/glass",
          },
          {
            name: "White Wine",
            description: "Crisp, refreshing white wines",
            price: "£4.50/glass",
          },
        ],
      },
    ],
  },

  // Beers Menu
  {
    menu: "Beers",
    categories: [
      {
        category: "Beers",
        items: [
          {
            name: "Craft IPA",
            description: "Brewed with hops and malts for a rich taste",
            price: "£4.50",
          },
          {
            name: "Lager",
            description: "Light and refreshing lager",
            price: "£3.50",
          },
        ],
      },
    ],
  },

  // Whisky Menu
  {
    menu: "Whisky",
    categories: [
      {
        category: "Whiskies",
        items: [
          {
            name: "Single Malt Scotch",
            description: "A smooth and peaty scotch whisky",
            price: "£7.50",
          },
          {
            name: "Bourbon",
            description: "Rich caramel flavors with a hint of vanilla",
            price: "£6.00",
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
        category: "Rums",
        items: [
          {
            name: "Dark Rum",
            description: "Strong, bold flavors with a smooth finish",
            price: "£6.00",
          },
          {
            name: "White Rum",
            description: "Crisp and clean with a light sweetness",
            price: "£5.50",
          },
        ],
      },
    ],
  },

  // Gins Menu
  {
    menu: "Gins",
    categories: [
      {
        category: "Gins",
        items: [
          {
            name: "London Dry Gin",
            description: "Classic, dry gin with citrus notes",
            price: "£5.50",
          },
          {
            name: "Flavored Gin",
            description: "Fruity and aromatic gin varieties",
            price: "£6.00",
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
