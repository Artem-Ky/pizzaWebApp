import { useSelector } from "react-redux";
import { RootState } from '../stores/store'






const navMapMenuLink = () => {
    const {navigationLinks }= useSelector((state: RootState) => state.navigation)

    const menuLinks = navigationLinks.map(item => ({
      url: `#category-${item.id}`,
      title: item.type,
      linkClass: "item__link-footer"
    }));
    const middleIndex = Math.ceil(menuLinks.length / 2);
    
        return (
            {
                menuLinkFirstColumn: menuLinks.slice(0, middleIndex),
                menuLinkSecondColumn: menuLinks.slice(middleIndex)
            }
        )
    }


export default navMapMenuLink