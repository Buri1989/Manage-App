

const Button = (props) => {
    return (
        <>
            <input type="button" value={props.name} style={{
                backgroundColor: 'yellow', borderColor: 'blue',
                height: props.height, width: props.width
            }} onClick={props.onClick} />
        </>
    )
}

export default Button
