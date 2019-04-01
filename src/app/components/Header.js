import React from "react"

class Header extends React.Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">React Users</a>
                    <button onClick={this.props.onSwitchClick} className="btn right">Switcher</button>;
                </div>
            </nav>
        )
    }
}

export default Header