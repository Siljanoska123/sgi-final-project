import React, {useState} from 'react'
import '../css/Contact.css'
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Contact = (props) => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')
  let navigate = useNavigate();

  function pushForm(e) {

    let podatok = {
      // fullName: fullName,
      subject: subject,
      text: text,
      email: email,
      // phoneNumber: phoneNumber
    }

    fetch(`/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(podatok)
    })
      .then(res => res.json())

      .then(data => {
        if (data.error) {
          alert(data.message)
          navigate('/contact')


        } else {
          toast.success(data.message);
          navigate('/')

        }
      })
      .catch(err => {
        if (err) { console.log(err) }
        toast.error(
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        );
      })

  }


  const handleSubmit = (event) => {
    pushForm();
    event.preventDefault();
    if (!email || !subject || !text) {
      return toast.error('Please fill email, subject and message');
    }
  }


  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='row'>

            <div className='section-title'>
              <h2>Get In Touch</h2>
              <p>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
            </div>



          </div>
          <div className='row'>
            <div className='column-contact'>

              <div className='contact-info'>
                <div className='contact-item'>
                  <div className='contact-icon'>
                    <i className='fa fa-thumb-tack'></i>

                  </div>
                  <div className='contact-text'>
                    <h5>
                      Address
                    </h5>
                    <p>
                      {props.data ? props.data.address : 'loading'}
                    </p>
                  </div>
                </div>

                <div className='contact-item'>
                  <div className='contact-icon'>
                    <i className='fa fa-mobile'></i>
                  </div>
                  <div className='contact-text'>
                    <h5>
                      Phone
                    </h5>
                    <p>
                      {props.data ? props.data.phone : 'loading'}
                    </p>
                  </div>
                </div>


                <div className='contact-item'>
                  <div className='contact-icon'>
                    <i className='fa fa-envelope-o'></i>
                  </div>
                  <div className='contact-text'>
                    <h5>
                      Email
                    </h5>
                    <p>
                      {props.data ? props.data.email : 'loading'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORMA */}


            <div className='column-contact2'>
              <div className='contact-form'>
                <ToastContainer position="bottom-center" limit={1} />
                <form action='#' name='sentMessage' onSubmit={handleSubmit} >
                  <div className='form-group'>

                    <input
                      type='text'
                      id='name'
                      name='subject'
                      placeholder='Company Name'
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Email'
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}

                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group'>
                    <textarea
                      name='text'
                      id='message'
                      rows='4'
                      placeholder='Message'
                      required
                      value={text}
                      onChange={e => setText(e.target.value)}

                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div id='success'></div>
                  <button type='submit' className='btn-contact-form'>
                    Send Message
                  </button>


                </form>
              </div>


            </div>
          </div>


        </div>
      </div>

    </div>
  )
}
