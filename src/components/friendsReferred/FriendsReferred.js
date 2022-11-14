import React from 'react';
import { Link } from 'react-router-dom';
import FriendsEnrolled from '../friendsEnrolled/FriendsEnrolled';
import "./friendsReferred.css";

function FriendsReferred() {
  return (
    <div className="friendsReferred">
        <div className="frame">
            <p className="frameText">UI/UX 	&#62; <Link className='link' to="/">Refer & Earn </Link>	&#62; Friends Referred </p>
            <Link className="link" to="/" >
                <p className="goback">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM16 7L1 7V9L16 9V7Z" fill="#800080"/>
                    </svg>
                    Go Back
                </p>
            </Link>
        </div>
        <div className="codeAndWallet">
            <div className="refralCode">
                <h3 className="refralCodeTitle">Your Refrral Code</h3>
                <div className="codeContainer">
                    <p>EDCH54</p>
                </div>
            </div>
            <div className="walletBalance">
                <div className="walletBalanceContainer">
                    <p className="walletTitle">Wallet Balance</p>
                    <p className="balance">$ 2,500</p>
                </div>
            </div>
        </div>
        <FriendsEnrolled />
        <p className="termsAndConditions">Terms & Conditions</p>
    </div>
  )
}

export default FriendsReferred
