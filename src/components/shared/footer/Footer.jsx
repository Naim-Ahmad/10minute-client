export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and App Links */}
        <div>
          <img src="https://10minuteschool.com/images/logo.svg?w=116&h=32" alt="10 Minute School Logo" className="w-40 mb-4" />
          <p className="text-gray-600 text-sm mb-4">
            ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
          </p>
          <div className="flex gap-4">
            <a href="#" className="block">
              <img
                src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png?w=156&h=49"
                alt="Google Play"
                className="w-32"
              />
            </a>
            <a href="#" className="block">
              <img
                src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png?w=156&h=49"
                alt="App Store"
                className="w-32"
              />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4">কোম্পানি</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-gray-800">ক্যারিয়ার / নিয়োগ</a></li>
            <li><a href="#" className="hover:text-gray-800">বিস্তারিত</a></li>
            <li><a href="#" className="hover:text-gray-800">শিক্ষক হিসেবে যোগ দিন</a></li>
            <li><a href="#" className="hover:text-gray-800">অ্যাফিলিয়েট হিসেবে যোগ দিন</a></li>
            <li><a href="#" className="hover:text-gray-800">প্রাইভেসি পলিসি</a></li>
            <li><a href="#" className="hover:text-gray-800">রিফান্ড পলিসি</a></li>
            <li><a href="#" className="hover:text-gray-800">ব্যবহারকারীর শর্তাবলী</a></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4">অন্যান্য</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-gray-800">ব্লগ</a></li>
            <li><a href="#" className="hover:text-gray-800">বুক স্টোর</a></li>
            <li><a href="#" className="hover:text-gray-800">ফ্রি লেকচার ও গাইড</a></li>
            <li><a href="#" className="hover:text-gray-800">চাকরি প্রস্তুতি কোর্সসমূহ</a></li>
            <li><a href="#" className="hover:text-gray-800">সার্টিফিকেট ভেরিফাই করুন</a></li>
            <li><a href="#" className="hover:text-gray-800">ফ্রি ডাউনলোড</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4">আমাদের যোগাযোগ মাধ্যম</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>কল করুন: <span className="text-gray-800 font-bold">16910</span> (24x7)</li>
            <li>হোয়াটসঅ্যাপ: <span className="text-gray-800">+8801896016252</span> (24x7)</li>
            <li>দেশের বাইরে থেকে: <span className="text-gray-800">+880 9610916910</span></li>
            <li>ইমেইল: <a href="mailto:support@10minuteschool.com" className="text-green-600 hover:underline">support@10minuteschool.com</a></li>
          </ul>
          <div className="flex items-center space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-tiktok text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        স্বত্ব &copy; ২০১৫-২০২৪ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
          সরাসরি কথা বলুন
        </button>
      </div>
    </footer>
  );
}
