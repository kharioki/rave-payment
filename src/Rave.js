import React, { Component } from 'react'
// import the library
import RavePaymentModal from 'react-ravepayment'

class App extends Component {

        state = {
          key: "FLWPUBK-XXXXXXXXXXXXXXXXXXXXXXXXXX-X", // RavePay PUBLIC KEY
          email: "foo@example.com", // customer email
          amount: 1000 // equals NGN 1000. Minimum amount allowed NGN 1 while on production or live system, it's 10
        }

      callback = (response) => {
          console.log(response);

      }

      close = () => {
          console.log("Payment closed");
      }

      getReference = () => {
          let text = "";
          let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

          for( let i=0; i < 10; i++ )
              text += possible.charAt(Math.floor(Math.random() * possible.length));

          return text;
      }

    render () {
    return (
      <div className='App'>
        <p className='App-intro'>
            <RavePaymentModal
                text="Make Payment"
                class="payButton"
                metadata={[{metaname:'Device', metavalue : 'IPhone X'}]}
                reference={this.getReference()}
                email={this.state.email}
                amount={this.state.amount}
                ravePubKey={this.state.key}
                callback={this.callback}
                close={this.close}
                isProduction={false}
                tag="button" // it can be button or a or input tag
            />
        </p>
      </div>
    )
  }
}

export default App