import { useEffect } from "react";
import { useTypeDispatch } from "../customHooks/useTypeDispatch";
import { getAnchorNavLinks } from "../stores/slices/globalSlice";




const getListAnchorNavLinks = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(getAnchorNavLinks());
  }, []);
}

export default getListAnchorNavLinks