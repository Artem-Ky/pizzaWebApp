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
    navigationLinks: IAnchorLinks[],
    status: LoadStatus,
    navBarStatus: NavBarStatus
}

export interface IUser {
    phone: string,
    password: string,
    token: string,
    status: LoadStatus
}

export interface IBannerTypes {
    status: LoadStatus,
    bannerTypes: IBannerType[]
}
export interface IBannerType {
    id: number,
    type: string
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

export interface IProductState {
    items: IMenuFetchData[];
    status: LoadStatus; 
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
  