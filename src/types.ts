export interface cartItem{
    id: number;
    name: string;
    cost: number;
    weight: number;
    about: string;
    descr: string;
    photo: string;
    productTypeId: number;
    bannerTypeId: number;
    sizeProductId: number;
    isAvailable: boolean;
  }

export interface MenuFetchData {
    id: number;
    type: string;
    productListDTOs: Array<cartItem>
}

export enum LoadStatus {
    default = "default",
    isLoading = "isLoading",
    success = "success",
    reject = "reject"
}

export enum NavBarStatus {
    isClose = "isClose",
    isMenuOpen = "isMenuOpen",
    isEventOpen = "isEventOpen",
    isMoreOpen = "isMoreOpen"
}

export interface ProductState {
    items: MenuFetchData[];
    status: LoadStatus; 
    navBarStatus: NavBarStatus
}

export interface CartItemProps {
    img: string,
    title: string,
    descr: string,
    cost: number,
}
export interface ProductCategoryBlockProps {
    categoryName: string,
    cartList: Array<cartItem>,
    id: number
}

export interface navDivProps {
    title: React.ReactNode;
    className: string;
    popUpList: React.ReactNode;
    status: NavBarStatus;
}
export interface HeaderLinkProps {
    url:string;
    title:string;
    linkClass:string;
}
export interface FooterBlogProps {
    title:string,
    sizeClass: string,
    firstLinks: HeaderLinkProps[],
    secondLinks: HeaderLinkProps[]
  }
  