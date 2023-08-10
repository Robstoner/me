
export default function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-10">
      <div className="w-full md:w-1/2">
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-lg font-semibold">
              Nume
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-purple-300 bg-gray-800 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-purple-300 bg-gray-800 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-lg font-semibold">
              Mesaj
            </label>
            <textarea
              name="message"
              id="message"
              className="border border-purple-300 bg-gray-800 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-600 text-white font-semibold py-2 rounded-md"
          >
            Trimite
          </button>
        </form>
      </div>
    </div>
  );
}
