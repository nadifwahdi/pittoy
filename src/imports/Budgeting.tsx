import svgPaths from "./svg-epf9rq6n81";
import imgImage6 from "figma:asset/7a2be602890817b2746bf575fb7558e75c7f14e0.png";
import imgImage15 from "figma:asset/f6f9a2e9d224398e4d42f6a841c758230c08dd79.png";

function Symbols() {
  return (
    <div className="-translate-y-1/2 absolute h-[13px] right-[13.5px] top-[calc(50%+1.1px)] w-[68px]" data-name="Symbols">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 13">
        <g id="Symbols">
          <g id="Battery">
            <path d={svgPaths.p36aff970} fill="var(--fill-0, white)" id="Rectangle" opacity="0.4" />
            <rect fill="var(--fill-0, white)" height="7.66667" id="Rectangle_2" rx="1.6" width="18" x="44.5" y="2.47666" />
          </g>
          <path d={svgPaths.p38d75f80} fill="var(--fill-0, white)" id="Combined Shape" />
          <path clipRule="evenodd" d={svgPaths.p1802da00} fill="var(--fill-0, white)" fillRule="evenodd" id="Wi-Fi" />
        </g>
      </svg>
    </div>
  );
}

function BarsStatusTime() {
  return (
    <div className="-translate-y-1/2 absolute h-[22px] left-0 top-[calc(50%+1px)] w-[180px]" data-name="Bars/Status/_/Time">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[29.5px] text-[15px] text-white top-[calc(50%-9px)] tracking-[-0.165px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        19:27
      </p>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[44px] left-0 right-0 top-0" data-name="status_bar">
      <Symbols />
      <BarsStatusTime />
    </div>
  );
}

function Left() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="left">
      <div className="absolute bottom-0 left-0 overflow-clip top-0 w-[24px]" data-name="left button">
        <div className="absolute inset-[16.67%]" data-name="Intersect">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p318c4e00} fill="var(--fill-0, #2A353E)" id="Intersect" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="right">
      <div className="absolute bottom-0 overflow-clip right-0 top-0 w-[24px]" data-name="right button">
        <div className="absolute bottom-[35%] left-1/4 right-1/4 top-[35%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.2">
            <path clipRule="evenodd" d={svgPaths.p2c947b80} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FluentFood24Filled() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="fluent:food-24-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fluent:food-24-filled">
          <path d={svgPaths.p1ce37780} fill="var(--fill-0, #E47D5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white overflow-clip relative rounded-[999px] shrink-0 size-[36px]">
      <FluentFood24Filled />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#2a353e] text-[24px] text-center tracking-[0.2px] whitespace-nowrap">Rp500.000.</p>
      <div className="absolute overflow-clip right-[-26px] size-[20px] top-[5px]" data-name="Icon/Solid/pencil">
        <div className="absolute inset-[15%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Icon">
              <path d={svgPaths.pcacfb40} fill="var(--fill-0, #2A353E)" />
              <path d={svgPaths.p333a4780} fill="var(--fill-0, #2A353E)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <Frame45 />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] min-w-full relative shrink-0 text-[#475663] text-[16px] text-center tracking-[0.2px] w-[min-content]">Sisa Budget</p>
      <Frame35 />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] min-w-full relative shrink-0 text-[#475663] text-[14px] text-center tracking-[0.2px] w-[min-content]">Rp40.000/hari</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal relative shrink-0 text-[#8c9aa6] text-[12px]">Terpakai</p>
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#e57d5b] text-[14px] text-center">Rp2.500.000</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal relative shrink-0 text-[#8c9aa6] text-[12px]">Dari</p>
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#475663] text-[14px] text-right">Rp3.000.000</p>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex items-end justify-between leading-[1.25] py-[4px] relative shrink-0 tracking-[0.2px] w-full whitespace-nowrap" data-name="body">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Bar() {
  return (
    <div className="bg-[#f1f2f4] content-stretch flex flex-col items-start relative rounded-[1000px] shrink-0 w-full" data-name="bar">
      <div className="bg-[#e47d5a] h-[6px] rounded-[100px] shrink-0 w-[245px]" data-name="fill" />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex font-['Quicksand:Regular',sans-serif] font-normal items-start justify-between leading-[1.25] relative shrink-0 text-[#475663] text-[12px] tracking-[0.2px] w-full whitespace-nowrap">
      <p className="relative shrink-0">22 Feb</p>
      <p className="relative shrink-0">28 Feb</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] py-[8px] relative size-full">
        <Body />
        <Bar />
        <Frame42 />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[16px] relative size-full">
          <Frame31 />
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Chart1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[40px]" data-name="Chart 2">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475663] text-[10px] text-center w-full">7.250k</p>
      <div className="bg-[#ced4d9] h-[40px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#475663] text-[12px] text-center tracking-[0.2px] w-full">Feb</p>
    </div>
  );
}

function Chart() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[40px]" data-name="Chart 1">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475663] text-[10px] text-center w-full">5.800k</p>
      <div className="bg-[#ced4d9] h-[17px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#475663] text-[12px] text-center tracking-[0.2px] w-full">Mar</p>
    </div>
  );
}

function Chart6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[40px]" data-name="Chart 7">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475663] text-[10px] text-center w-full">6.200k</p>
      <div className="bg-[#ced4d9] h-[26px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#475663] text-[12px] text-center tracking-[0.2px] w-full">Apr</p>
    </div>
  );
}

function Chart8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[40px]" data-name="Chart 9">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475663] text-[10px] text-center w-full">80.000k</p>
      <div className="bg-[#ced4d9] h-[40px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#475663] text-[12px] text-center tracking-[0.2px] w-full">Jun</p>
    </div>
  );
}

function Chart7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[40px]" data-name="Chart 8">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#3a5ed7] text-[10px] text-center w-full">7.150k</p>
      <div className="bg-[#3a5ed7] h-[27px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#3a5ed7] text-[12px] text-center tracking-[0.2px] w-full">May</p>
    </div>
  );
}

function Chart9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[40px]" data-name="Chart 10">
      <div className="bg-[#ced4d9] h-px rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#475663] text-[12px] text-center tracking-[0.2px] w-full">Jul</p>
    </div>
  );
}

function Chart10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[40px]" data-name="Chart 11">
      <div className="bg-[#ced4d9] h-px rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#475663] text-[12px] text-center tracking-[0.2px] w-full">Aug</p>
    </div>
  );
}

function Chart11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[40px]" data-name="Chart 12">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475663] text-[10px] text-center w-full">11.700k</p>
      <div className="bg-[#3a5ed7] h-[26px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#475663] text-[12px] text-center tracking-[0.2px] w-full">Sep</p>
    </div>
  );
}

function Chart2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[40px]" data-name="Chart 3">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#475663] text-[12px] text-center tracking-[0.2px] w-full">Apr</p>
    </div>
  );
}

function Chart3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[40px]" data-name="Chart 4">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#475663] text-[12px] text-center tracking-[0.2px] w-full">May</p>
    </div>
  );
}

function Chart4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[40px]" data-name="Chart 5">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#475663] text-[12px] text-center tracking-[0.2px] w-full">Jun</p>
    </div>
  );
}

function Chart5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[40px]" data-name="Chart 6">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#475663] text-[12px] text-center tracking-[0.2px] w-full">Jul</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[12px] h-[100px] items-end relative shrink-0 w-full">
      <Chart1 />
      <Chart />
      <Chart6 />
      <Chart8 />
      <Chart7 />
      <Chart9 />
      <Chart10 />
      <Chart11 />
      <Chart2 />
      <Chart3 />
      <Chart4 />
      <Chart5 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] relative size-full">
        <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">Riwayat Pengeluaran Bulanan</p>
        <Frame46 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Makan siang di kantor</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame23 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#df0000] text-[14px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.25]">-Rp10.000</p>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame20 />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#1f2c37] text-[10px] w-full">Rabu, 17 Feb 2026</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Tambahan uang jajan</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame24 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1fd64a] text-[14px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.25]">+Rp100.000</p>
      </div>
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame21 />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#1f2c37] text-[10px] w-full">Rabu, 17 Feb 2026</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Makan siang di kantor</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame25 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#df0000] text-[14px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.25]">-Rp10.000</p>
      </div>
    </div>
  );
}

function InputField2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame22 />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#1f2c37] text-[10px] w-full">Rabu, 17 Feb 2026</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative shrink-0">
      <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">Catatan Transaksi</p>
      <InputField />
      <InputField1 />
      <InputField2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-0 top-[117px] w-[375px]">
      <Frame47 />
      <div className="bg-[#f6f6f9] h-[12px] shrink-0 w-full" />
      <Frame33 />
      <div className="bg-[#f6f6f9] h-[12px] shrink-0 w-full" />
      <Frame36 />
    </div>
  );
}

