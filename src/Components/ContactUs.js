import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";

const ContactForm = () => {
  const NameRef = useRef();
  const EmailRef = useRef();
  const PhoneRef = useRef();
  async function submitHandler(event)  {
    event.preventDefault();
    const Name = NameRef.current.value;
    const Email = EmailRef.current.value;
    const PhoneNumber = PhoneRef.current.value;
    const userData = {
      username: Name,
      email: Email,
      date: PhoneNumber,
      id: Math.random().toString(),
    };
    console.log(userData);
    try {
        const response = await fetch('https://react-api-backend-dc22b-default-rtdb.firebaseio.com/ContactUs.json', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to add movie.');
        }
  
        const data = await response.json();
        console.log('Data:', data);
      } catch (error) {
        console.error('Error:', error.message);
      }
  };
  return (
    <Container>
      <Row>
        <Col className="bg-light d-flex justify-content-center mt-4">
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            

              <FloatingLabel label="User Name" className="mb-2">
                <Form.Control
                  ref={NameRef}
                  style={{ width: "500px" }}
                  type="text"
                  placeholder="Movie Name"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FloatingLabel label="Email Address" className="mb-2">
                <Form.Control
                  type="text"
                  ref={EmailRef}
                  placeholder="Director"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <FloatingLabel label="Phone Number" className="mb-2">
                <Form.Control type="tel" ref={PhoneRef} required pattern="[0-9]{10}" />
              </FloatingLabel>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="info" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default ContactForm;
