import '../App.css'
export const PostItemComp = (props) => {


    return (
        <div style={{ borderColor: "purple", borderStyle: "solid", width: "510px", margin: "10px", paddingLeft: "10px" }}>
            <span className="blue-Under">Title: </span> <span style={{ marginLeft: "15px" }}>{props.title}</span>
            <br />
            <span className="blue-Under">Body: </span> <span style={{ marginLeft: "15px", marginRight: "50px" }}>{props.body}</span>
        </div>
    )
}