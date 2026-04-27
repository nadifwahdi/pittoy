import svgPaths from "./svg-viib10yr35";

function Symbols() {
  return (
    <div className="-translate-y-1/2 absolute h-[13px] right-[13.5px] top-[calc(50%+1.1px)] w-[68px]" data-name="Symbols">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 13">
        <g id="Symbols">
          <g id="Battery">
            <path d={svgPaths.p36aff970} fill="var(--fill-0, #2A353E)" id="Rectangle" opacity="0.4" />
            <rect fill="var(--fill-0, #2A353E)" height="7.66667" id="Rectangle_2" rx="1.6" width="18" x="44.5" y="2.47666" />
          </g>
          <path d={svgPaths.p38d75f80} fill="var(--fill-0, #2A353E)" id="Combined Shape" />
          <path clipRule="evenodd" d={svgPaths.p1802da00} fill="var(--fill-0, #2A353E)" fillRule="evenodd" id="Wi-Fi" />
        </g>
      </svg>
    </div>
  );
}

function BarsStatusTime() {
  return (
    <div className="-translate-y-1/2 absolute h-[22px] left-0 top-[calc(50%+1px)] w-[180px]" data-name="Bars/Status/_/Time">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[29.5px] text-[#2a353e] text-[15px] top-[calc(50%-9px)] tracking-[-0.165px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
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
  return <div className="shrink-0 size-[24px]" data-name="right" />;
}

function Frame5() {
  return (
    <div className="bg-white h-full relative rounded-[999px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] text-center tracking-[0.2px] w-[40px]">Feb</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white h-full relative rounded-[999px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] text-center tracking-[0.2px] w-[40px]">Feb</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-full relative rounded-[999px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] text-center tracking-[0.2px] w-[40px]">Mar</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#eaeefa] h-full relative rounded-[999px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#3a5ed7] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#3a5ed7] text-[14px] text-center tracking-[0.2px] w-[40px]">Apr</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-end min-w-px overflow-clip relative self-stretch">
      <Frame5 />
      <Frame6 />
      <Frame2 />
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative rounded-[999px] self-stretch shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#3a5ed7] text-[16px] text-center tracking-[0.2px] w-[40px]">2026</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/chevron-down">
            <div className="absolute bottom-[35%] left-1/4 right-1/4 top-[35%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                <path clipRule="evenodd" d={svgPaths.p23688f70} fill="var(--fill-0, #3A5ED7)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame3 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#2a353e] text-[12px] tracking-[0.2px] whitespace-nowrap">Pengeluaran</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/arrow-circle-up">
        <div className="absolute inset-[10%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path clipRule="evenodd" d={svgPaths.p3898c6c0} fill="var(--fill-0, #EC221F)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#8c9aa6] text-[10px] w-full">Total</p>
      <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#ec221f] text-[16px] tracking-[0.2px] w-full">Rp300.000</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#f6f6f9] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Solid/trending-up">
            <div className="absolute bottom-1/4 left-[10%] right-[10%] top-1/4" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 8">
                <path clipRule="evenodd" d={svgPaths.p1580eaf0} fill="var(--fill-0, #2A353E)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
          <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#2a353e] text-[10px] whitespace-nowrap">10% dari bulan lalu</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame21 />
      <Frame24 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col gap-[2px] items-start p-[8px] relative size-full">
        <Frame30 />
        <Frame23 />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#2a353e] text-[12px] tracking-[0.2px] whitespace-nowrap">Pemasukan</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/arrow-circle-down">
        <div className="absolute inset-[10%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path clipRule="evenodd" d={svgPaths.p19dcb080} fill="var(--fill-0, #009951)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#8c9aa6] text-[10px] w-full">Total</p>
      <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#009951] text-[16px] tracking-[0.2px] w-full">Rp300.000</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#f6f6f9] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <div className="overflow-clip relative size-[16px]" data-name="Icon/Solid/trending-up">
                <div className="absolute bottom-1/4 left-[10%] right-[10%] top-1/4" data-name="Icon">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 8">
                    <path clipRule="evenodd" d={svgPaths.p1580eaf0} fill="var(--fill-0, #2A353E)" fillRule="evenodd" id="Icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#2a353e] text-[10px] whitespace-nowrap">10% dari bulan lalu</p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Frame32 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col gap-[2px] items-start p-[8px] relative size-full">
        <Frame29 />
        <Frame31 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame26 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] overflow-hidden relative shrink-0 text-[#242628] text-[12px] text-ellipsis tracking-[0.2px] whitespace-nowrap">Budget</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#f6f6f9] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#2a353e] text-[10px] whitespace-nowrap">{`60% dari budget `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <Frame7 />
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] overflow-hidden relative shrink-0 text-[#242628] text-[12px] text-ellipsis tracking-[0.2px] whitespace-nowrap">Goals</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon/Solid/check">
        <div className="absolute bottom-1/4 left-[15%] right-[15%] top-1/4" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4 6">
            <path clipRule="evenodd" d={svgPaths.pbf28900} fill="var(--fill-0, #009951)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#2a353e] text-[10px] whitespace-nowrap">Liburan ke Turki</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#f6f6f9] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[8px] py-[4px] relative size-full">
        <Frame39 />
        <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#009951] text-[10px] w-[min-content]">+Rp50.000/bln</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <Frame8 />
      <Frame38 />
    </div>
  );
}

function Infobar() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="infobar">
      <div aria-hidden="true" className="absolute border border-[#a5d5eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center p-[8px] relative size-full">
          <Frame33 />
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[343px]">
      <Frame28 />
      <Frame25 />
      <Infobar />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#eaeefa] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#3a5ed7] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#3a5ed7] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">Semua</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">Pengeluaran</p>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">(10)</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">Pemasukan</p>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">(10)</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame4 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Makan siang di kantor</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#eff7fb] content-stretch flex font-['Quicksand:Regular',sans-serif] font-normal gap-[4px] items-center justify-center leading-[1.4] px-[8px] py-[2px] relative rounded-[8px] shrink-0 text-[#4caad6] text-[10px] whitespace-nowrap">
      <p className="relative shrink-0">Budget</p>
      <p className="relative shrink-0">Makan</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <Frame9 />
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col font-['Quicksand:Regular',sans-serif] font-normal gap-[4px] items-end relative shrink-0 whitespace-nowrap">
      <p className="leading-[1.4] relative shrink-0 text-[#8c9aa6] text-[12px]">12.40</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#df0000] text-[14px] tracking-[0.2px]">
        <p className="leading-[1.25]">-Rp10.000</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative">
      <Frame42 />
      <Frame44 />
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Fork and knife with plate">
        <div className="absolute inset-[18.79%_13.44%_12.48%_17.82%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4967 16.4967">
            <g id="Vector">
              <path d={svgPaths.pa1f8180} fill="url(#paint0_linear_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint1_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint2_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint3_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint4_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint5_radial_1_9690)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9690" x1="7.30791" x2="8.24834" y1="5.75904e-09" y2="16.4967">
                <stop offset="0.115334" stopColor="#BCBBC4" />
                <stop offset="0.227922" stopColor="#8F8D9B" />
                <stop offset="0.689257" stopColor="#A8A0BC" />
                <stop offset="0.766146" stopColor="#BFA1E2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.24834 8.24835) rotate(90) scale(8.24835 8.24834)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9690" r="1">
                <stop offset="0.943572" stopColor="#DDCEF5" />
                <stop offset="1" stopColor="#DDCEF5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(5.11161 8.99084) rotate(-36.6264) scale(7.78416 7.78415)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9690" r="1">
                <stop offset="0.324467" stopColor="#EAE0FD" />
                <stop offset="0.633232" stopColor="#E7DDF9" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.78487 10.2153) rotate(144.796) scale(9.88429 12.3615)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_9690" r="1">
                <stop offset="0.856316" stopColor="white" stopOpacity="0" />
                <stop offset="0.890511" stopColor="white" stopOpacity="0.3" />
                <stop offset="0.956564" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(15.5742 5.87366) rotate(88.5024) scale(3.58716 1.81782)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9690" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(16.2539 5.40491) rotate(82.7368) scale(4.81993 2.44253)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9690" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[29.51%_24.16%_23.2%_28.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3505 11.3505">
            <g id="Vector">
              <path d={svgPaths.p1dcede00} fill="var(--fill-0, #D8CBF0)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint0_radial_1_9688)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint1_radial_1_9688)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint2_radial_1_9688)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.73489 6.75882) rotate(82.9973) scale(7.71335 8.83323)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_9688" r="1">
                <stop offset="0.596424" stopColor="#DACEF3" />
                <stop offset="0.754428" stopColor="#CCB9EB" />
                <stop offset="0.962131" stopColor="#BCA7DC" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.54015 1.68515) rotate(142.239) scale(13.9815 13.3447)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9688" r="1">
                <stop offset="0.476664" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.693657" stopColor="#E9E2FD" />
                <stop offset="0.816307" stopColor="#EBE8FB" />
                <stop offset="0.962131" stopColor="#EAE7F9" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.37926 2.27406) rotate(56.149) scale(13.4186 15.3668)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9688" r="1">
                <stop offset="0.536739" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.754428" stopColor="#B9B5CA" />
                <stop offset="0.962131" stopColor="#B2AEC4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_72.26%_6.25%_6.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.13456 18.7189">
            <g id="Vector">
              <path d={svgPaths.p1b925280} fill="url(#paint0_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint1_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="var(--fill-2, black)" fillOpacity="0.05" />
              <path d={svgPaths.p1b925280} fill="url(#paint2_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint3_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint4_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint5_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint6_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint7_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint8_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint9_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint10_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint11_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint12_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint13_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint14_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint15_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint16_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint17_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint18_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint19_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint20_radial_1_9684)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9684" x1="1.56613" x2="3.5499" y1="13.2474" y2="13.2474">
                <stop stopColor="#A29CAE" />
                <stop offset="0.2" stopColor="#AFA5C1" />
                <stop offset="0.789474" stopColor="#C9C1D9" />
                <stop offset="1" stopColor="#BFBACB" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_9684" x1="2.56728" x2="2.56728" y1="0" y2="18.7189">
                <stop offset="0.389773" stopColor="#BBB2CC" />
                <stop offset="0.432164" stopColor="#BEB5CE" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_9684" x1="2.56728" x2="2.56728" y1="0" y2="18.7189">
                <stop offset="0.001543" stopColor="#9F9BA9" />
                <stop offset="0.0266132" stopColor="#9F9BA9" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_9684" x1="0" x2="5.13463" y1="13.2474" y2="13.2474">
                <stop stopColor="#A29CAE" />
                <stop offset="0.0631842" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="0.934443" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="1" stopColor="#A29CAE" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.41996 3.05714) rotate(90) scale(0.595131)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9684" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.57657 1.16734) rotate(90) scale(2.76684 0.680582)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.57657 2.96317) rotate(90) scale(0.626453)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_9684" r="1">
                <stop stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.52902 1.26131) rotate(90) scale(2.67287 0.657468)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.35733 3.08034) rotate(90) scale(0.533645)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_9684" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.52902 2.95273) rotate(90) scale(0.636894)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_9684" r="1">
                <stop offset="0.477231" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.961266 0.343532) rotate(41.4237) scale(0.531546 0.649277)" gradientUnits="userSpaceOnUse" id="paint10_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.83691 0.214581) rotate(39.2072) scale(0.574893 0.702225)" gradientUnits="userSpaceOnUse" id="paint11_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.7946 0.202859) rotate(48.6914) scale(0.515001 0.629068)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.56732 -3.16563) rotate(90) scale(21.8846 5.42812)" gradientUnits="userSpaceOnUse" id="paint13_radial_1_9684" r="1">
                <stop offset="0.961641" stopColor="#9883B3" stopOpacity="0" />
                <stop offset="1" stopColor="#8F78AB" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.475641 6.5328) rotate(46.106) scale(1.87001 0.512939)" gradientUnits="userSpaceOnUse" id="paint14_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-0.263014 6.00818) rotate(60.6758) scale(2.09908 0.893437)" gradientUnits="userSpaceOnUse" id="paint15_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.9281 6.06412) rotate(103.241) scale(1.09405 0.465666)" gradientUnits="userSpaceOnUse" id="paint16_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.57311 6.57572) rotate(133.091) scale(1.77286 0.486292)" gradientUnits="userSpaceOnUse" id="paint17_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.81325 2.61862) rotate(90) scale(2.73551 0.281904)" gradientUnits="userSpaceOnUse" id="paint18_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.15" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.95361 1.68358) rotate(90) scale(1.60558 0.204914)" gradientUnits="userSpaceOnUse" id="paint19_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.17" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.00233 1.86688) rotate(90) scale(1.48261 0.18922)" gradientUnits="userSpaceOnUse" id="paint20_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.18" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_6.79%_6.27%_77.71%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.71904 18.7126">
            <g id="Union">
              <path d={svgPaths.p25e97d80} fill="url(#paint0_linear_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint1_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint2_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint3_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint4_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint5_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint6_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint7_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint8_radial_1_9696)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9696" x1="3.71904" x2="1.64433" y1="5.26529" y2="5.26529">
                <stop stopColor="#C4C2CB" />
                <stop offset="0.514744" stopColor="#B2A8C2" />
                <stop offset="1" stopColor="#948CA2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-6.10778e-08 9.36024) rotate(35.4843) scale(3.37657 1.12961)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9696" r="1">
                <stop stopColor="#9B89B3" />
                <stop offset="1" stopColor="#A28EBB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.51478 4.71366) rotate(0.616057) scale(1.72679 6.75922)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9696" r="1">
                <stop offset="0.682353" stopColor="#B1A8C0" />
                <stop offset="1" stopColor="#BBB4C8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.15504 9.03797) rotate(-157.62) scale(0.269545 0.994554)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.8" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.25337 9.48514) rotate(-71.9657) scale(0.331505 0.797557)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.5" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.96444 8.97932) rotate(-152.354) scale(0.347569 1.28244)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9696" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.01783 9.134) rotate(-65.4623) scale(0.348011 1.28407)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_9696" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.21094 1.0231) rotate(136.219) scale(0.779098 1.21816)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.7216 1.13031) rotate(135) scale(0.892739 1.39584)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_9696" r="1">
                <stop stopColor="#BAB3C8" />
                <stop offset="1" stopColor="#BAB3C8" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame41 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Goals Liburan</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#eaeefa] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#3a5ed7] text-[10px] whitespace-nowrap">Goal</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <Frame10 />
      <Frame47 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col font-['Quicksand:Regular',sans-serif] font-normal gap-[4px] items-end relative shrink-0 whitespace-nowrap">
      <p className="leading-[1.4] relative shrink-0 text-[#8c9aa6] text-[12px]">09.40</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#009951] text-[14px] tracking-[0.2px]">
        <p className="leading-[1.25]">+Rp50.000</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative">
      <Frame46 />
      <Frame48 />
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Fork and knife with plate">
        <div className="absolute inset-[18.79%_13.44%_12.48%_17.82%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4967 16.4967">
            <g id="Vector">
              <path d={svgPaths.pa1f8180} fill="url(#paint0_linear_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint1_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint2_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint3_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint4_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint5_radial_1_9690)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9690" x1="7.30791" x2="8.24834" y1="5.75904e-09" y2="16.4967">
                <stop offset="0.115334" stopColor="#BCBBC4" />
                <stop offset="0.227922" stopColor="#8F8D9B" />
                <stop offset="0.689257" stopColor="#A8A0BC" />
                <stop offset="0.766146" stopColor="#BFA1E2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.24834 8.24835) rotate(90) scale(8.24835 8.24834)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9690" r="1">
                <stop offset="0.943572" stopColor="#DDCEF5" />
                <stop offset="1" stopColor="#DDCEF5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(5.11161 8.99084) rotate(-36.6264) scale(7.78416 7.78415)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9690" r="1">
                <stop offset="0.324467" stopColor="#EAE0FD" />
                <stop offset="0.633232" stopColor="#E7DDF9" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.78487 10.2153) rotate(144.796) scale(9.88429 12.3615)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_9690" r="1">
                <stop offset="0.856316" stopColor="white" stopOpacity="0" />
                <stop offset="0.890511" stopColor="white" stopOpacity="0.3" />
                <stop offset="0.956564" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(15.5742 5.87366) rotate(88.5024) scale(3.58716 1.81782)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9690" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(16.2539 5.40491) rotate(82.7368) scale(4.81993 2.44253)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9690" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[29.51%_24.16%_23.2%_28.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3505 11.3505">
            <g id="Vector">
              <path d={svgPaths.p1dcede00} fill="var(--fill-0, #D8CBF0)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint0_radial_1_9688)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint1_radial_1_9688)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint2_radial_1_9688)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.73489 6.75882) rotate(82.9973) scale(7.71335 8.83323)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_9688" r="1">
                <stop offset="0.596424" stopColor="#DACEF3" />
                <stop offset="0.754428" stopColor="#CCB9EB" />
                <stop offset="0.962131" stopColor="#BCA7DC" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.54015 1.68515) rotate(142.239) scale(13.9815 13.3447)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9688" r="1">
                <stop offset="0.476664" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.693657" stopColor="#E9E2FD" />
                <stop offset="0.816307" stopColor="#EBE8FB" />
                <stop offset="0.962131" stopColor="#EAE7F9" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.37926 2.27406) rotate(56.149) scale(13.4186 15.3668)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9688" r="1">
                <stop offset="0.536739" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.754428" stopColor="#B9B5CA" />
                <stop offset="0.962131" stopColor="#B2AEC4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_72.26%_6.25%_6.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.13456 18.7189">
            <g id="Vector">
              <path d={svgPaths.p1b925280} fill="url(#paint0_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint1_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="var(--fill-2, black)" fillOpacity="0.05" />
              <path d={svgPaths.p1b925280} fill="url(#paint2_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint3_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint4_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint5_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint6_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint7_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint8_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint9_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint10_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint11_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint12_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint13_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint14_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint15_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint16_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint17_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint18_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint19_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint20_radial_1_9684)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9684" x1="1.56613" x2="3.5499" y1="13.2474" y2="13.2474">
                <stop stopColor="#A29CAE" />
                <stop offset="0.2" stopColor="#AFA5C1" />
                <stop offset="0.789474" stopColor="#C9C1D9" />
                <stop offset="1" stopColor="#BFBACB" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_9684" x1="2.56728" x2="2.56728" y1="0" y2="18.7189">
                <stop offset="0.389773" stopColor="#BBB2CC" />
                <stop offset="0.432164" stopColor="#BEB5CE" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_9684" x1="2.56728" x2="2.56728" y1="0" y2="18.7189">
                <stop offset="0.001543" stopColor="#9F9BA9" />
                <stop offset="0.0266132" stopColor="#9F9BA9" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_9684" x1="0" x2="5.13463" y1="13.2474" y2="13.2474">
                <stop stopColor="#A29CAE" />
                <stop offset="0.0631842" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="0.934443" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="1" stopColor="#A29CAE" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.41996 3.05714) rotate(90) scale(0.595131)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9684" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.57657 1.16734) rotate(90) scale(2.76684 0.680582)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.57657 2.96317) rotate(90) scale(0.626453)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_9684" r="1">
                <stop stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.52902 1.26131) rotate(90) scale(2.67287 0.657468)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.35733 3.08034) rotate(90) scale(0.533645)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_9684" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.52902 2.95273) rotate(90) scale(0.636894)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_9684" r="1">
                <stop offset="0.477231" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.961266 0.343532) rotate(41.4237) scale(0.531546 0.649277)" gradientUnits="userSpaceOnUse" id="paint10_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.83691 0.214581) rotate(39.2072) scale(0.574893 0.702225)" gradientUnits="userSpaceOnUse" id="paint11_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.7946 0.202859) rotate(48.6914) scale(0.515001 0.629068)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.56732 -3.16563) rotate(90) scale(21.8846 5.42812)" gradientUnits="userSpaceOnUse" id="paint13_radial_1_9684" r="1">
                <stop offset="0.961641" stopColor="#9883B3" stopOpacity="0" />
                <stop offset="1" stopColor="#8F78AB" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.475641 6.5328) rotate(46.106) scale(1.87001 0.512939)" gradientUnits="userSpaceOnUse" id="paint14_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-0.263014 6.00818) rotate(60.6758) scale(2.09908 0.893437)" gradientUnits="userSpaceOnUse" id="paint15_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.9281 6.06412) rotate(103.241) scale(1.09405 0.465666)" gradientUnits="userSpaceOnUse" id="paint16_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.57311 6.57572) rotate(133.091) scale(1.77286 0.486292)" gradientUnits="userSpaceOnUse" id="paint17_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.81325 2.61862) rotate(90) scale(2.73551 0.281904)" gradientUnits="userSpaceOnUse" id="paint18_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.15" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.95361 1.68358) rotate(90) scale(1.60558 0.204914)" gradientUnits="userSpaceOnUse" id="paint19_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.17" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.00233 1.86688) rotate(90) scale(1.48261 0.18922)" gradientUnits="userSpaceOnUse" id="paint20_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.18" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_6.79%_6.27%_77.71%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.71904 18.7126">
            <g id="Union">
              <path d={svgPaths.p25e97d80} fill="url(#paint0_linear_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint1_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint2_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint3_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint4_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint5_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint6_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint7_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint8_radial_1_9696)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9696" x1="3.71904" x2="1.64433" y1="5.26529" y2="5.26529">
                <stop stopColor="#C4C2CB" />
                <stop offset="0.514744" stopColor="#B2A8C2" />
                <stop offset="1" stopColor="#948CA2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-6.10778e-08 9.36024) rotate(35.4843) scale(3.37657 1.12961)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9696" r="1">
                <stop stopColor="#9B89B3" />
                <stop offset="1" stopColor="#A28EBB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.51478 4.71366) rotate(0.616057) scale(1.72679 6.75922)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9696" r="1">
                <stop offset="0.682353" stopColor="#B1A8C0" />
                <stop offset="1" stopColor="#BBB4C8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.15504 9.03797) rotate(-157.62) scale(0.269545 0.994554)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.8" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.25337 9.48514) rotate(-71.9657) scale(0.331505 0.797557)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.5" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.96444 8.97932) rotate(-152.354) scale(0.347569 1.28244)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9696" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.01783 9.134) rotate(-65.4623) scale(0.348011 1.28407)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_9696" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.21094 1.0231) rotate(136.219) scale(0.779098 1.21816)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.7216 1.13031) rotate(135) scale(0.892739 1.39584)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_9696" r="1">
                <stop stopColor="#BAB3C8" />
                <stop offset="1" stopColor="#BAB3C8" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame45 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Makan siang di kantor</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#eff7fb] content-stretch flex font-['Quicksand:Regular',sans-serif] font-normal gap-[4px] items-center justify-center leading-[1.4] px-[8px] py-[2px] relative rounded-[8px] shrink-0 text-[#4caad6] text-[10px] whitespace-nowrap">
      <p className="relative shrink-0">Budget</p>
      <p className="relative shrink-0">Makan</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <Frame11 />
      <Frame51 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col font-['Quicksand:Regular',sans-serif] font-normal gap-[4px] items-end relative shrink-0 whitespace-nowrap">
      <p className="leading-[1.4] relative shrink-0 text-[#8c9aa6] text-[12px]">12.40</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#df0000] text-[14px] tracking-[0.2px]">
        <p className="leading-[1.25]">-Rp10.000</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative">
      <Frame50 />
      <Frame52 />
    </div>
  );
}

