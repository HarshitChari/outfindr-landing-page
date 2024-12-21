import type { ReactNode } from 'react';
import { useState } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => {
  const [mobile, setMobile] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 10) {
      setMobile(value); // Limit to 10 digits
    }
  };

  return (
    <div
      className="relative flex flex-col overflow-visible rounded-[40px] p-6 sm:flex-row sm:rounded-[80px] sm:p-[70px]"
      style={{
        background: 'linear-gradient(180deg, #3A187F 0%, #B594F0 100%)',
        boxShadow: '0px 10px 60px rgba(179, 146, 239, 0.4)',
        border: '4px solid #F0F1FD',
        width: '100%',
        maxWidth: '1200px',
        height: 'auto',
      }}
    >
      {/* Left Section - Form and Text */}
      <div className="flex w-full flex-col justify-center space-y-6 sm:w-[55%]">
        <div>
          <h5 className="mt-4 text-h5 leading-snug text-secondary-500">
            {props.subtitle}
          </h5>
          <h3 className="font-roundoBold text-h3 leading-snug text-white">
            {props.title}
          </h3>
        </div>

        {/* Form Section */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Business Name"
            className="h-[50px] w-full rounded-[16px] border-none px-6 text-[18px] text-gray-900"
          />
          <div className="relative w-full">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 font-medium text-gray-600">
              +91
            </div>
            <input
              type="text"
              maxLength={13} // +91 (3 chars) + 10 digits
              value={mobile}
              onChange={handleInputChange}
              placeholder="Enter Mobile Number"
              className="h-[50px] w-full rounded-[16px] border-none px-16 text-[18px] text-gray-900"
            />
          </div>
          <input
            type="email"
            placeholder="Business Email"
            className="h-[50px] w-full rounded-[16px] border-none px-6 text-[18px] text-gray-900"
          />
          <textarea
            placeholder="Your Question"
            className="h-[120px] w-full rounded-[16px] border-none px-6 py-4 text-[18px] text-gray-900"
          />
        </div>

        {/* CTA Button */}
        <div className="mt-8">{props.button}</div>

        {/* Mobile Image Section */}
        <div className="mt-12 flex justify-center sm:hidden">
          <img
            src="/assets/images/map.png"
            alt="Event Map"
            className="h-[auto] w-[80%] max-w-[361px] rounded-[30px] object-cover"
          />
        </div>
      </div>

      {/* Right Section - Floating Image (Visible for Desktop) */}
      <div className="absolute left-[55%] top-[15%] hidden w-[500px] -translate-y-1/3 translate-x-[50px] sm:block md:w-[600px] lg:w-[750px]">
        <img
          src="/assets/images/map.png"
          alt="Event Map"
          className="w-[60%] rounded-[40px] object-cover"
        />
      </div>
    </div>
  );
};

export { CTABanner };
