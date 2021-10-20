import React from 'react';
import { AnimatedLogo } from '../components/AnimatedLogo';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const defaultformDetails = {
    name: '',
    email: '',
    message: '',
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: defaultformDetails });

  console.log('formErrors', errors);

  const sendMessage = ({ name, email, message }) => {
    window.location.href =
      'https://us-central1-wesportfolio.cloudfunctions.net/sendMail?name=' +
      name +
      '&email=' +
      email +
      '&message=' +
      message +
      '';
  };

  const onSubmit = async (formData) => {
    console.log('formData', formData);

    const { name, email, message } = formData;

    const response = await sendMessage(formData);

    console.log(response);

    // reset();
  };

  return (
    <div>
      <div className="body-container">
        <h1 className="slide">Send me a Message</h1>
        <form id="contact-form" className="fade-in">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              {...register('name', {
                required:
                  'I need a name so I can address you properly.',
              })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register('email', {
                required:
                  'I need an email address to respond to.',
              })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="4"
              id="message"
              {...register('message')}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit(onSubmit)}
          >
            Email Me
          </button>
        </form>
      </div>
      <AnimatedLogo />
    </div>
  );
};

export { Contact };
