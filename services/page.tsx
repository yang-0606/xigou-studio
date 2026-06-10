const services = [
  {
    title: "個別化教學",
    description: "依學生學習狀況與需求，調整授課內容與進度。",
  },
  {
    title: "學習策略規劃",
    description: "建立時間管理、筆記整理與自主學習方法。",
  },
  {
    title: "家長合作",
    description: "與家長保持溝通，共同支持孩子的學習與情緒需求。",
  },
  {
    title: "跨專業合作",
    description: "可與治療師、諮商師、教師協作，提供更完整支持。",
  },
];

export default function ServicesPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#8B7AA8]">
          Services
        </p>
        <h1 className="mb-10 text-4xl font-bold text-[#4B3F72] md:text-5xl">
          服務項目
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-[#E8E1F3] bg-white p-8 shadow-sm"
            >
              <h2 className="mb-4 text-2xl font-semibold text-[#4B3F72]">
                {service.title}
              </h2>
              <p className="leading-7 text-[#5B5565]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}