import React, { useState } from 'react';

const DecentTailorReceipt = () => {
  // State to hold all form data
  const [formData, setFormData] = useState({
    rs: "322",
    customerNo: "322",
    customerName: "",
    karigarName: "",
    measurements: {}
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-[750px] mx-auto my-10 bg-[#fdfaf1] p-8 border-2 border-gray-400 shadow-2xl text-[#1e3a8a] font-serif" dir="rtl">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex justify-between items-start mb-6 border-b-4 border-[#1e3a8a] pb-4">
        <div className="text-right">
          <h1 className="text-6xl font-black italic tracking-tighter leading-none">DECENT</h1>
          <p className="text-2xl font-extrabold -mt-1 tracking-widest">MENS TAILOR'S</p>
          <div className="mt-4 inline-block bg-[#1e3a8a] text-white px-3 py-1 text-sm font-bold">
            Shop B-5 No:1
          </div>
          <p className="text-xs mt-1 font-bold text-gray-700">Sachal Village Suparco Road Karachi</p>
        </div>

        <div className="flex flex-col items-end text-left">
          <h2 className="text-5xl font-bold mb-2">ڈیسنٹ</h2>
          <h3 className="text-2xl font-bold border-b-2 border-[#1e3a8a] px-6 mb-2">مین ٹیلرز</h3>
          <p className="text-sm font-bold text-black">پروپرائٹر: سونا علی</p>
          <p className="text-sm font-bold text-black">Mobile No. 0348-2426144</p>
        </div>
      </div>

      {/* --- TOP BAR (Inputs for Rs, No, Name) --- */}
      <div className="grid grid-cols-3 gap-6 mb-6 items-center">
        
        <div className="flex items-center">
          <span className="font-bold text-lg ml-2">کسٹمر نمبر:</span>
          <input 
            type="text" 
            name="customerNo"
            value={formData.customerNo}
            onChange={handleInputChange}
            className="bg-transparent w-full border-b-2 border-dotted border-black flex-1 text-center text-2xl font-bold italic px-2 outline-none"
          />
        </div>
        <div className="flex items-center">
          <span className="font-bold text-lg ml-2 text-black">جناب:</span>
          <input 
            type="text" 
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className="bg-transparent w-full border-b-2 border-dotted border-black flex-1 outline-none px-2 font-bold"
          />
        </div>
        <div className="flex items-center " dir='ltr'>
          <span className="bg-[#1e3a8a] text-white px-3 py-1 font-bold text-xl">Rs.</span>
          <input 
            type="text" 
            name="rs"
            value={formData.rs}
            onChange={handleInputChange}
            className="bg-transparent w-full border-2 border-black flex-1 text-center text-2xl font-bold italic px-2 outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className='flex ' >
        <div className="flex items-center">
          <span className="font-bold text-lg ml-2 text-black">تاریخ آمد:</span>
          <input 
            type="text" 
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className="bg-transparent w-full border-b-2 border-dotted border-black flex-1 outline-none px-2 font-bold"
          />
        </div>
        <div className="flex items-center">
          <span className="font-bold text-lg ml-2 text-black">واپسی:</span>
          <input 
            type="text" 
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className="bg-transparent w-full border-b-2 border-dotted border-black flex-1 outline-none px-2 font-bold"
          />
        </div>
        <div className="flex items-center">
          <span className="font-bold text-lg ml-2 text-black">تعداد:</span>
          <input 
            type="text" 
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className="bg-transparent w-full border-b-2 border-dotted border-black flex-1 outline-none px-2 font-bold"
          />
        </div>
      </div>

      {/* --- MAIN MEASUREMENT GRID --- */}
      <div className="relative border-2 border-[#1e3a8a] grid grid-cols-3 min-h-[580px]">
        
        {/* Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="w-80 h-80 border-[15px] border-[#1e3a8a] rounded-full flex items-center justify-center rotate-12">
             <span className="text-7xl font-black">DECENT</span>
          </div>
        </div>

        {/* COLUMN 1 */}
        <div className="border-l-2 border-[#1e3a8a] flex flex-col">
          <InputRow label="لمبائی" defaultValue="" />
          <InputRow label="تیرا" defaultValue="" />
          <InputRow label="بازو" defaultValue="" />
          <InputRow label="ویگر" defaultValue="" />
          <InputRow label="کالر" defaultValue="" />
          <div className="bg-[#1e3a8a] text-white text-center py-1 font-bold text-lg">شلوار</div>
          <InputRow label="لمبائی" defaultValue="" />
          <InputRow label="پانچہ" defaultValue="" />
          <InputRow label="شلوار کا گھیر" defaultValue="" />
          <InputRow label="آسن" defaultValue="" />
          <InputRow label="اوورلاک" />
        </div>

        {/* COLUMN 2 */}
        <div className="border-l-2 border-[#1e3a8a] flex flex-col">
          <InputRow label="مونڈھا" defaultValue="9-1/2" />
          <InputRow label="کف" defaultValue="" />
          <InputRow label="پلیٹ" defaultValue="" />
          <InputRow label="موری" defaultValue="" />
          <InputRow label="کالر نوک" defaultValue="" />
          <InputRow label="سامنے" defaultValue="" />
          <InputRow label="سائیڈ" defaultValue="" />
          <InputRow label="شلوار زپ" defaultValue="" />
          
          <div className="grid grid-cols-4 border-b-2 border-[#1e3a8a] h-12 text-[10px] font-bold text-center text-black">
            <div className="border-l border-[#1e3a8a] flex items-center justify-center">بٹن عام</div>
            <div className="border-l border-[#1e3a8a] flex items-center justify-center">بٹن فینسی</div>
            <div className="border-l border-[#1e3a8a] flex items-center justify-center">بٹن میٹل</div>
            <div className="flex items-center justify-center">موبائل</div>
          </div>
          <textarea className="flex-1 bg-transparent p-2 outline-none resize-none font-bold text-blue-700 italic"></textarea>
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col">
          <InputRow label="شیروانی" />
          <InputRow label="ڈبل سلائی" />
          <InputRow label="سنگل سلائی" />
          <InputRow label="دامن گول" />
          <InputRow label="دامن چورس" />
          <InputRow label="چاک" />
          <InputRow label="کور پلیٹ" />
          <InputRow label="کف لنک" />
          
          <div className="flex-1 p-4 flex flex-col justify-end">
             <div className="flex items-end w-full mb-2">
                <span className="font-bold text-sm text-black ml-1 w-[30%] whitespace-nowrap">کاریگر کا نام:</span>
                <input 
                  type="text" 
                  name="karigarName"
                  className=
                  "flex-1 bg-transparent border-b-2 w-full border-[#1e3a8a] outline-none px-2 font-bold italic text-blue-700"
                />
             </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="mt-4 bg-[#1e3a8a] text-white text-[12px] p-3 text-center leading-relaxed rounded-sm">
        نوٹ: ہم آپ سے کپڑا پیمائش کے مطابق پورا لیتے ہیں اس کے باوجود کچھ کٹ پیس بچ جاتے ہیں جس کی واپسی ناگزیر ہے جس کے لیے ہم معذرت خواہ ہیں۔
      </div>
    </div>
  );
};

// Sub-component for Input Rows
const InputRow = ({ label, defaultValue = "" }) => (
  <div className="flex border-b border-[#1e3a8a] h-10 items-center px-2">
    <span className="w-28 font-bold text-black border-l border-gray-300 pr-1 text-[13px]">{label}</span>
    <input 
      type="text" 
      defaultValue={defaultValue}
      className="flex-1 bg-transparent text-center font-extrabold text-blue-700 text-xl italic tracking-tight outline-none w-full"
    />
  </div>
);

export default DecentTailorReceipt;