import nodemailer from "nodemailer";
export const generateOTP = () => {
  let otp = "";
  for (let i = 0; i <= 3; i++) {
    const randval = Math.round(Math.random() * 9);
    otp = otp + randval;
  }
  return otp;
};

export const mailTransport = () =>
  nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });

export const generateEmailTemplate = (OTP) => {
 return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
  <div class="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-semibold text-gray-800">Email Verification</h2>
      <p class="text-gray-600">Please use the following OTP to verify your email address.</p>
    </div>

    <div class="bg-blue-50 p-4 rounded-lg mb-6">
      <h3 class="text-xl font-semibold text-blue-600">Your OTP: <span class="text-2xl text-black font-bold">${OTP}</span></h3>
      <p class="text-sm text-gray-600">This OTP will expire in 1day. If you didn’t request this, please ignore this email.</p>
    </div>



    <footer class="text-center text-sm text-gray-600 mt-6">
      <p>Thank you for registering with us!</p>
      <p>Best regards,</p>
      <p>Immunebytes</p>
    </footer>
  </div>
</body>
</html>
`;
};


export const plainEmailTemplate = (heading,message) => {
    return `<!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Email Verification</title>
     <script src="https://cdn.tailwindcss.com"></script>
   </head>
   <body class="bg-gray-100">
     <div class="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
       <div class="text-center mb-6">
         <h2 class="text-2xl font-semibold text-gray-800">Email verified</h2>
       </div>
   
       <div class="bg-blue-50 p-4 rounded-lg mb-6">
         <h3 class="text-xl font-semibold text-blue-600">${heading}</h3>
         <p class="text-sm text-gray-600">${message}.</p>
       </div>
   
   
   
       <footer class="text-center text-sm text-gray-600 mt-6">
         <p>Thank you for registering with us!</p>
         <p>Best regards,</p>
         <p>Immunebytes</p>
       </footer>
     </div>
   </body>
   </html>
   `;
   };


export const forgotPasswordTemplate = ()=>{
   return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        /* Tailwind CSS CDN for use in email previews */
        @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
    </style>
</head>
<body class="bg-gray-100">
    <div class="max-w-lg mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
        <header class="text-center mb-4">
            <h1 class="text-2xl font-semibold text-gray-800">Reset Your Password</h1>
            <p class="text-gray-600 mt-1">We received a request to reset your password.</p>
        </header>

        <div class="text-center">
            <p class="mb-4 text-gray-700">
                Click the button below to reset your password. If you did not request this, please ignore this email.
            </p>
            <a href="https://example.com/reset-password" class="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
                Reset Password
            </a>
        </div>

        <footer class="mt-8 text-center text-gray-500">
            <p>If the button above does not work, copy and paste this link into your browser:</p>
            <a href="https://example.com/reset-password" class="text-blue-600 hover:underline break-words">
                https://example.com/reset-password
            </a>
            <p class="mt-4 text-sm">
                This link will expire in 24 hours for your security.
            </p>
        </footer>
    </div>
</body>
</html>
`
   }
