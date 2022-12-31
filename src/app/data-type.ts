export interface signUp {
    name: string,
    email: string,
    password: string
}
export interface login {
    email: string,
    password: string
}

export interface product {
    name: string,
    price: number,
    category: string,
    color: string,
    image: string,
    description: string,
    id: number,
    quantity: undefined | number,
    productId: undefined | number
}

export interface cart {
    name: string,
    price: number,
    category: string,
    color: string,
    image: string,
    description: string,
    id: number | undefined,
    quantity: undefined | number,
    productId: number,
    userId: number
}