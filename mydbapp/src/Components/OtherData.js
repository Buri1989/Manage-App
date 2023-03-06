

const OtherData = (props) => {
    return (
        <>
            <input type="button" value="Other Data" /* onMouseOver={props.mOver} */ onClick={props.mouseClick}
                style={{
                    widows: "100px", height: "40px", marginRight: "88px", backgroundColor: "gray", fontSize: "14px",
                    textAlign: "center", padding: "5px"
                }} />
        </>
    )
}

export default OtherData
