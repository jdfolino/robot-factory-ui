export const TAB_CHANGED = 'TAB_CHANGED';

const SERVICE_URL = 'http://localhost:3001';

export const fetchRobots = (dispatch, robotList) => {
  const url = `${SERVICE_URL}/robots.json?stage=${robotList}`;
  return fetch(url)
    .then(response => response.json())
    .then((json) => {
      dispatch({ type: `ROBOTS_FETCHED_${robotList.toUpperCase()}`, robots: json });
    });
};

export const fetchAllRobots = (dispatch) => {
  [
    'qa', 'recycled', 'sentient_on_fire',
    'passed_qa', 'factory_seconds', 'ready_to_ship', 'shipped',
  ].forEach((list) => {
    fetchRobots(dispatch, list);
  });
};

export const extinguishRobot = (dispatch, id) => {
  const url = `${SERVICE_URL}/robots/${id}/extinguish.json`;
  return fetch(url, { method: 'POST' })
    .then(() => {
      fetchRobots(dispatch, 'sentient_on_fire');
      fetchRobots(dispatch, 'qa');
    });
};

export const approveRobot = (dispatch, id) => {
  const url = `${SERVICE_URL}/robots/${id}/approval.json`;
  return fetch(url, { method: 'POST' })
    .then(() => {
      fetchRobots(dispatch, 'qa');
      fetchRobots(dispatch, 'passed_qa');
      fetchRobots(dispatch, 'factory_seconds');
    });
};

export const addRobotToShipping = (dispatch, id) => {
    const url = `${SERVICE_URL}/robots/${id}`;
    return fetch(url, {
        method: 'PUT',
        body: `stage=ready_to_ship`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        } })
        .then(() => {
            fetchRobots(dispatch, 'ready_to_ship');
            fetchRobots(dispatch, 'passed_qa');
        });
};

export const removeRobotFromShipping = (dispatch, id) => {
    const url = `${SERVICE_URL}/robots/${id}`;
    return fetch(url, {
        method: 'PUT',
        body: `stage=passed_qa`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        } })
        .then(() => {
            fetchRobots(dispatch, 'ready_to_ship');
            fetchRobots(dispatch, 'passed_qa');
        });
};

export const shipIt = (dispatch, ids) => {
    console.log(ids)
    const url = `${SERVICE_URL}/shipments/create`;
    return fetch(url, {
        method: 'PUT',
        body: `ids=${ids}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        } })
        .then(() => {
            fetchRobots(dispatch, 'ready_to_ship');
            fetchRobots(dispatch, 'shipped');
        });
};


export const recycleRobot = (dispatch, id) => {
  const url = `${SERVICE_URL}/robots/recycle.json`;
  return fetch(url, {
    method: 'POST',
    body: `ids=${id}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(() => {
      fetchRobots(dispatch, 'recycled');
      fetchRobots(dispatch, 'qa');
    });
};
