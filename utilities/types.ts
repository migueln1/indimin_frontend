export type DataAttr<T> = {
    message: string,
    data: T[],
    success: boolean
}

export type Citizen = {
    id: Number,
    name: string
}