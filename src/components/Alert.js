const Alert = (props) => {
    return (
        <div style={{ minHeight: '58px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                {props.alert.msg}
            </div>}
        </div>);
}

export default Alert;