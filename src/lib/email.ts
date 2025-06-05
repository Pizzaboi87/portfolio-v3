import emailjs from "@emailjs/browser";

export async function sendContactEmail(
    name: string,
    email: string,
    message: string
) {
    return emailjs.send(
        "service_elf2scf",
        "template_7fc4o63",
        {
            name,
            email,
            message,
        },
        "e81biRY__CXf-5HB0"
    );
}