function Screen() {
  return (
    <div className="absolute bg-white h-[900px] left-[1933px] overflow-clip top-0 w-[375px]" data-name="Screen">
      <StatusBar />
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[16px] items-center justify-center left-1/2 px-[20px] py-[18px] top-[44px] w-[375px]" data-name="Navigation Bar">
        <Left />
        <p className="flex-[1_0_0] font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] min-w-px relative text-[#2a353e] text-[20px] text-center tracking-[0.2px]">Makan</p>
        <Right />
      </div>
      <Frame32 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[24px] text-center text-white tracking-[0.2px] whitespace-nowrap">Rp6.000.000</p>
      <div className="absolute overflow-clip right-[-32px] size-[20px] top-[5px]" data-name="Icon/Solid/pencil">
        <div className="absolute inset-[15%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Icon">
              <path d={svgPaths.pcacfb40} fill="var(--fill-0, white)" />
              <path d={svgPaths.p333a4780} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] min-w-full relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[0.2px] w-[min-content]">Sisa Budget</p>
      <Frame37 />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] min-w-full relative shrink-0 text-[#ced4d9] text-[14px] text-center tracking-[0.2px] w-[min-content]">Rp40.000/hari</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal relative shrink-0 text-[#8c9aa6] text-[12px]">Terpakai</p>
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#475663] text-[14px] text-center">Rp0</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal relative shrink-0 text-[#8c9aa6] text-[12px]">Dari</p>
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#475663] text-[14px] text-right">Rp6.000.000</p>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex items-end justify-between leading-[1.25] py-[4px] relative shrink-0 tracking-[0.2px] w-full whitespace-nowrap" data-name="body">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Bar1() {
  return (
    <div className="bg-[#d9dff6] content-stretch flex flex-col items-start relative rounded-[1000px] shrink-0 w-full" data-name="bar">
      <div className="bg-[#3a5ed7] rounded-[100px] shrink-0 size-[6px]" data-name="fill" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] py-[8px] relative size-full">
        <Body1 />
        <Bar1 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[16px] top-[117px] w-[343px]">
      <Frame30 />
      <Frame38 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0.05%_-0.05%_-0.05%_0.05%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 69">
        <g id="Group 894">
          <g id="Vector" />
          <path d={svgPaths.pa4c0700} fill="var(--fill-0, #4CAAD6)" id="Vector_2" />
          <path d={svgPaths.p2a8dd700} fill="var(--fill-0, #4CAAD6)" id="Vector_3" />
          <path d={svgPaths.p1eb87900} fill="var(--fill-0, #4CAAD6)" id="Vector_4" />
          <path d={svgPaths.p31a68180} fill="var(--fill-0, #0E6892)" id="Vector_5" />
          <path d={svgPaths.p11a11000} fill="var(--fill-0, #3285AC)" id="Vector_6" />
          <path d={svgPaths.p143b6700} fill="var(--fill-0, #3286AC)" id="Vector_7" />
          <path d={svgPaths.p22452a80} fill="var(--fill-0, #3286AC)" id="Vector_8" />
          <path d={svgPaths.p16cdd280} fill="var(--fill-0, #B6DBE7)" id="Vector_9" />
          <path d={svgPaths.p915c080} fill="var(--fill-0, #DF911B)" id="Vector_10" />
          <path d={svgPaths.p38239f00} fill="var(--fill-0, #DF911B)" id="Vector_11" />
          <path d={svgPaths.p14df7a80} fill="var(--fill-0, #FFC928)" id="Vector_12" />
          <path d={svgPaths.pbf08800} fill="var(--fill-0, #FFC928)" id="Vector_13" />
          <path d={svgPaths.p7250440} fill="var(--fill-0, #4CAAD6)" id="Vector_14" />
          <path d={svgPaths.p2f2c4d00} fill="var(--fill-0, #4CAAD6)" id="Vector_15" />
          <path d={svgPaths.p5fa7fd0} fill="var(--fill-0, #3386AD)" id="Vector_16" />
          <path d={svgPaths.p1d9e1900} fill="var(--fill-0, #3386AD)" id="Vector_17" />
          <path d={svgPaths.p2b4d72c0} fill="var(--fill-0, #3386AD)" id="Vector_18" />
          <path d={svgPaths.p3ae2bc00} fill="var(--fill-0, #3286AD)" id="Vector_19" />
          <path d={svgPaths.p20c61300} fill="var(--fill-0, #3286AD)" id="Vector_20" />
          <path d={svgPaths.p3b9d0600} fill="var(--fill-0, #4CAAD6)" id="Vector_21" />
          <path d={svgPaths.p36039700} fill="var(--fill-0, #4CAAD6)" id="Vector_22" />
          <path d={svgPaths.p35a24000} fill="var(--fill-0, #72D2FE)" id="Vector_23" />
          <path d={svgPaths.p3fe59f40} fill="var(--fill-0, #3286AD)" id="Vector_24" />
          <path d={svgPaths.p13e3f270} fill="var(--fill-0, #3286AD)" id="Vector_25" />
          <path d={svgPaths.p56e2100} fill="var(--fill-0, #4CAAD6)" id="Vector_26" />
          <path d={svgPaths.p2881fbc0} fill="var(--fill-0, #4CAAD6)" id="Vector_27" />
          <path d={svgPaths.p32ef6400} fill="var(--fill-0, #FFC928)" id="Vector_28" />
          <path d={svgPaths.p3611cd00} fill="var(--fill-0, #3286AD)" id="Vector_29" />
          <path d={svgPaths.pe75a100} fill="var(--fill-0, #3286AD)" id="Vector_30" />
          <path d={svgPaths.p232f1f00} fill="var(--fill-0, #3286AD)" id="Vector_31" />
          <path d={svgPaths.pd0a3300} fill="var(--fill-0, #4CAAD6)" id="Vector_32" />
          <path d={svgPaths.p3d2e5300} fill="var(--fill-0, #4CAAD6)" id="Vector_33" />
          <path d={svgPaths.p277297e0} fill="var(--fill-0, #72D2FE)" id="Vector_34" />
          <path d={svgPaths.p12906b00} fill="var(--fill-0, #3286AD)" id="Vector_35" />
          <path d={svgPaths.pb24f100} fill="var(--fill-0, #3286AD)" id="Vector_36" />
          <path d={svgPaths.p3079a00} fill="var(--fill-0, #4CAAD6)" id="Vector_37" />
          <path d={svgPaths.p1f050a00} fill="var(--fill-0, #4CAAD6)" id="Vector_38" />
          <path d={svgPaths.pd78e780} fill="var(--fill-0, #FFC928)" id="Vector_39" />
          <path d={svgPaths.p18ef1380} fill="var(--fill-0, #FFC928)" id="Vector_40" />
          <path d={svgPaths.p2f248500} fill="var(--fill-0, #3785AB)" id="Vector_41" />
          <path d={svgPaths.p33388400} fill="var(--fill-0, #FEC828)" id="Vector_42" />
          <path d={svgPaths.ped3de00} fill="var(--fill-0, #FEC828)" id="Vector_43" />
          <path d={svgPaths.p751be00} fill="var(--fill-0, #3785AB)" id="Vector_44" />
          <path d={svgPaths.p1bfa5400} fill="var(--fill-0, #3785AB)" id="Vector_45" />
          <path d={svgPaths.p310ae100} fill="var(--fill-0, #4CAAD6)" id="Vector_46" />
          <path d={svgPaths.p1fdf0080} fill="var(--fill-0, #4CAAD6)" id="Vector_47" />
          <path d={svgPaths.p14fe7100} fill="var(--fill-0, #72D2FE)" id="Vector_48" />
          <path d={svgPaths.p39ed0700} fill="var(--fill-0, #4CAAD6)" id="Vector_49" />
          <path d={svgPaths.p4faf400} fill="var(--fill-0, #4CAAD6)" id="Vector_50" />
          <path d={svgPaths.pf412e00} fill="var(--fill-0, #4F802D)" id="Vector_51" />
          <path d={svgPaths.p19b6b9c0} fill="var(--fill-0, #3785AB)" id="Vector_52" />
          <path d={svgPaths.p2a0b2080} fill="var(--fill-0, #3785AB)" id="Vector_53" />
          <path d={svgPaths.p1e7390c0} fill="var(--fill-0, #4F802D)" id="Vector_54" />
          <path d={svgPaths.p17b7cf80} fill="var(--fill-0, #4CAAD6)" id="Vector_55" />
          <path d={svgPaths.p33db2900} fill="var(--fill-0, #4CAAD6)" id="Vector_56" />
          <path d={svgPaths.p19e4780} fill="var(--fill-0, #4F802D)" id="Vector_57" />
          <path d={svgPaths.p9ffa300} fill="var(--fill-0, #4F802D)" id="Vector_58" />
          <path d={svgPaths.p335fb920} fill="var(--fill-0, #4F802D)" id="Vector_59" />
          <path d={svgPaths.p237c3400} fill="var(--fill-0, #4F802D)" id="Vector_60" />
          <path d={svgPaths.p20d91580} fill="var(--fill-0, #4F802D)" id="Vector_61" />
          <path d={svgPaths.p30de5b00} fill="var(--fill-0, #4CAAD6)" id="Vector_62" />
          <path d={svgPaths.p14168700} fill="var(--fill-0, #4CAAD6)" id="Vector_63" />
          <path d={svgPaths.p26af2a00} fill="var(--fill-0, #4CAAD6)" id="Vector_64" />
          <path d={svgPaths.p18518180} fill="var(--fill-0, #4CAAD6)" id="Vector_65" />
          <path d={svgPaths.pee06c70} fill="var(--fill-0, #4CAAD6)" id="Vector_66" />
          <path d={svgPaths.p19ea7800} fill="var(--fill-0, #4CAAD6)" id="Vector_67" />
          <path d={svgPaths.p35a51400} fill="var(--fill-0, #3286AC)" id="Vector_68" />
          <path d={svgPaths.p7b68000} fill="var(--fill-0, #4F802D)" id="Vector_69" />
          <path d={svgPaths.p106bae30} fill="var(--fill-0, #4F802D)" id="Vector_70" />
          <path d={svgPaths.p3a1f9d30} fill="var(--fill-0, #DF911B)" id="Vector_71" />
          <path d={svgPaths.p1cd92b00} fill="var(--fill-0, #DF911B)" id="Vector_72" />
          <path d={svgPaths.p17bc8470} fill="var(--fill-0, #4F802D)" id="Vector_73" />
          <path d={svgPaths.p1158d00} fill="var(--fill-0, #4F802D)" id="Vector_74" />
          <path d={svgPaths.p17a2efb0} fill="var(--fill-0, #4F802D)" id="Vector_75" />
          <path d={svgPaths.p1b25d000} fill="var(--fill-0, #4F802D)" id="Vector_76" />
          <path d={svgPaths.p272c2500} fill="var(--fill-0, #4F802D)" id="Vector_77" />
          <path d={svgPaths.p258f4e00} fill="var(--fill-0, #4F802D)" id="Vector_78" />
          <path d={svgPaths.p3593d880} fill="var(--fill-0, #4F802D)" id="Vector_79" />
          <path d={svgPaths.p321d7980} fill="var(--fill-0, #3286AD)" id="Vector_80" />
          <path d={svgPaths.p3d005700} fill="var(--fill-0, #4F802D)" id="Vector_81" />
          <path d={svgPaths.p20578100} fill="var(--fill-0, #4CAAD6)" id="Vector_82" />
          <path d={svgPaths.p3afd1a80} fill="var(--fill-0, #4CAAD6)" id="Vector_83" />
          <path d={svgPaths.p333a7880} fill="var(--fill-0, #3286AC)" id="Vector_84" />
          <path d={svgPaths.p3e1dbef0} fill="var(--fill-0, #3286AC)" id="Vector_85" />
          <path d={svgPaths.p15fb3d00} fill="var(--fill-0, #343636)" id="Vector_86" />
          <path d={svgPaths.p2e8b3680} fill="var(--fill-0, #272929)" id="Vector_87" />
          <path d={svgPaths.p2265f000} fill="var(--fill-0, #FEC828)" id="Vector_88" />
          <path d={svgPaths.p1fa56dc0} fill="var(--fill-0, #343636)" id="Vector_89" />
          <path d={svgPaths.p28697a00} fill="var(--fill-0, #272929)" id="Vector_90" />
          <path d={svgPaths.p2c5d900} fill="var(--fill-0, #343636)" id="Vector_91" />
          <path d={svgPaths.p2f959a40} fill="var(--fill-0, #DF911B)" id="Vector_92" />
          <path d={svgPaths.p33d09280} fill="var(--fill-0, #282929)" id="Vector_93" />
          <path d={svgPaths.pc22a100} fill="var(--fill-0, #3A230F)" id="Vector_94" />
          <path d={svgPaths.p22eb8000} fill="var(--fill-0, #3386AD)" id="Vector_95" />
          <path d={svgPaths.pbfdbd00} fill="var(--fill-0, #3386AD)" id="Vector_96" />
          <path d={svgPaths.p28c28380} fill="var(--fill-0, #3386AD)" id="Vector_97" />
          <path d={svgPaths.p214c9780} fill="var(--fill-0, #3386AD)" id="Vector_98" />
          <path d={svgPaths.p329e0400} fill="var(--fill-0, #3386AD)" id="Vector_99" />
          <path d={svgPaths.p98c1a80} fill="var(--fill-0, #3386AD)" id="Vector_100" />
          <path d={svgPaths.p633dd00} fill="var(--fill-0, #3386AD)" id="Vector_101" />
          <path d={svgPaths.p54e9a00} fill="var(--fill-0, #3386AD)" id="Vector_102" />
          <path d={svgPaths.p2f062000} fill="var(--fill-0, #3386AD)" id="Vector_103" />
          <path d={svgPaths.p17d8ef00} fill="var(--fill-0, #3386AD)" id="Vector_104" />
          <path d={svgPaths.p394d3740} fill="var(--fill-0, #68571E)" id="Vector_105" />
          <path d={svgPaths.p17bae180} fill="var(--fill-0, #68571E)" id="Vector_106" />
          <path d={svgPaths.p2bb4400} fill="var(--fill-0, #B5DBE8)" id="Vector_107" />
          <path d={svgPaths.p39faa300} fill="var(--fill-0, #3386AD)" id="Vector_108" />
          <path d={svgPaths.p7335b00} fill="var(--fill-0, #3386AD)" id="Vector_109" />
          <path d={svgPaths.p2d284b00} fill="var(--fill-0, #3386AD)" id="Vector_110" />
          <path d={svgPaths.pad28200} fill="var(--fill-0, #3386AD)" id="Vector_111" />
          <path d={svgPaths.p21d92380} fill="var(--fill-0, #3386AD)" id="Vector_112" />
          <path d={svgPaths.p1f3c0c00} fill="var(--fill-0, #3386AD)" id="Vector_113" />
          <path d={svgPaths.p11f8ca00} fill="var(--fill-0, #3386AD)" id="Vector_114" />
          <path d={svgPaths.p3f894200} fill="var(--fill-0, #3386AD)" id="Vector_115" />
          <path d={svgPaths.pbdd8b80} fill="var(--fill-0, #3386AD)" id="Vector_116" />
          <path d={svgPaths.p15245200} fill="var(--fill-0, #4F802D)" id="Vector_117" />
          <path d={svgPaths.p220ab200} fill="var(--fill-0, #4F802D)" id="Vector_118" />
          <path d={svgPaths.p2a4b9c00} fill="var(--fill-0, #4F7F2D)" id="Vector_119" />
          <path d={svgPaths.p27075280} fill="var(--fill-0, #4F7F2D)" id="Vector_120" />
          <path d={svgPaths.p3314ee80} fill="var(--fill-0, #83CE4F)" id="Vector_121" />
          <path d={svgPaths.p1b1b1400} fill="var(--fill-0, #C4E5AB)" id="Vector_122" />
          <path d={svgPaths.p1c42cc00} fill="var(--fill-0, #3386AD)" id="Vector_123" />
          <path d={svgPaths.p1850e700} fill="var(--fill-0, #4F7F2D)" id="Vector_124" />
          <path d={svgPaths.p3e3b8680} fill="var(--fill-0, #3286AC)" id="Vector_125" />
          <path d={svgPaths.p82187f2} fill="var(--fill-0, #83CE4F)" id="Vector_126" />
          <path d={svgPaths.p3602d300} fill="var(--fill-0, #83CE4F)" id="Vector_127" />
          <path d={svgPaths.p28aa9a70} fill="var(--fill-0, #3386AD)" id="Vector_128" />
          <path d={svgPaths.p96bdc80} fill="var(--fill-0, #4F7F2D)" id="Vector_129" />
          <path d={svgPaths.p7cebc80} fill="var(--fill-0, #C4E5AB)" id="Vector_130" />
          <path d={svgPaths.p30a01b00} fill="var(--fill-0, #3386AD)" id="Vector_131" />
          <path d={svgPaths.p2c7a5400} fill="var(--fill-0, #C4E5AB)" id="Vector_132" />
          <path d={svgPaths.p1803eb00} fill="var(--fill-0, #C4E5AB)" id="Vector_133" />
          <path d={svgPaths.p20d49100} fill="var(--fill-0, #3785AB)" id="Vector_134" />
          <path d={svgPaths.p1c0da300} fill="var(--fill-0, #3785AB)" id="Vector_135" />
          <path d={svgPaths.p32184700} fill="var(--fill-0, #3785AB)" id="Vector_136" />
          <path d={svgPaths.p2b79bc00} fill="var(--fill-0, #3785AB)" id="Vector_137" />
          <path d={svgPaths.p12d74a40} fill="var(--fill-0, #3785AB)" id="Vector_138" />
          <path d={svgPaths.p1d5f3000} fill="var(--fill-0, #3785AB)" id="Vector_139" />
          <path d={svgPaths.p33d24380} fill="var(--fill-0, #3785AB)" id="Vector_140" />
          <path d={svgPaths.p248d3500} fill="var(--fill-0, #4F7F2D)" id="Vector_141" />
          <path d={svgPaths.p87b3480} fill="var(--fill-0, #3785AB)" id="Vector_142" />
          <path d={svgPaths.pd20ba00} fill="var(--fill-0, #3785AB)" id="Vector_143" />
          <path d={svgPaths.p2c95df00} fill="var(--fill-0, #3785AB)" id="Vector_144" />
          <path d={svgPaths.pf4b3800} fill="var(--fill-0, #4F802D)" id="Vector_145" />
          <path d={svgPaths.p2461ef00} fill="var(--fill-0, #4F802D)" id="Vector_146" />
          <path d={svgPaths.p26856b80} fill="var(--fill-0, #4F802D)" id="Vector_147" />
          <path d={svgPaths.p1a0c4800} fill="var(--fill-0, #3386AD)" id="Vector_148" />
          <path d={svgPaths.pec76f70} fill="var(--fill-0, #3386AD)" id="Vector_149" />
          <path d={svgPaths.p163b9500} fill="var(--fill-0, #3386AD)" id="Vector_150" />
          <path d={svgPaths.p28e81380} fill="var(--fill-0, #DCF7FF)" id="Vector_151" />
          <path d={svgPaths.p1291eb00} fill="var(--fill-0, #4CAAD6)" id="Vector_152" />
          <path d={svgPaths.p34ebc500} fill="var(--fill-0, #4CAAD6)" id="Vector_153" />
          <path d={svgPaths.p2a14b2c0} fill="var(--fill-0, #FEC828)" id="Vector_154" />
          <path d={svgPaths.p16b19080} fill="var(--fill-0, #FEC828)" id="Vector_155" />
          <path d={svgPaths.p2c1282b0} fill="var(--fill-0, #FEC828)" id="Vector_156" />
          <path d={svgPaths.p896c300} fill="var(--fill-0, #3386AD)" id="Vector_157" />
          <path d={svgPaths.p1f84b400} fill="var(--fill-0, #FEC828)" id="Vector_158" />
          <path d={svgPaths.p2021da00} fill="var(--fill-0, #FEC828)" id="Vector_159" />
          <path d={svgPaths.p3f4c7000} fill="var(--fill-0, #FEC828)" id="Vector_160" />
          <path d={svgPaths.p1e488800} fill="var(--fill-0, #3386AD)" id="Vector_161" />
          <path d={svgPaths.pda81e00} fill="var(--fill-0, #DF911B)" id="Vector_162" />
          <path d={svgPaths.p30c69f80} fill="var(--fill-0, #DF911B)" id="Vector_163" />
          <path d={svgPaths.p310cc600} fill="var(--fill-0, #C5EDFF)" id="Vector_164" />
          <path d={svgPaths.p172605f0} fill="var(--fill-0, #C3EBFD)" id="Vector_165" />
          <path d={svgPaths.p29136100} fill="var(--fill-0, #475156)" id="Vector_166" />
          <path d={svgPaths.p3dc35570} fill="var(--fill-0, #475156)" id="Vector_167" />
          <path d={svgPaths.p2fa54e80} fill="var(--fill-0, #75AACF)" id="Vector_168" />
          <path d={svgPaths.p12548800} fill="var(--fill-0, #75AACF)" id="Vector_169" />
          <path d={svgPaths.p2885a100} fill="var(--fill-0, #75AACF)" id="Vector_170" />
          <path d={svgPaths.p11e36e80} fill="var(--fill-0, #F96738)" id="Vector_171" />
          <path d={svgPaths.p13e4a600} fill="var(--fill-0, #DF911B)" id="Vector_172" />
          <path d={svgPaths.p3773ed80} fill="var(--fill-0, #DF911B)" id="Vector_173" />
          <path d={svgPaths.pfe49800} fill="var(--fill-0, #83CE4F)" id="Vector_174" />
          <path d={svgPaths.p30263940} fill="var(--fill-0, #C4E5AB)" id="Vector_175" />
          <path d={svgPaths.p31bcfd00} fill="var(--fill-0, #4F802D)" id="Vector_176" />
          <path d={svgPaths.p13331b00} fill="var(--fill-0, #4F802D)" id="Vector_177" />
          <path d={svgPaths.p3e7e1f00} fill="var(--fill-0, #353736)" id="Vector_178" />
          <path d={svgPaths.p1d134380} fill="var(--fill-0, #282929)" id="Vector_179" />
          <path d={svgPaths.p34882880} fill="var(--fill-0, #B4D8E5)" id="Vector_180" />
          <path d={svgPaths.p18f2ac00} fill="var(--fill-0, #DF911B)" id="Vector_181" />
          <path d={svgPaths.p2dcdfb00} fill="var(--fill-0, #DF911B)" id="Vector_182" />
          <path d={svgPaths.p8a43d80} fill="var(--fill-0, #FDFFFE)" id="Vector_183" />
          <path d={svgPaths.p17beec08} fill="var(--fill-0, #FDFFFE)" id="Vector_184" />
          <path d={svgPaths.p441b900} fill="var(--fill-0, #4F802D)" id="Vector_185" />
          <path d={svgPaths.p3db45400} fill="var(--fill-0, #4F802D)" id="Vector_186" />
          <path d={svgPaths.p1fc1adf0} fill="var(--fill-0, #4F802D)" id="Vector_187" />
          <path d={svgPaths.p1ed13c00} fill="var(--fill-0, #4F802D)" id="Vector_188" />
          <path d={svgPaths.p2c819180} fill="var(--fill-0, #DFAF76)" id="Vector_189" />
          <path d={svgPaths.p38acb870} fill="var(--fill-0, #C18B58)" id="Vector_190" />
          <path d={svgPaths.p16946100} fill="var(--fill-0, #DFAF76)" id="Vector_191" />
          <path d={svgPaths.p1a234a30} fill="var(--fill-0, #FEC828)" id="Vector_192" />
          <path d={svgPaths.p3d63b6c0} fill="var(--fill-0, #FEC828)" id="Vector_193" />
          <path d={svgPaths.p2086b200} fill="var(--fill-0, #FEC828)" id="Vector_194" />
          <path d={svgPaths.p2a0c4f00} fill="var(--fill-0, #F8A81B)" id="Vector_195" />
          <path d={svgPaths.p35833100} fill="var(--fill-0, #FEC828)" id="Vector_196" />
          <path d={svgPaths.p3e2ec300} fill="var(--fill-0, #FFC928)" id="Vector_197" />
          <path d={svgPaths.p11f2e3f0} fill="var(--fill-0, #F8A81B)" id="Vector_198" />
          <path d={svgPaths.p3bbfc100} fill="var(--fill-0, #F8A81B)" id="Vector_199" />
          <path d={svgPaths.pb13a880} fill="var(--fill-0, #F8A81B)" id="Vector_200" />
          <path d={svgPaths.p157f1200} fill="var(--fill-0, #FEC828)" id="Vector_201" />
          <path d={svgPaths.p29d65c00} fill="var(--fill-0, #68571E)" id="Vector_202" />
          <path d={svgPaths.p27872680} fill="var(--fill-0, #DFAF76)" id="Vector_203" />
          <path d={svgPaths.p5f3a770} fill="var(--fill-0, #DFAF76)" id="Vector_204" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(141.922deg, rgb(58, 94, 215) 9.3614%, rgb(30, 47, 108) 105.33%)" }} data-name="Button">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[16px] relative size-full">
          <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[16px] text-white tracking-[0.2px] whitespace-nowrap">Catat Keuangan</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/plus">
            <div className="absolute inset-[15%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path clipRule="evenodd" d={svgPaths.p172c4900} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="absolute left-[274px] overflow-clip size-[69px] top-0" data-name="Illustrasi">
            <Group />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#fce2eb] overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="Fork and knife with plate">
        <div className="absolute inset-[18.79%_13.44%_12.48%_17.82%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9956 21.9956">
            <g id="Vector">
              <path d={svgPaths.p809b0c0} fill="url(#paint0_linear_1_7985)" />
              <path d={svgPaths.p809b0c0} fill="url(#paint1_radial_1_7985)" />
              <path d={svgPaths.p809b0c0} fill="url(#paint2_radial_1_7985)" />
              <path d={svgPaths.p809b0c0} fill="url(#paint3_radial_1_7985)" />
              <path d={svgPaths.p809b0c0} fill="url(#paint4_radial_1_7985)" />
              <path d={svgPaths.p809b0c0} fill="url(#paint5_radial_1_7985)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7985" x1="9.74389" x2="10.9978" y1="7.67872e-09" y2="21.9956">
                <stop offset="0.115334" stopColor="#BCBBC4" />
                <stop offset="0.227922" stopColor="#8F8D9B" />
                <stop offset="0.689257" stopColor="#A8A0BC" />
                <stop offset="0.766146" stopColor="#BFA1E2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(10.9978 10.9978) rotate(90) scale(10.9978 10.9978)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7985" r="1">
                <stop offset="0.943572" stopColor="#DDCEF5" />
                <stop offset="1" stopColor="#DDCEF5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.81548 11.9878) rotate(-36.6264) scale(10.3789 10.3789)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7985" r="1">
                <stop offset="0.324467" stopColor="#EAE0FD" />
                <stop offset="0.633232" stopColor="#E7DDF9" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(11.7132 13.6204) rotate(144.796) scale(13.1791 16.4821)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7985" r="1">
                <stop offset="0.856316" stopColor="white" stopOpacity="0" />
                <stop offset="0.890511" stopColor="white" stopOpacity="0.3" />
                <stop offset="0.956564" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(20.7656 7.83154) rotate(88.5024) scale(4.78288 2.42376)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7985" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(21.6719 7.20654) rotate(82.7368) scale(6.42657 3.25671)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_7985" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[29.51%_24.16%_23.2%_28.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.134 15.134">
            <g id="Vector">
              <path d={svgPaths.p27d70f80} fill="var(--fill-0, #D8CBF0)" />
              <path d={svgPaths.p27d70f80} fill="url(#paint0_radial_1_8005)" />
              <path d={svgPaths.p27d70f80} fill="url(#paint1_radial_1_8005)" />
              <path d={svgPaths.p27d70f80} fill="url(#paint2_radial_1_8005)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.31319 9.01176) rotate(82.9973) scale(10.2845 11.7776)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_8005" r="1">
                <stop offset="0.596424" stopColor="#DACEF3" />
                <stop offset="0.754428" stopColor="#CCB9EB" />
                <stop offset="0.962131" stopColor="#BCA7DC" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(11.3869 2.24686) rotate(142.239) scale(18.642 17.7929)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_8005" r="1">
                <stop offset="0.476664" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.693657" stopColor="#E9E2FD" />
                <stop offset="0.816307" stopColor="#EBE8FB" />
                <stop offset="0.962131" stopColor="#EAE7F9" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.17234 3.03208) rotate(56.149) scale(17.8914 20.489)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_8005" r="1">
                <stop offset="0.536739" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.754428" stopColor="#B9B5CA" />
                <stop offset="0.962131" stopColor="#B2AEC4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_72.26%_6.25%_6.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.84609 24.9586">
            <g id="Vector">
              <path d={svgPaths.pa8d9200} fill="url(#paint0_linear_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint1_linear_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="var(--fill-2, black)" fillOpacity="0.05" />
              <path d={svgPaths.pa8d9200} fill="url(#paint2_linear_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint3_linear_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint4_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint5_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint6_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint7_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint8_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint9_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint10_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint11_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint12_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint13_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint14_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint15_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint16_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint17_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint18_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint19_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint20_radial_1_7983)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7983" x1="2.08818" x2="4.7332" y1="17.6633" y2="17.6633">
                <stop stopColor="#A29CAE" />
                <stop offset="0.2" stopColor="#AFA5C1" />
                <stop offset="0.789474" stopColor="#C9C1D9" />
                <stop offset="1" stopColor="#BFBACB" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7983" x1="3.42304" x2="3.42304" y1="0" y2="24.9586">
                <stop offset="0.389773" stopColor="#BBB2CC" />
                <stop offset="0.432164" stopColor="#BEB5CE" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_7983" x1="3.42304" x2="3.42304" y1="0" y2="24.9586">
                <stop offset="0.001543" stopColor="#9F9BA9" />
                <stop offset="0.0266132" stopColor="#9F9BA9" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_7983" x1="0" x2="6.84618" y1="17.6633" y2="17.6633">
                <stop stopColor="#A29CAE" />
                <stop offset="0.0631842" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="0.934443" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="1" stopColor="#A29CAE" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.89328 4.07619) rotate(90) scale(0.793508)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7983" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.1021 1.55645) rotate(90) scale(3.68911 0.907443)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_7983" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.1021 3.9509) rotate(90) scale(0.835271)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_7983" r="1">
                <stop stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.70536 1.68174) rotate(90) scale(3.56382 0.876624)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_7983" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.47643 4.10712) rotate(90) scale(0.711527)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_7983" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.70536 3.93698) rotate(90) scale(0.849192)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_7983" r="1">
                <stop offset="0.477231" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.28169 0.458042) rotate(41.4237) scale(0.708728 0.865703)" gradientUnits="userSpaceOnUse" id="paint10_radial_1_7983" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.78254 0.286109) rotate(39.2072) scale(0.766524 0.9363)" gradientUnits="userSpaceOnUse" id="paint11_radial_1_7983" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.39281 0.270478) rotate(48.6914) scale(0.686668 0.838757)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_7983" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.42309 -4.22084) rotate(90) scale(29.1795 7.2375)" gradientUnits="userSpaceOnUse" id="paint13_radial_1_7983" r="1">
                <stop offset="0.961641" stopColor="#9883B3" stopOpacity="0" />
                <stop offset="1" stopColor="#8F78AB" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.634188 8.71039) rotate(46.106) scale(2.49334 0.683918)" gradientUnits="userSpaceOnUse" id="paint14_radial_1_7983" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-0.350686 8.0109) rotate(60.6758) scale(2.79877 1.19125)" gradientUnits="userSpaceOnUse" id="paint15_radial_1_7983" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.5708 8.08549) rotate(103.241) scale(1.45874 0.620888)" gradientUnits="userSpaceOnUse" id="paint16_radial_1_7983" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.09748 8.76763) rotate(133.091) scale(2.36382 0.648389)" gradientUnits="userSpaceOnUse" id="paint17_radial_1_7983" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.41767 3.4915) rotate(90) scale(3.64735 0.375871)" gradientUnits="userSpaceOnUse" id="paint18_radial_1_7983" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.15" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.93815 2.24478) rotate(90) scale(2.14077 0.273219)" gradientUnits="userSpaceOnUse" id="paint19_radial_1_7983" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.17" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.33643 2.48917) rotate(90) scale(1.97681 0.252293)" gradientUnits="userSpaceOnUse" id="paint20_radial_1_7983" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.18" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_6.79%_6.27%_77.71%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.95872 24.9501">
            <g id="Union">
              <path d={svgPaths.p38605d00} fill="url(#paint0_linear_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint1_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint2_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint3_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint4_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint5_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint6_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint7_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint8_radial_1_7979)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7979" x1="4.95872" x2="2.19244" y1="7.02038" y2="7.02038">
                <stop stopColor="#C4C2CB" />
                <stop offset="0.514744" stopColor="#B2A8C2" />
                <stop offset="1" stopColor="#948CA2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-8.14483e-08 12.4803) rotate(35.4843) scale(4.50209 1.50615)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7979" r="1">
                <stop stopColor="#9B89B3" />
                <stop offset="1" stopColor="#A28EBB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.0197 6.28487) rotate(0.616057) scale(2.30238 9.0123)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7979" r="1">
                <stop offset="0.682353" stopColor="#B1A8C0" />
                <stop offset="1" stopColor="#BBB4C8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.20672 12.0506) rotate(-157.62) scale(0.359394 1.32607)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7979" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.8" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.00449 12.6469) rotate(-71.9657) scale(0.442006 1.06341)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7979" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.5" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.95259 11.9724) rotate(-152.354) scale(0.463425 1.70992)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_7979" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.69044 12.1787) rotate(-65.4623) scale(0.464015 1.7121)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_7979" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.28125 1.36414) rotate(136.219) scale(1.0388 1.62421)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_7979" r="1">
                <stop stopColor="#D7D2E0" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.6288 1.50709) rotate(135) scale(1.19032 1.86112)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_7979" r="1">
                <stop stopColor="#BAB3C8" />
                <stop offset="1" stopColor="#BAB3C8" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame53 />
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Makan</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame43 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/chevron-down">
        <div className="absolute bottom-[35%] left-1/4 right-1/4 top-[35%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path clipRule="evenodd" d={svgPaths.p23688f70} fill="var(--fill-0, #2A353E)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex font-['Quicksand:SemiBold',sans-serif] font-semibold gap-[2px] items-center leading-[0] relative shrink-0 text-[16px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[#2a353e]">
        <p className="leading-[1.25]">Sisa</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3a5ed7]">
        <p className="leading-[1.25]">Rp600.000</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 tracking-[0.2px] w-full whitespace-nowrap">
      <Frame48 />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#8c9aa6] text-[12px] text-center">Rp40.000/hari</p>
    </div>
  );
}

