import Menu from "../../components/Menu";
function DashboardChildContainer() {
    const styles = {
        body: {
            fontFamily: 'Arial, Helvetica, sans-serif',
            margin: '0'
        },
        leftside: {
            flex: '30',
           backgroundColor: '#D5C6B6',
            padding: '20px',
            borderRadius: '5px',
            margin:'10px',
        },
        row: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        imagebox: {
            backgroundColor: '#aaa',
            width: '87%',
            padding: '20px'
        },
        imageleftone: {
            height: '200px'
        },
        imagelefttwo: {
            height: '60px'
        },
        imagemainone: {
            height: '200px'
        },
        main: {
            flex: '70',
            backgroundColor: '#D5C6B6',
            margin:'10px',
            borderRadius: '5px',
            padding: '20px'
        },
        footer: {
            backgroundColor: '#D5C6B6',
            margin:'10px',
            borderRadius: '5px',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: '#ddd',
            clear: 'hidden',
            height: '60px'
        }
    }
    return (
        <div
        style={{background: 'white'}}
        >
            <Menu />
            <br />
            <div style={styles.row}>
                <div style={styles.leftside}>
                    <h2>About Me</h2>
                    <h5>Photo of me:</h5>
                    <div style={{ ...styles.imagebox, ...styles.imageleftone }}>Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    <h3>More Text</h3>
                    <p>Lorem ipsum dolor sit ame.</p>
                    <div style={{ ...styles.imagebox, ...styles.imagelefttwo }}>Image</div>
                    <br />
                    <div style={{ ...styles.imagebox, ...styles.imagelefttwo }}>Image</div>
                    <br />
                    <div style={{ ...styles.imagebox, ...styles.imagelefttwo }}>Image</div>
                </div>

                <div style={styles.main}>

                    <h2>Main Dashboard</h2>
                    <h5>Toady project, May 23, 2023</h5>
                    <div style={{ ...styles.imagebox, ...styles.imagemainone }}>Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <br />
                    <h2>Another project</h2>
                    <div style={{ ...styles.imagebox, ...styles.imagemainone }}>Image</div>
                    <h5>Title description, Sep 2, 2024</h5>
                    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

              
            </div>
            <div style={styles.footer}>
                <h2>Footer</h2>
                </div>


        </div>
    );
}
export default DashboardChildContainer;