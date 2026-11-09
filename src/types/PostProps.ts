export type PostProps = {
    id:number,
    title:string,
    body:string,
}
export type NewPost = Omit<PostProps, "id">;
export type PostsListProps = PostProps[];