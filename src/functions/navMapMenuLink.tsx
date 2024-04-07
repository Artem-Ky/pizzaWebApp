import { navigateSlice } from "../stores/RTKQuery/navigate";
import { IAnchorLinks } from "../types";






const navMapMenuLink = () => {

    const {data: navigationLinks} = navigateSlice.useFetchMenuNavLinksQuery()

    const menuLinks = navigationLinks?.map((item: IAnchorLinks) => ({
      id: item.id,
      url: `#category-${item.id}`,
      title: item.type,
      linkClass: "item__link-footer"
    }));
    const middleIndex = Math.ceil(menuLinks?.length? menuLinks.length / 2 : 0);
    
        return (
            {
                menuLinkFirstColumn: menuLinks?.slice(0, middleIndex),
                menuLinkSecondColumn: menuLinks?.slice(middleIndex)
            }
        )
    }


export default navMapMenuLink