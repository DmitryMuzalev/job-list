//_Components:
import { Header } from './components/Header';
import { FilterPanel } from './components/FilterPanel';
import { JobList } from './components/JobList';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <FilterPanel />
        <JobList />
      </main>
    </>
  );
}

export default App;
