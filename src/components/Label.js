function App(props) {
    return (
        <div>
          <h1
          style={{ 
            fontWeight:'bold',
            marginTop:'0 px'
          }}
          >
            <b>{props.message}</b>
          </h1>
        </div>
    );
  }
  export default App;
