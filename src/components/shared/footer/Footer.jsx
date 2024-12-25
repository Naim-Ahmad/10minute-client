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
        <button
          className="fixed right-0 bottom-[86px] z-10 md:bottom-0 flex gap-2 items-center m-5 px-2 py-2 md:px-6 md:py-[14px] text-white"
          style={{
            background:
              "linear-gradient(226.1deg, rgb(8, 206, 51) 0%, rgb(20, 156, 82) 101.24%)",
            borderRadius: "28px 28px 4px",
            zIndex: 49,
            right: 0
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            height={22}
            width={22}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
            <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" />
          </svg>
          <span className="hidden md:inline-block">সরাসরি কথা বলুন</span>
        </button>

      </div>
    </footer>
  );
}
