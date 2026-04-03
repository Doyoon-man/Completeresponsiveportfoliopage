import svgPaths from "./svg-mi8z8dscnu";
import img from "./96ae70cbe7704fabab0a24e07eebb6c76a9d3b5d.png";
import imgImgi3MainVisualImg011 from "./2613664b505991acb0a49d8010a133b3ec85a3d2.png";
import img2 from "./8057a71a4f517b65579b966410cc29876eaf961f.png";
import img3 from "./88d9ba1360e8bc05f006f403784fc290e10f5f05.png";
import img4 from "./eeae7df8f57321cfa4a9b5ff85350289c46ee62b.png";
import img1 from "./81949e948bb023dcefbb0c8cd2ef5a45cc1200e4.png";
import { GraduationCap, Atom, Heart, Lightbulb } from "lucide-react";

function Logo() {
  return (
    <div className="col-1 h-[53.563px] ml-0 mt-0 relative row-1 w-[60.133px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.1337 53.563">
        <g id="Logo">
          <path d={svgPaths.p336a9900} fill="var(--fill-0, #3232C8)" id="Vector" />
          <path d={svgPaths.p1207d7c0} fill="var(--fill-0, #99BC42)" id="Vector_2" />
          <path d={svgPaths.p17c2da00} fill="var(--fill-0, #5CB1E0)" id="Vector_3" />
          <path d={svgPaths.p12efa500} fill="var(--fill-0, #000064)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="로고">
      <Logo />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[125px]" data-name="혜안재단_글머리">
      <div className="flex flex-col font-['Pretendard:Light',sans-serif] justify-center relative shrink-0 text-[#515151] text-[8px] w-full">
        <p className="leading-[16px]">HYEAN FOUNDATION</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] h-[37px] justify-center relative shrink-0 text-[#000064] text-[36px] w-full">
        <p className="leading-[16px]">혜안재단</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[20.83%_8.27%_20.83%_8.34%]" data-name="Group">
      <div className="absolute inset-[-6.12%_-4.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0133 13.7503">
          <g id="Group">
            <path d={svgPaths.p1f2435f0} id="Vector" stroke="var(--stroke-0, #FFFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3428f740} id="Vector_2" stroke="var(--stroke-0, #FFFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[21px]" data-name="학사모아이콘">
      <Group />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative size-[16px]" data-name="버튼_제네럴/화살표_호버">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ë²í¼_ì ë¤ë´/íì´í_í¸ë²">
          <path d={svgPaths.p36e63680} fill="var(--fill-0, #FFFEFE)" id="Vector" />
          <g id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 z-[1]" data-name="장학금신청하기 버튼과 메뉴판">
      <div className="bg-[#000064] content-stretch flex gap-[6px] items-center p-[8px] relative rounded-[32px] shrink-0" data-name="장학금_신청하기_버튼">
        <Component4 />
        <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">장학금 신청하기</p>
        </div>
        <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Component5 />
          </div>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[49px]" data-name="모바일 메뉴창 오픈">
        <div className="absolute inset-[16.67%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.75 32.6667">
            <path d={svgPaths.p1ee95480} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#fffefe] shrink-0 sticky top-0 w-full z-[8]" data-name="헤더">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex isolate items-center justify-between px-[24px] relative w-full">
          <div className="content-stretch flex gap-[7px] items-center leading-[0] relative shrink-0 w-[192px] z-[2]" data-name="상단로고">
            <Component1 />
            <Component2 />
          </div>
          <Component3 />
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Bold',sans-serif] gap-[8px] items-start relative shrink-0 text-[40px] w-full" data-name="메뉴글_중간글">
      <div className="flex flex-col justify-center relative shrink-0 text-[#515151] w-full">
        <p className="leading-[normal]">통찰의 혜안으로</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#69bc42] w-full">
        <p className="leading-[normal]">미래를 밝히다</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[16px] relative shrink-0 w-[440px]" data-name="헤더메뉴">
      <div className="bg-[#69bc42] content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="상단애니메이션1">
        <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] whitespace-nowrap">
          <p className="leading-[normal]">Wise Insight</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[27px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="상단애니메이션1">
        <Component7 />
        <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center relative shrink-0 text-[#515151] text-[16px] w-full">
          <p className="leading-[normal] mb-0">깊은 통찰력을 바탕으로 차세대 인재들의 앞날을 환하게 비춥니다.</p>
          <p className="leading-[normal]">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[260px]" data-name="캐러셀이미지">
      <div className="aspect-[740/650] relative shrink-0 w-full" data-name="imgi_3_main_visual_img01 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi3MainVisualImg011} />
      </div>
    </div>
  );
}

function Component11() {
  return <div className="bg-[#adadad] h-[5px] shrink-0 w-[130px]" data-name="플레이구간" />;
}

function Component10() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="플레이팝업">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center w-[24px]">
        <p className="leading-[normal]">01</p>
      </div>
      <Component11 />
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#adadad] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">03</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex h-[19px] items-center relative shrink-0" data-name="플레이팝업모음집">
      <Component10 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="플레이창">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="플레이버튼">
        <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#adadad] text-[16px] whitespace-nowrap">
          <p className="leading-[normal]">{`<`}</p>
        </div>
      </div>
      <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 w-[9px]" data-name="플레이버튼">
        <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.6px] text-black text-left w-full">
          <p className="leading-[normal]">▶</p>
        </div>
      </button>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[11px]" data-name="플레이버튼">
        <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
          <p className="leading-[normal]">{`>`}</p>
        </div>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="글묶음1">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center min-w-full relative shrink-0 text-[#3232c8] text-[16px] w-[min-content]">
        <p className="leading-[normal]">About Foundation</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[36px] text-black whitespace-nowrap">
        <p className="leading-[normal]">혜안재단 소개</p>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="글묶음2">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#515151] text-[16px]">
        <p className="leading-[normal]">배움의 기회를 넓혀, 인재의 가능성을 키웁니다.</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[21%_14.9%_20.87%_14.75%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8806 29.6499">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p37a9c180} fill="var(--fill-0, #EB5757)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2dc80700} fill="var(--fill-0, #F2C94C)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Component18() {
  return (
    <div className="absolute left-0 overflow-clip size-[51px] top-[-0.5px]" data-name="손모양아이콘">
      <Group1 />
    </div>
  );
}

function Component17() {
  return (
    <div className="bg-[#e6e6e6] h-[52px] overflow-clip relative rounded-[4px] shrink-0 w-[51px]" data-name="아이콘">
      <Component18 />
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="글상자">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[24px] text-black w-full">
        <p className="leading-[16px]">따뜻한 나눔</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center relative shrink-0 text-[#515151] text-[16px] w-full">
        <p className="leading-[normal]">기술 발전과 함께 따뜻한 나눔의 가치를 실현하며, 지속 가능한 사회적 가치를 창출합니다.</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[14.29%_3.57%_3.57%_3.57%]" data-name="Group">
      <div className="absolute inset-[-2.17%_-1.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.8571 27.4287">
          <g id="Group">
            <path d={svgPaths.p3eb0f980} fill="var(--fill-0, #D7E0FF)" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p4830300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
            <path d={svgPaths.p3a0b74c0} fill="var(--fill-0, #D7E0FF)" id="Vector_3" />
            <path d={svgPaths.p2a420900} id="Vector_4" stroke="var(--stroke-0, #4147D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14286" />
            <path d={svgPaths.p238f9a40} id="Vector_5" stroke="var(--stroke-0, #4147D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14286" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StreamlineColorCodeMonitor() {
  return (
    <div className="absolute left-[9px] overflow-clip size-[32px] top-[9.5px]" data-name="streamline-color:code-monitor-2">
      <Group2 />
    </div>
  );
}

function Component20() {
  return (
    <div className="bg-[#e6e6e6] h-[52px] overflow-clip relative rounded-[4px] shrink-0 w-[51px]" data-name="아이콘">
      <StreamlineColorCodeMonitor />
    </div>
  );
}

function Component21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="글상자">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[24px] text-black w-full">
        <p className="leading-[16px]">혁신의 정신</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center relative shrink-0 text-[#515151] text-[16px] w-full">
        <p className="leading-[normal]">반도체 산업의 정말함과 혁신 정신을 바탕으로 미래 기술 인재를 발굴하고 육성합니다.</p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="absolute left-[9px] size-[32px] top-[9.5px]" data-name="로켓아이콘">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ë¡ì¼ìì´ì½">
          <g id="Group">
            <path d={svgPaths.p3e3e5b00} fill="var(--fill-0, #FF9D27)" id="Vector" />
            <path d={svgPaths.p1aa68280} fill="var(--fill-0, #FF9D27)" id="Vector_2" />
          </g>
          <path d={svgPaths.p26f8fa00} fill="var(--fill-0, #FDF516)" id="Vector_3" />
          <path d={svgPaths.p2f4b2c00} fill="var(--fill-0, #FF9D27)" id="Vector_4" />
          <g id="Group_2">
            <path d={svgPaths.p2da83ff0} fill="var(--fill-0, #FDF516)" id="Vector_5" />
            <path d={svgPaths.p2db7ff80} fill="var(--fill-0, #FDF516)" id="Vector_6" />
          </g>
          <path d={svgPaths.p2840ac00} fill="var(--fill-0, #3BAACF)" id="Vector_7" />
          <path d={svgPaths.p388ac100} fill="var(--fill-0, #428BC1)" id="Vector_8" />
          <path d={svgPaths.p3b285280} fill="var(--fill-0, #3BAACF)" id="Vector_9" />
          <path d={svgPaths.p1362a400} fill="var(--fill-0, #428BC1)" id="Vector_10" />
          <path d={svgPaths.p3989ad00} fill="var(--fill-0, #C5D0D8)" id="Vector_11" />
          <path d={svgPaths.p28c5a00} fill="var(--fill-0, #DAE3EA)" id="Vector_12" />
          <path d={svgPaths.p307e6f00} fill="var(--fill-0, #C94747)" id="Vector_13" />
          <path d={svgPaths.pf11500} fill="var(--fill-0, #F15744)" id="Vector_14" />
          <path d={svgPaths.p3ebce00} fill="var(--fill-0, #3E4347)" id="Vector_15" />
          <path d={svgPaths.p317d1f80} fill="var(--fill-0, #62727A)" id="Vector_16" />
          <path d={svgPaths.p671f00} fill="var(--fill-0, #C94747)" id="Vector_17" />
          <path d={svgPaths.p2f2fb380} fill="var(--fill-0, #F15744)" id="Vector_18" />
          <path d={svgPaths.p24fdae00} fill="var(--fill-0, #EDF4F9)" id="Vector_19" />
          <path d={svgPaths.p2e67700} fill="var(--fill-0, #3BAACF)" id="Vector_20" />
          <path d={svgPaths.pfee0f80} fill="var(--fill-0, #EDF4F9)" id="Vector_21" />
          <path d={svgPaths.p2f986280} fill="var(--fill-0, #3BAACF)" id="Vector_22" />
          <g id="Group_3">
            <path d={svgPaths.p26faae80} fill="var(--fill-0, white)" id="Vector_23" />
            <path d={svgPaths.p211ae700} fill="var(--fill-0, white)" id="Vector_24" />
            <path d={svgPaths.pb7d2200} fill="var(--fill-0, white)" id="Vector_25" />
            <path d={svgPaths.p24a4380} fill="var(--fill-0, white)" id="Vector_26" />
            <path d={svgPaths.p25cb4e80} fill="var(--fill-0, white)" id="Vector_27" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component22() {
  return (
    <div className="bg-[#e6e6e6] h-[52px] overflow-clip relative rounded-[4px] shrink-0 w-[51px]" data-name="아이콘">
      <Component23 />
    </div>
  );
}

function Component24() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="글상자">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[24px] text-black w-full">
        <p className="leading-[16px]">미래 인재 양성</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center relative shrink-0 text-[#515151] text-[16px] w-full">
        <p className="leading-[normal]">우수한 인재들이 꿈을 펼칠 수 있더록 체계적인 장학 프로그램과 교육기회를 제공합니다.</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="소개글상자">
      <div className="h-[264px] relative rounded-[8px] shrink-0 w-[215px]" data-name="혜안재단 소개 글상자">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
          <Component17 />
          <Component19 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="h-[264px] relative rounded-[8px] shrink-0 w-[215px]" data-name="혜안재단 소개 글상자">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
          <Component20 />
          <Component21 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="h-[264px] relative rounded-[8px] shrink-0 w-[215px]" data-name="혜안재단 소개 글상자">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
          <Component22 />
          <Component24 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="h-[523px] relative shrink-0 w-full z-[6]" data-name="섹션1">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
        <div className="h-[187px] relative shrink-0 w-full" data-name="글상자_제네럴">
          <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative size-full">
            <Component14 />
            <Component15 />
          </div>
        </div>
        <Component16 />
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="글묶음1">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center relative shrink-0 text-[#3232c8] text-[16px] w-full">
        <p className="leading-[normal]">Our Ideal Talent</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[36px] text-black w-full">
        <p className="leading-[normal]">재단이 추구하는 인재상</p>
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="content-stretch flex h-[31px] items-start relative shrink-0 w-full" data-name="글묶음2">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#515151] text-[16px]">
        <p className="leading-[normal]">미래를 이끌어갈 핵심 가치를 갖춘 인재를 육성합니다.</p>
      </div>
    </div>
  );
}

function Component26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[124px] items-start relative shrink-0 w-[374px]" data-name="글상자_섹션2">
      <Component27 />
      <Component28 />
    </div>
  );
}

function Component25() {
  return (
    <div className="relative shrink-0 w-full z-[5]" data-name="섹션2_헤더">
      <div className="flex flex-row items-end size-full">
        <div className="content-end flex flex-wrap gap-y-[32px] items-end justify-between px-[32px] relative w-full">
          <Component26 />
          <div className="bg-[#fffefe] content-stretch flex gap-[8px] h-[42px] items-center justify-center px-[24px] py-[16px] relative rounded-[24px] shrink-0 w-[216px]" data-name="버튼_제네럴">
            <div aria-hidden="true" className="absolute border border-[#000064] border-solid inset-0 pointer-events-none rounded-[24px]" />
            <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000064] text-[16px] whitespace-nowrap">
              <p className="leading-[normal]">인재상 자세히보기</p>
            </div>
            <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "42" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="relative size-[16px]" data-name="버튼_제네럴/화살표_디폴트">
                  <div className="absolute inset-[16.67%_22.35%_16.83%_22.07%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89321 10.64">
                      <path d={svgPaths.p242b10f0} fill="var(--fill-0, #000064)" id="Vector" />
                    </svg>
                  </div>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start justify-end leading-[0] min-h-px min-w-px not-italic relative text-[#fffefe]" data-name="글상자내용">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[30px] w-full">
        <p className="leading-[normal]">PASSION</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal]">가치 있는 일에 대한 열정</p>
      </div>
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start justify-end leading-[0] min-h-px min-w-px not-italic relative text-[#fffefe]" data-name="글상자내용">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[30px] w-full">
        <p className="leading-[normal]">INNOVATION</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal]">창의적인 사고와 행동</p>
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start justify-end leading-[0] min-h-px min-w-px not-italic relative text-[#fffefe]" data-name="글상자내용">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[30px] w-full">
        <p className="leading-[normal]">HONESTY</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal]">정직과 겸손</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center justify-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[295px] items-end overflow-clip px-[24px] py-[31px] relative rounded-tl-[32px] shrink-0 w-[215px]" data-name="섹션2_이미지상자">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[32px] size-full" src={img2} />
        <Component30 />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-48px_48px_0px_rgba(71,71,71,0.3)]" />
      </div>
      <div className="content-stretch flex h-[295px] items-end overflow-clip px-[24px] py-[31px] relative shrink-0 w-[215px]" data-name="섹션2_이미지상자">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
        <Component31 />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-48px_48px_0px_rgba(71,71,71,0.3)]" />
      </div>
      <div className="content-stretch flex h-[295px] items-end overflow-clip px-[24px] py-[31px] relative rounded-br-[32px] shrink-0 w-[215px]" data-name="섹션2_이미지상자">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-br-[32px] size-full" src={img4} />
        <Component32 />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-48px_48px_0px_rgba(71,71,71,0.3)]" />
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="relative shrink-0 w-full z-[4]" data-name="섹션2">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="글묶음1">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center min-w-full relative shrink-0 text-[#3232c8] text-[16px] w-[min-content]">
        <p className="leading-[normal]">Our Programs</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[36px] text-black whitespace-nowrap">
        <p className="leading-[normal]">혜안재단의 주요사업</p>
      </div>
    </div>
  );
}

function Component36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="글묶음2">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#515151] text-[16px]">
        <p className="leading-[normal]">다양한 프로그램을 통해 인재 육성과 사회 기여를 실현합니다</p>
      </div>
    </div>
  );
}

