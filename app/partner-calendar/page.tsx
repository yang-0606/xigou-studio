"use client";

import { Fragment, useMemo, useState } from "react";
import Link from "next/link";

const teamMembers = [
  { name: "全部夥伴", color: "bg-[#D8C08F]" },
  { name: "王老師", color: "bg-[#6C8DFF]" },
  { name: "陳老師", color: "bg-[#F29DB2]" },
  { name: "Amy", color: "bg-[#73C6A1]" },
];

const teacherColorMap: Record<string, string> = {
  王老師: "bg-[#6C8DFF]",
  陳老師: "bg-[#F29DB2]",
  Amy: "bg-[#73C6A1]",
  全體夥伴: "bg-[#D8C08F]",
};

const eventTypeStyleMap: Record<string, { bg: string; border: string }> = {
  上課: {
    bg: "bg-[#EEF2FF]",
    border: "border-[#7D8DFF]",
  },
  家長諮詢: {
    bg: "bg-[#FFF0F4]",
    border: "border-[#E8A1B5]",
  },
  會議: {
    bg: "bg-[#FBF6EA]",
    border: "border-[#D8C08F]",
  },
  行政工作: {
    bg: "bg-[#F4F0FF]",
    border: "border-[#9B8FC8]",
  },
};

const eventTypes = [
  { name: "全部類型", color: "bg-[#D8C08F]" },
  { name: "上課", color: "bg-[#7D8DFF]" },
  { name: "家長諮詢", color: "bg-[#E8A1B5]" },
  { name: "會議", color: "bg-[#D8C08F]" },
  { name: "行政工作", color: "bg-[#9B8FC8]" },
];

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const weekDays = [
  { day: "Mon", date: "06/03", fullDate: "2026-06-03" },
  { day: "Tue", date: "06/04", fullDate: "2026-06-04" },
  { day: "Wed", date: "06/05", fullDate: "2026-06-05" },
  { day: "Thu", date: "06/06", fullDate: "2026-06-06" },
  { day: "Fri", date: "06/07", fullDate: "2026-06-07" },
];

type CalendarEvent = {
  id: string;
  day: string;
  date: string;
  fullDate: string;
  start: string;
  end: string;
  title: string;
  time: string;
  teacher: string;
  type: string;
  bg: string;
  border: string;
  teacherDot: string;
  location?: string;
  notes?: string;
};

const initialEvents: CalendarEvent[] = [
  {
    id: "event-1",
    day: "Mon",
    date: "06/03",
    fullDate: "2026-06-03",
    start: "09:00",
    end: "10:00",
    title: "個別學習策略",
    time: "09:00 - 10:00",
    teacher: "王老師",
    type: "上課",
    bg: "bg-[#EEF2FF]",
    border: "border-[#7D8DFF]",
    teacherDot: "bg-[#6C8DFF]",
  },
  {
    id: "event-2",
    day: "Mon",
    date: "06/03",
    fullDate: "2026-06-03",
    start: "11:00",
    end: "12:00",
    title: "家長諮詢",
    time: "11:00 - 12:00",
    teacher: "陳老師",
    type: "家長諮詢",
    bg: "bg-[#FFF0F4]",
    border: "border-[#E8A1B5]",
    teacherDot: "bg-[#F29DB2]",
  },
  {
    id: "event-3",
    day: "Tue",
    date: "06/04",
    fullDate: "2026-06-04",
    start: "14:00",
    end: "15:30",
    title: "跨專業合作會議",
    time: "14:00 - 15:30",
    teacher: "全體夥伴",
    type: "會議",
    bg: "bg-[#FBF6EA]",
    border: "border-[#D8C08F]",
    teacherDot: "bg-[#D8C08F]",
  },
  {
    id: "event-4",
    day: "Wed",
    date: "06/05",
    fullDate: "2026-06-05",
    start: "16:00",
    end: "17:00",
    title: "學生課後追蹤",
    time: "16:00 - 17:00",
    teacher: "Amy",
    type: "行政工作",
    bg: "bg-[#F4F0FF]",
    border: "border-[#9B8FC8]",
    teacherDot: "bg-[#73C6A1]",
  },
];

