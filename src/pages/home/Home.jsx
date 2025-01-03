
export default function Home() {

  return (
    <div>
      <div className="bg-black text-white py-10 bg-[url(https://cdn.10minuteschool.com/images/Background_Noise_1732776287934.png)]">
      {/* online courses */}
        <div className="px-2 md:container md:px-0 mx-auto">
          <div className="items-center justify-center hidden pb-10 md:flex">
            <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: "0px", opacity: 1 }}>
              <img alt="image" style={{ color: "transparent" }} src="https://cdn.10minuteschool.com/images/Frame_2147223622%402x_%281%29_1732776618989.png?w=616&amp;h=85" />
            </div>

          </div>

          <div className="flex flex-col gap-10 md:flex-row md:gap-6 mx-auto">
            <div className="flex-1 min-w-0">
              <div className="relative bg-[linear-gradient(180deg,rgba(19,57,146,0.40)_0%,rgba(6,14,83,0.40)_100%)] rounded-[34px] border border-[#253A71] text-center px-4 md:px-6 pt-10 pb-4 md:pb-8">
                <h2 className="absolute text-[#2B72FF] border border-[#2B72FF] inline-block rounded-full px-[20px] py-[4px] bg-[#15275D] mb-10 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">অনলাইন কোর্স</h2>
                <h3 className="text-base md:text-2xl md:max-w-[360px] mb-4 mx-auto">অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!</h3>
                <div className="flex lg:justify-center gap-2 md:gap-4 mb-4 md:mb-6 overflow-x-auto scrollbar-hide pb-1 pr-1">
                  <div className="classCardContainer group flex w-full backdrop-blur-md md:max-w-[122px] md:h-[129px] cursor-pointer flex-col items-center justify-between  rounded-2xl text-white bg-white/10 px-2 py-5 transition-all duration-300 md:w-[172px]">
                    <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: 0, opacity: 1 }}><img alt="image" data-original-src="https://cdn.10minuteschool.com/images/image_6344663_1733036653015.png" draggable="false" loading="lazy" width="65" height="65" decoding="async" data-nimg="1" className="max-w-[40px] md:max-w-[65px]" style={{ color: "transparent" }} src="https://cdn.10minuteschool.com/images/image_6344663_1733036653015.png?w=65&amp;h=65" /></div>
                    <h4 className="text-xs md:text-base whitespace-nowrap">ক্লাস ৬,৭,৮</h4>
                  </div>
                  <div className="classCardContainer group flex w-full backdrop-blur-md md:max-w-[122px] md:h-[129px] cursor-pointer flex-col items-center justify-between  rounded-2xl text-white bg-white/10 px-2 py-5 transition-all duration-300 md:w-[172px]">
                    <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: 0, opacity: 1 }}><img alt="image" data-original-src="https://cdn.10minuteschool.com/images/9-10_1732778140427.png" draggable="false" loading="lazy" width="65" height="65" decoding="async" data-nimg="1" className="max-w-[40px] md:max-w-[65px]" style={{ color: "transparent" }} src="https://cdn.10minuteschool.com/images/9-10_1732778140427.png?w=65&amp;h=65" /></div>
                    <h4 className="text-xs md:text-base whitespace-nowrap">ক্লাস ৯, ১০</h4>
                  </div>
                  <div className="classCardContainer group flex w-full backdrop-blur-md md:max-w-[122px] md:h-[129px] cursor-pointer flex-col items-center justify-between  rounded-2xl text-white bg-white/10 px-2 py-5 transition-all duration-300 md:w-[172px]">
                    <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: 0, opacity: 1 }}><img alt="image" data-original-src="https://cdn.10minuteschool.com/images/ssc_1732778162589.png" draggable="false" loading="lazy" width="65" height="65" decoding="async" data-nimg="1" className="max-w-[40px] md:max-w-[65px]" style={{ color: "transparent" }} src="https://cdn.10minuteschool.com/images/ssc_1732778162589.png?w=65&amp;h=65" /></div>
                    <h4 className="text-xs md:text-base whitespace-nowrap">SSC ২৫</h4>
                  </div>
                  <div className="classCardContainer group flex w-full backdrop-blur-md md:max-w-[122px] md:h-[129px] cursor-pointer flex-col items-center justify-between  rounded-2xl text-white bg-white/10 px-2 py-5 transition-all duration-300 md:w-[172px]">
                    <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: 0, opacity: 1 }}><img alt="image" data-original-src="https://cdn.10minuteschool.com/images/hscbag_1732778180651.png" draggable="false" loading="lazy" width="65" height="65" decoding="async" data-nimg="1" className="max-w-[40px] md:max-w-[65px]" style={{ color: "transparent" }} src="https://cdn.10minuteschool.com/images/hscbag_1732778180651.png?w=65&amp;h=65" /></div>
                    <h4 className="text-xs md:text-base whitespace-nowrap">HSC ২৫, ২৬ </h4>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <a className="text-green hover:underline flex items-center gap-1" href="https://10minuteschool.com/event/hsc-online-batch">
                    ফ্রি ক্লাস বুক করুন
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            <div className="flex-1 min-w-0">
              <div className="relative bg-[linear-gradient(180deg,rgba(150,96,20,0.40)_0%,rgba(59,37,6,0.40)_100%)] rounded-[34px] border border-[#64523D] text-center px-6 pt-10 pb-4 md:pb-8">
                <h2 className="absolute text-[#F29D1F] border border-[#F29D1F] inline-block rounded-full px-[20px] py-[4px] bg-[#583112] mb-10 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">অনলাইন কোর্স</h2>
                <h3 className="md:text-2xl max-w-[360px] mb-4 mx-auto">পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন</h3>
                <div className="mb-4 md:mb-6">
                  <div className="tenms-carousel relative  dark right">
                    <div className="w-full overflow-hidden">
                      <div className="cursor-pointer absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer mx-lg:hidden ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mr-2">
                          <g filter="url(#filter0_b_1199_1409)">
                            <rect width="24" height="24" rx="12" fill="white" fillOpacity="0.2"></rect>
                            <path d="M10.5004 15.2292L13.7337 11.9958L10.5004 8.7625C10.1754 8.4375 10.1754 7.9125 10.5004 7.5875C10.8254 7.2625 11.3504 7.2625 11.6754 7.5875L15.5004 11.4125C15.8254 11.7375 15.8254 12.2625 15.5004 12.5875L11.6754 16.4125C11.3504 16.7375 10.8254 16.7375 10.5004 16.4125C10.1837 16.0875 10.1754 15.5542 10.5004 15.2292Z" fill="white"></path>
                          </g>
                          <defs>
                            <filter id="filter0_b_1199_1409" x="-10.9091" y="-10.9091" width="45.8182" height="45.8182" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.45455"></feGaussianBlur>
                              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1199_1409"></feComposite>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1199_1409" result="shape"></feBlend>
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div className="cursor-pointer absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden pointer-events-none opacity-10">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-3">
                          <g filter="url(#filter0_b_1199_1411)">
                            <rect x="24" y="24" width="24" height="24" rx="12" transform="rotate(-180 24 24)" fill="white" fillOpacity="0.2"></rect>
                            <path d="M13.4996 8.77083L10.2663 12.0042L13.4996 15.2375C13.8246 15.5625 13.8246 16.0875 13.4996 16.4125C13.1746 16.7375 12.6496 16.7375 12.3246 16.4125L8.49961 12.5875C8.17461 12.2625 8.17461 11.7375 8.49961 11.4125L12.3246 7.5875C12.6496 7.2625 13.1746 7.2625 13.4996 7.5875C13.8163 7.9125 13.8246 8.44583 13.4996 8.77083Z" fill="white"></path>
                          </g>
                          <defs>
                            <filter id="filter0_b_1199_1411" x="-10.9091" y="-10.9091" width="45.8182" height="45.8182" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.45455"></feGaussianBlur>
                              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1199_1411"></feComposite>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1199_1411" result="shape"></feBlend>
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
                      <a className="w-[94px] flex-shrink-0 snap-start" id="slide_#0" href="https://10minuteschool.com/product/ielts-live-batch/">
                        <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: 0, opacity: 1 }}>
                          <img alt="image" data-original-src="https://cdn.10ms.com/builder/sections/resources/images/IELTS-Live-Batch-Web-Carousel-5_%281%29_1724224897864.jpg" draggable="false" loading="lazy" width="94" height="133" decoding="async" data-nimg="1" className="rounded-md hover:shadow shadow-lg transition-all duration-300" style={{ color: "transparent" }} src="https://cdn.10ms.com/builder/sections/resources/images/IELTS-Live-Batch-Web-Carousel-5_%281%29_1724224897864.jpg?w=94&amp;h=133" />
                          </div>
                      </a>
                      <a className="w-[94px] flex-shrink-0 snap-start" id="slide_#1" href="https://10minuteschool.com/product/english-grammar-course/?promo=ms1690">
                        <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: 0, opacity: 1 }}><img alt="image" data-original-src="https://cdn.10ms.com/builder/sections/resources/images/GBEG_1719211393710.jpg" draggable="false" loading="lazy" width="94" height="133" decoding="async" data-nimg="1" className="rounded-md hover:shadow shadow-lg transition-all duration-300" style={{ color: "transparent" }} src="https://cdn.10ms.com/builder/sections/resources/images/GBEG_1719211393710.jpg?w=94&amp;h=133" /></div>
                      </a>
                      <a className="w-[94px] flex-shrink-0 snap-start" id="slide_#2" href="https://10minuteschool.com/product/ghore-boshe-spoken-english/?promo=gbse1690">
                        <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: 0, opacity: 1 }}><img alt="image" data-original-src="https://cdn.10ms.com/builder/sections/resources/images/GBSE_1718879517937.jpg" draggable="false" loading="lazy" width="94" height="133" decoding="async" data-nimg="1" className="rounded-md hover:shadow shadow-lg transition-all duration-300" style={{ color: "transparent" }} src="https://cdn.10ms.com/builder/sections/resources/images/GBSE_1718879517937.jpg?w=94&amp;h=133" /></div>
                      </a>
                      <a className="w-[94px] flex-shrink-0 snap-start" id="slide_#3" href="https://10minuteschool.com/skills/courses/50/ielts-course/?promo=IELTS3850">
                        <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: 0, opacity: 1 }}><img alt="image" data-original-src="https://cdn.10minuteschool.com/images/ielts_1700654663556.png" draggable="false" loading="lazy" width="94" height="133" decoding="async" data-nimg="1" className="rounded-md hover:shadow shadow-lg transition-all duration-300" style={{ color: "transparent" }} src="https://cdn.10minuteschool.com/images/ielts_1700654663556.png?w=94&amp;h=133" /></div>
                      </a>
                      <a className="w-[94px] flex-shrink-0 snap-start" id="slide_#4" href="https://10minuteschool.com/product/email-marketing-course/?promo=emkf1690">
                        <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: 0, opacity: 1 }}><img alt="image" data-original-src="https://cdn.10ms.com/builder/sections/resources/images/Emkf_1718879537672.jpg" draggable="false" loading="lazy" width="94" height="133" decoding="async" data-nimg="1" className="rounded-md hover:shadow shadow-lg transition-all duration-300" style={{ color: "transparent" }} src="https://cdn.10ms.com/builder/sections/resources/images/Emkf_1718879537672.jpg?w=94&amp;h=133" /></div>
                      </a>
                      <a className="w-[94px] flex-shrink-0 snap-start" id="slide_#5" href="https://10minuteschool.com/skills/courses/40/facebook-marketing/?promo=FBM890">
                        <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: 0, opacity: 1 }}><img alt="image" data-original-src="https://cdn.10minuteschool.com/images/facebook_marketing_1700654446863.jpg" draggable="false" loading="lazy" width="94" height="133" decoding="async" data-nimg="1" className="rounded-md hover:shadow shadow-lg transition-all duration-300" style={{ color: "transparent" }} src="https://cdn.10minuteschool.com/images/facebook_marketing_1700654446863.jpg?w=94&amp;h=133" /></div>
                      </a>
                      <a className="w-[94px] flex-shrink-0 snap-start" id="slide_#6" href="https://10minuteschool.com/product/professional-graphic-design-course/?promo=GDF1950">
                        <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: 0, opacity: 1 }}><img alt="image" data-original-src="https://cdn.10minuteschool.com/images/graphic_design_kore_freelancing_1733747339479.jpg" draggable="false" loading="lazy" width="94" height="133" decoding="async" data-nimg="1" className="rounded-md hover:shadow shadow-lg transition-all duration-300" style={{ color: "transparent" }} src="https://cdn.10minuteschool.com/images/graphic_design_kore_freelancing_1733747339479.jpg?w=94&amp;h=133" /></div>
                      </a>
                      <a className="w-[94px] flex-shrink-0 snap-start" id="slide_#7" href="https://10minuteschool.com/product/youtube-marketing-course/?promo=YT1950">
                        <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: 0, opacity: 1 }}><img alt="image" data-original-src="https://cdn.10ms.com/builder/sections/resources/images/YT_1727870084815.jpg" draggable="false" loading="lazy" width="94" height="133" decoding="async" data-nimg="1" className="rounded-md hover:shadow shadow-lg transition-all duration-300" style={{ color: "transparent" }} src="https://cdn.10ms.com/builder/sections/resources/images/YT_1727870084815.jpg?w=94&amp;h=133" /></div>
                      </a>
                    </div>
                  </div>
                </div>
                <a className="text-green hover:underline flex justify-center items-center gap-1" href="https://10minuteschool.com/en/categories/free/?ref=FreeCourse_text">
                  ৩০+ ফ্রি কোর্সে এনরোল হতে ক্লিক করুন
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative bg-[linear-gradient(180deg,rgba(123,21,21,0.40)_0%,rgba(59,6,6,0.40)_100%)] rounded-[34px] border border-[#592327] text-center px-2 md:px-6 pt-10 pb-8 mt-20">
            <h2 className="absolute text-[#E64040] border border-[#E64040] inline-block rounded-full px-[20px] py-[6px] bg-[#441818] mb-10 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              অফলাইন সেন্টার
            </h2>
            <h3 className="md:text-2xl max-w-[470px] mb-4 mx-auto">
              অনলাইনে ৫ লক্ষাধিক শিক্ষার্থীকে ইংরেজি শিখিয়ে আমরা এখন অফলাইনে
            </h3>
            <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
              <ul className="flex flex-nowrap items-center gap-2 md:justify-center mb-6">
                <a
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-white/5 flex items-center gap-2 text-sm snap-center"
                  href="https://www.google.com/maps/place/10+Minute+School+English+Centre+(Uttara)/@23.8645579,90.3963086,17z/data=!4m7!3m6!1s0x3755c5b9650f1f69:0x5e5b69cc4630435f!8m2!3d23.8645583!4d90.3988842!15sCj44dGggRmxvb3IsIE1pbGxlbm5pdW0gVG93ZXIsIEhvdXNlIDIsIFJvYWQgNywgU2VjdG9yIDMsIFV0dGFyYZIBEGVkdWNhdGlvbl9jZW50ZXLgAQA!16s%2Fg%2F11vr95pdw8?entry=tts"
                >
                  <span className="bg-white/5 p-2 rounded-full inline-block">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                        strokeWidth={0}
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="whitespace-nowrap">উত্তরা</span>
                </a>
                <a
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-white/5 flex items-center gap-2 text-sm snap-center"
                  href="https://maps.app.goo.gl/5S6zt16obZspNfA28?g_st=com.google.maps.preview.copy"
                >
                  <span className="bg-white/5 p-2 rounded-full inline-block">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                        strokeWidth={0}
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="whitespace-nowrap">পান্থপথ</span>
                </a>
                <a
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-white/5 flex items-center gap-2 text-sm snap-center"
                  href="https://www.google.com/maps/place/10+Minute+School+English+Centre+(Mirpur)/@23.8044657,90.3693722,15z/data=!4m6!3m5!1s0x3755c1ad1ad1b665:0x6bca269305be939d!8m2!3d23.8044657!4d90.3693722!16s%2Fg%2F11lnrxpzk8?entry=tts&g_ep=EgoyMDI0MDkxMS4wKgBIAVAD"
                >
                  <span className="bg-white/5 p-2 rounded-full inline-block">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                        strokeWidth={0}
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="whitespace-nowrap">মিরপুর</span>
                </a>
                <a
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-white/5 flex items-center gap-2 text-sm snap-center"
                  href="https://www.google.com/maps/place/10+Minute+School+English+Centre+Moghbazar/@23.7490976,90.4048202,17z/data=!4m6!3m5!1s0x3755b9b9609f3105:0xa35b9e083d068494!8m2!3d23.7490979!4d90.4078299!16s%2Fg%2F11wqdj3dp1?entry=tts&g_ep=EgoyMDI0MTAyOS4wIPu8ASoASAFQAw%3D%3D"
                >
                  <span className="bg-white/5 p-2 rounded-full inline-block">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                        strokeWidth={0}
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="whitespace-nowrap">মগবাজার</span>
                </a>
                <a
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-white/5 flex items-center gap-2 text-sm snap-center"
                  href="#"
                >
                  <span className="bg-white/5 p-2 rounded-full inline-block">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                        strokeWidth={0}
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="whitespace-nowrap">চকবাজার, চট্টগ্রাম</span>
                </a>
              </ul>

            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
              <a
                className="flex flex-1 gap-3 items-center rounded-2xl px-4 py-3 backdrop-blur-sm md:max-w-[33.33%]"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255, 255, 255, 0.10)"
                }}
                href="https://10minuteschool.com/product/spoken-english-junior/"
              >
                <div>
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <img
                      alt="image"
                      data-original-src="https://cdn.10minuteschool.com/images/SEJ_Thumbnails_1x1_%281%29_1732778436068.png"
                      draggable="false"
                      loading="lazy"
                      width="94"
                      height="94"
                      decoding="async"
                      data-nimg="1"
                      className="rounded-lg"
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/SEJ_Thumbnails_1x1_%281%29_1732778436068.png?w=94&h=94"
                    />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <span className="text-[#EEA513] text-xs">ভর্তি চলছে .....</span>
                  <h4 className="text-sm mb-1">Spoken English Junior</h4>
                  <p className="text-gray-400 text-xs">৪র্থ-১০ম শ্রেণির শিক্ষার্থীদের জন্য</p>
                </div>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                  </svg>
                </div>
              </a>
              <a
                className="flex flex-1 gap-3 items-center rounded-2xl px-4 py-3 backdrop-blur-sm md:max-w-[33.33%]"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255, 255, 255, 0.10)"
                }}
                href="https://10minuteschool.com/product/spoken-english-junior/"
              >
                <div>
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <img
                      alt="image"
                      data-original-src="https://cdn.10minuteschool.com/images/SEJ_Thumbnails_1x1_%281%29_1732778436068.png"
                      draggable="false"
                      loading="lazy"
                      width="94"
                      height="94"
                      decoding="async"
                      data-nimg="1"
                      className="rounded-lg"
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/SEJ_Thumbnails_1x1_%281%29_1732778436068.png?w=94&h=94"
                    />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <span className="text-[#EEA513] text-xs">ভর্তি চলছে .....</span>
                  <h4 className="text-sm mb-1">Spoken English Junior</h4>
                  <p className="text-gray-400 text-xs">৪র্থ-১০ম শ্রেণির শিক্ষার্থীদের জন্য</p>
                </div>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                  </svg>
                </div>
              </a>
              <a
                className="flex flex-1 gap-3 items-center rounded-2xl px-4 py-3 backdrop-blur-sm md:max-w-[33.33%]"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255, 255, 255, 0.10)"
                }}
                href="https://10minuteschool.com/product/spoken-english-junior/"
              >
                <div>
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <img
                      alt="image"
                      data-original-src="https://cdn.10minuteschool.com/images/SEJ_Thumbnails_1x1_%281%29_1732778436068.png"
                      draggable="false"
                      loading="lazy"
                      width="94"
                      height="94"
                      decoding="async"
                      data-nimg="1"
                      className="rounded-lg"
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/SEJ_Thumbnails_1x1_%281%29_1732778436068.png?w=94&h=94"
                    />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <span className="text-[#EEA513] text-xs">ভর্তি চলছে .....</span>
                  <h4 className="text-sm mb-1">Spoken English Junior</h4>
                  <p className="text-gray-400 text-xs">৪র্থ-১০ম শ্রেণির শিক্ষার্থীদের জন্য</p>
                </div>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                  </svg>
                </div>
              </a>
              {/* Repeat similar structure for other programs */}
            </div>
          </div>

        </div>
      </div>
      <div className="section visible">
        <div className="container py-8 md:py-28 mx-auto">
          <div className="md:mb-20">
            <div className="mx-auto px-4 text-center" style={{ color: "initial", maxWidth: "744px" }}>
              <h2
                className="flex items-center justify-center gap-2 pb-3 text-sm font-medium md:pb-6 md:text-lg"
                style={{ color: "#F0766A" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <mask
                    id="mask0_9494_69179"
                    style={{ maskType: "alpha" }}
                    width="24"
                    height="24"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path fill="#D9D9D9" d="M0 0H24V24H0z" />
                  </mask>
                  <g mask="url(#mask0_9494_69179)">
                    <path
                      fill="#F0766A"
                      fillRule="evenodd"
                      d="M12.226 5.748a1.312 1.312 0 100-2.624 1.312 1.312 0 000 2.624zm0 1.125a2.436 2.436 0 100-4.873 2.436 2.436 0 000 4.873z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="#F0766A"
                      d="M19.873 13.925c.81 0 1.466.657 1.466 1.466v3.265c0 .732-.485 1.322-1.087 1.322a1.845 1.845 0 01-1.845-1.845V15.39c0-.81.657-1.466 1.466-1.466zM4.138 13.925c-.81 0-1.466.657-1.466 1.466v3.265c0 .732.485 1.322 1.087 1.322a1.845 1.845 0 001.845-1.845v-2.741c0-.81-.657-1.466-1.466-1.466z"
                    />
                    <path
                      fill="#F79C89"
                      d="M19.35 8.916V20.09a1.851 1.851 0 01-1.852 1.851H6.506a1.851 1.851 0 01-1.85-1.85V8.915a4.618 4.618 0 014.617-4.618h5.458a4.618 4.618 0 014.618 4.618z"
                    />
                    <path
                      fill="#FFF5F5"
                      d="M17.66 14.3v4.826c0 .47-.382.851-.852.851H7.203a.852.852 0 01-.851-.851V14.3c0-.47.38-.852.851-.852h9.605c.47 0 .851.381.851.852z"
                    />
                    <path
                      fill="#F79C89"
                      d="M16.101 15.132v.231c0 .08-.064.145-.144.145H8.051a.144.144 0 01-.144-.145v-.23c0-.08.065-.145.144-.145h7.906c.08 0 .144.065.144.144z"
                    />
                    <path
                      fill="#F9FAFB"
                      d="M14.463 9.485a2.16 2.16 0 11-4.32.002 2.16 2.16 0 014.32-.002z"
                    />
                  </g>
                </svg>
                <span>ক্লাস ৬-১০</span>
              </h2>
              <div className="mx-auto">
                <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] text-[#111827]">
                  বছর জুড়ে অনলাইন ব্যাচে কী কী থাকছে?
                </h2>
              </div>
              <div className="mb-7 text-sm font-normal leading-[22px] md:mb-4 md:text-lg md:leading-7 md:tracking-normal text-[#4B5563]">
                সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক পড়াশুনার অগ্রযাত্রা
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 md:flex-row">
              {/* Repeat similar JSX structure for the next sections */}
              <div className="flex-1 rounded-md border p-3">
                <div className="youtube-video mb-6 aspect-video w-full overflow-hidden rounded-md">
                  <div className="relative">
                    <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                      <div
                        className="opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="Play The Video"
                          src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg?w=100&h=100"
                          width="100"
                          height="100"
                          className="max-w-[20vw]"
                          style={{ color: "transparent" }}
                          draggable="false"
                          fetchPriority="high"
                          decoding="async"
                        />
                      </div>
                    </span>
                    <div className="thumb-wrap">
                      <span>
                        <div
                          className="opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: 0, opacity: 1 }}
                        >
                          <img
                            alt="image"
                            src="https://cdn.10minuteschool.com/images/thumbnail_course_trailer_1711009830914.jpg?w=867&h=480"
                            width="867"
                            height="480"
                            className="w-full"
                            style={{ color: "transparent" }}
                            draggable="false"
                            fetchPriority="high"
                            decoding="async"
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">সব বিষয়ের প্রতি অধ্যায়েই হবে ইচ্ছেমত অনুশীলন</h3>
                  <div>
                    <p className="text-sm font-normal text-gray-500 md:text-base">
                      অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক প্রশ্ন অনুশীলনের সুযোগ।
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-md border p-3">
                <div className="youtube-video mb-6 aspect-video w-full overflow-hidden rounded-md">
                  <div className="relative">
                    <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                      <div
                        className="opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="Play The Video"
                          src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg?w=100&h=100"
                          width="100"
                          height="100"
                          className="max-w-[20vw]"
                          style={{ color: "transparent" }}
                          draggable="false"
                          fetchPriority="high"
                          decoding="async"
                        />
                      </div>
                    </span>
                    <div className="thumb-wrap">
                      <span>
                        <div
                          className="opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: 0, opacity: 1 }}
                        >
                          <img
                            alt="image"
                            src="https://cdn.10minuteschool.com/images/thumbnail_course_trailer_1711009830914.jpg?w=867&h=480"
                            width="867"
                            height="480"
                            className="w-full"
                            style={{ color: "transparent" }}
                            draggable="false"
                            fetchPriority="high"
                            decoding="async"
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">সব বিষয়ের প্রতি অধ্যায়েই হবে ইচ্ছেমত অনুশীলন</h3>
                  <div>
                    <p className="text-sm font-normal text-gray-500 md:text-base">
                      অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক প্রশ্ন অনুশীলনের সুযোগ।
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-md border p-3">
                <div className="youtube-video mb-6 aspect-video w-full overflow-hidden rounded-md">
                  <div className="relative">
                    <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                      <div
                        className="opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="Play The Video"
                          src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg?w=100&h=100"
                          width="100"
                          height="100"
                          className="max-w-[20vw]"
                          style={{ color: "transparent" }}
                          draggable="false"
                          fetchPriority="high"
                          decoding="async"
                        />
                      </div>
                    </span>
                    <div className="thumb-wrap">
                      <span>
                        <div
                          className="opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: 0, opacity: 1 }}
                        >
                          <img
                            alt="image"
                            src="https://cdn.10minuteschool.com/images/thumbnail_course_trailer_1711009830914.jpg?w=867&h=480"
                            width="867"
                            height="480"
                            className="w-full"
                            style={{ color: "transparent" }}
                            draggable="false"
                            fetchPriority="high"
                            decoding="async"
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">সব বিষয়ের প্রতি অধ্যায়েই হবে ইচ্ছেমত অনুশীলন</h3>
                  <div>
                    <p className="text-sm font-normal text-gray-500 md:text-base">
                      অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক প্রশ্ন অনুশীলনের সুযোগ।
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-md border p-3">
                <div className="youtube-video mb-6 aspect-video w-full overflow-hidden rounded-md">
                  <div className="relative">
                    <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                      <div
                        className="opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="Play The Video"
                          src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg?w=100&h=100"
                          width="100"
                          height="100"
                          className="max-w-[20vw]"
                          style={{ color: "transparent" }}
                          draggable="false"
                          fetchPriority="high"
                          decoding="async"
                        />
                      </div>
                    </span>
                    <div className="thumb-wrap">
                      <span>
                        <div
                          className="opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: 0, opacity: 1 }}
                        >
                          <img
                            alt="image"
                            src="https://cdn.10minuteschool.com/images/thumbnail_course_trailer_1711009830914.jpg?w=867&h=480"
                            width="867"
                            height="480"
                            className="w-full"
                            style={{ color: "transparent" }}
                            draggable="false"
                            fetchPriority="high"
                            decoding="async"
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">সব বিষয়ের প্রতি অধ্যায়েই হবে ইচ্ছেমত অনুশীলন</h3>
                  <div>
                    <p className="text-sm font-normal text-gray-500 md:text-base">
                      অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক প্রশ্ন অনুশীলনের সুযোগ।
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="my-5 md:my-0">
            <div className="flex justify-center mt-2 md:mt-6 md:pt-12">
              <a
                className="bg-[#1CAB55] group hover:bg-[#198b46] transition-colors duration-300 flex gap-2 justify-center items-center text-white font-medium py-3 pl-7 pr-5 rounded"
                href="/academic/"
              >
                আপনার ক্লাস বেছে নিন
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          </div>


        </div>

        <div className="section section-padding bg-[#F4F7FD] py-8 md:py-[120px] visible ">
          <div className="mb-10">
            <div
              className="mx-auto px-4 text-center"
              style={{ color: "initial", maxWidth: "744px" }}
            >
              <h2
                className="flex items-center justify-center gap-2 pb-3 text-sm font-medium md:pb-6 md:text-lg"
                style={{ color: "#183CAF" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2263 3.7481C10.9508 3.7481 11.5382 3.16074 11.5382 2.43618C11.5382 1.71163 10.9508 1.12426 10.2263 1.12426C9.50172 1.12426 8.91435 1.71163 8.91435 2.43618C8.91435 3.16074 9.50172 3.7481 10.2263 3.7481ZM10.2263 4.87261C11.5719 4.87261 12.6627 3.78178 12.6627 2.43618C12.6627 1.09058 11.5719 -0.000244141 10.2263 -0.000244141C8.88067 -0.000244141 7.78984 1.09058 7.78984 2.43618C7.78984 3.78178 8.88067 4.87261 10.2263 4.87261Z"
                    fill="#183CAF"
                  />
                  <path
                    d="M17.873 11.9253C18.6826 11.9253 19.339 12.5816 19.339 13.3913V16.656C19.339 17.3876 18.8536 17.9776 18.2519 17.9776C17.233 17.9776 16.407 17.1516 16.407 16.1327V13.3913C16.407 12.5816 17.0634 11.9253 17.873 11.9253Z"
                    fill="#183CAF"
                  />
                  <path
                    d="M2.13783 11.9255C1.32821 11.9255 0.671875 12.5819 0.671875 13.3915V16.6562C0.671875 17.3878 1.1572 17.9778 1.75894 17.9778C2.77783 17.9778 3.60379 17.1519 3.60379 16.133V13.3915C3.60379 12.5819 2.94746 11.9255 2.13783 11.9255Z"
                    fill="#183CAF"
                  />
                  <path
                    d="M17.3494 6.91567V18.0911C17.3494 19.1134 16.5206 19.9422 15.4983 19.9422H4.50657C3.48424 19.9422 2.65547 19.1134 2.65547 18.0911V6.91567C2.65547 4.36532 4.72294 2.29785 7.27329 2.29785H12.7316C15.2819 2.29785 17.3494 4.36532 17.3494 6.91567V6.91567Z"
                    fill="#306BF4"
                  />
                  <path
                    d="M15.6591 12.3007V17.1257C15.6591 17.5959 15.2779 17.9772 14.8076 17.9772H5.20303C4.73278 17.9772 4.35156 17.5959 4.35156 17.1257V12.3007C4.35156 11.8304 4.73278 11.4492 5.20303 11.4492H14.8076C15.2779 11.4492 15.6591 11.8304 15.6591 12.3007Z"
                    fill="#ACCCFD"
                  />
                  <path
                    d="M14.1014 13.1321V13.3634C14.1014 13.443 14.037 13.5075 13.9574 13.5075H6.05146C5.97191 13.5075 5.90742 13.443 5.90742 13.3634V13.1321C5.90742 13.0525 5.97191 12.988 6.05146 12.988H13.9574C14.037 12.988 14.1014 13.0525 14.1014 13.1321Z"
                    fill="#306BF4"
                  />
                  <path
                    d="M12.4626 7.4854C12.4626 8.67892 11.496 9.64548 10.3025 9.64548C9.10914 9.64548 8.14258 8.67892 8.14258 7.4854C8.14258 6.292 9.10914 5.32544 10.3025 5.32544C11.496 5.32544 12.4626 6.292 12.4626 7.4854V7.4854Z"
                    fill="#D5E6FE"
                  />
                </svg>
                <span>SSC &amp; HSC</span>
              </h2>
              <div className="mx-auto">
                <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] text-[#111827]">
                  SSC ও HSC শিক্ষার্থীদের জন্য
                </h2>
              </div>
            </div>
          </div>

          <div className="flex justify-center pb-20">
            <div className="overflow-x-auto md:w-3/4 max-w-screen-xl">
              <div className="container mx-auto">
                <div className="md:flex md:flex-nowrap gap-6 justify-start">
                  {/* First card */}
                  <a href="/product/hsc-2026-online-batch/">
                    <div className="my-0 mb-4 flex h-full w-full cursor-pointer flex-row gap-4 rounded-none border-b border-[#E5E7EB] pb-4 transition-colors duration-200 sm:max-w-[200px] sm:flex-col sm:rounded sm:border sm:pb-0 md:min-w-[272px] md:hover:border-green xs:border-dashed">
                      <div className="w-auto min-w-[100px] max-w-[144px] overflow-hidden rounded sm:max-w-full sm:rounded-b-none">
                        <img
                          alt="HSC 26 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)"
                          src="https://cdn.10minuteschool.com/images/thumbnails/HSC_26_OB_Thumbnails/hsc-2026-online-batch-science-group-thumbnail.jpg?w=272&h=152"
                          className=""
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between rounded-bl-[4px] rounded-br-[4px] p-0 sm:p-[14px]">
                        <div>
                          <h2 className="mb-1 text-sm font-semibold line-clamp-2 md:text-lg">
                            HSC 26 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)
                          </h2>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-[600] text-[#1DAB55] md:text-lg">
                            ৳ 3500
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/product/hsc-2026-online-batch/">
                    <div className="my-0 mb-4 flex h-full w-full cursor-pointer flex-row gap-4 rounded-none border-b border-[#E5E7EB] pb-4 transition-colors duration-200 sm:max-w-[200px] sm:flex-col sm:rounded sm:border sm:pb-0 md:min-w-[272px] md:hover:border-green xs:border-dashed">
                      <div className="w-auto min-w-[100px] max-w-[144px] overflow-hidden rounded sm:max-w-full sm:rounded-b-none">
                        <img
                          alt="HSC 26 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)"
                          src="https://cdn.10minuteschool.com/images/thumbnails/HSC_26_OB_Thumbnails/hsc-2026-online-batch-science-group-thumbnail.jpg?w=272&h=152"
                          className=""
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between rounded-bl-[4px] rounded-br-[4px] p-0 sm:p-[14px]">
                        <div>
                          <h2 className="mb-1 text-sm font-semibold line-clamp-2 md:text-lg">
                            HSC 26 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)
                          </h2>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-[600] text-[#1DAB55] md:text-lg">
                            ৳ 3500
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/product/hsc-2026-online-batch/">
                    <div className="my-0 mb-4 flex h-full w-full cursor-pointer flex-row gap-4 rounded-none border-b border-[#E5E7EB] pb-4 transition-colors duration-200 sm:max-w-[200px] sm:flex-col sm:rounded sm:border sm:pb-0 md:min-w-[272px] md:hover:border-green xs:border-dashed">
                      <div className="w-auto min-w-[100px] max-w-[144px] overflow-hidden rounded sm:max-w-full sm:rounded-b-none">
                        <img
                          alt="HSC 26 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)"
                          src="https://cdn.10minuteschool.com/images/thumbnails/HSC_26_OB_Thumbnails/hsc-2026-online-batch-science-group-thumbnail.jpg?w=272&h=152"
                          className=""
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between rounded-bl-[4px] rounded-br-[4px] p-0 sm:p-[14px]">
                        <div>
                          <h2 className="mb-1 text-sm font-semibold line-clamp-2 md:text-lg">
                            HSC 26 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)
                          </h2>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-[600] text-[#1DAB55] md:text-lg">
                            ৳ 3500
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/product/hsc-2026-online-batch/">
                    <div className="my-0 mb-4 flex h-full w-full cursor-pointer flex-row gap-4 rounded-none border-b border-[#E5E7EB] pb-4 transition-colors duration-200 sm:max-w-[200px] sm:flex-col sm:rounded sm:border sm:pb-0 md:min-w-[272px] md:hover:border-green xs:border-dashed">
                      <div className="w-auto min-w-[100px] max-w-[144px] overflow-hidden rounded sm:max-w-full sm:rounded-b-none">
                        <img
                          alt="HSC 26 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)"
                          src="https://cdn.10minuteschool.com/images/thumbnails/HSC_26_OB_Thumbnails/hsc-2026-online-batch-science-group-thumbnail.jpg?w=272&h=152"
                          className=""
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between rounded-bl-[4px] rounded-br-[4px] p-0 sm:p-[14px]">
                        <div>
                          <h2 className="mb-1 text-sm font-semibold line-clamp-2 md:text-lg">
                            HSC 26 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)
                          </h2>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-[600] text-[#1DAB55] md:text-lg">
                            ৳ 3500
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* Repeat similar JSX structure for other cards */}
                </div>
              </div>
            </div>
          </div>

          <div className="section py-8 bg-black md:py-28 visible ">
            <div className="mb-14">
              <div
                className="mx-auto px-4 text-center"
                style={{ color: "#ffffff", maxWidth: 744 }}
              >
                <h2 className="flex items-center justify-center gap-2 pb-3 text-sm font-medium md:pb-6 md:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={24}
                    fill="none"
                    viewBox="0 0 25 24"
                  >
                    <g clipPath="url(#clip0_9507_68394)">
                      <path
                        fill="#EE7673"
                        d="M10.897 6.54a.704.704 0 00-.658-.34l-5.713.442a1.856 1.856 0 00-1.414.832L.714 11.101A1.28 1.28 0 00.61 12.33c.178.402.543.682.978.75l4.633.717a.702.702 0 00.7-.316l3.964-6.2a.703.703 0 00.01-.74zM17.96 13.603a.703.703 0 00-.74.01l-6.201 3.964a.703.703 0 00-.316.7l.717 4.634A1.28 1.28 0 0012.691 24c.248 0 .494-.072.708-.214l3.627-2.398c.484-.32.787-.835.832-1.414l.441-5.713a.703.703 0 00-.34-.658z"
                      />
                      <path
                        fill="#FFCD6B"
                        d="M9.542 19.325c.28.28.677.411 1.067.346 5.724-.957 10.254-5.696 11.978-9.03 1.915-3.702 1.986-7.614 1.886-9.449A1.232 1.232 0 0023.309.028c-1.835-.1-5.747-.03-9.449 1.886-3.334 1.724-8.073 6.254-9.03 11.978-.065.39.066.788.345 1.067l4.367 4.366z"
                      />
                      <path
                        fill="#FDC72E"
                        d="M1.218 19.779a.7.7 0 00.497-.206l2.296-2.296a.703.703 0 00-.995-.994L.721 18.578a.703.703 0 00.497 1.2zM6.114 18.387a.703.703 0 00-.995 0L.706 22.8a.703.703 0 00.994.994l4.414-4.413a.703.703 0 000-.994zM8.219 20.49a.703.703 0 00-.995 0L4.93 22.785a.703.703 0 10.994.994l2.296-2.295a.703.703 0 000-.994z"
                      />
                      <path
                        fill="#fff"
                        d="M16.94 5.452c-.54 0-1.08.205-1.491.617a2.095 2.095 0 00-.618 1.491 2.112 2.112 0 004.219 0c0-.563-.22-1.093-.618-1.491a2.103 2.103 0 00-1.492-.617z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_9507_68394">
                        <path fill="#fff" d="M0 0H24V24H0z" transform="translate(.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>স্কিলস</span>
                </h2>
                <div className=" mx-auto">
                  <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] ">
                    দেশসেরা স্কিল ডেভেলপমেন্ট প্লাটফর্ম
                  </h2>
                </div>
                <div className="mb-7 text-sm font-normal leading-[22px] md:mb-4 md:text-lg md:leading-7 md:tracking-normal text-[#9CA3AF]">
                  <ul className="flex flex-wrap justify-center gap-3 md:gap-6">
                    <li className="flex items-center gap-1 md:gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#6294F8"
                          fillRule="evenodd"
                          d="M16.295 9.605l-4.568 6a1 1 0 01-.789.395h-.007c-.307 0-.597-.142-.787-.383l-2.432-3.108a1 1 0 111.575-1.232l1.633 2.087 3.784-4.97a1 1 0 011.591 1.211zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                          clipRule="evenodd"
                        />
                        <mask
                          id="mask0_9507_68408"
                          style={{ maskType: "alpha" }}
                          width={20}
                          height={21}
                          x={2}
                          y={2}
                          maskUnits="userSpaceOnUse"
                        >
                          <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M16.295 9.605l-4.568 6a1 1 0 01-.789.395h-.007c-.307 0-.597-.142-.787-.383l-2.432-3.108a1 1 0 111.575-1.232l1.633 2.087 3.784-4.97a1 1 0 011.591 1.211zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                            clipRule="evenodd"
                          />
                        </mask>
                        <g mask="url(#mask0_9507_68408)">
                          <path fill="#6294F8" d="M0 0H24V24H0z" />
                        </g>
                      </svg>
                      {/* */}দেশসেরা শিক্ষক
                    </li>
                    <li className="flex items-center gap-1 md:gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#6294F8"
                          fillRule="evenodd"
                          d="M16.295 9.605l-4.568 6a1 1 0 01-.789.395h-.007c-.307 0-.597-.142-.787-.383l-2.432-3.108a1 1 0 111.575-1.232l1.633 2.087 3.784-4.97a1 1 0 011.591 1.211zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                          clipRule="evenodd"
                        />
                        <mask
                          id="mask0_9507_68408"
                          style={{ maskType: "alpha" }}
                          width={20}
                          height={21}
                          x={2}
                          y={2}
                          maskUnits="userSpaceOnUse"
                        >
                          <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M16.295 9.605l-4.568 6a1 1 0 01-.789.395h-.007c-.307 0-.597-.142-.787-.383l-2.432-3.108a1 1 0 111.575-1.232l1.633 2.087 3.784-4.97a1 1 0 011.591 1.211zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                            clipRule="evenodd"
                          />
                        </mask>
                        <g mask="url(#mask0_9507_68408)">
                          <path fill="#6294F8" d="M0 0H24V24H0z" />
                        </g>
                      </svg>
                      {/* */}৫ লাখ+শিক্ষার্থী
                    </li>
                    <li className="flex items-center gap-1 md:gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#6294F8"
                          fillRule="evenodd"
                          d="M16.295 9.605l-4.568 6a1 1 0 01-.789.395h-.007c-.307 0-.597-.142-.787-.383l-2.432-3.108a1 1 0 111.575-1.232l1.633 2.087 3.784-4.97a1 1 0 011.591 1.211zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                          clipRule="evenodd"
                        />
                        <mask
                          id="mask0_9507_68408"
                          style={{ maskType: "alpha" }}
                          width={20}
                          height={21}
                          x={2}
                          y={2}
                          maskUnits="userSpaceOnUse"
                        >
                          <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M16.295 9.605l-4.568 6a1 1 0 01-.789.395h-.007c-.307 0-.597-.142-.787-.383l-2.432-3.108a1 1 0 111.575-1.232l1.633 2.087 3.784-4.97a1 1 0 011.591 1.211zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                            clipRule="evenodd"
                          />
                        </mask>
                        <g mask="url(#mask0_9507_68408)">
                          <path fill="#6294F8" d="M0 0H24V24H0z" />
                        </g>
                      </svg>
                      {/* */}৭০+ অনলাইন কোর্স
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container mb-14 mx-auto">
              <div className="tenms-carousel relative  dark right">
                <div className="w-full overflow-hidden">
                  <div className="cursor-pointer absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer mx-lg:hidden ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={33}
                      height={32}
                      fill="none"
                      viewBox="0 0 33 32"
                      className="xl:mr-[-40px]"
                    >
                      <path
                        fill="#fff"
                        fillOpacity="0.5"
                        fillRule="evenodd"
                        d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="cursor-pointer absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden pointer-events-none opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={33}
                      height={32}
                      fill="none"
                      viewBox="0 0 33 32"
                      className="rotate-180 xl:ml-[-40px]"
                    >
                      <path
                        fill="#fff"
                        fillOpacity="0.5"
                        fillRule="evenodd"
                        d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
                  <div className="cursor-pointer snap-start rounded-xl border bg-[#111827] p-6 transition-all duration-300 hover:border-green hover:bg-[#1c2741]  border-green">
                    <p className="mb-2 text-sm text-gray-300 whitespace-nowrap md:text-base">
                      ভাষা শিক্ষা
                    </p>
                    <p className="text-xs text-gray-400 whitespace-nowrap md:text-sm">
                      23 Courses
                    </p>
                  </div>
                  <div className="cursor-pointer snap-start rounded-xl border bg-[#111827] p-6 transition-all duration-300 hover:border-green hover:bg-[#1c2741]  border-[#111827]">
                    <p className="mb-2 text-sm text-gray-300 whitespace-nowrap md:text-base">
                      ফ্রিল্যান্সিং
                    </p>
                    <p className="text-xs text-gray-400 whitespace-nowrap md:text-sm">
                      10 Courses
                    </p>
                  </div>
                  <div className="cursor-pointer snap-start rounded-xl border bg-[#111827] p-6 transition-all duration-300 hover:border-green hover:bg-[#1c2741]  border-[#111827]">
                    <p className="mb-2 text-sm text-gray-300 whitespace-nowrap md:text-base">
                      বান্ডেল
                    </p>
                    <p className="text-xs text-gray-400 whitespace-nowrap md:text-sm">
                      13 Courses
                    </p>
                  </div>
                  <div className="cursor-pointer snap-start rounded-xl border bg-[#111827] p-6 transition-all duration-300 hover:border-green hover:bg-[#1c2741]  border-[#111827]">
                    <p className="mb-2 text-sm text-gray-300 whitespace-nowrap md:text-base">
                      স্কিলস এন্ড আইটি
                    </p>
                    <p className="text-xs text-gray-400 whitespace-nowrap md:text-sm">
                      23 Courses
                    </p>
                  </div>
                  <div className="cursor-pointer snap-start rounded-xl border bg-[#111827] p-6 transition-all duration-300 hover:border-green hover:bg-[#1c2741]  border-[#111827]">
                    <p className="mb-2 text-sm text-gray-300 whitespace-nowrap md:text-base">
                      ডিজাইন এন্ড ক্রিয়েটিভ
                    </p>
                    <p className="text-xs text-gray-400 whitespace-nowrap md:text-sm">
                      9 Courses
                    </p>
                  </div>
                  <div className="cursor-pointer snap-start rounded-xl border bg-[#111827] p-6 transition-all duration-300 hover:border-green hover:bg-[#1c2741]  border-[#111827]">
                    <p className="mb-2 text-sm text-gray-300 whitespace-nowrap md:text-base">
                      ক্যারিয়ার রেডিনেস
                    </p>
                    <p className="text-xs text-gray-400 whitespace-nowrap md:text-sm">
                      9 Courses
                    </p>
                  </div>
                  <div className="cursor-pointer snap-start rounded-xl border bg-[#111827] p-6 transition-all duration-300 hover:border-green hover:bg-[#1c2741]  border-[#111827]">
                    <p className="mb-2 text-sm text-gray-300 whitespace-nowrap md:text-base">
                      কিডস কোর্সসমূহ
                    </p>
                    <p className="text-xs text-gray-400 whitespace-nowrap md:text-sm">
                      2 Courses
                    </p>
                  </div>
                  <div className="cursor-pointer snap-start rounded-xl border bg-[#111827] p-6 transition-all duration-300 hover:border-green hover:bg-[#1c2741]  border-[#111827]">
                    <p className="mb-2 text-sm text-gray-300 whitespace-nowrap md:text-base">
                      প্রফেশনাল কোর্সসমূহ
                    </p>
                    <p className="text-xs text-gray-400 whitespace-nowrap md:text-sm">
                      9 Courses
                    </p>
                  </div>
                  <div className="cursor-pointer snap-start rounded-xl border bg-[#111827] p-6 transition-all duration-300 hover:border-green hover:bg-[#1c2741]  border-[#111827]">
                    <p className="mb-2 text-sm text-gray-300 whitespace-nowrap md:text-base">
                      ফ্রি কোর্সসমূহ
                    </p>
                    <p className="text-xs text-gray-400 whitespace-nowrap md:text-sm">
                      29 Courses
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="tenms-carousel relative  dark right">
                <div className="w-full overflow-hidden" />
                <div className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
                  <a className="snap-start snap-always" href="/product/ielts-live-batch/">
                    <div className="bg-[#121220] my-0 flex h-full min-w-[200px] max-w-[200px]  cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
                      <div
                        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="IELTS LIVE Batch"
                          data-original-src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg"
                          draggable="false"
                          fetchPriority="high"
                          width={272}
                          height={152}
                          decoding="async"
                          data-nimg={1}
                          className=""
                          src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg?w=272&h=152"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                        <div>
                          <h2 className="mb-1 h-14 text-sm font-semibold line-clamp-2  md:text-lg text-white">
                            IELTS LIVE Batch{" "}
                          </h2>
                          <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                            Zawad Hasan Adib +4
                          </h3>
                        </div>
                        <div>
                          <p className="mt-2 flex gap-1 text-sm text-[#1DAB55]">
                            <span>বিস্তারিত</span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="snap-start snap-always"
                    href="/product/spoken-english-junior-live-batch/"
                  >
                    <div className="bg-[#121220] my-0 flex h-full min-w-[200px] max-w-[200px]  cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
                      <div
                        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="Spoken English Junior LIVE Batch"
                          data-original-src="https://cdn.10minuteschool.com/images/catalog/media/sej-thumbnial_1734278669669.jpg"
                          draggable="false"
                          fetchPriority="high"
                          width={272}
                          height={152}
                          decoding="async"
                          data-nimg={1}
                          className=""
                          src="https://cdn.10minuteschool.com/images/catalog/media/sej-thumbnial_1734278669669.jpg?w=272&h=152"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                        <div>
                          <h2 className="mb-1 h-14 text-sm font-semibold line-clamp-2  md:text-lg text-white">
                            Spoken English Junior LIVE Batch{" "}
                          </h2>
                          <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                            Rukhsar Sanjaree +4
                          </h3>
                        </div>
                        <div>
                          <p className="mt-2 flex gap-1 text-sm text-[#1DAB55]">
                            <span>বিস্তারিত</span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="snap-start snap-always"
                    href="/product/ghore-boshe-spoken-english/"
                  >
                    <div className="bg-[#121220] my-0 flex h-full min-w-[200px] max-w-[200px]  cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
                      <div
                        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="ঘরে বসে Spoken English"
                          data-original-src="https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg"
                          draggable="false"
                          fetchPriority="high"
                          width={272}
                          height={152}
                          decoding="async"
                          data-nimg={1}
                          className=""
                          src="https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg?w=272&h=152"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                        <div>
                          <h2 className="mb-1 h-14 text-sm font-semibold line-clamp-2  md:text-lg text-white">
                            ঘরে বসে Spoken English{" "}
                          </h2>
                          <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                            Munzereen Shahid
                          </h3>
                        </div>
                        <div>
                          <p className="mt-2 flex gap-1 text-sm text-[#1DAB55]">
                            <span>বিস্তারিত</span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="snap-start snap-always" href="/product/ielts-course/">
                    <div className="bg-[#121220] my-0 flex h-full min-w-[200px] max-w-[200px]  cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
                      <div
                        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="IELTS Course by Munzereen Shahid"
                          data-original-src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                          draggable="false"
                          fetchPriority="high"
                          width={272}
                          height={152}
                          decoding="async"
                          data-nimg={1}
                          className=""
                          src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png?w=272&h=152"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                        <div>
                          <h2 className="mb-1 h-14 text-sm font-semibold line-clamp-2  md:text-lg text-white">
                            IELTS Course by Munzereen Shahid{" "}
                          </h2>
                          <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                            Munzereen Shahid
                          </h3>
                        </div>
                        <div>
                          <p className="mt-2 flex gap-1 text-sm text-[#1DAB55]">
                            <span>বিস্তারিত</span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="snap-start snap-always"
                    href="/product/english-grammar-course/"
                  >
                    <div className="bg-[#121220] my-0 flex h-full min-w-[200px] max-w-[200px]  cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
                      <div
                        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="Complete English Grammar Course"
                          data-original-src="https://cdn.10minuteschool.com/images/thumbnails/complete-grammar-course-thumbnail.jpg"
                          draggable="false"
                          fetchPriority="high"
                          width={272}
                          height={152}
                          decoding="async"
                          data-nimg={1}
                          className=""
                          src="https://cdn.10minuteschool.com/images/thumbnails/complete-grammar-course-thumbnail.jpg?w=272&h=152"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                        <div>
                          <h2 className="mb-1 h-14 text-sm font-semibold line-clamp-2  md:text-lg text-white">
                            Complete English Grammar Course{" "}
                          </h2>
                          <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                            Munzereen Shahid
                          </h3>
                        </div>
                        <div>
                          <p className="mt-2 flex gap-1 text-sm text-[#1DAB55]">
                            <span>বিস্তারিত</span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="snap-start snap-always"
                    href="/product/spoken-arabic-language-course/"
                  >
                    <div className="bg-[#121220] my-0 flex h-full min-w-[200px] max-w-[200px]  cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
                      <div
                        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="সহজে Spoken আরবি"
                          data-original-src="https://cdn.10minuteschool.com/images/Thumbnails/sohoje_spoken_arbi_16x9.jpg"
                          draggable="false"
                          fetchPriority="high"
                          width={272}
                          height={152}
                          decoding="async"
                          data-nimg={1}
                          className=""
                          src="https://cdn.10minuteschool.com/images/Thumbnails/sohoje_spoken_arbi_16x9.jpg?w=272&h=152"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                        <div>
                          <h2 className="mb-1 h-14 text-sm font-semibold line-clamp-2  md:text-lg text-white">
                            সহজে Spoken আরবি{" "}
                          </h2>
                          <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                            Mahade Hasan
                          </h3>
                        </div>
                        <div>
                          <p className="mt-2 flex gap-1 text-sm text-[#1DAB55]">
                            <span>বিস্তারিত</span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="snap-start snap-always"
                    href="/product/ielts-reading-and-listening-mock-tests/"
                  >
                    <div className="bg-[#121220] my-0 flex h-full min-w-[200px] max-w-[200px]  cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
                      <div
                        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="IELTS Reading & Listening Mock Tests"
                          data-original-src="https://cdn.10minuteschool.com/images/Thumbnails/IELTS-Listening-Reading-Mock-Tests-Course-Thumbnail_discount-30_16_9.jpg"
                          draggable="false"
                          fetchPriority="high"
                          width={272}
                          height={152}
                          decoding="async"
                          data-nimg={1}
                          className=""
                          src="https://cdn.10minuteschool.com/images/Thumbnails/IELTS-Listening-Reading-Mock-Tests-Course-Thumbnail_discount-30_16_9.jpg?w=272&h=152"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                        <div>
                          <h2 className="mb-1 h-14 text-sm font-semibold line-clamp-2  md:text-lg text-white">
                            IELTS Reading &amp; Listening Mock Tests{" "}
                          </h2>
                        </div>
                        <div>
                          <p className="mt-2 flex gap-1 text-sm text-[#1DAB55]">
                            <span>বিস্তারিত</span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="snap-start snap-always"
                    href="/product/easy-quran-reading/"
                  >
                    <div className="bg-[#121220] my-0 flex h-full min-w-[200px] max-w-[200px]  cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
                      <div
                        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="২৪ ঘণ্টায় কোরআন শিখি"
                          data-original-src="https://cdn.10minuteschool.com/images/catalog/media/%C3%A0%C2%A7%C2%A8%C3%A0%C2%A7%C2%AA-%C3%A0%C2%A6%C2%98%C3%A0%C2%A6%C2%A3%C3%A0%C2%A7%C2%8D%C3%A0%C2%A6%C2%9F%C3%A0%C2%A6%C2%BE%C3%A0%C2%A6%C2%AF%C3%A0%C2%A6%C2%BC-%C3%A0%C2%A6%C2%95%C3%A0%C2%A7%C2%8B%C3%A0%C2%A6%C2%B0%C3%A0%C2%A6%C2%86%C3%A0%C2%A6%C2%A8-%C3%A0%C2%A6%C2%B6%C3%A0%C2%A6%C2%BF%C3%A0%C2%A6%C2%96%C3%A0%C2%A6%C2%BF---Course-Thumbnail-PSD_1732445930516.jpg"
                          draggable="false"
                          fetchPriority="high"
                          width={272}
                          height={152}
                          decoding="async"
                          data-nimg={1}
                          className=""
                          src="https://cdn.10minuteschool.com/images/catalog/media/%C3%A0%C2%A7%C2%A8%C3%A0%C2%A7%C2%AA-%C3%A0%C2%A6%C2%98%C3%A0%C2%A6%C2%A3%C3%A0%C2%A7%C2%8D%C3%A0%C2%A6%C2%9F%C3%A0%C2%A6%C2%BE%C3%A0%C2%A6%C2%AF%C3%A0%C2%A6%C2%BC-%C3%A0%C2%A6%C2%95%C3%A0%C2%A7%C2%8B%C3%A0%C2%A6%C2%B0%C3%A0%C2%A6%C2%86%C3%A0%C2%A6%C2%A8-%C3%A0%C2%A6%C2%B6%C3%A0%C2%A6%C2%BF%C3%A0%C2%A6%C2%96%C3%A0%C2%A6%C2%BF---Course-Thumbnail-PSD_1732445930516.jpg?w=272&h=152"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                        <div>
                          <h2 className="mb-1 h-14 text-sm font-semibold line-clamp-2  md:text-lg text-white">
                            ২৪ ঘণ্টায় কোরআন শিখি{" "}
                          </h2>
                          <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                            মাওলানা শাইখ মুহাম্মাদ জামাল উদ্দীন
                          </h3>
                        </div>
                        <div>
                          <p className="mt-2 flex gap-1 text-sm text-[#1DAB55]">
                            <span>বিস্তারিত</span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="snap-start snap-always"
                    href="/product/english-for-professionals-course/"
                  >
                    <div className="bg-[#121220] my-0 flex h-full min-w-[200px] max-w-[200px]  cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
                      <div
                        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="English Communication for Professionals"
                          data-original-src="https://cdn.10minuteschool.com/images/thumbnails/english-communication-for-professionals/english-communication-for-professsionals-course-thumbnail---16x9.jpg"
                          draggable="false"
                          fetchPriority="high"
                          width={272}
                          height={152}
                          decoding="async"
                          data-nimg={1}
                          className=""
                          src="https://cdn.10minuteschool.com/images/thumbnails/english-communication-for-professionals/english-communication-for-professsionals-course-thumbnail---16x9.jpg?w=272&h=152"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                        <div>
                          <h2 className="mb-1 h-14 text-sm font-semibold line-clamp-2  md:text-lg text-white">
                            English Communication for Professionals{" "}
                          </h2>
                          <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                            Munzereen Shahid
                          </h3>
                        </div>
                        <div>
                          <p className="mt-2 flex gap-1 text-sm text-[#1DAB55]">
                            <span>বিস্তারিত</span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="snap-start snap-always" href="/product/english-grammar/">
                    <div className="bg-[#121220] my-0 flex h-full min-w-[200px] max-w-[200px]  cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
                      <div
                        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="English Grammar Crash Course"
                          data-original-src="https://cdn.10minuteschool.com/images/thumbnails/skills/english-grammar-crash-course-course-thumbnail-by-sakib-bin-rashid-16x9.jpg"
                          draggable="false"
                          fetchPriority="high"
                          width={272}
                          height={152}
                          decoding="async"
                          data-nimg={1}
                          className=""
                          src="https://cdn.10minuteschool.com/images/thumbnails/skills/english-grammar-crash-course-course-thumbnail-by-sakib-bin-rashid-16x9.jpg?w=272&h=152"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                        <div>
                          <h2 className="mb-1 h-14 text-sm font-semibold line-clamp-2  md:text-lg text-white">
                            English Grammar Crash Course{" "}
                          </h2>
                          <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                            Sakib Bin Rashid
                          </h3>
                        </div>
                        <div>
                          <p className="mt-2 flex gap-1 text-sm text-[#1DAB55]">
                            <span>বিস্তারিত</span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex justify-center mt-2 md:mt-6 md:pt-12">
                <a
                  className="bg-[#1CAB55] group hover:bg-[#198b46] transition-colors duration-300 flex gap-2 justify-center items-center text-white font-medium py-3 pl-7 pr-5 rounded"
                  href="/categories/language-learning/"
                >
                  সকল কোর্স
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>
              <div className="mt-8 rounded-xl bg-[#121220] p-6 md:mt-20 md:px-14">
                <p className="mb-6 text-xl text-center text-gray-400">
                  দেশের সেরা প্রতিষ্ঠানগুলো নিচ্ছে আমাদের কর্পোরেট স্কিলস ডেভেলপমেন্ট
                  প্রোগ্রাম
                </p>
                <div className="mb-4 overflow-x-auto scrollbar-hide">
                  <div className="flex min-w-[800px] flex-nowrap justify-between opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={103}
                      height={70}
                      fill="none"
                      viewBox="0 0 103 70"
                    >
                      <g clipPath="url(#clip0_9507_68452)">
                        <mask
                          id="mask0_9507_68452"
                          style={{ maskType: "alpha" }}
                          width={52}
                          height={58}
                          x={26}
                          y={6}
                          maskUnits="userSpaceOnUse"
                        >
                          <path fill="#fff" d="M77.545 6.1H26.022v57h51.523v-57z" />
                        </mask>
                        <g mask="url(#mask0_9507_68452)">
                          <path
                            fill="#fff"
                            d="M32.658 56.214c-.085-.269-.33-.873-.398-1.319-.148-.987.369-1.638.843-1.787.532-.148.74.12.946.74.266.946.296 2.186.206 3.96-.116 2.425-1.33 5.352-4.344 5.292-2.602-.057-3.754-1.743-3.873-4.315-.057-1.212.03-2.424.532-4.138.266-.917.504-1.244 1.33-1.42.65-.119.59.56.444 1.361-.324 1.773-.474 2.63-.355 4.64.116 2.13 1.094 2.957 2.158 2.957 1.597.03 2.306-1.3 2.603-3.223.234-1.537.057-2.276-.092-2.748zm34.039 2.1c.621 0 .8.735.651 1.18-.148.443-.68.948-1.507 1.095-.178-.445-.267-2.276.856-2.276zM55.14 59.316c0-.501-.268-.915-.59-.915-.27 0-.888.294-.888 1.24 0 .742.263 1.094.384 1.245.855-.268 1.094-.979 1.094-1.57zm-9.196-6.03c-.042-.474-.413-.797-.916-.797-.561 0-1.09.589-1.034 1.328.036.488.324.889.889.889.648 0 1.12-.739 1.06-1.42zm4.807 1.736c-.05-.826-.25-1.2-.695-1.169-.589.036-.86 1.888-.74 3.835.076 1.27.265 1.466.442 1.454.325-.02 1.107-2.29.993-4.12zm19.61 3.112c-.365 1.52-1.476 3.756-3.134 3.756-.383 0-1.063-.149-1.063-.533 0-.414 2.603-.471 2.603-2.453 0-.739-.68-1.775-1.686-1.775-1.33 0-2.627 1.45-2.627 3.46 0 1.802 1.119 2.394 2.242 2.394 1.952 0 3.135-1.598 3.755-2.927.297.887.471 2.927 1.213 2.927.295 0 .503-.148.858-.945.885-1.982 1.743-4.258 2.926-4.258.442 0 .178.8 1.241.8.502 0 .855-.414.855-.89 0-.68-.62-1.21-1.564-1.21-2.78 0-3.37 4.168-3.813 4.168-.74 0-.503-3.34-1.036-3.34-.474-.001-.706.563-.77.826zm-23.648 3.547c.443 0 1.205-.143 1.805-1.104-.343-.761-.588-2.3-.622-2.86-.176-2.867.928-5.562 2.137-5.637.886-.054 1.595.785 1.676 2.144.218 3.57-.971 5.061-1.567 6.348.1.498.947 1.347 1.745 1.347.294 0 .65-.148.74-.268a2.931 2.931 0 01-.12-.857c0-2.069 1.331-3.814 2.485-3.814.916 0 1.448 1.212 1.448 2.012 0 .944-.799 1.715-1.98 2.454.207.205.59.355.916.355 1.687 0 2.569-2.04 3.222-3.904.118-.356.327-.857.74-.857.709 0 1.006 4.671 2.185 4.671.505 0 .917-1.035.917-1.832 0-.592-.207-.651-.207-1.508 0-.946.503-1.743 1.185-1.743.413 0 .563.412.563.913 0 1.893-1.362 5.412-3.37 5.412-1.51 0-1.392-2.602-1.924-2.602-.594 0-1.421 2.63-4.345 2.63-.475 0-.977-.235-1.39-.71-.708.475-1.3.682-1.981.682-1.093 0-1.567-1.124-2.009-1.124-.533 0-1.123 1.153-2.898 1.153-1.42 0-1.656-1.89-2.157-1.89-.445 0-1.124 1.89-1.863 1.89-1.244 0-1.507-3.28-2.603-3.28-.857 0-3.566 3.331-4.3 3.255-.296-.03-.42-.252-.39-.548.042-.409.394-1.504.537-2.021.239-.9.458-1.885.58-2.199.123-.317.45-.543.714-.519.133.013.172.26.214.465.15.73.357 1.476.593 1.476.415 0 1.786-2.631 2.584-2.631.977 0 1.094 4.14 2.424 4.14.444 0 .77-.532 1.065-1.184.03-1.096.326-2.659 1.213-2.659.62 0 .917 1.388.472 2.602-.001 1.447.944 1.802 1.566 1.802z"
                          />
                        </g>
                        <path
                          fill="#fff"
                          d="M67.305 15.323c-.22 0-.534 0-.707-.345-.142-.282-.094-.738-.36-.941.266.078.548.078.768.078.707 0 1.382-.487 1.9-.487.342 0 .452.22.452.44 0 .69-1.393 1.255-2.053 1.255zm.344 1.772c1.63 0 3.123-1.301 3.123-2.446 0-.534-.252-.973-.895-1.052.11.142.156.251.156.502 0 .863-1.314 1.82-2.744 1.82-.518 0-.675.36-.675.549 0 .44.424.627 1.035.627zm-.125.66c.205 1.49 2.462 3.498 3.074 3.45.41-.034.566-1.945.566-3.45 0-.863.047-1.538-.408-1.695-.723 1.46-2.619 1.757-3.232 1.695zM32.217 27.621c.532 0 .423-3.263 1.285-3.263.205 0 .267.204.267.455 0 .737-.36 1.82-.36 2.416 0 .298.078.392.22.392.376 0 1.035-3.593 1.678-3.593.204 0 .297.204.297.408 0 .753-.956 2.918-.956 3.53 0 .094.031.172.11.172.392 0 1.177-1.694 1.427-2.54.141-.44.33-.676.502-.676.157 0 .299.173.299.534 0 .847-.785 2.84-1.475 4.173-.533 1.035-1.364 2.524-1.364 3.356 0 .424.077.863.689 1.396-1.004-.063-1.412-.156-1.788-.94-1.679 3.34 3.09 3.011 1.459 5.975-.299-.532-2.651-1.082-2.651-4.187 0-2.683 2.352-4.252 2.352-5.365a.716.716 0 00-.281-.58c-.519-.44-.534-.8-.942-.8-.297 0-.66.69-.283 1.302.126.204.236.33.236.518 0 .438-.69 1.614-1.176 1.614-.487 0-.863-1.206-.863-3.152 0-1.726.392-3.466.878-3.466.141 0 .188.093.188.22 0 .204-.062.61-.062 1.3 0 .738.172.801.314.801z"
                        />
                        <path
                          fill="#fff"
                          d="M36.216 32.217c.66 0 1.208-.487 1.208-1.568v-1.6c0-.613.047-1.302.456-1.79-.048.205-.048.424-.048.628 0 1.35.753 2.276.753 3.577 0 .486-.142.753-.517.753-.361 0-.33-.33-.409-.33-.062 0-.156.204-.156.424 0 .33.235.847.893.847.566 0 1.02-.517 1.02-1.098 0-1.41-1.098-2.98-1.098-4.486 0-.659.172-1.098.314-1.443 0 3.122 2.65 5.396 2.65 6.697 0 .299-.22.534-.549.534a.512.512 0 01-.533-.503c0-.11-.016-.14-.063-.14-.093 0-.376.313-.376.722 0 .517.423 1.145 1.207 1.145.894 0 1.38-.754 1.38-1.428 0-1.646-3.215-4.141-3.215-6.807 0-.456.078-1.193.408-1.757-2.07 1.332-2.713 3.106-2.713 4.659 0 1.349-.047 2.022-.738 2.022-.36 0-.455-.328-.58-.328-.094 0-.142.282-.142.36.001.58.425.91.848.91zM59.982 14.554c.2-.133 1.084.078 2.227-.487a.85.85 0 01.407-.109c.55 0 .41.627.912.627.39 0 .894-.33 1.193-.33.467 0 1.142 1.476 1.142 2.166 0 .8-1.206 1.286-2.634 1.286-2.085 0-3.341-1.82-3.341-2.996 0-.094.048-.126.094-.157zm3.42 1.992c.69 0 1.209-.313 1.209-.502 0-.062-.094-.11-.299-.11-.204 0-.612-.015-1.381-.14-.66-.11-1.162-.361-1.35-.361-.063 0-.095.03-.095.078 0 .408.754 1.035 1.916 1.035zM36.546 38.13c-.518.126-1.35.94-1.35 2.228 0 1.537 1.648 3.906 4.361 3.906 2.29 0 2.855-1.584 2.855-2.652 0-2.368-1.458-4.031-3.356-4.031-1.036 0-1.962.753-1.962 1.866 0 1.036.785 2.589 2.651 2.589.879 0 1.396-.629 1.396-1.348 0-.707-.643-1.678-1.584-1.678-.283 0-.486.186-.486.485 0 .376.517.753 1.16.753a.84.84 0 00.346-.063c.03.048.047.126.047.189 0 .361-.346.58-.879.58-.8 0-1.568-.595-1.568-1.538 0-.563.486-.971 1.192-.971 1.396 0 2.227 1.239 2.227 2.479 0 1.112-.611 1.757-1.866 1.757-2.51 0-3.733-2.26-3.184-4.55zM54.451 47.321c.753 0 .713-.063.95-.063.234 0 .25.142.25.236 0 .345-.77.769-2.134.769-.8 0-1.286-.424-1.427-.895-.784.502-1.976.958-3.153.958-3.215 0-4.03-1.398-5.035-1.851-.769-.346-1.945.33-3.592-1.506.22.047.518.063.753.063 1.442 0 2.211-.705 2.211-1.835a4.06 4.06 0 00-.032-.438c.44.172 1.445.924 1.68 2.257.03.157.674.298 1.082.298.565 0 1.286-.236 1.396-1.16 1.883-.157 3.154-1.27 3.42-2.683.674.22 1.443.831 1.631 1.146.267-.094.58-.141.94-.141.503 0 1.068.094 1.742.298.031-.204.063-.455.377-.455.47 0 .345.518.502.814.078.157.471.251.471.566 0 .298-.252.409-.409.409a.695.695 0 01-.189-.032c-.313.11-.33 2.368-1.646 2.368-.972 0-1.866-.8-2.26-1.803-.109-.298-.344-.487-.564-.487-.25 0-.392.047-.69.377-.846.924-2.258 1.724-4 1.724-.533 0-.956-.047-1.067-.047-.063 0-.063.015-.063.03 0 .11.533.535 1.694.535 2.761 0 3.436-1.554 3.875-1.554.064 0 .25 0 .36.252.644 1.505 2.049 1.85 2.927 1.85zm-1.216-3.135a.63.63 0 00.628.628.63.63 0 000-1.256.63.63 0 00-.628.628zM65.659 36.358c-.22 0-.455.173-.455.597 0 .469.36.768.564.861.11.064.284.127.454.127.456 0 .818-.127.818-.504 0-.484-.708-1.081-1.381-1.081zm-1.693.971c-.33 0-2.151 2.432-3.325 2.432-.282 0-.518-.533-.518-.94 0-.22.14-.377.644-.487 2.697-.612 2.1-2.636 4.405-2.636 1.27 0 2.684.864 2.684 2.808 0 2.071-2.947 4.643-3.387 4.643-.361 0-.753-.518-.753-.863 0-.11.047-.25.36-.376 1.505-.597 2.366-1.977 2.366-2.683 0-.157-.078-.313-.282-.313-.266 0-1.408 2.603-2.68 2.603-.88 0-1.775-.798-1.775-1.175 0-.629 2.544-1.788 2.544-2.668 0-.33-.157-.345-.282-.345zM32.922 16.766s-.455.345-1.02.345c-.673 0-1.207-.502-1.207-1.208 0-.487.251-.988.831-1.24-.015.095-.015.173-.015.267 0 .895.501 1.569 1.411 1.836zm3.357 3.012c-.345.407-.706 1.098-.706 1.803 0 .847.518 1.553 1.318 1.553.768 0 1.13-.659 1.13-1.333 0-1.05-.958-1.789-1.742-2.023zm-5.207.627a.336.336 0 00-.048.173c0 .141.157.298.298.298.125 0 .204-.031.266-.031.377 0 .8.266 1.412.266.36 0 .784-.11 1.317-.376 1.13-.565 1.57-1.96 1.57-2.197 0-.298-.24-.259-.44-.533s-.124-.515-.251-.643c-.073-.074-.298-.078-.58-.11a3.48 3.48 0 00-.346-.016c-.517 0-1.13.064-1.82.503-1.36.868-1.16 2.305-1.378 2.666zm3.686-1.945c.108.148.408.33.408.44 0 .219-.126.502-.377.502-.55 0-.988-.832-.988-1.303 0-.298.173-.329.407-.329.11 0 .158.016.236.063.14.079.14.392.313.627zm-1.444 1.914c-.517 0-1.082-.643-1.082-1.224 0-.313.235-.706.407-.706.063 0 .095.048.11.158.094.768.596 1.208 1.067 1.427.047.03.079.047.079.078 0 .11-.299.267-.581.267zm1.334-3.953c.078-.252.14-.564.14-.91 0-.753-.345-1.898-1.411-1.898-.612 0-1.052.486-1.052 1.067 0 1.24 1.24 1.74 2.323 1.74zm-4.063 6.274c0 1.192.361 1.757 1.004 1.757.502 0 1.176-.361 1.976-1.051-.611.141-1.083.235-1.506.235-.564 0-1.003-.22-1.474-.94zm.55-1.396c-.016.079-.016.157-.016.235 0 .737.391 1.145.91 1.145.39 0 .846-.235 1.253-.753a3.295 3.295 0 01-.565.047c-.58 0-1.207-.156-1.583-.674zm3.842-.22c-.361.094-1.114.534-1.114 1.318 0 .564.439.926.988.926.283 0 .486-.064.612-.157-.439-.424-.596-.895-.596-1.365 0-.33.047-.533.11-.721zm.565-4.297a.63.63 0 00.627.628.63.63 0 00.628-.628.63.63 0 00-.628-.628.63.63 0 00-.627.628zm.815 1.411a.63.63 0 00.629.628.63.63 0 00.627-.628.63.63 0 00-.627-.627.63.63 0 00-.63.627zM60.83 25.895c0-.313.282-.58.592-.58.346 0 .612.267.612.58 0 .36-.267.612-.612.612a.6.6 0 01-.593-.612zm-5.508-4.831a.63.63 0 00.627.627.63.63 0 00.629-.627.63.63 0 00-.63-.627.63.63 0 00-.626.627zm-.533 2.211c0 .487.407.894.894.894a.904.904 0 00.895-.894.905.905 0 00-.895-.894.904.904 0 00-.894.894zm1.977-1.004a.95.95 0 00.954.957.952.952 0 00.959-.957.952.952 0 00-.959-.956.95.95 0 00-.954.956zm.079-2.039c0 .33.267.598.593.598a.597.597 0 000-1.193.595.595 0 00-.593.595zm2.838-1.505a.596.596 0 101.192 0 .596.596 0 00-1.192 0zm-1.177 1.93a1.01 1.01 0 001.004 1.003c.55 0 1.005-.455 1.005-1.003a1.01 1.01 0 00-1.005-1.004 1.01 1.01 0 00-1.004 1.004zm-1.615 3.67c0 .345.283.627.625.627a.63.63 0 00.629-.627.63.63 0 00-.629-.628.629.629 0 00-.625.628zm2.054-1.256a.63.63 0 00.629.628.63.63 0 00.627-.628.63.63 0 00-.627-.627.63.63 0 00-.629.627zm-.58 2.212c0 .596.486 1.083 1.083 1.083.596 0 1.084-.487 1.084-1.083s-.488-1.082-1.084-1.082c-.597 0-1.083.486-1.083 1.082zm2.26-1.334a.737.737 0 101.473.003.737.737 0 00-1.473-.003zm-.047-1.976c0 .362.299.66.655.66.362 0 .66-.298.66-.66a.663.663 0 00-.66-.658.663.663 0 00-.655.658zM62.176 42.554a4.62 4.62 0 01-2.948 1.02c-.848 0-1.225-.268-1.35-.268-.157 0-.33.157-.503.361-.372.44-.86 1.256-.86 2.15 0 .626.488 1.253 1.394 1.253 2.936 0 5.13-1.835 5.13-3.324 0-.846-.502-1.192-.863-1.192zm-.816-.172c.127-.108.157-.282.157-.456v-.36c0-.456-.688-.721-1.63-.721-1.146 0-1.758.516-1.758.736v.722c0 .299.691.597 1.539.597.675 0 1.287-.173 1.692-.518zm-.126 1.553c.079 0 .172.046.172.33 0 .344-.156.798-.718 1.158-.393.268-.927.488-1.711.502.125-.375.22-.768.22-1.143 0-.126-.016-.22-.032-.361h.205c1.24 0 1.774-.486 1.864-.486zM55.243 24.766c.172 1.333 1.962.659 1.962 2.274 0 .235-.062.581-.062.879 0 .345.03.643.295.643.266 0 .33-.188.33-.44 0-.25-.064-.564-.064-.736 0-.55.393-.675.629-.675.596 0 1.051.612 1.947.612-.205 1.004-2.277.737-2.277 1.835 0 .55.55.674.91.674.33 0 .44-.047.44-.328 0-.158-.032-.33-.032-.44 0-.063.048-.126.127-.126.346 0 2.037 1.287 2.037 1.68 0 .36-1.786.72-2.304.72-.157 0-.189-.11-.189-.172 0-.11.267-.44.267-.627 0-.142-.235-.236-.864-.236-.298 0-.518.032-.518.267 0 .423.69.941.69 1.332 0 .315-.188.503-.69.503-.424 0-1.065-.33-1.065-.879 0-.439.453-.877.453-1.144 0-.079-.06-.205-.248-.205-.582 0-.739 1.537-2.794 1.71.33-.298.61-.627.61-1.3 0-.33-.077-.598-.077-.958 0-.47.22-.706.533-.706.58 0 .863.815 1.24.815.205 0 .424-.188.424-.47 0-1.192-2.29-1.02-2.29-2.698 0-.455.156-1.02.58-1.804zm7.482 4.596c0 .392.126.847.518.847.33 0 .612-.501.612-1.05 0-.628-.11-1.115-.11-1.366 0-.11.048-.156.11-.156.236.015.455.658.707.658.283 0 .704-.518.876-.518.047 0 .063.063.063.078 0 .236-.362.754-.362.958 0 .172.91.203.91.36 0 .236-.954.236-1.408.44-.44.188-.708.423-.708.737s.315.376.754.376c1.048 0 1.786-.564 2.021-.564.047 0 .078.03.078.078 0 .157-.533.675-.533.91 0 .267.973.58.957.737-.015.047-.078.062-.188.062-.173 0-.44-.047-.644-.047-.126 0-.235.016-.283.078-.109.126.032.958-.187.958-.204 0-.738-1.85-1.943-1.85-.173 0-.299.14-.299.376 0 .627.613 1.348 1.194 1.693.263.173.703.346.703.44 0 .188-1.002.016-1.002.33 0 .282.126.706.126.956 0 .079-.016.172-.11.172-.188 0-.644-.862-.864-.862-.188 0-.596.517-.769.517-.047 0-.078-.047-.078-.093 0-.361.581-1.177.581-1.977 0-.377-.047-1.192-.503-1.192-.376 0-.8.596-.989 1.192-.11.345-.031 1.678-.283 1.678-.235 0-.172-.893-.487-.893-.231 0-.733.423-.907.423-.031 0-.063-.016-.063-.047 0-.188.456-.8.456-.926 0-.235-1.036-.266-1.036-.454 0-.11.408-.189.784-.252.798-.141 1.975-.721 1.975-1.536 0-.91-.879-1.303-1.456-1.68-.299-.188-.628-.344-.628-.47 0-.125.376-.125.533-.125.235 0 .468-.016.468-.204 0-.142-.031-.423-.031-.643 0-.157.015-.283.079-.283.235 0 .564.769.722.769.25 0 .596-.628.832-.628.078 0 .11.048.11.188 0 .581-.298 1.24-.298 1.805z"
                        />
                        <path
                          fill="#fff"
                          d="M55.699 33.706c.722.095.895.345.895.55 0 .345-.314.454-.613.454-.22 0-.47-.047-.737-.047-.346 0-.69.079-.973.408.204.032.502.173.502.488 0 .91-2.525.155-2.525 2.494 0 1.238 1.287 2.588 3.23 2.588 1.006 0 1.65-.33 1.65-.707 0-.297-.534-.094-.534-.345 0-.11.189-.314.189-.488 0-.075-.063-.218-.189-.218-.283 0-.817.454-1.9.454-.847 0-1.678-.485-1.678-1.144 0-.141.063-.22.157-.22s.22.063.33.063c.094 0 .11-.063.11-.235 0-.173 0-.66.297-.66.299 0 .863 1.099 3.03 1.099.718 0 2.115-.14 2.634-.612-.016 1.726-1.367 4-4.19 4-2.932 0-4.501-2.353-4.501-4.518 0-2.4 1.96-4.58 4.643-4.58.69 0 1.271.235 1.271.533 0 .41-1.02.158-1.098.643zm4.816.833c.11.171.157.344.157.5 0 .44-.298.848-.298 1.304 0 .517.392.94.986.94.643 0 1.083-.516 1.083-1.129 0-.832-.754-1.537-1.928-1.615zm-5.193 1.003a.632.632 0 01.204.47c0 .236-.11.487-.11.754a.69.69 0 00.69.705c.44 0 .739-.346.739-.752 0-.596-.614-1.177-1.523-1.177zm2.085-2.667c1.648.314 2.543 1.554 2.543 2.715 0 .8-.502 1.536-1.382 1.536-.8 0-1.378-.549-1.378-1.427 0-.659.514-1.349.514-2.024 0-.266-.078-.533-.297-.8zm.816 2.087c0 .22.157.392.377.392.25 0 .408-.22.408-.47 0-.33-.299-.785-.581-.785-.126 0-.079.188-.11.392-.016.157-.094.345-.094.47zM40.908 18.821c.533 0 1.144-2.886 1.144-3.373 0-.126-.046-.22-.156-.22-.487 0-1.16 2.746-1.16 3.358-.001.11.03.235.172.235zm3.843.863c.391 0 .83-1.507.83-2.448 0-.204-.03-.423-.126-.423-.33 0-.878 1.553-.878 2.4 0 .33.08.47.174.47zm-2.558-1.396c.172 0 .392-.19.8-.643.032-.204.032-.393.032-.628 0-.314-.126-.659-.314-.659-.471 0-.706 1.255-.706 1.585 0 .187.094.345.188.345zm2.15-.643c0-.268-.064-.33-.126-.33-.157 0-.33.188-.58.612.03.564.125.816.282.816.172 0 .423-.55.423-1.098zm1.207-1.852c1.036 0 1.506.895 1.506 1.899 0 .438-.125 1.082-.329 1.082-.204 0-.172-.361-.204-.69-.031-.424-.11-.518-.251-.518-.267 0-.44.627-.44 1.208 0 .36.063.768.345.768a.572.572 0 00.393-.172c-.063.72-.597 1.35-1.35 1.35-1.38 0-1.898-1.617-2.054-2.558-.831.878-1.6 1.522-2.98 1.522-1.286 0-1.867-.942-1.867-1.835 0-.268.094-.957.424-.957.392 0 .047 1.285.816 1.285.188 0 .532-.157.721-.674a2.91 2.91 0 00.173-.925c0-.424-.094-.69-.408-.69-.267 0-.597.203-.706.313.377-1.13 1.286-1.71 2.289-1.71 1.24 0 1.898 1.098 1.898 2.322 0 .172-.015.36-.047.533.534-.878 1.272-1.553 2.071-1.553z"
                        />
                        <path
                          fill="#fff"
                          d="M42.615 20.012c-.674 0-.705.818-.705 2.463-.503-1.082-1.333-2.243-2.306-2.243-.659 0-.91.44-.91 1.208 0 .157.016.393.047.533.08-.266.33-.376.643-.376.676 0 1.49.517 2.024 1.224-.611-.11-1.208-.22-1.709-.22-.314 0-.596.032-.831.141-.456.204-1.067.879-1.067 1.898 0 .158.016.33.047.518.55-1.224 2.008-1.773 2.949-1.773.189 0 .329.016.44.032-.488.438-.597 1.207-.629 1.725-.015.251-.11.267-.282.267 0 .517.408 1.286.408 1.678 0 .142-.078.267-.157.299 0 .69.69 1.192.69 1.63 0 .11-.03.205-.079.252.048.283.807.757.905.995.12.29.256.338.335.338.267 0 .69-.314.69-.596 0-.094-.08-.204-.141-.251-.299-.22-.456-.69-.581-1.003-.11 0-.252-.047-.302-.232-.086-.324-.09-.93-.216-1.29-.204-.047-.298-.126-.298-.55 0-.203.126-1.004.126-1.287-.094 0-.22-.062-.22-.25 0-.502.503-.894.643-1.537.895.658 1.114 1.332 1.114 1.93 0 .312-.047.61-.11.893.659-.33 1.647-.816 1.647-1.804 0-.58-.267-1.224-2.04-1.475a5.544 5.544 0 011.82-.313c1.005 0 1.585.313 1.71 1.019.204-.313.361-.675.361-1.004 0-.769-.644-1.27-1.459-1.27-.957 0-1.804.501-2.714 1.114.41-.847.69-1.349 1.193-1.349.078 0 .156.016.235.032-.188-.69-.894-1.366-1.27-1.366zM69.045 31.322c.786 0 1.413 1.02 1.413 2.212 0 1.27-.597 2.652-1.66 3.592-.016-2.117-2.608-1.443-2.608-2.98 0-.658.472-1.098 1.037-1.098.503 0 .895.142 1.178.425a1.392 1.392 0 01-.424-1.005c0-.597.377-1.146 1.064-1.146zM55.038 16.42c.41.393.769.565 1.209.565.173 0 .377-.046.488-.046.14 0 .234.062.234.172 0 .173-.157.455-.345.612.188.078.393.11.613.11.89 0 1.91-.565 1.91-1.976.19.25.3.768.3 1.004 0 1.71-1.257 2.368-2.415 2.368-.753 0-1.13-.252-1.226-.252-.297 0-.281.597-.485.581-.362-.062-.69-.862-.69-1.71 0-.502.126-1.035.407-1.427zm2.368-1.144c-.125-.204-.594-.314-.813-.314-.691 0-1.162.486-1.256.926a1.47 1.47 0 01-.11-.534c0-.69.471-1.537 1.618-1.537 1 0 1.393.533 1.535.533.157 0 .314-.157.44-.157.172 0 .172.267.172.456 0 .627-.283 1.71-.989 2.101a1.6 1.6 0 00-.782-.752.248.248 0 01-.157-.236c0-.173.156-.392.342-.486zM44.138 11.856c0 .55 1.96 3.232 2.337 3.232.314 0 .549-.55.549-1.02a.642.642 0 00-.093-.345c-.283-.393-2.275-1.961-2.715-1.961-.047 0-.078.047-.078.094zm-11.53-1.615c0 .314-1.191 1.364-1.614 1.364-.157 0-.205-.188-.205-.36 0-.313.141-.753.314-.895.203-.188.674-.28 1.035-.28.22 0 .47.045.47.17zm14.323.91c0-.942-2.545-2.652-2.574-3.388-.002-.068.034-.135.091-.195.436-.46 2.246-.795 2.246-1.187 0-.203-.377-.203-.565-.203-1.458 0-3.592.533-3.592 1.05 0 .535 1.914 1.837 1.914 2.48 0 .172-.11.235-.283.235-.532 0-1.694-.644-2.242-.644-.251 0-.346.173-.346.425 0 .752.894 2.18.894 2.602 0 .047-.016.11-.079.11-.282 0-1.614-1.568-2.086-1.568-.171 0-.188.235-.188.58v.534c0 .36-.016.58-.187.58-.41 0-.597-1.145-.989-1.145-.408 0-.486 2.039-.878 2.039-.455 0-.063-2.243-.502-2.243-.486 0-1.036 1.49-1.381 1.49-.125 0-.156-.125-.156-.235 0-.455.266-1.192.266-1.63 0-.22-.063-.346-.25-.346-.488 0-1.554.784-1.961.784-.063 0-.142-.031-.142-.094 0-.376 1.71-1.568 1.71-2.102 0-.518-2.354-.172-2.354-.769 0-.501 1.68-1.02 1.68-1.537 0-.455-1.993-.658-2.761-.658-.926 0-1.428.109-1.428.376 0 .408 2.103.534 2.103.894 0 .345-2.181 1.27-2.181 1.804 0 .47 3.074.03 3.074.518 0 .533-2.681 2.838-2.681 3.607 0 .173.125.251.297.251.816 0 2.933-1.553 3.514-1.553.204 0 .22.25.22.47 0 .409-.141 1.036-.141 1.491 0 .36.093.611.407.611.581 0 1.113-.988 1.507-.988.501 0 .203 2.902.956 2.902.643 0 .91-3.137 1.317-3.137.409 0 .739.91 1.115.91.47 0 .25-1.584.753-1.584.548 0 2.117 1.882 2.823 1.882.22 0 .297-.173.297-.393 0-.831-1.16-2.713-1.16-3.309 0-.156.046-.204.219-.204.612 0 2.4.847 3.247.847.285 0 .457-.156.457-.36zm-1.632-3.106c0 .282.988.894 1.443.894.267 0 .345-.361.345-.738 0-.47-.203-.486-.612-.486-.517 0-1.176.142-1.176.33zm-3.687-1.6c0-.095-.47-.19-1.113-.19-1.02 0-.878.85-1.663.85-.815 0-.612-.88-1.647-.88-.628 0-1.207.11-1.207.25 0 .19.736.11.736.63 0 .548-1.584.705-1.584 1.034 0 .11.125.157.282.157.346 0 .894-.157 1.287-.157.22 0 .423.047.423.25 0 .393-.847 1.1-.847 1.413 0 .094.078.126.156.126.315 0 .848-.8 1.35-.8.831 0 .283 1.772.737 1.772.47 0 .267-1.742.941-1.742.55 0 .957 1.208 1.334 1.208.094 0 .172-.078.172-.188 0-.329-.47-1.004-.47-1.443 0-.267.188-.393.439-.393.36 0 .847.22 1.113.22.093 0 .188-.031.188-.14 0-.377-1.395-.785-1.395-1.27 0-.488.768-.488.768-.707zM69.42 8.986c0 1.396-1.016 2.462-2.854 2.76.205.016.393.016.582.016 2.147 0 2.933-.972 2.933-1.787 0-.456-.252-.863-.66-.989zm-2.65 1.584c0-1.114-2.664-1.396-2.664-1.647 0-.203 1.488-.55 2.257-.565-1.177-1.505-2.853-1.348-2.853-1.615 0-.157 1.255-.471 2.414-.471.973 0 1.883.22 1.883.957 0 .408-.33.832-.33 1.459 0 .345.172.643.628.643.488 0 .597-.517.597-1.067 0-.454-.078-.8-.078-1.02 0-.658.451-1.097 1.095-1.097.534 0 .66.234 1.445.234-.425.252-.581.707-.581.926 0 .66.424 1.114.424 2.464 0 2.477-2.32 3.355-5.161 3.355-.78 0-1.614-.062-2.43-.187-.126-.016-.157-.047-.157-.126 0-.204 1.115-.314 1.115-1.317 0-.393-.126-.769-.126-.91 0-.078.063-.126.126-.126.235 0 .707.91 1.583.91.232 0 .814-.079.814-.8zm2.557-3.466c0 .219.172.391.392.391.22 0 .393-.172.393-.391a.39.39 0 00-.393-.393.389.389 0 00-.392.393zM67.933 21.597c0-.33-.833-.36-.91-1.286-.017-.141-.064-.392-.237-.392-.282 0-.063.863-.376.863-.722 0-.957-1.412-1.224-1.412-.063 0-.138.047-.138.235 0 .173.032.283.032.486 0 .204-.048.346-.236.346-.424 0-.8-.989-1.162-.989-.078 0-.156.047-.156.126 0 .188.313.533.313.706 0 .377-1.02.172-1.02.486 0 .142.14.188.33.188.33 0 .847-.14 1.114-.14.157 0 .392.03.392.234 0 .22-.565.502-.565.706 0 .094.094.14.173.14.424 0 1.174-.736 1.707-.736.094 0 .33.047.33.188 0 .204-.534.564-.534.863 0 .078.048.172.142.172.28 0 .658-.737 1.192-.737.204 0 .502.079.66.079.126 0 .173-.079.173-.126zm.408 7.608c.251-.784.566-1.334 1.08-2.18-.514-.267-1.881-.832-1.881-1.758 0-1.082 1.35-1.929 1.63-1.929.125 0 .156.11.156.314 0 .564-.267 1.474-.267 1.96 0 .44.283.864.534.864.267 0 1.004-.941 1.004-1.867 0-1.663-1.46-2.165-1.911-2.165-.424 0-1.193.69-2.998.69-3.372 0-4.141-3.34-4.141-4.8 0-.062.015-.078.03-.078.08 0 .41.408 1.476.408.55 0 1.052-.141 1.853-.141 1.88 0 2.712 1.303 3.874 2.964.702.439 2.383 1.145 2.383 3.138 0 1.756-1.868 2.729-2.32 4.611.718-.078 1.142-1.365 1.88-1.365.377 0 .55.299.55.77 0 .69-.394 1.725-1.147 2.368.015-.063.015-.142.015-.236 0-.438-.172-1.065-.675-1.065-.781 0-1.032.846-1.471 1.552-.456-1.6-1.068-3.044-2.166-3.922-1.11-.894-3.027-.408-3.027-2.039 0-.44.283-1.067.283-1.569 0-.172-.031-.33-.126-.455 1.507.565.973 1.568 1.9 2.604.578.66 2.179 1.287 3.104 4 .016-.078.032-.282.032-.423 0-2.322-3.074-4.597-3.34-5.538 1.785.204 2.099.644 2.946 2.997.174.486.74 1.694.74 2.29z"
                        />
                        <path
                          fill="#fff"
                          d="M59.762 12.61c-1.1 0-1.82-.55-1.82-.832 0-.142.093-.235.22-.235.344 0 1.098.533 1.348.533.064 0 .11-.031.11-.126 0-.282-.266-.752-.266-.987 0-.063.047-.11.14-.11.424 0 1.052.173 1.383.173.11 0 .14-.063.14-.126 0-.345-1.02-1.02-1.02-1.224 0-.188 1.268-.471 1.268-.768 0-.314-1.724-.094-1.724-.393 0-.22.33-.596.33-.768 0-.079-.063-.11-.172-.11-.142 0-.895.298-1.21.298-.156 0-.345-.031-.345-.251 0-.361.612-.753 1.57-.753 1.55 0 2.478 1.067 2.478 2.855 0 2.259-1.582 2.823-2.43 2.823zm-3.058-2.98c0-.174-.613-.503-.613-.69 0-.032.03-.048.078-.048.174 0 .472.063.708.063.204 0 .235-.879.39-.879.11 0 .297.832.471.832.203 0 .58-.236.737-.236.031 0 .063.016.063.048 0 .11-.392.532-.392.658 0 .141.879.314.879.44 0 .157-.895.14-.895.282 0 .109.33.549.33.69 0 .032-.017.047-.048.047-.126 0-.612-.22-.753-.22-.173 0-.452.643-.593.643-.047 0-.079-.063-.079-.141l-.031-.627c0-.063-.03-.126-.11-.126-.189 0-.55-.016-.66-.016-.079 0-.11-.015-.11-.047 0-.125.628-.564.628-.674zm-.456 2.57c.252 0 .299.613.347.973.03.19.062.204.14.204.19 0 .487-.72.689-.72.297 0 1.099.83 2.433.83 1.896 0 3.686-1.333 3.686-3.685 0-2.275-1.602-3.608-3.812-3.608-1.051 0-1.822.517-2.23.517-.247.016-.624-.61-.813-.61-.078 0-.157.155-.157.422 0 .173 0 .721-.188.721-.378 0-1.836-1.081-1.836-.69 0 .361.972 1.46.972 1.742 0 .282-.956.55-.956.737 0 .345 1.019.408 1.019.847 0 .44-1.067.784-1.067 1.114 0 .266 1.067.079 1.067.408 0 .329-.784 1.427-.784 1.74 0 .079.015.079.077.079.299 0 1.193-1.02 1.413-1.02zM49.142 39.746a.72.72 0 01-.173.454c-.172-.313-.659-.47-.879-.47-1.615 0-1.004 2.338-2.729 2.338-.721 0-.784-.094-1.05-.094-.11 0-.173.047-.173.14 0 .41.58 1.413 2.196 1.413 1.615 0 3.169-.988 3.169-2.213 0-.204-.047-.422-.141-.642.062-.094.22-.157.36-.157.251 0 .393.284.628.284a.43.43 0 00.44-.44c0-.205-.11-.345-.298-.44a.54.54 0 00.22-.424c0-.267-.19-.517-.504-.517-.14 0-.234.048-.344.155-.03-.28-.188-.547-.487-.547-.235 0-.408.172-.408.44 0 .248.173.453.173.72z"
                        />
                        <path
                          fill="#fff"
                          d="M40.546 36.83c1.255.311 1.882.986 2.007 1.787.126.768.282 1.396.58 1.709.392.44 1.161.83 1.836.83.565 0 1.019-.186 1.019-.704 0-.566-.768-1.836-1.898-1.836-.11 0-.25.016-.408.016-.141 0-.345-.03-.47-.141-.25-.22-.33-1.397-.8-2.102-.517-.785-1.082-1.005-1.85-1.005-.549 0-1.162.298-1.162.737 0 .269.142.456 1.146.708zm4.376 3.512c-.471 0-1.177-.503-1.177-.785 0-.236.22-.361.392-.361.392 0 1.097.487 1.097.895.001.11-.078.251-.312.251z"
                        />
                        <path
                          fill="#fff"
                          d="M43.479 28.123c0-1.004 2.385-1.537 2.385-2.777 0-.204-.079-.564-.22-.831.83.454 1.443 1.224 1.443 1.85 0 1.083-1.13 1.585-1.13 2.26 0 .784 1.208.91 1.208 1.882 0 .8-1.145 1.725-1.145 2.76 0 .8.565 1.459 1.427 1.569a3.62 3.62 0 01-.8.11c-1.585 0-3.216-1.302-3.216-2.855 0-.769.33-1.442.83-1.929.441.377.88.627 1.162.627.25 0 .362-.125.362-.313 0-.581-2.306-1.114-2.306-2.353zm5.004 7.921c-.538.246-.753.204-.753.754 0 .203-.047.469-.047.61 0 .189.031.299.25.299.566 0 1.46-.957 1.46-1.773 0-.22-.126-.313-.267-.313-.126 0-.266.25-.643.423zm-.063-1.13c0-.705-1.459-.721-1.459-1.788 0-.267.172-.721.518-1.208.142.815.47 1.24 1.177 1.507 1.395.516 1.584 1.3 1.584 2.133 0 1.412-.989 3.169-3.53 3.169-2.04 0-3.498-1.82-3.498-3.358 0-.424.11-.894.376-.894.236 0 .314.188.502.376.707.707 1.475.894 2.589.894 1.004 0 1.741-.407 1.741-.83zM37.31 35.254a.596.596 0 11-1.184.138.597.597 0 111.185-.138zm-2.93.617c.066.536.566.942 1.13.88a1.29 1.29 0 00.518-.157c.125.501.546.824 1.115.75.578-.076.97-.53.908-1.111a1.136 1.136 0 00-.093-.362s.076-.008.133-.018c.567-.108.949-.562.901-1.111-.062-.565-.569-.984-1.096-.919a.987.987 0 00-.52.213c-.141-.47-.583-.879-1.187-.779-.545.09-.906.553-.852 1.14.01.095.032.204.079.313l-.156.023c-.458.068-.955.53-.88 1.138z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_9507_68452">
                          <path
                            fill="#fff"
                            d="M0 0H51.524V57H0z"
                            transform="translate(26.021 6.1)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={103}
                      height={70}
                      fill="none"
                      viewBox="0 0 103 70"
                    >
                      <g clipPath="url(#clip0_9507_68483)">
                        <path
                          fill="#fff"
                          d="M101.329 25.958c1.353 7.76-19.77 17.92-47.186 22.695C26.73 53.428 3.41 51.006 2.059 43.242c-1.351-7.76 19.778-17.919 47.19-22.69 27.414-4.78 50.73-2.355 52.08 5.406z"
                        />
                        <path
                          fill="#12111F"
                          d="M75.527 37.475l-.14-8.067h2.544v10.169h-3.657l-2.54-8.345h-.055l.142 8.345h-2.529v-10.17h3.817l2.363 8.068h.055zM29.283 30.36l-1.407 9.324h-2.775l1.904-10.276h4.571l1.898 10.276H30.71l-1.368-9.323h-.058zM41.266 37.264l1.27-7.856h4.19l.222 10.276H44.38l-.068-9.239h-.053l-1.718 9.239h-2.607l-1.72-9.239h-.055l-.063 9.239h-2.574l.227-10.276h4.194l1.267 7.856h.056zM20.773 36.785c.101.249.07.57.023.762-.086.341-.319.69-1 .69-.646 0-1.036-.37-1.036-.932v-.995h-2.757l-.002.795c0 2.291 1.804 2.984 3.737 2.984 1.86 0 3.39-.635 3.632-2.349.125-.887.031-1.469-.01-1.688-.434-2.151-4.335-2.794-4.625-3.996a1.351 1.351 0 01-.01-.543c.072-.326.296-.688.939-.688.6 0 .955.372.955.933v.635h2.562v-.721c0-2.24-2.01-2.589-3.464-2.589-1.828 0-3.322.604-3.595 2.276-.074.462-.084.873.023 1.39.45 2.097 4.098 2.705 4.628 4.036zM54.188 36.767c.1.246.068.558.023.751-.084.341-.315.684-.992.684-.635 0-1.024-.37-1.024-.92l-.002-.986h-2.728l-.004.785c0 2.268 1.787 2.952 3.7 2.952 1.839 0 3.355-.627 3.595-2.324.126-.88.037-1.454-.008-1.67-.431-2.13-4.292-2.767-4.58-3.959a1.296 1.296 0 01-.01-.532c.074-.33.294-.682.931-.682.596 0 .943.362.943.92v.63h2.543V31.7c0-2.214-1.992-2.562-3.435-2.562-1.807 0-3.289.596-3.556 2.258-.074.456-.082.859.025 1.373.442 2.077 4.055 2.68 4.58 3.998zM62.82 38.147c.712 0 .934-.493.983-.746a2.15 2.15 0 00.025-.392v-7.605h2.599v7.37c.006.19-.012.578-.023.675-.182 1.919-1.699 2.54-3.587 2.54-1.89 0-3.408-.621-3.589-2.54a9.728 9.728 0 01-.022-.674v-7.371h2.596v7.603c0 .134.005.283.025.392.058.253.273.748.992.748zM84.257 38.038c.743 0 1.004-.47 1.051-.743a2.41 2.41 0 00.023-.39v-1.492h-1.054v-1.5h3.645v2.759a7.295 7.295 0 01-.037.678c-.17 1.87-1.794 2.537-3.614 2.537-1.824 0-3.443-.668-3.618-2.537a9.062 9.062 0 01-.037-.678l.002-4.327c0-.182.023-.505.043-.678.228-1.92 1.786-2.539 3.61-2.539 1.822 0 3.418.614 3.608 2.54.032.326.022.677.022.677v.343h-2.59v-.575a2.568 2.568 0 00-.033-.39c-.044-.228-.24-.75-1.026-.75-.75 0-.967.493-1.023.75-.03.136-.043.318-.043.485v4.7c-.002.13.006.273.027.39.041.27.3.74 1.044.74z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_9507_68483">
                          <path
                            fill="#fff"
                            d="M0 0H99.392V33H0z"
                            transform="translate(2 18.1)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={103}
                      height={70}
                      fill="none"
                      viewBox="0 0 103 70"
                    >
                      <g fill="#fff" clipPath="url(#clip0_9507_68498)">
                        <path d="M29.368 27.533c2.586-.708 4.546-3.239 4.98-6.37l.218-1.552h-4.79c-8.466 0-11.705.87-14.48 3.837a12.589 12.589 0 00-3.185 6.097c-.219 1.033-.328.407-.463-2.858-.163-3.784-.245-4.3-1.09-5.58-1.033-1.552-3.265-2.83-5.499-3.129l-1.414-.191.136 6.695c.109 5.851.245 6.94.897 8.602 1.388 3.51 3.785 5.606 7.948 6.94l1.96.626-3.62.027c-2.775.027-3.973.191-5.063.681-2.203 1.009-3.918 3.786-3.918 6.345v1.007l6.642-.136c7.132-.162 8.437-.407 10.996-2.205 1.689-1.17 3.404-3.62 4.11-5.933l.599-1.905.163 3.43c.162 3.593.463 4.52 1.96 6.125 1.142 1.225 2.45 1.933 4.3 2.259.79.136 1.58.136 1.742 0 .517-.463.027-12.357-.599-14.344-1.116-3.54-3.592-5.99-7.43-7.295l-2.287-.788h2.94c1.661-.03 3.566-.194 4.247-.385zm-6.56 2.287c1.199 1.279 1.689 2.56 1.689 4.573 0 2.07-1.524 4.52-3.159 5.334-4.626 2.179-9.336-.572-9.417-5.416-.082-5.742 6.967-8.656 10.887-4.49zM56.343 33.222c-.709-4.165-3.05-6.723-6.615-7.268-1.689-.245-3.92.272-5.362 1.307l-.98.682v-2.288c0-3.539-1.198-5.715-3.265-5.715h-.817V43.347h1.933c1.824 0 1.878.054 1.878-.844v-.925l.844.762c.463.437 1.443.98 2.15 1.252 1.687.544 4.926.436 6.396-.436 2.911-1.66 4.544-5.878 3.838-9.934zm-6.424 7.214c-1.497.708-2.503.708-3.947 0-1.824-.898-2.64-2.613-2.668-5.47 0-4.03 1.824-6.262 4.927-5.934 2.695.271 4.218 2.45 4.218 6.096 0 2.666-.897 4.546-2.53 5.308zM84.322 43.456c-.245-.027-.653-.49-.953-1.062-.408-.789-.517-2.259-.517-6.587 0-6.205-.272-7.35-2.013-8.601-3.702-2.64-10.86-1.334-12.358 2.232-.817 1.986-.681 2.204 1.335 2.204 1.659 0 1.877-.082 2.394-1.033.735-1.279 2.07-1.824 4-1.633 1.689.192 2.831 1.034 2.831 2.15 0 1.278-1.033 1.797-4.764 2.367-5.009.789-6.341 1.58-6.831 4.219-.49 2.613.844 5.036 3.403 5.851 1.524.544 4.871.299 6.751-.599l1.524-.708.516.735c.626.898 2.395 1.252 3.974.817.6-.16.953-.325.708-.352zm-5.96-4.192c-.192.354-.953.871-1.742 1.198-1.688.682-2.586.682-4.03.054-1.25-.544-1.659-1.47-1.169-2.722.437-1.17 1.09-1.47 4.139-1.933 1.414-.218 2.695-.463 2.857-.572.408-.27.381 3.213-.055 3.975zM89.93 43.81c-4.191-1.007-6.26-4.3-5.988-9.417.218-4.056 1.443-6.205 4.354-7.675 3.62-1.825 9.446-.408 10.86 2.612 1.252 2.695 1.226 2.695-1.062 2.695-1.904 0-2.069-.053-2.287-.87-.272-1.063-2.07-2.232-3.43-2.232-2.586 0-4.3 1.85-4.626 4.98-.272 2.586.109 4.165 1.334 5.553 2.042 2.34 5.28 1.824 6.56-1.034.68-1.552.708-1.579 2.394-1.579.924 0 1.768.11 1.85.272.083.136-.053.98-.327 1.824-1.085 3.728-5.413 5.878-9.631 4.871zM57.621 34.774v-8.655l1.825.109c1.768.109 1.824.136 1.986 1.252l.163 1.142.871-.953c1.034-1.116 2.695-1.878 4.138-1.878 1.034 0 1.034.027 1.034 1.905V29.6h-1.553c-1.224 0-1.797.218-2.721 1.034-1.553 1.36-1.96 3.076-1.96 8.437v4.328h-3.809l.026-8.625z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_9507_68498">
                          <path
                            fill="#fff"
                            d="M0 0H98V32.539H0z"
                            transform="translate(2 17.83)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={103}
                      height={70}
                      fill="none"
                      viewBox="0 0 103 70"
                    >
                      <path
                        fill="#fff"
                        d="M9 43.875h1.958v.565H9.71v1.053h1.193v.567H9.709v1.685H9v-3.87zM16.012 43.874h.71v3.871h-.71v-3.87zM21.98 43.875h.844l1.287 3.038h.01v-3.038h.644v3.87h-.848l-1.282-3.017h-.01v3.017h-.645v-3.87zM31.811 46.27l-.488-1.809h-.011l-.534 1.81h1.033zm.15.544h-1.33l-.279.931h-.71l1.299-3.87h.776l1.248 3.87h-.732l-.272-.931zM37.842 43.875h.842l1.288 3.038h.01v-3.038h.644v3.87h-.848l-1.282-3.017h-.012v3.017h-.642v-3.87zM48.342 47.662c-.146.077-.488.14-.839.14-1.174 0-1.78-.861-1.78-1.991 0-1.132.606-1.991 1.758-1.991.395 0 .715.105.86.16l-.038.638c-.145-.072-.37-.211-.732-.211-.589 0-1.094.399-1.094 1.404 0 1.003.505 1.402 1.094 1.402.344 0 .571-.083.732-.202l.039.651zM53.4 43.874h2.036v.565H54.11v1.033h1.255v.566H54.11v1.14h1.383v.567H53.4v-3.87zM42.818 36.203c-.984 1.315-2.466 1.974-4.442 1.974h-1.15v-10.95h1.15c1.967 0 3.449.658 4.442 1.975.747.993 1.121 2.158 1.121 3.492 0 1.336-.374 2.504-1.121 3.509zm5.341-7.714a9.725 9.725 0 00-3.497-3.94c-1.55-1.007-3.229-1.511-5.04-1.511h-5.94a1.49 1.49 0 00-1.484 1.476v17.855h7.424a9.165 9.165 0 003.058-.525c1.887-.66 3.438-1.848 4.653-3.56 1.212-1.715 1.819-3.576 1.819-5.59 0-1.444-.331-2.847-.993-4.205zM9.001 42.369h3.534c.825 0 1.493-.669 1.493-1.492l.001-17.84h-3.535a1.49 1.49 0 00-1.493 1.49V42.37zM24.99 31.193c-.406.472-1.156.709-2.243.709h-1.678v-4.817h1.69c1.014 0 1.732.216 2.154.648.42.43.633 1.005.633 1.725 0 .731-.186 1.307-.556 1.735zm-3.921 4.76h3.143c2.474 0 4.244-.74 5.312-2.222.823-1.14 1.233-2.584 1.233-4.33 0-1.773-.51-3.228-1.529-4.37-1.18-1.331-2.909-1.993-5.186-1.993h-6.515a1.49 1.49 0 00-1.485 1.49l-.002 17.84h3.54a1.492 1.492 0 001.489-1.491v-4.924zM64.916 39.028a2.166 2.166 0 00-2.394-1.732c-.478.133-.972.2-1.483.2-1.306 0-2.442-.393-3.403-1.179-1.222-.994-1.832-2.352-1.832-4.076 0-1.732.61-3.096 1.832-4.091.961-.786 2.097-1.177 3.402-1.177.469 0 .922.06 1.362.17a2.166 2.166 0 002.516-1.715l.46-2.351c-1.67-.651-3.175-.977-4.515-.977-2.464 0-4.66.78-6.584 2.337-2.457 1.994-3.684 4.594-3.684 7.804 0 3.201 1.227 5.798 3.684 7.79 1.924 1.558 4.105 2.338 6.542 2.338 1.396 0 2.917-.326 4.56-.977l-.463-2.364z"
                      />
                      <path
                        fill="#D1D1D1"
                        d="M78.425 25.436v.001c-1.629 0-2.26 1.254-2.305 1.421-6.639 17.298-19.297 20.878-19.297 20.878S76.21 47.22 84 25.436h-5.573z"
                      />
                      <path
                        fill="#CECECE"
                        d="M85.66 22.12h7.588c-10.44 25.026-36.424 25.616-36.424 25.616s17.774-4.142 26.664-24.2c0 0 .605-1.372 2.172-1.416z"
                      />
                      <path
                        fill="#fff"
                        d="M79.34 24.925c-7.677 18.896-22.517 22.81-22.517 22.81s23.239-.268 32.103-24.38h-7.209s-1.53-.028-2.377 1.57z"
                      />
                      <path
                        fill="#fff"
                        d="M81.893 23.855h6.272c-8.987 23.33-31.342 23.88-31.342 23.88s15.239-3.845 22.902-22.46c0 0 .569-1.42 2.168-1.42z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={103}
                      height={70}
                      fill="none"
                      viewBox="0 0 103 70"
                    >
                      <g clipPath="url(#clip0_9507_68539)">
                        <mask
                          id="mask0_9507_68539"
                          style={{ maskType: "alpha" }}
                          width={93}
                          height={43}
                          x={5}
                          y={13}
                          maskUnits="userSpaceOnUse"
                        >
                          <path fill="#fff" d="M98 13.93H5.836v41.34H98V13.93z" />
                        </mask>
                        <g mask="url(#mask0_9507_68539)">
                          <mask
                            id="mask1_9507_68539"
                            style={{ maskType: "alpha" }}
                            width={94}
                            height={43}
                            x={5}
                            y={13}
                            maskUnits="userSpaceOnUse"
                          >
                            <path
                              fill="#fff"
                              d="M98.794 13.93H5.836v41.34h92.958V13.93z"
                            />
                          </mask>
                          <g fill="#fff" mask="url(#mask1_9507_68539)">
                            <path d="M49.533 28.354c-.702-.648-1.05-1.636-1.05-2.954v-5.76c0-.102.029-.187.092-.254a.321.321 0 01.244-.098h1.29c.101 0 .19.034.252.098a.343.343 0 01.097.254v5.76c0 .746.177 1.306.526 1.683.349.377.849.568 1.492.568.647 0 1.143-.19 1.492-.568.35-.377.526-.937.526-1.683v-5.76a.36.36 0 01.096-.254.355.355 0 01.253-.098h1.29c.101 0 .185.034.244.098a.377.377 0 01.093.254v5.76c0 1.318-.35 2.306-1.047 2.954-.698.653-1.678.975-2.939.975-1.265.005-2.249-.322-2.95-.975zM58.68 29.092a.315.315 0 01-.096-.242v-9.21c0-.102.03-.19.092-.254a.321.321 0 01.244-.098h1.093a.45.45 0 01.408.242l4.015 6.281V19.64c0-.102.03-.19.092-.254a.33.33 0 01.248-.098h1.207c.1 0 .189.034.252.098a.343.343 0 01.097.254v9.198c0 .101-.034.19-.097.254a.322.322 0 01-.24.097h-1.11a.452.452 0 01-.42-.241l-3.998-6.142v6.044a.34.34 0 01-.092.242.312.312 0 01-.244.097h-1.206c-.101 0-.181-.034-.244-.097zM68.602 29.092a.315.315 0 01-.097-.242v-9.223c0-.101.034-.186.097-.245a.339.339 0 01.24-.094h1.344c.101 0 .185.03.244.093a.34.34 0 01.093.246v9.223a.34.34 0 01-.093.242.312.312 0 01-.244.097h-1.345a.325.325 0 01-.24-.097zM74.971 29.092a.315.315 0 01-.096-.242v-7.794h-2.598a.34.34 0 01-.24-.098.337.337 0 01-.097-.254v-1.06c0-.101.03-.19.093-.254a.322.322 0 01.244-.098h7.171c.102 0 .19.034.253.098a.361.361 0 01.097.254v1.06c0 .106-.034.19-.097.254a.336.336 0 01-.252.098h-2.582v7.794a.34.34 0 01-.092.242c-.059.068-.143.097-.244.097h-1.32a.326.326 0 01-.24-.097zM81.311 29.092a.315.315 0 01-.096-.242v-9.21c0-.102.029-.19.092-.254a.322.322 0 01.244-.098h6.188c.1 0 .185.034.252.098a.344.344 0 01.097.254v.95a.32.32 0 01-.097.245.37.37 0 01-.252.093h-4.604v2.476h4.293a.34.34 0 01.252.097.344.344 0 01.097.255v.89a.327.327 0 01-.097.245.35.35 0 01-.252.094h-4.293v2.56h4.713c.1 0 .189.03.252.093a.317.317 0 01.097.246v.962a.327.327 0 01-.097.246.37.37 0 01-.252.093h-6.301a.315.315 0 01-.236-.093zM90.055 29.092a.313.313 0 01-.097-.242v-9.21c0-.102.03-.19.092-.254a.322.322 0 01.244-.098h3.422c2.758 0 4.166 1.285 4.225 3.849.017.547.03.915.03 1.102 0 .178-.009.542-.03 1.09-.038 1.317-.391 2.292-1.06 2.92-.668.627-1.698.94-3.093.94h-3.494a.324.324 0 01-.24-.097zm3.661-1.543c.778 0 1.337-.174 1.682-.521.344-.348.529-.928.546-1.742.017-.568.03-.92.03-1.06 0-.148-.01-.5-.03-1.047-.017-.771-.21-1.343-.576-1.704-.365-.364-.941-.547-1.727-.547h-1.712v6.621h1.787zM51.018 41.812c-.714-.67-1.097-1.602-1.143-2.802a47.683 47.683 0 01-.013-1.314c0-.602.005-1.042.013-1.314.038-1.17.42-2.085 1.152-2.75.731-.666 1.732-.997 3.001-.997.862 0 1.602.149 2.224.445.622.297 1.093.666 1.408 1.102.32.441.488.87.505 1.293 0 .085-.03.157-.084.212a.303.303 0 01-.223.085h-1.476a.357.357 0 01-.21-.055.49.49 0 01-.126-.182 1.973 1.973 0 00-.69-.89c-.327-.246-.773-.37-1.332-.37-.656 0-1.169.179-1.538.53-.37.352-.564.903-.585 1.65-.008.275-.012.686-.012 1.245 0 .547.004.963.012 1.246.017.764.215 1.327.589 1.692.374.364.887.547 1.542.547.665 0 1.199-.178 1.598-.539.403-.36.601-.894.601-1.61v-.441h-1.71a.339.339 0 01-.24-.098.315.315 0 01-.097-.241v-.78c0-.093.034-.174.097-.242a.316.316 0 01.24-.097h3.366c.101 0 .19.034.253.097a.345.345 0 01.096.242v1.5c0 .784-.172 1.462-.521 2.043a3.386 3.386 0 01-1.476 1.335c-.634.31-1.378.467-2.232.467-1.27-.005-2.27-.34-2.989-1.01zM60.132 42.575a.321.321 0 01-.097-.242v-9.206c0-.102.03-.187.093-.254a.328.328 0 01.243-.098h3.637c1.152 0 2.051.267 2.699.806.651.538.975 1.3.975 2.292 0 .687-.164 1.268-.492 1.734-.328.466-.786.805-1.375 1.013l2.035 3.607c.03.055.042.11.042.157 0 .085-.03.157-.093.212a.305.305 0 01-.201.085h-1.29c-.152 0-.266-.034-.35-.106a1.068 1.068 0 01-.227-.276l-1.795-3.353h-1.92v3.396a.345.345 0 01-.098.241.337.337 0 01-.252.098h-1.29a.349.349 0 01-.244-.106zm3.83-5.248c.559 0 .983-.123 1.26-.373.282-.25.42-.614.42-1.098 0-.483-.138-.851-.42-1.11-.281-.259-.701-.39-1.26-.39H62.01v2.971h1.95zM70.263 41.842c-.71-.649-1.085-1.62-1.123-2.9a42.37 42.37 0 01-.012-1.203c0-.539.004-.941.013-1.217.037-1.254.42-2.217 1.151-2.886.732-.67 1.715-1.005 2.96-1.005 1.236 0 2.22.335 2.955 1.005.736.67 1.118 1.632 1.156 2.886.017.547.03.954.03 1.217 0 .254-.009.657-.03 1.203-.038 1.285-.412 2.251-1.13 2.9-.716.652-1.712.974-2.981.974-1.282 0-2.279-.326-2.99-.974zm4.477-1.234c.366-.377.56-.958.588-1.742.017-.564.03-.95.03-1.144 0-.216-.009-.598-.03-1.145-.029-.771-.23-1.352-.6-1.733-.375-.382-.867-.572-1.476-.572-.618 0-1.114.19-1.488.572-.374.381-.572.958-.589 1.733a39.9 39.9 0 00-.013 1.145c0 .483.005.864.013 1.144.017.776.215 1.352.585 1.734.37.381.865.572 1.492.572.626.004 1.122-.187 1.488-.564zM80.184 41.841c-.702-.648-1.051-1.636-1.051-2.958v-5.756c0-.102.029-.187.092-.254.059-.068.143-.098.244-.098h1.29a.35.35 0 01.253.098.353.353 0 01.096.254v5.756c0 .746.177 1.305.526 1.682.348.378.85.569 1.492.569.648 0 1.144-.191 1.493-.569.349-.377.525-.936.525-1.682v-5.756c0-.102.034-.187.097-.254a.337.337 0 01.252-.098h1.29c.101 0 .185.034.244.098a.377.377 0 01.093.254v5.756c0 1.322-.35 2.306-1.047 2.958-.698.653-1.677.975-2.938.975-1.266 0-2.25-.326-2.951-.975zM89.331 42.575a.319.319 0 01-.097-.242v-9.206c0-.102.03-.19.093-.254a.328.328 0 01.243-.098h3.763c1.131 0 2.022.267 2.665.806.647.538.967 1.322.967 2.348 0 1.017-.324 1.788-.967 2.314-.647.521-1.534.784-2.665.784h-2.064v3.31a.327.327 0 01-.097.246.373.373 0 01-.252.093h-1.35a.313.313 0 01-.239-.101zm3.926-5.133c.543 0 .955-.127 1.24-.39.286-.259.43-.64.43-1.14 0-.492-.14-.873-.413-1.145-.277-.271-.693-.41-1.257-.41h-2.021v3.085h2.021zM85.426 48.873H61.022v.97h24.404v-.97zM23.963 54.345c2.467.022 4.964-.55 7.314-1.674 6.28-3 9.619-8.062 9.627-15.19V15.358a14.386 14.386 0 00-.736-.02c-1.4.008-2.678.338-3.934.792-5.07 1.822-8.353 6.544-8.34 11.953v10.265c.004 1.649-.24 3.243-.917 4.76-1.8 4.035-5.789 5.913-9.648 5.93-1.417.008-2.82-.216-4.077-.712-2.586-1.026-4.263-2.87-5.583-4.383 0 0 3.809 10.295 16.294 10.401zM39.02 37.48c-.005 3.099-.664 5.803-2.094 8.04-1.433 2.243-3.602 4.07-6.457 5.43a15.18 15.18 0 01-6.52 1.492 15.673 15.673 0 01-6.768-1.5h.156c5.078-.026 9.429-2.725 11.358-7.053.74-1.662 1.089-3.476 1.08-5.548V28.079c-.008-4.616 2.767-8.604 7.088-10.16a12.79 12.79 0 012.153-.572V37.48h.004z" />
                            <path d="M30.499 28.079c.004 1.352.004 2.704.008 4.06l.013 6.201c.008 2.179-.37 4.09-1.156 5.854-1.631 3.657-4.885 6.222-8.853 7.129 1.122.258 2.274.39 3.434.386a14.482 14.482 0 006.21-1.42c2.727-1.306 4.796-3.04 6.154-5.163 1.353-2.115 1.975-4.688 1.98-7.642V18.262c-.35.094-.778.212-1.178.352-4.023 1.454-6.62 5.167-6.612 9.465zm5.915-7.024V37.48c-.005 2.585-.538 4.81-1.69 6.612-1.165 1.822-2.972 3.327-5.377 4.476-.307.148-.618.28-.933.402a14.35 14.35 0 002.673-3.992c.896-2.014 1.32-4.184 1.312-6.638V28.074a8.031 8.031 0 014.015-7.019z" />
                            <path d="M30.957 46.813c1.337-.894 2.396-1.937 3.149-3.12 1.076-1.682 1.576-3.776 1.58-6.213V22.467a7.333 7.333 0 00-2.56 5.608v10.257c.009 2.56-.437 4.832-1.379 6.943-.23.53-.496 1.042-.79 1.538zM24.181 45.618c-.18.009-.353.009-.517.013-2.43.013-3.023-.653-3.04-3.23-.029-4.183.017-7.896 0-12.084-.025-5.417-2.51-9.435-7.058-12.186-2.148-1.3-4.498-1.958-7.087-1.945-.101 0-.194 0-.294.004v20.74a9.42 9.42 0 00.138 1.648c.858 4.667 4.952 8.672 9.598 9.473 4.737.822 8.26-2.433 8.26-2.433zM8.244 36.921V18.398c1.518.208 2.897.712 4.25 1.535 2.035 1.233 3.51 2.67 4.503 4.4.992 1.724 1.53 3.687 1.538 5.997v12.084c.009 1.246.181 2.594.883 3.62-.4.072-.82.11-1.27.11-.584.004-1.202-.051-1.891-.166-3.796-.631-7.189-3.98-7.89-7.786a7.056 7.056 0 01-.123-1.271z" />
                            <path d="M16.39 45.177c.648.106 1.22.157 1.758.157h.033c-.328-.958-.446-1.992-.454-2.912V30.33c-.02-4.315-1.845-7.4-5.65-9.698-.98-.594-1.963-1.009-3.022-1.255V36.92c0 .475.054.835.105 1.124.635 3.429 3.808 6.56 7.23 7.133zm-5.246-8.27V22.502c1.547.954 2.627 2.026 3.35 3.268.736 1.267 1.148 2.763 1.156 4.569v12.478c-2.16-.818-4.035-2.975-4.439-5.162a3.936 3.936 0 01-.067-.746z" />
                            <path d="M14.848 41.502v-11.16c-.012-2.73-.908-4.679-2.88-6.277v12.843c0 .394.047.55.055.602.286 1.547 1.396 3.077 2.825 3.992z" />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_9507_68539">
                          <path
                            fill="#fff"
                            d="M0 0H92.164V41.338H0z"
                            transform="translate(5.836 13.93)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={103}
                      height={70}
                      fill="none"
                      viewBox="0 0 103 70"
                    >
                      <g clipPath="url(#clip0_9507_68565)">
                        <path
                          fill="#fff"
                          d="M38.395 30.493c0-2.987-.07-5.507-.142-7.654h4.694l.25 3.174h.07c1.28-2.38 3.272-3.687 5.797-3.687 3.805 0 7.22 4.34 7.22 11.62 0 8.308-4.02 12.229-7.896 12.229-2.097 0-3.734-1.12-4.516-2.614H43.8v11.34h-5.406V30.494zm5.406 5.367a9.6 9.6 0 00.107 1.493c.355 1.914 1.6 3.36 3.164 3.36 2.348 0 3.735-2.566 3.735-6.44 0-3.64-1.245-6.394-3.663-6.394-1.53 0-2.881 1.494-3.236 3.594-.072.373-.107.84-.107 1.26v3.127z"
                        />
                        <path
                          stroke="#fff"
                          strokeWidth="0.918"
                          d="M38.395 30.493c0-2.987-.07-5.507-.142-7.654h4.694l.25 3.174h.07c1.28-2.38 3.272-3.687 5.797-3.687 3.805 0 7.22 4.34 7.22 11.62 0 8.308-4.02 12.229-7.896 12.229-2.097 0-3.734-1.12-4.516-2.614H43.8v11.34h-5.406V30.494zm5.406 5.367a9.6 9.6 0 00.107 1.493c.355 1.914 1.6 3.36 3.164 3.36 2.348 0 3.735-2.566 3.735-6.44 0-3.64-1.245-6.394-3.663-6.394-1.53 0-2.881 1.494-3.236 3.594-.072.373-.107.84-.107 1.26v3.127z"
                        />
                        <path
                          fill="#fff"
                          d="M63.93 36.467c.177 2.987 2.382 4.387 4.907 4.387 1.85 0 3.343-.326 4.801-.98l.711 4.807c-1.777.98-3.947 1.447-6.294 1.447-5.904 0-9.283-4.48-9.283-11.668 0-5.787 2.775-12.18 8.785-12.18 5.619 0 7.753 5.74 7.753 11.386 0 1.214-.107 2.288-.178 2.848l-11.202-.047zm6.365-4.854c0-1.68-.569-4.62-3.023-4.62-2.311 0-3.236 2.753-3.378 4.62h6.401z"
                        />
                        <path
                          stroke="#fff"
                          strokeWidth="0.918"
                          d="M63.93 36.467c.177 2.987 2.382 4.387 4.907 4.387 1.85 0 3.343-.326 4.801-.98l.711 4.807c-1.777.98-3.947 1.447-6.294 1.447-5.904 0-9.283-4.48-9.283-11.668 0-5.787 2.775-12.18 8.785-12.18 5.619 0 7.753 5.74 7.753 11.386 0 1.214-.107 2.288-.178 2.848l-11.202-.047zm6.365-4.854c0-1.68-.569-4.62-3.023-4.62-2.311 0-3.236 2.753-3.378 4.62h6.401z"
                        />
                        <path
                          fill="#fff"
                          d="M82.244 22.84l1.707 3.826c.498 1.167.96 2.287 1.423 3.407h.071c.462-1.26.889-2.38 1.352-3.547l1.529-3.687h5.867l-5.725 10.874 5.796 11.948h-6.116l-1.743-4.107a39.492 39.492 0 01-1.351-3.453h-.107c-.427 1.213-.89 2.333-1.316 3.453l-1.635 4.107h-5.94L81.96 34.04l-5.762-11.2h6.046z"
                        />
                        <path
                          stroke="#fff"
                          strokeWidth="0.918"
                          d="M82.244 22.84l1.707 3.826c.498 1.167.96 2.287 1.423 3.407h.071c.462-1.26.889-2.38 1.352-3.547l1.529-3.687h5.867l-5.725 10.874 5.796 11.948h-6.116l-1.743-4.107a39.492 39.492 0 01-1.351-3.453h-.107c-.427 1.213-.89 2.333-1.316 3.453l-1.635 4.107h-5.94L81.96 34.04l-5.762-11.2h6.046z"
                        />
                        <mask
                          id="mask0_9507_68565"
                          style={{ maskType: "alpha" }}
                          width={88}
                          height={43}
                          x={8}
                          y={13}
                          maskUnits="userSpaceOnUse"
                        >
                          <path
                            fill="#fff"
                            d="M8.453 55.36h86.551V13.738H8.454v41.624z"
                          />
                        </mask>
                        <g mask="url(#mask0_9507_68565)">
                          <mask
                            id="mask1_9507_68565"
                            style={{ maskType: "alpha" }}
                            width={30}
                            height={9}
                            x={8}
                            y={30}
                            maskUnits="userSpaceOnUse"
                          >
                            <path
                              fill="#fff"
                              d="M37.205 38.72S26.78 30.314 16.75 30.314c-10.03 0-8.162 5.556-8.162 5.556s.147-2.606 8.309-2.606c8.162 0 20.307 5.458 20.307 5.458z"
                            />
                          </mask>
                          <g fill="#fff" mask="url(#mask1_9507_68565)">
                            <path d="M37.205 38.72S26.78 30.314 16.75 30.314c-10.03 0-8.162 5.556-8.162 5.556s.147-2.606 8.309-2.606c8.162 0 20.307 5.458 20.307 5.458z" />
                            <path d="M37.135 38.748v-.046h-.091v-.046h-.092v-.046h-.138v-.046h-.092v-.045h-.092v-.046h-.137v-.046H36.4v-.046h-.092v-.046h-.137v-.046h-.092v-.046h-.138v-.046h-.092v-.046h-.092v-.046h-.137v-.045h-.092v-.046h-.138v-.046H35.3v-.046h-.138v-.046h-.092v-.046h-.138v-.046h-.091v-.046h-.138v-.046h-.092v-.045h-.137V37.6h-.092v-.046h-.138v-.046h-.092v-.046h-.137v-.046h-.138v-.046h-.092v-.046h-.137v-.046h-.092v-.046h-.138v-.045h-.138v-.046h-.091v-.046h-.138v-.046h-.138v-.046h-.091v-.046h-.138v-.046h-.138v-.046h-.092v-.045h-.137v-.046h-.138v-.046h-.138v-.046h-.091v-.046h-.138v-.046h-.138v-.046h-.137V36.5h-.092v-.046h-.138v-.046h-.138v-.045h-.137v-.046h-.138v-.046h-.138v-.046h-.137v-.046h-.138v-.046h-.138v-.046h-.091v-.046h-.138v-.046h-.138v-.045h-.137v-.046H29.7v-.046h-.138v-.046h-.137v-.046h-.184v-.046h-.138v-.046h-.137v-.046h-.138v-.046h-.138v-.046h-.137v-.045h-.138v-.046h-.184v-.046h-.137v-.046h-.138v-.046h-.138v-.046h-.183v-.046h-.138v-.046h-.184v-.045h-.137v-.046h-.138v-.046h-.183v-.046h-.138v-.046h-.184v-.046h-.137v-.046h-.184v-.046h-.184v-.046h-.137v-.046h-.184v-.045h-.183v-.046h-.184v-.046h-.138v-.046h-.183v-.046h-.184v-.046h-.183v-.046h-.184v-.046h-.183v-.045h-.23v-.046h-.183v-.046h-.184v-.046h-.23v-.046h-.183v-.046h-.23v-.046h-.229v-.046h-.183v-.046h-.23v-.046h-.275v-.046h-.23v-.045h-.23v-.046h-.274V33.7h-.276v-.046h-.275v-.046h-.321v-.046H20.2v-.046h-.32v-.046h-.414v-.045h-.413v-.046h-.505v-.046h-.734v-.046h-2.157v.046h-.78v.046h-.688v.046h-.413v.045h-.368v.046h-.367v.046h-.275v.046h-.23v.046h-.275v.046h-.184v.046h-.229v.046h-.184v.045h-.183v.046h-.138v.046h-.137v.046h-.138v.046h-.184v.046h-.137v.046h-.092v.046h-.138v.046h-.091v.046h-.092v.046h-.138v.045h-.092v.046h-.092v.046h-.045v.046h-.092v.046h-.092v.046h-.092v.046h-.046v.046h-.091v.045h-.046v.046h-.092v.046H9.37v.046h-.046v.046H9.28v.046h-.092v.046h-.045v.046h-.046v.046H9.05v.046h-.046v.045h-.046v.092h-.046v.046h-.046v.046H8.82v.092h-.046v.046h-.046v.091h-.045v.138h-.046v.138H8.59v.046h-.046v-.184h-.046v-.23h-.046v-1.238H8.5v-.23h.046v-.184h.046V33.7h.046v-.138h.046v-.137h.045v-.092h.046v-.092h.046v-.092h.046v-.092h.046v-.091h.046v-.046h.046v-.092h.046v-.046h.046v-.046h.046v-.092h.045V32.6h.046v-.046h.046v-.092h.046v-.046h.046v-.046h.046v-.046h.046v-.046h.046v-.046h.046v-.046H9.6v-.045h.046v-.046h.046v-.046h.092v-.046h.046v-.046h.046v-.046h.046v-.046h.091v-.046h.046v-.046h.092v-.045h.046v-.046h.092v-.046h.046v-.046h.091v-.046h.092v-.046h.046v-.046h.092v-.046h.092v-.046h.091v-.046h.092v-.045h.092v-.046h.092v-.046h.137v-.046h.092v-.046h.138v-.046h.092v-.046h.137v-.046h.138V30.9h.184v-.045h.137v-.046h.138v-.046h.184v-.046h.183v-.046h.184v-.046h.275v-.046h.23v-.046h.275v-.046h.321v-.045h.321v-.046h.505v-.046h.643v-.046h2.478v.046h.596v.046h.413v.046h.413v.046h.322v.045h.32v.046h.276v.046h.276v.046h.229v.046h.23v.046h.229v.046h.184v.046h.229v.046h.184v.045h.183v.046h.184v.046h.183v.046h.184v.046h.137v.046h.184v.046h.184v.046h.137v.046h.184v.045h.138v.046h.137v.046h.138v.046h.138v.046h.183v.046h.138v.046h.138v.046h.091v.046h.138v.045h.138v.046h.137v.046h.138v.046h.138v.046h.091v.046h.138v.046h.138v.046h.091v.046h.138v.045h.138v.046h.092v.046h.137v.046h.092v.046h.138v.046h.092v.046h.137v.046h.092v.046h.138v.046h.091v.045h.092v.046h.092v.046h.138v.046h.091v.046h.092v.046h.138v.046h.092v.046h.091v.045h.092v.046h.138v.046h.092v.046h.092v.046h.091v.046h.092v.046h.092v.046h.092v.046h.137v.046h.092v.045h.092v.046h.092v.046h.091v.046h.092v.046h.092v.046h.092v.046h.092v.046h.091v.045h.092v.046h.092v.046h.092v.046h.091v.046h.092v.046h.092v.046h.046v.046h.092v.046h.092v.046h.091v.046h.092v.045h.092v.046h.092v.046h.091v.046h.046v.046h.092v.046h.092v.046h.092v.046h.091v.045h.046v.046h.092v.046h.092v.046h.092v.046h.091v.046h.046v.046h.092v.046h.092v.046h.092v.046h.046v.045h.091v.046h.092v.046h.046v.046h.092v.046h.092v.046h.091v.046h.046v.046h.092v.045h.092v.046h.046v.046h.092v.046h.091v.046h.046v.046h.092v.046h.046v.046h.092v.046h.091v.046h.046v.045h.092v.046h.046v.046h.092v.046h.092v.046h.046v.046h.091v.046h.046v.046h.092v.046h.092v.045h.046v.046h.091v.046h.046v.046h.092v.046h.046v.046h.092v.046h.046v.046h.092v.046h.045v.046h.092v.045h.046v.046h.092v.046h.046v.046h.091v.046h.046v.046h.092v.046h.046v.046h.092v.045h.046v.046h.046v.046h.091v.046h.046v.046h.092v.046h.046v.046h.092v.046h.046v.046h.091v.046h.046v.045h.046v.046h.092v.046h.046v.046h.092v.046h.046v.046h.045v.046h.092v.046h.046v.046h.046v.045h.092v.046h.046v.046h.046v.046h.091v.046h.046v.046h.046v.046h.092v.046h.046v.046h.046v.046h.092v.045h.045v.046h.046v.046h.046v.046h.046v.046" />
                          </g>
                        </g>
                        <mask
                          id="mask2_9507_68565"
                          style={{ maskType: "alpha" }}
                          width={19}
                          height={7}
                          x={9}
                          y={26}
                          maskUnits="userSpaceOnUse"
                        >
                          <path
                            fill="#fff"
                            d="M9.241 31.662s5.789-4.201 18.621.814c0 0-7.08-5.753-12.734-5.753-5.655 0-5.887 4.94-5.887 4.94z"
                          />
                        </mask>
                        <g fill="#fff" mask="url(#mask2_9507_68565)">
                          <path d="M9.241 31.662s5.789-4.201 18.621.814c0 0-7.08-5.753-12.734-5.753-5.655 0-5.887 4.94-5.887 4.94z" />
                          <path d="M9.241 31.662s5.789-4.201 18.621.814c0 0-7.08-5.753-12.734-5.753-5.655 0-5.887 4.94-5.887 4.94z" />
                        </g>
                        <mask
                          id="mask3_9507_68565"
                          style={{ maskType: "alpha" }}
                          width={13}
                          height={5}
                          x={11}
                          y={24}
                          maskUnits="userSpaceOnUse"
                        >
                          <path
                            fill="#fff"
                            d="M11.514 27.152s2.945-2.708 11.576 1.538c0 0-4.363-4.51-7.755-4.51-3.393 0-3.772 1.94-3.821 2.972z"
                          />
                        </mask>
                        <g fill="#fff" mask="url(#mask3_9507_68565)">
                          <path d="M11.514 27.152s2.945-2.708 11.576 1.538c0 0-4.363-4.51-7.755-4.51-3.393 0-3.772 1.94-3.821 2.972z" />
                          <path d="M11.514 27.152s2.945-2.708 11.576 1.538c0 0-4.363-4.51-7.755-4.51-3.393 0-3.772 1.94-3.821 2.972z" />
                        </g>
                        <mask
                          id="mask4_9507_68565"
                          style={{ maskType: "alpha" }}
                          width={7}
                          height={8}
                          x={8}
                          y={33}
                          maskUnits="userSpaceOnUse"
                        >
                          <path
                            fill="#fff"
                            d="M8.589 35.87s1.716 4.014 5.999 4.243c0 0-3.409-3.648-2.966-6.317 0 0-2.712.467-3.033 2.073z"
                          />
                        </mask>
                        <g fill="#fff" mask="url(#mask4_9507_68565)">
                          <path d="M8.589 35.87s1.716 4.014 5.999 4.243c0 0-3.409-3.648-2.966-6.317 0 0-2.712.467-3.033 2.073z" />
                          <path d="M8.589 35.87s1.716 4.014 5.999 4.243c0 0-3.409-3.648-2.966-6.317 0 0-2.712.467-3.033 2.073z" />
                        </g>
                        <path
                          fill="#fff"
                          d="M23.247 25.593c.355-1.82.746-4.2 1.066-6.067h.107c.356 1.82.782 4.2 1.173 6.067l.85 3.798 6.335 4.439-4.66-19.625h-7.076l-2.283 9.801 4.192 2.938.296-1.351z"
                        />
                        <path
                          stroke="#fff"
                          strokeWidth="0.918"
                          d="M23.247 25.593c.355-1.82.746-4.2 1.066-6.067h.107c.356 1.82.782 4.2 1.173 6.067l.85 3.798 6.335 4.439-4.66-19.625h-7.076l-2.283 9.801 4.192 2.938.296-1.351z"
                        />
                        <path
                          fill="#fff"
                          d="M16.363 34.293L13.715 45.66h5.62l1.67-8.074.42-2.853c-1.668-.323-3.496-.548-5.062-.441z"
                        />
                        <path
                          stroke="#fff"
                          strokeWidth="0.918"
                          d="M16.363 34.293L13.715 45.66h5.62l1.67-8.074.42-2.853c-1.668-.323-3.496-.548-5.062-.441v0z"
                        />
                        <path
                          fill="#fff"
                          d="M27.738 36.506l.166 1.081 1.85 8.074h5.832l-1.65-6.948-6.198-2.207z"
                        />
                        <path
                          stroke="#fff"
                          strokeWidth="0.918"
                          d="M27.738 36.506l.166 1.081 1.85 8.074h5.832l-1.65-6.948-6.198-2.207z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_9507_68565">
                          <path
                            fill="#fff"
                            d="M0 0H86.547V41.614H0z"
                            transform="translate(8.453 13.746)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="text-center text-gray-400">
                  আরও জানতে{/* */}{" "}
                  <a
                    href="mailto:corporate@10minuteschool.com"
                    className="underline text-green"
                  >
                    ইমেইল করুন
                  </a>{" "}
                  {/* */}অথবা{/* */}{" "}
                  <a href="tel:01844601475" className="underline text-green">
                    কল করুন
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="section visible pt-20">
            <div
              className="mx-auto px-4 text-center"
              style={{ color: "initial", maxWidth: 578 }}
            >
              <div className=" mx-auto">
                <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] text-[#111827]">
                  কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?
                </h2>
              </div>
            </div>
            <div className="container mb-20 mx-auto">
              <div className="text-center">
                {/* <h2 className="text-center font-semibold md:text-[20px] mb-5 text-center text-lg font-bold md:mb-8 md:text-[28px] md:font-semibold md:leading-[44px]" /> */}
              </div>
              <div className="tenms-carousel relative  light right">
                <div className="w-full overflow-hidden">
                  <div className="cursor-pointer absolute right-0 top-1/2 z-[3] block -translate-y-1/2  mx-lg:hidden ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={33}
                      height={32}
                      fill="none"
                      viewBox="0 0 33 32"
                      className="xl:mr-[-40px]"
                    >
                      <path
                        fill="#000"
                        fillOpacity="0.5"
                        fillRule="evenodd"
                        d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="cursor-pointer absolute left-0 top-1/2 z-[2] block -translate-y-1/2  mx-lg:hidden pointer-events-none opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={33}
                      height={32}
                      fill="none"
                      viewBox="0 0 33 32"
                      className="rotate-180 xl:ml-[-40px]"
                    >
                      <path
                        fill="#000"
                        fillOpacity="0.5"
                        fillRule="evenodd"
                        d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
                  <div className="mr-4 ">
                    <div
                      className="TestimonialSlider_testimonial_card__qXBRd relative mt-5 w-[260px] rounded-lg border p-6 align-top md:w-[372px]  flex min-h-[250px] flex-col justify-between bg-[#FFF] md:min-h-[270px]"
                      style={{ width: 372 }}
                    >
                      <div>
                        <div
                          className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2 z-[2]"
                          id="quote"
                        >
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              fill="none"
                              viewBox="0 0 20 30"
                            >
                              <path
                                fill="#D33242"
                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                              />
                            </svg>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              fill="none"
                              viewBox="0 0 20 30"
                            >
                              <path
                                fill="#D33242"
                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="my-4">
                          <div className="text-[16px] font-[500px] leading-[26px] line-clamp-6">
                            কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ করে,
                            “Reading” এবং “Writing” সেকশন এতটাই informative ছিল যা আমার
                            জন্য Mock Test এবং Real Exam কে সহজ করে তুলেছিল। আমার সবচেয়ে
                            ভালো লেগেছে “Writing Part”।
                          </div>
                        </div>
                      </div>
                      <div className="TestimonialSlider_testimonial_user__2Uxrv flex gap-4">
                        <div>
                          <h3>Tahiya Faiza</h3>
                          <p className="text-sm text-gray-400 line-clamp-1">
                            Teaching Assistant, Brac University
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mr-4 ">
                    <div
                      className="TestimonialSlider_testimonial_card__qXBRd relative mt-5 w-[260px] rounded-lg border p-6 align-top md:w-[372px]  flex min-h-[250px] flex-col justify-between bg-[#FFF] md:min-h-[270px]"
                      style={{ width: 372 }}
                    >
                      <div>
                        <div
                          className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2 z-[2]"
                          id="quote"
                        >
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              fill="none"
                              viewBox="0 0 20 30"
                            >
                              <path
                                fill="#D33242"
                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                              />
                            </svg>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              fill="none"
                              viewBox="0 0 20 30"
                            >
                              <path
                                fill="#D33242"
                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="my-4">
                          <div className="text-[16px] font-[500px] leading-[26px] line-clamp-6">
                            অফলাইনে শেখার মত সময় হয়ে উঠছিল না তাই অনলাইন কোর্স কে বেছে
                            নেওয়া । কোর্সটিতে খুব সুন্দর করে হরফ তানভীন মাদ পড়ানো হয়েছে
                            । খুব সহজেই প্রতিদিন প্র্যাকটিস করে খুব দ্রুত শুদ্ধ তেলাওয়াত
                            আয়ত্ত করতে পেরেছি।
                          </div>
                        </div>
                      </div>
                      <div className="TestimonialSlider_testimonial_user__2Uxrv flex gap-4">
                        <div>
                          <h3>Zakirul Islam</h3>
                          <p className="text-sm text-gray-400 line-clamp-1">
                            Businessman
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mr-4 ">
                    <div
                      className="TestimonialSlider_testimonial_card__qXBRd relative mt-5 w-[260px] rounded-lg border p-6 align-top md:w-[372px]  flex min-h-[250px] flex-col justify-between bg-[#FFF] md:min-h-[270px]"
                      style={{ width: 372 }}
                    >
                      <div>
                        <div
                          className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2 z-[2]"
                          id="quote"
                        >
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              fill="none"
                              viewBox="0 0 20 30"
                            >
                              <path
                                fill="#D33242"
                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                              />
                            </svg>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              fill="none"
                              viewBox="0 0 20 30"
                            >
                              <path
                                fill="#D33242"
                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="my-4">
                          <div className="text-[16px] font-[500px] leading-[26px] line-clamp-6">
                            আমার একটি অনলাইন পেজ ছিল কিন্তু পেইজটিকে নিয়ে কিভাবে সামনে
                            আগাবে কোন কিছু বুঝতে পারছিলাম না । কোর্সটি করার মাধ্যমে কিভাবে
                            একটি বেসিক পোস্ট দিবো কিভাবে ইউজ করব কিভাবে কন্টাক্ট করবো
                            শিখতে পেরেছি।
                          </div>
                        </div>
                      </div>
                      <div className="TestimonialSlider_testimonial_user__2Uxrv flex gap-4">
                        <div>
                          <h3>Hasibur Rahman</h3>
                          <p className="text-sm text-gray-400 line-clamp-1">
                            Online Business Owner
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mr-4 ">
                    <div
                      className="TestimonialSlider_testimonial_card__qXBRd relative mt-5 w-[260px] rounded-lg border p-6 align-top md:w-[372px]  flex min-h-[250px] flex-col justify-between bg-[#FFF] md:min-h-[270px]"
                      style={{ width: 372 }}
                    >
                      <div>
                        <div
                          className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2 z-[2]"
                          id="quote"
                        >
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              fill="none"
                              viewBox="0 0 20 30"
                            >
                              <path
                                fill="#D33242"
                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                              />
                            </svg>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              fill="none"
                              viewBox="0 0 20 30"
                            >
                              <path
                                fill="#D33242"
                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="my-4">
                          <div className="text-[16px] font-[500px] leading-[26px] line-clamp-6">
                            টেন মিনিট স্কুলের অনলাইন ব্যাচে ইংরেজি ক্লাস করার পর ইংরেজি
                            বিষয়ে আমি ৯০+ মার্কস পেয়েছি। এছাড়াও টেন মিনিট স্কুলের লাইভ
                            চ্যাট, পোল এবং লিডারবোর্ড ফিচারটি চমৎকার যা আমাদের প্রতিনিয়ত
                            পড়াশোনার আগ্রহ বাড়াতে সাহায্য করেছে।
                          </div>
                        </div>
                      </div>
                      <div className="TestimonialSlider_testimonial_user__2Uxrv flex gap-4">
                        <div>
                          <h3>Mushfik Jaman</h3>
                          <p className="text-sm text-gray-400 line-clamp-1">
                            Class 8, Bedkashi Collegiate School, Khulna
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mr-4 ">
                    <div
                      className="TestimonialSlider_testimonial_card__qXBRd relative mt-5 w-[260px] rounded-lg border p-6 align-top md:w-[372px]  flex min-h-[250px] flex-col justify-between bg-[#FFF] md:min-h-[270px]"
                      style={{ width: 372 }}
                    >
                      <div>
                        <div
                          className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2 z-[2]"
                          id="quote"
                        >
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              fill="none"
                              viewBox="0 0 20 30"
                            >
                              <path
                                fill="#D33242"
                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                              />
                            </svg>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              fill="none"
                              viewBox="0 0 20 30"
                            >
                              <path
                                fill="#D33242"
                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="my-4">
                          <div className="text-[16px] font-[500px] leading-[26px] line-clamp-6">
                            অনলাইন ব্যাচের ক্লাসের সবচেয়ে চমৎকার বিষয় হলো ক্লাসে পড়ানোর
                            টেকনিক। প্রত্যেকটি শিক্ষক এত যত্ন করে ক্লাসগুলো করান যে আমার
                            বাচ্চা ক্লাসগুলো খুব এঞ্জয় করে। পড়াশোনা এমন মজারই হওয়া
                            দরকার! এছাড়া, মান্থলি এক্সাম, লেকচার শীট গুলো ও খুবই
                            মানসম্মত।
                          </div>
                        </div>
                      </div>
                      <div className="TestimonialSlider_testimonial_user__2Uxrv flex gap-4">
                        <div>
                          <h3>Miftahul Jannat</h3>
                          <p className="text-sm text-gray-400 line-clamp-1">Class 7</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-20 ">
            <div className="container section visible mx-auto">
              <div className=" grid grid-cols-1 overflow-hidden rounded-[20px] bg-gradient-to-r from-[#050505] to-[#06081B] py-2 md:grid-cols-2 md:px-10">
                <div className="flex flex-col items-center justify-center flex-1 w-full section-content md:items-start">
                  <h2 className="mb-4 text-center text-[21px] font-[600] leading-[30px] text-white md:text-left md:text-[32px] md:leading-[48px]">
                    সেরা শিক্ষকের তৈরি ক্লাস নোট এবং লেকচার শিট প্রয়োজন?
                  </h2>
                  <div className="w-full px-6 md:max-w-max md:px-0">
                    <a
                      className="flex h-[42px] w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded  bg-green-500 px-4 py-2 text-base  text-white"
                      href="/resource/"
                    >
                      <span className="flex gap-2">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height={20}
                          width={20}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1={12} y1={15} x2={12} y2={3} />
                        </svg>
                        ফ্রি ডাউনলোড করুন
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center section-image md:justify-end">
                  <div
                    className="w-full max-w-[250px] md:max-w-[356px] opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                  >
                    <img
                      alt="svg"
                      data-original-src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/image_pdf_1685354763931.png"
                      draggable="false"
                      loading="lazy"
                      width={356}
                      height={341}
                      decoding="async"
                      data-nimg={1}
                      className=""
                      style={{ color: "transparent" }}
                      src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/image_pdf_1685354763931.png?w=356&h=341"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section mt-8 flex flex-col items-center justify-center py-4 md:py-12 visible"
            style={{
              backgroundImage:
                'url("https://cdn.10minuteschool.com/images/bg_01_1700634148023.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n      .odd-last-child-w-full:last-child:nth-child(odd) {\n      conspan: 2;\n      }\n   "
              }}
            />
            <div className="container text-center">
              <h2 className="text-[21px] font-bold leading-[30px] text-white md:text-[44px] md:font-semibold md:leading-[56px]">
                ২০২২-২৪ শিক্ষাবর্ষে টেন মিনিট স্কুলের এডমিশন সাফল্য
              </h2>
              <p className="text-sm text-white md:text-[21px] md:leading-[30px]">
                তোমাদের সাফল্যই আমাদের অনুপ্রেরণা
              </p>
            </div>
            <div className="container grid  grid-cols-2  gap-4 py-7 md:grid-cols-3 md:gap-12">
              <div className="border-1 col-span-1 flex flex-col items-center justify-center rounded-xl border-white border-opacity-0 bg-[#00000042] p-4 py-2 text-white   md:py-8 ">
                <h2 className="count text-2xl font-semibold  md:mb-[14px] md:text-[56px] md:leading-[44px]">
                  <span>১৫,৫৪৮</span>
                </h2>
                <p className="text-sm font-medium leading-[30px] md:text-xl">
                  মোট শিক্ষার্থী
                </p>
              </div>
              <div className="border-1 col-span-1 flex flex-col items-center justify-center rounded-xl border-white border-opacity-0 bg-[#00000042] p-4 py-2 text-white   md:py-8 ">
                <h2 className="count text-2xl font-semibold  md:mb-[14px] md:text-[56px] md:leading-[44px]">
                  <span>১,৪০০</span>+
                </h2>
                <p className="text-sm font-medium leading-[30px] md:text-xl">
                  চান্সপ্রাপ্ত শিক্ষার্থী
                </p>
              </div>
              <div className="border-1 col-span-1 flex flex-col items-center justify-center rounded-xl border-white border-opacity-0 bg-[#00000042] p-4 py-2 text-white   md:py-8 col-span-2 md:col-span-1 ">
                <h2 className="count text-2xl font-semibold  md:mb-[14px] md:text-[56px] md:leading-[44px]">
                  <span>৩৪</span>
                </h2>
                <p className="text-sm font-medium leading-[30px] md:text-xl">
                  টপ ১০০-তে চান্সপ্রাপ্ত শিক্ষার্থী
                </p>
              </div>
            </div>
          </div>

          <div className="section container py-[72px] md:py-28 visible mx-auto">
            <div className="bg-black pt-8 md:pt-0 px-5 rounded-[20px] flex flex-col md:flex-row relative items-center overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={1084}
                height={677}
                fill="none"
                viewBox="0 0 1084 677"
                className="absolute bottom-0 z-0 left-0"
              >
                <g clipPath="url(#clip0_11631_97147)" opacity="0.2">
                  <g filter="url(#filter0_f_11631_97147)">
                    <ellipse
                      cx="486.541"
                      cy="481.787"
                      fill="#8349FF"
                      rx="324.094"
                      ry="178.867"
                      transform="rotate(-6.481 486.541 481.787)"
                    />
                  </g>
                  <g filter="url(#filter1_f_11631_97147)">
                    <path
                      fill="url(#paint0_linear_11631_97147)"
                      d="M714.294 371.683c29.526-41.833 31.214-73.763 45.947-122.801 28.441-94.659 7.495-156.823 41.298-249.702 68.975-189.515 188.25 407.04 18.598 516.088-106.648 68.552-418.719 84.986-324.641 0 37.572-33.94 73.532-30.356 115.963-57.981 43.791-28.509 72.703-42.914 102.835-85.604z"
                    />
                  </g>
                  <g filter="url(#filter2_f_11631_97147)">
                    <path
                      fill="#0013FF"
                      d="M121.837 400.369C44.269 405.473-6.356 434.105-55.598 500.721c-99.754 134.953 483.072 177.823 401.904 29.562-51.179-93.481-125.391-136.432-224.469-129.914z"
                    />
                  </g>
                  <g filter="url(#filter3_f_11631_97147)">
                    <path
                      fill="#0FF"
                      d="M125.099 437.789c-64.495 4.243-106.589 28.05-147.532 83.44-82.944 112.21 401.663 147.855 334.173 24.58-42.554-77.727-104.26-113.44-186.641-108.02z"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_11631_97147"
                    width="973.528"
                    height="691.169"
                    x="-0.223"
                    y="136.203"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_11631_97147"
                      stdDeviation="82.049"
                    />
                  </filter>
                  <filter
                    id="filter1_f_11631_97147"
                    width="702.442"
                    height="884.235"
                    x="341.302"
                    y="-174.477"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_11631_97147"
                      stdDeviation="68.374"
                    />
                  </filter>
                  <filter
                    id="filter2_f_11631_97147"
                    width="749.407"
                    height="551.89"
                    x="-231.223"
                    y="235.627"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_11631_97147"
                      stdDeviation="82.049"
                    />
                  </filter>
                  <filter
                    id="filter3_f_11631_97147"
                    width="569.024"
                    height="404.794"
                    x="-141.414"
                    y="327.855"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_11631_97147"
                      stdDeviation="54.699"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_11631_97147"
                    x1="772.549"
                    x2="664.791"
                    y1="172.85"
                    y2="485.184"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF0095" />
                    <stop offset={1} stopColor="#FFCDFF" />
                  </linearGradient>
                  <clipPath id="clip0_11631_97147">
                    <rect width={1084} height={677} fill="#fff" rx={20} />
                  </clipPath>
                </defs>
              </svg>
              <div className="section-content md:w-1/2 flex md:px-[72px]  flex-col md:items-start items-center justify-center relative z-[1]">
                <h2 className="text-white text-center md:text-left font-semibold text-xl md:text-[34px] pb-5 md:pb-12 leading-8 md:leading-[44px]">
                  ডাউনলোড করুন আমাদের মোবাইল অ্যাপ, শেখা শুরু করুন আজ থেকেই
                </h2>
                <div className="store-link">
                  <div className="flex">
                    <div className="mr-4">
                      <a href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool">
                        <div
                          className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: 0, opacity: 1 }}
                        >
                          <img
                            alt="svg"
                            data-original-src="/images/home/googlePlay.svg"
                            draggable="false"
                            loading="lazy"
                            width={150}
                            height={48}
                            decoding="async"
                            data-nimg={1}
                            className=""
                            style={{ color: "transparent" }}
                            src="https://10minuteschool.com/images/home/googlePlay.svg?w=150&h=48"
                          />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="https://apps.apple.com/us/app/10-minute-school/id1577061772">
                        <div
                          className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: 0, opacity: 1 }}
                        >
                          <img
                            alt="svg"
                            data-original-src="/images/home/appStore.svg"
                            draggable="false"
                            loading="lazy"
                            width={150}
                            height={48}
                            decoding="async"
                            data-nimg={1}
                            className=""
                            style={{ color: "transparent" }}
                            src="https://10minuteschool.com/images/home/appStore.svg?w=150&h=48"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-image md:w-1/2 md:pl-12 z-[1]">
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <img
                    alt="svg"
                    data-original-src="https://cdn.10minuteschool.com/images/download_app_1668328988106.png"
                    draggable="false"
                    loading="lazy"
                    width={503}
                    height={428}
                    decoding="async"
                    data-nimg={1}
                    className="w-full"
                    style={{ color: "transparent" }}
                    src="https://cdn.10minuteschool.com/images/download_app_1668328988106.png?w=503&h=428"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}