function Component34() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="모바일 섹션3_헤더">
      <div className="content-stretch flex flex-col gap-[24px] h-[187px] items-start relative shrink-0 w-[260px]" data-name="글상자_제네럴">
        <Component35 />
        <Component36 />
      </div>
      <div className="h-[180.663px] relative shrink-0 w-[171px]" data-name="이미지">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}

function Component39() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[143px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="섹션3_글내용">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#515151] text-[30px] whitespace-nowrap">
        <p className="leading-[normal]">희망장학사업</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center min-w-full relative shrink-0 text-[#adadad] text-[16px] w-[min-content]">
        <p className="leading-[normal]">잠재력을 개발하고 미래 역량을 키울 수 있는 다양한 프로그램을 운영합니다</p>
      </div>
    </div>
  );
}

function Component43() {
  return (
    <div className="relative size-[16.56px]" data-name="자세히보기_아이콘_기본">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.56 16.56">
        <g id="ìì¸íë³´ê¸°_ìì´ì½_ê¸°ë³¸">
          <path d={svgPaths.p35969670} fill="var(--fill-0, #000064)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component42() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="자세히보기기본">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000064] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">내용을입력</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component43 />
        </div>
      </div>
    </div>
  );
}

function Component41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[19px] items-center min-h-px min-w-px relative" data-name="움직이는텍스트_파란색">
      <Component42 />
    </div>
  );
}

