import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
import Recipe from './Recipe'
class Cart extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {

        return (
            <header class="header">
                <section class="header-logo-links">
                    <div class="header-width">
                        <div class="logo-wrapper">
                            <div class="logo-container">
                                <div class="logo"></div>
                                <div class="image-container">
                                    <a href="/">
                                        <img src="./cs/cop/assets/images/avaya_logo_onecare_@2.png" alt="Avaya Sales &amp; Partner Portal" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="mobile-menu">
                            <i class="icon-menu"></i>
                        </div>
                        <ul class="header-links">
                            <li class="menuList" copdropdown="">
                                <a href="/">
                                    <img src="./cs/cop/assets/images/reportoutage4.png" /></a>
                            </li>
                            <li class="menuList" copDropdown>
                                <a>Current Outages
                        <span>
                                    </span>
                                </a>
                            </li>

                            <li class="menuList" copDropdown>
                                <a>Docs and FAQs
                        <span>
                                    </span>
                                </a>
                            </li>

                            <li class="menuList user-avatar requestsmenu  ml-auto">
                                <a>
                                    <span>
                                        <i class="icon-avatar iconAlignment"></i>
                                    </span>
                                    <span class="img-cursor d-inline-block pl-2 pt-1 d-sm-none mob-ico-text">My Account</span>
                                </a>
                                <ul class="user-dropdown public cop-prof">
                                    <li class="user"><a title="Avaya Contractor">Pravin Jagtap</a></li>
                                    <li class=""><a href="https://login.avaya.com/sso/common/logout.jsp?source=https://onecare.avaya.com/">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
            </header>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)