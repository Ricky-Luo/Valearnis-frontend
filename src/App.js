import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import {
  Col,
  Row,
  Button,
  Card,
  Space,
  Typography,
  Input,
  Radio,
  Divider,
  Checkbox,
} from "antd";
import { SendOutlined } from "@ant-design/icons";
import axios from "axios";

const CheckboxGroup = Checkbox.Group;
function App() {
  const [question1_value, setQuestion1_value] = useState();
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setQuestion1_value(e.target.value);
  };
  const plainOptions = [
    { label: "Option A", value: "A" },
    { label: "Option B", value: "B" },
    { label: "Option C", value: "C" },
    { label: "Option D", value: "D" },
  ];
  const [question2_value, setQuestion2_value] = useState([]);
  const onChangeSecond = (list) => {
    setQuestion2_value(list);
  };
  const [result1, setResult1] = useState("Test");
  const [result1Loding, setResult1Loding] = useState(false);
  const [result2, setResult2] = useState("Test");
  const [result2Loding, setResult2Loding] = useState(false);

  const test1 = () => {
    setResult1Loding(true)
    axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
      url: 'http://localhost:8000/polls/verifyUserAnswer',
      data: {
        question_id: 'question1',
        answer: question1_value
      }
    })
      .then(function (response) {
        console.log(response)
        setResult1Loding(false)
        if (response.data.verify_result) {
          setResult1("Correct")
        } else {
          setResult1("Incorrect")
        }
      });
  };
  const test2 = () => {
    setResult2Loding(true)
    axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
      url: 'http://localhost:8000/polls/verifyUserAnswer',
      data: {
        question_id: 'question2',
        answer: question2_value.join("")
      }
    })
      .then(function (response) {
        console.log(response)
        setResult2Loding(false)
        if (response.data.verify_result) {
          setResult2("Correct")
        } else {
          setResult2("Incorrect")
        }
      });
  };
  return (
    <div className="App">
      <Row>
        <h1 style={{ marginLeft: "36px", marginTop:"30px" }}><span style={{borderBottom: "solid 5px #1677ff"}}>Ricky Luo</span>'s Assignment for Valearnis</h1>
      </Row>
      <Row>
        <Col span={14}>
          <Card
            title="Lorem Ipsum"
            style={{ margin: "12px", textAlign: "left", padding: "0px" }}
            headStyle={{ textAlign: "left" }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque vitae mattis nulla. Etiam ut odio justo. In lobortis
              arcu non volutpat egestas. Vivamus in augue sed ipsum facilisis
              malesuada. Phasellus quis lacus euismod, condimentum massa in,
              aliquam dolor. Aliquam sed sapien metus. Aliquam sit amet odio
              vulputate, vulputate nunc faucibus, finibus lectus. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Sed sed massa vestibulum, placerat ante ut, cursus
              ipsum. Maecenas maximus odio ac elit dictum, vitae cursus enim
              egestas. Ut commodo tempor urna quis interdum. Praesent facilisis
              lacus sit amet neque feugiat, sed eleifend erat scelerisque. Morbi
              viverra eros in est mattis accumsan. Etiam auctor ex non blandit
              malesuada. Aenean efficitur nec urna eu finibus. Quisque sit amet
              leo tempus, euismod leo eu, dictum ante.
            </p>
            <p>
              Quisque in nisl blandit mi facilisis pellentesque. Nullam
              fringilla posuere lorem in ornare. Maecenas accumsan ut ante nec
              pellentesque. Etiam euismod libero quam, sodales volutpat libero
              volutpat sit amet. Donec viverra eget augue et elementum.
              Pellentesque mollis, augue mattis vulputate hendrerit, magna risus
              gravida augue, et scelerisque lacus massa et elit. Suspendisse
              iaculis mi sed libero vehicula egestas. Nam sit amet eros a massa
              viverra sodales sit amet quis lectus. Etiam feugiat erat turpis,
              ac interdum sapien pulvinar quis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque vitae mattis nulla. Etiam ut odio justo. In lobortis
              arcu non volutpat egestas. Vivamus in augue sed ipsum facilisis
              malesuada. Phasellus quis lacus euismod, condimentum massa in,
              aliquam dolor. Aliquam sed sapien metus. Aliquam sit amet odio
              vulputate, vulputate nunc faucibus, finibus lectus. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Sed sed massa vestibulum, placerat ante ut, cursus
              ipsum. Maecenas maximus odio ac elit dictum, vitae cursus enim
              egestas. Ut commodo tempor urna quis interdum. Praesent facilisis
              lacus sit amet neque feugiat, sed eleifend erat scelerisque. Morbi
              viverra eros in est mattis accumsan. Etiam auctor ex non blandit
              malesuada. Aenean efficitur nec urna eu finibus. Quisque sit amet
              leo tempus, euismod leo eu, dictum ante.
            </p>
          </Card>
        </Col>
        <Col span={10}>
          <Card
            title="Read the article, and pick the right answers."
            style={{ margin: "12px", textAlign: "left", padding: "0px" }}
            headStyle={{ textAlign: "left" }}
          >
            <p>
              1. This is a single choice question, please select the right one.
            </p>
            <Space direction="vertical">
              <Radio.Group onChange={onChange} value={question1_value}>
                <Space direction="vertical">
                  <Radio value={"A"}>Option A</Radio>
                  <Radio value={"B"}>Option B</Radio>
                  <Radio value={"C"}>Option C</Radio>
                  <Radio value={"D"}>Option C</Radio>
                </Space>
              </Radio.Group>
              <Button
                // type="primary"
                style={{background: "#08979c", color: "white"}}
                icon={<SendOutlined />}
                shape="round"
                disabled={!question1_value}
                loading={result1Loding}
                onClick={test1}
              >
                {result1}
              </Button>
            </Space>
            <Divider></Divider>
            <p>
              2. This is a multiple choice question, please select all right
              answers.
            </p>
            <Space direction="vertical">
              <CheckboxGroup
                options={plainOptions}
                value={question2_value}
                onChange={onChangeSecond}
              />
              <Button
                // type="primary"
                style={{background: "#08979c", color: "white"}}
                icon={<SendOutlined />}
                disabled={
                  question2_value === null || question2_value.length < 1
                }
                onClick={test2}
                shape="round"
                loading={result2Loding}
              >
                {result2}
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