type FormState = {
  title: string;
  date: string;
  type: string;
  start: string;
  end: string;
  teacher: string;
  location: string;
  notes: string;
};

const initialFormState: FormState = {
  title: "",
  date: "2026-06-03",
  type: "",
  start: "",
  end: "",
  teacher: "",
  location: "",
  notes: "",
};

export default function PartnerCalendarPage() {
  const [openModal, setOpenModal] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);
  const [form, setForm] = useState<FormState>(initialFormState);
  const [selectedMember, setSelectedMember] = useState("全部夥伴");
  const [selectedType, setSelectedType] = useState("全部類型");
  const [editingEventId, setEditingEventId] = useState<string | null>(null);

  const weekdayMap = useMemo(
    () => ({
      "2026-06-03": { day: "Mon", date: "06/03" },
      "2026-06-04": { day: "Tue", date: "06/04" },
      "2026-06-05": { day: "Wed", date: "06/05" },
      "2026-06-06": { day: "Thu", date: "06/06" },
      "2026-06-07": { day: "Fri", date: "06/07" },
    }),
    []
  );

  const visibleEvents = events.filter((event) => {
    const matchMember =
      selectedMember === "全部夥伴" || event.teacher === selectedMember;

    const matchType =
      selectedType === "全部類型" || event.type === selectedType;

    return matchMember && matchType;
  });

  function updateForm<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function resetForm() {
    setForm(initialFormState);
    setEditingEventId(null);
  }

  function openCreateModal() {
    resetForm();
    setOpenModal(true);
  }

  function openEditModal(event: CalendarEvent) {
    setEditingEventId(event.id);
    setForm({
      title: event.title,
      date: event.fullDate,
      type: event.type,
      start: event.start,
      end: event.end,
      teacher: event.teacher,
      location: event.location || "",
      notes: event.notes || "",
    });
    setOpenModal(true);
  }

  function buildEventFromForm(eventId: string): CalendarEvent | null {
    if (
      !form.title ||
      !form.date ||
      !form.type ||
      !form.start ||
      !form.end ||
      !form.teacher
    ) {
      alert("請先填寫完整的事件標題、日期、類型、時間與負責夥伴。");
      return null;
    }

    const matchedDate = weekdayMap[form.date as keyof typeof weekdayMap];

    if (!matchedDate) {
      alert("目前第一版週視圖只支援 2026/06/03 ～ 2026/06/07 的日期。");
      return null;
    }

    const typeStyle = eventTypeStyleMap[form.type] || {
      bg: "bg-[#F5F1EA]",
      border: "border-[#D9CCB2]",
    };

    const teacherDot = teacherColorMap[form.teacher] || "bg-[#D8C08F]";

    return {
      id: eventId,
      day: matchedDate.day,
      date: matchedDate.date,
      fullDate: form.date,
      start: form.start,
      end: form.end,
      title: form.title,
      time: `${form.start} - ${form.end}`,
      teacher: form.teacher,
      type: form.type,
      bg: typeStyle.bg,
      border: typeStyle.border,
      teacherDot,
      location: form.location,
      notes: form.notes,
    };
  }

  function handleSaveEvent() {
    if (editingEventId) {
      const updatedEvent = buildEventFromForm(editingEventId);
      if (!updatedEvent) return;

      setEvents((prev) =>
        prev.map((event) => (event.id === editingEventId ? updatedEvent : event))
      );
    } else {
      const newEvent = buildEventFromForm(`event-${Date.now()}`);
      if (!newEvent) return;

      setEvents((prev) => [...prev, newEvent]);
    }

    setOpenModal(false);
    resetForm();
  }

  function handleDeleteEvent(targetEvent: CalendarEvent) {
    const confirmed = window.confirm(`要刪除「${targetEvent.title}」嗎？`);

    if (!confirmed) return;

    setEvents((prev) => prev.filter((event) => event.id !== targetEvent.id));
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#F8F6F1_0%,#F2EEE7_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[32px] bg-[linear-gradient(135deg,#17204B_0%,#232B5B_55%,#2E336C_100%)] p-8 text-[#F8F0DD] shadow-[0_20px_60px_rgba(17,24,58,0.22)] lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.34em] text-[#DCC38F]">
                SHARED CALENDAR
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-[0.06em] sm:text-4xl">
                共同行事曆
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#E7DEC8]/90 sm:text-base">
                第一版先建立共用排程介面骨架，包含夥伴顏色、事件類型、
                週檢視與時間表概念，後續再接資料庫與新增 / 編輯功能。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium tracking-[0.12em] text-[#F8F0DD] transition hover:bg-white/10"
              >
                今天
              </button>
              <button
                type="button"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium tracking-[0.12em] text-[#F8F0DD] transition hover:bg-white/10"
              >
                月
              </button>
              <button
                type="button"
                className="rounded-full bg-[linear-gradient(180deg,#FFF8ED_0%,#F4E8D7_100%)] px-5 py-3 text-sm font-semibold tracking-[0.12em] text-[#2D2B4A] shadow-[0_6px_18px_rgba(216,192,143,0.18)]"
              >
                週
              </button>
              <button
                type="button"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium tracking-[0.12em] text-[#F8F0DD] transition hover:bg-white/10"
              >
                日
              </button>
              <button
                type="button"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium tracking-[0.12em] text-[#F8F0DD] transition hover:bg-white/10"
              >
                時間表
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-[28px] border border-[#E8DECC] bg-white/90 p-6 shadow-[0_12px_36px_rgba(34,31,68,0.08)]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#9D8C69]">
                FILTERS
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#2A2A4A]">
                篩選條件
              </h2>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold tracking-[0.08em] text-[#312E54]">
                夥伴
              </h3>
              <div className="mt-4 grid gap-3">
                {teamMembers.map((member) => {
                  const isActive = selectedMember === member.name;

                  return (
                    <button
                      key={member.name}
                      type="button"
                      onClick={() => setSelectedMember(member.name)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                        isActive
                          ? "border-[#CDB27D] bg-[#F6EFE2] shadow-[0_8px_18px_rgba(205,178,125,0.16)]"
                          : "border-[#EEE6D8] bg-[#FCFAF7] hover:bg-[#F8F4EC]"
                      }`}
                    >
                      <span className="text-sm font-medium text-[#312E54]">
                        {member.name}
                      </span>
                      <span className={`h-3 w-3 rounded-full ${member.color}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold tracking-[0.08em] text-[#312E54]">
                事件類型
              </h3>
              <div className="mt-4 grid gap-3">
                {eventTypes.map((type) => {
                  const isActive = selectedType === type.name;

                  return (
                    <button
                      key={type.name}
                      type="button"
                      onClick={() => setSelectedType(type.name)}
                      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                        isActive
                          ? "border-[#CDB27D] bg-[#F6EFE2] shadow-[0_8px_18px_rgba(205,178,125,0.16)]"
                          : "border-[#EEE6D8] bg-[#FCFAF7] hover:bg-[#F8F4EC]"
                      }`}
                    >
                      <span className={`h-3 w-3 rounded-full ${type.color}`} />
                      <span className="text-sm font-medium text-[#312E54]">
                        {type.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <Link
              href="/partner-dashboard"
              className="mt-8 inline-flex text-sm font-medium text-[#7D6540] transition hover:text-[#5F4A2F]"
            >
              ← 返回後台首頁
            </Link>
          </aside>

          <section className="rounded-[28px] border border-[#E8DECC] bg-white/90 p-6 shadow-[0_12px_36px_rgba(34,31,68,0.08)]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#9D8C69]">
                  WEEK VIEW
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#2A2A4A]">
                  本週排程
                </h2>
              </div>

              <button
                type="button"
                onClick={openCreateModal}
                className="rounded-full bg-[linear-gradient(180deg,#4F4386_0%,#3F376E_100%)] px-5 py-3 text-sm font-semibold tracking-[0.12em] text-white shadow-[0_10px_24px_rgba(79,67,134,0.20)] transition hover:-translate-y-[1px]"
              >
                ＋ 新增事件
              </button>
            </div>

            <div className="mt-3 text-sm text-[#7B768E]">
              目前篩選：
              <span className="ml-2 rounded-full bg-[#F6EFE2] px-3 py-1 text-[#6D5A35]">
                {selectedMember}
              </span>
              <span className="ml-2 rounded-full bg-[#F6EFE2] px-3 py-1 text-[#6D5A35]">
                {selectedType}
              </span>
            </div>

            <div className="mt-8 overflow-x-auto">
              <div className="min-w-[900px]">
                <div className="grid grid-cols-[90px_repeat(5,minmax(0,1fr))] border-b border-[#EEE6D8] pb-4">
                  <div />
                  {weekDays.map((item) => (
                    <div key={`${item.day}-${item.date}`} className="px-3">
                      <p className="text-sm font-semibold text-[#312E54]">
                        {item.day}
                      </p>
                      <p className="mt-1 text-sm text-[#7B768E]">{item.date}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-[90px_repeat(5,minmax(0,1fr))] gap-y-3">
                  {timeSlots.map((slot) => (
                    <Fragment key={slot}>
                      <div className="flex items-start pt-3 text-sm font-medium text-[#8A8399]">
                        {slot}
                      </div>

                      {weekDays.map((day) => {
                        const dayEvents = visibleEvents.filter(
                          (event) => event.day === day.day && event.start === slot
                        );

                        return (
                          <div
                            key={`${day.day}-${slot}`}
                            className="min-h-[84px] border-b border-[#F1ECE2] px-3 py-2"
                          >
                            <div className="grid gap-2">
                              {dayEvents.map((event) => (
                                <div
                                  key={event.id}
                                  role="button"
                                  tabIndex={0}
                                  onClick={() => openEditModal(event)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      openEditModal(event);
                                    }
                                  }}
                                  className={`cursor-pointer rounded-2xl border p-3 transition hover:shadow-[0_8px_18px_rgba(50,45,84,0.10)] ${event.bg} ${event.border}`}
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-2">
                                      <span
                                        className={`h-2.5 w-2.5 rounded-full ${event.teacherDot}`}
                                      />
                                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#7C7690]">
                                        {event.type}
                                      </span>
                                    </div>

                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteEvent(event);
                                      }}
                                      className="rounded-full px-2 py-0.5 text-xs font-semibold text-[#7C7690] transition hover:bg-white/60 hover:text-[#2E2A4E]"
                                      aria-label={`刪除 ${event.title}`}
                                    >
                                      ×
                                    </button>
                                  </div>

                                  <p className="mt-2 text-sm font-semibold text-[#2E2A4E]">
                                    {event.title}
                                  </p>
                                  <p className="mt-1 text-xs text-[#6C6780]">
                                    {event.time}
                                  </p>
                                  <p className="mt-1 text-xs text-[#6C6780]">
                                    {event.teacher}
                                  </p>
                                  {event.location ? (
                                    <p className="mt-1 text-xs text-[#6C6780]">
                                      地點：{event.location}
                                    </p>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#15172f]/50 px-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[28px] border border-[#E8DECC] bg-white p-6 shadow-[0_20px_60px_rgba(17,24,58,0.22)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#9D8C69]">
                  {editingEventId ? "EDIT EVENT" : "NEW EVENT"}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#2A2A4A]">
                  {editingEventId ? "編輯事件" : "新增事件"}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => {
                  setOpenModal(false);
                  resetForm();
                }}
                className="rounded-full border border-[#E8DECC] px-3 py-1 text-sm text-[#6A6680] transition hover:bg-[#F8F4EC]"
              >
                關閉
              </button>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#3A3758]">
                  事件標題
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => updateForm("title", e.target.value)}
                  placeholder="例如：家長諮詢 / 團隊會議"
                  className="w-full rounded-2xl border border-[#DDD4C3] bg-[#FCFAF6] px-4 py-3 text-[#2A2A4A] outline-none transition placeholder:text-[#A8A0B2] focus:border-[#B79B63] focus:ring-2 focus:ring-[#D9C08C]/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#3A3758]">
                  日期
                </label>
                <select
                  value={form.date}
                  onChange={(e) => updateForm("date", e.target.value)}
                  className="w-full rounded-2xl border border-[#DDD4C3] bg-[#FCFAF6] px-4 py-3 text-[#2A2A4A] outline-none transition focus:border-[#B79B63] focus:ring-2 focus:ring-[#D9C08C]/30"
                >
                  <option value="2026-06-03">2026/06/03 (Mon)</option>
                  <option value="2026-06-04">2026/06/04 (Tue)</option>
                  <option value="2026-06-05">2026/06/05 (Wed)</option>
                  <option value="2026-06-06">2026/06/06 (Thu)</option>
                  <option value="2026-06-07">2026/06/07 (Fri)</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#3A3758]">
                  事件類型
                </label>
                <select
                  value={form.type}
                  onChange={(e) => updateForm("type", e.target.value)}
                  className="w-full rounded-2xl border border-[#DDD4C3] bg-[#FCFAF6] px-4 py-3 text-[#2A2A4A] outline-none transition focus:border-[#B79B63] focus:ring-2 focus:ring-[#D9C08C]/30"
                >
                  <option value="">請選擇</option>
                  <option value="上課">上課</option>
                  <option value="家長諮詢">家長諮詢</option>
                  <option value="會議">會議</option>
                  <option value="行政工作">行政工作</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#3A3758]">
                  開始時間
                </label>
                <select
                  value={form.start}
                  onChange={(e) => updateForm("start", e.target.value)}
                  className="w-full rounded-2xl border border-[#DDD4C3] bg-[#FCFAF6] px-4 py-3 text-[#2A2A4A] outline-none transition focus:border-[#B79B63] focus:ring-2 focus:ring-[#D9C08C]/30"
                >
                  <option value="">請選擇</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#3A3758]">
                  結束時間
                </label>
                <input
                  type="time"
                  value={form.end}
                  onChange={(e) => updateForm("end", e.target.value)}
                  className="w-full rounded-2xl border border-[#DDD4C3] bg-[#FCFAF6] px-4 py-3 text-[#2A2A4A] outline-none transition focus:border-[#B79B63] focus:ring-2 focus:ring-[#D9C08C]/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#3A3758]">
                  負責夥伴
                </label>
                <select
                  value={form.teacher}
                  onChange={(e) => updateForm("teacher", e.target.value)}
                  className="w-full rounded-2xl border border-[#DDD4C3] bg-[#FCFAF6] px-4 py-3 text-[#2A2A4A] outline-none transition focus:border-[#B79B63] focus:ring-2 focus:ring-[#D9C08C]/30"
                >
                  <option value="">請選擇</option>
                  <option value="王老師">王老師</option>
                  <option value="陳老師">陳老師</option>
                  <option value="Amy">Amy</option>
                  <option value="全體夥伴">全體夥伴</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#3A3758]">
                  地點
                </label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => updateForm("location", e.target.value)}
                  placeholder="例如：會議室 / 線上"
                  className="w-full rounded-2xl border border-[#DDD4C3] bg-[#FCFAF6] px-4 py-3 text-[#2A2A4A] outline-none transition placeholder:text-[#A8A0B2] focus:border-[#B79B63] focus:ring-2 focus:ring-[#D9C08C]/30"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#3A3758]">
                  備註
                </label>
                <textarea
                  rows={4}
                  value={form.notes}
                  onChange={(e) => updateForm("notes", e.target.value)}
                  placeholder="可填寫補充說明..."
                  className="w-full rounded-2xl border border-[#DDD4C3] bg-[#FCFAF6] px-4 py-3 text-[#2A2A4A] outline-none transition placeholder:text-[#A8A0B2] focus:border-[#B79B63] focus:ring-2 focus:ring-[#D9C08C]/30"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  setOpenModal(false);
                  resetForm();
                }}
                className="rounded-full border border-[#D9CCB2] px-5 py-3 text-sm font-medium text-[#6A6680] transition hover:bg-[#F8F4EC]"
              >
                取消
              </button>
              <button
                type="button"
                onClick={handleSaveEvent}
                className="rounded-full bg-[linear-gradient(180deg,#4F4386_0%,#3F376E_100%)] px-6 py-3 text-sm font-semibold tracking-[0.12em] text-white shadow-[0_10px_24px_rgba(79,67,134,0.20)] transition hover:-translate-y-[1px]"
              >
                {editingEventId ? "更新事件" : "儲存事件"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}