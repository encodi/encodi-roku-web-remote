class RemoteControl extends React.Component {
    handleButtonPress (e) {
        e.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://192.168.12.246:8060/keypress/"+e.target.id, true);
        xhttp.send();
    }
    render () {
        return (

            <div className="remoteControl">
                <h1>Roku remote control by enrique</h1>
                <button onClick={this.handleButtonPress} id="up">Up</button>
                <br />
                <button onClick={this.handleButtonPress} id="left">Left</button>
                <button onClick={this.handleButtonPress} id="right">Right</button>
                <br />
                <button onClick={this.handleButtonPress} id="down">Down</button>
                <br />
                <button onClick={this.handleButtonPress} id="select">Ok</button>
                <button onClick={this.handleButtonPress} id="back">Back</button>
            </div>
        );
    }
}

ReactDOM.render(
	<RemoteControl />,
	document.getElementById('content')
);