function InputField2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Fork and knife with plate">
        <div className="absolute inset-[18.79%_13.44%_12.48%_17.82%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4967 16.4967">
            <g id="Vector">
              <path d={svgPaths.pa1f8180} fill="url(#paint0_linear_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint1_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint2_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint3_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint4_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint5_radial_1_9690)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9690" x1="7.30791" x2="8.24834" y1="5.75904e-09" y2="16.4967">
                <stop offset="0.115334" stopColor="#BCBBC4" />
                <stop offset="0.227922" stopColor="#8F8D9B" />
                <stop offset="0.689257" stopColor="#A8A0BC" />
                <stop offset="0.766146" stopColor="#BFA1E2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.24834 8.24835) rotate(90) scale(8.24835 8.24834)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9690" r="1">
                <stop offset="0.943572" stopColor="#DDCEF5" />
                <stop offset="1" stopColor="#DDCEF5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(5.11161 8.99084) rotate(-36.6264) scale(7.78416 7.78415)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9690" r="1">
                <stop offset="0.324467" stopColor="#EAE0FD" />
                <stop offset="0.633232" stopColor="#E7DDF9" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.78487 10.2153) rotate(144.796) scale(9.88429 12.3615)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_9690" r="1">
                <stop offset="0.856316" stopColor="white" stopOpacity="0" />
                <stop offset="0.890511" stopColor="white" stopOpacity="0.3" />
                <stop offset="0.956564" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(15.5742 5.87366) rotate(88.5024) scale(3.58716 1.81782)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9690" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(16.2539 5.40491) rotate(82.7368) scale(4.81993 2.44253)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9690" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[29.51%_24.16%_23.2%_28.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3505 11.3505">
            <g id="Vector">
              <path d={svgPaths.p1dcede00} fill="var(--fill-0, #D8CBF0)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint0_radial_1_9688)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint1_radial_1_9688)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint2_radial_1_9688)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.73489 6.75882) rotate(82.9973) scale(7.71335 8.83323)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_9688" r="1">
                <stop offset="0.596424" stopColor="#DACEF3" />
                <stop offset="0.754428" stopColor="#CCB9EB" />
                <stop offset="0.962131" stopColor="#BCA7DC" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.54015 1.68515) rotate(142.239) scale(13.9815 13.3447)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9688" r="1">
                <stop offset="0.476664" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.693657" stopColor="#E9E2FD" />
                <stop offset="0.816307" stopColor="#EBE8FB" />
                <stop offset="0.962131" stopColor="#EAE7F9" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.37926 2.27406) rotate(56.149) scale(13.4186 15.3668)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9688" r="1">
                <stop offset="0.536739" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.754428" stopColor="#B9B5CA" />
                <stop offset="0.962131" stopColor="#B2AEC4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_72.26%_6.25%_6.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.13456 18.7189">
            <g id="Vector">
              <path d={svgPaths.p1b925280} fill="url(#paint0_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint1_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="var(--fill-2, black)" fillOpacity="0.05" />
              <path d={svgPaths.p1b925280} fill="url(#paint2_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint3_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint4_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint5_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint6_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint7_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint8_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint9_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint10_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint11_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint12_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint13_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint14_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint15_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint16_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint17_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint18_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint19_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint20_radial_1_9684)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9684" x1="1.56613" x2="3.5499" y1="13.2474" y2="13.2474">
                <stop stopColor="#A29CAE" />
                <stop offset="0.2" stopColor="#AFA5C1" />
                <stop offset="0.789474" stopColor="#C9C1D9" />
                <stop offset="1" stopColor="#BFBACB" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_9684" x1="2.56728" x2="2.56728" y1="0" y2="18.7189">
                <stop offset="0.389773" stopColor="#BBB2CC" />
                <stop offset="0.432164" stopColor="#BEB5CE" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_9684" x1="2.56728" x2="2.56728" y1="0" y2="18.7189">
                <stop offset="0.001543" stopColor="#9F9BA9" />
                <stop offset="0.0266132" stopColor="#9F9BA9" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_9684" x1="0" x2="5.13463" y1="13.2474" y2="13.2474">
                <stop stopColor="#A29CAE" />
                <stop offset="0.0631842" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="0.934443" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="1" stopColor="#A29CAE" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.41996 3.05714) rotate(90) scale(0.595131)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9684" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.57657 1.16734) rotate(90) scale(2.76684 0.680582)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.57657 2.96317) rotate(90) scale(0.626453)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_9684" r="1">
                <stop stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.52902 1.26131) rotate(90) scale(2.67287 0.657468)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.35733 3.08034) rotate(90) scale(0.533645)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_9684" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.52902 2.95273) rotate(90) scale(0.636894)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_9684" r="1">
                <stop offset="0.477231" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.961266 0.343532) rotate(41.4237) scale(0.531546 0.649277)" gradientUnits="userSpaceOnUse" id="paint10_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.83691 0.214581) rotate(39.2072) scale(0.574893 0.702225)" gradientUnits="userSpaceOnUse" id="paint11_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.7946 0.202859) rotate(48.6914) scale(0.515001 0.629068)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.56732 -3.16563) rotate(90) scale(21.8846 5.42812)" gradientUnits="userSpaceOnUse" id="paint13_radial_1_9684" r="1">
                <stop offset="0.961641" stopColor="#9883B3" stopOpacity="0" />
                <stop offset="1" stopColor="#8F78AB" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.475641 6.5328) rotate(46.106) scale(1.87001 0.512939)" gradientUnits="userSpaceOnUse" id="paint14_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-0.263014 6.00818) rotate(60.6758) scale(2.09908 0.893437)" gradientUnits="userSpaceOnUse" id="paint15_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.9281 6.06412) rotate(103.241) scale(1.09405 0.465666)" gradientUnits="userSpaceOnUse" id="paint16_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.57311 6.57572) rotate(133.091) scale(1.77286 0.486292)" gradientUnits="userSpaceOnUse" id="paint17_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.81325 2.61862) rotate(90) scale(2.73551 0.281904)" gradientUnits="userSpaceOnUse" id="paint18_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.15" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.95361 1.68358) rotate(90) scale(1.60558 0.204914)" gradientUnits="userSpaceOnUse" id="paint19_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.17" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.00233 1.86688) rotate(90) scale(1.48261 0.18922)" gradientUnits="userSpaceOnUse" id="paint20_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.18" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_6.79%_6.27%_77.71%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.71904 18.7126">
            <g id="Union">
              <path d={svgPaths.p25e97d80} fill="url(#paint0_linear_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint1_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint2_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint3_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint4_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint5_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint6_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint7_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint8_radial_1_9696)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9696" x1="3.71904" x2="1.64433" y1="5.26529" y2="5.26529">
                <stop stopColor="#C4C2CB" />
                <stop offset="0.514744" stopColor="#B2A8C2" />
                <stop offset="1" stopColor="#948CA2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-6.10778e-08 9.36024) rotate(35.4843) scale(3.37657 1.12961)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9696" r="1">
                <stop stopColor="#9B89B3" />
                <stop offset="1" stopColor="#A28EBB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.51478 4.71366) rotate(0.616057) scale(1.72679 6.75922)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9696" r="1">
                <stop offset="0.682353" stopColor="#B1A8C0" />
                <stop offset="1" stopColor="#BBB4C8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.15504 9.03797) rotate(-157.62) scale(0.269545 0.994554)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.8" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.25337 9.48514) rotate(-71.9657) scale(0.331505 0.797557)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.5" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.96444 8.97932) rotate(-152.354) scale(0.347569 1.28244)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9696" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.01783 9.134) rotate(-65.4623) scale(0.348011 1.28407)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_9696" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.21094 1.0231) rotate(136.219) scale(0.779098 1.21816)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.7216 1.13031) rotate(135) scale(0.892739 1.39584)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_9696" r="1">
                <stop stopColor="#BAB3C8" />
                <stop offset="1" stopColor="#BAB3C8" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame49 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Makan siang di kantor</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#eff7fb] content-stretch flex font-['Quicksand:Regular',sans-serif] font-normal gap-[4px] items-center justify-center leading-[1.4] px-[8px] py-[2px] relative rounded-[8px] shrink-0 text-[#4caad6] text-[10px] whitespace-nowrap">
      <p className="relative shrink-0">Budget</p>
      <p className="relative shrink-0">Makan</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <Frame12 />
      <Frame55 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col font-['Quicksand:Regular',sans-serif] font-normal gap-[4px] items-end relative shrink-0 whitespace-nowrap">
      <p className="leading-[1.4] relative shrink-0 text-[#8c9aa6] text-[12px]">12.40</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#df0000] text-[14px] tracking-[0.2px]">
        <p className="leading-[1.25]">-Rp10.000</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative">
      <Frame54 />
      <Frame56 />
    </div>
  );
}

