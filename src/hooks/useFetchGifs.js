import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    gifList: [],
    loading: true,
  });

  useEffect( () => {
    getGifs(category).then(imgs => {
      
        setState({
          gifList: imgs,
          loading: false,
        });
      
    });
  }, [category]);

  return state; //gifslst[], loading: true
};
