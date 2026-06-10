export default function Footer() {
  return (
    <footer className="border-t border-[#EAE4F4] bg-[#FCFBFE]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-bold text-[#4B3F72]">
            希構整合工作室
          </h3>
          <p className="text-sm leading-7 text-[#5B5565]">
            學科 × 學習策略 × 跨專業合作
            <br />
            陪伴孩子找到屬於自己的學習方式。
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-[#4B3F72]">網站導覽</h4>
          <ul className="space-y-2 text-sm text-[#5B5565]">
            <li>
              <a href="/">首頁</a>
            </li>
            <li>
              <a href="/about">關於我們</a>
            </li>
            <li>
              <a href="/services">服務項目</a>
            </li>
            <li>
              <a href="/contact">聯絡我們</a>
            </li>
            <li>
              <a href="/privacy">隱私權政策</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-[#4B3F72]">聯絡資訊</h4>
          <ul className="space-y-2 text-sm text-[#5B5565]">
            <li>Email：service@xigoustudio.com</li>
            <li>Instagram：@xigou_studio.2026</li>
            <li>Facebook：希構整合工作室</li>
            <li>官方 LINE：請稍後補上連結</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#EAE4F4] px-6 py-4 text-center text-sm text-[#7B7488]">
        © 2026 XIGOU Studio. All rights reserved.
      </div>
    </footer>
  );
}