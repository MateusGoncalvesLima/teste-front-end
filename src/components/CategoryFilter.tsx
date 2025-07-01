import './CategoryFilter.scss';

type Props = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};


function traduzirCategoria(category: string): string {
  switch (category) {
    case 'electronics':
      return 'Eletrônicos';
    case 'jewelery':
      return 'Joias';
    case "men's clothing":
      return 'Roupas Masculinas';
    case "women's clothing":
      return 'Roupas Femininas';
    default:
      return category;
  }
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: Props) {
  return (
    <aside className="category-filter">
      <h3>Categorias</h3>
      <ul>
        <li
          onClick={() => onSelectCategory('')}
          className={selectedCategory === '' ? 'selected' : ''}
        >
          Todos
        </li>

        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onSelectCategory(category)}
            className={selectedCategory === category ? 'selected' : ''}
          >
            {traduzirCategoria(category)}
          </li>
        ))}
      </ul>
    </aside>
  );
}
