export interface Log extends NewLog {
    id: string,
    timestamp: number
}

export interface NewLog {
    text: string
}