function Component44() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative shrink-0 size-[80px]" data-name="섹션3_아이콘">
      <GraduationCap size={52} strokeWidth={1.5} color="black" />
    </div>
  );
}

function Component40() {
  return (
    <div className="content-end flex flex-wrap gap-0 items-end justify-center relative shrink-0 w-full" data-name="내용을입력,아이콘">
      <Component41 />
      <Component44 />
    </div>
  );
}

function Component38() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="섹션3 내용">
      <div className="content-stretch flex flex-col items-start justify-between px-[24px] relative size-full">
        <Component39 />
        <Component40 />
      </div>
    </div>
  );
}

function Component46() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[143px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="섹션3_글내용">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#515151] text-[30px] whitespace-nowrap">
        <p className="leading-[normal]">연구학술지원사업</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center min-w-full relative shrink-0 text-[#adadad] text-[16px] w-[min-content]">
        <p className="leading-[normal]">혁신적인 연구 활동을 지원하여 과학기술 발전에 기여합니다</p>
      </div>
    </div>
  );
}

function Component50() {
  return (
    <div className="relative size-[16.56px]" data-name="자세히보기_아이콘_기본">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.56 16.56">
        <g id="ìì¸íë³´ê¸°_ìì´ì½_ê¸°ë³¸">
          <path d={svgPaths.p35969670} fill="var(--fill-0, #000064)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component49() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="자세히보기기본">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000064] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">내용을입력</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component50 />
        </div>
      </div>
    </div>
  );
}

