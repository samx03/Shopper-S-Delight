import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useMoralis } from "react-moralis";
import "./Modal.css";

const Modal = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);


  const [delivery, setDelivery] = useState("");
  const { Moralis, account } = useMoralis();

  const handleOk = async () => {


    const web3 = await Moralis.enableWeb3();
    //Get the price of MATIC
    const options = {
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      chain: "eth"
    };
    const price = await Moralis.Web3API.token.getTokenPrice(options);
    const priceMatic = 0.2 / price.usdPrice;

    //Send matic to book store owner address
    const options1 = {
      type: "native",
      amount: Moralis.Units.ETH(priceMatic),
      receiver: "0x04858F17c9d9dEDA9f5aEe00B96DAaE81148AA0D"
    }
    let result = await Moralis.transfer(options1)



    //Save Transaction Details to DB
    const Transaction = Moralis.Object.extend("Transaction");
    const transaction = new Transaction();

    transaction.set("Customer", account);
    transaction.set("Delivery", delivery);
    transaction.set("Product", "Lorem Ipsum Sit");

    transaction.save()

    props.onClose();

  }

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >

      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">
            <div style={{ display: "flex" }}>
              <img src="https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="product" style={{ width: "200px" }}></img>
              <div style={{ marginLeft: "2%", width: "100%" }}>
                <h4 style={{ marginBottom: "20px" }}>Lorem Ipsum Sit</h4>
                <h3 style={{ marginBottom: "20px" }}>&#8377;599</h3>
                <p>Delivery Address</p>
                <input style={{
                  width: "80%",
                  marginTop: "10px",
                  border: "1px solid #D2D1D7",
                  borderRadius: "5px",
                  outline: "none",
                  padding: "2%"
                }} required onChange={(value) => setDelivery(value.target.value)} />
              </div>
            </div></div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
            <button className="button" onClick={handleOk}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
