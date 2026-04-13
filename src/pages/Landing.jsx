import { Navbar, Footer } from "@components/organisms";
import { FeatureCard, TestimonialCard } from "@components/molecules";
import {
  GooglePlayIcon,
  AppStoreIcon,
  MicrosoftIcon,
  DropboxIcon,
  HnMIcon,
  AirBnBIcon,
  CanonIcon,
  DellIcon,
  HeadphonesIcon,
  ShieldIcon,
  DownloadIcon,
} from "@components/atoms/icons";
import { usePageTitle } from "@hooks";

const Landing = () => {
  usePageTitle();
  return (
    <div className="text-neutral-800 overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-white py-15 sm:py-26.25">
          <div className="container mx-auto max-w-300 px-5 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-[1.75rem] sm:text-[2.2rem] md:text-[48px] font-medium leading-[1.2] mb-5 text-[#1a1a1a]">
                Smart Way to Your Financial Business
              </h1>
              <p className="text-[0.9rem] sm:text-[16px] text-gray-500 mb-7.5 md:max-w-112.5 mx-auto md:mx-0">
                We bring you a mobile app for handling problems that oftenly
                wasting much of your times.
              </p>
              <a
                href="#getstarted"
                className="inline-block px-8 py-3.5 mb-10 text-[1rem] font-semibold text-white transition-all bg-blue-700 rounded-lg shadow-lg hover:bg-blue-900 hover:-translate-y-1 shadow-blue-700/30 active:scale-95"
              >
                Get Started
              </a>

              <div className="flex flex-col items-center gap-4 mt-2 sm:mt-10 md:items-start">
                <span className="block text-[1rem] text-gray-500 mb-0 md:mb-2.5">
                  Available on
                </span>
                <div className="flex items-center gap-6.25">
                  <GooglePlayIcon />
                  <AppStoreIcon />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-1">
              <img
                src="/online-payment-security-concept-3d-phone-bill 1.png"
                alt="Mobile Banking App Illustration"
                className="max-w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="bg-gray-50 py-10">
          <div className="container mx-auto max-w-300 px-5 flex flex-wrap items-center justify-center md:justify-between gap-5 sm:gap-10">
            <MicrosoftIcon />
            <DropboxIcon />
            <HnMIcon />
            <AirBnBIcon />
            <CanonIcon />
            <DellIcon />
          </div>
        </section>

        {/* About Section */}
        <section className="py-15 md:py-34.5">
          <div className="container mx-auto max-w-300 px-5 flex flex-col lg:flex-row items-center gap-10 lg:gap-5">
            <div className="flex-1 text-center lg:text-left lg:min-w-120">
              <h2 className="text-[1.5rem] md:text-[36px] font-medium mb-3.75 text-neutral-800">
                About The Application
              </h2>
              <p className="text-[16px] text-gray-500 leading-relaxed md:max-w-md mx-auto lg:mx-0">
                We have some great features from the application and it's
                totally free to use by all users around the world.
              </p>
            </div>
            <div className="grid flex-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5.75 w-full mt-4 lg:mt-0">
              <FeatureCard
                iconSrc={<HeadphonesIcon />}
                title="24/7 Support"
                description="We have 24/7 contact support so you can contact us whenever you want and we will respond it."
              />
              <FeatureCard
                iconSrc={<ShieldIcon />}
                title="Data Privacy"
                description="We make sure your data is safe in our database and we will encrypt any data you submitted to us."
              />
              <FeatureCard
                iconSrc={<DownloadIcon />}
                title="Easy Download"
                description="Zwallet is 100% totally free to use. It's now available on Google Play Store and App Store."
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-15 lg:py-50 bg-blue-700 bg-[url('/wave-merged.png')] bg-cover bg-center text-white my-12.5">
          <div className="container mx-auto max-w-300 px-5 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-37.5 xl:gap-55.5">
            <div className="flex justify-center flex-1 lg:justify-start">
              <img
                src="/Mobile - Dashboard V2.png"
                alt="App UI Mockup"
                className="max-w-[80%] lg:max-w-full drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-[1.5rem] md:text-[36px] font-medium mb-6.25">
                All The Great Zwallet Features.
              </h2>
              <p className="text-[1rem] opacity-80 mb-10 leading-relaxed">
                We have some great features from the application and it's
                totally free to use by all users around the world.
              </p>

              <div className="flex flex-col gap-6.25 max-w-97.5 mx-auto lg:mx-0 mb-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  <div className="flex items-center justify-center shrink-0 bg-white rounded-full w-11.25 h-11.25">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.62076 12.1379C6.40252 12.1379 6.18918 12.2026 6.00771 12.3239C5.82625 12.4451 5.68482 12.6174 5.6013 12.8191C5.51779 13.0207 5.49593 13.2426 5.53851 13.4566C5.58109 13.6707 5.68618 13.8673 5.8405 14.0216C5.99482 14.1759 6.19144 14.281 6.40549 14.3236C6.61953 14.3662 6.8414 14.3443 7.04303 14.2608C7.24466 14.1773 7.41699 14.0359 7.53824 13.8544C7.65949 13.6729 7.72421 13.4596 7.72421 13.2413C7.72421 12.9487 7.60795 12.668 7.40101 12.4611C7.19408 12.2542 6.91341 12.1379 6.62076 12.1379ZM19.8621 12.1379C19.6439 12.1379 19.4306 12.2026 19.2491 12.3239C19.0676 12.4451 18.9262 12.6174 18.8427 12.8191C18.7592 13.0207 18.7373 13.2426 18.7799 13.4566C18.8225 13.6707 18.9276 13.8673 19.0819 14.0216C19.2362 14.1759 19.4328 14.281 19.6469 14.3236C19.8609 14.3662 20.0828 14.3443 20.2844 14.2608C20.486 14.1773 20.6584 14.0359 20.7796 13.8544C20.9009 13.6729 20.9656 13.4596 20.9656 13.2413C20.9656 12.9487 20.8493 12.668 20.6424 12.4611C20.4355 12.2542 20.1548 12.1379 19.8621 12.1379ZM22.069 5.51721H4.41386C3.5359 5.51721 2.6939 5.86598 2.07309 6.48679C1.45228 7.1076 1.10352 7.9496 1.10352 8.82756V17.6551C1.10352 18.5331 1.45228 19.3751 2.07309 19.9959C2.6939 20.6167 3.5359 20.9655 4.41386 20.9655H22.069C22.947 20.9655 23.789 20.6167 24.4098 19.9959C25.0306 19.3751 25.3794 18.5331 25.3794 17.6551V8.82756C25.3794 7.9496 25.0306 7.1076 24.4098 6.48679C23.789 5.86598 22.947 5.51721 22.069 5.51721ZM23.1725 17.6551C23.1725 17.9478 23.0562 18.2285 22.8493 18.4354C22.6424 18.6423 22.3617 18.7586 22.069 18.7586H4.41386C4.12121 18.7586 3.84054 18.6423 3.6336 18.4354C3.42667 18.2285 3.31041 17.9478 3.31041 17.6551V8.82756C3.31041 8.5349 3.42667 8.25424 3.6336 8.0473C3.84054 7.84036 4.12121 7.72411 4.41386 7.72411H22.069C22.3617 7.72411 22.6424 7.84036 22.8493 8.0473C23.0562 8.25424 23.1725 8.5349 23.1725 8.82756V17.6551ZM13.2414 9.93101C12.5867 9.93101 11.9467 10.1252 11.4023 10.4889C10.8579 10.8526 10.4336 11.3696 10.1831 11.9745C9.93254 12.5794 9.86698 13.245 9.99471 13.8872C10.1224 14.5293 10.4377 15.1192 10.9007 15.5821C11.3636 16.0451 11.9535 16.3604 12.5956 16.4881C13.2378 16.6158 13.9034 16.5503 14.5083 16.2997C15.1131 16.0492 15.6302 15.6249 15.9939 15.0805C16.3576 14.5361 16.5518 13.8961 16.5518 13.2413C16.5518 12.3634 16.203 11.5214 15.5822 10.9006C14.9614 10.2798 14.1194 9.93101 13.2414 9.93101ZM13.2414 14.3448C13.0232 14.3448 12.8099 14.2801 12.6284 14.1588C12.4469 14.0376 12.3055 13.8653 12.222 13.6636C12.1385 13.462 12.1166 13.2401 12.1592 13.0261C12.2018 12.812 12.3069 12.6154 12.4612 12.4611C12.6155 12.3068 12.8121 12.2017 13.0262 12.1591C13.2402 12.1165 13.4621 12.1384 13.6637 12.2219C13.8653 12.3054 14.0377 12.4468 14.1589 12.6283C14.2802 12.8098 14.3449 13.0231 14.3449 13.2413C14.3449 13.534 14.2286 13.8147 14.0217 14.0216C13.8148 14.2285 13.5341 14.3448 13.2414 14.3448Z"
                        fill="#2948FF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[1.1rem] font-semibold mb-1">
                      Small Fee
                    </h4>
                    <p className="text-[0.95rem] opacity-90">
                      We only charge 5% of every success transaction done in
                      Zwallet app.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  <div className="flex items-center justify-center shrink-0 bg-white rounded-full w-11.25 h-11.25">
                    <svg
                      width="20"
                      height="23"
                      viewBox="0 0 20 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.53469 21.8055C12.1112 21.8055 18.0003 19.2433 18.0003 12.1757C18.0003 5.10924 18.3071 4.55641 17.6285 3.87669C16.9488 3.19697 13.4067 1 9.53469 1C5.66269 1 2.12062 3.19697 1.442 3.87669C0.76228 4.55641 1.06904 5.10924 1.06904 12.1757C1.06904 19.2433 6.95925 21.8055 9.53469 21.8055Z"
                        stroke="#2948FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66748 11.068L8.7552 13.159L13.0564 8.85559"
                        stroke="#2948FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[1.1rem] font-semibold mb-1">
                      Data Secured
                    </h4>
                    <p className="text-[0.95rem] opacity-90">
                      All your data is secured properly in our system and it's
                      encrypted.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  <div className="flex items-center justify-center shrink-0 bg-white rounded-full w-11.25 h-11.25">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.676 13.4841C15.2648 12.9745 15.737 12.3441 16.0607 11.6359C16.3844 10.9276 16.5519 10.158 16.5519 9.3793C16.5519 7.91604 15.9706 6.51271 14.9359 5.47802C13.9012 4.44334 12.4979 3.86206 11.0346 3.86206C9.57135 3.86206 8.16802 4.44334 7.13334 5.47802C6.09866 6.51271 5.51738 7.91604 5.51738 9.3793C5.51737 10.158 5.68488 10.9276 6.00855 11.6359C6.33222 12.3441 6.80446 12.9745 7.39324 13.4841C5.84856 14.1836 4.53803 15.3131 3.61832 16.7377C2.69861 18.1623 2.20866 19.8216 2.20703 21.5172C2.20703 21.8099 2.32329 22.0906 2.53022 22.2975C2.73716 22.5044 3.01783 22.6207 3.31048 22.6207C3.60313 22.6207 3.8838 22.5044 4.09074 22.2975C4.29767 22.0906 4.41393 21.8099 4.41393 21.5172C4.41393 19.7613 5.11146 18.0773 6.35308 16.8357C7.5947 15.5941 9.2787 14.8965 11.0346 14.8965C12.7905 14.8965 14.4745 15.5941 15.7162 16.8357C16.9578 18.0773 17.6553 19.7613 17.6553 21.5172C17.6553 21.8099 17.7716 22.0906 17.9785 22.2975C18.1854 22.5044 18.4661 22.6207 18.7588 22.6207C19.0514 22.6207 19.3321 22.5044 19.539 22.2975C19.7459 22.0906 19.8622 21.8099 19.8622 21.5172C19.8606 19.8216 19.3706 18.1623 18.4509 16.7377C17.5312 15.3131 16.2207 14.1836 14.676 13.4841V13.4841ZM11.0346 12.6896C10.3799 12.6896 9.73987 12.4955 9.19549 12.1318C8.6511 11.768 8.22681 11.251 7.97626 10.6461C7.72571 10.0412 7.66015 9.37563 7.78788 8.73349C7.91561 8.09134 8.23089 7.50149 8.69385 7.03853C9.15681 6.57557 9.74666 6.2603 10.3888 6.13256C11.0309 6.00483 11.6965 6.07039 12.3014 6.32094C12.9063 6.57149 13.4233 6.99579 13.7871 7.54017C14.1508 8.08456 14.345 8.72458 14.345 9.3793C14.345 10.2573 13.9962 11.0993 13.3754 11.7201C12.7546 12.3409 11.9126 12.6896 11.0346 12.6896ZM23.956 10.0745C23.8534 9.97105 23.7314 9.88896 23.5969 9.83294C23.4624 9.77692 23.3182 9.74808 23.1725 9.74808C23.0269 9.74808 22.8827 9.77692 22.7482 9.83294C22.6137 9.88896 22.4917 9.97105 22.3891 10.0745L20.1822 12.2814L19.4981 11.5862C19.3955 11.4828 19.2734 11.4007 19.139 11.3447C19.0045 11.2886 18.8603 11.2598 18.7146 11.2598C18.5689 11.2598 18.4247 11.2886 18.2903 11.3447C18.1558 11.4007 18.0337 11.4828 17.9312 11.5862C17.7257 11.7929 17.6103 12.0726 17.6103 12.3641C17.6103 12.6556 17.7257 12.9353 17.9312 13.1421L19.4098 14.6207C19.6165 14.8262 19.8962 14.9416 20.1877 14.9416C20.4792 14.9416 20.7589 14.8262 20.9657 14.6207L23.9119 11.6745C24.0233 11.5744 24.1131 11.4527 24.176 11.3168C24.2389 11.1809 24.2734 11.0336 24.2776 10.884C24.2817 10.7343 24.2553 10.5853 24.2 10.4461C24.1447 10.307 24.0617 10.1805 23.956 10.0745V10.0745Z"
                        fill="#2948FF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[1.1rem] font-semibold mb-1">
                      User Friendly
                    </h4>
                    <p className="text-[0.95rem] opacity-90">
                      Zwallet come up with modern and sleek design and not
                      complicated.
                    </p>
                  </div>
                </div>
              </div>

              <a
                id="getstarted"
                href="/pages/register.html"
                className="inline-block px-8 py-3.5 text-[1rem] font-semibold text-blue-700 transition-colors bg-white rounded-lg hover:bg-gray-100 active:scale-95 shadow-md"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="pt-20 pb-10 md:pt-51.5 md:pb-20 text-center">
          <div className="container mx-auto max-w-300 px-5">
            <div className="max-w-295 mx-auto mb-12.5">
              <h2 className="text-[1.5rem] md:text-[48px] font-medium mb-6.25 text-neutral-800">
                Here From Our Customer
              </h2>
              <p className="text-gray-500">
                We always do our best for our customer to stay comfortable using
                the applications we provide.
              </p>
            </div>

            <div className="flex items-center justify-center gap-0 lg:gap-11.25">
              <button className="hidden lg:flex items-center justify-center w-11.25 h-11.25 bg-transparent border-none rounded-full cursor-pointer hover:bg-gray-100 transition-colors shadow-sm">
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="23.4602"
                    cy="23.5"
                    rx="23.4602"
                    ry="23.5"
                    fill="#E8E8E8"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M17.0005 23.8406H29.2406"
                    stroke="#0B132A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.0805 27.9275L17.0005 23.8405L21.0805 19.7536"
                    stroke="#0B132A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 lg:gap-11.25 w-full">
                <TestimonialCard
                  name="Sherina Claw"
                  imageSrc="/sherina-claw.png"
                  rating={5.0}
                  quote="I use this app since 2 years ago and this is the best app that I've ever use in my entire life"
                />
                <TestimonialCard
                  name="James Bond"
                  imageSrc="/james-bond.png"
                  rating={5.0}
                  quote="I use Zwallet to manage all financial needs. It's super easy to use and it's 100% free app."
                />
                <TestimonialCard
                  name="Ujang Kayu"
                  imageSrc="/ujang-kayu.png"
                  rating={5.0}
                  quote="Since I'm using this app, I'm not going to move to another similar app. Thank you Zwallet!"
                />
              </div>

              <button className="hidden lg:flex items-center justify-center w-11.25 h-11.25 bg-transparent border-none rounded-full cursor-pointer hover:bg-gray-100 transition-colors shadow-sm">
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="23.4602"
                    cy="23.5"
                    rx="23.4602"
                    ry="23.5"
                    fill="#2948FF"
                  />
                  <path
                    d="M29.2402 23.8406H17.0001"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.1602 19.7537L29.2402 23.8406L25.1602 27.9276"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-center items-center gap-2 mt-8.75">
              <span className="w-6.25 h-2.5 bg-blue-700 rounded-[5px] cursor-pointer transition-colors"></span>
              <span className="w-2.5 h-2.5 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-colors"></span>
              <span className="w-2.5 h-2.5 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-colors"></span>
              <span className="w-2.5 h-2.5 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-colors"></span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
