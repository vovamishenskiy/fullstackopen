const PositiveNotification = ({ message }) => {
    if (message === null) return null

    return (
        <div className="positive-message">
            {message}
        </div>
    )
}

export default PositiveNotification