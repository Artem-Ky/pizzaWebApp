import { useEffect } from "react";
import { useTypeDispatch } from "../customHooks/useTypeDispatch";
import { getAnchorNavLinks } from "../stores/slices/navigateSlice";




const getListAnchorNavLinks = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(getAnchorNavLinks());
  }, []);
}

export default getListAnchorNavLinks