function InputField3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame26 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 311 1">
            <path d="M0 0.5H311" id="Vector 5" stroke="var(--stroke-0, #EAEEFA)" />
          </svg>
        </div>
      </div>
      <Frame44 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#e5f0fe] overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-[calc(50%+0.5px)]" data-name="Automobile">
        <div className="absolute inset-[29.69%_6.27%_23.44%_6.23%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 15">
            <g id="Union">
              <path d={svgPaths.p2760ec00} fill="url(#paint0_linear_1_7977)" />
              <path d={svgPaths.p2760ec00} fill="url(#paint1_radial_1_7977)" />
              <path d={svgPaths.p2760ec00} fill="url(#paint2_radial_1_7977)" />
              <path d={svgPaths.p2760ec00} fill="url(#paint3_linear_1_7977)" />
              <path d={svgPaths.p2760ec00} fill="url(#paint4_linear_1_7977)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7977" x1="0.587402" x2="15.2749" y1="9.11284" y2="9.11284">
                <stop stopColor="#DF378A" />
                <stop offset="1" stopColor="#024590" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(25.3681 0.805364) rotate(136.332) scale(2.18138 3.8357)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7977" r="1">
                <stop stopColor="#FF4D5A" />
                <stop offset="1" stopColor="#FF4D5A" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(3.78112e-07 -2.5 3.21222 0.872654 9.005 8.5)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7977" r="1">
                <stop offset="0.2125" stopColor="#9E194F" />
                <stop offset="0.3625" stopColor="#9E194F" stopOpacity="0" />
              </radialGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_7977" x1="28.005" x2="27.005" y1="7.64204" y2="7.64204">
                <stop stopColor="#BF2332" />
                <stop offset="1" stopColor="#BF2332" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_7977" x1="14" x2="14" y1="-0.581665" y2="2.03293">
                <stop offset="0.176588" stopColor="#88C2DD" />
                <stop offset="0.48089" stopColor="#3484B0" />
                <stop offset="1" stopColor="#024590" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[35.94%_50.05%_45.31%_24.89%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.01978 6">
            <g id="Vector">
              <path d={svgPaths.pdd84400} fill="url(#paint0_linear_1_7964)" />
              <path d={svgPaths.pdd84400} fill="url(#paint1_linear_1_7964)" />
              <path d={svgPaths.pdd84400} fill="url(#paint2_linear_1_7964)" />
              <path d={svgPaths.pdd84400} fill="url(#paint3_linear_1_7964)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7964" x1="6.74219" x2="1.17969" y1="1.44281" y2="6">
                <stop stopColor="#3398F0" />
                <stop offset="1" stopColor="#57E8FF" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7964" x1="8.01978" x2="6.17969" y1="5.19281" y2="5.19281">
                <stop stopColor="#2372D7" />
                <stop offset="1" stopColor="#2372D7" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_7964" x1="6.17969" x2="6.17969" y1="-0.557187" y2="5.25531">
                <stop offset="0.225806" stopColor="#2372D7" />
                <stop offset="1" stopColor="#2372D7" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_7964" x1="0" x2="4.00989" y1="6" y2="6">
                <stop stopColor="#5EEEFF" />
                <stop offset="0.652683" stopColor="#40ACF4" />
                <stop offset="1" stopColor="#40ACF4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[73.44%_6.27%_20.31%_6.23%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 2">
            <g id="Vector">
              <path d={svgPaths.p2c2cd100} fill="var(--fill-0, #9989AA)" />
              <path d={svgPaths.p2c2cd100} fill="url(#paint0_linear_1_7926)" />
              <path d={svgPaths.p2c2cd100} fill="url(#paint1_linear_1_7926)" />
              <path d={svgPaths.p2c2cd100} fill="url(#paint2_linear_1_7926)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7926" x1="2.6077e-08" x2="0.889825" y1="1" y2="1">
                <stop stopColor="#847F89" />
                <stop offset="1" stopColor="#847F89" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7926" x1="28" x2="26.4352" y1="1" y2="1">
                <stop stopColor="#847F89" />
                <stop offset="1" stopColor="#847F89" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_7926" x1="14" x2="14" y1="2" y2="1.16156">
                <stop stopColor="#734995" />
                <stop offset="1" stopColor="#734995" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[35.94%_25.11%_45.31%_56.27%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.96 6">
            <g id="Vector">
              <path d={svgPaths.p29da8140} fill="url(#paint0_linear_1_7966)" />
              <path d={svgPaths.p29da8140} fill="url(#paint1_linear_1_7966)" />
              <path d={svgPaths.p29da8140} fill="url(#paint2_linear_1_7966)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7966" x1="3.95239" x2="2.301e-07" y1="1.94281" y2="6.56781">
                <stop stopColor="#40A4FF" />
                <stop offset="1" stopColor="#5BF6FF" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7966" x1="5.95048" x2="2.98" y1="2.49607" y2="2.49607">
                <stop offset="0.0429181" stopColor="#2C76F6" />
                <stop offset="0.569698" stopColor="#2C76F6" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_7966" x1="2.97524" x2="2.97673" y1="-0.329402" y2="2.49608">
                <stop offset="0.149221" stopColor="#2C76F6" />
                <stop offset="0.821504" stopColor="#2C76F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[35.94%_6.73%_45.31%_81.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.87 6">
            <g id="Vector">
              <path d={svgPaths.p12128500} fill="url(#paint0_linear_1_7954)" />
              <path d={svgPaths.p12128500} fill="url(#paint1_linear_1_7954)" />
              <path d={svgPaths.p12128500} fill="url(#paint2_linear_1_7954)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7954" x1="2.73242" x2="-0.330078" y1="3" y2="6">
                <stop stopColor="#3DA7FF" />
                <stop offset="1" stopColor="#4CF0F8" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7954" x1="0.435547" x2="1.12305" y1="0.552188" y2="1.31781">
                <stop stopColor="#2588DA" />
                <stop offset="1" stopColor="#2588DA" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_7954" x1="4.26367" x2="3.10742" y1="6" y2="4.91156">
                <stop stopColor="#2588DA" />
                <stop offset="1" stopColor="#2588DA" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[65.72%_61.37%_20.31%_14.46%]" data-name="Intersect">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73438 4.46875">
            <path d={svgPaths.p3464d9e0} fill="url(#paint0_linear_1_7950)" id="Intersect" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7950" x1="3.86719" x2="3.86719" y1="0" y2="4.33996">
                <stop stopColor="#718DEA" />
                <stop offset="1" stopColor="#024590" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[65.72%_14.49%_20.31%_61.34%]" data-name="Intersect">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73438 4.46875">
            <path d={svgPaths.p3464d9e0} fill="url(#paint0_linear_1_7956)" id="Intersect" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7956" x1="3.86719" x2="3.86719" y1="0" y2="4.33996">
                <stop stopColor="#718DEA" />
                <stop offset="1" stopColor="#024590" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[60.94%_87.55%_29.69%_6.23%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99 3">
            <path d={svgPaths.p1a7ceb80} fill="var(--fill-0, #F7DA4C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[67.19%_15.64%_10.94%_62.48%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <g id="Vector">
              <path d={svgPaths.p33a5300} fill="url(#paint0_linear_1_7981)" />
              <path d={svgPaths.p33a5300} fill="url(#paint1_radial_1_7981)" />
              <path d={svgPaths.p33a5300} fill="url(#paint2_radial_1_7981)" />
              <path d={svgPaths.p33a5300} fill="url(#paint3_radial_1_7981)" />
              <path d={svgPaths.p33a5300} fill="url(#paint4_radial_1_7981)" fillOpacity="0.8" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7981" x1="1.8861" x2="7.14319" y1="2.61992" y2="2.61992">
                <stop offset="0.239044" stopColor="#34214F" />
                <stop offset="1" stopColor="#241337" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.5 3.1868) rotate(-65.5366) scale(1.9097 1.99461)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7981" r="1">
                <stop offset="0.523134" stopColor="#2D114D" />
                <stop offset="1" stopColor="#2B1249" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.5 3.1868) rotate(-65.5366) scale(1.9097 1.99461)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7981" r="1">
                <stop offset="0.523134" stopColor="#2D114D" />
                <stop offset="1" stopColor="#2B1249" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.50391 3.54698) rotate(-74.0546) scale(3.6482 3.81042)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7981" r="1">
                <stop offset="0.382076" stopColor="#585064" stopOpacity="0" />
                <stop offset="0.540094" stopColor="#585064" stopOpacity="0.5" />
                <stop offset="0.647406" stopColor="#585064" />
                <stop offset="0.767689" stopColor="#585064" stopOpacity="0.5" />
                <stop offset="0.898585" stopColor="#585064" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.5 3.1868) rotate(-58.5373) scale(1.92771 5.06776)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7981" r="1">
                <stop offset="0.523134" stopColor="#331F4E" />
                <stop offset="1" stopColor="#331F4E" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[73.44%_21.89%_17.19%_68.73%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <g id="Vector">
              <path d={svgPaths.p59ff800} fill="var(--fill-0, #D9C3F0)" />
              <path d={svgPaths.p59ff800} fill="url(#paint0_radial_1_7987)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.12479 0.708424) rotate(119.578) scale(2.85191 3.06763)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7987" r="1">
                <stop offset="0.759833" stopColor="#AC6BE4" stopOpacity="0" />
                <stop offset="1" stopColor="#AC6BE4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[60.94%_6.3%_29.69%_87.45%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.00166 3">
            <path d={svgPaths.p3322dc00} fill="url(#paint0_radial_1_7924)" id="Vector" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.00166 2.66934) rotate(-120.532) scale(2.61197)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7924" r="1">
                <stop offset="0.418213" stopColor="#D32374" />
                <stop offset="1" stopColor="#B60160" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[67.19%_62.45%_10.94%_15.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <g id="Vector">
              <path d={svgPaths.p33a5300} fill="url(#paint0_linear_1_7922)" />
              <path d={svgPaths.p33a5300} fill="url(#paint1_radial_1_7922)" />
              <path d={svgPaths.p33a5300} fill="url(#paint2_radial_1_7922)" />
              <path d={svgPaths.p33a5300} fill="url(#paint3_radial_1_7922)" />
              <path d={svgPaths.p33a5300} fill="url(#paint4_radial_1_7922)" fillOpacity="0.8" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7922" x1="1.8861" x2="7.14319" y1="2.61992" y2="2.61992">
                <stop offset="0.239044" stopColor="#34214F" />
                <stop offset="1" stopColor="#241337" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.5 3.1868) rotate(-65.5366) scale(1.9097 1.99461)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7922" r="1">
                <stop offset="0.523134" stopColor="#2D114D" />
                <stop offset="1" stopColor="#2B1249" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.5 3.1868) rotate(-65.5366) scale(1.9097 1.99461)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7922" r="1">
                <stop offset="0.523134" stopColor="#2D114D" />
                <stop offset="1" stopColor="#2B1249" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.50392 3.54698) rotate(-74.0546) scale(3.6482 3.81042)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7922" r="1">
                <stop offset="0.382076" stopColor="#585064" stopOpacity="0" />
                <stop offset="0.540094" stopColor="#585064" stopOpacity="0.5" />
                <stop offset="0.647406" stopColor="#585064" />
                <stop offset="0.767689" stopColor="#585064" stopOpacity="0.5" />
                <stop offset="0.898585" stopColor="#585064" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.5 3.1868) rotate(-58.5373) scale(1.92771 5.06776)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7922" r="1">
                <stop offset="0.523134" stopColor="#331F4E" />
                <stop offset="1" stopColor="#331F4E" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[73.44%_68.77%_17.19%_21.86%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <g id="Vector">
              <path d={svgPaths.p3b03e380} fill="var(--fill-0, #D9C3F0)" />
              <path d={svgPaths.p3b03e380} fill="url(#paint0_radial_1_7918)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.12479 0.708424) rotate(119.578) scale(2.85191 3.06763)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7918" r="1">
                <stop offset="0.759833" stopColor="#AC6BE4" stopOpacity="0" />
                <stop offset="1" stopColor="#AC6BE4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[48.26%_61.95%_42.05%_31.72%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.02344 3.10123">
            <g id="Union">
              <path d={svgPaths.p1cdb1e00} fill="url(#paint0_radial_1_7914)" />
              <path d={svgPaths.p1cdb1e00} fill="url(#paint1_linear_1_7914)" />
              <path d={svgPaths.p1cdb1e00} fill="url(#paint2_radial_1_7914)" />
              <path d={svgPaths.p1cdb1e00} fill="url(#paint3_radial_1_7914)" fillOpacity="0.8" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(1.25028 -1.30473 3.48311 3.33647 0.829289 2.48402)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7914" r="1">
                <stop stopColor="#3A2557" />
                <stop offset="1" stopColor="#281F4A" />
              </radialGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7914" x1="1.70707" x2="2.02344" y1="1.79438" y2="1.79438">
                <stop stopColor="#281F4A" stopOpacity="0" />
                <stop offset="1" stopColor="#281F4A" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(1.98467 -2.45642 2.79779 2.2162 1.50789 1.51991)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7914" r="1">
                <stop offset="0.392363" stopColor="#362454" stopOpacity="0" />
                <stop offset="0.515256" stopColor="#362454" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.34857 1.0568) rotate(180) scale(1.00023 2.65374)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7914" r="1">
                <stop stopColor="#605778" />
                <stop offset="0.565841" stopColor="#605778" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame54 />
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Transportasi</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame50 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/chevron-down">
        <div className="absolute bottom-[35%] left-1/4 right-1/4 top-[35%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path clipRule="evenodd" d={svgPaths.p23688f70} fill="var(--fill-0, #2A353E)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex font-['Quicksand:SemiBold',sans-serif] font-semibold gap-[2px] items-center leading-[0] relative shrink-0 text-[16px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[#2a353e]">
        <p className="leading-[1.25]">Sisa</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3a5ed7]">
        <p className="leading-[1.25]">Rp600.000</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 tracking-[0.2px] w-full whitespace-nowrap">
      <Frame52 />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#8c9aa6] text-[12px] text-center">Rp40.000/hari</p>
    </div>
  );
}

