import { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  const [isNameInvalid, setIsNameInvalid] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !address || !email || !phone || !gender || !course) {
      alert('Please fill out all fields');
      return;
    }

    // Display data
    alert(`Data Stored Successfully!
    Name: ${name}
    Address: ${address}
    Email: ${email}
    Phone: ${phone}
    Gender: ${gender}
    Course: ${course}`);

    // Optionally reset form data after successful submission
    resetForm();
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setAddress('');
    setEmail('');
    setPhone('');
    setGender('');
    setCourse('');
  };

  return (
    <div className="row container mt-5 vh-100 d-100">
      <div className="col-lg-4"></div>
      <div className="col-lg-5 border box shadow mb-5">
        <h3 className='text-warning text-center mt-3'>REGISTRATION FORM</h3>
        <Form onSubmit={handleForm}>
          <Form.Group className="mt-3">
            <Form.Label className='text-dark fw-bold'>Enter your name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter in capital letters"
              isInvalid={isNameInvalid}
            />
            <Form.Control.Feedback type="invalid">Invalid Name</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className='text-dark fw-bold'>Enter your Address:</Form.Label>
            <Form.Control
              as="textarea"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your Address"
              rows={4}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-dark fw-bold">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className='fw-bold'>Gender:</Form.Label>
            <Form.Check
              type="radio"
              id="male"
              name="gender"
              label="Male"
              checked={gender === 'Male'}
              onChange={() => setGender('Male')}
              className='text-dark'
            />
            <Form.Check
              type="radio"
              id="female"
              name="gender"
              label="Female"
              checked={gender === 'Female'}
              onChange={() => setGender('Female')}
              className='text-dark'
            />
            <Form.Check
              type="radio"
              id="other"
              name="gender"
              label="Other"
              checked={gender === 'Other'}
              onChange={() => setGender('Other')}
              className='text-dark'
            />
          </Form.Group>

          <Form.Group className="mb-3 text-dark fw-bold">
            <Form.Label>Phone number:</Form.Label>
            <Form.Control
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter a valid phone number"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className='fw-bold'>Course:</Form.Label>
            <Form.Select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Please select your course</option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Humanities">Humanities</option>
            </Form.Select>
          </Form.Group>

          <br />
          <Button className="bg-success w-25" type="submit">Register</Button>
          <Button className="bg-danger ms-5 w-25" type="button" onClick={handleCancel}>Cancel</Button>
        </Form>
      </div>
      <div className="col-lg-3"></div>
    </div>
  );
}

export default App;
