import emailjs from "@emailjs/browser";

export const confirmedShortageEmail = (
  { medicationName },
  { quantity },
  { usageInLast30Days },
  { remainingDaySupply }
) => {
  let templateParams = {
    medicationName: medicationName,
    quantity: quantity,
    usageInLast30Days: usageInLast30Days,
    remainingDaySupply: remainingDaySupply,
  };

  emailjs
    .send(
      "service_4dnd95o",
      "template_o84zizo",
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