function Component48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[19px] items-center min-h-px min-w-px relative" data-name="움직이는텍스트_파란색">
      <Component49 />
    </div>
  );
}

function Component51() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative shrink-0 size-[80px]" data-name="섹션3_아이콘">
      <Atom size={52} strokeWidth={1.5} color="black" />
    </div>
  );
}

function Component47() {
  return (
    <div className="content-end flex flex-wrap gap-0 items-end justify-center relative shrink-0 w-full" data-name="내용을입력,아이콘">
      <Component48 />
      <Component51 />
    </div>
  );
}

function Component45() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="섹션3 내용">
      <div className="content-stretch flex flex-col items-start justify-between px-[24px] relative size-full">
        <Component46 />
        <Component47 />
      </div>
    </div>
  );
}

function Component53() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[143px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="섹션3_글내용">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#515151] text-[30px] whitespace-nowrap">
        <p className="leading-[normal]">나눔문화확산사업</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center min-w-full relative shrink-0 text-[#adadad] text-[16px] w-[min-content]">
        <p className="leading-[normal]">나눔과 봉사의 가치를 확산하여 더 나은 사회를 만들어갑니다</p>
      </div>
    </div>
  );
}

function Component57() {
  return (
    <div className="relative size-[16.56px]" data-name="자세히보기_아이콘_기본">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.56 16.56">
        <g id="ìì¸íë³´ê¸°_ìì´ì½_ê¸°ë³¸">
          <path d={svgPaths.p35969670} fill="var(--fill-0, #000064)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component56() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="자세히보기기본">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000064] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">내용을입력</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component57 />
        </div>
      </div>
    </div>
  );
}

