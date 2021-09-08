// import request from 'superagent';

// const URL = process.env.REACT_APP_API_URL;

// export function getDaycares() {
//   try {
//     return request.get(`${URL}/api/v1/daycares`);
//   } catch (e) {
//     return { error: e.message }
//   }
// }

// export function insertDaycare(daycare) {
//   try {
//     return request.post(`${URL}/api/v1/daycares`, daycare);
//   } catch (e) {
//     return { error: e.message }
//   }
// }

export const postDaycare = async (daycare) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/daycares`, {
    method: 'POST',
    headers: {
      'Content-Type': 'applications/json'
    },
    body: JSON.stringify(daycare)
  })
  const json = await res.json();
  if (!res.ok) throw json;

  return json;
};

export const getAllDaycares = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/daycares`);
  const json = await res.json();
  if (!res.ok) throw json;

  return json;
}

