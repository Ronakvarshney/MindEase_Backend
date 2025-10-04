export const resetPasswordEmailTemplate = (username, resetUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f9fafb;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #e5e7eb;
    }
    .header h1 {
      color: #111827;
      font-size: 22px;
      margin: 0;
    }
    .content {
      padding: 20px 0;
      color: #374151;
      font-size: 15px;
      line-height: 1.6;
    }
    .button {
      display: inline-block;
      background-color: #2563eb;
      color: #ffffff !important;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      margin: 20px 0;
    }
    .footer {
      font-size: 12px;
      color: #6b7280;
      text-align: center;
      border-top: 1px solid #e5e7eb;
      padding-top: 15px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Reset Your Password</h1>
    </div>
    <div class="content">
      <p>Hi ${username},</p>
      <p>You recently requested to reset your password. Click the button below to reset it:</p>
      <p style="text-align: center;">
        <a href="${resetUrl}" class="button">Reset Password</a>
      </p>
      <p>If you did not request this, you can safely ignore this email.</p>
      <p><b>Note:</b> This link will expire in <span style="color:#dc2626;">5 minutes</span>.</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} MindEase. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

