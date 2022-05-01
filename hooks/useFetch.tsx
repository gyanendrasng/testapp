import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const useFetch = (
  url: string,
  errorType: string,
  loadingTypeStart: string,
  loadingTypeStop: string,
  option?: object
) => {
  const [data, setData] = useState(null);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      // Loading start
      dispatch({
        type: loadingTypeStart,
      });
      try {
        const res = await fetch(url, option);
        const data = await res.json();

        // Loading Stopped
        dispatch({
          type: loadingTypeStop,
        });
        console.log('d', data);
        setData(data);
      } catch (err) {
        // Loading Stopped
        dispatch({
          type: loadingTypeStop,
        });
        dispatch({
          type: errorType,
          payload: 'Internal server error',
        });
        console.log(err);
        return false;
      }
    })();
  }, []);

  return data;
};

export default useFetch;
