export default function ContactPage() {
  return (
    <main className="bg-white px-6 py-20 text-[#2F2A3A]">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#8B7AA8]">
          Contact
        </p>

        <h1 className="mb-6 text-4xl font-bold text-[#4B3F72] md:text-5xl">
          聯絡我們
        </h1>

        <p className="mb-12 max-w-3xl text-base leading-8 text-[#5B5565] md:text-lg">
          如果你想了解更多服務內容，或想討論孩子目前的學習狀況，
          歡迎透過以下方式與我們聯繫，我們會盡快回覆你。
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-[#F8F7FB] p-8">
            <h2 className="mb-6 text-2xl font-semibold text-[#4B3F72]">
              聯絡資訊
            </h2>

            <ul className="space-y-4 text-[#5B5565]">
              <li>Email：service@xigoustudio.com</li>
              <li>Instagram：@xigou_studio.2026</li>
              <li>Facebook：希構整合工作室</li>
              <li>官方 LINE：@829hsymw</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#E8E1F3] bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-[#4B3F72]">
              聯絡表單（展示版）
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="您的姓名"
                className="w-full rounded-xl border border-[#D8D0E8] px-4 py-3 outline-none focus:border-[#8B7AA8]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-[#D8D0E8] px-4 py-3 outline-none focus:border-[#8B7AA8]"
              />
              <textarea
                placeholder="想和我們說的內容"
                rows={5}
                className="w-full rounded-xl border border-[#D8D0E8] px-4 py-3 outline-none focus:border-[#8B7AA8]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#4B3F72] px-6 py-3 text-white transition hover:bg-[#3D325D]"
              >
                送出訊息
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}