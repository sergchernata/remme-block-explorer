import React, { Fragment, Component } from "react";
import { Modal, Form, Divider, Alert, Row, Col } from "antd";
import axios from 'axios';
import download from 'react-file-download';

import { urls } from "../../config";
import CreateForm from '../../components/CreateForm';
import "./style.css";

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
      label: 'Your Discord username',
      type: 'String',
      required: true,
      message: 'Please input your Discord username !'
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
      "discord": login
    };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      data: data,
      url: "/api/faucet"
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



        <h3 style={{textAlign: "center"}}>Enter your Public Key and Discord username to get REM test tokens.</h3>
        <Alert message="Please note you should be registered as REMME Tech Community member." type="warning" />
        <CreateForm
          layout={{ items: this.formItemLayout }}
          onSubmit={this.handleSubmit}
          scheme={this.scheme}
          buttonName="GET"
          className="claim-form"
        />

        <Row className="clime-rows">
          <Col span={12}>Don't have keys? <br /> Generate <a onClick={this.handleClick}>here</a> </Col>
          <Col span={12}>Not registered in REMME Tech Community? <br /> <a href="https://remme.io/community">Join us</a></Col>
        </Row>

      </Fragment>
    )
  }
}

export default Form.create()(ClaimForm);
