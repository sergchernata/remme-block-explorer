import React, { Fragment, Component } from "react";
import { Modal, Form, Divider } from "antd";
import axios from 'axios';
import download from 'react-file-download';

import { urls } from "../../config";
import CreateForm from '../../components/CreateForm';

class ClaimForm extends Component {

  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
    wrapperCol: {
      xs: { span: 24 },
    },
  };

  scheme = [
    {
      name: 'pubKey',
      label: 'Insert your public key:',
      type: 'String',
      required: true,
      message: 'Please input your public key!'
    },
    {
      name: 'login',
      label: 'Your Discord login',
      type: 'String',
      required: true,
      message: 'Please input your Discord login !'
    }
  ];

  showModal = (data) => {
    if (data.status == 200) {
      Modal.success({
        title: 'Success!',
        content: 'BathcId: ' + data.data.bathcId
      });
    } else {
      Modal.error({
        title: 'Error!',
        content: data.data.message ? data.data.message : "The input was not valid."
      });
    }
  }

  handleClick = () => {
    axios.get(urls.generateAccount)
    .then(function (response) {
      const data = {
        publicKey: response.data.publicKey,
        privateKey: response.data.privateKey
      }
      download(JSON.stringify(data), "keystore.txt");
    })
  }

  handleSubmit = async (values) => {
    const { pubKey, login } = values;
    const data = {
      "remmePublicKey": pubKey,
      "email": login
    };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      data: data,
      url: "http://46.101.18.109/api/faucet"
    };

    axios(options)
      .then(response => {
        this.showModal(response);
      })
      .catch(error => {
        this.showModal(error.response);
      });
  }

  render() {
    return (
      <Fragment>
        <h2>
          Claim Testnet Tokens
        </h2>
        <Divider />
        <p style={{textAlign: "center"}}>Enter your public key and email to get REM tokens. If you do not have keys you can <a onClick={this.handleClick}>generate</a> new ones. </p>
        <CreateForm
          layout={{ items: this.formItemLayout }}
          onSubmit={this.handleSubmit}
          scheme={this.scheme}
          buttonName="GET"
          className="claim-form"
        />
      </Fragment>
    )
  }
}

export default Form.create()(ClaimForm);
