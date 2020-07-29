export default {
    STRIPE_KEY: "pk_test_51H34feINFswwa8d1naCqMXypXmTnKtm6dZyBPTsef8nQoDu5yp4BPoneeOO05FUjt5Q0veDIsEocnvqJKQqUy3Ml005BUBKI9U",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-yhf"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://4aa0f0bwp8.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_PKkJqc2wf",
      APP_CLIENT_ID: "6hp5q9lfrq48ehketeqkf69h7g",
      IDENTITY_POOL_ID: "us-east-1:6b4daee3-7e21-4d3f-9c26-54b1c255d7cf"
    }
  };