//_Hooks:
import { useAppContext } from '../hook/useAppContext';

//Components:
import { JobItem } from './JobItem';

function JobList() {
  const { jobList } = useAppContext();
  return (
    <ul className="job-list">
      {jobList.map((item) => (
        <JobItem key={item.id} data={item} />
      ))}
    </ul>
  );
}
export { JobList };
