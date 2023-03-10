export enum FetchedItemType {
    Story = 'story',
    Comment = 'comment'
}

export type News = {
    by: string,
    descendants: number,
    id: number,
    kids: number[],
    score: number,
    time: number,
    title: string,
    type: FetchedItemType,
    url: string
}

export type Comment = {
    by: string,
    id: number,
    kids: number[],
    parent: number,
    text: string,
    time: number,
    type: FetchedItemType,
    resolveKids: Comment[],
}