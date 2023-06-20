
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <ul>
        {options.map(option => (
            <li key={option.toLowerCase()}>
                <button name={option.toLowerCase()} onClick={onLeaveFeedback}>{option}</button></li>
        ))}
        </ul>
    )
}

