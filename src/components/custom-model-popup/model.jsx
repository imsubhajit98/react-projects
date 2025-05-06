export default function Model({id, header, body, footer,onClose}) {
  return <div id={id || 'Model'} className='model'>
    <div className="model-content">
        <div className="header">
            <span onClick={onClose} className="close-model-icon"> &times;</span>
            <h3>{header ? header : 'Header' }</h3>
        </div>
        <div className="body">
            {
                body ? body : <div>
                    <p>This is Model body</p>
                </div>
            }
        </div>
        <div className="footer">
            {
                footer ? footer : <h3>This is footer</h3>
            }
        </div>
    </div>
  </div>;
}