function InputField3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Fork and knife with plate">
        <div className="absolute inset-[18.79%_13.44%_12.48%_17.82%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4967 16.4967">
            <g id="Vector">
              <path d={svgPaths.pa1f8180} fill="url(#paint0_linear_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint1_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint2_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint3_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint4_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint5_radial_1_9690)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9690" x1="7.30791" x2="8.24834" y1="5.75904e-09" y2="16.4967">
                <stop offset="0.115334" stopColor="#BCBBC4" />
                <stop offset="0.227922" stopColor="#8F8D9B" />
                <stop offset="0.689257" stopColor="#A8A0BC" />
                <stop offset="0.766146" stopColor="#BFA1E2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.24834 8.24835) rotate(90) scale(8.24835 8.24834)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9690" r="1">
                <stop offset="0.943572" stopColor="#DDCEF5" />
                <stop offset="1" stopColor="#DDCEF5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(5.11161 8.99084) rotate(-36.6264) scale(7.78416 7.78415)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9690" r="1">
                <stop offset="0.324467" stopColor="#EAE0FD" />
                <stop offset="0.633232" stopColor="#E7DDF9" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.78487 10.2153) rotate(144.796) scale(9.88429 12.3615)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_9690" r="1">
                <stop offset="0.856316" stopColor="white" stopOpacity="0" />
                <stop offset="0.890511" stopColor="white" stopOpacity="0.3" />
                <stop offset="0.956564" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(15.5742 5.87366) rotate(88.5024) scale(3.58716 1.81782)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9690" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(16.2539 5.40491) rotate(82.7368) scale(4.81993 2.44253)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9690" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[29.51%_24.16%_23.2%_28.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3505 11.3505">
            <g id="Vector">
              <path d={svgPaths.p1dcede00} fill="var(--fill-0, #D8CBF0)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint0_radial_1_9688)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint1_radial_1_9688)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint2_radial_1_9688)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.73489 6.75882) rotate(82.9973) scale(7.71335 8.83323)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_9688" r="1">
                <stop offset="0.596424" stopColor="#DACEF3" />
                <stop offset="0.754428" stopColor="#CCB9EB" />
                <stop offset="0.962131" stopColor="#BCA7DC" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.54015 1.68515) rotate(142.239) scale(13.9815 13.3447)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9688" r="1">
                <stop offset="0.476664" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.693657" stopColor="#E9E2FD" />
                <stop offset="0.816307" stopColor="#EBE8FB" />
                <stop offset="0.962131" stopColor="#EAE7F9" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.37926 2.27406) rotate(56.149) scale(13.4186 15.3668)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9688" r="1">
                <stop offset="0.536739" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.754428" stopColor="#B9B5CA" />
                <stop offset="0.962131" stopColor="#B2AEC4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_72.26%_6.25%_6.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.13456 18.7189">
            <g id="Vector">
              <path d={svgPaths.p1b925280} fill="url(#paint0_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint1_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="var(--fill-2, black)" fillOpacity="0.05" />
              <path d={svgPaths.p1b925280} fill="url(#paint2_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint3_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint4_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint5_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint6_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint7_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint8_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint9_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint10_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint11_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint12_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint13_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint14_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint15_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint16_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint17_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint18_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint19_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint20_radial_1_9684)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9684" x1="1.56613" x2="3.5499" y1="13.2474" y2="13.2474">
                <stop stopColor="#A29CAE" />
                <stop offset="0.2" stopColor="#AFA5C1" />
                <stop offset="0.789474" stopColor="#C9C1D9" />
                <stop offset="1" stopColor="#BFBACB" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_9684" x1="2.56728" x2="2.56728" y1="0" y2="18.7189">
                <stop offset="0.389773" stopColor="#BBB2CC" />
                <stop offset="0.432164" stopColor="#BEB5CE" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_9684" x1="2.56728" x2="2.56728" y1="0" y2="18.7189">
                <stop offset="0.001543" stopColor="#9F9BA9" />
                <stop offset="0.0266132" stopColor="#9F9BA9" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_9684" x1="0" x2="5.13463" y1="13.2474" y2="13.2474">
                <stop stopColor="#A29CAE" />
                <stop offset="0.0631842" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="0.934443" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="1" stopColor="#A29CAE" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.41996 3.05714) rotate(90) scale(0.595131)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9684" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.57657 1.16734) rotate(90) scale(2.76684 0.680582)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.57657 2.96317) rotate(90) scale(0.626453)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_9684" r="1">
                <stop stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.52902 1.26131) rotate(90) scale(2.67287 0.657468)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.35733 3.08034) rotate(90) scale(0.533645)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_9684" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.52902 2.95273) rotate(90) scale(0.636894)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_9684" r="1">
                <stop offset="0.477231" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.961266 0.343532) rotate(41.4237) scale(0.531546 0.649277)" gradientUnits="userSpaceOnUse" id="paint10_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.83691 0.214581) rotate(39.2072) scale(0.574893 0.702225)" gradientUnits="userSpaceOnUse" id="paint11_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.7946 0.202859) rotate(48.6914) scale(0.515001 0.629068)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.56732 -3.16563) rotate(90) scale(21.8846 5.42812)" gradientUnits="userSpaceOnUse" id="paint13_radial_1_9684" r="1">
                <stop offset="0.961641" stopColor="#9883B3" stopOpacity="0" />
                <stop offset="1" stopColor="#8F78AB" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.475641 6.5328) rotate(46.106) scale(1.87001 0.512939)" gradientUnits="userSpaceOnUse" id="paint14_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-0.263014 6.00818) rotate(60.6758) scale(2.09908 0.893437)" gradientUnits="userSpaceOnUse" id="paint15_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.9281 6.06412) rotate(103.241) scale(1.09405 0.465666)" gradientUnits="userSpaceOnUse" id="paint16_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.57311 6.57572) rotate(133.091) scale(1.77286 0.486292)" gradientUnits="userSpaceOnUse" id="paint17_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.81325 2.61862) rotate(90) scale(2.73551 0.281904)" gradientUnits="userSpaceOnUse" id="paint18_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.15" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.95361 1.68358) rotate(90) scale(1.60558 0.204914)" gradientUnits="userSpaceOnUse" id="paint19_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.17" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.00233 1.86688) rotate(90) scale(1.48261 0.18922)" gradientUnits="userSpaceOnUse" id="paint20_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.18" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_6.79%_6.27%_77.71%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.71904 18.7126">
            <g id="Union">
              <path d={svgPaths.p25e97d80} fill="url(#paint0_linear_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint1_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint2_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint3_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint4_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint5_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint6_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint7_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint8_radial_1_9696)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9696" x1="3.71904" x2="1.64433" y1="5.26529" y2="5.26529">
                <stop stopColor="#C4C2CB" />
                <stop offset="0.514744" stopColor="#B2A8C2" />
                <stop offset="1" stopColor="#948CA2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-6.10778e-08 9.36024) rotate(35.4843) scale(3.37657 1.12961)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9696" r="1">
                <stop stopColor="#9B89B3" />
                <stop offset="1" stopColor="#A28EBB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.51478 4.71366) rotate(0.616057) scale(1.72679 6.75922)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9696" r="1">
                <stop offset="0.682353" stopColor="#B1A8C0" />
                <stop offset="1" stopColor="#BBB4C8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.15504 9.03797) rotate(-157.62) scale(0.269545 0.994554)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.8" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.25337 9.48514) rotate(-71.9657) scale(0.331505 0.797557)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.5" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.96444 8.97932) rotate(-152.354) scale(0.347569 1.28244)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9696" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.01783 9.134) rotate(-65.4623) scale(0.348011 1.28407)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_9696" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.21094 1.0231) rotate(136.219) scale(0.779098 1.21816)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.7216 1.13031) rotate(135) scale(0.892739 1.39584)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_9696" r="1">
                <stop stopColor="#BAB3C8" />
                <stop offset="1" stopColor="#BAB3C8" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame53 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Makan siang di kantor</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <Frame13 />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#1f2c37] text-[12px] w-[min-content]">Selasa, 17 Feb 2026</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative">
      <Frame58 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#df0000] text-[14px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.25]">-Rp10.000</p>
      </div>
    </div>
  );
}

