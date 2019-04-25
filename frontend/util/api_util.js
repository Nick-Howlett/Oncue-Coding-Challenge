
export const fetchTrucks = () => (
  $.ajax({
    method: "GET",
    url: "api/trucks"
  })
);

export const fetchJobs = () => (
  $.ajax({
    method: "GET",
    url: "api/jobs"
  })
);

export const createTruck = truck => (
  $.ajax({
    method: "POST",
    url: "api/trucks",
    data: {truck}
  })
);

export const createJob = job => (
  $.ajax({
    method: "POST",
    url: "api/jobs",
    data: {job}
  })
);