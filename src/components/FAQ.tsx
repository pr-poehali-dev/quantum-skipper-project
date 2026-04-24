import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С чего начать, если у меня есть участок, но нет проекта?",
    answer:
      "Начните с бесплатной консультации. Мы приедем на участок, изучим его особенности — рельеф, стороны света, соседей — и расскажем, какой дом здесь можно построить. После этого составим техническое задание и приступим к эскизному проекту.",
  },
  {
    question: "Сколько стоит проект частного дома?",
    answer:
      "Стоимость архитектурного проекта зависит от площади, сложности и состава документации. Ориентировочно — от 1 500 до 3 500 рублей за квадратный метр. Точную цифру называем после знакомства с задачей. Стоимость строительства под ключ рассчитывается отдельно по смете.",
  },
  {
    question: "Сколько времени займёт строительство?",
    answer:
      "Типичный дом площадью 200–350 м² строится от 10 до 16 месяцев с момента начала земляных работ. На финальные сроки влияют сложность конструктива, выбранные материалы и сезонность. Мы фиксируем сроки в договоре и несём за них ответственность.",
  },
  {
    question: "Вы строите или только проектируете?",
    answer:
      "Мы предлагаем оба варианта. Можно заказать только архитектурный проект — мы передадим вам полный пакет документации. А можно поручить нам и строительство: тогда мы ведём объект от первого колышка до момента заселения.",
  },
  {
    question: "Можно ли изменить планировку в процессе строительства?",
    answer:
      "Небольшие корректировки возможны на этапе согласования проекта — до начала строительства. После начала работ изменения могут повлиять на сроки и стоимость. Именно поэтому мы уделяем особое внимание проектированию: лучше сто раз поменять на бумаге, чем один раз — в стене.",
  },
  {
    question: "Работаете ли вы за пределами Московской области?",
    answer:
      "Да. Мы реализуем проекты по всей России. Выезд на участок входит в стоимость проектирования при удалённости до 200 км от Москвы. Для более дальних регионов организуем выезд отдельно — обсуждается индивидуально.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}