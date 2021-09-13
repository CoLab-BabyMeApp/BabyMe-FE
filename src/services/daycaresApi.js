// export const postDaycare = async (daycare) => {
//   const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/daycares`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'applications/json'
//     },
//     body: JSON.stringify(daycare)
//   })
//   const json = await res.json();
//   if (!res.ok) throw json;

//   return json;
// };

// export const getAllDaycares = async () => {
//   const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/daycares`);
//   const json = await res.json();
//   if (!res.ok) throw json;

//   return json;
// }

export const getAllDaycares = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/daycares`)
    .then(res => res.json())
    .then(json => json.results.map(daycare => ({
      id: daycare.id,
      name: daycare.name,
      street_address: daycare.street_address,
      city: daycare.city,
      state: daycare.state,
      zip_code: daycare.zip_code,
      image: daycare.image,
      phone_number: daycare.phone_number,
      day: daycare.day,
      evening: daycare.evening,
      infant: daycare.infant,
      toddler: daycare.toddler,
      child: daycare.child,
      older_child: daycare.older_child,
      snacks: daycare.snacks,
      covid_plan: daycare.covid_plan,
      price: daycare.price,
      coordinates: daycare.coordinates
    })));
};
