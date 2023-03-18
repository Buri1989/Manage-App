import { PostItemComp } from "./PostItemComp"

export const PostListComp = (props) => {

    return (
        <div style={{ borderColor: "black", borderStyle: "solid" }}>
            {props.postList.map(item => <PostItemComp key={item.id} id={item.id} title={item.title} body={item.body} />)}

        </div>
    )
}