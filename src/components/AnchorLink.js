function App(props) {
  return (
    <div>
      <p>
        <a href="https://www.test.com/"
          style={{
            color: 'black',
            fontSize: '14px',
            textDecoration: 'none',
            margin: '15px 0'
          }}
        >
          <b>{props.message}</b>
        </a>
      </p>
    </div>
  );
}
export default App;
