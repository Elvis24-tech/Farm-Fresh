export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-2 px-4 text-xs">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <p className="text-slate-400">&copy; All rights Reserved</p>
        <div className="flex space-x-4">
          <a href="#" className="text-slate-400 hover:text-white">Help</a>
          <a href="#" className="text-slate-400 hover:text-white">Terms</a>
          <a href="#" className="text-slate-400 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
