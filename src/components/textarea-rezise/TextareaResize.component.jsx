export default function TextareaRezise(props) {

 /**
   * @EventHandler
   * @name textAreaReziser
   * @description Change the size of the textarea.
   * @param {EventListenerObject} e 
   */
  function textAreaReziser(e) {
    if (e.target.value.length === 0) {
      e.target.style.height = "inherit";
    } else {
      e.target.style.height = "inherit";
      const newHeight = e.target.scrollHeight + 16;
      e.target.style.height = `${newHeight}px`;
    }
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  }

  return (
    <textarea
        name={props.name}
        rows="1"
        onKeyDown={textAreaReziser}
        placeholder={props.placeHolder}
        className={props?.className}
        defaultValue={props?.textRezise}
    />
           
  );
}
