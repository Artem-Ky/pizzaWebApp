import { useSelector } from "react-redux";
import { RootState } from '../stores/store'






const navMapMenuLink = () => {
    const {items }= useSelector((state: RootState) => state.product)

    const menuLinks = items.map(item => ({
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