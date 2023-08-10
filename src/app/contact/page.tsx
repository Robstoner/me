import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="py-20 px-[8rem] bg-gray-900">
      <div className="mx-auto mt-6">
        <h1 className="text-3xl font-bold py-2">Contact</h1>
        <p className="text-xl text-semibold">
          Pentru a trimite un mesaj vă rugăm completați formularul de mai jos
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
