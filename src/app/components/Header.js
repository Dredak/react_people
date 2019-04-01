import React from "react"

class Header extends React.Component {

    render() {
        const {useListLayout, onSwitchClick} = this.props
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">React Users</a>
                    {useListLayout ? <i onClick={onSwitchClick} className="fas fa-list right"></i>:
                    <i onClick={onSwitchClick} class="fas fa-th-large right"></i>}
                </div>
            </nav>
        )
    }
}

export default Header

