import React from "react";

function Button(props) {
    return (
        <ButtonGroup>
                <Button onClick={props.thumbUp}
                className={ThumbUp} />
                <Button onClick={props.thumbDown}
                className={ThumbDown} />
        </ButtonGroup>
    );
}

export default Button;