function InputField4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame49 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 311 1">
            <path d="M0 0.5H311" id="Vector 5" stroke="var(--stroke-0, #EAEEFA)" />
          </svg>
        </div>
      </div>
      <Frame51 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[#e6f4e9] overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="Light bulb">
        <div className="absolute inset-[82.28%_44.87%_6.64%_44.05%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.54688 3.54688">
            <circle cx="1.77344" cy="1.77344" fill="url(#paint0_radial_1_7912)" id="Ellipse 239" r="1.77344" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.24219 2.78125) rotate(96.6544) scale(0.943859 2.18614)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7912" r="1">
                <stop offset="0.267752" stopColor="#AC90C6" />
                <stop offset="1" stopColor="#8E6AAA" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[69.29%_39.7%_9.72%_39.11%] rounded-[1.25px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 6.7813 6.7188\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.39644 -0.055385 0.0034408 0.024629 2.6549 5.8135)\\'><stop stop-color=\\'rgba(126,102,147,1)\\' offset=\\'0.9467\\'/><stop stop-color=\\'rgba(126,102,147,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 6.7813 6.7188\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.42119 -0.053042 0.0032952 0.026167 2.5693 3.3594)\\'><stop stop-color=\\'rgba(126,102,147,1)\\' offset=\\'0.9467\\'/><stop stop-color=\\'rgba(126,102,147,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 6.7813 6.7188\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-2.3502e-8 0.084688 -0.16579 -4.8534e-8 5.4559 0.86946)\\'><stop stop-color=\\'rgba(231,223,231,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(231,223,231,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(1.10845e-12deg, rgb(126, 95, 158) 0%, rgba(126, 95, 158, 0) 18.837%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 6.7813 6.7188\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.0019634 0.082463 -0.36714 0.0087413 4.789 0.46852)\\'><stop stop-color=\\'rgba(237,226,235,1)\\' offset=\\'0.22877\\'/><stop stop-color=\\'rgba(200,188,203,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(138, 123, 136) 4.9373%, rgba(138, 123, 136, 0) 19.487%), linear-gradient(270deg, rgb(205, 194, 209) 0%, rgb(148, 124, 141) 100%)" }} />
        <div className="absolute inset-[6.23%_23.27%_28.22%_22.68%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2969 20.9763">
            <g id="Union">
              <path d={svgPaths.pc351b80} fill="url(#paint0_radial_1_7894)" />
              <path d={svgPaths.pc351b80} fill="url(#paint1_radial_1_7894)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(12.298 6.13258) rotate(138.066) scale(9.91369 8.17473)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7894" r="1">
                <stop offset="0.286168" stopColor="#FFEC87" />
                <stop offset="1" stopColor="#FFCD4B" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(13.2355 11.4451) rotate(-147.604) scale(14.5819 14.0258)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7894" r="1">
                <stop offset="0.622387" stopColor="#FFB239" stopOpacity="0" />
                <stop offset="1" stopColor="#FFB239" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[11.33%_35.03%_67.87%_44.17%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.65625 6.65625">
            <circle cx="3.32812" cy="3.32812" fill="url(#paint0_linear_1_8003)" id="Ellipse 238" r="3.32812" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_8003" x1="2.16419" x2="5.5857" y1="4.40241" y2="1.7363">
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.594121" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[31.35%_37.96%_28.23%_37.14%]" data-name="Intersect">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.96875 12.9351">
            <path d={svgPaths.pf198d80} fill="var(--fill-0, #FFAD55)" id="Intersect" />
          </svg>
        </div>
        <div className="absolute inset-[32.5%_39.11%_28.94%_39.11%]" data-name="Union">
          <div className="absolute inset-[-1.01%_-1.79%_0_-1.79%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.21875 12.4643">
              <path d={svgPaths.p27d28e00} id="Union" stroke="url(#paint0_linear_1_7906)" strokeWidth="0.25" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7906" x1="7.32901" x2="3.32364" y1="0.723078" y2="10.2653">
                  <stop stopColor="#FFBF5C" />
                  <stop offset="1" stopColor="#FFBF5C" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[81.8%_37.27%_10.78%_36.51%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(2.03271cqw,45.8045cqh)] rotate-[-8.9deg] w-[hypot(97.9673cqw,-54.1955cqh)]">
            <div className="rounded-[1.25px] size-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 8.3203 1.1018\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.00046966 0.083749 -0.4957 -0.0027799 6.8962 0.37617)\\'><stop stop-color=\\'rgba(252,240,252,1)\\' offset=\\'0.1267\\'/><stop stop-color=\\'rgba(229,201,227,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(86.9511deg, rgb(149, 131, 135) 0.86106%, rgba(149, 131, 135, 0) 32.498%), linear-gradient(-0.18535deg, rgb(138, 104, 169) 2.9867%, rgba(222, 194, 227, 0) 73.082%), linear-gradient(176.296deg, rgb(177, 150, 154) 16.584%, rgb(218, 210, 226) 90.919%)" }} />
          </div>
        </div>
        <div className="absolute flex inset-[74.37%_37.27%_18.2%_36.51%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(2.03271cqw,45.8045cqh)] rotate-[-8.9deg] w-[hypot(97.9673cqw,-54.1955cqh)]">
            <div className="rounded-[1.25px] size-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 8.3203 1.1018\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.00046966 0.083749 -0.4957 -0.0027799 6.8962 0.37617)\\'><stop stop-color=\\'rgba(252,240,252,1)\\' offset=\\'0.1267\\'/><stop stop-color=\\'rgba(229,201,227,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(86.9511deg, rgb(149, 131, 135) 0.86106%, rgba(149, 131, 135, 0) 32.498%), linear-gradient(-0.18535deg, rgb(138, 104, 169) 2.9867%, rgba(222, 194, 227, 0) 73.082%), linear-gradient(176.296deg, rgb(177, 150, 154) 16.584%, rgb(218, 210, 226) 90.919%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame57 />
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Transportasi</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame56 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/chevron-down">
        <div className="absolute bottom-[35%] left-1/4 right-1/4 top-[35%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path clipRule="evenodd" d={svgPaths.p23688f70} fill="var(--fill-0, #2A353E)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex font-['Quicksand:SemiBold',sans-serif] font-semibold gap-[2px] items-center leading-[0] relative shrink-0 text-[16px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[#2a353e]">
        <p className="leading-[1.25]">Sisa</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3a5ed7]">
        <p className="leading-[1.25]">Rp600.000</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 tracking-[0.2px] w-full whitespace-nowrap">
      <Frame59 />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#8c9aa6] text-[12px] text-center">Rp40.000/hari</p>
    </div>
  );
}

function InputField5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame55 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 311 1">
            <path d="M0 0.5H311" id="Vector 5" stroke="var(--stroke-0, #EAEEFA)" />
          </svg>
        </div>
      </div>
      <Frame58 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#2a353e] text-[16px] text-center tracking-[0.2px] whitespace-nowrap">Kategori budget</p>
      <InputField3 />
      <InputField4 />
      <InputField5 />
      <div className="bg-[#eaeefa] relative rounded-[12px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
            <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#3a5ed7] text-[14px] tracking-[0.2px] whitespace-nowrap">Tambah Kategori</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] items-start left-0 overflow-clip p-[16px] rounded-tl-[24px] rounded-tr-[24px] top-[312px] w-[375px]">
      <Button />
      <Frame41 />
    </div>
  );
}

function Symbols1() {
  return (
    <div className="-translate-y-1/2 absolute h-[13px] right-[13.5px] top-[calc(50%+1.1px)] w-[68px]" data-name="Symbols">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 13">
        <g id="Symbols">
          <g id="Battery">
            <path d={svgPaths.p36aff970} fill="var(--fill-0, white)" id="Rectangle" opacity="0.4" />
            <rect fill="var(--fill-0, white)" height="7.66667" id="Rectangle_2" rx="1.6" width="18" x="44.5" y="2.47666" />
          </g>
          <path d={svgPaths.p38d75f80} fill="var(--fill-0, white)" id="Combined Shape" />
          <path clipRule="evenodd" d={svgPaths.p1802da00} fill="var(--fill-0, white)" fillRule="evenodd" id="Wi-Fi" />
        </g>
      </svg>
    </div>
  );
}

function BarsStatusTime1() {
  return (
    <div className="-translate-y-1/2 absolute h-[22px] left-0 top-[calc(50%+1px)] w-[180px]" data-name="Bars/Status/_/Time">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[29.5px] text-[15px] text-white top-[calc(50%-9px)] tracking-[-0.165px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        19:27
      </p>
    </div>
  );
}

function StatusBar1() {
  return (
    <div className="absolute h-[44px] left-0 right-0 top-0" data-name="status_bar">
      <Symbols1 />
      <BarsStatusTime1 />
    </div>
  );
}

function Left1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="left">
      <div className="absolute bottom-0 left-0 overflow-clip top-0 w-[24px]" data-name="left button">
        <div className="absolute inset-[16.67%]" data-name="Intersect">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p318c4e00} fill="var(--fill-0, white)" id="Intersect" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Right1() {
  return <div className="shrink-0 size-[24px]" data-name="right" />;
}

function Toast() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#e8fae3] content-stretch flex gap-[8px] items-start left-1/2 px-[12px] py-[8px] rounded-[8px] top-[57px] w-[311px]" data-name="Toast">
      <div aria-hidden="true" className="absolute border border-[#ecf1f6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/badge-check">
        <div className="absolute inset-[10%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path clipRule="evenodd" d={svgPaths.p109daf00} fill="var(--fill-0, #3BB24F)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] min-w-px relative text-[#2a353e] text-[14px] tracking-[0.2px]">Budget anda berhasil disimpan</p>
    </div>
  );
}

function Screen1() {
  return (
    <div className="absolute bg-gradient-to-b from-[#304eb3] h-[886px] left-[1443px] overflow-clip to-[#4ca9d5] to-[65.271%] top-[14px] w-[375px]" data-name="Screen">
      <Frame34 />
      <Frame1 />
      <StatusBar1 />
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[16px] items-center justify-center left-1/2 px-[20px] py-[18px] top-[44px] w-[375px]" data-name="Navigation Bar">
        <Left1 />
        <p className="flex-[1_0_0] font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] min-w-px relative text-[20px] text-center text-white tracking-[0.2px]">Budgeting</p>
        <Right1 />
      </div>
      <Toast />
    </div>
  );
}

function Symbols2() {
  return (
    <div className="-translate-y-1/2 absolute h-[13px] right-[13.5px] top-[calc(50%+1.1px)] w-[68px]" data-name="Symbols">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 13">
        <g id="Symbols">
          <g id="Battery">
            <path d={svgPaths.p36aff970} fill="var(--fill-0, #1F2C37)" id="Rectangle" opacity="0.4" />
            <rect fill="var(--fill-0, #1F2C37)" height="7.66667" id="Rectangle_2" rx="1.6" width="18" x="44.5" y="2.47666" />
          </g>
          <path d={svgPaths.p38d75f80} fill="var(--fill-0, #1F2C37)" id="Combined Shape" />
          <path clipRule="evenodd" d={svgPaths.p1802da00} fill="var(--fill-0, #1F2C37)" fillRule="evenodd" id="Wi-Fi" />
        </g>
      </svg>
    </div>
  );
}

function BarsStatusTime2() {
  return (
    <div className="-translate-y-1/2 absolute h-[22px] left-0 top-[calc(50%+1px)] w-[180px]" data-name="Bars/Status/_/Time">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[29.5px] text-[#1f2c37] text-[15px] top-[calc(50%-9px)] tracking-[-0.165px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        19:27
      </p>
    </div>
  );
}

function StatusBar2() {
  return (
    <div className="absolute bg-[#fdfdfd] h-[44px] left-0 right-0 top-0" data-name="status_bar">
      <Symbols2 />
      <BarsStatusTime2 />
    </div>
  );
}

function Left2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="left">
      <div className="absolute bottom-0 left-0 overflow-clip top-0 w-[24px]" data-name="left button">
        <div className="absolute inset-[16.67%]" data-name="Intersect">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p318c4e00} fill="var(--fill-0, #121212)" id="Intersect" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Right2() {
  return <div className="shrink-0 size-[24px]" data-name="right" />;
}

function Component() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="1">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#8c9aa6] text-[12px] text-center tracking-[0.2px] whitespace-nowrap">Langkah 2 dari 2</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[1.25] relative shrink-0 tracking-[0.2px] w-full whitespace-nowrap" data-name="Label">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal relative shrink-0 text-[#1f2c37] text-[14px]">Total budget</p>
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#4caad6] text-[16px]">Rp 6.000.000</p>
    </div>
  );
}

function InputField6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <Label />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Quicksand:Regular',sans-serif] font-normal gap-[4px] items-start justify-center min-w-px relative text-[12px]">
      <p className="leading-[1.4] relative shrink-0 text-[#1f2c37] w-full">Rekomendasi berdasarkan budget anda</p>
      <p className="leading-[1.25] relative shrink-0 text-[#3a5ed7] tracking-[0.2px] w-full">Periode 15 - 30 April</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-[rgba(219,238,246,0.5)] relative rounded-[8px] shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex gap-[4px] items-start p-[8px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/information-circle">
          <div className="absolute inset-[10%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path clipRule="evenodd" d={svgPaths.p52c0380} fill="var(--fill-0, #3A5ED7)" fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
        <Frame61 />
      </div>
    </div>
  );
}

