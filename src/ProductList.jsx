import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';

// Three categories, with six distinct plants per category.
export const categories = [
  {
    "name": "Easy-care favorites",
    "plants": [
      {
        "id": "plant-0-0",
        "name": "Snake Plant",
        "price": 12,
        "description": "A relaxed green companion for your home.",
        "image": "./images/plant-0-0.svg"
      },
      {
        "id": "plant-0-1",
        "name": "ZZ Plant",
        "price": 14,
        "description": "A relaxed green companion for your home.",
        "image": "./images/plant-0-1.svg"
      },
      {
        "id": "plant-0-2",
        "name": "Pothos",
        "price": 16,
        "description": "A relaxed green companion for your home.",
        "image": "./images/plant-0-2.svg"
      },
      {
        "id": "plant-0-3",
        "name": "Spider Plant",
        "price": 18,
        "description": "A relaxed green companion for your home.",
        "image": "./images/plant-0-3.svg"
      },
      {
        "id": "plant-0-4",
        "name": "Jade Plant",
        "price": 20,
        "description": "A relaxed green companion for your home.",
        "image": "./images/plant-0-4.svg"
      },
      {
        "id": "plant-0-5",
        "name": "Cast Iron Plant",
        "price": 22,
        "description": "A relaxed green companion for your home.",
        "image": "./images/plant-0-5.svg"
      }
    ]
  },
  {
    "name": "Fragrant herbs",
    "plants": [
      {
        "id": "plant-1-0",
        "name": "Lavender",
        "price": 19,
        "description": "Fresh fragrance for a bright windowsill.",
        "image": "./images/plant-1-0.svg"
      },
      {
        "id": "plant-1-1",
        "name": "Rosemary",
        "price": 21,
        "description": "Fresh fragrance for a bright windowsill.",
        "image": "./images/plant-1-1.svg"
      },
      {
        "id": "plant-1-2",
        "name": "Mint",
        "price": 23,
        "description": "Fresh fragrance for a bright windowsill.",
        "image": "./images/plant-1-2.svg"
      },
      {
        "id": "plant-1-3",
        "name": "Basil",
        "price": 25,
        "description": "Fresh fragrance for a bright windowsill.",
        "image": "./images/plant-1-3.svg"
      },
      {
        "id": "plant-1-4",
        "name": "Lemon Balm",
        "price": 27,
        "description": "Fresh fragrance for a bright windowsill.",
        "image": "./images/plant-1-4.svg"
      },
      {
        "id": "plant-1-5",
        "name": "Thyme",
        "price": 29,
        "description": "Fresh fragrance for a bright windowsill.",
        "image": "./images/plant-1-5.svg"
      }
    ]
  },
  {
    "name": "Tropical foliage",
    "plants": [
      {
        "id": "plant-2-0",
        "name": "Monstera",
        "price": 26,
        "description": "Bold leaves that make a beautiful statement.",
        "image": "./images/plant-2-0.svg"
      },
      {
        "id": "plant-2-1",
        "name": "Fiddle Leaf Fig",
        "price": 28,
        "description": "Bold leaves that make a beautiful statement.",
        "image": "./images/plant-2-1.svg"
      },
      {
        "id": "plant-2-2",
        "name": "Rubber Plant",
        "price": 30,
        "description": "Bold leaves that make a beautiful statement.",
        "image": "./images/plant-2-2.svg"
      },
      {
        "id": "plant-2-3",
        "name": "Bird of Paradise",
        "price": 32,
        "description": "Bold leaves that make a beautiful statement.",
        "image": "./images/plant-2-3.svg"
      },
      {
        "id": "plant-2-4",
        "name": "Philodendron",
        "price": 34,
        "description": "Bold leaves that make a beautiful statement.",
        "image": "./images/plant-2-4.svg"
      },
      {
        "id": "plant-2-5",
        "name": "Calathea",
        "price": 36,
        "description": "Bold leaves that make a beautiful statement.",
        "image": "./images/plant-2-5.svg"
      }
    ]
  }
];


export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  // A removed plant becomes available to add again automatically.
  const added = new Set(items.map(item => item.id));
  return (
    <main className="catalog">
      <p className="eyebrow">Find your next favorite</p>
      <h1>Plants for every corner</h1>
      {categories.map(category => (
        <section key={category.name} aria-label={category.name}>
          <h2>{category.name}</h2>
          <div className="grid">
            {category.plants.map(plant => (
              <article key={plant.id}>
                <img src={plant.image} alt={plant.name} width="320" height="240" loading="lazy" />
                <div className="card-body">
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <div className="card-bottom">
                    <strong>${plant.price.toFixed(2)}</strong>
                    <button
                      aria-label={`${added.has(plant.id) ? 'Added' : 'Add to Cart'}: ${plant.name}`}
                      disabled={added.has(plant.id)}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {added.has(plant.id) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
