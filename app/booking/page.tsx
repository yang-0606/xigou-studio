export default function BookingPage() {
  return (
    <main className="bg-[#FCFBFE] px-6 py-20 text-[#2F2A3A]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#8B7AA8]">
          Booking
        </p>

        <h1 className="mb-6 text-4xl font-bold text-[#4B3F72] md:text-5xl">
          預約諮詢
        </h1>

        <p className="mb-10 text-base leading-8 text-[#5B5565] md:text-lg">
          歡迎透過此頁面預約初步諮詢，讓我們更了解孩子目前的學習需求、
          家長期待與可能適合的支持方式。此頁目前為展示版本，之後可再串接正式表單與資料庫。
        </p>

        <div className="rounded-3xl border border-[#E8E1F3] bg-white p-8 shadow-sm">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="家長姓名"
              className="w-full rounded-xl border border-[#D8D0E8] px-4 py-3 outline-none focus:border-[#8B7AA8]"
            />
            <input
              type="text"
              placeholder="學生姓名"
              className="w-full rounded-xl border border-[#D8D0E8] px-4 py-3 outline-none focus:border-[#8B7AA8]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-[#D8D0E8] px-4 py-3 outline-none focus:border-[#8B7AA8]"
            />
            <input
              type="tel"
              placeholder="聯絡電話"
              className="w-full rounded-xl border border-[#D8D0E8] px-4 py-3 outline-none focus:border-[#8B7AA8]"
            />
            <textarea
              rows={6}
              placeholder="請簡單描述孩子目前的學習狀況或想諮詢的內容"
              className="w-full rounded-xl border border-[#D8D0E8] px-4 py-3 outline-none focus:border-[#8B7AA8]"
            />
            <button
              type="submit"
              className="rounded-full bg-[#4B3F72] px-6 py-3 text-white transition hover:bg-[#3D325D]"
            >
              送出預約
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}