function BudgetSummary() {
  return (
    <div className="bg-[#fdfdfd] relative shrink-0 w-full" data-name="Budget Summary">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Component />
          <InputField6 />
          <Label1 />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#fce2eb] overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="Fork and knife with plate">
        <div className="absolute inset-[18.79%_13.44%_12.48%_17.82%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9956 21.9956">
            <g id="Vector">
              <path d={svgPaths.p809b0c0} fill="url(#paint0_linear_1_7985)" />
              <path d={svgPaths.p809b0c0} fill="url(#paint1_radial_1_7985)" />
              <path d={svgPaths.p809b0c0} fill="url(#paint2_radial_1_7985)" />
              <path d={svgPaths.p809b0c0} fill="url(#paint3_radial_1_7985)" />
              <path d={svgPaths.p809b0c0} fill="url(#paint4_radial_1_7985)" />
              <path d={svgPaths.p809b0c0} fill="url(#paint5_radial_1_7985)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7985" x1="9.74389" x2="10.9978" y1="7.67872e-09" y2="21.9956">
                <stop offset="0.115334" stopColor="#BCBBC4" />
                <stop offset="0.227922" stopColor="#8F8D9B" />
                <stop offset="0.689257" stopColor="#A8A0BC" />
                <stop offset="0.766146" stopColor="#BFA1E2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(10.9978 10.9978) rotate(90) scale(10.9978 10.9978)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7985" r="1">
                <stop offset="0.943572" stopColor="#DDCEF5" />
                <stop offset="1" stopColor="#DDCEF5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.81548 11.9878) rotate(-36.6264) scale(10.3789 10.3789)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7985" r="1">
                <stop offset="0.324467" stopColor="#EAE0FD" />
                <stop offset="0.633232" stopColor="#E7DDF9" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(11.7132 13.6204) rotate(144.796) scale(13.1791 16.4821)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7985" r="1">
                <stop offset="0.856316" stopColor="white" stopOpacity="0" />
                <stop offset="0.890511" stopColor="white" stopOpacity="0.3" />
                <stop offset="0.956564" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(20.7656 7.83154) rotate(88.5024) scale(4.78288 2.42376)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7985" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(21.6719 7.20654) rotate(82.7368) scale(6.42657 3.25671)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_7985" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[29.51%_24.16%_23.2%_28.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.134 15.134">
            <g id="Vector">
              <path d={svgPaths.p27d70f80} fill="var(--fill-0, #D8CBF0)" />
              <path d={svgPaths.p27d70f80} fill="url(#paint0_radial_1_8005)" />
              <path d={svgPaths.p27d70f80} fill="url(#paint1_radial_1_8005)" />
              <path d={svgPaths.p27d70f80} fill="url(#paint2_radial_1_8005)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.31319 9.01176) rotate(82.9973) scale(10.2845 11.7776)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_8005" r="1">
                <stop offset="0.596424" stopColor="#DACEF3" />
                <stop offset="0.754428" stopColor="#CCB9EB" />
                <stop offset="0.962131" stopColor="#BCA7DC" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(11.3869 2.24686) rotate(142.239) scale(18.642 17.7929)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_8005" r="1">
                <stop offset="0.476664" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.693657" stopColor="#E9E2FD" />
                <stop offset="0.816307" stopColor="#EBE8FB" />
                <stop offset="0.962131" stopColor="#EAE7F9" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.17234 3.03208) rotate(56.149) scale(17.8914 20.489)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_8005" r="1">
                <stop offset="0.536739" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.754428" stopColor="#B9B5CA" />
                <stop offset="0.962131" stopColor="#B2AEC4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_72.26%_6.25%_6.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.84609 24.9586">
            <g id="Vector">
              <path d={svgPaths.pa8d9200} fill="url(#paint0_linear_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint1_linear_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="var(--fill-2, black)" fillOpacity="0.05" />
              <path d={svgPaths.pa8d9200} fill="url(#paint2_linear_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint3_linear_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint4_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint5_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint6_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint7_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint8_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint9_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint10_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint11_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint12_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint13_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint14_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint15_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint16_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint17_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint18_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint19_radial_1_7983)" />
              <path d={svgPaths.pa8d9200} fill="url(#paint20_radial_1_7983)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7983" x1="2.08818" x2="4.7332" y1="17.6633" y2="17.6633">
                <stop stopColor="#A29CAE" />
                <stop offset="0.2" stopColor="#AFA5C1" />
                <stop offset="0.789474" stopColor="#C9C1D9" />
                <stop offset="1" stopColor="#BFBACB" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7983" x1="3.42304" x2="3.42304" y1="0" y2="24.9586">
                <stop offset="0.389773" stopColor="#BBB2CC" />
                <stop offset="0.432164" stopColor="#BEB5CE" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_7983" x1="3.42304" x2="3.42304" y1="0" y2="24.9586">
                <stop offset="0.001543" stopColor="#9F9BA9" />
                <stop offset="0.0266132" stopColor="#9F9BA9" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_7983" x1="0" x2="6.84618" y1="17.6633" y2="17.6633">
                <stop stopColor="#A29CAE" />
                <stop offset="0.0631842" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="0.934443" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="1" stopColor="#A29CAE" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.89328 4.07619) rotate(90) scale(0.793508)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7983" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.1021 1.55645) rotate(90) scale(3.68911 0.907443)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_7983" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.1021 3.9509) rotate(90) scale(0.835271)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_7983" r="1">
                <stop stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.70536 1.68174) rotate(90) scale(3.56382 0.876624)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_7983" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.47643 4.10712) rotate(90) scale(0.711527)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_7983" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.70536 3.93698) rotate(90) scale(0.849192)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_7983" r="1">
                <stop offset="0.477231" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.28169 0.458042) rotate(41.4237) scale(0.708728 0.865703)" gradientUnits="userSpaceOnUse" id="paint10_radial_1_7983" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.78254 0.286109) rotate(39.2072) scale(0.766524 0.9363)" gradientUnits="userSpaceOnUse" id="paint11_radial_1_7983" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.39281 0.270478) rotate(48.6914) scale(0.686668 0.838757)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_7983" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.42309 -4.22084) rotate(90) scale(29.1795 7.2375)" gradientUnits="userSpaceOnUse" id="paint13_radial_1_7983" r="1">
                <stop offset="0.961641" stopColor="#9883B3" stopOpacity="0" />
                <stop offset="1" stopColor="#8F78AB" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.634188 8.71039) rotate(46.106) scale(2.49334 0.683918)" gradientUnits="userSpaceOnUse" id="paint14_radial_1_7983" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-0.350686 8.0109) rotate(60.6758) scale(2.79877 1.19125)" gradientUnits="userSpaceOnUse" id="paint15_radial_1_7983" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.5708 8.08549) rotate(103.241) scale(1.45874 0.620888)" gradientUnits="userSpaceOnUse" id="paint16_radial_1_7983" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.09748 8.76763) rotate(133.091) scale(2.36382 0.648389)" gradientUnits="userSpaceOnUse" id="paint17_radial_1_7983" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.41767 3.4915) rotate(90) scale(3.64735 0.375871)" gradientUnits="userSpaceOnUse" id="paint18_radial_1_7983" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.15" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.93815 2.24478) rotate(90) scale(2.14077 0.273219)" gradientUnits="userSpaceOnUse" id="paint19_radial_1_7983" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.17" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.33643 2.48917) rotate(90) scale(1.97681 0.252293)" gradientUnits="userSpaceOnUse" id="paint20_radial_1_7983" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.18" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_6.79%_6.27%_77.71%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.95872 24.9501">
            <g id="Union">
              <path d={svgPaths.p38605d00} fill="url(#paint0_linear_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint1_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint2_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint3_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint4_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint5_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint6_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint7_radial_1_7979)" />
              <path d={svgPaths.p38605d00} fill="url(#paint8_radial_1_7979)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7979" x1="4.95872" x2="2.19244" y1="7.02038" y2="7.02038">
                <stop stopColor="#C4C2CB" />
                <stop offset="0.514744" stopColor="#B2A8C2" />
                <stop offset="1" stopColor="#948CA2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-8.14483e-08 12.4803) rotate(35.4843) scale(4.50209 1.50615)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7979" r="1">
                <stop stopColor="#9B89B3" />
                <stop offset="1" stopColor="#A28EBB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.0197 6.28487) rotate(0.616057) scale(2.30238 9.0123)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7979" r="1">
                <stop offset="0.682353" stopColor="#B1A8C0" />
                <stop offset="1" stopColor="#BBB4C8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.20672 12.0506) rotate(-157.62) scale(0.359394 1.32607)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7979" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.8" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.00449 12.6469) rotate(-71.9657) scale(0.442006 1.06341)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7979" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.5" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.95259 11.9724) rotate(-152.354) scale(0.463425 1.70992)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_7979" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.69044 12.1787) rotate(-65.4623) scale(0.464015 1.7121)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_7979" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.28125 1.36414) rotate(136.219) scale(1.0388 1.62421)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_7979" r="1">
                <stop stopColor="#D7D2E0" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.6288 1.50709) rotate(135) scale(1.19032 1.86112)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_7979" r="1">
                <stop stopColor="#BAB3C8" />
                <stop offset="1" stopColor="#BAB3C8" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame64 />
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[16px] tracking-[0.2px] whitespace-nowrap">Makan</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame63 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/x">
        <div className="absolute inset-[20%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p5637080} fill="var(--fill-0, #2A353E)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a4a4a4] text-[14px] whitespace-nowrap">Rp</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] tracking-[0.2px] whitespace-nowrap">2.000.000</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Label2 />
      <div className="h-[22.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 22.5">
            <path d="M0.5 0V22.5" id="Vector 4" stroke="var(--stroke-0, #ECF1F6)" />
          </svg>
        </div>
      </div>
      <Label3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a4a4a4] text-[14px] whitespace-nowrap">30%</p>
    </div>
  );
}

function Placeholdedr() {
  return (
    <div className="bg-[#fdfdfd] h-[46.5px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholdedr">
      <div aria-hidden="true" className="absolute border border-[#ecf1f6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start justify-between p-[12px] relative size-full">
        <Frame65 />
        <Label4 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Placeholdedr />
    </div>
  );
}

function Frame66() {
  return (
    <div className="h-[14px] relative shrink-0 w-full">
      <div className="absolute bg-[#dbeef6] h-[7px] left-0 right-0 rounded-[999px] top-[3.5px]" />
      <div className="absolute left-[86px] size-[14px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #4CAAD6)" id="Ellipse 43" r="7" />
        </svg>
      </div>
    </div>
  );
}

