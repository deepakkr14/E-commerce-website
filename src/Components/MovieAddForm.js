import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";

const MovieAddForm = () => {
  const NameRef = useRef();
  const DirectorRef = useRef();
  const DateRef = useRef();
  async function submitHandler(event)  {
    event.preventDefault();
    const MovieName = NameRef.current.value;
    const DirectorName = DirectorRef.current.value;
    const DateNumber = DateRef.current.value;
    const userData = {
      Movie: MovieName,
      Director: DirectorName,
      Date: DateNumber,
      id: Math.random().toString(),
    };
    console.log(userData);
    try {
        const response = await fetch('https://react-api-backend-dc22b-default-rtdb.firebaseio.com/movies.json', {
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
            

              <FloatingLabel label="Movie Name" className="mb-2">
                <Form.Control
                  ref={NameRef}
                  style={{ width: "500px" }}
                  type="text"
                  placeholder="Movie Name"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FloatingLabel label="Movie Director" className="mb-2">
                <Form.Control
                  type="text"
                  ref={DirectorRef}
                  placeholder="Director"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <FloatingLabel label="Date" className="mb-2">
                <Form.Control type="date" ref={DateRef} />
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
export default MovieAddForm;
