import { getColor } from "helpers/get-color"
import { Button, List } from "./FeedbackOptions.styled"
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <List>
        {options.map(option => (
            <li key={option.toLowerCase()}>
                <Button name={option.toLowerCase()} color={getColor(option)} onClick={onLeaveFeedback}>{option}</Button></li>
        ))}
        </List>
    )
}


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}