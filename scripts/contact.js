//sets up the on-click function for the submit button to replace the page content with a paragraph in font size 24
    document.getElementById('submit-button').addEventListener('click', function() {
      let newParagraph = document.createElement('p');
      newParagraph.innerHTML = 'Thank you for your message!';
      newParagraph.style.fontSize = '24px';
      document.getElementById('contact-page').innerHTML = '';
      document.getElementById('contact-page').appendChild(newParagraph);
    });