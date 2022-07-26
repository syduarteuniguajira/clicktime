export interface MailStructure {
    name: string;
    transmitter: string;
    subject: string;
    message: string;
}

export interface ResponseMailer {
    sentEmail: boolean;
    error: string;
}