function InputField4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Fork and knife with plate">
        <div className="absolute inset-[18.79%_13.44%_12.48%_17.82%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4967 16.4967">
            <g id="Vector">
              <path d={svgPaths.pa1f8180} fill="url(#paint0_linear_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint1_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint2_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint3_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint4_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint5_radial_1_9690)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9690" x1="7.30791" x2="8.24834" y1="5.75904e-09" y2="16.4967">
                <stop offset="0.115334" stopColor="#BCBBC4" />
                <stop offset="0.227922" stopColor="#8F8D9B" />
                <stop offset="0.689257" stopColor="#A8A0BC" />
                <stop offset="0.766146" stopColor="#BFA1E2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.24834 8.24835) rotate(90) scale(8.24835 8.24834)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9690" r="1">
                <stop offset="0.943572" stopColor="#DDCEF5" />
                <stop offset="1" stopColor="#DDCEF5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(5.11161 8.99084) rotate(-36.6264) scale(7.78416 7.78415)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9690" r="1">
                <stop offset="0.324467" stopColor="#EAE0FD" />
                <stop offset="0.633232" stopColor="#E7DDF9" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.78487 10.2153) rotate(144.796) scale(9.88429 12.3615)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_9690" r="1">
                <stop offset="0.856316" stopColor="white" stopOpacity="0" />
                <stop offset="0.890511" stopColor="white" stopOpacity="0.3" />
                <stop offset="0.956564" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(15.5742 5.87366) rotate(88.5024) scale(3.58716 1.81782)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9690" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(16.2539 5.40491) rotate(82.7368) scale(4.81993 2.44253)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9690" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[29.51%_24.16%_23.2%_28.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3505 11.3505">
            <g id="Vector">
              <path d={svgPaths.p1dcede00} fill="var(--fill-0, #D8CBF0)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint0_radial_1_9688)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint1_radial_1_9688)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint2_radial_1_9688)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.73489 6.75882) rotate(82.9973) scale(7.71335 8.83323)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_9688" r="1">
                <stop offset="0.596424" stopColor="#DACEF3" />
                <stop offset="0.754428" stopColor="#CCB9EB" />
                <stop offset="0.962131" stopColor="#BCA7DC" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.54015 1.68515) rotate(142.239) scale(13.9815 13.3447)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9688" r="1">
                <stop offset="0.476664" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.693657" stopColor="#E9E2FD" />
                <stop offset="0.816307" stopColor="#EBE8FB" />
                <stop offset="0.962131" stopColor="#EAE7F9" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.37926 2.27406) rotate(56.149) scale(13.4186 15.3668)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9688" r="1">
                <stop offset="0.536739" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.754428" stopColor="#B9B5CA" />
                <stop offset="0.962131" stopColor="#B2AEC4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_72.26%_6.25%_6.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.13456 18.7189">
            <g id="Vector">
              <path d={svgPaths.p1b925280} fill="url(#paint0_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint1_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="var(--fill-2, black)" fillOpacity="0.05" />
              <path d={svgPaths.p1b925280} fill="url(#paint2_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint3_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint4_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint5_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint6_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint7_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint8_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint9_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint10_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint11_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint12_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint13_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint14_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint15_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint16_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint17_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint18_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint19_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint20_radial_1_9684)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9684" x1="1.56613" x2="3.5499" y1="13.2474" y2="13.2474">
                <stop stopColor="#A29CAE" />
                <stop offset="0.2" stopColor="#AFA5C1" />
                <stop offset="0.789474" stopColor="#C9C1D9" />
                <stop offset="1" stopColor="#BFBACB" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_9684" x1="2.56728" x2="2.56728" y1="0" y2="18.7189">
                <stop offset="0.389773" stopColor="#BBB2CC" />
                <stop offset="0.432164" stopColor="#BEB5CE" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_9684" x1="2.56728" x2="2.56728" y1="0" y2="18.7189">
                <stop offset="0.001543" stopColor="#9F9BA9" />
                <stop offset="0.0266132" stopColor="#9F9BA9" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_9684" x1="0" x2="5.13463" y1="13.2474" y2="13.2474">
                <stop stopColor="#A29CAE" />
                <stop offset="0.0631842" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="0.934443" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="1" stopColor="#A29CAE" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.41996 3.05714) rotate(90) scale(0.595131)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9684" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.57657 1.16734) rotate(90) scale(2.76684 0.680582)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.57657 2.96317) rotate(90) scale(0.626453)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_9684" r="1">
                <stop stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.52902 1.26131) rotate(90) scale(2.67287 0.657468)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.35733 3.08034) rotate(90) scale(0.533645)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_9684" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.52902 2.95273) rotate(90) scale(0.636894)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_9684" r="1">
                <stop offset="0.477231" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.961266 0.343532) rotate(41.4237) scale(0.531546 0.649277)" gradientUnits="userSpaceOnUse" id="paint10_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.83691 0.214581) rotate(39.2072) scale(0.574893 0.702225)" gradientUnits="userSpaceOnUse" id="paint11_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.7946 0.202859) rotate(48.6914) scale(0.515001 0.629068)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.56732 -3.16563) rotate(90) scale(21.8846 5.42812)" gradientUnits="userSpaceOnUse" id="paint13_radial_1_9684" r="1">
                <stop offset="0.961641" stopColor="#9883B3" stopOpacity="0" />
                <stop offset="1" stopColor="#8F78AB" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.475641 6.5328) rotate(46.106) scale(1.87001 0.512939)" gradientUnits="userSpaceOnUse" id="paint14_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-0.263014 6.00818) rotate(60.6758) scale(2.09908 0.893437)" gradientUnits="userSpaceOnUse" id="paint15_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.9281 6.06412) rotate(103.241) scale(1.09405 0.465666)" gradientUnits="userSpaceOnUse" id="paint16_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.57311 6.57572) rotate(133.091) scale(1.77286 0.486292)" gradientUnits="userSpaceOnUse" id="paint17_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.81325 2.61862) rotate(90) scale(2.73551 0.281904)" gradientUnits="userSpaceOnUse" id="paint18_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.15" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.95361 1.68358) rotate(90) scale(1.60558 0.204914)" gradientUnits="userSpaceOnUse" id="paint19_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.17" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.00233 1.86688) rotate(90) scale(1.48261 0.18922)" gradientUnits="userSpaceOnUse" id="paint20_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.18" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_6.79%_6.27%_77.71%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.71904 18.7126">
            <g id="Union">
              <path d={svgPaths.p25e97d80} fill="url(#paint0_linear_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint1_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint2_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint3_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint4_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint5_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint6_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint7_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint8_radial_1_9696)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9696" x1="3.71904" x2="1.64433" y1="5.26529" y2="5.26529">
                <stop stopColor="#C4C2CB" />
                <stop offset="0.514744" stopColor="#B2A8C2" />
                <stop offset="1" stopColor="#948CA2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-6.10778e-08 9.36024) rotate(35.4843) scale(3.37657 1.12961)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9696" r="1">
                <stop stopColor="#9B89B3" />
                <stop offset="1" stopColor="#A28EBB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.51478 4.71366) rotate(0.616057) scale(1.72679 6.75922)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9696" r="1">
                <stop offset="0.682353" stopColor="#B1A8C0" />
                <stop offset="1" stopColor="#BBB4C8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.15504 9.03797) rotate(-157.62) scale(0.269545 0.994554)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.8" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.25337 9.48514) rotate(-71.9657) scale(0.331505 0.797557)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.5" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.96444 8.97932) rotate(-152.354) scale(0.347569 1.28244)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9696" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.01783 9.134) rotate(-65.4623) scale(0.348011 1.28407)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_9696" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.21094 1.0231) rotate(136.219) scale(0.779098 1.21816)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.7216 1.13031) rotate(135) scale(0.892739 1.39584)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_9696" r="1">
                <stop stopColor="#BAB3C8" />
                <stop offset="1" stopColor="#BAB3C8" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame57 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Makan siang di kantor</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <Frame16 />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#1f2c37] text-[12px] w-[min-content]">Rabu, 17 Feb 2026</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative">
      <Frame60 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#df0000] text-[14px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.25]">-Rp10.000</p>
      </div>
    </div>
  );
}

