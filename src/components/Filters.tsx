import { FILTERS_BUTTON } from "./const";
import { type FilterValue } from "./type-d";

interface Props {
  onfilterChange: (filter: FilterValue) => void;
  filterSelected: FilterValue;
}

export const Filters: React.FC<Props> = ({ filterSelected, onfilterChange }) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTON).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "";

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault(); 
                onfilterChange(key as FilterValue); 
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
