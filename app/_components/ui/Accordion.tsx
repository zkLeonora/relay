"use client";

import { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { animate } from "animejs";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div role="list" className="flex flex-col gap-2 py-2">
      {items.map((item, index) => (
        <AccordionRow
          key={index}
          index={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  index,
  item,
  isOpen,
  onToggle,
}: {
  index: number;
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const isFirstRender = useRef(true);

  const id = `faq-${index}`;

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const contentEl = contentRef.current;
    const iconEl = iconRef.current;
    const textEl = textRef.current;

    // Animate Icon Rotation with Anime.js
    if (iconEl) {
      animate(iconEl, {
        rotate: isOpen ? 45 : 0,
        duration: 250,
        ease: "outCubic",
      });
    }

    // Animate Content Height and Opacity with Anime.js
    if (contentEl) {
      if (isOpen) {
        contentEl.style.display = "block";
        const targetHeight = contentEl.scrollHeight;

        animate(contentEl, {
          height: [0, targetHeight],
          opacity: [0, 1],
          duration: 350,
          ease: "outCubic",
          onComplete: () => {
            contentEl.style.height = "auto";
          },
        });

        if (textEl) {
          animate(textEl, {
            opacity: [0, 1],
            translateY: [-10, 0],
            duration: 320,
            delay: 40,
            ease: "outCubic",
          });
        }
      } else {
        const currentHeight = contentEl.offsetHeight;

        animate(contentEl, {
          height: [currentHeight, 0],
          opacity: [1, 0],
          duration: 280,
          ease: "outCubic",
          onComplete: () => {
            contentEl.style.display = "none";
          },
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      role="listitem"
      className="border-b border-[#e6e6e6] last:border-b-0 overflow-hidden transition-colors"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        id={`${id}-btn`}
        className="flex items-center justify-between w-full py-4 bg-transparent border-none cursor-pointer text-left gap-4 active:scale-[0.997] transition-transform"
      >
        <span className="text-[0.9375rem] font-bold tracking-tight leading-snug text-[#111111]">
          {item.question}
        </span>
        <span
          ref={iconRef}
          className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-[#e6e6e6] bg-[#fafaf8] text-[#111111]"
        >
          <Plus size={14} />
        </span>
      </button>

      <div
        id={id}
        ref={contentRef}
        role="region"
        aria-labelledby={`${id}-btn`}
        style={{ display: "none", height: 0, opacity: 0 }}
        className="overflow-hidden"
      >
        <p
          ref={textRef}
          className="pb-4 text-[#6b6b6b] text-[0.9375rem] leading-[1.75] max-w-[640px]"
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}
