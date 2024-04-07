export interface IProduct{
    id: number,
    name: string,
    cost: number,
    weight: number,
    about: string,
    descr: string,
    photo: string,
    productTypeId: number,
    bannerTypeId: number,
    sizeProductId: number,
    isAvailable: boolean
  }

export interface IMenuFetchData {
    id: number,
    type: string,
    productListDTOs: Array<IProduct>
}
export interface IAnchorLinks {
    id: number,
    type: string
}

export interface ICartState {
    amount: number,
    totalPrice: number
}
export interface INavigationSlice {
    navBarStatus: NavBarStatus
}

export interface IUser {
    phone: string,
    token: string,
}

export interface ILogin {
    phone: string,
    password: string,
    remember: boolean
}


export interface IBannerType {
    id: number,
    type: string
}

export enum NavBarStatus {
    isClose = "isClose",
    isMenuOpen = "isMenuOpen",
    isEventOpen = "isEventOpen",
    isMoreOpen = "isMoreOpen"
}

export interface IProductCart {
    img: string,
    title: string,
    descr: string,
    cost: number
}
export interface IProductCategoryBlock {
    categoryName: string,
    cartList: Array<IProduct>,
    id: number
}

export interface INavDiv {
    title: React.ReactNode,
    className: string,
    popUpList: React.ReactNode,
    status: NavBarStatus
}
export interface IHeaderLink {
    url:string,
    title:string,
    linkClass:string
}
export interface IHeaderLinkWithId {
    id:number,
    url:string,
    title:string,
    linkClass:string
}
export interface IFooterBlog {
    title:string,
    sizeClass: string,
    firstLinks: IHeaderLinkWithId[],
    secondLinks: IHeaderLinkWithId[]
  }
  