const getMaximumActivitySelection = (activities = []) => {
  const sortedByEndTime = activities.sort((a, b) => a.end - b.end);

  let maxActivities = 0;

  for (let i = 1; i < sortedByEndTime.length; i++) {
    if (sortedByEndTime[i] >= sortedByEndTime[i - 1]) {
      maxActivities++;
    }
  }

  return maxActivities;
};

const activities = [
  {
    start: 10,
    end: 20,
  },
  {
    start: 12,
    end: 15,
  },
  {
    start: 20,
    end: 30,
  },
];

console.log(getMaximumActivitySelection(activities));