function Component55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[19px] items-center min-h-px min-w-px relative" data-name="움직이는텍스트_파란색">
      <Component56 />
    </div>
  );
}

function Component58() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative shrink-0 size-[80px]" data-name="섹션3_아이콘">
      <Heart size={52} strokeWidth={1.5} color="black" />
    </div>
  );
}

function Component54() {
  return (
    <div className="content-end flex flex-wrap gap-0 items-end justify-center relative shrink-0 w-full" data-name="내용을입력,아이콘">
      <Component55 />
      <Component58 />
    </div>
  );
}

function Component52() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="섹션3 내용">
      <div className="content-stretch flex flex-col items-start justify-between px-[24px] relative size-full">
        <Component53 />
        <Component54 />
      </div>
    </div>
  );
}

function Component60() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[143px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="섹션3_글내용">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#515151] text-[30px] whitespace-nowrap">
        <p className="leading-[normal]">미래인재장학사업</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center min-w-full relative shrink-0 text-[#adadad] text-[16px] w-[min-content]">
        <p className="leading-[normal]">우수한 학생들에게 장학금을 지원하여 학업에 전념할 수 있는 환경을 조성합니다</p>
      </div>
    </div>
  );
}

function Component64() {
  return (
    <div className="relative size-[16.56px]" data-name="자세히보기_아이콘_기본">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.56 16.56">
        <g id="ìì¸íë³´ê¸°_ìì´ì½_ê¸°ë³¸">
          <path d={svgPaths.p35969670} fill="var(--fill-0, #000064)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component63() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="자세히보기기본">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000064] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">내용을입력</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component64 />
        </div>
      </div>
    </div>
  );
}

