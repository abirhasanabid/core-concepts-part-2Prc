export default function Post({ post }) {
    const {userId,id,title,body} = post;

    return (
        <div className="card">
            <h2>Title : {title}</h2>
            <h3><small> UserId : {userId}</small></h3>
            <h3><small> Id : {id}</small></h3>
            <p>Description : {body}</p>
        </div>
    )
}