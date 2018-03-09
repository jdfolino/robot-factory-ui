const defaultState = {
  activeTab: 'Recycled',
  fetching: false,
  robotsListQa: [],
  robotsListPassedQa: [],
  robotsListSentientOnFire: [],
  robotsListRecycled: [],
  robotsListFactorySeconds: [],
  robotsListReadyToShip: [],
  robotsListShipped: [],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TAB_CHANGED':
      return { ...state, activeTab: action.activeTab };
    case 'ROBOTS_FETCHED_QA':
      return { ...state, robotsListQa: action.robots };
    case 'ROBOTS_FETCHED_RECYCLED':
      return { ...state, robotsListRecycled: action.robots };
    case 'ROBOTS_FETCHED_SENTIENT_ON_FIRE':
      return { ...state, robotsListSentientOnFire: action.robots };
    case 'ROBOTS_FETCHED_FACTORY_SECONDS':
      return { ...state, robotsListFactorySeconds: action.robots };
    case 'ROBOTS_FETCHED_READY_TO_SHIP':
      return { ...state, robotsListReadyToShip: action.robots };
    case 'ROBOTS_FETCHED_PASSED_QA':
      return { ...state, robotsListPassedQa: action.robots };
    case 'ROBOTS_FETCHED_SHIPPED':
      return { ...state, robotsListShipped: action.robots };
    case 'FETCHING':
      return { ...state, fetching: true };
    case 'FETCHED':
      return { ...state, fetching: false };
    default:
      return state;
  }
};