function Component62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[19px] items-center min-h-px min-w-px relative" data-name="움직이는텍스트_파란색">
      <Component63 />
    </div>
  );
}

function Component65() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative shrink-0 size-[80px]" data-name="섹션3_아이콘">
      <Lightbulb size={52} strokeWidth={1.5} color="black" />
    </div>
  );
}

function Component61() {
  return (
    <div className="content-end flex flex-wrap gap-0 items-end justify-center relative shrink-0 w-full" data-name="내용을입력,아이콘">
      <Component62 />
      <Component65 />
    </div>
  );
}

function Component59() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="섹션3 내용">
      <div className="content-stretch flex flex-col items-start justify-between px-[24px] relative size-full">
        <Component60 />
        <Component61 />
      </div>
    </div>
  );
}

function Component37() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(4,fit-content(100%))] relative shrink-0 w-full" data-name="섹션3_이미지상자모음">
      <div className="bg-white col-1 h-[229px] justify-self-stretch relative rounded-bl-[32px] row-2 shrink-0" data-name="섹션3_이미지상자">
        <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-end justify-center px-[16px] py-[32px] relative size-full">
            <Component38 />
          </div>
        </div>
      </div>
      <div className="bg-white col-1 h-[229px] justify-self-stretch relative rounded-bl-[32px] row-3 shrink-0" data-name="섹션3_이미지상자">
        <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-end justify-center px-[16px] py-[32px] relative size-full">
            <Component45 />
          </div>
        </div>
      </div>
      <div className="bg-white col-1 h-[229px] justify-self-stretch relative rounded-bl-[32px] row-4 shrink-0" data-name="섹션3_이미지상자">
        <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-end justify-center px-[16px] py-[32px] relative size-full">
            <Component52 />
          </div>
        </div>
      </div>
      <div className="bg-white col-1 h-[229px] justify-self-stretch relative rounded-bl-[32px] row-1 shrink-0" data-name="섹션3_이미지상자">
        <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-end justify-center px-[16px] py-[32px] relative size-full">
            <Component59 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="bg-[#f5f5ff] relative shrink-0 w-full z-[3]" data-name="섹션3">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[32px] py-[64px] relative w-full">
          <Component34 />
          <Component37 />
        </div>
      </div>
    </div>
  );
}

function Component67() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="글묶음1">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center min-w-full relative shrink-0 text-[#3232c8] text-[16px] w-[min-content]">
        <p className="leading-[normal]">{`News & Notice`}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[36px] text-black whitespace-nowrap">
        <p className="leading-[normal]">소식과 공지</p>
      </div>
    </div>
  );
}

