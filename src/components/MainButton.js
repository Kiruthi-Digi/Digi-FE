function App(props) {

    return (
    <div>
        <button
        style={{ 
          borderRadius: '20px',
          border:'1px solid #0B502E',
          backgroundColor:'#0B502E',
          color:'#FFFFFF',
          fontSize:'12px',
          fontWeight:'bold',
          padding:'12px 45px',
          letterSpacing:'1px',
          textTransform:'uppercase',
          transition:'transform 80ms ease-in'
      
        }}
        //onClick={this.handleClick}
        >
          <b>{props.message}</b>
        </button> 
    </div>
  );
}
export default App;
