import { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Italian Margherita Pizza',
    description: 'Classic Neapolitan pizza with fresh mozzarella and basil',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1600',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    ingredients: [
      'Pizza dough',
      'San Marzano tomatoes',
      'Fresh mozzarella',
      'Fresh basil',
      'Olive oil',
      'Salt'
    ],
    instructions: [
      'Shape the dough',
      'Add tomato sauce',
      'Top with cheese',
      'Bake at high heat'
    ],
    tags: ['Italian', 'Pizza', 'Vegetarian', 'Classic']
  },
  {
    id: '2',
    title: 'Japanese Ramen',
    description: 'Rich and creamy tonkotsu ramen with chashu pork',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=1600',
    prepTime: 40,
    cookTime: 180,
    servings: 4,
    difficulty: 'Hard',
    cuisine: 'Japanese',
    ingredients: [
      'Pork bones',
      'Ramen noodles',
      'Chashu pork',
      'Soft-boiled eggs',
      'Green onions',
      'Nori'
    ],
    instructions: [
      'Prepare bone broth',
      'Cook noodles',
      'Slice chashu',
      'Assemble bowls'
    ],
    tags: ['Japanese', 'Soup', 'Pork', 'Comfort']
  },
  {
    id: '3',
    title: 'Thai Green Curry',
    description: 'Aromatic coconut curry with vegetables and chicken',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=1600',
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'Thai',
    ingredients: [
      'Chicken thighs',
      'Coconut milk',
      'Green curry paste',
      'Thai eggplants',
      'Bamboo shoots',
      'Thai basil'
    ],
    instructions: [
      'Cook curry paste',
      'Add coconut milk',
      'Simmer chicken',
      'Add vegetables'
    ],
    tags: ['Thai', 'Curry', 'Spicy', 'Chicken']
  },
  {
    id: '4',
    title: 'French Coq au Vin',
    description: 'Classic braised chicken in red wine sauce',
    image: 'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?auto=format&fit=crop&q=80&w=1600',
    prepTime: 30,
    cookTime: 90,
    servings: 6,
    difficulty: 'Medium',
    cuisine: 'French',
    ingredients: [
      'Whole chicken',
      'Red wine',
      'Pearl onions',
      'Mushrooms',
      'Bacon lardons',
      'Fresh herbs'
    ],
    instructions: [
      'Brown chicken',
      'Cook vegetables',
      'Add wine',
      'Simmer until tender'
    ],
    tags: ['French', 'Chicken', 'Wine', 'Classic']
  },
  {
    id: '5',
    title: 'Indian Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=1600',
    prepTime: 30,
    cookTime: 45,
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'Indian',
    ingredients: [
      'Chicken tikka',
      'Tomato sauce',
      'Cream',
      'Butter',
      'Spices',
      'Fenugreek'
    ],
    instructions: [
      'Marinate chicken',
      'Make sauce',
      'Combine and simmer',
      'Finish with cream'
    ],
    tags: ['Indian', 'Curry', 'Chicken', 'Creamy']
  },
  {
    id: '6',
    title: 'Mexican Tacos al Pastor',
    description: 'Marinated pork tacos with pineapple',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=1600',
    prepTime: 45,
    cookTime: 120,
    servings: 8,
    difficulty: 'Hard',
    cuisine: 'Mexican',
    ingredients: [
      'Pork shoulder',
      'Achiote paste',
      'Pineapple',
      'Corn tortillas',
      'Onions',
      'Cilantro'
    ],
    instructions: [
      'Marinate pork',
      'Stack and roast',
      'Slice meat',
      'Serve in tortillas'
    ],
    tags: ['Mexican', 'Pork', 'Spicy', 'Street Food']
  },
  {
    id: '7',
    title: 'Greek Moussaka',
    description: 'Layered eggplant casserole with meat sauce',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1600',
    prepTime: 45,
    cookTime: 60,
    servings: 8,
    difficulty: 'Hard',
    cuisine: 'Greek',
    ingredients: [
      'Eggplants',
      'Ground lamb',
      'Bechamel sauce',
      'Tomatoes',
      'Cheese',
      'Spices'
    ],
    instructions: [
      'Prepare eggplants',
      'Make meat sauce',
      'Make bechamel',
      'Layer and bake'
    ],
    tags: ['Greek', 'Casserole', 'Lamb', 'Comfort']
  },
  {
    id: '8',
    title: 'Vietnamese Pho',
    description: 'Aromatic beef noodle soup with herbs',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=1600',
    prepTime: 40,
    cookTime: 240,
    servings: 6,
    difficulty: 'Hard',
    cuisine: 'Vietnamese',
    ingredients: [
      'Beef bones',
      'Rice noodles',
      'Beef slices',
      'Bean sprouts',
      'Fresh herbs',
      'Spices'
    ],
    instructions: [
      'Make broth',
      'Cook noodles',
      'Prepare toppings',
      'Assemble bowls'
    ],
    tags: ['Vietnamese', 'Soup', 'Beef', 'Healthy']
  },
  {
    id: '9',
    title: 'Spanish Paella',
    description: 'Saffron-infused rice with seafood and chorizo',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=1600',
    prepTime: 30,
    cookTime: 45,
    servings: 6,
    difficulty: 'Medium',
    cuisine: 'Spanish',
    ingredients: [
      'Bomba rice',
      'Mixed seafood',
      'Chorizo',
      'Saffron',
      'Bell peppers',
      'Peas'
    ],
    instructions: [
      'Sauté sofrito',
      'Add rice and stock',
      'Add seafood',
      'Create socarrat'
    ],
    tags: ['Spanish', 'Rice', 'Seafood', 'Party']
  },
  {
    id: '10',
    title: 'Korean Bibimbap',
    description: 'Mixed rice bowl with vegetables and egg',
    image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&q=80&w=1600',
    prepTime: 35,
    cookTime: 25,
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'Korean',
    ingredients: [
      'Steamed rice',
      'Vegetables',
      'Beef bulgogi',
      'Fried egg',
      'Gochujang',
      'Sesame oil'
    ],
    instructions: [
      'Prepare vegetables',
      'Cook bulgogi',
      'Fry eggs',
      'Assemble bowls'
    ],
    tags: ['Korean', 'Rice', 'Healthy', 'Colorful']
  },
  {
    id: '11',
    title: 'Moroccan Couscous',
    description: 'Fluffy couscous with roasted vegetables',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=1600',
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Moroccan',
    ingredients: [
      'Couscous',
      'Mixed vegetables',
      'Chickpeas',
      'Raisins',
      'Almonds',
      'Spices'
    ],
    instructions: [
      'Steam couscous',
      'Roast vegetables',
      'Toast nuts',
      'Combine all'
    ],
    tags: ['Moroccan', 'Vegetarian', 'Healthy', 'Quick']
  },
  {
    id: '12',
    title: 'Chinese Dim Sum',
    description: 'Assorted steamed dumplings and buns',
    image: 'https://asiasociety.org/files/uploads/526images/170329_dimsum2.jpg',
    prepTime: 60,
    cookTime: 30,
    servings: 6,
    difficulty: 'Hard',
    cuisine: 'Chinese',
    ingredients: [
      'Dumpling wrappers',
      'Ground pork',
      'Shrimp',
      'Chinese chives',
      'Bamboo shoots',
      'Seasonings'
    ],
    instructions: [
      'Make fillings',
      'Wrap dumplings',
      'Steam in batches',
      'Serve with sauces'
    ],
    tags: ['Chinese', 'Dumplings', 'Steamed', 'Brunch']
  },
  {
    id: '13',
    title: 'Moroccan Tagine',
    description: 'Slow-cooked aromatic stew with tender lamb and dried fruits',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&q=80&w=1600',
    prepTime: 30,
    cookTime: 120,
    servings: 6,
    difficulty: 'Medium',
    cuisine: 'Moroccan',
    ingredients: [
      'Lamb shoulder',
      'Dried apricots',
      'Almonds',
      'Couscous',
      'Moroccan spices',
      'Fresh herbs'
    ],
    instructions: [
      'Brown lamb pieces',
      'Add spices and aromatics',
      'Slow cook with fruits',
      'Serve over couscous'
    ],
    tags: ['Moroccan', 'Stew', 'Comfort', 'Slow-cooked']
  },
  {
    id: '14',
    title: 'Brazilian Feijoada',
    description: 'Traditional black bean stew with various pork cuts',
    image: 'https://www.allrecipes.com/thmb/c1mrdGxcN5fERCfzV4j0-XU7Nq0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-139208-Feijoada-DDMFS-4x3-74a3fbca83d947f9b6f330ef01999c89.jpg',
    prepTime: 40,
    cookTime: 180,
    servings: 8,
    difficulty: 'Hard',
    cuisine: 'Brazilian',
    ingredients: [
      'Black beans',
      'Various pork cuts',
      'Rice',
      'Orange slices',
      'Farofa',
      'Collard greens'
    ],
    instructions: [
      'Soak beans overnight',
      'Cook beans with meat',
      'Prepare side dishes',
      'Serve with traditional accompaniments'
    ],
    tags: ['Brazilian', 'Stew', 'Traditional', 'Hearty']
  },
  {
    id: '15',
    title: 'Swedish Meatballs',
    description: 'Classic comfort food with creamy gravy and lingonberry jam',
    image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?auto=format&fit=crop&q=80&w=1600',
    prepTime: 30,
    cookTime: 30,
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'Swedish',
    ingredients: [
      'Ground meat mix',
      'Cream',
      'Breadcrumbs',
      'Lingonberry jam',
      'Potatoes',
      'Spices'
    ],
    instructions: [
      'Mix and form meatballs',
      'Pan-fry until browned',
      'Make cream sauce',
      'Serve with potatoes'
    ],
    tags: ['Swedish', 'Comfort', 'Meatballs', 'Creamy']
  },
  {
    id: '16',
    title: 'Lebanese Mezze Platter',
    description: 'Assortment of small dishes including hummus and falafel',
    image: 'https://images.unsplash.com/photo-1542528180-a1208c5169a5?auto=format&fit=crop&q=80&w=1600',
    prepTime: 60,
    cookTime: 30,
    servings: 6,
    difficulty: 'Medium',
    cuisine: 'Lebanese',
    ingredients: [
      'Chickpeas',
      'Tahini',
      'Pita bread',
      'Vegetables',
      'Olive oil',
      'Fresh herbs'
    ],
    instructions: [
      'Prepare hummus',
      'Make falafel mix',
      'Prepare vegetables',
      'Arrange platter'
    ],
    tags: ['Lebanese', 'Appetizer', 'Vegetarian', 'Sharing']
  },
  {
    id: '17',
    title: 'Hawaiian Poke Bowl',
    description: 'Fresh raw fish cubes with rice and tropical toppings',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1600',
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    difficulty: 'Easy',
    cuisine: 'Hawaiian',
    ingredients: [
      'Sushi-grade tuna',
      'Sushi rice',
      'Soy sauce',
      'Seaweed',
      'Avocado',
      'Sesame seeds'
    ],
    instructions: [
      'Cook sushi rice',
      'Cube fish',
      'Prepare sauce',
      'Assemble bowls'
    ],
    tags: ['Hawaiian', 'Seafood', 'Fresh', 'Healthy']
  },
  {
    id: '18',
    title: 'Russian Beef Stroganoff',
    description: 'Tender beef strips in creamy mushroom sauce',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=1600',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'Russian',
    ingredients: [
      'Beef tenderloin',
      'Mushrooms',
      'Sour cream',
      'Egg noodles',
      'Onions',
      'Butter'
    ],
    instructions: [
      'Slice beef and mushrooms',
      'Cook noodles',
      'Make sauce',
      'Combine and serve'
    ],
    tags: ['Russian', 'Beef', 'Creamy', 'Pasta']
  },
  {
    id: '19',
    title: 'Turkish Pide',
    description: 'Boat-shaped flatbread with various toppings',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1600',
    prepTime: 40,
    cookTime: 15,
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'Turkish',
    ingredients: [
      'Bread flour',
      'Yeast',
      'Ground meat',
      'Cheese',
      'Vegetables',
      'Eggs'
    ],
    instructions: [
      'Make dough',
      'Prepare toppings',
      'Shape and fill',
      'Bake until golden'
    ],
    tags: ['Turkish', 'Bread', 'Baked', 'Street Food']
  },
  {
    id: '20',
    title: 'Ethiopian Doro Wat',
    description: 'Spicy chicken stew with berbere spice',
    image: 'https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?auto=format&fit=crop&q=80&w=1600',
    prepTime: 30,
    cookTime: 90,
    servings: 6,
    difficulty: 'Medium',
    cuisine: 'Ethiopian',
    ingredients: [
      'Chicken legs',
      'Berbere spice',
      'Onions',
      'Eggs',
      'Injera bread',
      'Spices'
    ],
    instructions: [
      'Marinate chicken',
      'Make spice base',
      'Slow cook stew',
      'Serve with injera'
    ],
    tags: ['Ethiopian', 'Spicy', 'Stew', 'Traditional']
  },
  {
    id: '21',
    title: 'German Schnitzel',
    description: 'Crispy breaded veal cutlet with potato salad',
    image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&q=80&w=1600',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'German',
    ingredients: [
      'Veal cutlets',
      'Breadcrumbs',
      'Eggs',
      'Potatoes',
      'Mustard',
      'Lemon'
    ],
    instructions: [
      'Pound meat thin',
      'Bread cutlets',
      'Fry until golden',
      'Serve with sides'
    ],
    tags: ['German', 'Fried', 'Meat', 'Classic']
  },
  {
    id: '22',
    title: 'Malaysian Laksa',
    description: 'Spicy coconut curry noodle soup',
    image: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&q=80&w=1600',
    prepTime: 30,
    cookTime: 40,
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'Malaysian',
    ingredients: [
      'Rice noodles',
      'Coconut milk',
      'Shrimp',
      'Laksa paste',
      'Bean sprouts',
      'Herbs'
    ],
    instructions: [
      'Make laksa broth',
      'Cook noodles',
      'Prepare toppings',
      'Assemble bowls'
    ],
    tags: ['Malaysian', 'Soup', 'Spicy', 'Seafood']
  },
  {
    id: '23',
    title: 'Persian Jeweled Rice',
    description: 'Saffron rice with nuts, dried fruits and crispy bottom',
    image: 'https://images.unsplash.com/photo-1576749872435-ff88a71c1ae2?auto=format&fit=crop&q=80&w=1600',
    prepTime: 30,
    cookTime: 60,
    servings: 6,
    difficulty: 'Hard',
    cuisine: 'Persian',
    ingredients: [
      'Basmati rice',
      'Saffron',
      'Dried fruits',
      'Nuts',
      'Butter',
      'Orange zest'
    ],
    instructions: [
      'Soak and par-cook rice',
      'Layer with ingredients',
      'Steam and create tahdig',
      'Garnish and serve'
    ],
    tags: ['Persian', 'Rice', 'Elegant', 'Special Occasion']
  },
  {
    id: '24',
    title: 'Argentine Empanadas',
    description: 'Baked pastries filled with seasoned meat and vegetables',
    image: 'https://vamospanish.com/wp-content/uploads/empanada-jujuy-juje%C3%B1a-argentina.jpg',
    prepTime: 45,
    cookTime: 25,
    servings: 12,
    difficulty: 'Medium',
    cuisine: 'Argentine',
    ingredients: [
      'Pastry dough',
      'Ground beef',
      'Onions',
      'Olives',
      'Eggs',
      'Spices'
    ],
    instructions: [
      'Make filling',
      'Form empanadas',
      'Brush with egg wash',
      'Bake until golden'
    ],
    tags: ['Argentine', 'Pastry', 'Baked', 'Party Food']
  }
];