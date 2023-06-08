function App({ labelTxt, placeholdertxt, inputType,value,id,onChange}) {
  return (
    <div>
      <label>
        <p
          style={{
            margin: '5px'
          }}
        >{labelTxt}</p>

        <input
          type={inputType}
          placeholder={placeholdertxt}
          value={value}
          id={id}
          onChange={onChange}
          style={{
            backgroundColor: '#eee',
            border: 'none',
            borderRadius: '5px',
            padding: '0px 10px',
            margin: '0',
            width: '200px',
            height: '40px'
          }}
        />
      </label>
    </div>

  );
}export default App;