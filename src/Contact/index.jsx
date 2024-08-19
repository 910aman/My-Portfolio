import { RiContactsBook3Line } from 'react-icons/ri';
import PageHeader from '../pageHeaderContent/PageHeader';
import { Animate } from 'react-simple-animate';
import './style.css';
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [formReq, setFormReq] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regEx.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const email = formData.get('from_email');

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    emailjs.sendForm('service_t11yf4m', 'template_kjoru9e', formRef.current, {
      publicKey: 'Uup6-arpvstHAxVIX',
    })
      .then(
        (result) => {
          setFormReq('OK');
          console.log(result);
          formRef.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormReq('FAILED');
        }
      );
  };

  useEffect(() => {
    if (formReq === 'OK') {
      const timer = setTimeout(() => {
        setFormReq('');
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [formReq]);

  return (
    <section>
      <PageHeader header_Text="Contact Me" icon={<RiContactsBook3Line size={30} />} />
      <div className='h-full bg-theme-background-color p-6'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}>
          <div>
            <h3 className='title-text text-nowrap w-fit text-theme-sub-text-color text-xl md:text-3xl font-medium leading-5 relative uppercase px-3 py-2 border-b-2 border-theme-main-color'>
              Let&apos;s Talk
            </h3>
          </div>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}>
          <div className='mt-14'>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className='md:grid md:grid-cols-2 gap-12 md:mb-10 flex flex-col '>
                <div className='relative'>
                  <input required type="text" name='from_name' className='inputName h-16 w-full border-2 border-theme-main-color px-4 py-3 transition-all duration-500 ease relative bg-theme-bg-transparent text-theme-sub-text-color focus:border-theme-main-color' />
                  <label htmlFor='from_name' className='labelName font-medium absolute top-3 left-4 transition-all duration-200 ease text-theme-sub-text-color'>Name</label>
                </div>
                <div className='relative'>
                  <input required type="text" name='from_email' className='inputEmail h-16 w-full border-2 border-theme-main-color px-4 py-3 transition-all duration-500 ease-linear relative bg-theme-bg-transparent text-theme-sub-text-color focus:border-theme-main-color' />
                  <label htmlFor='from_email' className='labelEmail font-medium absolute top-3 left-4 transition-all duration-200 ease text-theme-sub-text-color '>E - Mail</label>
                  {emailError && <p className='text-red-500 whitespace-nowrap'>{emailError}</p>}
                </div>
                <div className='relative'>
                  <textarea required name='message' className='inputDescription min-h-20 max-h-32 h-full w-full border-2 border-theme-main-color px-4 py-3 transition-all duration-500 ease-linear relative bg-theme-bg-transparent text-theme-sub-text-color focus:border-theme-main-color' />
                  <label htmlFor='message' className='labelDescription font-medium absolute top-3 left-4 transition-all duration-200 ease text-theme-sub-text-color'>
                    What are Requirements?
                  </label>
                </div>

              </div>
              <div className='w-full flex flex-col gap-5 md:mt-2 mt-6'>
                {formReq === 'OK' &&
                  <p className='whitespace-nowrap text-theme-sub-text-color'>
                    Successfully Message Send ✅
                  </p>
                }
                {formReq === 'FAILED' &&
                  <p className='whitespace-nowrap text-theme-sub-text-color'>
                    Message failed to Send ❌
                  </p>
                }
                <button className='md:w-fit w-full px-8 py-2 border-2 border-theme-main-color text-2xl font-semibold hover:bg-theme-main-color hover:text-theme-background-color'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Animate>
      </div >
    </section >
  );
}

export default Contact;
