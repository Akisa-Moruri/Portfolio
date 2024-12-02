import React from 'react';

function Contact() {
  return (
    <div id="contact" className="flex flex-col space-y-10 justify-center m-10">
      <div className="text-center">
        <a href="#" className="flex items-center justify-center mb-5 text-4xl font-semibold text-gray-900">
          <img src="" className="h-12 mr-3 sm:h-9" alt=""/>
          Contacts
        </a>
      </div>

      <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/github.png" alt="GitHub" />
        </a>

        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
        </a>
      </div>            
      <p className="text-center text-gray-700 font-medium">&copy; 2024. All rights reserved.</p>
      
    </div>
  );
}

export default Contact;
