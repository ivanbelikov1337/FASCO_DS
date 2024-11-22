export interface IDataShopCard {
    img: string
    id?: number
    title: string
    price: number
    ballColor: string[]
}

export interface IDataOrder {
    img: string
    id?: number
    title: string
    price: number
    selectedColor: string
    quantity: number
    selectedSize: string

}