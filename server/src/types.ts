export interface Log extends NewLog {
    id: number,
    timestamp: number
}

export interface NewLog {
    text: string
}

export interface FilterParams {
    text?: string,
    startTime?: number,
    endTime?: number,
    descending?: boolean
}