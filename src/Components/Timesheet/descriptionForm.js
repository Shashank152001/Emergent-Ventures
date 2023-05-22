import { useState,useEffect } from "react";
import {
  Dropdown,
  Tab,
  Row,
  Col,
  Nav,
  Form,
  Button,
} from "react-bootstrap";


const dummyData = {

    '1':{
        '14':'Hello',
        '15':'Hello2',
        '16':'Hello3',
        '17':'Hello4',
        '18':'Hello5',
        '19':'Hello6',
        '20':'Hello7',
    },

    '2':{
        '14':'world',
        '15':'Hello2world',
        '16':'Hello3world',
        '17':'Hello4world',
        '18':'Hello5world',
        '19':'Hello6worldworld',
        '20':'Hello7world',
    }
}



function DescriptionForm({slide,
    setTimeSheetData,
    setDescription,
    UserDesCriptionData,
    row
}) {

    const tempData = {};
    

    UserDesCriptionData.forEach(element => {

         if(tempData[element.timesheetId]){
            tempData[element.timesheetId] = {...tempData[element.timesheetId],
                [element.date.substr(8)]:element.description}
         }
         else{
            tempData[element.timesheetId] = {
                [element.date.substr(8)]:element.description}
         }
    })

    console.log(tempData);
        
    
    
    const[data,setData] = useState({
        description:''
    })

    const dates = slide.map((item)=>{
        
        return item.monthDate;
   });

  


  return (
    <div className="App" style={{position:"absolute",right:'15px',top:'18px'}}>
      <header className="App-header"></header>
      <Dropdown drop="end">
       

        <Dropdown.Menu variant="dark" style={{transform:'translate3d(0,0,0)'}} show={true}>
          <Tab.Container id="left-tabs-example" defaultActiveKey={dates[0]}>
            <Row
              style={{
                width: "500px",
                margin: "0px",
              }}
            >
              <Col sm="3" style={{height:"203px",overflowY:"auto"}}>
                <Nav
                  variant="pills"
                  className="flex-column"
                  style={{
                    width: "100px",
                  }}
                >
                  {dates.map((date) => {
                    return (
                      <Nav.Item>
                        <Nav.Link eventKey={date}>{date}</Nav.Link>
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
                            style={{ height: "170px",color:'#000' }}
                            name="description"
                            defaultValue={tempData[row] ? tempData[row][date.substr(4)] : ''}
                            onChange={(e)=>setData((prev)=>({
                                ...prev,[e.target.name]:e.target.value
                            }))}
                          />
                       
                        <Button
                          variant="primary"
                          type="button"
                          className="mt-2 float-end"
                          onClick={() =>{ 
                            setTimeSheetData((prev)=>({...prev,...data}))
                            setDescription((prev)=>!prev);
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