function Component68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="글묶음2">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#515151] text-[16px]">
        <p className="leading-[normal]">재단의 새로운 소식과 공지사항을 확인하세요</p>
      </div>
    </div>
  );
}

function Component72() {
  return (
    <div className="relative size-[16.56px]" data-name="자세히보기_아이콘_기본">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.56 16.56">
        <g id="ìì¸íë³´ê¸°_ìì´ì½_ê¸°ë³¸">
          <path d={svgPaths.p35969670} fill="var(--fill-0, #000064)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component71() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="자세히보기기본">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000064] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">더보기</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component72 />
        </div>
      </div>
    </div>
  );
}

function Component70() {
  return (
    <div className="content-stretch flex gap-[151px] h-[50px] items-center justify-center relative shrink-0 w-full" data-name="공지사항머리글">
      <div aria-hidden="true" className="absolute border-[#adadad] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard:SemiBold',sans-serif] h-[50px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[26px] text-black">
        <p className="leading-[normal]">공지사항</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="움직이는텍스트_파란색">
        <Component71 />
      </div>
    </div>
  );
}

function Component74() {
  return (
    <div className="bg-[#facc4d] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="장학내용">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">장학</p>
      </div>
    </div>
  );
}

function Component73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px overflow-clip relative" data-name="장학내용글">
      <Component74 />
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#515151] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden text-ellipsis">2026년 (재)해안재단 제1기 장학생 선발</p>
      </div>
    </div>
  );
}

function Component76() {
  return (
    <div className="bg-[#facc4d] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="장학내용">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">장학</p>
      </div>
    </div>
  );
}

function Component75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px overflow-clip relative" data-name="장학내용글">
      <Component76 />
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#515151] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden text-ellipsis">2026년 (재)혜안재단 제1기 장학생 서류</p>
      </div>
    </div>
  );
}

function Component78() {
  return (
    <div className="bg-[#facc4d] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="장학내용">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">장학</p>
      </div>
    </div>
  );
}

function Component77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px overflow-clip relative" data-name="장학내용글">
      <Component78 />
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#515151] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden text-ellipsis">2026년 (재)혜안재단 제1기 장학생 선발</p>
      </div>
    </div>
  );
}

