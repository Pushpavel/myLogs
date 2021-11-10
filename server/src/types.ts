export interface Log extends NewLog {
    id: string,
    timestamp: number
}

export interface NewLog {
    text: string
}

export interface FilterParams {
    text?: string,
    startTime?: number,
    endTime?: number,
}