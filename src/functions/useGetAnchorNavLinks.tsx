import { useEffect } from "react";
import { getAnchorNavLinks } from "../stores/slices/navigateSlice";
import { useAppDispatch } from "../customHooks/redux/redux";




const getListAnchorNavLinks = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAnchorNavLinks());
  }, []);
}

export default getListAnchorNavLinks