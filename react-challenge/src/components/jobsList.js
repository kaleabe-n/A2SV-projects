import { useGetJobsQuery } from "../store/features/jobsSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SingleJob from "./singleJob";

const JobsList = () => {
  const { isLoading, data: jobs, isSuccess } = useGetJobsQuery();
  const [viewList, setViewList] = useState([]);
  const filters = useSelector((state) => state.filters.value);
  const validateFilters = (job) => {
    if (filters.length === 0) {
      return true;
    }
    let res;
    let isValid;
    for (let i = 0; i < filters.length; i++) {
      isValid = false;
      if (filters[i] === job.level) {
        isValid = true;
      } else if (filters[i] === job.contract) {
        isValid = true;
      } else if (filters[i] === job.role) {
        isValid = true;
      } else {
        res = job.languages.filter((lang) => filters[i] === lang);
        if (res.length > 0) {
          isValid = true;
        }
        res = job.tools.filter((tool) => filters[i] === tool);
        if (res.length > 0) {
          isValid = true;
        }
      }
      if (!isValid) {
        return false;
      }
    }
    return true;
  };
  useEffect(() => {
    setViewList(jobs);
  }, [isLoading,jobs]);
  useEffect(() => {
    if (isLoading) {
      return;
    }
    setViewList(jobs.filter((job) => validateFilters(job)));
  }, [filters,isLoading,jobs]);

  return (
    <div className="pt-5 md:pt-20 pb-32">
      {isLoading && (
        <div className="w-full flex justify-center text-bold text-6xl h-96">
          <p>loading...</p>
        </div>
      )}
      {isSuccess && viewList && (
        <div>
          {viewList.map((job) => {
            return (
              <div className="md:mx-32" key={job.id}>
                <SingleJob job={job} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default JobsList;
