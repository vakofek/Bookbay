
export function LongText({ text, isLongTextShown ,showDescription}) {
    var isLongTextShown=isLongTextShown;
    return (
        <p className="book-description"><span>Book Description: </span> {getDescription(text, isLongTextShown)} <span className="text-show"
         onClick={showDescription}>{(isLongTextShown)? 'show less' : '...show more'}</span></p>
    )
}

function getDescription(text, isLongTextShown) {
    return (isLongTextShown) ? text : text.substring(0, 100);
}