function InputField7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <Frame62 />
        <Frame11 />
        <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#8c9aa6] text-[12px] w-full">Sekitar Rp 60.000 per hari</p>
        <Frame66 />
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#e5f0fe] overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-[calc(50%+0.5px)]" data-name="Automobile">
        <div className="absolute inset-[29.69%_6.27%_23.44%_6.23%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 15">
            <g id="Union">
              <path d={svgPaths.p2760ec00} fill="url(#paint0_linear_1_7977)" />
              <path d={svgPaths.p2760ec00} fill="url(#paint1_radial_1_7977)" />
              <path d={svgPaths.p2760ec00} fill="url(#paint2_radial_1_7977)" />
              <path d={svgPaths.p2760ec00} fill="url(#paint3_linear_1_7977)" />
              <path d={svgPaths.p2760ec00} fill="url(#paint4_linear_1_7977)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7977" x1="0.587402" x2="15.2749" y1="9.11284" y2="9.11284">
                <stop stopColor="#DF378A" />
                <stop offset="1" stopColor="#024590" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(25.3681 0.805364) rotate(136.332) scale(2.18138 3.8357)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7977" r="1">
                <stop stopColor="#FF4D5A" />
                <stop offset="1" stopColor="#FF4D5A" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(3.78112e-07 -2.5 3.21222 0.872654 9.005 8.5)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7977" r="1">
                <stop offset="0.2125" stopColor="#9E194F" />
                <stop offset="0.3625" stopColor="#9E194F" stopOpacity="0" />
              </radialGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_7977" x1="28.005" x2="27.005" y1="7.64204" y2="7.64204">
                <stop stopColor="#BF2332" />
                <stop offset="1" stopColor="#BF2332" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_7977" x1="14" x2="14" y1="-0.581665" y2="2.03293">
                <stop offset="0.176588" stopColor="#88C2DD" />
                <stop offset="0.48089" stopColor="#3484B0" />
                <stop offset="1" stopColor="#024590" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[35.94%_50.05%_45.31%_24.89%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.01978 6">
            <g id="Vector">
              <path d={svgPaths.pdd84400} fill="url(#paint0_linear_1_7964)" />
              <path d={svgPaths.pdd84400} fill="url(#paint1_linear_1_7964)" />
              <path d={svgPaths.pdd84400} fill="url(#paint2_linear_1_7964)" />
              <path d={svgPaths.pdd84400} fill="url(#paint3_linear_1_7964)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7964" x1="6.74219" x2="1.17969" y1="1.44281" y2="6">
                <stop stopColor="#3398F0" />
                <stop offset="1" stopColor="#57E8FF" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7964" x1="8.01978" x2="6.17969" y1="5.19281" y2="5.19281">
                <stop stopColor="#2372D7" />
                <stop offset="1" stopColor="#2372D7" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_7964" x1="6.17969" x2="6.17969" y1="-0.557187" y2="5.25531">
                <stop offset="0.225806" stopColor="#2372D7" />
                <stop offset="1" stopColor="#2372D7" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_7964" x1="0" x2="4.00989" y1="6" y2="6">
                <stop stopColor="#5EEEFF" />
                <stop offset="0.652683" stopColor="#40ACF4" />
                <stop offset="1" stopColor="#40ACF4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[73.44%_6.27%_20.31%_6.23%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 2">
            <g id="Vector">
              <path d={svgPaths.p2c2cd100} fill="var(--fill-0, #9989AA)" />
              <path d={svgPaths.p2c2cd100} fill="url(#paint0_linear_1_7926)" />
              <path d={svgPaths.p2c2cd100} fill="url(#paint1_linear_1_7926)" />
              <path d={svgPaths.p2c2cd100} fill="url(#paint2_linear_1_7926)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7926" x1="2.6077e-08" x2="0.889825" y1="1" y2="1">
                <stop stopColor="#847F89" />
                <stop offset="1" stopColor="#847F89" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7926" x1="28" x2="26.4352" y1="1" y2="1">
                <stop stopColor="#847F89" />
                <stop offset="1" stopColor="#847F89" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_7926" x1="14" x2="14" y1="2" y2="1.16156">
                <stop stopColor="#734995" />
                <stop offset="1" stopColor="#734995" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[35.94%_25.11%_45.31%_56.27%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.96 6">
            <g id="Vector">
              <path d={svgPaths.p29da8140} fill="url(#paint0_linear_1_7966)" />
              <path d={svgPaths.p29da8140} fill="url(#paint1_linear_1_7966)" />
              <path d={svgPaths.p29da8140} fill="url(#paint2_linear_1_7966)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7966" x1="3.95239" x2="2.301e-07" y1="1.94281" y2="6.56781">
                <stop stopColor="#40A4FF" />
                <stop offset="1" stopColor="#5BF6FF" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7966" x1="5.95048" x2="2.98" y1="2.49607" y2="2.49607">
                <stop offset="0.0429181" stopColor="#2C76F6" />
                <stop offset="0.569698" stopColor="#2C76F6" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_7966" x1="2.97524" x2="2.97673" y1="-0.329402" y2="2.49608">
                <stop offset="0.149221" stopColor="#2C76F6" />
                <stop offset="0.821504" stopColor="#2C76F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[35.94%_6.73%_45.31%_81.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.87 6">
            <g id="Vector">
              <path d={svgPaths.p12128500} fill="url(#paint0_linear_1_7954)" />
              <path d={svgPaths.p12128500} fill="url(#paint1_linear_1_7954)" />
              <path d={svgPaths.p12128500} fill="url(#paint2_linear_1_7954)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7954" x1="2.73242" x2="-0.330078" y1="3" y2="6">
                <stop stopColor="#3DA7FF" />
                <stop offset="1" stopColor="#4CF0F8" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7954" x1="0.435547" x2="1.12305" y1="0.552188" y2="1.31781">
                <stop stopColor="#2588DA" />
                <stop offset="1" stopColor="#2588DA" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_7954" x1="4.26367" x2="3.10742" y1="6" y2="4.91156">
                <stop stopColor="#2588DA" />
                <stop offset="1" stopColor="#2588DA" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[65.72%_61.37%_20.31%_14.46%]" data-name="Intersect">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73438 4.46875">
            <path d={svgPaths.p3464d9e0} fill="url(#paint0_linear_1_7950)" id="Intersect" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7950" x1="3.86719" x2="3.86719" y1="0" y2="4.33996">
                <stop stopColor="#718DEA" />
                <stop offset="1" stopColor="#024590" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[65.72%_14.49%_20.31%_61.34%]" data-name="Intersect">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73438 4.46875">
            <path d={svgPaths.p3464d9e0} fill="url(#paint0_linear_1_7956)" id="Intersect" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7956" x1="3.86719" x2="3.86719" y1="0" y2="4.33996">
                <stop stopColor="#718DEA" />
                <stop offset="1" stopColor="#024590" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[60.94%_87.55%_29.69%_6.23%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99 3">
            <path d={svgPaths.p1a7ceb80} fill="var(--fill-0, #F7DA4C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[67.19%_15.64%_10.94%_62.48%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <g id="Vector">
              <path d={svgPaths.p33a5300} fill="url(#paint0_linear_1_7981)" />
              <path d={svgPaths.p33a5300} fill="url(#paint1_radial_1_7981)" />
              <path d={svgPaths.p33a5300} fill="url(#paint2_radial_1_7981)" />
              <path d={svgPaths.p33a5300} fill="url(#paint3_radial_1_7981)" />
              <path d={svgPaths.p33a5300} fill="url(#paint4_radial_1_7981)" fillOpacity="0.8" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7981" x1="1.8861" x2="7.14319" y1="2.61992" y2="2.61992">
                <stop offset="0.239044" stopColor="#34214F" />
                <stop offset="1" stopColor="#241337" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.5 3.1868) rotate(-65.5366) scale(1.9097 1.99461)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7981" r="1">
                <stop offset="0.523134" stopColor="#2D114D" />
                <stop offset="1" stopColor="#2B1249" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.5 3.1868) rotate(-65.5366) scale(1.9097 1.99461)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7981" r="1">
                <stop offset="0.523134" stopColor="#2D114D" />
                <stop offset="1" stopColor="#2B1249" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.50391 3.54698) rotate(-74.0546) scale(3.6482 3.81042)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7981" r="1">
                <stop offset="0.382076" stopColor="#585064" stopOpacity="0" />
                <stop offset="0.540094" stopColor="#585064" stopOpacity="0.5" />
                <stop offset="0.647406" stopColor="#585064" />
                <stop offset="0.767689" stopColor="#585064" stopOpacity="0.5" />
                <stop offset="0.898585" stopColor="#585064" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.5 3.1868) rotate(-58.5373) scale(1.92771 5.06776)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7981" r="1">
                <stop offset="0.523134" stopColor="#331F4E" />
                <stop offset="1" stopColor="#331F4E" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[73.44%_21.89%_17.19%_68.73%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <g id="Vector">
              <path d={svgPaths.p59ff800} fill="var(--fill-0, #D9C3F0)" />
              <path d={svgPaths.p59ff800} fill="url(#paint0_radial_1_7987)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.12479 0.708424) rotate(119.578) scale(2.85191 3.06763)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7987" r="1">
                <stop offset="0.759833" stopColor="#AC6BE4" stopOpacity="0" />
                <stop offset="1" stopColor="#AC6BE4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[60.94%_6.3%_29.69%_87.45%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.00166 3">
            <path d={svgPaths.p3322dc00} fill="url(#paint0_radial_1_7924)" id="Vector" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.00166 2.66934) rotate(-120.532) scale(2.61197)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7924" r="1">
                <stop offset="0.418213" stopColor="#D32374" />
                <stop offset="1" stopColor="#B60160" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[67.19%_62.45%_10.94%_15.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <g id="Vector">
              <path d={svgPaths.p33a5300} fill="url(#paint0_linear_1_7922)" />
              <path d={svgPaths.p33a5300} fill="url(#paint1_radial_1_7922)" />
              <path d={svgPaths.p33a5300} fill="url(#paint2_radial_1_7922)" />
              <path d={svgPaths.p33a5300} fill="url(#paint3_radial_1_7922)" />
              <path d={svgPaths.p33a5300} fill="url(#paint4_radial_1_7922)" fillOpacity="0.8" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7922" x1="1.8861" x2="7.14319" y1="2.61992" y2="2.61992">
                <stop offset="0.239044" stopColor="#34214F" />
                <stop offset="1" stopColor="#241337" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.5 3.1868) rotate(-65.5366) scale(1.9097 1.99461)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7922" r="1">
                <stop offset="0.523134" stopColor="#2D114D" />
                <stop offset="1" stopColor="#2B1249" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.5 3.1868) rotate(-65.5366) scale(1.9097 1.99461)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7922" r="1">
                <stop offset="0.523134" stopColor="#2D114D" />
                <stop offset="1" stopColor="#2B1249" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.50392 3.54698) rotate(-74.0546) scale(3.6482 3.81042)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7922" r="1">
                <stop offset="0.382076" stopColor="#585064" stopOpacity="0" />
                <stop offset="0.540094" stopColor="#585064" stopOpacity="0.5" />
                <stop offset="0.647406" stopColor="#585064" />
                <stop offset="0.767689" stopColor="#585064" stopOpacity="0.5" />
                <stop offset="0.898585" stopColor="#585064" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.5 3.1868) rotate(-58.5373) scale(1.92771 5.06776)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7922" r="1">
                <stop offset="0.523134" stopColor="#331F4E" />
                <stop offset="1" stopColor="#331F4E" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[73.44%_68.77%_17.19%_21.86%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <g id="Vector">
              <path d={svgPaths.p3b03e380} fill="var(--fill-0, #D9C3F0)" />
              <path d={svgPaths.p3b03e380} fill="url(#paint0_radial_1_7918)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.12479 0.708424) rotate(119.578) scale(2.85191 3.06763)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7918" r="1">
                <stop offset="0.759833" stopColor="#AC6BE4" stopOpacity="0" />
                <stop offset="1" stopColor="#AC6BE4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[48.26%_61.95%_42.05%_31.72%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.02344 3.10123">
            <g id="Union">
              <path d={svgPaths.p1cdb1e00} fill="url(#paint0_radial_1_7914)" />
              <path d={svgPaths.p1cdb1e00} fill="url(#paint1_linear_1_7914)" />
              <path d={svgPaths.p1cdb1e00} fill="url(#paint2_radial_1_7914)" />
              <path d={svgPaths.p1cdb1e00} fill="url(#paint3_radial_1_7914)" fillOpacity="0.8" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(1.25028 -1.30473 3.48311 3.33647 0.829289 2.48402)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7914" r="1">
                <stop stopColor="#3A2557" />
                <stop offset="1" stopColor="#281F4A" />
              </radialGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7914" x1="1.70707" x2="2.02344" y1="1.79438" y2="1.79438">
                <stop stopColor="#281F4A" stopOpacity="0" />
                <stop offset="1" stopColor="#281F4A" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(1.98467 -2.45642 2.79779 2.2162 1.50789 1.51991)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7914" r="1">
                <stop offset="0.392363" stopColor="#362454" stopOpacity="0" />
                <stop offset="0.515256" stopColor="#362454" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.34857 1.0568) rotate(180) scale(1.00023 2.65374)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7914" r="1">
                <stop stopColor="#605778" />
                <stop offset="0.565841" stopColor="#605778" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame69 />
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[16px] tracking-[0.2px] whitespace-nowrap">Transportasi</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame68 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/x">
        <div className="absolute inset-[20%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p5637080} fill="var(--fill-0, #2A353E)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a4a4a4] text-[14px] whitespace-nowrap">Rp</p>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] tracking-[0.2px] whitespace-nowrap">600.000</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Label5 />
      <div className="h-[22.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 22.5">
            <path d="M0.5 0V22.5" id="Vector 4" stroke="var(--stroke-0, #ECF1F6)" />
          </svg>
        </div>
      </div>
      <Label6 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a4a4a4] text-[14px] whitespace-nowrap">30%</p>
    </div>
  );
}

function Placeholdedr1() {
  return (
    <div className="bg-[#fdfdfd] h-[46.5px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholdedr">
      <div aria-hidden="true" className="absolute border border-[#ecf1f6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start justify-between p-[12px] relative size-full">
        <Frame70 />
        <Label7 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Placeholdedr1 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="h-[14px] relative shrink-0 w-full">
      <div className="absolute bg-[#dbeef6] h-[7px] left-0 right-0 rounded-[999px] top-[3.5px]" />
      <div className="absolute left-[185px] size-[14px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #4CAAD6)" id="Ellipse 43" r="7" />
        </svg>
      </div>
    </div>
  );
}

function InputField8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <Frame67 />
        <Frame12 />
        <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#8c9aa6] text-[12px] w-full">Sekitar Rp 60.000 per hari</p>
        <Frame71 />
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#e6f4e9] overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="Light bulb">
        <div className="absolute inset-[82.28%_44.87%_6.64%_44.05%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.54688 3.54688">
            <circle cx="1.77344" cy="1.77344" fill="url(#paint0_radial_1_7912)" id="Ellipse 239" r="1.77344" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.24219 2.78125) rotate(96.6544) scale(0.943859 2.18614)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7912" r="1">
                <stop offset="0.267752" stopColor="#AC90C6" />
                <stop offset="1" stopColor="#8E6AAA" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[69.29%_39.7%_9.72%_39.11%] rounded-[1.25px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 6.7813 6.7188\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.39644 -0.055385 0.0034408 0.024629 2.6549 5.8135)\\'><stop stop-color=\\'rgba(126,102,147,1)\\' offset=\\'0.9467\\'/><stop stop-color=\\'rgba(126,102,147,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 6.7813 6.7188\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.42119 -0.053042 0.0032952 0.026167 2.5693 3.3594)\\'><stop stop-color=\\'rgba(126,102,147,1)\\' offset=\\'0.9467\\'/><stop stop-color=\\'rgba(126,102,147,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 6.7813 6.7188\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-2.3502e-8 0.084688 -0.16579 -4.8534e-8 5.4559 0.86946)\\'><stop stop-color=\\'rgba(231,223,231,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(231,223,231,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(1.10845e-12deg, rgb(126, 95, 158) 0%, rgba(126, 95, 158, 0) 18.837%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 6.7813 6.7188\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.0019634 0.082463 -0.36714 0.0087413 4.789 0.46852)\\'><stop stop-color=\\'rgba(237,226,235,1)\\' offset=\\'0.22877\\'/><stop stop-color=\\'rgba(200,188,203,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(138, 123, 136) 4.9373%, rgba(138, 123, 136, 0) 19.487%), linear-gradient(270deg, rgb(205, 194, 209) 0%, rgb(148, 124, 141) 100%)" }} />
        <div className="absolute inset-[6.23%_23.27%_28.22%_22.68%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2969 20.9763">
            <g id="Union">
              <path d={svgPaths.pc351b80} fill="url(#paint0_radial_1_7894)" />
              <path d={svgPaths.pc351b80} fill="url(#paint1_radial_1_7894)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(12.298 6.13258) rotate(138.066) scale(9.91369 8.17473)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7894" r="1">
                <stop offset="0.286168" stopColor="#FFEC87" />
                <stop offset="1" stopColor="#FFCD4B" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(13.2355 11.4451) rotate(-147.604) scale(14.5819 14.0258)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7894" r="1">
                <stop offset="0.622387" stopColor="#FFB239" stopOpacity="0" />
                <stop offset="1" stopColor="#FFB239" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[11.33%_35.03%_67.87%_44.17%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.65625 6.65625">
            <circle cx="3.32812" cy="3.32812" fill="url(#paint0_linear_1_8003)" id="Ellipse 238" r="3.32812" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_8003" x1="2.16419" x2="5.5857" y1="4.40241" y2="1.7363">
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.594121" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[31.35%_37.96%_28.23%_37.14%]" data-name="Intersect">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.96875 12.9351">
            <path d={svgPaths.pf198d80} fill="var(--fill-0, #FFAD55)" id="Intersect" />
          </svg>
        </div>
        <div className="absolute inset-[32.5%_39.11%_28.94%_39.11%]" data-name="Union">
          <div className="absolute inset-[-1.01%_-1.79%_0_-1.79%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.21875 12.4643">
              <path d={svgPaths.p27d28e00} id="Union" stroke="url(#paint0_linear_1_7906)" strokeWidth="0.25" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7906" x1="7.32901" x2="3.32364" y1="0.723078" y2="10.2653">
                  <stop stopColor="#FFBF5C" />
                  <stop offset="1" stopColor="#FFBF5C" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[81.8%_37.27%_10.78%_36.51%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(2.03271cqw,45.8045cqh)] rotate-[-8.9deg] w-[hypot(97.9673cqw,-54.1955cqh)]">
            <div className="rounded-[1.25px] size-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 8.3203 1.1018\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.00046966 0.083749 -0.4957 -0.0027799 6.8962 0.37617)\\'><stop stop-color=\\'rgba(252,240,252,1)\\' offset=\\'0.1267\\'/><stop stop-color=\\'rgba(229,201,227,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(86.9511deg, rgb(149, 131, 135) 0.86106%, rgba(149, 131, 135, 0) 32.498%), linear-gradient(-0.18535deg, rgb(138, 104, 169) 2.9867%, rgba(222, 194, 227, 0) 73.082%), linear-gradient(176.296deg, rgb(177, 150, 154) 16.584%, rgb(218, 210, 226) 90.919%)" }} />
          </div>
        </div>
        <div className="absolute flex inset-[74.37%_37.27%_18.2%_36.51%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(2.03271cqw,45.8045cqh)] rotate-[-8.9deg] w-[hypot(97.9673cqw,-54.1955cqh)]">
            <div className="rounded-[1.25px] size-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 8.3203 1.1018\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.00046966 0.083749 -0.4957 -0.0027799 6.8962 0.37617)\\'><stop stop-color=\\'rgba(252,240,252,1)\\' offset=\\'0.1267\\'/><stop stop-color=\\'rgba(229,201,227,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(86.9511deg, rgb(149, 131, 135) 0.86106%, rgba(149, 131, 135, 0) 32.498%), linear-gradient(-0.18535deg, rgb(138, 104, 169) 2.9867%, rgba(222, 194, 227, 0) 73.082%), linear-gradient(176.296deg, rgb(177, 150, 154) 16.584%, rgb(218, 210, 226) 90.919%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame74 />
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[16px] tracking-[0.2px] whitespace-nowrap">Tagihan</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame73 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/x">
        <div className="absolute inset-[20%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p5637080} fill="var(--fill-0, #2A353E)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a4a4a4] text-[14px] whitespace-nowrap">Rp</p>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] tracking-[0.2px] whitespace-nowrap">600.000</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Label8 />
      <div className="h-[22.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 22.5">
            <path d="M0.5 0V22.5" id="Vector 4" stroke="var(--stroke-0, #E8B8B9)" />
          </svg>
        </div>
      </div>
      <Label9 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a4a4a4] text-[14px] whitespace-nowrap">30%</p>
    </div>
  );
}

function Placeholdedr2() {
  return (
    <div className="bg-[#fbf0f0] h-[46.5px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholdedr">
      <div aria-hidden="true" className="absolute border border-[#e9b9b9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start justify-between p-[12px] relative size-full">
        <Frame75 />
        <Label10 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Placeholdedr2 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="h-[14px] relative shrink-0 w-full">
      <div className="absolute bg-[#dbeef6] h-[7px] left-0 right-0 rounded-[999px] top-[3.5px]" />
      <div className="absolute left-[127px] size-[14px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #4CAAD6)" id="Ellipse 43" r="7" />
        </svg>
      </div>
    </div>
  );
}

