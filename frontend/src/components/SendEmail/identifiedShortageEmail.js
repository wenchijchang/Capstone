import emailjs from "@emailjs/browser";

export const identifiedShortageEmail = ({ medicationName }) => {
  let templateParams = {
    medicationName: medicationName,
  };

  emailjs
    .send(
      "service_4dnd95o",
      "template_4qdp0bp",
      templateParams,
      "nuqaVHTOO6iGO4XIX"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
};