function Component69() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="섹션_4미들">
      <div className="h-[52px] relative rounded-[8px] shrink-0 w-full" data-name="게시물이 없습니다 상자">
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
            <div className="flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#515151] text-[16px]">
              <p className="leading-[normal]">게시물이 없습니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="공지사항칸">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
            <Component70 />
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="공지사항란">
              <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full" data-name="장학내용">
                <p className="font-['Pretendard:Medium',sans-serif] h-[27px] leading-[normal] not-italic relative shrink-0 text-[#e6e6e6] text-[16px] text-center w-[5px]">.</p>
                <Component73 />
                <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#adadad] text-[16px] whitespace-nowrap">
                  <p className="leading-[normal]">2026.03.24</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full" data-name="장학내용">
                <p className="font-['Pretendard:Medium',sans-serif] h-[27px] leading-[normal] not-italic relative shrink-0 text-[#e6e6e6] text-[16px] text-center w-[5px]">.</p>
                <Component75 />
                <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#adadad] text-[16px] whitespace-nowrap">
                  <p className="leading-[normal]">2026.03.17</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full" data-name="장학내용">
                <p className="font-['Pretendard:Medium',sans-serif] h-[27px] leading-[normal] not-italic relative shrink-0 text-[#e6e6e6] text-[16px] text-center w-[5px]">.</p>
                <Component77 />
                <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#adadad] text-[16px] whitespace-nowrap">
                  <p className="leading-[normal]">2026.02.20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Component79() {
  return (
    <div className="bg-[#fffefe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[4px] w-full" data-name="메뉴내용이미지">
      <div className="absolute h-[60px] left-[10px] top-[9px] w-[80px]" data-name="섹션_4아이콘">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[50px] left-1/2 top-1/2 w-[40px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 50">
            <path d={svgPaths.p30d7fef0} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.6667 70.6667">
          <g id="Group">
            <path d={svgPaths.p19885780} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d="M2 35.3333H68.6667" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p2762b280} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p326d4470} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component80() {
  return (
    <div className="bg-[#fffefe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[4px] w-full" data-name="메뉴내용이미지">
      <div className="absolute h-[60px] left-[10px] top-[9px] w-[80px]" data-name="섹션_4아이콘">
        <Group5 />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-3%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.3333 70.6667">
          <g id="Group">
            <path d={svgPaths.paa46b80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="4" />
            <path d={svgPaths.p22783640} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="4" />
            <path d={svgPaths.p2ab8c9c0} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component81() {
  return (
    <div className="bg-[#fffefe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[4px] w-full" data-name="메뉴내용이미지">
      <div className="absolute h-[60px] left-[10px] top-[9px] w-[80px]" data-name="섹션_4아이콘">
        <Group6 />
      </div>
    </div>
  );
}

function Component82() {
  return (
    <div className="bg-[#fffefe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[4px] w-full" data-name="메뉴내용이미지">
      <div className="absolute h-[60px] left-[10px] top-[9px] w-[80px]" data-name="섹션_4아이콘">
        <div className="absolute inset-[5.21%_5.21%_5.2%_5.21%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.6667 71.67">
            <path clipRule="evenodd" d={svgPaths.p3a03b80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[41.67%] left-[22.92%] right-[39.58%] top-1/2" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 6.66667">
            <path d={svgPaths.p2f67ac00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component66() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="애니메이션_섹션4">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[32px] relative w-full">
          <div className="content-stretch flex flex-col gap-[24px] h-[187px] items-start relative shrink-0 w-full" data-name="글상자_제네럴">
            <Component67 />
            <Component68 />
          </div>
          <Component69 />
          <div className="bg-[#deeff9] relative rounded-[8px] shrink-0 w-full" data-name="하단메뉴">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start justify-between p-[24px] relative w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 size-[100px]" data-name="메뉴내용">
                  <Component79 />
                  <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center w-full">
                    <p className="leading-[normal]">장학금 신청</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 size-[100px]" data-name="메뉴내용">
                  <Component80 />
                  <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center w-full">
                    <p className="leading-[normal]">주요사업</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 size-[100px]" data-name="메뉴내용">
                  <Component81 />
                  <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center w-full">
                    <p className="leading-[normal]">자주묻는질문</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 size-[100px]" data-name="메뉴내용">
                  <Component82 />
                  <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center w-full">
                    <p className="leading-[normal]">문의하기</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component84() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="경기도교육청모음">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#515151] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">모작을</p>
      </div>
    </div>
  );
}

function Component85() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="국세청모음">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#515151] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">하였음을 밝힘.</p>
      </div>
    </div>
  );
}

function Component83() {
  return (
    <div className="relative shrink-0 w-full" data-name="하단글_모음">
      <div aria-hidden="true" className="absolute border-[#adadad] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[47px] items-center justify-center px-[47px] py-[16px] relative w-full">
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
            <p className="leading-[normal]">이 사이트는 학업 목적으로</p>
          </div>
          <Component84 />
          <Component85 />
        </div>
      </div>
    </div>
  );
}

export default function Tablet() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] isolate items-center py-[16px] relative size-full" data-name="Tablet">
      <Component />
      <div className="content-center flex flex-wrap gap-[0px_16px] h-[440px] items-center justify-center overflow-clip px-[24px] relative rounded-bl-[32px] rounded-br-[32px] shrink-0 w-[768px] z-[7]" data-name="상단메뉴캐러셀">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[32px] rounded-br-[32px] size-full" src={img} />
        <Component6 />
        <Component8 />
        <div className="content-stretch flex gap-[30px] items-center justify-center px-[36px] relative shrink-0" data-name="플레이팝업창">
          <Component9 />
          <Component12 />
        </div>
      </div>
      <Component13 />
      <Component25 />
      <Component29 />
      <Component33 />
      <Component66 />
      <div className="bg-[#e6e6e6] content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full z-[1]" data-name="스폰서들">
        <Component83 />
        <button className="content-stretch cursor-pointer flex font-['Pretendard:Medium',sans-serif] gap-[8px] items-center justify-center leading-[0] not-italic p-[8px] relative shrink-0 text-[#515151] text-[16px] text-left whitespace-nowrap" data-name="관련사이트 보이기">
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="leading-[normal]">관련 사이트 바로가기</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="leading-[normal]">▼</p>
          </div>
        </button>
      </div>
    </div>
  );
}