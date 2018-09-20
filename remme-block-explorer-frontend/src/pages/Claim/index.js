import React, { Fragment, Component } from "react";
import { Modal, Form, Divider, Alert, Row, Col } from "antd";
import download from 'react-file-download';

import api from "../../config/api";
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

  handleClick = async () => {
    try {
      const response = await api.generateKeys();
      download(JSON.stringify(response), "keystore.txt");
    } catch (e) {
      console.log(e);
    }
  }

  handleSubmit = async ({ pubKey, login }) => {
    const fields = {
      "remmePublicKey": pubKey,
      "discord": login
    };

    try {
      const { bathcId, message } = await api.getTestTokens({data: fields});
      if (bathcId) {
        Modal.success({
          title: 'Success!',
          content: 'BatchId: ' + bathcId
        });
      } else {
        Modal.error({
          title: 'Error!',
          content: message || "The input was not valid."
        });
      }
    } catch (e) {
      console.log(e);
    }
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
          <Col span={12}>Not registered in REMME Tech Community? <br /> <a target="_blank" href="https://remme.io/community#join-tech-community">Join us</a></Col>
        </Row>

      </Fragment>
    )
  }
}

export default Form.create()(ClaimForm);
