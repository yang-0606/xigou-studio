import Link from "next/link";

const quickLinks = [
  {
    title: "共同行事曆",
    description: "查看所有工作夥伴的排程、會議與課務安排。",
    href: "/partner-calendar",
  },
  {
    title: "我的排程",
    description: "查看自己的課程、會談與工作任務。",
    href: "/partner-calendar",
  },
  {
    title: "家長預約",
    description: "整理家長諮詢、追蹤回覆與時段安排。",
    href: "#",
  },
  {
    title: "教學紀錄",
    description: "管理學生紀錄、課後摘要與後續追蹤。",
    href: "#",
  },
];

const todayItems = [
  { time: "09:00 - 10:00", title: "個別學習策略討論", person: "王老師" },
  { time: "11:00 - 12:00", title: "家長諮詢會談", person: "陳老師" },
  { time: "14:00 - 15:30", title: "跨專業合作會議", person: "全體夥伴" },
  { time: "16:00 - 17:00", title: "學生課後追蹤整理", person: "Amy" },
];

export default function PartnerDashboardPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#F8F6F1_0%,#F2EEE7_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[32px] bg-[linear-gradient(135deg,#17204B_0%,#232B5B_55%,#2E336C_100%)] p-8 text-[#F8F0DD] shadow-[0_20px_60px_rgba(17,24,58,0.22)] lg:p-10">
          <p className="text-sm uppercase tracking-[0.34em] text-[#DCC38F]">
            PARTNER DASHBOARD
          </p>

          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-[0.06em] sm:text-4xl">
                工作夥伴後台首頁
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#E7DEC8]/90 sm:text-base">
                這裡是內部工作平台首頁，可快速進入共同行事曆、查看今日任務，
                並掌握工作夥伴之間的排程協作。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/partner-calendar"
                className="rounded-full bg-[linear-gradient(180deg,#FFF8ED_0%,#F4E8D7_100%)] px-5 py-3 text-sm font-semibold tracking-[0.12em] text-[#2D2B4A] shadow-[0_6px_18px_rgba(216,192,143,0.18)] transition hover:-translate-y-[1px]"
              >
                進入共同行事曆
              </Link>

              <Link
                href="/partner-login"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium tracking-[0.12em] text-[#F8F0DD] transition hover:bg-white/10"
              >
                返回登入頁
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[#E8DECC] bg-white/90 p-6 shadow-[0_12px_36px_rgba(34,31,68,0.08)]">
            <p className="text-sm uppercase tracking-[0.28em] text-[#9D8C69]">
              QUICK ACCESS
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#2A2A4A]">
              常用入口
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-[24px] border border-[#EEE6D8] bg-[#FCFAF7] p-5 transition hover:-translate-y-[2px] hover:shadow-[0_12px_24px_rgba(60,52,96,0.08)]"
                >
                  <h3 className="text-lg font-semibold text-[#312E54]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6A6680]">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#E8DECC] bg-white/90 p-6 shadow-[0_12px_36px_rgba(34,31,68,0.08)]">
            <p className="text-sm uppercase tracking-[0.28em] text-[#9D8C69]">
              TODAY OVERVIEW
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#2A2A4A]">
              今日摘要
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl bg-[#F6F1E8] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[#9B875A]">
                  Today Events
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#2E2A4E]">4</p>
              </div>

              <div className="rounded-2xl bg-[#F3EFFB] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[#7B6FA6]">
                  Team On Duty
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#2E2A4E]">3</p>
              </div>

              <div className="rounded-2xl bg-[#EEF5F1] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[#5E8C74]">
                  Pending Follow-up
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#2E2A4E]">2</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border border-[#E8DECC] bg-white/90 p-6 shadow-[0_12px_36px_rgba(34,31,68,0.08)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#9D8C69]">
                TODAY SCHEDULE
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#2A2A4A]">
                今日行程
              </h2>
            </div>

            <Link
              href="/partner-calendar"
              className="text-sm font-medium text-[#7D6540] transition hover:text-[#5F4A2F]"
            >
              查看完整行事曆 →
            </Link>
          </div>

          <div className="mt-6 grid gap-4">
            {todayItems.map((item) => (
              <div
                key={`${item.time}-${item.title}`}
                className="flex flex-col gap-3 rounded-[22px] border border-[#EFE6D8] bg-[#FCFAF7] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-[#312E54]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-[#6D6881]">{item.person}</p>
                </div>

                <div className="rounded-full bg-[#F1E9DC] px-4 py-2 text-sm font-medium text-[#6D5B3E]">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}