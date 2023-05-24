declare namespace Email {
  function send(emailData: EmailData): Promise<any>;
}

declare global {
  interface Window {
    Email: typeof Email;
  }
}
