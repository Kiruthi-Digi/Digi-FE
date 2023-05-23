function App() {
    const styles = {
        mainanchor: {
            color: 'black',
            textAlign: 'center',
            padding: '12px',
            textDecoration: 'none',
            fontSize: '30px',
            fontWeight:'bold',
            lineHeight: '25px',
            borderRadius: '4px'
        },
        activeanchor: {
            color: 'black',
            textAlign: 'center',
            padding: '12px',
            textDecoration: 'none',
            fontSize: '18px',
            lineHeight: '25px',
            borderRadius: '4px',
            backgroundColor:'dodgerblue'
        },

        subanchor: {
            color: 'black',
            textAlign: 'center',
            padding: '12px',
            textDecoration: 'none',
            fontSize: '18px',
            lineHeight: '25px',
            borderRadius: '4px'
        }
    }

    return (
        <div class="header"
            style={{
                overflow: 'hidden',
                backgroundColor: '#f1f1f1',
                padding: '20px 10px'
            }}
        >
            <a href="#default" style={styles.mainanchor}>DigiLab Project</a>

            <div class="header-right"
                style={{
                    float: 'right',
                }}
            >
                <a class="active" href="#home" style={styles.activeanchor}>Home</a>
                <a href="#contact" style={{...styles.subanchor, ...styles.subhover}}>Contact</a>
                <a href="#about" style={{...styles.subanchor, ...styles.hover}}>About</a>
            </div>
        </div>
    );
} export default App;