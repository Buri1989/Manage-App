export const OtherData = (props) => {

    return (
        <>
            <input type="button" value="Other Data" /* onMouseOver={props.mOver} */
                onClick={props.mClick} style={{
                    width: "100px",
                    height: "40px", marginRight: "80px", backgroundColor: "gray", fontSize: "14px", textAlign: "center", padding: "5px"
                }} />
        </>
    )
}