function InputField9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <Frame72 />
        <Frame13 />
        <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#d06c6c] text-[12px] w-full">Melebihi budget bulan ini</p>
        <Frame76 />
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-[#fff7e4] overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="Light bulb">
        <div className="absolute inset-[82.28%_44.87%_6.64%_44.05%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.54688 3.54688">
            <circle cx="1.77344" cy="1.77344" fill="url(#paint0_radial_1_7912)" id="Ellipse 239" r="1.77344" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.24219 2.78125) rotate(96.6544) scale(0.943859 2.18614)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7912" r="1">
                <stop offset="0.267752" stopColor="#AC90C6" />
                <stop offset="1" stopColor="#8E6AAA" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[69.29%_39.7%_9.72%_39.11%] rounded-[1.25px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 6.7813 6.7188\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.39644 -0.055385 0.0034408 0.024629 2.6549 5.8135)\\'><stop stop-color=\\'rgba(126,102,147,1)\\' offset=\\'0.9467\\'/><stop stop-color=\\'rgba(126,102,147,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 6.7813 6.7188\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.42119 -0.053042 0.0032952 0.026167 2.5693 3.3594)\\'><stop stop-color=\\'rgba(126,102,147,1)\\' offset=\\'0.9467\\'/><stop stop-color=\\'rgba(126,102,147,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 6.7813 6.7188\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-2.3502e-8 0.084688 -0.16579 -4.8534e-8 5.4559 0.86946)\\'><stop stop-color=\\'rgba(231,223,231,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(231,223,231,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(1.10845e-12deg, rgb(126, 95, 158) 0%, rgba(126, 95, 158, 0) 18.837%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 6.7813 6.7188\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.0019634 0.082463 -0.36714 0.0087413 4.789 0.46852)\\'><stop stop-color=\\'rgba(237,226,235,1)\\' offset=\\'0.22877\\'/><stop stop-color=\\'rgba(200,188,203,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(138, 123, 136) 4.9373%, rgba(138, 123, 136, 0) 19.487%), linear-gradient(270deg, rgb(205, 194, 209) 0%, rgb(148, 124, 141) 100%)" }} />
        <div className="absolute inset-[6.23%_23.27%_28.22%_22.68%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2969 20.9763">
            <g id="Union">
              <path d={svgPaths.pc351b80} fill="url(#paint0_radial_1_7894)" />
              <path d={svgPaths.pc351b80} fill="url(#paint1_radial_1_7894)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(12.298 6.13258) rotate(138.066) scale(9.91369 8.17473)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7894" r="1">
                <stop offset="0.286168" stopColor="#FFEC87" />
                <stop offset="1" stopColor="#FFCD4B" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(13.2355 11.4451) rotate(-147.604) scale(14.5819 14.0258)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7894" r="1">
                <stop offset="0.622387" stopColor="#FFB239" stopOpacity="0" />
                <stop offset="1" stopColor="#FFB239" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[11.33%_35.03%_67.87%_44.17%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.65625 6.65625">
            <circle cx="3.32812" cy="3.32812" fill="url(#paint0_linear_1_8003)" id="Ellipse 238" r="3.32812" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_8003" x1="2.16419" x2="5.5857" y1="4.40241" y2="1.7363">
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.594121" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[31.35%_37.96%_28.23%_37.14%]" data-name="Intersect">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.96875 12.9351">
            <path d={svgPaths.pf198d80} fill="var(--fill-0, #FFAD55)" id="Intersect" />
          </svg>
        </div>
        <div className="absolute inset-[32.5%_39.11%_28.94%_39.11%]" data-name="Union">
          <div className="absolute inset-[-1.01%_-1.79%_0_-1.79%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.21875 12.4643">
              <path d={svgPaths.p27d28e00} id="Union" stroke="url(#paint0_linear_1_7906)" strokeWidth="0.25" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7906" x1="7.32901" x2="3.32364" y1="0.723078" y2="10.2653">
                  <stop stopColor="#FFBF5C" />
                  <stop offset="1" stopColor="#FFBF5C" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[81.8%_37.27%_10.78%_36.51%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(2.03271cqw,45.8045cqh)] rotate-[-8.9deg] w-[hypot(97.9673cqw,-54.1955cqh)]">
            <div className="rounded-[1.25px] size-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 8.3203 1.1018\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.00046966 0.083749 -0.4957 -0.0027799 6.8962 0.37617)\\'><stop stop-color=\\'rgba(252,240,252,1)\\' offset=\\'0.1267\\'/><stop stop-color=\\'rgba(229,201,227,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(86.9511deg, rgb(149, 131, 135) 0.86106%, rgba(149, 131, 135, 0) 32.498%), linear-gradient(-0.18535deg, rgb(138, 104, 169) 2.9867%, rgba(222, 194, 227, 0) 73.082%), linear-gradient(176.296deg, rgb(177, 150, 154) 16.584%, rgb(218, 210, 226) 90.919%)" }} />
          </div>
        </div>
        <div className="absolute flex inset-[74.37%_37.27%_18.2%_36.51%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(2.03271cqw,45.8045cqh)] rotate-[-8.9deg] w-[hypot(97.9673cqw,-54.1955cqh)]">
            <div className="rounded-[1.25px] size-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 8.3203 1.1018\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.00046966 0.083749 -0.4957 -0.0027799 6.8962 0.37617)\\'><stop stop-color=\\'rgba(252,240,252,1)\\' offset=\\'0.1267\\'/><stop stop-color=\\'rgba(229,201,227,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(86.9511deg, rgb(149, 131, 135) 0.86106%, rgba(149, 131, 135, 0) 32.498%), linear-gradient(-0.18535deg, rgb(138, 104, 169) 2.9867%, rgba(222, 194, 227, 0) 73.082%), linear-gradient(176.296deg, rgb(177, 150, 154) 16.584%, rgb(218, 210, 226) 90.919%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame79 />
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[16px] tracking-[0.2px] whitespace-nowrap">Tabungan</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame78 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/x">
        <div className="absolute inset-[20%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p5637080} fill="var(--fill-0, #2A353E)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a4a4a4] text-[14px] whitespace-nowrap">Rp</p>
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] tracking-[0.2px] whitespace-nowrap">600.000</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Label11 />
      <div className="h-[22.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 22.5">
            <path d="M0.5 0V22.5" id="Vector 4" stroke="var(--stroke-0, #ECF1F6)" />
          </svg>
        </div>
      </div>
      <Label12 />
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a4a4a4] text-[14px] whitespace-nowrap">30%</p>
    </div>
  );
}

function Placeholdedr3() {
  return (
    <div className="bg-[#fdfdfd] h-[46.5px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholdedr">
      <div aria-hidden="true" className="absolute border border-[#ecf1f6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start justify-between p-[12px] relative size-full">
        <Frame80 />
        <Label13 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Placeholdedr3 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="h-[14px] relative shrink-0 w-full">
      <div className="absolute bg-[#dbeef6] h-[7px] left-0 right-0 rounded-[999px] top-[3.5px]" />
      <div className="absolute left-[185px] size-[14px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #4CAAD6)" id="Ellipse 43" r="7" />
        </svg>
      </div>
    </div>
  );
}

function InputField10() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <Frame77 />
        <Frame14 />
        <Frame81 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[343px]">
      <InputField7 />
      <InputField8 />
      <InputField9 />
      <InputField10 />
      <div className="bg-[#eaeefa] relative rounded-[12px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/plus">
              <div className="absolute inset-[15%]" data-name="Icon">
                <div className="absolute inset-[-8.93%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2 13.2">
                    <path clipRule="evenodd" d={svgPaths.p3780d080} fill="var(--fill-0, #2A353E)" fillRule="evenodd" id="Icon" stroke="var(--stroke-1, #3A5ED7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#3a5ed7] text-[14px] tracking-[0.2px] whitespace-nowrap">Tambah kategori</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-0 top-[105px] w-[375px]">
      <BudgetSummary />
      <Frame19 />
    </div>
  );
}

function Label14() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex gap-[4px] items-start p-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#3a5ed7] text-[12px] text-center">Anda bisa ubah kapan saja kategori dan budget</p>
      </div>
    </div>
  );
}

function EditBudgetInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Edit Budget Info">
      <Label14 />
      <div className="bg-[#3a5ed7] relative rounded-[16px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[20px] text-white tracking-[0.2px] whitespace-nowrap">Simpan Budget</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col gap-[32px] items-center justify-end left-1/2 pb-[8px] pt-[12px] px-[12px] rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.1)] w-[375px]" data-name="row">
      <EditBudgetInfo />
      <div className="bg-[rgba(11,11,11,0.6)] h-[4px] rounded-[20px] shrink-0 w-[129px]" data-name="Scroll Indicator" />
    </div>
  );
}

function Screen2() {
  return (
    <div className="absolute bg-[#f1f2f4] h-[762px] left-[959px] overflow-clip top-[138px] w-[375px]" data-name="Screen">
      <StatusBar2 />
      <div className="absolute bg-[#fdfdfd] content-stretch flex gap-[16px] items-center justify-center left-0 px-[20px] py-[18px] top-[44px] w-[375px]" data-name="Navigation Bar">
        <Left2 />
        <p className="flex-[1_0_0] font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] min-w-px relative text-[#121212] text-[20px] text-center tracking-[0.2px]">Kategori Budget</p>
        <Right2 />
      </div>
      <Frame60 />
      <Row />
    </div>
  );
}

function Row1() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col gap-[32px] items-center justify-end left-1/2 pb-[8px] pt-[12px] px-[12px] rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.1)] w-[375px]" data-name="row">
      <div className="bg-[#ced4d9] relative rounded-[16px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#8c9aa6] text-[20px] tracking-[0.2px] whitespace-nowrap">Selanjutnya</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(11,11,11,0.6)] h-[4px] rounded-[20px] shrink-0 w-[129px]" data-name="Scroll Indicator" />
    </div>
  );
}

function Symbols3() {
  return (
    <div className="-translate-y-1/2 absolute h-[13px] right-[13.5px] top-[calc(50%+1.1px)] w-[68px]" data-name="Symbols">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 13">
        <g id="Symbols">
          <g id="Battery">
            <path d={svgPaths.p36aff970} fill="var(--fill-0, #1F2C37)" id="Rectangle" opacity="0.4" />
            <rect fill="var(--fill-0, #1F2C37)" height="7.66667" id="Rectangle_2" rx="1.6" width="18" x="44.5" y="2.47666" />
          </g>
          <path d={svgPaths.p38d75f80} fill="var(--fill-0, #1F2C37)" id="Combined Shape" />
          <path clipRule="evenodd" d={svgPaths.p1802da00} fill="var(--fill-0, #1F2C37)" fillRule="evenodd" id="Wi-Fi" />
        </g>
      </svg>
    </div>
  );
}

function BarsStatusTime3() {
  return (
    <div className="-translate-y-1/2 absolute h-[22px] left-0 top-[calc(50%+1px)] w-[180px]" data-name="Bars/Status/_/Time">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[29.5px] text-[#1f2c37] text-[15px] top-[calc(50%-9px)] tracking-[-0.165px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        19:27
      </p>
    </div>
  );
}

function StatusBar3() {
  return (
    <div className="absolute bg-[#fdfdfd] h-[44px] left-0 right-0 top-0" data-name="status_bar">
      <Symbols3 />
      <BarsStatusTime3 />
    </div>
  );
}

function Left3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="left">
      <div className="absolute bottom-0 left-0 overflow-clip top-0 w-[24px]" data-name="left button">
        <div className="absolute inset-[16.67%]" data-name="Intersect">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p318c4e00} fill="var(--fill-0, #121212)" id="Intersect" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Right3() {
  return <div className="shrink-0 size-[24px]" data-name="right" />;
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#1f2c37] w-full">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[16px] tracking-[0.2px] w-full">Tulis total budget bulan ini</p>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] w-full">Total budget bisa berupa uang bulanan, total penghasilan, atau lainnya</p>
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a4a4a4] text-[14px] whitespace-nowrap">Rp</p>
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#a4a4a4] text-[14px] tracking-[0.2px] whitespace-nowrap">0</p>
    </div>
  );
}

function Placeholdedr4() {
  return (
    <div className="bg-[#fdfdfd] flex-[1_0_0] h-full min-w-px relative rounded-[8px]" data-name="Placeholdedr">
      <div aria-hidden="true" className="absolute border border-[#ecf1f6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Label15 />
          <div className="h-[22.5px] relative shrink-0 w-0">
            <div className="absolute inset-[0_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 22.5">
                <path d="M0.5 0V22.5" id="Vector 4" stroke="var(--stroke-0, #ECF1F6)" />
              </svg>
            </div>
          </div>
          <Label16 />
        </div>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[46.5px] items-center relative shrink-0 w-full" data-name="body">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Placeholdedr4 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Body2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] tracking-[0.2px] whitespace-nowrap">1.000.000</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] tracking-[0.2px] whitespace-nowrap">1.000.000</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] tracking-[0.2px] whitespace-nowrap">1.000.000</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] tracking-[0.2px] whitespace-nowrap">1.000.000</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Label17() {
  return (
    <div className="bg-[rgba(219,238,246,0.5)] relative rounded-[8px] shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex gap-[4px] items-start p-[8px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/check-circle">
          <div className="absolute inset-[10%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path clipRule="evenodd" d={svgPaths.p1171bdf0} fill="var(--fill-0, #3A5ED7)" fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#1f2c37] text-[12px] whitespace-pre-wrap">{`Anda bisa ubah kapan saja untuk menyesuaikan budget  atau target pengeluaran`}</p>
      </div>
    </div>
  );
}

function InputField11() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-1/2 p-[16px] top-[156px] w-[375px]" data-name="Input Field">
      <Frame82 />
      <Frame15 />
      <Frame18 />
      <Label17 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="1">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#8c9aa6] text-[12px] text-center tracking-[0.2px] whitespace-nowrap">Langkah 1 dari 2</p>
    </div>
  );
}

function BudgetSummary1() {
  return (
    <div className="absolute bg-[#fdfdfd] content-stretch flex flex-col items-center left-0 px-[16px] py-[12px] top-[105px] w-[375px]" data-name="Budget Summary">
      <Component1 />
    </div>
  );
}

function Screen3() {
  return (
    <div className="absolute bg-[#f0f2f4] h-[762px] left-[475px] overflow-clip top-[138px] w-[375px]" data-name="Screen">
      <Row1 />
      <StatusBar3 />
      <div className="absolute bg-[#fdfdfd] content-stretch flex gap-[16px] items-center justify-center left-0 px-[20px] py-[18px] top-[44px] w-[375px]" data-name="Navigation Bar">
        <Left3 />
        <p className="flex-[1_0_0] font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] min-w-px relative text-[#121212] text-[20px] text-center tracking-[0.2px]">Atur Budgeting</p>
        <Right3 />
      </div>
      <InputField11 />
      <BudgetSummary1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[46px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Frame 1686558458">
          <rect fill="var(--fill-0, #DBEEF6)" height="46" id="Rectangle 22455" rx="8" width="46" />
          <path d={svgPaths.p2a0dc8c0} fill="var(--fill-0, #88C7E4)" id="Vector" />
          <path d={svgPaths.p34a1e32} fill="var(--fill-0, #3A5ED7)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[14px] w-[262px]">
      <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#2a353e] tracking-[0.2px] w-full">Tentukan Target Budget Bulanan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#6d7984] tracking-[0.07px] w-full">Atur batas pengeluaran sesuai kebutuhan agar tetap terkontrol.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame6 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[46px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Frame 1686558459">
          <rect fill="var(--fill-0, #DBEEF6)" height="46" id="Rectangle 22455" rx="8" width="46" />
          <g id="Group">
            <path d={svgPaths.p34598e00} fill="var(--fill-0, #6BB9DE)" id="Vector" />
            <path d={svgPaths.p1117bc80} fill="var(--fill-0, #DBEEF6)" id="Vector_2" />
            <path d={svgPaths.p398bd300} fill="var(--fill-0, #DBEEF6)" id="Vector_3" />
            <path d={svgPaths.p2118aa00} fill="var(--fill-0, #DBEEF6)" id="Vector_4" />
            <path d={svgPaths.p178941c0} fill="var(--fill-0, #DBEEF6)" id="Vector_5" stroke="var(--stroke-0, #4CAAD6)" strokeWidth="0.7" />
            <path d={svgPaths.p2784c080} fill="var(--fill-0, #DBEEF6)" id="Vector_6" stroke="var(--stroke-0, #4CAAD6)" strokeWidth="0.7" />
          </g>
          <path d={svgPaths.p12171080} fill="var(--fill-0, #3A5ED7)" id="Vector_7" stroke="var(--stroke-0, #DBEEF6)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative text-[14px]">
      <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#2a353e] tracking-[0.2px] w-full">{`Pantau & Evaluasi Secara Otomatis`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#6d7984] tracking-[0.07px] w-full">Lihat progres penggunaan budget agar tidak melebihi batas.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame9 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[32px] items-start left-0 overflow-clip pb-[140px] pt-[32px] px-[32px] rounded-tl-[24px] rounded-tr-[24px] w-[375px]">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Symbols4() {
  return (
    <div className="-translate-y-1/2 absolute h-[13px] right-[13.5px] top-[calc(50%+1.1px)] w-[68px]" data-name="Symbols">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 13">
        <g id="Symbols">
          <g id="Battery">
            <path d={svgPaths.p36aff970} fill="var(--fill-0, white)" id="Rectangle" opacity="0.4" />
            <rect fill="var(--fill-0, white)" height="7.66667" id="Rectangle_2" rx="1.6" width="18" x="44.5" y="2.47666" />
          </g>
          <path d={svgPaths.p38d75f80} fill="var(--fill-0, white)" id="Combined Shape" />
          <path clipRule="evenodd" d={svgPaths.p1802da00} fill="var(--fill-0, white)" fillRule="evenodd" id="Wi-Fi" />
        </g>
      </svg>
    </div>
  );
}

function BarsStatusTime4() {
  return (
    <div className="-translate-y-1/2 absolute h-[22px] left-0 top-[calc(50%+1px)] w-[180px]" data-name="Bars/Status/_/Time">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[29.5px] text-[15px] text-white top-[calc(50%-9px)] tracking-[-0.165px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        19:27
      </p>
    </div>
  );
}

function StatusBar4() {
  return (
    <div className="absolute h-[44px] left-0 right-0 top-0" data-name="status_bar">
      <Symbols4 />
      <BarsStatusTime4 />
    </div>
  );
}

function Left4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="left">
      <div className="absolute bottom-0 left-0 overflow-clip top-0 w-[24px]" data-name="left button">
        <div className="absolute inset-[16.67%]" data-name="Intersect">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p318c4e00} fill="var(--fill-0, white)" id="Intersect" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col gap-[32px] items-center justify-end left-1/2 pb-[8px] pt-[12px] px-[12px] rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.1)] w-[375px]" data-name="row">
      <div className="bg-[#3a5ed7] relative rounded-[16px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[20px] text-white tracking-[0.2px] whitespace-nowrap">Mulai Budgeting</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(11,11,11,0.6)] h-[4px] rounded-[20px] shrink-0 w-[129px]" data-name="Scroll Indicator" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[16px] top-[379px] w-[343px]">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white tracking-[0.2px] w-full">
        <p className="leading-[1.25]">Atur pengeluaran lebih terkontrol bulan ini</p>
      </div>
    </div>
  );
}

