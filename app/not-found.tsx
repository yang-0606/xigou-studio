import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#FCFBFE] px-6 py-20 text-[#2F2A3A]">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#8B7AA8]">
          404
        </p>

        <h1 className="mb-6 text-4xl font-bold text-[#4B3F72] md:text-5xl">
          找不到這個頁面
        </h1>

        <p className="mb-10 text-base leading-8 text-[#5B5565] md:text-lg">
          你造訪的頁面可能不存在、已被移動，或網址輸入錯誤。
          <br />
          你可以回到首頁，繼續瀏覽希構整合工作室的內容。
        </p>

        <Link
          href="/"
          className="inline-block rounded-full bg-[#4B3F72] px-8 py-3 text-white transition hover:bg-[#3D325D]"
        >
          回到首頁
        </Link>
      </div>
    </main>
  );
}