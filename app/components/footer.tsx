export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">&copy; 2023 HealthPro. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-blue-600 mx-2">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 mx-2">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  