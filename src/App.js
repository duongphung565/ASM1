
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import StaffList from './components/StaffListComponent.js'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { STAFFS } from './shared/staffs'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        // this.setColumn = this.setColumn.bind(this);
        this.state = {
            staffList: STAFFS,
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log("click menu");
    }

    render() {
        const titleBrand = "Ứng dụng quản lý nhân sự v1.0";
        return (
            <div className="App">
                <Navbar className='bg-primary text-white' light expand="md">

                    <NavbarBrand className='text-white' href="/">{titleBrand}</NavbarBrand>
                </Navbar >

                <StaffList staffList={this.state.staffList} />
            </div >
        );
    }
}

export default App;
