
// Textarea elements that change height when inserting data.


export default function TextareaRezise({placeHolder, text, onChange,  name, className, innerRef, readOnly}) {
  /**
   * @EventHandler
   * @name textAreaReziser
   * @description Change the size of the textarea.
   * @param {EventListenerObject} e
   */
  function textAreaReziser(e) {

      if(e.target.readOnly) {
        return;
      }
      e.target.style.height = "inherit";
      const newHeight = e.target.scrollHeight + 16;
      e.target.style.height = `${newHeight}px`;
      if (e.target.value.length === 0) {
        e.target.style.height = "inherit";
      }
}
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`

  return (
    <textarea
      name={name}
      ref={innerRef}
      rows="1"
      onChange = {onChange}
      onKeyDown={textAreaReziser}
      placeholder={placeHolder}
      className={className}
      value={text||""}
      readOnly={readOnly}
    />
  );
}
