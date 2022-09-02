import './EmptyComponent.css'

const EmptyComponent = (props) => {
    return (
        <div className="empty-component">
            <span>{props.text}</span>
        </div>
    )
}

export default EmptyComponent;