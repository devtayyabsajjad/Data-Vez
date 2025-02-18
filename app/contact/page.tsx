export default function Contact() {
  return (
    <div className="bg-white bg-opacity-80 rounded-lg shadow-neon p-8 mt-8">
      <h1 className="text-4xl font-bold mb-6 text-gradient">Contact Us</h1>
      <p className="text-gray-800 mb-4">
        We'd love to hear from you! If you have any questions, feedback, or need support, please don't hesitate to reach
        out.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2 text-purple-700">Email</h2>
        <p className="text-gray-800">support@datavizpro.com</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2 text-purple-700">Phone</h2>
        <p className="text-gray-800">+1 (555) 123-4567</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-purple-700">Address</h2>
        <p className="text-gray-800">
          123 Data Street
          <br />
          Visualization City, VS 12345
          <br />
          United States
        </p>
      </div>
    </div>
  )
}

