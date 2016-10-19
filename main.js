class RokuIp extends React.Component {
        changeIp () {
            this.props.onUserInput(this.refs.inputForIp.value);
        }
        render () {
            return (
                <div className="rokuIp">
                    <label>What is your Roku Device IP? </label>
                    <input ref="inputForIp" placeholder="192.168.12.246" type="text" value="" onChange={this.changeIp} />
                </div>
            );
        }
}

class RemoteControl extends React.Component {
    constructor() {
        super();
        this.state = {
            ip: "192.168.12.246"
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleButtonPress = this.handleButtonPress.bind(this);
    }
    handleUserInput (ip) {
        this.setState({
            ip: ip
        });
    }
    handleButtonPress (e) {
        e.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://"+this.state.ip+":8060/keypress/"+e.target.id, true);
        xhttp.send();
    }
    render () {
        return (
            <div className="remoteControl">
                <h1>Roku remote control by enrique</h1>
                <RokuIp onUserInput={this.handleUserInput} />
                <button onClick={this.handleButtonPress} id="up">Up</button>
                <br />
                <button onClick={this.handleButtonPress} id="left">Left</button>
                <button onClick={this.handleButtonPress} id="right">Right</button>
                <br />
                <button onClick={this.handleButtonPress} id="down">Down</button>
                <br />
                <button onClick={this.handleButtonPress} id="select">Ok</button>
                <button onClick={this.handleButtonPress} id="back">Back</button>
                <button onClick={this.handleButtonPress} id="info">Info</button>
            </div>
        );
    }
}

ReactDOM.render(
    <RemoteControl />,
	document.getElementById('content')
);
