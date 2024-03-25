import { useDispatch } from "react-redux";
import { NavBarStatus, navDivProps } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from '../../stores/store'
import { setIsNavPopUpMenuLinksOpen } from "../../stores/slices/productSlice";


const NavigationItem: React.FC<navDivProps> = ({title, className, popUpList, status}) => {
  const dispatch = useDispatch();
  const {navBarStatus} = useSelector((state: RootState) => state.product)

  const setStatus = () => {
    dispatch(setIsNavPopUpMenuLinksOpen(status))
  }
  const toggleStatus = () => {
    navBarStatus === NavBarStatus.isClose ? setStatus() : closeStatus()
  }

  const closeStatus = () => {
    dispatch(setIsNavPopUpMenuLinksOpen(NavBarStatus.isClose))
  }


  return (
    <li
      onClick={toggleStatus}
      onMouseEnter={setStatus}
      onMouseLeave={closeStatus}
      className={`nav__item ${className} ${
        status === navBarStatus
          ? "nav__dropList-active"
          : "nav__dropList-inactive"
      }`}
    >
      {title}
      {status === navBarStatus && popUpList}
    </li>
  );
}

export default NavigationItem