function InputField5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#d9dff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Fork and knife with plate">
        <div className="absolute inset-[18.79%_13.44%_12.48%_17.82%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4967 16.4967">
            <g id="Vector">
              <path d={svgPaths.pa1f8180} fill="url(#paint0_linear_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint1_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint2_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint3_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint4_radial_1_9690)" />
              <path d={svgPaths.pa1f8180} fill="url(#paint5_radial_1_9690)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9690" x1="7.30791" x2="8.24834" y1="5.75904e-09" y2="16.4967">
                <stop offset="0.115334" stopColor="#BCBBC4" />
                <stop offset="0.227922" stopColor="#8F8D9B" />
                <stop offset="0.689257" stopColor="#A8A0BC" />
                <stop offset="0.766146" stopColor="#BFA1E2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.24834 8.24835) rotate(90) scale(8.24835 8.24834)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9690" r="1">
                <stop offset="0.943572" stopColor="#DDCEF5" />
                <stop offset="1" stopColor="#DDCEF5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(5.11161 8.99084) rotate(-36.6264) scale(7.78416 7.78415)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9690" r="1">
                <stop offset="0.324467" stopColor="#EAE0FD" />
                <stop offset="0.633232" stopColor="#E7DDF9" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.78487 10.2153) rotate(144.796) scale(9.88429 12.3615)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_9690" r="1">
                <stop offset="0.856316" stopColor="white" stopOpacity="0" />
                <stop offset="0.890511" stopColor="white" stopOpacity="0.3" />
                <stop offset="0.956564" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(15.5742 5.87366) rotate(88.5024) scale(3.58716 1.81782)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9690" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(16.2539 5.40491) rotate(82.7368) scale(4.81993 2.44253)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9690" r="1">
                <stop offset="0.675676" stopColor="#C2B2DB" />
                <stop offset="1" stopColor="#C2B2DB" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[29.51%_24.16%_23.2%_28.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3505 11.3505">
            <g id="Vector">
              <path d={svgPaths.p1dcede00} fill="var(--fill-0, #D8CBF0)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint0_radial_1_9688)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint1_radial_1_9688)" />
              <path d={svgPaths.p1dcede00} fill="url(#paint2_radial_1_9688)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.73489 6.75882) rotate(82.9973) scale(7.71335 8.83323)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_9688" r="1">
                <stop offset="0.596424" stopColor="#DACEF3" />
                <stop offset="0.754428" stopColor="#CCB9EB" />
                <stop offset="0.962131" stopColor="#BCA7DC" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.54015 1.68515) rotate(142.239) scale(13.9815 13.3447)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9688" r="1">
                <stop offset="0.476664" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.693657" stopColor="#E9E2FD" />
                <stop offset="0.816307" stopColor="#EBE8FB" />
                <stop offset="0.962131" stopColor="#EAE7F9" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.37926 2.27406) rotate(56.149) scale(13.4186 15.3668)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9688" r="1">
                <stop offset="0.536739" stopColor="#DACEF3" stopOpacity="0" />
                <stop offset="0.754428" stopColor="#B9B5CA" />
                <stop offset="0.962131" stopColor="#B2AEC4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_72.26%_6.25%_6.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.13456 18.7189">
            <g id="Vector">
              <path d={svgPaths.p1b925280} fill="url(#paint0_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint1_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="var(--fill-2, black)" fillOpacity="0.05" />
              <path d={svgPaths.p1b925280} fill="url(#paint2_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint3_linear_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint4_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint5_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint6_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint7_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint8_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint9_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint10_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint11_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint12_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint13_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint14_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint15_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint16_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint17_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint18_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint19_radial_1_9684)" />
              <path d={svgPaths.p1b925280} fill="url(#paint20_radial_1_9684)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9684" x1="1.56613" x2="3.5499" y1="13.2474" y2="13.2474">
                <stop stopColor="#A29CAE" />
                <stop offset="0.2" stopColor="#AFA5C1" />
                <stop offset="0.789474" stopColor="#C9C1D9" />
                <stop offset="1" stopColor="#BFBACB" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_9684" x1="2.56728" x2="2.56728" y1="0" y2="18.7189">
                <stop offset="0.389773" stopColor="#BBB2CC" />
                <stop offset="0.432164" stopColor="#BEB5CE" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_9684" x1="2.56728" x2="2.56728" y1="0" y2="18.7189">
                <stop offset="0.001543" stopColor="#9F9BA9" />
                <stop offset="0.0266132" stopColor="#9F9BA9" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_9684" x1="0" x2="5.13463" y1="13.2474" y2="13.2474">
                <stop stopColor="#A29CAE" />
                <stop offset="0.0631842" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="0.934443" stopColor="#A29CAE" stopOpacity="0" />
                <stop offset="1" stopColor="#A29CAE" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.41996 3.05714) rotate(90) scale(0.595131)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9684" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.57657 1.16734) rotate(90) scale(2.76684 0.680582)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.57657 2.96317) rotate(90) scale(0.626453)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_9684" r="1">
                <stop stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.52902 1.26131) rotate(90) scale(2.67287 0.657468)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.35733 3.08034) rotate(90) scale(0.533645)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_9684" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.52902 2.95273) rotate(90) scale(0.636894)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_9684" r="1">
                <stop offset="0.477231" stopColor="#A29CAE" />
                <stop offset="1" stopColor="#A29CAE" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.961266 0.343532) rotate(41.4237) scale(0.531546 0.649277)" gradientUnits="userSpaceOnUse" id="paint10_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.83691 0.214581) rotate(39.2072) scale(0.574893 0.702225)" gradientUnits="userSpaceOnUse" id="paint11_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.7946 0.202859) rotate(48.6914) scale(0.515001 0.629068)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_9684" r="1">
                <stop stopColor="#C9C7D0" />
                <stop offset="1" stopColor="#CDCAD5" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.56732 -3.16563) rotate(90) scale(21.8846 5.42812)" gradientUnits="userSpaceOnUse" id="paint13_radial_1_9684" r="1">
                <stop offset="0.961641" stopColor="#9883B3" stopOpacity="0" />
                <stop offset="1" stopColor="#8F78AB" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(0.475641 6.5328) rotate(46.106) scale(1.87001 0.512939)" gradientUnits="userSpaceOnUse" id="paint14_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-0.263014 6.00818) rotate(60.6758) scale(2.09908 0.893437)" gradientUnits="userSpaceOnUse" id="paint15_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.9281 6.06412) rotate(103.241) scale(1.09405 0.465666)" gradientUnits="userSpaceOnUse" id="paint16_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.57311 6.57572) rotate(133.091) scale(1.77286 0.486292)" gradientUnits="userSpaceOnUse" id="paint17_radial_1_9684" r="1">
                <stop stopColor="#A19CAB" />
                <stop offset="1" stopColor="#A19CAB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(4.81325 2.61862) rotate(90) scale(2.73551 0.281904)" gradientUnits="userSpaceOnUse" id="paint18_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.15" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.95361 1.68358) rotate(90) scale(1.60558 0.204914)" gradientUnits="userSpaceOnUse" id="paint19_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.17" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.00233 1.86688) rotate(90) scale(1.48261 0.18922)" gradientUnits="userSpaceOnUse" id="paint20_radial_1_9684" r="1">
                <stop offset="0.37766" stopColor="white" stopOpacity="0.18" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[15.76%_6.79%_6.27%_77.71%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.71904 18.7126">
            <g id="Union">
              <path d={svgPaths.p25e97d80} fill="url(#paint0_linear_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint1_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint2_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint3_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint4_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint5_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint6_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint7_radial_1_9696)" />
              <path d={svgPaths.p25e97d80} fill="url(#paint8_radial_1_9696)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_9696" x1="3.71904" x2="1.64433" y1="5.26529" y2="5.26529">
                <stop stopColor="#C4C2CB" />
                <stop offset="0.514744" stopColor="#B2A8C2" />
                <stop offset="1" stopColor="#948CA2" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(-6.10778e-08 9.36024) rotate(35.4843) scale(3.37657 1.12961)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_9696" r="1">
                <stop stopColor="#9B89B3" />
                <stop offset="1" stopColor="#A28EBB" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1.51478 4.71366) rotate(0.616057) scale(1.72679 6.75922)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_9696" r="1">
                <stop offset="0.682353" stopColor="#B1A8C0" />
                <stop offset="1" stopColor="#BBB4C8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.15504 9.03797) rotate(-157.62) scale(0.269545 0.994554)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.8" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.25337 9.48514) rotate(-71.9657) scale(0.331505 0.797557)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" stopOpacity="0.5" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.96444 8.97932) rotate(-152.354) scale(0.347569 1.28244)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_9696" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.01783 9.134) rotate(-65.4623) scale(0.348011 1.28407)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_9696" r="1">
                <stop stopColor="#BAB2C7" />
                <stop offset="1" stopColor="#BAB2C7" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(3.21094 1.0231) rotate(136.219) scale(0.779098 1.21816)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_9696" r="1">
                <stop stopColor="#D7D2E0" />
                <stop offset="1" stopColor="#E1DEE8" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.7216 1.13031) rotate(135) scale(0.892739 1.39584)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_9696" r="1">
                <stop stopColor="#BAB3C8" />
                <stop offset="1" stopColor="#BAB3C8" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame59 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">Hari ini, 16 April 2026</p>
      <InputField />
      <InputField1 />
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#1f2c37] text-[14px] tracking-[0.2px] whitespace-nowrap">15 April 2026</p>
      <InputField2 />
      <InputField3 />
      <InputField4 />
      <InputField5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[729px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#2a353e] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">Daftar Catatan</p>
          <Frame40 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-0 top-[117px] w-[375px]">
      <Frame14 />
      <Frame1 />
    </div>
  );
}

