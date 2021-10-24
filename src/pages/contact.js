import React from 'react';
import { AnimatedLogo } from '../components/AnimatedLogo';
import { useForm } from 'react-hook-form';
import { Social } from '../components/Social';

const Contact = () => {
  const defaultformDetails = {
    name: '',
    email: '',
    message: '',
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: defaultformDetails });

  const sendMessage = async (data) =>
    await fetch(
      'https://us-central1-wesportfolio.cloudfunctions.net/sendMail',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );

  const onSubmit = async (formData) => {
    const response = await sendMessage(formData);
    if (response.ok) {
      console.log('form sumbmission successful');
      reset();
    } else {
      alert(
        'There was an error sumbitting your message, please try again.'
      );
    }
  };

  return (
    <>
      <h3 className="header slide">Send me a Message</h3>
      <div className="contact-form">
        <form className="fade-in">
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
            {errors.name && (
              <p className="small">{errors.name.message}</p>
            )}
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
            {errors.email && (
              <p className="small">
                {errors.email.message}
              </p>
            )}
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
        <AnimatedLogo />
      </div>
      <Social />
    </>
  );
};

export { Contact };
