export type PostType = {
    id: number;
    author: string;
    content: string;
    publishedOn: string;
    likes: number;
    dislikes: number;
    views: number;
    imageUrl? : string;
}