function OwlHappySuccess() {
  return (
    <div className="absolute inset-[1.93%_2.11%_2.11%_1.93%]" data-name="Owl - happy - success 01">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150.652 150.652">
        <g id="Owl - happy - success 01">
          <g id="Vector" />
          <path d={svgPaths.p14ffbc00} fill="var(--fill-0, #4CAAD6)" id="Vector_2" />
          <path d={svgPaths.p5481700} fill="var(--fill-0, #DCF7FF)" id="Vector_3" />
          <path d={svgPaths.p12c34780} fill="var(--fill-0, #3A92C1)" id="Vector_4" />
          <path d={svgPaths.p16f17100} fill="var(--fill-0, #3A92C1)" id="Vector_5" />
          <path d={svgPaths.p2cceb700} fill="var(--fill-0, #368CBD)" id="Vector_6" />
          <path d={svgPaths.p17ed6ca0} fill="var(--fill-0, #B6DBE8)" id="Vector_7" />
          <path d={svgPaths.p3268a580} fill="var(--fill-0, #F0A319)" id="Vector_8" />
          <path d={svgPaths.p2867f6c0} fill="var(--fill-0, #F0A319)" id="Vector_9" />
          <path d={svgPaths.p54ed100} fill="var(--fill-0, #FFC828)" id="Vector_10" />
          <path d={svgPaths.p1566b500} fill="var(--fill-0, #FFC828)" id="Vector_11" />
          <path d={svgPaths.p173cd080} fill="var(--fill-0, #4CAAD6)" id="Vector_12" />
          <path d={svgPaths.p1dbb8800} fill="var(--fill-0, #4CAAD6)" id="Vector_13" />
          <path d={svgPaths.p69d2680} fill="var(--fill-0, #4CAAD6)" id="Vector_14" />
          <path d={svgPaths.p1cae93c0} fill="var(--fill-0, #4CAAD6)" id="Vector_15" />
          <path d={svgPaths.p11b66080} fill="var(--fill-0, #3A92C1)" id="Vector_16" />
          <path d={svgPaths.pb82c900} fill="var(--fill-0, #3A92C1)" id="Vector_17" />
          <path d={svgPaths.p10716e00} fill="var(--fill-0, #FFC828)" id="Vector_18" />
          <path d={svgPaths.p8cb1f00} fill="var(--fill-0, #4CAAD6)" id="Vector_19" />
          <path d={svgPaths.p1eb84a00} fill="var(--fill-0, #4CAAD6)" id="Vector_20" />
          <path d={svgPaths.p3199b3c0} fill="var(--fill-0, #3A93C2)" id="Vector_21" />
          <path d={svgPaths.p2b00cb80} fill="var(--fill-0, #3A93C2)" id="Vector_22" />
          <path d={svgPaths.p1b69ea00} fill="var(--fill-0, #4CAAD6)" id="Vector_23" />
          <path d={svgPaths.p185cb580} fill="var(--fill-0, #4CAAD6)" id="Vector_24" />
          <path d={svgPaths.p6147600} fill="var(--fill-0, #FEC929)" id="Vector_25" />
          <path d={svgPaths.p37360200} fill="var(--fill-0, #72D2FE)" id="Vector_26" />
          <path d={svgPaths.p11a3d480} fill="var(--fill-0, #3A92C2)" id="Vector_27" />
          <path d={svgPaths.p26a21400} fill="var(--fill-0, #3A92C2)" id="Vector_28" />
          <path d={svgPaths.p2f2954c0} fill="var(--fill-0, #FFC828)" id="Vector_29" />
          <path d={svgPaths.p20a25d80} fill="var(--fill-0, #FFC828)" id="Vector_30" />
          <path d={svgPaths.p8f29b00} fill="var(--fill-0, #FFC828)" id="Vector_31" />
          <path d={svgPaths.p268d2980} fill="var(--fill-0, #FFC828)" id="Vector_32" />
          <path d={svgPaths.p28a14880} fill="var(--fill-0, #FFC828)" id="Vector_33" />
          <path d={svgPaths.p3a7f3e80} fill="var(--fill-0, #FFC828)" id="Vector_34" />
          <path d={svgPaths.p309e7080} fill="var(--fill-0, #FFC828)" id="Vector_35" />
          <path d={svgPaths.p2d95500} fill="var(--fill-0, #3A92C2)" id="Vector_36" />
          <path d={svgPaths.p30930b00} fill="var(--fill-0, #3A92C2)" id="Vector_37" />
          <path d={svgPaths.p2d8c1780} fill="var(--fill-0, #72D2FE)" id="Vector_38" />
          <path d={svgPaths.p30a83e00} fill="var(--fill-0, #3A93C2)" id="Vector_39" />
          <path d={svgPaths.p1cf9b300} fill="var(--fill-0, #3A93C2)" id="Vector_40" />
          <path d={svgPaths.p3d62ff80} fill="var(--fill-0, #FFC828)" id="Vector_41" />
          <path d={svgPaths.p69ce300} fill="var(--fill-0, #FFC828)" id="Vector_42" />
          <path d={svgPaths.p230afc00} fill="var(--fill-0, #3685AA)" id="Vector_43" />
          <path d={svgPaths.p38d4d50} fill="var(--fill-0, #FFC828)" id="Vector_44" />
          <path d={svgPaths.pa85f500} fill="var(--fill-0, #4CAAD6)" id="Vector_45" />
          <path d={svgPaths.p12c902e0} fill="var(--fill-0, #4CAAD6)" id="Vector_46" />
          <path d={svgPaths.p20e1fa30} fill="var(--fill-0, #3685AA)" id="Vector_47" />
          <path d={svgPaths.p29274180} fill="var(--fill-0, #FFC828)" id="Vector_48" />
          <path d={svgPaths.p2b29300} fill="var(--fill-0, #368CBD)" id="Vector_49" />
          <path d={svgPaths.p324022c0} fill="var(--fill-0, #368CBD)" id="Vector_50" />
          <path d={svgPaths.p1ff52280} fill="var(--fill-0, #DD8B0D)" id="Vector_51" />
          <path d={svgPaths.p15e06400} fill="var(--fill-0, #3685AA)" id="Vector_52" />
          <path d={svgPaths.p29b5aa60} fill="var(--fill-0, #368CBD)" id="Vector_53" />
          <path d={svgPaths.p3fc7b1c0} fill="var(--fill-0, #368CBD)" id="Vector_54" />
          <path d={svgPaths.p9467100} fill="var(--fill-0, #368CBD)" id="Vector_55" />
          <path d={svgPaths.p3c54cd00} fill="var(--fill-0, #368CBD)" id="Vector_56" />
          <path d={svgPaths.p19ff5a00} fill="var(--fill-0, #DD8B0D)" id="Vector_57" />
          <path d={svgPaths.p13c2de00} fill="var(--fill-0, #3A92C1)" id="Vector_58" />
          <path d={svgPaths.p12590000} fill="var(--fill-0, #3A92C1)" id="Vector_59" />
          <path d={svgPaths.pea33640} fill="var(--fill-0, #F0A319)" id="Vector_60" />
          <path d={svgPaths.pb466a70} fill="var(--fill-0, #343636)" id="Vector_61" />
          <path d={svgPaths.p349b0080} fill="var(--fill-0, #272929)" id="Vector_62" />
          <path d={svgPaths.p140b5f80} fill="var(--fill-0, #3991C1)" id="Vector_63" />
          <path d={svgPaths.p27b19600} fill="var(--fill-0, #106993)" id="Vector_64" />
          <path d={svgPaths.p468cb80} fill="var(--fill-0, #FEC929)" id="Vector_65" />
          <path d={svgPaths.p240d39f0} fill="var(--fill-0, #343637)" id="Vector_66" />
          <path d={svgPaths.p27b81b00} fill="var(--fill-0, #3A92C1)" id="Vector_67" />
          <path d={svgPaths.p27267300} fill="var(--fill-0, #272929)" id="Vector_68" />
          <path d={svgPaths.p810be00} fill="var(--fill-0, #343637)" id="Vector_69" />
          <path d={svgPaths.p2d44abf0} fill="var(--fill-0, #272929)" id="Vector_70" />
          <path d={svgPaths.p3a270680} fill="var(--fill-0, #DD911D)" id="Vector_71" />
          <path d={svgPaths.p28c579d0} fill="var(--fill-0, #3A92C2)" id="Vector_72" />
          <path d={svgPaths.pab08200} fill="var(--fill-0, #3A92C2)" id="Vector_73" />
          <path d={svgPaths.p17de6a00} fill="var(--fill-0, #3A92C2)" id="Vector_74" />
          <path d={svgPaths.p30473180} fill="var(--fill-0, #3A92C2)" id="Vector_75" />
          <path d={svgPaths.p139c6d80} fill="var(--fill-0, #3A92C2)" id="Vector_76" />
          <path d={svgPaths.pbb0f400} fill="var(--fill-0, #3A92C2)" id="Vector_77" />
          <path d={svgPaths.p23ac1780} fill="var(--fill-0, #3A92C2)" id="Vector_78" />
          <path d={svgPaths.p1d2c2180} fill="var(--fill-0, #3A92C2)" id="Vector_79" />
          <path d={svgPaths.p3ae39740} fill="var(--fill-0, #106993)" id="Vector_80" />
          <path d={svgPaths.p34361380} fill="var(--fill-0, #106993)" id="Vector_81" />
          <path d={svgPaths.p31737b80} fill="var(--fill-0, #3A92C2)" id="Vector_82" />
          <path d={svgPaths.p1765bff0} fill="var(--fill-0, #3A92C2)" id="Vector_83" />
          <path d={svgPaths.pbec5100} fill="var(--fill-0, #3A92C1)" id="Vector_84" />
          <path d={svgPaths.p102c6e80} fill="var(--fill-0, #3A92C1)" id="Vector_85" />
          <path d={svgPaths.p2d6ab340} fill="var(--fill-0, #3A93C2)" id="Vector_86" />
          <path d={svgPaths.p2248da00} fill="var(--fill-0, #3A93C2)" id="Vector_87" />
          <path d={svgPaths.p1ced1200} fill="var(--fill-0, #3991C1)" id="Vector_88" />
          <path d={svgPaths.pcd12e00} fill="var(--fill-0, #3991C1)" id="Vector_89" />
          <path d={svgPaths.p36b2eac0} fill="var(--fill-0, #3A92C1)" id="Vector_90" />
          <path d={svgPaths.p22a30300} fill="var(--fill-0, #3A92C1)" id="Vector_91" />
          <path d={svgPaths.p26060800} fill="var(--fill-0, #3A93C2)" id="Vector_92" />
          <path d={svgPaths.pf2be180} fill="var(--fill-0, #3A93C2)" id="Vector_93" />
          <path d={svgPaths.pd2fb900} fill="var(--fill-0, #106993)" id="Vector_94" />
          <path d={svgPaths.p31511400} fill="var(--fill-0, #106993)" id="Vector_95" />
          <path d={svgPaths.p2e07f800} fill="var(--fill-0, #DD911D)" id="Vector_96" />
          <path d={svgPaths.p544e00} fill="var(--fill-0, #DD911D)" id="Vector_97" />
          <path d={svgPaths.p874a300} fill="var(--fill-0, #3A93C2)" id="Vector_98" />
          <path d={svgPaths.p2a3d5480} fill="var(--fill-0, #3A93C2)" id="Vector_99" />
          <path d={svgPaths.p1d16c100} fill="var(--fill-0, #3A93C2)" id="Vector_100" />
          <path d={svgPaths.p2dfc7000} fill="var(--fill-0, #3A93C2)" id="Vector_101" />
          <path d={svgPaths.p2bb06080} fill="var(--fill-0, #353636)" id="Vector_102" />
          <path d={svgPaths.p2d29ca80} fill="var(--fill-0, #B5DBE8)" id="Vector_103" />
          <path d={svgPaths.pb69dd80} fill="var(--fill-0, #1B1C1C)" id="Vector_104" />
          <path d={svgPaths.p75a5660} fill="var(--fill-0, #B6DAE7)" id="Vector_105" />
          <path d={svgPaths.p3566fc00} fill="var(--fill-0, #B6DBE8)" id="Vector_106" />
          <path d={svgPaths.p1c602fb0} fill="var(--fill-0, #B6DBE8)" id="Vector_107" />
          <path d={svgPaths.p2957fd80} fill="var(--fill-0, #B6DBE8)" id="Vector_108" />
          <path d={svgPaths.p3507ec00} fill="var(--fill-0, #106993)" id="Vector_109" />
          <path d={svgPaths.p1094d200} fill="var(--fill-0, #DAF5FD)" id="Vector_110" />
          <path d={svgPaths.p3ce5f280} fill="var(--fill-0, #4CAAD6)" id="Vector_111" />
          <path d={svgPaths.p39c85800} fill="var(--fill-0, #4CAAD6)" id="Vector_112" />
          <path d={svgPaths.p1c273900} fill="var(--fill-0, #F0A319)" id="Vector_113" />
          <path d={svgPaths.p3dfee780} fill="var(--fill-0, #F0A319)" id="Vector_114" />
          <path d={svgPaths.pfa96c00} fill="var(--fill-0, #F0A319)" id="Vector_115" />
          <path d={svgPaths.p14c73400} fill="var(--fill-0, #F0A319)" id="Vector_116" />
          <path d={svgPaths.p28d40900} fill="var(--fill-0, #F0A319)" id="Vector_117" />
          <path d={svgPaths.p2cef0600} fill="var(--fill-0, #F0A319)" id="Vector_118" />
          <path d={svgPaths.p24cdf00} fill="var(--fill-0, #F0A319)" id="Vector_119" />
          <path d={svgPaths.p995fa00} fill="var(--fill-0, #368CBD)" id="Vector_120" />
          <path d={svgPaths.p8681800} fill="var(--fill-0, #368CBD)" id="Vector_121" />
          <path d={svgPaths.p30dfdc00} fill="var(--fill-0, #C4ECFE)" id="Vector_122" />
          <path d={svgPaths.p2087b500} fill="var(--fill-0, #C4ECFE)" id="Vector_123" />
          <path d={svgPaths.p19a2df80} fill="var(--fill-0, #475156)" id="Vector_124" />
          <path d={svgPaths.pda76f00} fill="var(--fill-0, #475156)" id="Vector_125" />
          <path d={svgPaths.p2e7b900} fill="var(--fill-0, #77B0CF)" id="Vector_126" />
          <path d={svgPaths.p3eaf4680} fill="var(--fill-0, #77B0CF)" id="Vector_127" />
          <path d={svgPaths.p3f7c8800} fill="var(--fill-0, #3A4449)" id="Vector_128" />
          <path d={svgPaths.p1dafeb00} fill="var(--fill-0, #3A4449)" id="Vector_129" />
          <path d={svgPaths.p1016aff0} fill="var(--fill-0, black)" id="Vector_130" />
          <path d={svgPaths.p37b0f500} fill="var(--fill-0, black)" id="Vector_131" />
          <path d={svgPaths.p3bbc8b00} fill="var(--fill-0, black)" id="Vector_132" />
          <path d={svgPaths.pd33600} fill="var(--fill-0, #106993)" id="Vector_133" />
          <path d={svgPaths.pae99200} fill="var(--fill-0, #106993)" id="Vector_134" />
          <path d={svgPaths.p3d639c40} fill="var(--fill-0, black)" id="Vector_135" />
          <path d={svgPaths.p2f587500} fill="var(--fill-0, #F0A319)" id="Vector_136" />
          <path d={svgPaths.p36314780} fill="var(--fill-0, #F0A319)" id="Vector_137" />
          <path d={svgPaths.p2d6b7a80} fill="var(--fill-0, #DB4C21)" id="Vector_138" />
          <path d={svgPaths.p1118aa00} fill="var(--fill-0, #B03713)" id="Vector_139" />
          <path d={svgPaths.p33d3c800} fill="var(--fill-0, #1B1C1C)" id="Vector_140" />
          <path d={svgPaths.p11841c00} fill="var(--fill-0, #F6F8F8)" id="Vector_141" />
          <path d={svgPaths.p17b68a00} fill="var(--fill-0, #F6F8F8)" id="Vector_142" />
          <path d={svgPaths.p2054700} fill="var(--fill-0, #DB4C21)" id="Vector_143" />
          <path d={svgPaths.p1ec28200} fill="var(--fill-0, #DB4C21)" id="Vector_144" />
          <path d={svgPaths.p3ab1c700} fill="var(--fill-0, #DB4C21)" id="Vector_145" />
          <path d={svgPaths.p1ec282f2} fill="var(--fill-0, #F6F8F8)" id="Vector_146" />
          <path d={svgPaths.p5117380} fill="var(--fill-0, #F6F8F8)" id="Vector_147" />
          <path d={svgPaths.p2685dac0} fill="var(--fill-0, #B03713)" id="Vector_148" />
          <path d={svgPaths.p10120100} fill="var(--fill-0, #DAF4FC)" id="Vector_149" />
          <path d={svgPaths.p2a1c7080} fill="var(--fill-0, #FE7952)" id="Vector_150" />
          <path d={svgPaths.p35906c00} fill="var(--fill-0, #FE7952)" id="Vector_151" />
        </g>
      </svg>
    </div>
  );
}

function Screen4() {
  return (
    <div className="absolute bg-gradient-to-b from-[#304eb3] h-[834px] left-0 overflow-clip to-[#4ca9d5] to-[65.271%] top-[79px] w-[375px]" data-name="Screen">
      <div className="absolute h-[430px] left-0 top-[116px] w-[375px]" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[133.26%] left-[-4.27%] max-w-none top-0 w-[148.67%]" src={imgImage6} />
        </div>
      </div>
      <Frame5 />
      <StatusBar4 />
      <div className="absolute content-stretch flex gap-[16px] items-center left-0 px-[16px] py-[18px] right-0 top-[44px]" data-name="Navigation Bar">
        <Left4 />
      </div>
      <Row2 />
      <Frame10 />
      <div className="-translate-x-1/2 absolute flex h-[203.428px] items-center justify-center left-[calc(50%+19.05px)] top-[100px] w-[189.107px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-176.14deg]">
          <div className="h-[191.967px] relative rounded-[19px] w-[176.573px]" data-name="image 15">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[19px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[19px] size-full" src={imgImage15} />
              <div className="absolute bg-[rgba(255,255,255,0.4)] inset-0 rounded-[19px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[224.725px] items-center justify-center left-[calc(50%-21.58px)] top-[89px] w-[208.779px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-3.88deg] skew-x-[-0.04deg]">
          <div className="h-[211.995px] relative shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)] w-[195.014px]" data-name="image 14">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
          </div>
        </div>
      </div>
      <div className="absolute left-[191px] overflow-clip size-[157px] top-[198px]" data-name="Illustrasi">
        <OwlHappySuccess />
      </div>
    </div>
  );
}

export default function Budgeting() {
  return (
    <div className="relative size-full" data-name="budgeting">
      <Screen />
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
    </div>
  );
}