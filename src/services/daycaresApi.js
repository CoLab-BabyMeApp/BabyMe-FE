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
