import Link from "next/link";

export default function PartnerLoginPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#F8F6F1_0%,#F3EFE8_100%)] px-4 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 lg:flex-row lg:items-stretch">
        <section className="flex flex-1 flex-col justify-center rounded-[32px] bg-[linear-gradient(180deg,#18204A_0%,#232B5C_100%)] p-8 text-[#F8F0DD] shadow-[0_18px_60px_rgba(17,24,58,0.24)] lg:p-12">
          <p className="text-sm uppercase tracking-[0.38em] text-[#DCC38F]">
            PARTNER ACCESS
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[0.08em] sm:text-4xl">
            工作夥伴登入
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#E7DEC8]/90 sm:text-base">
            進入希構整合工作室內部工作平台，查看共同行事曆、課務安排、
            家長預約與每日工作摘要。
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[#DCC38F]">
                Schedule
              </p>
              <p className="mt-2 text-sm text-[#F8F0DD]">共同行事曆總覽</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[#DCC38F]">
                Partner
              </p>
              <p className="mt-2 text-sm text-[#F8F0DD]">員工排程與任務</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[#DCC38F]">
                Support
              </p>
              <p className="mt-2 text-sm text-[#F8F0DD]">家長預約與紀錄</p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-xl rounded-[32px] border border-[#E6D8BC] bg-white/90 p-8 shadow-[0_18px_60px_rgba(44,40,80,0.10)] backdrop-blur lg:p-10">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.32em] text-[#9D8C69]">
              XIGOU STUDIO
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[0.05em] text-[#2A2A4A]">
              夥伴登入入口
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#66627A]">
              第一版先完成介面與入口，後續可再接 Supabase / Firebase /
              自訂登入驗證。
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#3A3758]"
              >
                帳號 / Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-2xl border border-[#DDD4C3] bg-[#FCFAF6] px-4 py-3 text-[#2A2A4A] outline-none transition placeholder:text-[#A8A0B2] focus:border-[#B79B63] focus:ring-2 focus:ring-[#D9C08C]/30"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#3A3758]"
              >
                密碼
              </label>
              <input
                id="password"
                type="password"
                placeholder="請輸入密碼"
                className="w-full rounded-2xl border border-[#DDD4C3] bg-[#FCFAF6] px-4 py-3 text-[#2A2A4A] outline-none transition placeholder:text-[#A8A0B2] focus:border-[#B79B63] focus:ring-2 focus:ring-[#D9C08C]/30"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-full bg-[linear-gradient(180deg,#4F4386_0%,#3F376E_100%)] px-5 py-3 text-sm font-semibold tracking-[0.12em] text-white shadow-[0_10px_24px_rgba(79,67,134,0.26)] transition hover:-translate-y-[1px]"
            >
              登入工作平台
            </button>
          </form>

          <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-[#6B6482] transition hover:text-[#2A2A4A]">
              ← 返回首頁
            </Link>

            <Link
              href="/partner-dashboard"
              className="text-[#8D7444] transition hover:text-[#6F5931]"
            >
              先看後台首頁示意 →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}