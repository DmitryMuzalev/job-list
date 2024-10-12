//_Hooks:
import { useAppContext } from '../hook/useAppContext';

//_Components:
import { Box } from './UI/Box';
import { List } from './UI/List';
import { Tag } from './UI/Tag';

function FilterPanel() {
  const { filters, clearFilters, removeFilter } = useAppContext();
  return (
    <div className="filter-panel-wrap">
      <Box classes={['filter-panel']}>
        {!!filters.length && (
          <div className="filter-panel__body">
            <List>
              {filters.map((item, index) => (
                <Tag
                  key={index}
                  type="with-remove"
                  onClear={() => removeFilter(item)}
                >
                  {item}
                </Tag>
              ))}
            </List>
            <button onClick={clearFilters}>Clear</button>
          </div>
        )}
      </Box>
    </div>
  );
}
export { FilterPanel };
