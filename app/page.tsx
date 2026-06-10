import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "個別化教學",
      description:
        "依據學生需求調整課程內容與教學方式，讓孩子用適合自己的步調學習。",
    },
    {
      title: "學習策略規劃",
      description:
        "協助學生建立時間管理、筆記整理與自主學習能力，提升學習效率與穩定度。",
    },
    {
      title: "家長合作",
      description:
        "重視家庭溝通與親職合作，讓支持不只停留在課堂中，也能延伸到日常生活。",
    },
    {
      title: "跨專業合作",
      description:
        "可與教師、治療師及諮商師合作，整合多方觀點，共同支持孩子成長。",
    },
  ];

  const characters = [
    {
      name: "蒼（Aoi）",
      description:
        "象徵結構、規劃與邏輯，代表孩子逐步建立穩定學習架構的能力。",
    },
    {
      name: "紬希（Tsumugi）",
      description:
        "象徵理解、同理與陪伴，代表支持與理解孩子成長歷程的重要力量。",
    },
  ];

  return (
    <main className="bg-white text-[#2F2A3A]">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#8B7AA8]">
          XIGOU Studio
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-[#4B3F72] md:text-6xl">
          希構整合工作室
        </h1>

        <p className="mb-4 text-lg font-semibold text-[#6D5F8C] md:text-2xl">
          學科 × 學習策略 × 跨專業合作
        </p>

        <p className="mb-10 max-w-3xl text-base leading-8 text-[#5B5565] md:text-lg">
          我們相信，每個孩子都有屬於自己的學習方式。
          <br />
          希構整合工作室陪伴孩子在理解、結構與支持中，逐步建立自信與自主學習能力。
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-[#4B3F72] px-8 py-3 text-white transition hover:bg-[#3D325D]"
          >
            立即諮詢
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-[#CFC4E8] px-8 py-3 text-[#4B3F72] transition hover:bg-[#F8F7FB]"
          >
            了解服務
          </Link>
        </div>
      </section>

      <section className="bg-[#F8F7FB] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#4B3F72] md:text-4xl">
            為什麼成立希構？
          </h2>
          <p className="text-base leading-8 text-[#5B5565] md:text-lg">
            希構整合工作室成立的初衷，是希望提供一個兼顧學科能力、學習策略與跨專業合作的支持環境。
            我們相信，學習不只是把題目寫完，更重要的是找到適合自己的方法。
            透過與家長、學校、治療師及諮商師的合作，協助孩子逐步建立自信與自主學習能力。
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#4B3F72] md:text-4xl">
              服務特色
            </h2>
            <p className="text-[#6B6577]">
              從學科支持到學習方法建立，提供溫暖而專業的整合式陪伴。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-[#E8E1F3] bg-white p-8 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-semibold text-[#4B3F72]">
                  {feature.title}
                </h3>
                <p className="leading-7 text-[#5B5565]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FCFBFE] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#4B3F72] md:text-4xl">
              品牌角色
            </h2>
            <p className="text-[#6B6577]">
              透過角色形象傳達希構對孩子成長歷程的理解與支持。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {characters.map((character) => (
              <div
                key={character.name}
                className="rounded-3xl bg-[#F8F4FC] p-8 text-center"
              >
                <h3 className="mb-4 text-2xl font-semibold text-[#4B3F72]">
                  {character.name}
                </h3>
                <p className="leading-7 text-[#5B5565]">
                  {character.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#4B3F72] px-8 py-16 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            立即預約諮詢
          </h2>
          <p className="mb-8 text-base leading-8 text-[#EFEAF8] md:text-lg">
            如果你正在尋找適合孩子的學習支持方式，歡迎與我們聯繫，
            一起找到更貼近需求的陪伴與規劃。
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-3 font-medium text-[#4B3F72] transition hover:bg-[#F5F2FA]"
          >
            前往聯絡我們
          </Link>
        </div>
      </section>
    </main>
  );
}