
export type CartItemType = {
    id: number,
    title : string,
    price : number
}

export interface CardProps {
    card : {
        id : number,
        title : string,
        price : number
    }
}


export interface Carts {
    products : []
}

