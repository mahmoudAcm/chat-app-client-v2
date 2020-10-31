// es-5 style for simlicity and no use of babel

/**
 * @description cheeks if navigator is supported and gets lat and long
 * @returns a promise with coords
 */
const getCoords = () => {
  return new Promise((resolve, reject) => {
    if (!window.navigator) {
      reject('navigator is not supported.');
      return;
    }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
      },
      (error) => {
        reject(error);
      },
    );
  });
};

/**
 * @description getting location of a user
 * @function getCoords
 * @returns a promise with user location details
 */
const getLocation = async () => {
  //use api here to get location using coords and api key if needed.
  const apiKey = 'bbfeb88c52be49c5b4eeeda4c3ecf4eb';
  try {
    const coords: any = await getCoords();
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude}+${coords.longitude}&key=${apiKey}`;
    const data = await fetch(url).then((res) => {
      return res.json();
    });
    return data.results[0].components;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getLocation;
