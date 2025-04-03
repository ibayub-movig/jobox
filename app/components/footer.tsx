import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-center space-x-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Jobox
        </p>
        <p className="text-sm text-gray-500">
          Made with ❤️ by <a href="https://ibrahimayub.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Ibrahim Ayub</a>
        </p>
        <a href="mailto:hello@ibrahimayub.com" className="text-sm text-gray-500 hover:text-gray-700">
          Contact: hello@ibrahimayub.com
        </a>
      </div>
    </footer>
  )
}