export default function ScreenBudgetGoals() {
  return (
    <div className="bg-[#d9dff6] relative size-full" data-name="Screen + Budget + Goals">
      <div className="-translate-x-1/2 absolute h-[234px] left-1/2 top-[207px] w-[497px]">
        <div className="absolute inset-[-43.29%_-20.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 699.6 436.6">
            <g filter="url(#filter0_f_1_21117)" id="Ellipse 116">
              <ellipse cx="349.8" cy="218.3" fill="var(--fill-0, #5C79DF)" rx="248.5" ry="117" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="436.6" id="filter0_f_1_21117" width="699.6" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_21117" stdDeviation="50.65" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <StatusBar />
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[16px] items-center justify-center left-1/2 px-[20px] py-[18px] top-[44px] w-[375px]" data-name="Navigation Bar">
        <Left />
        <p className="flex-[1_0_0] font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] min-w-px relative text-[#2a353e] text-[20px] text-center tracking-[0.2px]">Catatan Keuangan</p>
        <Right />
      </div>
      <Frame27 />
      <div className="-translate-x-1/2 absolute bg-[#3a5ed7] bottom-[24px] content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] overflow-clip p-[16px] rounded-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] w-[146px]" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/plus">
          <div className="absolute inset-[15%]" data-name="Icon">
            <div className="absolute inset-[-8.93%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2 13.2">
                <path clipRule="evenodd" d={svgPaths.p3780d080} fill="var(--fill-0, #2A353E)" fillRule="evenodd" id="Icon" stroke="var(--stroke-1, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[16px] text-white tracking-[0.2px] whitespace-nowrap">Catatan</p>
      </div>
    </div>
  );
}