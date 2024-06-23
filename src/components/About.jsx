const About = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-6">
          About Our To-Do App
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Our To-Do App is designed to help you manage your tasks efficiently
          and effectively. Whether you need to keep track of daily chores, work
          assignments, or personal goals, our app provides a simple and
          intuitive interface to organize your tasks.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Features:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Create and manage tasks</li>
          <li>Set deadlines and priorities</li>
          <li>Mark tasks as completed</li>
          <li>Filter tasks by status</li>
          <li>Responsive and user-friendly design</li>
        </ul>
        <p className="text-gray-700 text-lg">
          We hope our app helps you stay organized and productive. Thank you for
          choosing our To-Do App!
        </p>
      </div>
    </div>
  );
};

export default About;
