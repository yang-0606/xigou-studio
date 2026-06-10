const services = [
  {
    title: "個別化教學",
    description:
      "依據學生的學科程度、理解特性與學習需求，調整課程內容與教學節奏，提供更貼近孩子狀態的學習支持。",
  },
  {
    title: "學習策略規劃",
    description:
      "協助學生建立時間管理、筆記整理、段考規劃與自主學習方法，讓學習不只停留在完成作業，而是逐步形成穩定的策略。",
  },
  {
    title: "家長合作",
    description:
      "透過定期溝通與回饋，幫助家長理解孩子的學習狀態與支持方向，建立更一致的陪伴方式。",
  },
  {
    title: "跨專業合作",
    description:
      "可視需求與學校教師、治療師、諮商師等專業人員合作，讓孩子獲得更完整且一致的支持。",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#FCFBFE] px-6 py-20 text-[#2F2A3A]">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#8B7AA8]">
          Services
        </p>

        <h1 className="mb-6 text-4xl font-bold text-[#4B3F72] md:text-5xl">
          服務項目
        </h1>

        <p className="mb-12 max-w-3xl text-base leading-8 text-[#5B5565] md:text-lg">
          希構整合工作室提供以孩子為中心的整合式支持，
          從學科能力、學習方法到家庭與跨專業合作，協助孩子找到更適合自己的學習路徑。
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-[#E8E1F3] bg-white p-8 shadow-sm"
            >
              <h2 className="mb-4 text-2xl font-semibold text-[#4B3F72]">
                {service.title}
              </h2>
              <p className="leading-8 text-[#5B5565]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}