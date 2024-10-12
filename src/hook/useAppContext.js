//_Hooks:
import { useContext } from 'react';

//_HOCs:
import { ContextApp } from '../hoc/ContextApp';

export const useAppContext = () => useContext(ContextApp);
