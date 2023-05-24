function App({labelTxt,placeholdertxt,inputType}) {
    return (
    <div>
        <label>
            <p
             style={{ 
              margin:'5px'
            }}
            >{labelTxt}</p>
            <input type={inputType}
            placeholder={placeholdertxt}
            style={{ 
                backgroundColor:'#eee',
                border:'none',
                borderRadius:'5px',
                margin:'0',
                width:'200px',
                height:'40px'
              }} 
            />
        </label>
    </div>

  );
}
export default App;
