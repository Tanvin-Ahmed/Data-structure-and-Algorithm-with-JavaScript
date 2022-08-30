const maxActivitiesSelection = (activities = []) => {
  const sortActivitiesBasedEndTime = activities.sort(
    (a, b) => a.endTime - b.endTime
  );

  let count = [];
  count.push(sortActivitiesBasedEndTime[0]);
  let j = 0;

  for (let i = 1; i < sortActivitiesBasedEndTime.length; i++) {
    if (
      sortActivitiesBasedEndTime[i].startTime >=
      sortActivitiesBasedEndTime[j].endTime
    ) {
      count.push(sortActivitiesBasedEndTime[i]);
      j = i;
    }
  }
  return count;
};

const arr = [
  {
    startTime: 5,
    endTime: 9,
  },
  {
    startTime: 1,
    endTime: 2,
  },
  {
    startTime: 3,
    endTime: 4,
  },
  {
    startTime: 0,
    endTime: 6,
  },
  {
    startTime: 5,
    endTime: 7,
  },
  {
    startTime: 8,
    endTime: 9,
  },
];

const totalActivities = maxActivitiesSelection(arr);

console.log(totalActivities);
