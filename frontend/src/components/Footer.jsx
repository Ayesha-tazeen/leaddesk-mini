const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center flex-col gap-2">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} LeadDesk Mini. All rights reserved.
          </p>
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            Built for Digital Heroes Training Task
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
