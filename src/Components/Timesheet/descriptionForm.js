import { useState, useEffect } from "react";
import { Dropdown, Tab, Row, Col, Nav, Form, Button } from "react-bootstrap";

function DescriptionForm({
  slide,
  setDescription,
  demoFinalData,
  setDemoFinalData,
  row,
  date,
}) {
  const [data, setData] = useState(date[0]);
  const [Description, setDescriptionData] = useState(
    demoFinalData[row - 1][0].description
  );

  const dates = slide.map((item) => {
    return item.monthDate;
  });

  return (
    <div
      className="App"
      style={{ position: "absolute", right: "15px", top: "18px" }}
    >
      <header className="App-header"></header>
      <Dropdown drop="end">
        <Dropdown.Menu
          // variant="dark"
          style={{ transform: "translate3d(0,0,0)" }}
          show={true}
        >
          <Tab.Container id="left-tabs-example" defaultActiveKey={dates[0]}>
            <Row
              style={{
                width: "500px",
                margin: "0px",
              }}
            >
              <Col sm="3" style={{ height: "203px", overflowY: "auto" }}>
                <Nav
                  variant="pills"
                  className="flex-column"
                  style={{
                    width: "100px",
                  }}
                >
                  {dates.map((d, index) => {
                    return (
                      <Nav.Item>
                        <Nav.Link
                          eventKey={d}
                          data-date={date[index]}
                          data-row={row}
                          onClick={(e) => {
                            const { date, row } = e.target.dataset;
                            // console.log(date);
                            demoFinalData[row - 1].forEach((item) => {
                              if (item.date === date) {
                                setDescriptionData(item.description);
                              }
                            });
                            setData(date);
                          }}
                        >
                          {d}
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>
              </Col>
              <Col>
                <Tab.Content>
                  {dates.map((date) => {
                    return (
                      <Tab.Pane eventKey={date}>
                        <Form.Control
                          as="textarea"
                          placeholder="Add Description"
                          style={{ height: "170px", color: "#000" }}
                          name="description"
                          defaultValue={Description}
                          // disabled={Description ? true :false}
                          onChange={(e) => setDescriptionData(e.target.value)}
                        />

                        <Button
                          variant="primary"
                          type="button"
                          className="mt-2 float-end"
                          onClick={() => {
                            const myData = demoFinalData;
                            const currentData = myData[row - 1];
                            currentData.forEach((item, index) => {
                              if (item?.date === data) {
                                currentData[index] = {
                                  ...item,
                                  description: Description.trim(),
                                };
                              }
                            });
                            myData[row - 1] = currentData;
                            setDemoFinalData(myData);
                            setDescription((prev) => !prev);
                          }}
                        >
                          Confirm
                        </Button>
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DescriptionForm;
